const blogsData = [
  {
    slug: "bim-implementation-guide",
    title: "Complete Guide to BIM Implementation in Construction Projects",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    category: "BIM Technology",
    date: "March 15, 2024",
    author: "Sarah Mitchell",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    authorBio: "BIM Specialist with 10+ years of experience in digital construction workflows and building information modeling.",
    comments: 12,
    description: "Building Information Modeling (BIM) has revolutionized the construction industry by enabling collaborative design and efficient project management.",
    fullDescription: "The implementation of BIM in construction projects requires careful planning and strategic execution. From selecting the right software tools to training your team, every step plays a crucial role in successful BIM adoption. Modern construction firms are witnessing up to 30% reduction in project costs through effective BIM implementation.",
    secDescription: "BIM integration extends beyond 3D modeling - it encompasses 4D scheduling, 5D cost estimation, and 6D facility management. This holistic approach ensures seamless collaboration between architects, engineers, and contractors throughout the project lifecycle.",
    secFullDescription: "Leading construction companies are now mandating BIM Level 2 compliance for all major projects. This standardization has led to improved communication, reduced rework, and enhanced project delivery timelines. The future of construction lies in intelligent, data-driven decision making powered by BIM technologies.",
    quote: "BIM transformed our project delivery process completely. We reduced coordination issues by 70% and improved our project timelines significantly.",
    tags: ["BIM", "Construction", "Digital Transformation"],
      testimonial: {
      text: "We were struggling with supply chain delays and material wastage. After engaging with Induzy, we experienced a major transformation.",
      author: "David Johnson",
      role: "President, The BIM Partner ",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    }
  },
  {
    slug: "revit-architecture-best-practices",
    title: "Revit Architecture: Best Practices for Professional Projects",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    category: "Revit Training",
    date: "March 10, 2024",
    author: "Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    authorBio: "Certified Revit Professional and BIM Manager specializing in architectural modeling and coordination workflows.",
    comments: 8,
    description: "Mastering Revit Architecture requires understanding of both the software capabilities and industry best practices for modeling complex building structures.",
    fullDescription: "Revit Architecture stands as the industry-leading BIM software for architectural design. Professional firms worldwide rely on Revit for creating intelligent 3D models that contain comprehensive building data. From conceptual design to construction documentation, Revit streamlines the entire architectural workflow with parametric modeling capabilities.",
    secDescription: "Efficient Revit modeling involves proper family creation, template setup, and workset management. These fundamental practices ensure model performance and collaboration efficiency across large project teams.",
    secFullDescription: "Advanced Revit users leverage Dynamo for automation, implement LOD (Level of Development) standards, and utilize cloud collaboration tools for real-time coordination. These practices significantly enhance productivity and model accuracy in professional environments.",
    quote: "Understanding Revit families and templates properly cut our modeling time in half. It's not just about knowing the tools - it's about working smart.",
    tags: ["Revit", "Architecture", "BIM Modeling"],
     testimonial: {
      text: "We were struggling with supply chain delays and material wastage. After engaging with Induzy, we experienced a major transformation.",
      author: "David Johnson",
      role: "President, Induzy Pvt Ltd",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    }
  },
  {
      testimonial: {
      text: "We were struggling with supply chain delays and material wastage. After engaging with Induzy, we experienced a major transformation.",
      author: "David Johnson",
          role: "President, The BIM Partner ",

      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    slug: "navisworks-clash-detection-guide",
    title: "Navisworks Clash Detection: Preventing Costly Construction Errors",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
    category: "BIM Coordination",
    date: "March 5, 2024",
    author: "Emily Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    authorBio: "BIM Coordinator specializing in multi-discipline coordination and clash resolution for mega construction projects.",
    comments: 15,
    description: "Navisworks has become an essential tool for construction coordination, enabling teams to identify and resolve conflicts before they become expensive on-site problems.",
    fullDescription: "Clash detection in Navisworks helps identify spatial conflicts between different building systems - structural, mechanical, electrical, and plumbing. Early detection of these clashes during the design phase can save millions in construction costs and prevent project delays.",
    secDescription: "Modern construction projects involve hundreds of clashes that need systematic review and resolution. Navisworks provides powerful tools for automated clash detection, visual simulation, and coordination workflows.",
    secFullDescription: "Implementing a structured clash detection process with clear protocols and regular coordination meetings ensures all stakeholders are aligned. The ROI on Navisworks coordination is substantial - projects report 80% reduction in on-site conflicts and rework.",
    quote: "Navisworks helped us identify over 200 critical clashes before construction started. It literally saved our project from disaster.",
    tags: ["Navisworks", "Clash Detection", "Coordination"]
  },
  {
    slug: "bim-mep-engineering-workflow",
    title: "BIM for MEP Engineering: Optimizing Building Systems Design",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    category: "MEP Engineering",
    date: "February 28, 2024",
    author: "David Thompson",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    authorBio: "MEP BIM Manager with expertise in HVAC, plumbing, and electrical systems coordination using Revit MEP and AutoCAD MEP.",
    comments: 10,
    description: "MEP systems represent 40% of construction costs in modern buildings. BIM workflows revolutionize how we design, coordinate, and install these critical building systems.",
    fullDescription: "Revit MEP enables engineers to create intelligent models of mechanical, electrical, and plumbing systems with accurate sizing, specifications, and spatial requirements. This precision ensures optimal system performance and efficient installation processes.",
    secDescription: "BIM for MEP goes beyond modeling - it includes energy analysis, load calculations, system simulations, and fabrication-ready drawings. These capabilities transform MEP engineering from traditional 2D drafting to intelligent 3D design.",
    secFullDescription: "Integration of MEP models with architectural and structural disciplines through cloud-based platforms ensures real-time coordination. This collaborative approach reduces installation time by 25% and improves system commissioning success rates.",
    quote: "Using Revit MEP for our HVAC systems allowed us to optimize ductwork routes and reduce material costs by 20% while improving air distribution efficiency.",
      testimonial: {
      text: "We were struggling with supply chain delays and material wastage. After engaging with Induzy, we experienced a major transformation.",
      author: "David Johnson",
      role: "President, Induzy Pvt Ltd",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    tags: ["MEP", "Revit MEP", "Building Systems"]
  },
  {
      testimonial: {
      text: "We were struggling with supply chain delays and material wastage. After engaging with Induzy, we experienced a major transformation.",
      author: "David Johnson",
      role: "President, Induzy Pvt Ltd",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    slug: "bim-career-opportunities-dubai",
    title: "BIM Career Opportunities in Dubai: Skills That Pay Premium Salaries",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    category: "Career Development",
    date: "February 20, 2024",
    author: "Ahmed Al-Mansoori",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    authorBio: "BIM Consultant and career coach helping construction professionals transition to BIM roles in the Middle East region.",
    comments: 25,
    description: "Dubai's construction boom and smart city initiatives have created unprecedented demand for skilled BIM professionals. Companies are offering premium salaries for certified BIM specialists.",
    fullDescription: "The UAE construction industry is rapidly adopting BIM across all project types - from residential towers to mega infrastructure projects. Government mandates requiring BIM for public projects have accelerated this transformation, creating thousands of job opportunities for trained professionals.",
    secDescription: "BIM Managers in Dubai can command salaries ranging from AED 15,000 to AED 35,000 monthly, depending on experience and certifications. Roles include BIM Coordinators, Modelers, Managers, and Consultants across architectural, structural, and MEP disciplines.",
    secFullDescription: "Investing in comprehensive BIM training with hands-on project experience significantly enhances employability. Certifications in Revit, Navisworks, BIM 360, and understanding of ISO 19650 standards make candidates highly competitive in the job market.",
   
    quote: "After completing my BIM certification, I secured a BIM Coordinator position with a 60% salary increase. The demand for these skills is incredible in Dubai.",
     testimonial: {
      text: "We were struggling with supply chain delays and material wastage. After engaging with Induzy, we experienced a major transformation.",
      author: "David Johnson",
      role: "President, Induzy Pvt Ltd",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    tags: ["BIM Careers", "Dubai Jobs", "Salary"]
  }
];
export default  blogsData