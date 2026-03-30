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
        sectionLabel: '// Επικοινωνία',
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
        resetBtn: 'Αποστολή νέου μηνύματος',
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
          number: '+30 694 820 9440',
          hours: 'Δευτέρα – Παρασκευή, 08:00 – 18:00',
        },
        email: {
          title: 'Email',
          addresses: ['info@kaiser-omnia.gr', ],
        },
      },

      // ── Map ──────────────────────────────────────────────────────
      map: {
        title: 'Kaiser Omnia - Ασπρόπυργος',
        src: 'https://maps.google.com/maps?q=%CE%9C%CE%B5%CE%B3%CE%B1%CF%81%CE%AF%CE%B4%CE%BF%CF%82+125,+%CE%91%CF%83%CF%80%CF%81%CF%8C%CF%80%CF%85%CF%81%CE%B3%CE%BF%CF%82,+%CE%91%CF%84%CF%84%CE%B9%CE%BA%CE%AE,+%CE%95%CE%BB%CE%BB%CE%AC%CE%B4%CE%B1&t=&z=16&ie=UTF8&iwloc=&output=embed',
      },
  
      // ── FAQ ──────────────────────────────────────────────────────
      faq: {
        sectionLabel: 'Απορίες',
        sectionTitle: 'Συχνές Ερωτήσεις',
        items: [
          {
            question: 'Ποιος είναι ο χρόνος υλοποίησης ενός έργου;',
            answer: 'Ο χρόνος υλοποίησης καθορίζεται από το μέγεθος, την πολυπλοκότητα και τις ιδιαίτερες απαιτήσεις του έργου. Ενδεικτικά, μια τυπική κατοικία ολοκληρώνεται εντός 6–8 μηνών από την έναρξη των εργασιών.',
          },
          {
            question: 'Πώς διαμορφώνεται το συνολικό κόστος κατασκευής;',
            answer: 'Το κόστος διαμορφώνεται κατόπιν τεχνικής αξιολόγησης, βάσει της μελέτης, των επιλεγμένων υλικών και των ειδικών απαιτήσεων κάθε έργου.',
          },
          {
            question: 'Ποιο είναι το εύρος δραστηριοποίησης της εταιρείας;',
            answer: 'Η εταιρεία αναλαμβάνει έργα σε όλη την Ελλάδα, κατόπιν αξιολόγησης των απαιτήσεων και της τοποθεσίας του έργου.',
          },
          {
            question: 'Τι επίπεδο εγγυήσεων παρέχεται;',
            answer: 'Παρέχονται εγγυήσεις κατασκευής σύμφωνα με τις ισχύουσες τεχνικές προδιαγραφές και τους όρους της σύμβασης.',
          },
          {
            question: 'Υπάρχει δυνατότητα εξατομίκευσης του έργου;',
            answer: 'Κάθε έργο προσαρμόζεται στις ανάγκες του πελάτη, με επιλογές σε υλικά και επιμέρους στοιχεία της κατασκευής, με σταθερή εφαρμογή του συστήματος double wall.',
          },
          {
            question: 'Ποιες είναι οι προϋποθέσεις για την έναρξη κατασκευής;',
            answer: 'Η έναρξη των εργασιών προϋποθέτει την έκδοση των απαιτούμενων αδειών και την ολοκλήρωση των σχετικών μελετών.',
          },
          {
            question: 'Ποια είναι η τεχνική προσέγγιση της εταιρείας στην κατασκευή;',
            answer: 'Η εταιρεία εφαρμόζει την τεχνολογία Διπλών Τοίχων (Double Wall), επιτυγχάνοντας αυξημένη ακρίβεια κατασκευής, ενιαία δομική συμπεριφορά και περιορισμό κατασκευαστικών αποκλίσεων.',
          },
          {
            question: 'Μπορώ να επενδύσω στην ανάπτυξη ενός ακινήτου;',
            answer: 'Η εταιρεία υποστηρίζει επενδυτικά έργα ακινήτων, παρέχοντας ολοκληρωμένη τεχνική καθοδήγηση από τη μελέτη έως την κατασκευή.',
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
        subtitle: 'Contact us to discuss your upcoming project.',
      },
  
      // ── Contact Form ─────────────────────────────────────────────
      form: {
        sectionLabel: '// Contact',
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
        resetBtn: 'Send another message',
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
          number: '+30 694 820 9440',
          hours: 'Monday – Friday, 08:00 – 18:00',
        },
        email: {
          title: 'Email',
          addresses: ['info@kaiser-omnia.gr', ],
        },
      },

      // ── Map ──────────────────────────────────────────────────────
      map: {
        title: 'Kaiser Omnia - Aspropyrgos',
        src: 'https://maps.google.com/maps?q=%CE%9C%CE%B5%CE%B3%CE%B1%CF%81%CE%AF%CE%B4%CE%BF%CF%82+125,+%CE%91%CF%83%CF%80%CF%81%CF%8C%CF%80%CF%85%CF%81%CE%B3%CE%BF%CF%82,+%CE%91%CF%84%CF%84%CE%B9%CE%BA%CE%AE,+%CE%95%CE%BB%CE%BB%CE%AC%CE%B4%CE%B1&t=&z=16&ie=UTF8&iwloc=&output=embed',
      },
  
      // ── FAQ ──────────────────────────────────────────────────────
      faq: {
        sectionLabel: 'FAQ',
        sectionTitle: 'Frequently Asked Questions',
        items: [
          {
            question: 'What is the typical project timeline?',
            answer: 'The project timeline depends on the size, complexity, and specific requirements of each project. As an indication, a typical residential project is completed within 6–8 months from the start of construction.',
          },
          {
            question: 'How is the total construction cost determined?',
            answer: 'The total cost is determined following a technical evaluation, based on the design, selected materials, and the specific requirements of each project.',
          },
          {
            question: 'What is the company’s area of operation?',
            answer: 'The company undertakes projects across Greece, subject to evaluation of project requirements and location.',
          },
          {
            question: 'What level of warranties is provided?',
            answer: 'Construction warranties are provided in accordance with applicable technical standards and contractual terms.',
          },
          {
            question: 'Is project customization possible?',
            answer: 'Each project is tailored to the client’s needs, with flexibility in material selection and construction details, while maintaining the consistent application of the Double Wall system.',
          },
          {
            question: 'What are the requirements to start construction?',
            answer: 'The commencement of works requires the issuance of all necessary permits and the completion of the relevant design studies.',
          },
          {
            question: 'What is the company’s technical approach to construction?',
            answer: 'The company applies Double Wall technology, achieving enhanced construction accuracy, unified structural performance, and reduced construction deviations.',
          },
          {
            question: 'Can I invest in a real estate development project?',
            answer: 'The company supports real estate investment projects, providing comprehensive technical guidance from design through to construction.',
          },
        ],
      },
    },
  };
  
  export default translations;