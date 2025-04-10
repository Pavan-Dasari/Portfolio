export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  result: string;
  color: string;
  detailedDescription?: string;
  keyPoints?: string[];
  challenges?: string[];
  solutions?: string[];
  kpis?: Array<{ label: string; value: string; change: string }>;
}

export const projects: Project[] = [
  {
    id: "microlearning",
    title: "AI-Powered Microlearning Platform",
    role: "Founding PM",
    description: "Led development of a personalized learning platform with AI content recommendations and adaptive learning paths.",
    result: "40% improvement in course completion rates",
    color: "from-yellow-500 to-yellow-600",
    detailedDescription: "Spearheaded the conceptualization and development of an AI-driven microlearning platform designed to deliver personalized learning experiences. The platform utilizes machine learning algorithms to analyze user behavior, learning patterns, and preferences to recommend relevant content and create adaptive learning paths.",
    keyPoints: [
      "Conducted extensive market research and user interviews to identify key pain points in existing learning platforms",
      "Developed a comprehensive product roadmap prioritizing features based on user impact and development complexity",
      "Collaborated with AI engineers to implement content recommendation algorithms",
      "Designed adaptive learning paths that adjust difficulty based on user performance"
    ],
    challenges: [
      "Balancing personalization with content diversity",
      "Ensuring algorithm transparency for users",
      "Scaling content creation to meet diverse learning needs"
    ],
    solutions: [
      "Implemented hybrid recommendation system combining collaborative and content-based filtering",
      "Created an explanation interface showing why content was recommended",
      "Developed a content creation framework enabling rapid course development"
    ],
    kpis: [
      { label: "Course Completion Rate", value: "40%", change: "+40%" },
      { label: "User Engagement", value: "35 min/day", change: "+65%" },
      { label: "Content Relevance Rating", value: "4.8/5", change: "+28%" },
      { label: "Platform Retention", value: "78%", change: "+45%" }
    ]
  },
  {
    id: "api-gateway",
    title: "Enterprise API Gateway",
    role: "Product Owner",
    description: "Designed and launched a scalable API gateway connecting 15+ services with unified authentication and monitoring.",
    result: "300% increase in developer adoption",
    color: "from-blue-500 to-blue-600",
    detailedDescription: "Led the development of a centralized API gateway solution that unifies access to multiple internal services, simplifies authentication, and provides comprehensive monitoring and analytics capabilities for enterprise customers.",
    keyPoints: [
      "Standardized API access patterns across the organization",
      "Implemented unified authentication and authorization layer",
      "Created comprehensive monitoring dashboard for API performance",
      "Developed detailed documentation and developer resources"
    ],
    challenges: [
      "Integrating with legacy systems",
      "Maintaining performance at scale",
      "Balancing security with developer experience"
    ],
    solutions: [
      "Developed adapters for legacy service integration",
      "Implemented intelligent caching and request batching",
      "Created tiered access control with flexible permission system"
    ],
    kpis: [
      { label: "Developer Adoption", value: "300%", change: "+300%" },
      { label: "API Response Time", value: "85ms", change: "-65%" },
      { label: "Security Incidents", value: "0", change: "-100%" },
      { label: "Developer Satisfaction", value: "92%", change: "+47%" }
    ]
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard Suite",
    role: "Project Manager",
    description: "Spearheaded development of real-time analytics dashboards providing actionable insights for business stakeholders.",
    result: "25% reduction in decision-making time",
    color: "from-green-500 to-green-600",
    detailedDescription: "Led the creation of a comprehensive analytics dashboard suite delivering real-time business intelligence across multiple departments. The solution transforms complex data into actionable insights through intuitive visualizations, automated reporting, and configurable alerts.",
    keyPoints: [
      "Conducted stakeholder interviews to identify critical KPIs for each department",
      "Designed modular dashboard components for maximum flexibility",
      "Implemented real-time data processing pipeline",
      "Created customizable alert system for KPI thresholds"
    ],
    challenges: [
      "Handling high-volume data streams",
      "Balancing dashboard complexity with usability",
      "Ensuring data accuracy across diverse sources"
    ],
    solutions: [
      "Implemented stream processing architecture for real-time analytics",
      "Created progressive disclosure UI with drill-down capabilities",
      "Developed comprehensive data validation and reconciliation system"
    ],
    kpis: [
      { label: "Decision Making Time", value: "25%", change: "-25%" },
      { label: "User Engagement", value: "82%", change: "+82%" },
      { label: "Data Processing Speed", value: "500ms", change: "-85%" },
      { label: "Report Generation", value: "5 min", change: "-90%" }
    ]
  },
  {
    id: "customer-journey",
    title: "Customer Journey Optimization",
    role: "Product Manager",
    description: "Redesigned onboarding flow and user journey based on extensive user research and analytics data.",
    result: "65% increase in user activation rate",
    color: "from-purple-500 to-purple-600",
    detailedDescription: "Led an end-to-end overhaul of the customer journey focusing on streamlining onboarding, improving feature discovery, and enhancing overall user experience based on comprehensive user research and behavioral analytics.",
    keyPoints: [
      "Conducted user interviews and usability testing across different user segments",
      "Created detailed user personas and journey maps",
      "Implemented A/B testing framework for continuous optimization",
      "Designed contextual help system for complex features"
    ],
    challenges: [
      "Balancing simplicity with feature education",
      "Supporting diverse user skill levels",
      "Measuring long-term impact of journey changes"
    ],
    solutions: [
      "Created progressive onboarding with contextual feature introduction",
      "Implemented adaptive user interfaces based on user behavior",
      "Developed comprehensive user success metrics framework"
    ],
    kpis: [
      { label: "User Activation Rate", value: "65%", change: "+65%" },
      { label: "Time to First Value", value: "2.5 min", change: "-75%" },
      { label: "Support Tickets", value: "35%", change: "-35%" },
      { label: "Feature Adoption", value: "48%", change: "+48%" }
    ]
  },
  {
    id: "ai-content-creator",
    title: "Generative AI Content Creator",
    role: "APM",
    description: "Developed a generative AI tool for creating marketing content with customizable templates and brand voice control.",
    result: "85% reduction in content creation time",
    color: "from-red-500 to-red-600",
    detailedDescription: "Assisted in the development of an AI-powered content generation tool that enables marketing teams to rapidly create on-brand marketing materials across multiple channels while maintaining consistent brand voice and messaging.",
    keyPoints: [
      "Conducted competitive analysis of existing AI content tools",
      "Developed brand voice training methodology for the AI model",
      "Created template system for different content types",
      "Implemented brand guidelines enforcement mechanism"
    ],
    challenges: [
      "Training AI to maintain consistent brand voice",
      "Balancing automation with creative control",
      "Ensuring content quality and accuracy"
    ],
    solutions: [
      "Developed fine-tuning system using brand-specific content corpus",
      "Created hybrid workflow with strategic human oversight",
      "Implemented multi-stage content validation pipeline"
    ],
    kpis: [
      { label: "Content Creation Time", value: "85%", change: "-85%" },
      { label: "Content Quality Score", value: "4.7/5", change: "+12%" },
      { label: "Brand Consistency", value: "94%", change: "+32%" },
      { label: "Marketing ROI", value: "43%", change: "+43%" }
    ]
  }
];
