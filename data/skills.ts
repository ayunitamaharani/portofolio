export type SkillCard = {
  kicker: string;
  items: string[];
  outer: string;
  inner: string;
  kickerTone: string;
  itemTone: string;
};

export const skillCards: SkillCard[] = [
  {
    kicker: "Programming",
    items: ["Python · Pandas, NumPy", "scikit-learn · PyTorch", "R", "SQL", "MATLAB", "HTML / CSS"],
    outer: "bg-ink/5 border-ink/10", inner: "bg-sand",
    kickerTone: "text-cocoa/45", itemTone: "text-ink",
  },
  {
    kicker: "Data & statistics",
    items: ["Google Earth Engine", "QGIS", "RStudio", "IBM SPSS", "EViews · Minitab", "Google Colab"],
    outer: "bg-teal/10 border-teal/20", inner: "bg-teal",
    kickerTone: "text-mint-light/65", itemTone: "text-mint-light",
  },
  {
    kicker: "Visualisation / BI",
    items: ["Microsoft Power BI", "Looker Studio", "Streamlit", "Excel dashboards"],
    outer: "bg-ink/5 border-ink/10", inner: "bg-pink",
    kickerTone: "text-rose-deep/85", itemTone: "text-maroon",
  },
  {
    kicker: "Methods & languages",
    items: [
      "Supervised & unsupervised ML",
      "Time series & forecasting",
      "Spatial statistics",
      "Bahasa Indonesia — native",
      "English — proficient",
    ],
    outer: "bg-blue/20 border-blue/30", inner: "bg-blue-pale",
    kickerTone: "text-steel/85", itemTone: "text-navy",
  },
];
