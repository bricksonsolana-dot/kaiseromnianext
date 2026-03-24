import { useState, useEffect, useRef } from 'react';
import { Calculator, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Slider } from '../components/ui/slider';
import { Link } from 'react-router-dom';

const buildingTypes = [
  { value: 'residential', label: 'Κατοικία', price: 1200 },
  { value: 'apartment', label: 'Πολυκατοικία', price: 1000 },
  { value: 'commercial', label: 'Εμπορικό Κτίριο', price: 1400 },
  { value: 'industrial', label: 'Βιομηχανικό Κτίριο', price: 900 },
  { value: 'hotel', label: 'Ξενοδοχείο / Resort', price: 1600 },
  { value: 'special', label: 'Ειδική Κατασκευή', price: 1800 },
];

const finishLevels = [
  { value: 'basic', label: 'Βασικό', multiplier: 1.0 },
  { value: 'high', label: 'Υψηλών Προδιαγραφών', multiplier: 1.3 },
  { value: 'premium', label: 'Premium / Luxury', multiplier: 1.6 },
];

export const CostCalculator = () => {
  const [squareMeters, setSquareMeters] = useState(150);
  const [buildingType, setBuildingType] = useState('residential');
  const [finishLevel, setFinishLevel] = useState('basic');
  const [displayCost, setDisplayCost] = useState(0);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Υπολογισμός κόστους
  const calculatedCost = (() => {
    const type = buildingTypes.find((t) => t.value === buildingType);
    const finish = finishLevels.find((f) => f.value === finishLevel);
    if (type && finish) {
      return Math.round(squareMeters * type.price * finish.multiplier);
    }
    return 0;
  })();

  // Animate τον αριθμό όταν αλλάζει το calculatedCost
  useEffect(() => {
    const duration = 500;
    const steps = 30;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    let startValue = displayCost;
    const endValue = calculatedCost;
    const increment = (endValue - startValue) / steps;
    
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayCost(endValue);
        clearInterval(timer);
      } else {
        setDisplayCost(Math.round(startValue + increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculatedCost]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-xl p-8 lg:p-10 border border-gray-100"
      data-testid="cost-calculator"
    >
      <div className="flex items-center space-x-3 mb-8">
        <div className="bg-steel/10 p-3 rounded-lg">
          <Calculator className="w-6 h-6 text-steel" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl text-navy">
            Υπολογίστε το Κόστος
          </h3>
          <p className="text-concrete text-sm">
            Λάβετε μια ενδεικτική προσφορά σε δευτερόλεπτα
          </p>
        </div>
      </div>

      <div className="space-y-6">
 {/* Square Meters Input */}
<div>
  <label className="block text-sm font-medium text-charcoal mb-3">
    Τετραγωνικά Μέτρα (m²)
  </label>
  <div className="flex items-center space-x-4">
    <Slider
      data-testid="sqm-slider"
      value={[squareMeters]}
      onValueChange={(value) => setSquareMeters(value[0])}
      min={0}
      max={5000}
      step={10}
      className="flex-1"
    />
    <div className="w-24 text-center">
      <input
        data-testid="sqm-input"
        type="text"
        inputMode="numeric"
        value={squareMeters === 0 ? '' : squareMeters}
        onChange={(e) => {
          const inputValue = e.target.value;
          
          // Αν είναι κενό, βάλε 0
          if (inputValue === '') {
            setSquareMeters(0);
            return;
          }
          
          // Αφαίρεσε leading zeros και μη-αριθμητικούς χαρακτήρες
          const cleanValue = inputValue.replace(/^0+/, '').replace(/\D/g, '');
          
          if (cleanValue === '') {
            setSquareMeters(0);
            return;
          }
          
          const numValue = parseInt(cleanValue, 10);
          setSquareMeters(Math.min(5000, numValue));
        }}
        className="w-full px-3 py-2 border border-gray-200 rounded-md text-center font-semibold text-navy focus:outline-none focus:ring-2 focus:ring-steel/50"
        placeholder="m²"
      />
    </div>
  </div>
  {/* Helper text */}
  <p className="text-xs text-concrete mt-2">
    Μέγιστο: 5.000 m²
  </p>
</div>

        {/* Building Type */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-3">
            Τύπος Κατασκευής
          </label>
          <Select value={buildingType} onValueChange={setBuildingType}>
            <SelectTrigger data-testid="building-type-select" className="w-full">
              <SelectValue placeholder="Επιλέξτε τύπο" />
            </SelectTrigger>
            <SelectContent>
              {buildingTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label} (€{type.price}/m²)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Finish Level */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-3">
            Επίπεδο Φινιρίσματος
          </label>
          <Select value={finishLevel} onValueChange={setFinishLevel}>
            <SelectTrigger data-testid="finish-level-select" className="w-full">
              <SelectValue placeholder="Επιλέξτε επίπεδο" />
            </SelectTrigger>
            <SelectContent>
              {finishLevels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label} (x{level.multiplier})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Result */}
        <div className="bg-gradient-to-r from-navy to-charcoal rounded-lg p-6 text-center">
          <p className="text-gray-300 text-sm mb-2">Ενδεικτικό Κόστος</p>
          <p 
            data-testid="calculated-cost"
            className="text-4xl lg:text-5xl font-heading font-bold text-white"
          >
            €{displayCost.toLocaleString('el-GR')}
          </p>
          <p className="text-gray-400 text-xs mt-3">
            * Η τιμή είναι ενδεικτική. Για ακριβή προσφορά, επικοινωνήστε μαζί μας.
          </p>
        </div>

        {/* CTA */}
        <Link to="/contact">
          <Button 
            data-testid="request-quote-btn"
            className="w-full bg-steel hover:bg-steel/90 text-white font-semibold py-6"
          >
            Ζητήστε Αναλυτική Προσφορά
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CostCalculator;
