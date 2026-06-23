export const profile = {
  name: 'Joshua Stevenson',
  title: 'Solutions Architect | AI & Cloud Infrastructure',
  location: 'Nashville, TN',
  phone: '615-440-8308',
  email: 'joshua-stevenson@outlook.com',
  linkedin: 'https://www.linkedin.com/in/stevensonjosh/',
  github: 'https://github.com/ifihadastick',
  resumeFile: '/resume/Joshua_Stevenson_Resume.pdf',
  summary:
    'Solutions Architect with 18+ years of enterprise IT experience, specializing in Large Enterprise, Federal, and public-sector environments. Combines broad infrastructure expertise — cloud, HPC, storage, and AI-ready architecture — with hands-on Python development and a graduate-level foundation in analytics (MS, Georgia Institute of Technology) to design and optimize solutions for demanding, data-intensive workloads. Certified in Accelerated Data Science & AI Infrastructure and Operations, with working knowledge of GPU computing frameworks and accelerated computing platforms. Known for building trusted technical partnerships with clients, translating complex technical and institutional requirements into right-sized, high-performance solutions.',
};

export const certifications = [
  { name: 'NVIDIA-Certified Professional: Accelerated Data Science', org: 'NVIDIA', date: '2025' },
  { name: 'NVIDIA-Certified Associate: AI Infrastructure & Operations', org: 'NVIDIA', date: '2025' },
  { name: 'Nutanix Certified Professional – Artificial Intelligence', org: 'Nutanix', date: '2024' },
  { name: 'Nutanix Certified Professional – Multicloud Infrastructure 6', org: 'Nutanix', date: 'Oct 2023' },
  { name: 'NCSE – Nutanix Certified Systems Engineer', org: 'Nutanix', date: 'Jun 2023' },
  { name: 'Computing in Python II: Control Structures', org: 'Georgia Institute of Technology', date: 'Jul 2022' },
  { name: 'Computing in Python I: Fundamentals and Procedural Programming', org: 'Georgia Institute of Technology', date: 'May 2022' },
  { name: 'Microsoft Certified: Azure AI Fundamentals', org: 'Microsoft', date: 'May 2022' },
  { name: 'Microsoft Certified: Azure Fundamentals', org: 'Microsoft', date: 'Jan 2022' },
];

export const skillGroups = [
  {
    category: 'Languages',
    items: ['Python', 'R & RStudio', 'SQL'],
  },
  {
    category: 'Data Engineering',
    items: [
      'ETL / ELT pipeline development',
      'Data modeling (dimensional, star/snowflake schema)',
      'Data warehousing & data lakes',
      'Batch & streaming processing',
      'Apache Spark',
      'Apache Airflow (orchestration)',
      'dbt (data transformation)',
      'Apache Kafka',
      'SQL & query optimization',
      'Data quality, validation & cleaning (OpenRefine)',
      'Feature engineering',
      'pandas & NumPy',
      'Parquet & columnar formats',
      'Cloud data platforms (Snowflake, BigQuery, Databricks)',
    ],
  },
  {
    category: 'AI / Machine Learning',
    items: [
      'Supervised learning (logistic regression, classification)',
      'scikit-learn',
      'spaCy / NLP & Named Entity Recognition',
      'TF-IDF & text feature engineering',
      'NLP pipeline design',
      'Model deployment & inferencing infrastructure',
      'AI-ready architecture design',
      'GPU-accelerated computing frameworks',
    ],
  },
  {
    category: 'Analytics & Statistics',
    items: [
      'Analytics modeling & data visualization',
      'Business analytics',
      'Time series analysis',
      'Regression analysis',
      'Bayesian statistics',
      'Computational data analytics',
      'Applied analytics practicum (employer-sponsored capstone)',
    ],
  },
  {
    category: 'Accelerated & Cloud Computing',
    items: [
      'GPU workload profiling',
      'Cluster sizing',
      'Parallel computing concepts',
      'Accelerated computing architecture',
      'Microsoft Azure (AI & core infrastructure)',
      'AWS fundamentals',
    ],
  },
  {
    category: 'Infrastructure & Architecture',
    items: [
      'Hyperconverged infrastructure',
      'Private/hybrid/public cloud',
      'SAN & storage architecture',
      'Disaster recovery',
      'High availability',
      'Workload telemetry & performance profiling',
    ],
  },
  {
    category: 'Containers & Orchestration',
    items: ['Kubernetes', 'Containerized workloads'],
  },
  {
    category: 'Platforms',
    items: ['Nutanix Cloud Platform', 'VMware', 'Dell EMC', 'HPE', 'AWS', 'Microsoft Azure'],
  },
  {
    category: 'Data Visualization & BI',
    items: [
      'Microsoft Power BI (dashboard design, DAX, interactive reporting)',
      'Tableau',
      'Matplotlib',
      'Seaborn',
      'D3.js',
      'ggplot2',
      'Data storytelling for sales/technical audiences',
    ],
  },
];

export const experience = [
  {
    company: 'Nutanix',
    role: 'Solutions Architect – Enterprise AI',
    location: 'Remote',
    dates: 'May 2026 – Present',
    bullets: [
      'Pre-Sales Solution Architect working with customers across all verticals to adopt Sovereign AI in their private cloud infrastructure.',
    ],
  },
  {
    company: 'Nutanix',
    role: 'Sr. Systems Engineer',
    location: 'Nashville, TN',
    dates: 'April 2023 – May 2026',
    bullets: [
      'Serve as technical partner to Large Enterprise, Federal, and public-sector clients, architecting cloud platform strategies for performance, resilience, and AI-readiness.',
      'Develop Python-based sample applications to demonstrate platform capabilities to prospective clients, translating complex infrastructure concepts into tangible proof-of-concept deployments.',
      'Architect end-to-end solutions spanning AI infrastructure, cloud, storage, data protection, and compute-intensive workloads — applying knowledge of accelerated computing platforms to right-size environments for demanding use cases.',
      'Leverage real-world telemetry and workload profiling to design appropriately scaled solutions, applying performance analysis methodology to match infrastructure to application requirements.',
      'Support clients in evaluating AI-ready infrastructure strategies, including GPU-accelerated compute architecture and modern data platform integration.',
      'Enable client success in automation, disaster recovery, cost visibility, and high availability for mission-critical environments.',
    ],
  },
  {
    company: 'Dell Technologies',
    role: 'Sr. Solution Architect',
    location: 'Nashville, TN',
    dates: 'June 2021 – February 2023',
    bullets: [
      'Pre-sales Solutions Architect for enterprise datacenter products — storage, server, cloud infrastructure, networking, and data protection — with focus on Healthcare, Commercial, and SLED.',
      'Applied workload telemetry and performance profiling methodology to architect right-sized solutions for complex university and commercial enterprise environments.',
      'Designed end-to-end solutions for datacenters, scoping infrastructure to support business-critical workloads.',
    ],
  },
  {
    company: 'Dell Technologies',
    role: 'Sr. Systems Engineer',
    location: 'Nashville, TN',
    dates: 'April 2018 – June 2021',
    bullets: [
      'Pre-sales Sr. Systems Engineer for healthcare and enterprise datacenter infrastructure.',
      'Supported a large multi-site hospital system as primary technical partner, scoping and designing infrastructure for high-availability, mission-critical clinical environments.',
      'Developed deep expertise in storage, compute, networking, and data protection solutions for complex, regulated workloads.',
    ],
  },
  {
    company: 'Hewlett Packard Enterprise',
    role: 'Enterprise Account Manager',
    location: 'Nashville, TN',
    dates: 'November 2015 – April 2018',
    bullets: [
      'Managed commercial client relationships for HPE datacenter infrastructure: mission-critical compute, hyperconverged/SDx, private and hybrid cloud, networking, and storage.',
      'Drove data-driven investment planning using historical sales analysis and pipeline forecasting across key verticals including healthcare and pharmaceuticals.',
      'Orchestrated cross-functional territory resources and channel partner ecosystems to deliver technical and business outcomes.',
    ],
  },
  {
    company: 'Dell',
    role: 'Datacenter Specialist – Large Enterprise',
    location: 'Nashville, TN',
    dates: 'August 2014 – October 2015',
    bullets: [
      'Achieved 108% of $22M annual quota supporting Large Enterprise, SLED, and institutional clients with pre-sales consultation, scoping, and infrastructure design.',
      'Specialized in PowerEdge servers, EqualLogic/Compellent storage, Force10 networking, and VMware virtualization.',
    ],
  },
  {
    company: 'Dell',
    role: 'Datacenter Specialist – Mid Market',
    location: 'Nashville, TN',
    dates: 'August 2012 – July 2014',
    bullets: [
      'Pre-sales specialist covering Datacenter Server, Storage, and Networking. Averaged 112% of $10M annual quota; achieved 173% attainment in Q1 FY15.',
    ],
  },
  {
    company: 'Dell',
    role: 'Account Manager – Small Business & Consumer',
    location: 'Nashville, TN',
    dates: 'June 2008 – August 2012',
    bullets: [
      'Maintained 60% close rate (10% above team average); consistently performed in top 2–5% for single-day sales events.',
      'Created and delivered mobility product training materials adopted as floor-wide reference resources; named Customer Experience Ambassador Q4 2011.',
    ],
  },
];

export const education = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'Master of Science, Analytics (in progress)',
    dates: 'August 2022 – 2026',
    description:
      'Completing a rigorous, top-ranked interdisciplinary curriculum with a focus on machine learning, natural language processing, and statistical modeling. Gained hands-on expertise across the data lifecycle, using Python, R, and advanced simulation techniques to build scalable data pipelines and extract features from high-dimensional datasets. Applied theoretical frameworks to real-world enterprise challenges through a culminating practicum, developing a competitive install heat map and an interactive data platform to drive data-informed business decisions.',
  },
  {
    school: 'Middle Tennessee State University',
    degree: 'Bachelor of Science, Audio Engineering',
    dates: '2002 – 2006',
    description: '',
  },
];

export const publications = [
  {
    title: 'Observational Study: Policy Impact on Student Infection Rates',
    venue: 'Journal of the Academy of Public Health',
    year: '2025',
    type: 'Peer-Reviewed',
    description:
      'School mask mandates and student SARS-CoV-2 infections: evidence from a natural experiment of neighboring K-12 districts in North Dakota, USA.',
    links: [
      { label: 'DOI', url: 'https://doi.org/10.70542/rcj-japh-art-4abgc4' },
      {
        label: 'Read the article',
        url: 'https://publichealth.realclearjournals.org/research-articles/2025/01/school-mask-mandates-and-student-sars-cov-2-infections-evidence-from-a-natural-experiment-of-neighboring-k-12-districts-in-north-dakota-usa/',
      },
    ],
  },
  {
    title: 'BNT162b2 Vaccine-Associated Myo/Pericarditis in Adolescents: A Stratified Risk-Benefit Analysis',
    venue: 'European Journal of Clinical Investigation',
    year: '2022',
    type: 'Peer-Reviewed',
    description: 'Krug A, Stevenson J, Høeg TB. Eur J Clin Invest. 2022;52:e13759.',
    links: [
      { label: 'DOI', url: 'https://doi.org/10.1111/eci.13759' },
      { label: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/35156705/' },
    ],
  },
  {
    title: 'School Closures in 2020/21: What Really Happened?',
    venue: 'Brownstone Institute',
    year: '2023',
    type: 'Article',
    description:
      'Examines how political partisanship, more than scientific evidence, shaped U.S. school closure decisions during the pandemic, with disadvantaged and minority students bearing the disproportionate cost.',
    links: [
      { label: 'Read the article', url: 'https://brownstone.org/articles/school-closures-in-2020-21-what-really-happened/' },
    ],
  },
  {
    title: 'The Dashed Dreams of Digital Learning',
    venue: 'Brownstone Institute',
    year: '2023',
    type: 'Article',
    description:
      'Reviews evidence that heavy classroom technology use correlates with worse academic outcomes, arguing the promised digital revolution in education benefited ed-tech vendors more than students.',
    links: [
      { label: 'Read the article', url: 'https://brownstone.org/articles/the-dashed-dreams-of-digital-learning/' },
    ],
  },
];

export const projects = [
  {
    title: 'SLED Market Intelligence Platform',
    org: 'Georgia Tech + Nutanix, Inc. — Applied Analytics Practicum',
    date: 'April 2026',
    description:
      'Designed and built an end-to-end NLP pipeline transforming 2.1M+ rows of free-text government procurement data into structured sales intelligence. A logistic-regression "gatekeeper" model (98% accuracy) filters non-IT transactions, and a custom spaCy NER pipeline extracts vendor identity and technology category (90% accuracy against a hand-labeled Golden Dataset). Output powers an interactive Power BI dashboard with Map, Customer, and Reseller views used by Nutanix pre-sales teams.',
    tags: ['Python', 'pandas', 'scikit-learn', 'spaCy', 'NLP', 'Power BI'],
    links: [{ label: 'Read the full paper', url: '/papers/sled-market-intelligence.pdf' }],
    metrics: ['2.1M+ records processed', '98% gatekeeper accuracy', '90% vendor-extraction accuracy'],
  },
  {
    title: 'Nutanix AI DocAssist',
    org: 'Nutanix, Inc.',
    date: 'May 2025',
    description:
      'Built a Python-based demo application showcasing Nutanix AI infrastructure capabilities for document-intelligence use cases, translating complex GPU/AI infrastructure concepts into a tangible proof-of-concept for prospective Higher Ed and SLED clients.',
    tags: ['Python', 'AI Infrastructure', 'GPU Computing'],
    links: [],
    metrics: [],
  },
  {
    title: 'Predicting Pediatric ER Patient Volume',
    org: 'Georgia Tech',
    date: 'December 2023',
    description:
      'Built and evaluated time-series and machine learning models to forecast pediatric emergency room patient volume, supporting staffing and capacity-planning decisions.',
    tags: ['Python', 'Time Series', 'Forecasting'],
    links: [],
    metrics: [],
  },
  {
    title: 'Encompass Workload Insights Pilot',
    org: 'Dell Technologies',
    date: 'May 2019',
    description:
      'Piloted a workload telemetry and insights tool to help pre-sales teams right-size enterprise infrastructure proposals using real-world performance data rather than estimation.',
    tags: ['Workload Analysis', 'Infrastructure Design'],
    links: [],
    metrics: [],
  },
];

export const liveWork = [
  {
    title: 'VehicleReliability.com',
    description:
      'A subscription-based data platform delivering vehicle reliability insights through interactive Power BI dashboards, built and maintained end-to-end (data pipeline, web platform, membership/paywall).',
    url: 'https://vehiclereliability.com',
    cta: 'Visit site',
  },
  {
    title: 'Relevant Data — Substack',
    description: 'Newsletter covering data, analytics, and applied research topics.',
    url: 'https://relevantdata.substack.com',
    cta: 'Read on Substack',
  },
];

export const dashboards = [
  {
    title: 'Hospital Capacity Dashboard',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiODMzMWUxODEtNzMyNy00NWJjLWIzNTktYzJiZGMxMjFiMTgyIiwidCI6IjQ4ZGIxMmFjLTVkYzMtNGQ1MS05N2VkLTVhM2RkZTYxOTlmYyJ9&pageName=ReportSectionf97385449b74f863ad3b',
  },
  {
    title: 'COVID Case Dashboard',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiNzk1NjdmZWQtYTJlMi00OTIxLWJjOTAtNGYzMWNkYjBlMDA3IiwidCI6IjQ4ZGIxMmFjLTVkYzMtNGQ1MS05N2VkLTVhM2RkZTYxOTlmYyJ9',
  },
  {
    title: 'Nashville COVID Impact Dashboard',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiMWUwMjUxMmUtYzI3Yy00YjM5LThkYzYtMGZlMTRlMjZlODgyIiwidCI6IjQ4ZGIxMmFjLTVkYzMtNGQ1MS05N2VkLTVhM2RkZTYxOTlmYyJ9&pageName=ReportSectionf01f0cdb4016ed6f802b',
  },
];
