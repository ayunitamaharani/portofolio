export const codingCamp = {
  org: "Dicoding Indonesia × DBS Foundation",
  title: "Coding Camp 2026\nData Science Cohort",
  blurb:
    "A full learning path across ten specialisations, from programming fundamentals and Git to machine learning, data analysis and the mathematics behind it.",
  certificate: "https://drive.google.com/file/d/17F46mD8oK97tgSjdM3ZdCf6_3aBJlYfB/view",
  allCerts: "https://drive.google.com/drive/folders/1xJdbkMySt7ruJ9E4e_emzfcbd43kFlub",
  courses: [
    "Basic Programming for Software Developers",
    "Programming Logic 101",
    "Basic Git and GitHub",
    "Basic Data Science",
    "Basic Data Visualization",
    "Programming with Python",
    "Machine Learning for Beginners",
    "Data Analysis Fundamentals",
    "Data Processing Fundamentals",
    "Mathematics for Data Science",
  ],
};

export type SideCert = {
  org: string; title: string; body: string; href: string;
  outer: string; inner: string; orgTone: string; titleTone: string; bodyTone: string;
  pill: string; pillText: string; pillIcon: string;
};

export const sideCerts: SideCert[] = [
  {
    org: "MySkill",
    title: "Python for Data Science",
    body: "ANN, CNN, clustering, MLP, LSTM, EDA, XGBoost, NLP and Transformer models — with Pandas, NumPy, scikit-learn, TensorFlow and Matplotlib.",
    href: "https://drive.google.com/file/d/1Ixq1FadclRZr0VwUiAwz-_ZopwRYzJUv/view",
    outer: "bg-ink/5 border-ink/10", inner: "bg-pink",
    orgTone: "text-rose-deep/85", titleTone: "text-maroon", bodyTone: "text-maroon/78",
    pill: "bg-cream/80", pillText: "text-rose-deep", pillIcon: "bg-rose-deep/10 text-rose-deep",
  },
  {
    org: "Young On Top",
    title: "Leadership Program",
    body: "Communication, teamwork and effective leadership for organisational growth.",
    href: "https://drive.google.com/file/d/1oW6QKVlwCbcRLCP5yjCoPRs0ddLTLtiS/view",
    outer: "bg-teal/10 border-teal/20", inner: "bg-mint",
    orgTone: "text-teal/85", titleTone: "text-teal-deep", bodyTone: "text-teal-deep/78",
    pill: "bg-cream", pillText: "text-teal-dark", pillIcon: "bg-teal-dark/10 text-teal-dark",
  },
  {
    org: "MySkill",
    title: "Corporate Tax",
    body: "Corporate tax fundamentals — obligations, calculation and reporting.",
    href: "https://drive.google.com/file/d/1JI6wnSTPWkRcAj8qE13JPRUyp4yi-zfw/view",
    outer: "bg-blue/20 border-blue/30", inner: "bg-blue-pale",
    orgTone: "text-steel/85", titleTone: "text-navy", bodyTone: "text-navy/78",
    pill: "bg-cream", pillText: "text-navy-soft", pillIcon: "bg-navy-soft/10 text-navy-soft",
  },
];
