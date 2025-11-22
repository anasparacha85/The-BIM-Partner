// src/data/servicesData.js
import VirtualDesign from '/public/VirtualDesign.jpg'
import BIMModeling from '/public/BIMEngineeringModeling.jpg'
import ScanToBim from '/public/ScanToBIMServices.jpg'
import BIMProjectManagement from '/public/BIMProjectManagementServices.jpg'
import BIMSecondment from '/public/BIMSecondmentServices.jpg'
import BIM4DService from '/public/4ddesign.jpg'
const services = [
  {
    id: 1,
    slug: "virtual-design-construction",
    title: "Virtual Design & Construction (VDC) Services",
    image:
      VirtualDesign,
    description:
      "Integrated VDC services that combine BIM, logistics planning, and construction sequencing to deliver high-quality projects faster and safer.",
    fullDescription: `Our Virtual Design & Construction (VDC) practice blends advanced Building Information Modeling (BIM) with construction planning, logistics and site simulation. 
We use model-based workflows to validate constructability, optimize on-site sequencing and coordinate multi-disciplinary teams before breaking ground. 
VDC helps owners, contractors and design teams visualize construction phasing, plan material deliveries, stage works, and mitigate risks proactively. 
Our VDC deliverables include: coordinated federated models, construction sequencing animations (4D), sequence-based site logistics plans, and detailed shop drawings derived directly from BIM data.`,
    secDescription:
      "Model-driven construction planning, risk mitigation and schedule optimization.",
    secFullDescription: `We work closely with project stakeholders to map traditional construction processes into model-based workflows. 
This includes material takeoffs, equipment access planning, temporary works modelling, and safety clash checks. 
VDC reduces onsite surprises, improves productivity, and shortens critical-path durations by ensuring that the construction plan is validated in a simulated environment prior to execution.`,
    quote:
      '"Using VDC on our project allowed us to reduce on-site rework and avoid costly schedule overruns — the planning clarity was transformative."',
    innovations: {
      description:
        "Continuous improvement in VDC through multidisciplinary workshops, model automation, and integration with project controls and ERP systems.",
      childTexts: [
        "Automated model validation & QA/QC",
        "Integration with scheduling and cost-control platforms",
        "Custom scripts for geometry-based clash prevention",
      ],
    },
    features: [
      "4D Construction Sequencing",
      "Logistics & Site Simulation",
      "Federated Model Coordination",
      "Model-Based QA/QC",
      "Constructability Reviews",
      "Workface Planning",
      "Material & Equipment Tracking",
    ],
    pieData: [
      { name: "Planning Accuracy", value: 45 },
      { name: "Risk Reduction", value: 35 },
      { name: "Productivity Gain", value: 20 },
    ],
    barData: [
      { month: "JAN", value1: 10, value2: 8 },
      { month: "FEB", value1: 12, value2: 9 },
      { month: "MAR", value1: 15, value2: 11 },
      { month: "APR", value1: 18, value2: 12 },
      { month: "MAY", value1: 20, value2: 15 },
      { month: "JUN", value1: 22, value2: 17 },
      { month: "JUL", value1: 24, value2: 20 },
      { month: "AUG", value1: 26, value2: 22 },
    ],
    faqs: [
      {
        q: "What is VDC and how is it different from BIM?",
        a: "VDC uses BIM as a central tool but focuses on the process and planning outcomes: sequencing, logistics, production planning and linking model data to construction workflows. BIM is the data model; VDC is the applied methodology.",
      },
      {
        q: "Can VDC reduce construction time?",
        a: "Yes — by validating sequences and resolving conflicts in advance, VDC typically reduces field rework and shortens the critical path through optimized sequencing.",
      },
      {
        q: "Which project phases benefit most from VDC?",
        a: "Early planning, preconstruction, and the first phases of construction benefit most, although VDC can be applied throughout the lifecycle for coordination and commissioning.",
      },
    ],
    testimonial: {
      text: "VDC provided clear, model-based sequencing that saved weeks on the schedule during the early build stages.",
      author: "Omar Al-Mansouri",
      role: "Project Director, Gulf Constructors",
      image:
         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  },

  {
    id: 2,
    slug: "bim-modeling-dubai-uae",
    title: "BIM Modeling Services — Dubai, UAE",
    image:
     BIMModeling,
    description:
      "Localized BIM modeling services for architectural, structural and MEP disciplines tailored to Dubai and UAE regulations and standards.",
    fullDescription: `We provide discipline-specific BIM modeling (Architectural, Structural, MEP) with emphasis on local compliance, U.A.E. codes, and multi-disciplinary coordination. 
Our models are developed using industry-standard platforms (Revit, Navisworks, Tekla, Civil 3D) and follow LOD (Level of Development) specifications agreed with the client. 
We ensure that BIM deliverables comply with Dubai Municipality and client EIR (Employer's Information Requirements) and include data-rich elements for asset handover.`,
    secDescription:
      "LOD-compliant BIM models, IFC-ready exports and coordination with local consultants.",
    secFullDescription: `Our process includes template setup to client standards, families and parametric components modelling, MEP routing to suit local utility constraints, and producing COBie/IFC packages for handover. 
We also prepare drawing sets (plans, sections, details) from the coordinated model to expedite approvals and construction.`,
    quote:
      '"Their UAE team delivered BIM models that anticipated local permit requirements and saved time at approval gates."',
    innovations: {
      description:
        "Adapting global BIM workflows to UAE-specific standards, interoperability and asset data expectations for seamless approvals and handover.",
      childTexts: [
        "Country-specific templates & QA checklists",
        "COBie & FM-ready data exports",
        "Family libraries localized to client standards",
      ],
    },
    features: [
      "Architectural BIM (LOD 300-400)",
      "Structural BIM & Shop Drawings",
      "MEP Modelling & Routing",
      "IFC & COBie Exports",
      "Local Regulation Compliance",
      "Clash Resolution Sets",
      "Model Handover Packages",
    ],
    pieData: [
      { name: "Model Completeness", value: 50 },
      { name: "Coordination", value: 30 },
      { name: "Handover Readiness", value: 20 },
    ],
    barData: [
      { month: "JAN", value1: 8, value2: 12 },
      { month: "FEB", value1: 10, value2: 14 },
      { month: "MAR", value1: 13, value2: 16 },
      { month: "APR", value1: 15, value2: 18 },
      { month: "MAY", value1: 18, value2: 20 },
      { month: "JUN", value1: 20, value2: 22 },
      { month: "JUL", value1: 22, value2: 25 },
      { month: "AUG", value1: 25, value2: 28 },
    ],
    faqs: [
      {
        q: "Do you provide BIM services aligned to Dubai Municipality requirements?",
        a: "Yes. We prepare models and documentation to satisfy permitting and building control processes in Dubai and the wider UAE.",
      },
      {
        q: "Can you deliver models in IFC format?",
        a: "Absolutely — we deliver native Revit/Tekla models and IFC exports with property sets mapped for interoperability and handover.",
      },
      {
        q: "What LOD levels do you cover?",
        a: "We deliver LOD 200 through LOD 400 depending on project requirements — from conceptual models to construction-ready models and shop drawings.",
      },
    ],
    testimonial: {
      text: "The UAE-focused BIM models shortened our coordination cycles and led to faster permitting.",
      author: "Fatima Al-Harthy",
      role: "Head of Design, Emirates Developments",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    },
  },

  {
    id: 3,
    slug: "scan-to-bim",
    title: "Scan to BIM Services",
    image:
      ScanToBim,
    description:
      "Convert point clouds and laser scans into accurate, federated BIM models for refurbishment, retrofitting and digital records.",
    fullDescription: `Our Scan-to-BIM services transform reality capture (LiDAR, terrestrial & mobile scans, photogrammetry) into accurate as-built BIM models. 
We extract geometry from point clouds, classify elements, and build parametric models that mirror the physical asset. These models support refurbishment, retrofit design, clash analysis and FM handover. 
Process steps include on-site scanning guidance, point cloud registration, noise cleanup, modelling to agreed LOD, and delivery in client-preferred formats.`,
    secDescription:
      "As-built BIM models from point cloud data, enabling renovation and asset capture.",
    secFullDescription: `We focus on producing clean, validated as-built models that reflect the current state of the structure and services. 
Deliverables may include orthographic drawings, annotated point-cloud viewers, and BIM objects mapped to asset IDs for facility managers. Scan-to-BIM reduces uncertainty during renovation and supports accurate cost and time estimates.`,
    quote:
      '"Scan-to-BIM gave us a reliable as-built model that prevented costly surprises during retrofit works."',
    innovations: {
      description:
        "Combining automated point-cloud segmentation with manual verification to deliver fast, accurate as-built models with asset metadata.",
      childTexts: [
        "Automated plane/pipe detection algorithms",
        "Point-cloud to BIM mapping scripts",
        "Cloud-hosted viewers for stakeholder review",
      ],
    },
    features: [
      "LiDAR & Photogrammetry Processing",
      "Point Cloud Cleanup & Registration",
      "As-built Parametric Modelling",
      "Mesh-to-BIM Conversions",
      "Asset Tagging & Metadata",
      "Orthophotos & Measured Drawings",
      "QA Reports & Tolerance Checks",
    ],
    pieData: [
      { name: "Scan Accuracy", value: 40 },
      { name: "Model Fidelity", value: 35 },
      { name: "Delivery Speed", value: 25 },
    ],
    barData: [
      { month: "JAN", value1: 5, value2: 7 },
      { month: "FEB", value1: 7, value2: 10 },
      { month: "MAR", value1: 9, value2: 13 },
      { month: "APR", value1: 12, value2: 15 },
      { month: "MAY", value1: 14, value2: 18 },
      { month: "JUN", value1: 16, value2: 20 },
      { month: "JUL", value1: 18, value2: 22 },
      { month: "AUG", value1: 20, value2: 25 },
    ],
    faqs: [
      {
        q: "What accuracy can we expect from Scan-to-BIM?",
        a: "Typical scan accuracy depends on equipment and site conditions; we deliver models within client-agreed tolerances — often within 5-15 mm for building fabric where appropriate scanning protocols are used.",
      },
      {
        q: "Do you provide point-cloud viewers for clients?",
        a: "Yes, we provide web-hosted or local point-cloud viewers so stakeholders can inspect scans and compare modeled geometry to the raw data.",
      },
      {
        q: "Can you model MEP from point clouds?",
        a: "We can model primary MEP routes and key equipment. Highly congested services may require targeted scanning and coordination to achieve detailed MEP LOD.",
      },
    ],
    testimonial: {
      text: "Their Scan-to-BIM model let our renovation proceed without unknowns — excellent fidelity and clear deliverables.",
      author: "Sara M.",
      role: "Facilities Manager, Heritage Complex",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80",
    },
  },

  {
    id: 4,
    slug: "bim-project-management",
    title: "BIM Project Management Services",
    image:
     BIMProjectManagement,
    description:
      "BIM-enabled project management that links model data with schedules, budgets and risk registers for data-driven delivery.",
    fullDescription: `Our BIM Project Management service bridges the model environment and project controls. By integrating BIM datasets with scheduling (4D) and cost management (5D) platforms, we provide project managers with direct visibility into model-driven progress, risks, and cost impacts. 
We implement model governance, clash triage processes, information handover plans, and change-control workflows. Our project managers facilitate coordination meetings, maintain the federated model, and produce weekly model-based progress and risk reports.`,
    secDescription:
      "Model-integrated project controls, governance and reporting for better decision-making.",
    secFullDescription: `Deliverables include model-linked schedules, cost-loaded models, issue tracking dashboards, weekly model health reports, and a governance framework (roles, responsibilities, delivery schedule). 
We also provide training for in-house teams on model review and document management to ensure lasting process adoption.`,
    quote:
      '"Model-driven PM gave us better insight into schedule-risk tradeoffs and helped target the highest-impact mitigations."',
    innovations: {
      description:
        "Linking BIM to enterprise project controls and dashboards to enable real-time model-based decision making.",
      childTexts: [
        "Automated model health checks",
        "Model-to-schedule linking",
        "Live dashboards for stakeholder decision-making",
      ],
    },
    features: [
      "4D / 5D Integration",
      "Model Governance & Standards",
      "Clash Management Workflows",
      "Issue Tracking & RFI Support",
      "Model-Based Progress Reporting",
      "Risk & Change Management",
      "Stakeholder Coordination",
    ],
    pieData: [
      { name: "Schedule Control", value: 40 },
      { name: "Cost Visibility", value: 35 },
      { name: "Risk Mitigation", value: 25 },
    ],
    barData: [
      { month: "JAN", value1: 12, value2: 10 },
      { month: "FEB", value1: 14, value2: 12 },
      { month: "MAR", value1: 16, value2: 14 },
      { month: "APR", value1: 18, value2: 15 },
      { month: "MAY", value1: 20, value2: 18 },
      { month: "JUN", value1: 22, value2: 20 },
      { month: "JUL", value1: 24, value2: 22 },
      { month: "AUG", value1: 26, value2: 24 },
    ],
    faqs: [
      {
        q: "How does BIM improve project management?",
        a: "BIM provides a single source of truth; integrating it with schedules and costs enables scenario analysis, more accurate forecasts, and earlier identification of issues that affect time and budget.",
      },
      {
        q: "Can you manage remote BIM teams?",
        a: "Yes. We have proven processes for distributed teams, with cloud model repositories, version control, and regular coordination cycles to keep remote contributors in sync.",
      },
    ],
    testimonial: {
      text: "Their BIM-driven PM gave us clarity into the true impact of design changes on cost and schedule.",
      author: "Khaled Rahman",
      role: "Head of Delivery, Nexus Projects",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    },
  },

  {
    id: 5,
    slug: "bim-secondment-services",
    title: "BIM Secondment & Resource Augmentation",
    image:
      BIMSecondment,
    description:
      "On-demand BIM experts, modelers and coordinators seconded into your team to accelerate delivery and upskill your workforce.",
    fullDescription: `Our BIM secondment services provide skilled personnel—from BIM modelers and federated coordinators to BIM managers and VDC specialists—who integrate with your project teams for short or long-term assignments. 
We carefully match candidates to your technology stack (Revit, Navisworks, Dynamo, Solibri, Tekla, etc.) and take responsibility for onboarding, knowledge transfer, and performance management. Seconded staff operate under your direction while following established model governance and QA processes.`,
    secDescription:
      "Flexible BIM staffing to meet peak demand, critical milestones, or skills gaps.",
    secFullDescription: `Whether you need to scale quickly for a design stage, cover an unexpected resource gap during construction, or bring in specialist skills (e.g., Scan-to-BIM, structural modeling, MEP coordination), our secondment offering provides vetted professionals ready to contribute with minimal ramp-up.`,
    quote:
      '"Their BIM secondment engineers plugged into our team quickly and lifted our coordination capacity during a critical phase."',
    innovations: {
      description:
        "A people-first approach to BIM staffing: competency frameworks, continual training and fit-for-purpose resourcing for each project phase.",
      childTexts: [
        "Role-specific competency checks",
        "Continuous professional development",
        "Blended on-site & remote resourcing models",
      ],
    },
    features: [
      "Revit & Tekla Specialists",
      "Federation Coordinators",
      "BIM Managers & VDC Leads",
      "Scan-to-BIM Experts",
      "MEP & Structural Modelers",
      "Onboarding & Knowledge Transfer",
      "Performance & Compliance Reporting",
    ],
    pieData: [
      { name: "Availability", value: 40 },
      { name: "Expertise", value: 40 },
      { name: "Ramp-up Speed", value: 20 },
    ],
    barData: [
      { month: "JAN", value1: 5, value2: 3 },
      { month: "FEB", value1: 7, value2: 5 },
      { month: "MAR", value1: 9, value2: 7 },
      { month: "APR", value1: 12, value2: 10 },
      { month: "MAY", value1: 15, value2: 12 },
      { month: "JUN", value1: 18, value2: 15 },
      { month: "JUL", value1: 20, value2: 18 },
      { month: "AUG", value1: 22, value2: 20 },
    ],
    faqs: [
      {
        q: "Are seconded staff employed by you or the client?",
        a: "Seconded staff remain employees/contractors of our firm but operate under the client's direction for the agreed period. We manage payroll, HR compliance and performance metrics.",
      },
      {
        q: "How quickly can you provide resources?",
        a: "Typical lead times depend on role seniority; many modeling and coordination roles can be filled within 2–4 weeks for immediate projects, while highly specialized roles may require longer notice.",
      },
    ],
    testimonial: {
      text: "Their BIM specialists became an extension of our team and helped us close critical milestones on time.",
      author: "Nadia El-Sayed",
      role: "Delivery Lead, UrbanBuild",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVLdSDmgrZN7TkzbHJb8dD0_7ASUQuERL2A&s",
    },
  },

  
  {
    id: 6,
    slug: "4d-5d-bim-cost-scheduling",
    title: "4D & 5D BIM — Scheduling & Cost Estimation",
    image:
    BIM4DService,
    description:
      "Integrated time and cost modeling that links the schedule and budget directly to the BIM for scenario analysis and reliable forecasting.",
    fullDescription: `We provide 4D scheduling and 5D cost estimating services that embed time and cost data into BIM elements. 
By linking model elements to schedule activities and cost items, stakeholders can visualize sequence impacts, test mitigation scenarios, and produce more accurate cash-flow forecasts. 
Our workflow supports bid preparation, change-order impact analysis, earned-value reporting and 'what-if' scenario simulations to evaluate alternatives quickly.`,
    secDescription:
      "Model-linked schedule & cost data for forecasting, BOQ automation and scenario planning.",
    secFullDescription: `We automate quantity takeoffs from the BIM, map elements to cost libraries and produce cost-loaded schedules. This integration streamlines bill of quantities production, reduces human errors in takeoffs, and allows rapid re-costing when design changes occur. Outputs include time-phased cashflow, scenario comparison reports and model-linked procurement schedules.`,
    quote:
      '"4D/5D integration helped us forecast cashflow impacts of design choices and improved tender accuracy."',
    innovations: {
      description:
        "Automated takeoffs, cost-library linkage and scenario-driven scheduling to provide fast, accurate decision support.",
      childTexts: [
        "Automated BOQ extraction",
        "Cost library & parametric cost models",
        "Scenario & sensitivity analysis",
      ],
    },
    features: [
      "Model-Linked Scheduling (4D)",
      "Cost Estimation & BOQ Automation (5D)",
      "Earned Value & Cashflow Forecasts",
      "Change Impact Simulation",
      "Procurement Schedule Integration",
      "Scenario-Based Decision Tools",
      "Parametric Cost Libraries",
    ],
    pieData: [
      { name: "Forecast Accuracy", value: 40 },
      { name: "Takeoff Automation", value: 35 },
      { name: "Scenario Analysis", value: 25 },
    ],
    barData: [
      { month: "JAN", value1: 9, value2: 7 },
      { month: "FEB", value1: 11, value2: 9 },
      { month: "MAR", value1: 14, value2: 12 },
      { month: "APR", value1: 16, value2: 14 },
      { month: "MAY", value1: 18, value2: 16 },
      { month: "JUN", value1: 20, value2: 18 },
      { month: "JUL", value1: 22, value2: 20 },
      { month: "AUG", value1: 24, value2: 22 },
    ],
    faqs: [
      {
        q: "How does 4D/5D help with procurement planning?",
        a: "By time-phasing quantities and associating them with procurement milestones, 4D/5D shows when materials are required and helps optimize procurement schedules to reduce storage costs and delays.",
      },
      {
        q: "Can you integrate client cost libraries?",
        a: "Yes — we map client-specific rates and cost libraries into our 5D workflows so estimates align with internal cost control systems.",
      },
    ],
    testimonial: {
      text: "We gained far better visibility on cost-to-complete and scenario impacts after integrating 5D into our estimating process.",
      author: "Rana Siddique",
      role: "Commercial Manager, PrimeBuild",
      image:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=100&q=80",
    },
  },
];

export default services;
