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
