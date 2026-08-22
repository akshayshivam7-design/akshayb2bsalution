export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  column: string;
  shortDesc: string;
  fullDesc: string;
  timeline: string;
  popular?: boolean;
  governmentFee?: string;
  documents: string[];
  benefits: string[];
  iconCode?: string;
}

export interface MegaCategory {
  id: string;
  title: string;
  shortTitle: string;
  promoTitle: string;
  promoDesc: string;
  promoBadge: string;
  promoImg: string;
  columns: {
    title: string;
    items: string[];
  }[];
}

export const MEGA_MENU_CATEGORIES: MegaCategory[] = [
  {
    id: "business-startup",
    title: "Business Startup",
    shortTitle: "Startup",
    promoTitle: "Launch In 7 Days With AI",
    promoDesc: "End-to-end incorporation, DIN, PAN, TAN & Digital Signature with zero hassle.",
    promoBadge: "Fast Track",
    promoImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
    columns: [
      {
        title: "Domestic",
        items: [
          "Sole Proprietorship Firm",
          "Partnership Firm",
          "Limited Liability Partnership",
          "One Person Company",
          "Private Limited Company",
          "Producer Company Registration",
          "Nidhi Company",
          "Section 8 Company",
        ],
      },
      {
        title: "International",
        items: [
          "Company Incorporation in Dubai/UAE",
          "Company Incorporation in Singapore",
          "Company Incorporation in Hong Kong",
          "Company Incorporation in UK",
          "Company Incorporation in USA",
          "Company Incorporation in Netherlands",
        ],
      },
      {
        title: "NGO",
        items: [
          "NGO Registration",
          "Society Registration",
          "Darpan Registration",
          "Trust Registration",
          "12A & 80G Registration",
          "CSR 1 Registration",
          "FCRA Registration",
        ],
      },
    ],
  },
  {
    id: "registration-license",
    title: "Registration & License",
    shortTitle: "Reg & License",
    promoTitle: "FSSAI & Regulatory Approvals",
    promoDesc: "Get central, state & municipal licenses with automated compliance verification.",
    promoBadge: "Govt Recognized",
    promoImg: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80",
    columns: [
      {
        title: "Food Business",
        items: [
          "FSSAI Registration",
          "FSSAI State License",
          "FSSAI Central License",
          "FSSAI Returns",
          "FSSAI Renewal",
        ],
      },
      {
        title: "Labour Department",
        items: [
          "Shop and Establishment Certificate",
          "Trade License",
          "Employee Provident Fund Registration",
          "ESI Registration",
        ],
      },
      {
        title: "Initial Registration",
        items: [
          "Digital Signature Certificate",
          "MSME Registration",
          "Startup India Registration",
          "Make In India Registration",
          "NSIC Registration",
          "BIS Registration",
          "Barcode Registration",
          "ISBN Registration",
        ],
      },
      {
        title: "License",
        items: [
          "RERA Registration",
          "POSH Compliance",
        ],
      },
    ],
  },
  {
    id: "import-export",
    title: "Import & Export",
    shortTitle: "Import & Export",
    promoTitle: "Global Trade Enablement",
    promoDesc: "IEC code, RCMC registration, AD Code & DGFT compliance at speed.",
    promoBadge: "DGFT Verified",
    promoImg: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=80",
    columns: [
      {
        title: "Import Export",
        items: [
          "IEC Registration",
          "ICEGATE Registration",
          "AD Code Registration",
          "LUT Registration",
          "WPC Certificate",
          "LMPC Registration",
          "IEC Renewal",
        ],
      },
      {
        title: "RCMC",
        items: [
          "AEPC",
          "APEDA",
          "CAPEXIL",
          "CHEMEXCIL",
          "Engineering Export Promotion Council",
          "Pharmaceutical Export Promotion Council",
          "Plastic Export Promotion Council",
          "Spice Board",
          "Coffee Board",
          "FIEO Registration",
          "MPEDA Registration",
        ],
      },
      {
        title: "RCMC 2",
        items: [
          "Cashew Export Promotion Council",
          "Coconut Export Promotion Council",
          "Council of Leather Exports",
          "Electronics & Computer Software Export Promotion Council",
          "Gem & Jewellery Export Promotion Council (GJEPC)",
          "Handloom Export Promotion Council (HEPC)",
          "Services Export Promotion Council (SEPC)",
          "Tea Board Export Promotion Council",
          "Export Promotion Council for Handicraft",
        ],
      },
      {
        title: "Trade Agreement & EPR",
        items: [
          "EFTA Trade Agreement",
          "EPR Battery Waste",
          "EPR E-Waste",
          "EPR Plastic Waste",
          "EPR Registration",
          "South Asian Free Trade Agreement",
          "South Asian Preferential Trading Arrangement",
          "Asia Pacific Trade Agreement",
          "Certification of Origin",
        ],
      },
    ],
  },
  {
    id: "tax-compliance",
    title: "Tax & Compliance",
    shortTitle: "Tax & Compliance",
    promoTitle: "Zero Penalty Tax Filings",
    promoDesc: "GST, TDS, ITR & corporate annual ROC filings managed by dedicated CAs.",
    promoBadge: "100% On-Time",
    promoImg: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80",
    columns: [
      {
        title: "GST & TAX",
        items: [
          "Corporate Tax",
          "GST Registration",
          "GST Registration for Foreigners",
          "GST Modification",
          "GST Cancellation & Surrender",
          "Professional Tax Registration",
          "TAN Registration",
        ],
      },
      {
        title: "Filing",
        items: [
          "GST Return",
          "TDS Returns",
          "Income Tax Return Filing",
        ],
      },
      {
        title: "Company Compliances",
        items: [
          "Accounting and Bookkeeping",
          "LLP Firm Annual Compliance",
          "Pvt Ltd Company Compliances",
        ],
      },
      {
        title: "Modification in Company",
        items: [
          "Virtual Chief Financial Officer",
          "Company Address Change",
          "Removal of Director",
          "Strike off Company",
          "Winding Up Pvt Ltd",
        ],
      },
    ],
  },
  {
    id: "trademark-ip",
    title: "Trademark & IP",
    shortTitle: "Trademark & IP",
    promoTitle: "Protect Your Brand Identity",
    promoDesc: "Quick trademark search, filing under 45 classes, copyright & hearing defence.",
    promoBadge: "Legal Protection",
    promoImg: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
    columns: [
      {
        title: "Trademark",
        items: [
          "Brand Name Registration",
          "Trademark Registration",
          "Trademark Objection",
          "Trademark Hearing",
          "Trademark Opposition",
          "Trademark Renewal",
        ],
      },
      {
        title: "Intellectual Property",
        items: [
          "Brand Name Suggestion",
          "Logo Design",
          "Copyright Registration",
        ],
      },
    ],
  },
  {
    id: "iso",
    title: "ISO",
    shortTitle: "ISO",
    promoTitle: "Global Quality Standards",
    promoDesc: "ISO 9001, 14001, 27001, CE & FDA certifications for domestic & export growth.",
    promoBadge: "IAF Accredited",
    promoImg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
    columns: [
      {
        title: "ISO Standard",
        items: [
          "ISO 9001",
          "ISO 14001",
          "ISO 45001",
          "ISO 22000",
          "ISO 27001",
          "ISO Certificate",
        ],
      },
      {
        title: "Product Compliance",
        items: [
          "US FDA Certificate",
          "Halal Certificate",
          "CE Certificate",
        ],
      },
    ],
  },
  {
    id: "gem-other",
    title: "GEM & Other",
    shortTitle: "GEM & Other",
    promoTitle: "Win Govt Tenders on GeM",
    promoDesc: "GeM seller onboarding, OEM catalogue approvals, vendor assessments & certifications.",
    promoBadge: "Govt Portal",
    promoImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    columns: [
      {
        title: "Government E-Marketplace",
        items: [
          "GEM Registration",
          "Brand Registration on GEM",
          "Deemed OEM",
          "GEM Vendor Assessment",
        ],
      },
      {
        title: "Other Services",
        items: [
          "Factory License",
          "Pollution Control Board NOC",
          "Fire NOC",
          "Weights & Measures Verification",
        ],
      },
    ],
  },
];

export const INDIAN_STATES_AND_UTS = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi (NCT)",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

export const BUSINESS_TYPES = [
  "Sole Proprietorship",
  "Partnership Firm",
  "Limited Liability Partnership (LLP)",
  "One Person Company (OPC)",
  "Private Limited Company (Pvt Ltd)",
  "Public Limited Company",
  "Section 8 (NGO / Trust / Society)",
  "Others"
];

export const BUSINESS_ACTIVITIES = [
  "Services",
  "Trading (Wholesale & Retail)",
  "Manufacturing",
  "Import / Export",
  "E-Commerce & Digital",
  "IT & Software Development",
  "Food & Hospitality",
  "Healthcare & Pharma",
  "Construction & Real Estate",
  "Other"
];

export const ALL_SERVICES_LIST: ServiceItem[] = [
  // Domestic Business Startup
  {
    id: "pvt-ltd",
    name: "Private Limited Company",
    category: "Domestic",
    column: "Business Startup",
    shortDesc: "Most popular corporate structure with limited liability and easy equity funding.",
    fullDesc: "Complete MCA SPICe+ Part A & B filing, DIN allocation for 2 directors, PAN/TAN generation, Certificate of Incorporation, EPFO/ESIC/Professional tax registration and bank account opening assistance.",
    timeline: "5-7 Business Days",
    popular: true,
    governmentFee: "Zero MCA Fee up to ₹15 Lakhs capital",
    documents: ["PAN Card of Directors", "Aadhaar Card / Passport", "Bank Statement (latest 2 months)", "Electricity Bill of Registered Office", "NOC from Property Owner"],
    benefits: ["Limited liability protection", "High credibility with investors & banks", "Separate legal entity status", "Easy share transferability"]
  },
  {
    id: "llp",
    name: "Limited Liability Partnership",
    category: "Domestic",
    column: "Business Startup",
    shortDesc: "Combines flexibility of a partnership with benefits of limited liability.",
    fullDesc: "LLP incorporation through MCA FiLLiP form, DPIN generation for designated partners, Drafting of customised LLP Agreement and Form 3 filing.",
    timeline: "7-10 Business Days",
    popular: true,
    documents: ["PAN Card of Partners", "Address Proof (Aadhaar / Voter ID)", "Bank Statement", "Registered Office Utility Bill", "Rental Agreement with NOC"],
    benefits: ["No minimum capital requirement", "Lower compliance burden compared to Pvt Ltd", "No dividend distribution tax", "Flexible internal structure"]
  },
  {
    id: "opc",
    name: "One Person Company",
    category: "Domestic",
    column: "Business Startup",
    shortDesc: "Corporate status for solo entrepreneurs with complete single ownership.",
    fullDesc: "Allows a single individual promoter to operate a corporate entity with limited liability while designating a nominee director.",
    timeline: "5-8 Business Days",
    documents: ["PAN Card of Sole Member & Nominee", "ID & Address Proofs", "Nominee Consent Form INC-3", "Registered Office Proofs"],
    benefits: ["100% control with single owner", "Limited personal liability", "Better access to institutional loans", "Direct corporate identity"]
  },
  {
    id: "sole-prop",
    name: "Sole Proprietorship Firm",
    category: "Domestic",
    column: "Business Startup",
    shortDesc: "Simplest business form established via MSME/Udyam and Shop Act registration.",
    fullDesc: "Quickest way to start a business in India. We set up Udyam registration, Shop & Establishment registration, and bank resolution certificates.",
    timeline: "1-2 Business Days",
    popular: true,
    documents: ["PAN Card of Proprietor", "Aadhaar Card", "Office Address Proof", "Passport Size Photo"],
    benefits: ["Zero compliance overhead", "Instant bank current account", "100% profit retention", "Lowest startup cost"]
  },
  {
    id: "partnership",
    name: "Partnership Firm",
    category: "Domestic",
    column: "Business Startup",
    shortDesc: "Traditional multi-partner deed registration with Registrar of Firms (ROF).",
    fullDesc: "Drafting of legal Partnership Deed with customized profit-sharing clauses, non-compete agreements, and ROF stamping/notarization.",
    timeline: "3-5 Business Days",
    documents: ["PAN Card of all Partners", "Address Proof of all Partners", "Partnership Deed Draft", "Commercial Premises Electricity Bill"],
    benefits: ["Easy to start and dissolve", "Combined capital and skills", "Mutual agency protection", "Transparent profit sharing"]
  },
  {
    id: "section-8",
    name: "Section 8 Company",
    category: "NGO",
    column: "Business Startup",
    shortDesc: "Non-profit corporate structure for promoting science, arts, commerce, charity.",
    fullDesc: "Central Government license under Section 8 of Companies Act 2013, followed by incorporation, 12A & 80G registration for tax exemption.",
    timeline: "10-15 Business Days",
    documents: ["Directors KYC (PAN & Aadhaar)", "Draft Objectives & 3-year Projected Budget", "Asset & Liability Statement", "Registered Office Proof"],
    benefits: ["Exemption from 'Pvt Ltd' suffix", "Higher trust from donors & CSR funds", "Tax exemptions under 12A/80G", "Eligible for foreign grants under FCRA"]
  },
  {
    id: "nidhi-company",
    name: "Nidhi Company",
    category: "Domestic",
    column: "Business Startup",
    shortDesc: "Non-Banking Financial entity fostering savings and thrift among members.",
    fullDesc: "Incorporation of Nidhi Company strictly conforming to NDH-4 compliance, Net Owned Fund management, and member deposit guidelines.",
    timeline: "12-18 Business Days",
    documents: ["KYC of minimum 7 members & 3 directors", "Office Proofs", "Bank Statements", "Declaration of adherence to Nidhi Rules"],
    benefits: ["Borrow and lend among verified members", "No RBI license required for internal lending", "Fosters disciplined community savings"]
  },
  {
    id: "producer-company",
    name: "Producer Company Registration",
    category: "Domestic",
    column: "Business Startup",
    shortDesc: "Specialized corporate vehicle for farmers, agriculturists, and primary producers.",
    fullDesc: "Registration for 10 or more producer individuals or 2 or more producer institutions with NABARD and Govt scheme integration.",
    timeline: "10-14 Business Days",
    documents: ["Farmer Certificates / Khasra-Khatauni", "KYC of minimum 5 directors and 10 members", "Office Proofs"],
    benefits: ["Direct market access for farm produce", "Govt subsidies & NABARD grants", "Corporate governance standards"]
  },

  // International Incorporation
  {
    id: "dubai-incorp",
    name: "Company Incorporation in Dubai/UAE",
    category: "International",
    column: "Business Startup",
    shortDesc: "Mainland & Free Zone setup in IFZA, Meydan, DMCC with 0% corporate tax perks.",
    fullDesc: "Turnkey UAE entity setup including Trade License, Memorandum of Association, Establishment Card, UAE Investor Visa, and corporate bank account.",
    timeline: "7-10 Business Days",
    popular: true,
    documents: ["Passport Copy (Color scan)", "Passport Size Photograph (White BG)", "3 Proposed Company Names", "Resume / Brief Business Profile"],
    benefits: ["0% personal income tax", "100% foreign ownership in Free Zones", "Strategic bridge to MENA & European markets", "UAE Resident Visa for family"]
  },
  {
    id: "singapore-incorp",
    name: "Company Incorporation in Singapore",
    category: "International",
    column: "Business Startup",
    shortDesc: "Top-tier Asian business hub with low tax regime and global banking access.",
    fullDesc: "ACRA company registration, nominee director provision, corporate secretary appointment, and multi-currency bank account setup.",
    timeline: "3-5 Business Days",
    documents: ["Passport Copy", "Proof of Residential Address", "ACRA Company Name Application", "Shareholding details"],
    benefits: ["Tier-1 global financial reputation", "Concessionary tax rates for startups", "Vibrant venture capital ecosystem"]
  },
  {
    id: "usa-incorp",
    name: "Company Incorporation in USA",
    category: "International",
    column: "Business Startup",
    shortDesc: "Delaware / Wyoming LLC & C-Corp formation with US EIN and Mercury/Stripe setup.",
    fullDesc: "Formation of LLC or C-Corp in business-friendly US states, Registered Agent service, IRS EIN tax ID retrieval, and US bank setup.",
    timeline: "5-7 Business Days",
    popular: true,
    documents: ["Passport Copy of Owner", "US Business Address Proof (Provided by us)", "Articles of Organization Details"],
    benefits: ["Access to US investors and Y Combinator", "Stripe, PayPal & US payment processors", "Global credibility and patent protection"]
  },
  {
    id: "uk-incorp",
    name: "Company Incorporation in UK",
    category: "International",
    column: "Business Startup",
    shortDesc: "Companies House UK Private Limited Company formation with UK bank integration.",
    fullDesc: "Fastest international registration with registered office address in London, UK VAT setup, Wise/Revolut business accounts.",
    timeline: "24-48 Hours",
    documents: ["Valid Passport", "Utility Bill / Bank Statement under 3 months", "Director/Shareholder Details"],
    benefits: ["Lightning fast 24-48h incorporation", "Low initial setup capital", "Access to UK and European marketplaces"]
  },

  // Food Business & Licenses
  {
    id: "fssai-reg",
    name: "FSSAI Registration",
    category: "Food Business",
    column: "Registration & License",
    shortDesc: "Basic 14-digit food safety registration for turnover up to ₹12 Lakhs/year.",
    fullDesc: "FoSCoS portal application, drafting Form A, food category selection, and instant 14-digit FSSAI registration certificate.",
    timeline: "3-5 Business Days",
    popular: true,
    documents: ["Passport size photo of Food Business Operator", "Govt ID Proof (Aadhaar / Voter ID)", "Business Address Proof", "Food Safety Declaration"],
    benefits: ["Mandatory for Zomato, Swiggy & Blinkit onboarding", "Enhances customer trust in food safety", "Prevents heavy food safety penalties"]
  },
  {
    id: "fssai-state",
    name: "FSSAI State License",
    category: "Food Business",
    column: "Registration & License",
    shortDesc: "For food manufacturers, restaurants, and cloud kitchens turnover ₹12L to ₹20Cr.",
    fullDesc: "Form B filing on FoSCoS, water test reports, food safety management system (FSMS) plan, kitchen layout blueprint submission.",
    timeline: "15-20 Business Days",
    popular: true,
    documents: ["Kitchen Layout Plan", "List of Equipment & Machinery", "Water Testing Laboratory Report", "NOC from Municipality / Gram Panchayat", "Food Category list"],
    benefits: ["Legally operate restaurants, food factories & cloud kitchens", "Supply to supermarkets and retail chains", "Valid across the state"]
  },
  {
    id: "fssai-central",
    name: "FSSAI Central License",
    category: "Food Business",
    column: "Registration & License",
    shortDesc: "For food businesses with turnover > ₹20Cr, multi-state operations, or food imports.",
    fullDesc: "Central licensing authority clearance, import/export clearance code integration, and annual return filing management.",
    timeline: "25-30 Business Days",
    documents: ["IE Code (for importers)", "FSMS Plan with Hazard Analysis", "Annual Turnover Financials", "List of Food Categories (Indian Food Code)"],
    benefits: ["Permits pan-India distribution and food imports", "Highest standard of food regulatory clearance"]
  },
  {
    id: "fssai-returns",
    name: "FSSAI Returns",
    category: "Food Business",
    column: "Registration & License",
    shortDesc: "Annual return filing (Form D-1 / D-2) for food manufacturers and importers.",
    fullDesc: "Timely submission before May 31st every financial year on the FoSCoS portal to prevent recurring daily penalties.",
    timeline: "1-2 Business Days",
    documents: ["Annual Production & Sales Data", "FSSAI License Copy", "Stock In/Out Register"],
    benefits: ["Avoid ₹100/day ongoing penalty", "Maintain clean regulatory record"]
  },

  // Labour Department
  {
    id: "shop-est",
    name: "Shop and Establishment Certificate",
    category: "Labour Department",
    column: "Registration & License",
    shortDesc: "Mandatory municipal commercial establishment registration (Gumasta License).",
    fullDesc: "State labor department registration verifying working hours, employee conditions, wage compliance, and commercial premises.",
    timeline: "2-4 Business Days",
    documents: ["Shop / Office Photo with Signboard", "Rental Agreement / Electricity Bill", "PAN & Aadhaar of Owner", "Employee List with designations"],
    benefits: ["Required for opening commercial current bank account", "Legal proof of commercial establishment", "Protection under state labor laws"]
  },
  {
    id: "epf-reg",
    name: "Employee Provident Fund Registration",
    category: "Labour Department",
    column: "Registration & License",
    shortDesc: "Mandatory for firms with 20+ staff; optional voluntary registration for smaller firms.",
    fullDesc: "Unified Shram Suvidha portal setup, establishment code allocation, digital signature mapping, and monthly ECR filing support.",
    timeline: "3-5 Business Days",
    documents: ["Incorporation Certificate / Partnership Deed", "PAN & Aadhaar of Directors / Partners", "Specimen Signature / DSC", "Employee details"],
    benefits: ["Social security benefits for staff", "Tax deductions under Income Tax Act", "Attracts top-tier talent"]
  },
  {
    id: "esi-reg",
    name: "ESI Registration",
    category: "Labour Department",
    column: "Registration & License",
    shortDesc: "Medical insurance and sickness benefits for employees earning up to ₹21,000/month.",
    fullDesc: "ESIC portal registration, sub-code generation, Form 01 submission, and employee insurance card generation assistance.",
    timeline: "2-4 Business Days",
    documents: ["Business Pan & Registration", "Cancelled Cheque", "List of employees with joining dates & salaries", "Director / Partner details"],
    benefits: ["Full medical cover for employees and dependents", "Maternity benefit coverage", "Disability & pension protection"]
  },

  // Initial Registration
  {
    id: "msme-reg",
    name: "MSME / Udyam Registration",
    category: "Initial Registration",
    column: "Registration & License",
    shortDesc: "Government Udyam certificate unlocking priority bank lending, subsidies & tender perks.",
    fullDesc: "Instant online Udyam Aadhaar verification linked directly with Income Tax and GSTN databases for Micro, Small & Medium Enterprises.",
    timeline: "1 Business Day",
    popular: true,
    documents: ["Aadhaar Number linked with Mobile", "PAN Card of Business / Proprietor", "Bank Account Details (IFSC & Account No)", "Enterprise Investment & Turnover"],
    benefits: ["Collateral-free bank loans (CGTMSE scheme)", "50% subsidy on patent and trademark fees", "Protection against delayed payments (Samadhaan portal)", "Concession on electricity bills & ISO audit costs"]
  },
  {
    id: "startup-india",
    name: "Startup India Registration",
    category: "Initial Registration",
    column: "Registration & License",
    shortDesc: "DPIIT Recognition for 3-year 80-IAC tax holiday & Section 56 Angel Tax exemption.",
    fullDesc: "Application for DPIIT startup recognition letter, innovation pitching deck submission, and seed fund scheme guidance.",
    timeline: "7-10 Business Days",
    popular: true,
    documents: ["Certificate of Incorporation (Pvt Ltd / LLP)", "Pitch Deck / Presentation of Innovation", "Website URL or Mobile App Link", "Founder Profiles"],
    benefits: ["100% tax exemption for 3 consecutive financial years", "80% rebate on patent filings", "Self-certification under 6 labor and 3 environmental laws", "Access to ₹10,000 Cr Fund of Funds"]
  },
  {
    id: "dsc",
    name: "Digital Signature Certificate (Class 3)",
    category: "Initial Registration",
    column: "Registration & License",
    shortDesc: "Class 3 DSC with USB Cryptographic Token for MCA, GST, Income Tax & e-Tenders.",
    fullDesc: "Paperless video e-KYC verification, issue of 2-year or 3-year validity Class 3 Signing + Encryption certificate loaded on secure FIPS token.",
    timeline: "30 Minutes",
    popular: true,
    documents: ["Aadhaar Card", "PAN Card", "Live Video Verification (30 secs)", "Passport size photo"],
    benefits: ["Legally valid digital signature under IT Act 2000", "Mandatory for all MCA, ROC, GST & GeM filings", "Secure encrypted token hardware"]
  },
  {
    id: "bis-reg",
    name: "BIS Registration",
    category: "Initial Registration",
    column: "Registration & License",
    shortDesc: "Bureau of Indian Standards ISI Mark & Compulsory Registration Scheme (CRS).",
    fullDesc: "Factory inspection readiness, lab test report facilitation in NABL accredited labs, and BIS license grant for domestic and foreign makers.",
    timeline: "20-30 Business Days",
    documents: ["Manufacturing Process Flowchart", "Machinery & Test Equipment Details", "Lab Test Report from NABL Accredited Lab", "Brand Authorization Letter"],
    benefits: ["Mandatory for electronics, footwear, toys, steel products", "Unlocks legal sale in Indian marketplace", "Assures consumer product safety"]
  },

  // Import & Export
  {
    id: "iec-reg",
    name: "IEC Registration",
    category: "Import Export",
    column: "Import & Export",
    shortDesc: "10-digit Import Export Code issued by Directorate General of Foreign Trade (DGFT).",
    fullDesc: "Lifetime validity IEC code linked with business PAN on the DGFT portal. Includes digital token mapping, bank AD Code integration, and ICEGATE registration.",
    timeline: "24-48 Hours",
    popular: true,
    documents: ["PAN Card of Firm / Entity", "Cancelled Cheque / Bank Certificate (ANF-2A)", "Electricity Bill / Rent Agreement of Premises", "Aadhaar of Signatory"],
    benefits: ["Mandatory for customs clearance of goods", "Permits international wire transfers for goods & services", "Lifetime validity with free annual update"]
  },
  {
    id: "iec-renewal",
    name: "IEC Renewal (Annual Update)",
    category: "Import Export",
    column: "Import & Export",
    shortDesc: "Mandatory annual confirmation on DGFT portal between April-June every year.",
    fullDesc: "Prevents deactivation of IEC code. We update and verify bank accounts, branch offices, and director data on the DGFT central system.",
    timeline: "2-4 Hours",
    popular: true,
    documents: ["Existing IEC Certificate", "Current Bank Account Statement", "Updated Partner / Director details"],
    benefits: ["Prevents custom shipment detention at ports", "Keeps AD code active with customs banks"]
  },
  {
    id: "ad-code",
    name: "AD Code Registration",
    category: "Import Export",
    column: "Import & Export",
    shortDesc: "Authorized Dealer (AD) Code registration with ICEGATE at specific sea/air ports.",
    fullDesc: "Customs EDI registration of 14-digit bank AD code for hassle-free duty drawback, IGST export refunds, and port clearance.",
    timeline: "2-3 Business Days",
    documents: ["Bank AD Code Letter on Bank Letterhead", "IEC Copy", "GST Certificate", "Class 3 DSC of Authorized Signatory"],
    benefits: ["Instant credit of government export duty drawbacks", "Seamless customs clearance at Nhava Sheva, Mundra, Delhi IGI, etc."]
  },
  {
    id: "rcmc-apeda",
    name: "APEDA Registration",
    category: "RCMC",
    column: "Import & Export",
    shortDesc: "Agricultural & Processed Food Products Export Development Authority membership.",
    fullDesc: "Mandatory RCMC certificate for exporting fruits, vegetables, meat, dairy, basmati rice, cereals, and organic food products from India.",
    timeline: "4-7 Business Days",
    documents: ["IEC Copy", "Bank Certificate", "Organic / Lab testing records if applicable", "Business Registration Proof"],
    benefits: ["Access to APEDA export subsidies and freight assistance", "Participation in international trade fairs", "Buyer-seller meets"]
  },
  {
    id: "rcmc-fieo",
    name: "FIEO Registration",
    category: "RCMC",
    column: "Import & Export",
    shortDesc: "Federation of Indian Export Organisations multi-product exporter membership.",
    fullDesc: "Apex body registration for exporters of multi-products and service exporters not covered under specialized commodity boards.",
    timeline: "5-7 Business Days",
    documents: ["IEC Code", "Bank Certificate", "Audited Financials / CA Net Worth Certificate", "GST Registration"],
    benefits: ["Preferential trade agreement certificates", "Global trade leads & market intelligence reports", "MAI scheme grants"]
  },
  {
    id: "epr-plastic",
    name: "EPR Plastic Waste",
    category: "Trade Agreement & EPR",
    column: "Import & Export",
    shortDesc: "Extended Producer Responsibility registration with CPCB for PIBOs.",
    fullDesc: "Central Pollution Control Board (CPCB) portal registration, recycling quota management, state pollution board filings, and annual EPR compliance.",
    timeline: "15-25 Business Days",
    documents: ["Manufacturing / Import Data of Plastic Packaging", "CPCB Portal Login Setup", "Waste Management Agency Agreement", "PAN & GST of Company"],
    benefits: ["Avoid high environmental compensation penalties", "Compliant with Plastic Waste Management Rules 2022", "Legally import packaged goods"]
  },

  // Tax & Compliance
  {
    id: "gst-reg",
    name: "GST Registration",
    category: "GST & TAX",
    column: "Tax & Compliance",
    shortDesc: "15-digit GSTIN for normal taxpayers, composition dealers, and service providers.",
    fullDesc: "End-to-end filing on GST portal with Aadhaar biometric authentication, principal place of business verification, and HSN/SAC code mapping.",
    timeline: "3-5 Business Days",
    popular: true,
    documents: ["PAN Card of Business / Proprietor", "Aadhaar Card of Signatories", "Electricity Bill & NOC / Rent Agreement of Office", "Bank Statement / Cancelled Cheque"],
    benefits: ["Collect GST and claim Input Tax Credit (ITC)", "Sell on Amazon, Flipkart & pan-India e-commerce", "Expand interstate commerce without hurdles"]
  },
  {
    id: "gst-return",
    name: "GST Return Filing",
    category: "Filing",
    column: "Tax & Compliance",
    shortDesc: "Monthly & Quarterly GSTR-1, GSTR-3B, GSTR-9 annual return filings by expert CAs.",
    fullDesc: "Automated invoice matching with GSTR-2B, input tax credit optimization, zero late-fee filing, and monthly tax liability calculation.",
    timeline: "Monthly Retainer",
    popular: true,
    documents: ["Sales Registers / Invoices", "Purchase Invoices", "Bank Statements", "GST Portal Credentials"],
    benefits: ["100% accurate ITC claiming", "Zero penalty guarantee on timely submission", "Quarterly reconciliation to prevent notices"]
  },
  {
    id: "itr-filing",
    name: "Income Tax Return Filing",
    category: "Filing",
    column: "Tax & Compliance",
    shortDesc: "ITR-1 to ITR-7 filings for individuals, directors, firms, LLPs & private limited companies.",
    fullDesc: "Computation of total income, advance tax planning, capital gains calculations, foreign asset disclosures, and maximum tax refund optimization.",
    timeline: "2-4 Business Days",
    popular: true,
    documents: ["Form 16 / Form 26AS / AIS / TIS", "Bank Statements of all active accounts", "Capital Gain Statements (Zerodha/Groww)", "Investment Proofs (80C, 80D)"],
    benefits: ["Prompt income tax refund processing", "Higher loan and visa approval rates", "Carry forward business and capital losses"]
  },
  {
    id: "pvt-ltd-compliance",
    name: "Pvt Ltd Company Compliances",
    category: "Company Compliances",
    column: "Tax & Compliance",
    shortDesc: "Annual ROC filings (AOC-4, MGT-7), DIR-3 KYC, Statutory Audit & Board Resolutions.",
    fullDesc: "Comprehensive annual maintenance package: Statutory auditor appointment (ADT-1), annual accounts preparation, AGM documentation, DIR-3 KYC for directors, and Form AOC-4/MGT-7 filing.",
    timeline: "Annual Package",
    popular: true,
    documents: ["Audited Financial Statements", "Director's Report", "Notice of AGM", "DSC of Directors & Practicing Professional"],
    benefits: ["Shield company and directors from ₹100/day MCA fines", "Maintain active company status without strike-off risks", "Clean compliance track record for investors"]
  },

  // Trademark & IP
  {
    id: "tm-reg",
    name: "Trademark Registration",
    category: "Trademark",
    column: "Trademark & IP",
    shortDesc: "Protect your brand name, logo, or slogan under relevant Nice Classification classes.",
    fullDesc: "Thorough public search across 45 classes, Form TM-A drafting with user affidavit, filing with Controller General of Patents, Designs and Trademarks, and issuance of ™ application number in 24 hours.",
    timeline: "24 Hours for ™ (6-8 Months for ®)",
    popular: true,
    documents: ["Logo / Brand Name Image (High Resolution)", "Identity & Address Proof of Applicant", "MSME / Startup Certificate (for 50% govt fee waiver)", "Power of Attorney (TM-48)"],
    benefits: ["Exclusive legal ownership over brand identity", "Right to use ™ immediately and ® after registration", "Stop competitors and counterfeiters from copying your brand"]
  },
  {
    id: "tm-objection",
    name: "Trademark Objection Reply",
    category: "Trademark",
    column: "Trademark & IP",
    shortDesc: "Professional legal reply to Examination Report issued under Section 9 or Section 11.",
    fullDesc: "Drafted by experienced Trademark Attorneys with statutory citations, prior user evidence affidavits, and case law precedents to successfully overcome objections.",
    timeline: "3-5 Business Days",
    documents: ["Examination Report Copy", "Proof of continuous prior usage (Invoices, Social Media, Website)", "Marketing expenditure proofs"],
    benefits: ["Prevents abandonment of your trademark", "Clears the path for publication in Trademark Journal"]
  },
  {
    id: "copyright-reg",
    name: "Copyright Registration",
    category: "Intellectual Property",
    column: "Trademark & IP",
    shortDesc: "Legal copyright protection for software source code, books, music, logos & designs.",
    fullDesc: "Filing with Copyright Office India, diary number generation, mandatory 30-day objection period handling, and grant of Registration Certificate.",
    timeline: "15-30 Business Days",
    documents: ["Copies of Original Work (Source code / Artwork / Literary work)", "NOC from Author / Creator", "Applicant KYC Details"],
    benefits: ["Protection for life of creator plus 60 years", "Exclusive commercial monetization rights", "Strong legal remedy against digital piracy"]
  },

  // ISO Certification
  {
    id: "iso-9001",
    name: "ISO 9001:2015 Quality Management",
    category: "ISO Standard",
    column: "ISO",
    shortDesc: "Globally recognized standard for Quality Management Systems (QMS).",
    fullDesc: "Gap analysis, QMS manual drafting, internal audit training, stage 1 & 2 certification audit facilitation with IAF-accredited certification body.",
    timeline: "5-7 Business Days",
    popular: true,
    documents: ["Company Registration Certificate", "Scope of Business Activities", "Process Flow Diagram", "Sales & Purchase Invoices"],
    benefits: ["Mandatory eligibility for Govt & PSU tenders", "Improves operational efficiency & product consistency", "International prestige and customer trust"]
  },
  {
    id: "iso-27001",
    name: "ISO 27001 Information Security",
    category: "ISO Standard",
    column: "ISO",
    shortDesc: "Information Security Management System (ISMS) for IT, SaaS & Data companies.",
    fullDesc: "Risk assessment framework, Statement of Applicability (SoA) development, data protection policy rollout, and accredited ISMS certification.",
    timeline: "10-15 Business Days",
    documents: ["IT Infrastructure Architecture", "Data Flow Diagram", "Security Policies & Risk Register"],
    benefits: ["Required for enterprise B2B contracts and SOC-2 alignment", "Guarantees client data security & GDPR/DPDP readiness"]
  },
  {
    id: "iso-14001",
    name: "ISO 14001 Environmental Management",
    category: "ISO Standard",
    column: "ISO",
    shortDesc: "Environmental management standards (EMS) for sustainable manufacturing.",
    fullDesc: "Assessment of environmental aspects, waste reduction protocols, energy efficiency guidelines, and certification for green procurement.",
    timeline: "7-10 Business Days",
    documents: ["Environmental Policy Document", "Factory Layout & Emissions Record", "Company KYC"],
    benefits: ["Meets sustainability standards in European exports", "Lowers waste management operating costs"]
  },

  // GEM & Other
  {
    id: "gem-reg",
    name: "GEM Registration",
    category: "Government E-Marketplace",
    column: "GEM & Other",
    shortDesc: "Primary & Secondary seller onboarding on Government e-Marketplace (GeM).",
    fullDesc: "GeM seller profile setup, Aadhaar & PAN verification, bank caution money deposit assistance, and category catalogue creation.",
    timeline: "2-3 Business Days",
    popular: true,
    documents: ["Aadhaar linked with mobile", "PAN of entity & Authorized Person", "GSTIN & Udyam Certificate", "Bank Account Details with Net Banking"],
    benefits: ["Direct access to ₹3+ Lakh Crore government tenders and direct purchases", "No EMD fee for MSME registered sellers", "Transparent payment settlement through GeM pool accounts"]
  },
  {
    id: "gem-oem",
    name: "Brand Registration & Deemed OEM on GEM",
    category: "Government E-Marketplace",
    column: "GEM & Other",
    shortDesc: "OEM dashboard approval, trademark mapping, and product catalogue listing.",
    fullDesc: "Approval of registered trademark on GeM portal, pairing OEM catalogues, and authorizing resellers to bid under your brand name.",
    timeline: "3-5 Business Days",
    documents: ["Registered Trademark Certificate (® / ™)", "BIS / Quality Certificates", "Product Specification Sheets", "Authorization Undertaking"],
    benefits: ["Exclusive authority to approve resellers on GeM", "Direct invitation for single-source govt procurements"]
  }
];

export const SPECIAL_OFFERS = [
  {
    id: "offer-1",
    title: "Startup India + MSME + GST Combo",
    subtitle: "Launch & Comply Package",
    discount: "FLAT 35% OFF",
    code: "STARTUPAI35",
    validTill: "Valid till end of month",
    badge: "Most Popular",
    features: ["Pvt Ltd Incorporation (Zero MCA Fee)", "GST & MSME Udyam Filing Included", "Free 1st Year Trademark Search & Consultation", "Dedicated Relationship Manager"]
  },
  {
    id: "offer-2",
    title: "Free Trademark Search & Filing Deal",
    subtitle: "Protect Your Brand Name Today",
    discount: "SAVE ₹3,000",
    code: "TMPROTECT",
    validTill: "Limited time quota",
    badge: "Brand Saver",
    features: ["Comprehensive 45-Class AI Search Report", "Form TM-A Filing in 24 Hours", "Free Tracking & Objection Advisory", "50% Govt Fee Waiver via MSME"]
  },
  {
    id: "offer-3",
    title: "Annual Compliance Shield for Pvt Ltd",
    subtitle: "Zero Penalty Guarantee",
    discount: "SPECIAL RETAINER",
    code: "ROC2026",
    validTill: "For FY 2025-26",
    badge: "Peace of Mind",
    features: ["AOC-4, MGT-7, ADT-1 Filings", "DIR-3 KYC for all directors", "Quarterly Financial Health Audit", "Unlimited CA/CS consultation calls"]
  }
];

export const UPDATES_AND_ALERTS = [
  {
    id: "up-1",
    title: "Import Export Code (IEC) Annual Renewal",
    date: "22 Aug 2026",
    tag: "DGFT",
    desc: "Mandatory yearly confirmation on DGFT portal to prevent immediate IEC deactivation."
  },
  {
    id: "up-2",
    title: "MCA V3 Portal Update for Form D-1 / D-2",
    date: "19 Aug 2026",
    tag: "MCA",
    desc: "Ministry of Corporate Affairs releases revised validation checks for directorial e-KYC."
  },
  {
    id: "up-3",
    title: "GSTR-1 & GSTR-3B Auto-Reconciliation Enhancement",
    date: "15 Aug 2026",
    tag: "GSTN",
    desc: "GST Network enhances GSTR-2B real-time ITC locking mechanisms for all tax filers."
  },
  {
    id: "up-4",
    title: "FSSAI FoSCoS Mandatory Hygiene Audit Reports",
    date: "10 Aug 2026",
    tag: "FSSAI",
    desc: "State & Central food licensees must upload Third-Party Food Safety Audit records."
  },
  {
    id: "up-5",
    title: "MSME Samadhaan Delayed Payment Recovery Window",
    date: "05 Aug 2026",
    tag: "MSME",
    desc: "Special fast-track settlement bench instituted for Micro enterprises dues beyond 45 days."
  },
  {
    id: "up-6",
    title: "Trademark Rules 2026 - Accelerated Examination",
    date: "01 Aug 2026",
    tag: "IP India",
    desc: "Startups and women entrepreneurs can fast-track trademark grant within 90 days."
  },
  {
    id: "up-7",
    title: "EPR Plastic Waste Portal Targets for PIBOs",
    date: "28 Jul 2026",
    tag: "CPCB",
    desc: "CPCB updates recycling certificates trading and EPR credit purchase deadlines."
  },
  {
    id: "up-8",
    title: "GeM Portal Caution Money Re-Validation Process",
    date: "24 Jul 2026",
    tag: "GeM",
    desc: "Secondary sellers required to link dynamic UPI auto-mandate for caution balance."
  },
  {
    id: "up-9",
    title: "RBI New Reporting Norms for Foreign Direct Investment",
    date: "18 Jul 2026",
    tag: "RBI",
    desc: "Single Master Form (SMF) on FIRMS portal updated for downstream foreign investments."
  },
  {
    id: "up-10",
    title: "Digital Personal Data Protection (DPDP) Act Compliance",
    date: "12 Jul 2026",
    tag: "Compliance",
    desc: "Enterprises must appoint Data Protection Officers and institute customer consent logs."
  }
];

export const DUE_DATES = [
  {
    id: "due-1",
    title: "GSTR-3B Monthly Return Filing",
    date: "20th of Every Month",
    category: "GST",
    status: "Approaching",
    desc: "File monthly GST summary return & pay net tax liability to prevent late interest."
  },
  {
    id: "due-2",
    title: "GSTR-1 Monthly Outward Supplies",
    date: "11th of Every Month",
    category: "GST",
    status: "Active",
    desc: "Report all B2B and B2C sales invoices for ITC transmission to buyers."
  },
  {
    id: "due-3",
    title: "TDS / TCS Deposit Challan 281",
    date: "7th of Every Month",
    category: "Income Tax",
    status: "Active",
    desc: "Deposit tax deducted at source from salary, contractor, and professional payments."
  },
  {
    id: "due-4",
    title: "Advance Tax 2nd Installment",
    date: "15th September",
    category: "Corporate Tax",
    status: "Upcoming",
    desc: "Pay 45% of estimated total income tax liability for corporate & individual taxpayers."
  },
  {
    id: "due-5",
    title: "DIR-3 KYC for Company Directors",
    date: "30th September",
    category: "MCA",
    status: "Upcoming",
    desc: "Annual e-KYC for all DIN holders. Late fee of ₹5,000 applicable post deadline."
  },
  {
    id: "due-6",
    title: "Annual Return Form AOC-4 (Financial Statements)",
    date: "30th October",
    category: "ROC",
    status: "Important",
    desc: "Filing audited balance sheet, P&L account, and auditor report with ROC."
  },
  {
    id: "due-7",
    title: "Annual Return Form MGT-7 (Annual Return)",
    date: "29th November",
    category: "ROC",
    status: "Upcoming",
    desc: "Filing shareholding pattern, board meetings record, and governance details."
  },
  {
    id: "due-8",
    title: "EPFO & ESIC Monthly Contribution Payment",
    date: "15th of Every Month",
    category: "Labour",
    status: "Approaching",
    desc: "Submit Electronic Challan cum Return (ECR) for employee social security."
  }
];

export const PARTNERS_LOGOS = [
  { name: "Ministry of Corporate Affairs", label: "MCA Portal", icon: "Building2" },
  { name: "Income Tax Department", label: "Income Tax India", icon: "Landmark" },
  { name: "Goods & Services Tax", label: "GSTN Portal", icon: "Receipt" },
  { name: "Directorate General of Foreign Trade", label: "DGFT India", icon: "Ship" },
  { name: "FSSAI FoSCoS", label: "Food Safety Standards", icon: "ShieldCheck" },
  { name: "Udyam MSME", label: "Ministry of MSME", icon: "Award" },
  { name: "GeM Govt Marketplace", label: "GeM E-Marketplace", icon: "Store" },
  { name: "HDFC Bank", label: "Corporate Banking", icon: "CreditCard" },
  { name: "ICICI Bank", label: "Business Banking", icon: "BadgePercent" },
  { name: "Razorpay", label: "Payment Gateway", icon: "Zap" },
  { name: "AWS Cloud", label: "Secure Cloud Infrastructure", icon: "Cloud" },
  { name: "Google Cloud", label: "Enterprise Security", icon: "Server" }
];

export const GLOBAL_BRANDS = [
  "Tata Group Suppliers", "Reliance Retail Vendors", "Adani Logistics Partners", 
  "Mahindra Agri Associates", "Nykaa Merchant Network", "Zepto Dark Stores", 
  "Blinkit Food Vendors", "Zomato Partner Kitchens", "Shiprocket Exporters", 
  "Amazon Global Sellers", "Flipkart SuperSellers", "Urban Company Service Pros"
];

export const BLOG_POSTS = [
  {
    id: "blog-1",
    title: "Pvt Ltd vs LLP vs OPC: Which Business Structure Fits Your Startup in 2026?",
    excerpt: "Detailed breakdown of compliance costs, taxation, foreign investment rules, and liability shields to help you choose the right legal framework.",
    author: "CS Akshay Sharma",
    date: "20 Aug 2026",
    category: "Startup Strategy",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "blog-2",
    title: "Complete GST Registration Documents Guide for Indian Enterprises",
    excerpt: "Everything you need to gather before applying for GSTIN to ensure 100% first-attempt approval without jurisdictional tax officer queries.",
    author: "CA Priyanka Verma",
    date: "18 Aug 2026",
    category: "Taxation & GST",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "blog-3",
    title: "How to File Trademark Online & Avoid Section 9 and 11 Objections",
    excerpt: "Learn how IP attorneys conduct public trademark searches, choose distinctive brand names, and draft foolproof user affidavits.",
    author: "Adv. Rohit Soni",
    date: "15 Aug 2026",
    category: "Trademark & IP",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "blog-4",
    title: "MSME Udyam Registration Benefits: Collateral-Free Loans & 50% Subsidies",
    excerpt: "Unlock government tender advantages, priority sector lending, electricity tariff discounts, and protection against delayed buyer payments.",
    author: "Vikas Agnihotri",
    date: "12 Aug 2026",
    category: "Government Schemes",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "blog-5",
    title: "IEC Code Renewal Rules Explained: What Every Exporter Must Do in Q1",
    excerpt: "Avoid port detentions and customs clearance freezes by keeping your Import Export Code updated with the DGFT central registry.",
    author: "Karan Joharwal",
    date: "09 Aug 2026",
    category: "Import Export",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "blog-6",
    title: "ISO 9001 vs ISO 27001: Which Certification Does Your Business Need First?",
    excerpt: "Understanding the difference between Quality Management (QMS) and Information Security (ISMS) for winning enterprise and govt contracts.",
    author: "Dr. Sandeep Patel",
    date: "06 Aug 2026",
    category: "ISO Standards",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "blog-7",
    title: "FSSAI Basic vs State vs Central License: Turnover Limits & Hygiene Audit Rules",
    excerpt: "Comprehensive food safety compliance handbook for restaurant owners, cloud kitchen operators, and packaged food manufacturers.",
    author: "Chef & Consultant R. Nair",
    date: "02 Aug 2026",
    category: "Food Industry",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "blog-8",
    title: "Selling on Government E-Marketplace (GeM): How to Win Direct Purchase Orders",
    excerpt: "Step-by-step walkthrough on registering as an OEM, catalogue pairing, caution deposit calculation, and bidding on government tenders.",
    author: "Ankit Dubey",
    date: "29 Jul 2026",
    category: "GeM Tenders",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "blog-9",
    title: "Incorporating in Dubai & UAE: Free Zone vs Mainland Comparison for Indian Founders",
    excerpt: "Explore 0% corporate tax benefits, 100% foreign ownership, setup costs in IFZA/Meydan, and investor visa acquisition workflows.",
    author: "Farhan Siddiqui",
    date: "25 Jul 2026",
    category: "Global Expansion",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "blog-10",
    title: "Annual ROC Compliance Checklist for Private Limited Companies",
    excerpt: "Avoid director disqualification and heavy penalty notices by filing AOC-4, MGT-7, and DIR-3 KYC ahead of MCA statutory cutoffs.",
    author: "CS Pooja Mehrotra",
    date: "21 Jul 2026",
    category: "Corporate Law",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "blog-11",
    title: "EPR Plastic Waste Registration (CPCB) Mandatory Compliance for E-Commerce & Importers",
    excerpt: "Understanding the Central Pollution Control Board portal obligations, PIBO registration tiers, and plastic credit trading mechanisms.",
    author: "Environment Desk",
    date: "17 Jul 2026",
    category: "EPR Compliance",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "blog-12",
    title: "Startup India 80-IAC Tax Exemption: Complete Approval Playbook",
    excerpt: "How to draft an effective innovation pitch deck to successfully secure DPIIT recognition and 3-year consecutive income tax holiday.",
    author: "Alok Sengupta",
    date: "14 Jul 2026",
    category: "Startup Funding",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80"
  }
];

export const COMPANY_INFO = {
  name: "akshayb2bsolutions",
  displayName: "AKSHAYB2BSOLUTIONS",
  tagline: "make paper work",
  phone: "+91 97180 04839",
  phoneFormatted: "+91 97180 04839",
  email: "info@akshayb2bsolutions.com",
  address: "Kesav Puram, Awas Vikas 1, Kalyanpur, Kanpur Nagar, Uttar Pradesh",
  workingHours: "Monday to Saturday, 10:00 AM to 06:30 PM",
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com"
  }
};
