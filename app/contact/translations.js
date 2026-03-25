const translations = {
    el: {
      // ── Breadcrumb ──────────────────────────────────────────────
      breadcrumb: {
        home: 'Αρχική',
        contact: '// Επικοινωνία',
      },
  
      // ── Hero ────────────────────────────────────────────────────
      hero: {
        title: 'Ας Χτίσουμε Μαζί',
        subtitle: 'Επικοινωνήστε μαζί μας για να συζητήσουμε το επόμενο έργο σας.',
      },
  
      // ── Contact Form ─────────────────────────────────────────────
      form: {
        sectionTitle: 'Φόρμα Επικοινωνίας',
        fields: {
          name: {
            label: 'Ονοματεπώνυμο *',
            placeholder: 'Εισάγετε το όνομά σας',
          },
          email: {
            label: 'Email *',
            placeholder: 'email@example.com',
          },
          phone: {
            label: 'Τηλέφωνο *',
            placeholder: '+30 694 XXX XXXX',
          },
          projectType: {
            label: 'Τύπος Έργου *',
            placeholder: 'Επιλέξτε τύπο έργου',
          },
          sqm: {
            label: 'Τετραγωνικά Μέτρα (m²) *',
            placeholder: 'π.χ. 200',
          },
          location: {
            label: 'Τοποθεσία Έργου',
            placeholder: 'π.χ. Αθήνα, Γλυφάδα',
          },
          message: {
            label: 'Μήνυμα',
            placeholder: 'Περιγράψτε συνοπτικά το έργο ή την ανάγκη σας.',
          },
        },
        submitBtn: 'Αποστολή Μηνύματος',
        submittingBtn: 'Αποστολή...',
        successMessage: 'Το μήνυμά σας στάλθηκε επιτυχώς!',
        successDescription: 'Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.',
      },
  
      // ── Project Types ────────────────────────────────────────────
      projectTypes: [
        { value: 'residential', label: 'Κατοικία' },
        { value: 'apartment',   label: 'Πολυκατοικία' },
        { value: 'commercial',  label: 'Επαγγελματικό Κτίριο' },
        { value: 'funding',     label: 'Επένδυση'},
        { value: 'other',       label: 'Άλλο' },
      ],
  
      // ── Contact Info Cards ───────────────────────────────────────
      info: {
        address: {
          title: 'Έδρα & Χώρος Δραστηριότητας',
          lines: ['Μεγαρίδος 125', 'Ασπρόπυργος, Αττική', 'Ελλάδα'],
        },
        phone: {
          title: 'Τηλεφωνική Επικοινωνία',
          mobile: 'Κινητό',
          mobileNumber: '+30 694 820 9440',
          hours: 'Δευτέρα – Παρασκευή\n08:00 – 18:00',
        },
        email: {
          title: 'Email',
          address: 'kaiseromnia03@gmail.com',
        },
      },
  
      // ── Map ──────────────────────────────────────────────────────
      map: {
        title: 'Kaiser Omnia - Ασπρόπυργος',
      },
  
      // ── FAQ ──────────────────────────────────────────────────────
      faq: {
        sectionLabel: 'Απορίες',
        sectionTitle: 'Συχνές Ερωτήσεις',
        items: [
          {
            question: 'Πόσο διαρκεί η κατασκευή ενός σπιτιού;',
            answer: 'Με την τεχνολογία Διπλών Τοίχων, μια τυπική κατοικία 150-200 m² ολοκληρώνεται σε 4-6 μήνες, που είναι περίπου 50% ταχύτερα από τις συμβατικές μεθόδους κατασκευής.',
          },
          {
            question: 'Τι περιλαμβάνει η τιμή ανά τετραγωνικό μέτρο;',
            answer: 'Η τιμή περιλαμβάνει τον φέροντα οργανισμό, τοιχοποιία, ηλεκτρολογικά, υδραυλικά, θερμομόνωση, υγρομόνωση και βασικά φινιρίσματα. Τα ειδικά φινιρίσματα (κουζίνα, μπάνια, δάπεδα) κοστολογούνται ξεχωριστά ανάλογα με τις επιλογές σας.',
          },
          {
            question: 'Αναλαμβάνετε έργα εκτός Αττικής;',
            answer: 'Ναι, αναλαμβάνουμε έργα σε όλη την Ελλάδα. Έχουμε ολοκληρώσει έργα σε όλη την ηπειρωτική χώρα καθώς και στα νησιά, συμπεριλαμβανομένων της Κρήτης, των Κυκλάδων, των Δωδεκανήσων και των Ιονίων.',
          },
          {
            question: 'Ποιες εγγυήσεις παρέχετε;',
            answer: 'Παρέχουμε 10ετή εγγύηση για τον φέροντα οργανισμό, 5ετή για τη στεγανοποίηση και 2ετή για τα ηλεκτρομηχανολογικά. Επιπλέον, όλα τα έργα μας είναι ασφαλισμένα κατά τη διάρκεια της κατασκευής.',
          },
          {
            question: 'Μπορώ να επιλέξω τα υλικά φινιρίσματος;',
            answer: 'Απολύτως! Συνεργαζόμαστε μαζί σας για την επιλογή όλων των υλικών φινιρίσματος. Διαθέτουμε εκθεσιακό χώρο με δείγματα και συνεργαζόμαστε με τους καλύτερους προμηθευτές για να καλύψουμε κάθε αισθητική και οικονομική προτίμηση.',
          },
          {
            question: 'Χρειάζομαι οικοδομική άδεια;',
            answer: 'Ναι, κάθε νέα κατασκευή απαιτεί οικοδομική άδεια. Αναλαμβάνουμε εμείς όλη τη διαδικασία αδειοδότησης, συμπεριλαμβανομένων των αρχιτεκτονικών σχεδίων, της στατικής μελέτης και της υποβολής στην πολεοδομία.',
          },
          {
            question: 'Πώς λειτουργεί η τεχνολογία Διπλών Τοίχων;',
            answer: 'Τα Διπλά Τοιχώματα είναι προκατασκευασμένα πάνελ σκυροδέματος που κατασκευάζονται στο εργοστάσιό μας. Μεταφέρονται στο εργοτάξιο, τοποθετούνται και γεμίζονται με σκυρόδεμα, δημιουργώντας μια μονολιθική, αντισεισμική κατασκευή με εξαιρετική θερμομόνωση.',
          },
          {
            question: 'Υπάρχει δυνατότητα χρηματοδότησης;',
            answer: 'Συνεργαζόμαστε με τις μεγαλύτερες τράπεζες της Ελλάδας και μπορούμε να σας βοηθήσουμε στη διαδικασία έγκρισης στεγαστικού δανείου. Επίσης, προσφέρουμε ευέλικτους τρόπους πληρωμής σε δόσεις κατά τη διάρκεια της κατασκευής.',
          },
        ],
      },
    },
  
    // ════════════════════════════════════════════════════════════════
    en: {
      // ── Breadcrumb ──────────────────────────────────────────────
      breadcrumb: {
        home: 'Home',
        contact: '// Contact',
      },
  
      // ── Hero ────────────────────────────────────────────────────
      hero: {
        title: "Let's Build Together",
        subtitle: 'Contact us to discuss your next project.',
      },
  
      // ── Contact Form ─────────────────────────────────────────────
      form: {
        sectionTitle: 'Contact Form',
        fields: {
          name: {
            label: 'Full Name *',
            placeholder: 'Enter your name',
          },
          email: {
            label: 'Email *',
            placeholder: 'email@example.com',
          },
          phone: {
            label: 'Phone *',
            placeholder: '+30 694 XXX XXXX',
          },
          projectType: {
            label: 'Project Type *',
            placeholder: 'Select project type',
          },
          sqm: {
            label: 'Square Metres (m²) *',
            placeholder: 'e.g. 200',
          },
          location: {
            label: 'Project Location',
            placeholder: 'e.g. Athens, Glyfada',
          },
          message: {
            label: 'Message',
            placeholder: 'Briefly describe your project or requirement.',
          },
        },
        submitBtn: 'Send Message',
        submittingBtn: 'Sending...',
        successMessage: 'Your message was sent successfully!',
        successDescription: 'We will get back to you as soon as possible.',
      },
  
      // ── Project Types ────────────────────────────────────────────
      projectTypes: [
        { value: 'residential', label: 'Residence' },
        { value: 'apartment',   label: 'Apartment Building' },
        { value: 'commercial',  label: 'Commercial Building' },
        { value: 'funding',     label: 'investment'},
        { value: 'other',       label: 'Other' },
      ],
  
      // ── Contact Info Cards ───────────────────────────────────────
      info: {
        address: {
          title: 'Headquarters & Area of Operations',
          lines: ['Megaridos 125', 'Aspropyrgos, Attica', 'Greece'],
        },
        phone: {
          title: 'Phone Contact',
          mobile: 'Mobile',
          mobileNumber: '+30 694 820 9440',
          hours: 'Monday – Friday\n08:00 – 18:00',
        },
        email: {
          title: 'Email',
          address: 'kaiseromnia03@gmail.com',
        },
      },
  
      // ── Map ──────────────────────────────────────────────────────
      map: {
        title: 'Kaiser Omnia - Aspropyrgos',
      },
  
      // ── FAQ ──────────────────────────────────────────────────────
      faq: {
        sectionLabel: 'FAQ',
        sectionTitle: 'Frequently Asked Questions',
        items: [
          {
            question: 'How long does it take to build a house?',
            answer: 'With Double Wall technology, a typical 150–200 m² residence is completed in 4–6 months, which is approximately 50% faster than conventional construction methods.',
          },
          {
            question: 'What is included in the price per square metre?',
            answer: 'The price includes the structural frame, masonry, electrical, plumbing, thermal insulation, waterproofing and basic finishes. Special finishes (kitchen, bathrooms, flooring) are priced separately depending on your choices.',
          },
          {
            question: 'Do you take on projects outside Attica?',
            answer: 'Yes, we undertake projects throughout Greece. We have completed projects across the mainland as well as on the islands, including Crete, the Cyclades, the Dodecanese and the Ionian Islands.',
          },
          {
            question: 'What warranties do you provide?',
            answer: 'We provide a 10-year warranty on the structural frame, 5 years on waterproofing, and 2 years on electromechanical installations. In addition, all our projects are insured during construction.',
          },
          {
            question: 'Can I choose the finishing materials?',
            answer: 'Absolutely! We work with you to select all finishing materials. We have a showroom with samples and work with the best suppliers to meet every aesthetic and budget preference.',
          },
          {
            question: 'Do I need a building permit?',
            answer: 'Yes, every new construction requires a building permit. We handle the entire licensing process, including architectural drawings, structural studies and submission to the urban planning authority.',
          },
          {
            question: 'How does Double Wall technology work?',
            answer: 'Double Walls are prefabricated concrete panels manufactured in our factory. They are transported to the construction site, assembled and filled with concrete, creating a monolithic, earthquake-resistant structure with excellent thermal insulation.',
          },
          {
            question: 'Is financing available?',
            answer: 'We work with the largest banks in Greece and can assist you with the mortgage approval process. We also offer flexible instalment payment plans during construction.',
          },
        ],
      },
    },
  };
  
  export default translations;