export interface CourseInfo {
  title: string;
  subtitle: string;
  instructor: string;
  semester: string;
  level: string;
  credits: number;
  prerequisite: string;
  schedule: string;
  format: string;
}

export interface Week {
  number: number;
  title: string;
  icon: string;
  topics: string[];
  lab?: string;
  homework?: string;
}

export interface Unit {
  title: string;
  icon: string;
  weeks: Week[];
}

export interface AssessmentItem {
  name: string;
  percentage: number;
  description: string;
  icon: string;
}

export interface Tool {
  name: string;
  description: string;
  category: "Programming" | "Analysis" | "Visualization" | "DevOps";
  icon: string;
}

export interface ProjectIdea {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  topics: string[];
  icon: string;
}

export const courseInfo: CourseInfo = {
  title: "Social Network Analysis I",
  subtitle: "SNA-I",
  instructor: "Dr. Mudassir Shabbir",
  semester: "Fall 2025",
  level: "300-level Undergraduate",
  credits: 3,
  prerequisite: "Algorithms course with grade B- or higher",
  schedule: "Lectures within 11:00 AM – 2:00 PM window",
  format:
    "Hands-on lectures, labs, homework assignments, group activities, and final project",
};

export const learningObjectives = [
  "Understand and apply core concepts in supervised and unsupervised machine learning",
  "Gain proficiency in Python for machine learning and data analysis",
  "Model, analyze, and visualize real-world networks using graph theory",
  "Apply machine learning techniques to network problems such as link prediction and node classification",
  "Collaborate on applied projects and communicate results effectively",
];

export const units: Unit[] = [
  {
    title: "Machine Learning Foundations",
    icon: "🤖",
    weeks: [
      {
        number: 1,
        title: "Python Fundamentals & Data Handling",
        icon: "🐍",
        topics: [
          "Python review, Jupyter/Colab setup",
          "Using pandas for data cleaning and summaries",
        ],
        lab: "Clean and summarize a real-world dataset",
        homework: "Explore and clean a dataset; compute stats and visualize",
      },
      {
        number: 2,
        title: "Supervised Learning -- Classification",
        icon: "🧠",
        topics: [
          "Train/test splits, decision trees, k-NN",
          "Accuracy, precision, recall, F1 score",
        ],
        lab: "Build classifiers on Titanic or similar",
        homework: "Compare classifiers on binary classification dataset",
      },
      {
        number: 3,
        title: "Supervised Learning -- Regression",
        icon: "📈",
        topics: [
          "Linear regression, polynomial features",
          "Ridge/Lasso regularization, cross-validation",
        ],
        lab: "Predict housing prices with regularization",
        homework: "Regression on real dataset with model selection",
      },
      {
        number: 4,
        title: "Unsupervised Learning -- Clustering",
        icon: "🔍",
        topics: [
          "K-means, hierarchical clustering",
          "Silhouette analysis, elbow method",
        ],
        lab: "Customer segmentation using clustering",
        homework: "Apply clustering to unlabeled dataset",
      },
      {
        number: 5,
        title: "Dimensionality Reduction",
        icon: "📊",
        topics: [
          "Principal Component Analysis (PCA)",
          "t-SNE for visualization",
        ],
        lab: "Visualize high-dimensional data with PCA and t-SNE",
        homework: "Dimensionality reduction on image or text data",
      },
      {
        number: 6,
        title: "Model Evaluation & Validation",
        icon: "✅",
        topics: [
          "Bias-variance tradeoff, learning curves",
          "Hyperparameter tuning, grid search",
        ],
        lab: "Comprehensive model evaluation pipeline",
        homework: "Build and validate ML pipeline from scratch",
      },
    ],
  },
  {
    title: "Network Science Fundamentals",
    icon: "🕸️",
    weeks: [
      {
        number: 7,
        title: "Introduction to Graph Theory",
        icon: "🔗",
        topics: [
          "Nodes, edges, directed/undirected graphs",
          "NetworkX library, basic graph operations",
        ],
        lab: "Create and visualize simple networks",
        homework: "Analyze structure of real-world network dataset",
      },
      {
        number: 8,
        title: "Network Metrics & Centrality",
        icon: "📐",
        topics: [
          "Degree, betweenness, closeness centrality",
          "PageRank algorithm and applications",
        ],
        lab: "Identify influential nodes in social networks",
        homework: "Centrality analysis on collaboration network",
      },
      {
        number: 9,
        title: "Community Detection",
        icon: "👥",
        topics: [
          "Modularity, Louvain algorithm",
          "Hierarchical community structure",
        ],
        lab: "Find communities in social media networks",
        homework: "Community detection in biological networks",
      },
      {
        number: 10,
        title: "Network Visualization",
        icon: "🎨",
        topics: [
          "Layout algorithms (spring, circular, hierarchical)",
          "Interactive visualization with tools",
        ],
        lab: "Create publication-quality network visualizations",
        homework: "Interactive dashboard for network exploration",
      },
    ],
  },
  {
    title: "Advanced Topics & Applications",
    icon: "🚀",
    weeks: [
      {
        number: 11,
        title: "Machine Learning on Networks",
        icon: "🤖",
        topics: [
          "Node classification, link prediction",
          "Graph neural networks introduction",
        ],
        lab: "Predict connections in social networks",
        homework: "Node classification on citation network",
      },
      {
        number: 12,
        title: "Dynamic Networks",
        icon: "⏰",
        topics: [
          "Temporal networks, evolution analysis",
          "Change detection in networks",
        ],
        lab: "Analyze evolution of collaboration networks",
        homework: "Track community evolution over time",
      },
      {
        number: 13,
        title: "Applications & Case Studies",
        icon: "🌟",
        topics: [
          "Social media analysis, biological networks",
          "Transportation and infrastructure networks",
        ],
        lab: "Real-world case study analysis",
        homework: "Choose domain and analyze relevant network",
      },
      {
        number: 14,
        title: "Final Projects",
        icon: "🎯",
        topics: ["Project presentations", "Peer review and feedback"],
        lab: "Project workshop and troubleshooting",
        homework: "Final project submission and presentation",
      },
    ],
  },
];

export const assessmentBreakdown: AssessmentItem[] = [
  {
    name: "Homework Assignments",
    percentage: 35,
    description:
      "Weekly assignments covering programming, analysis, and theoretical concepts. Typically 6-8 assignments throughout the semester.",
    icon: "📝",
  },
  {
    name: "Lab Participation",
    percentage: 15,
    description:
      "Active participation in hands-on lab sessions, including code demonstrations and peer collaboration.",
    icon: "🧪",
  },
  {
    name: "Midterm Exam",
    percentage: 10,
    description:
      "Mid-semester examination covering foundational concepts and machine learning fundamentals.",
    icon: "📄",
  },
  {
    name: "Final Project",
    percentage: 20,
    description:
      "Comprehensive project applying course concepts to a real-world network dataset, including analysis and presentation.",
    icon: "🎯",
  },
  {
    name: "Final Exam",
    percentage: 20,
    description:
      "Comprehensive examination conducted in lab covering theoretical concepts, practical applications, and problem-solving skills.",
    icon: "📋",
  },
];

export const toolsAndPlatforms: Tool[] = [
  {
    name: "Python",
    description:
      "Primary programming language for all assignments and projects",
    category: "Programming",
    icon: "🐍",
  },
  {
    name: "Jupyter Notebooks",
    description:
      "Interactive development environment for data analysis and visualization",
    category: "Programming",
    icon: "📔",
  },
  {
    name: "Google Colab",
    description: "Cloud-based notebook platform for collaborative coding",
    category: "Programming",
    icon: "☁️",
  },
  {
    name: "VS Code",
    description: "Popular code editor with Python extensions and debugging support",
    category: "Programming",
    icon: "💻",
  },
  {
    name: "NetworkX",
    description: "Python library for network analysis and graph theory",
    category: "Analysis",
    icon: "🕸️",
  },
  {
    name: "scikit-learn",
    description:
      "Machine learning library for classification, regression, and clustering",
    category: "Analysis",
    icon: "🤖",
  },
  {
    name: "pandas",
    description: "Data manipulation and analysis library",
    category: "Analysis",
    icon: "🐼",
  },
  {
    name: "PyTorch",
    description: "Deep learning framework for neural networks and graph neural networks",
    category: "Analysis",
    icon: "🔥",
  },
  {
    name: "Matplotlib",
    description: "Plotting library for creating static visualizations",
    category: "Visualization",
    icon: "📊",
  },
  {
    name: "Plotly",
    description:
      "Interactive visualization library for dynamic plots and dashboards",
    category: "Visualization",
    icon: "📈",
  },
  {
    name: "Gephi",
    description:
      "Network visualization software for large-scale graph analysis",
    category: "Visualization",
    icon: "🎨",
  },
  {
    name: "GitHub",
    description: "Version control and collaboration platform for code sharing",
    category: "DevOps",
    icon: "🐙",
  },
];

export const projectIdeas: ProjectIdea[] = [
  {
    title: "Social Media Influence Analysis",
    description:
      "Analyze Twitter/X or Instagram networks to identify influential users and predict viral content spread",
    difficulty: "Beginner",
    topics: [
      "Centrality measures",
      "Information diffusion",
      "Social media data",
    ],
    icon: "📱",
  },
  {
    title: "Academic Collaboration Networks",
    description:
      "Study co-authorship patterns in academic publications and predict future collaborations",
    difficulty: "Intermediate",
    topics: ["Collaboration networks", "Link prediction", "Temporal analysis"],
    icon: "🎓",
  },
  {
    title: "Transportation Network Optimization",
    description:
      "Analyze city transportation networks to identify bottlenecks and suggest improvements",
    difficulty: "Advanced",
    topics: ["Network flow", "Centrality", "Urban planning"],
    icon: "🚇",
  },
  {
    title: "Protein Interaction Networks",
    description:
      "Study biological networks to understand protein functions and disease mechanisms",
    difficulty: "Intermediate",
    topics: ["Biological networks", "Clustering", "Functional analysis"],
    icon: "🧬",
  },
  {
    title: "Recommendation System Network",
    description:
      "Build a recommendation engine using network-based collaborative filtering",
    difficulty: "Advanced",
    topics: [
      "Bipartite networks",
      "Recommendation algorithms",
      "User behavior",
    ],
    icon: "🎯",
  },
  {
    title: "Movie Actor Collaboration Network",
    description:
      "Analyze Hollywood collaboration patterns and predict successful partnerships",
    difficulty: "Beginner",
    topics: ["Bipartite networks", "Community detection", "Career analysis"],
    icon: "🎬",
  },
  {
    title: "Cryptocurrency Transaction Analysis",
    description:
      "Study blockchain networks to detect suspicious activities and understand transaction patterns",
    difficulty: "Advanced",
    topics: ["Financial networks", "Anomaly detection", "Temporal networks"],
    icon: "₿",
  },
  {
    title: "Scientific Citation Network",
    description:
      "Analyze research paper citations to identify influential works and emerging trends",
    difficulty: "Intermediate",
    topics: ["Citation analysis", "Knowledge graphs", "Trend prediction"],
    icon: "📚",
  },
];
