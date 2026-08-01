export type Metric = { value?: string; label: string; todo?: boolean };
export type Step = { n: string; title: string; body: string };
export type Link = { label: string; href: string; primary?: boolean };

export type Project = {
  id: string;
  num: string;
  kicker: string;
  title: string;
  titleBreak?: string;
  blurb: string;
  tags: string[];
  tone: "pink" | "teal" | "blue";
  media?: { kind: "image"; src: string; alt: string } | { kind: "placeholder"; text: string };
  links: Link[];
  metrics: Metric[];
  blocks: { heading: string; body: string; chip?: string }[];
  workflow: Step[];
  stack?: string[];
};

export const featured: Project[] = [
  {
    id: "p1",
    num: "01",
    kicker: "Capstone · 2026",
    title: "SkinSense",
    blurb:
      "An AI-based skin disease detection platform. I ran the data analysis and stratified train–test splitting across 48,162 images in 15 disease classes for an EfficientNet classifier, built an interactive Streamlit dashboard, and A/B tested it to compare model behaviour and user experience.",
    tags: ["PyTorch", "EfficientNet", "Streamlit", "A/B testing"],
    tone: "pink",
    media: { kind: "image", src: "/assets/skinsense-eda.png", alt: "Exploratory data analysis dashboard for the SkinSense skin disease dataset" },
    links: [
      { label: "Live demo", href: "https://skindiseases-capstone-project.streamlit.app/" },
      { label: "GitHub", href: "https://github.com/Project-SkinSense-Detection" },
    ],
    metrics: [
      { value: "48,162", label: "Images analysed" },
      { value: "15", label: "Disease classes" },
      { value: "2", label: "Interface variants A/B tested" },
      { label: "To fill: test accuracy / macro F1", todo: true },
    ],
    blocks: [
      {
        heading: "The brief",
        body: "Skin conditions get self-diagnosed from search results every day, and the confident-sounding answer is often the wrong one. Our capstone brief was a screening aid that returns a ranked prediction, states how confident it is, and never pretends to be a diagnosis.",
      },
      {
        heading: "My role",
        body: "Data analysis, the splitting strategy, the Streamlit front end, and the A/B test. Model training was a shared effort across the team.",
      },
      {
        heading: "What I'd do differently",
        chip: "To fill — one honest sentence",
        body: "Recruiters read this line more carefully than the metrics.",
      },
    ],
    workflow: [
      { n: "01", title: "Dataset audit", body: "48,162 images across 15 classes — checked resolution consistency and how badly the classes were imbalanced." },
      { n: "02", title: "Stratified splitting", body: "Train / validation / test split stratified by class so rare conditions survive into the test set." },
      { n: "03", title: "Preprocessing & augmentation", body: "Resizing, normalisation and augmentation to widen the thin classes without inventing lesions." },
      { n: "04", title: "EfficientNet transfer learning", body: "Fine-tuned a pretrained EfficientNet in PyTorch, tracking per-class recall rather than headline accuracy." },
      { n: "05", title: "Streamlit interface", body: "Upload, prediction, confidence display, and a plain-language caveat about what the tool is not." },
      { n: "06", title: "A/B test", body: "Two interface variants compared on how people read and trusted the confidence score." },
    ],
    stack: ["Python", "PyTorch", "EfficientNet", "Pandas", "NumPy", "scikit-learn", "Streamlit"],
  },
  {
    id: "p2",
    num: "02",
    kicker: "BRIN · 2026",
    title: "Segara Anakan",
    titleBreak: "land cover map",
    blurb:
      "Fuzzy C-Means clustering and Random Forest classification over Landsat-5 and Sentinel-2 imagery, plus NDVI and Moran's I spatial autocorrelation analysis for the mangrove ecosystem in R.",
    tags: ["Google Earth Engine", "QGIS", "R"],
    tone: "teal",
    media: { kind: "image", src: "/assets/segara-dashboard.png", alt: "NDVI dashboard for Segara Anakan built in Streamlit" },
    links: [
      { label: "Live dashboard", href: "https://app-ndvi-segara-anakan.streamlit.app/" },
      { label: "GitHub", href: "https://github.com/ayunitamaharani/streamlit-ndvi-segara-anakan" },
    ],
    metrics: [
      { value: "2,593", label: "NDVI sample points" },
      { value: "0.761", label: "Mean NDVI" },
      { value: "0.302–0.946", label: "NDVI range observed" },
      { label: "To fill: Moran's I & RF accuracy", todo: true },
    ],
    blocks: [
      {
        heading: "The brief",
        body: "Segara Anakan in Cilacap is one of Java's largest remaining mangrove lagoons and has been shrinking for decades. BRIN needed a repeatable way to measure that change from open satellite archives — cheaper and faster than field survey, and re-runnable next year.",
      },
      {
        heading: "Why it matters",
        body: "Mangrove loss is a coastal protection problem before it is an ecology problem. A cluster map that shows where vegetation is significantly weaker tells planners where to intervene first.",
      },
      {
        heading: "Output",
        body: "A land cover map, a kerja praktik report, and the public Streamlit dashboard shown here — anyone can click a point and read its NDVI and coordinates.",
      },
    ],
    workflow: [
      { n: "01", title: "Imagery acquisition", body: "Landsat-5 and Sentinel-2 scenes pulled through Google Earth Engine for the lagoon boundary." },
      { n: "02", title: "Cloud masking & compositing", body: "Tropical coast means persistent cloud — masked and composited to a clean annual mosaic." },
      { n: "03", title: "Fuzzy C-Means clustering", body: "Unsupervised pass first — soft membership suits pixels that are genuinely half water, half mangrove." },
      { n: "04", title: "Random Forest classification", body: "Supervised land cover classes, validated against reference points." },
      { n: "05", title: "NDVI + Moran's I + LISA in R", body: "Global autocorrelation to confirm clustering exists, then LISA to locate the hot and cold spots." },
      { n: "06", title: "Streamlit dashboard", body: "Interactive point map, NDVI colour scale, downloadable CSV." },
    ],
  },
  {
    id: "p3",
    num: "03",
    kicker: "Personal · 2026",
    title: "Flood probability",
    titleBreak: "prediction model",
    blurb:
      "Built and compared flood probability models across Random Forest, XGBoost and LightGBM, with formal methodology documentation covering feature engineering and evaluation metrics.",
    tags: ["Random Forest", "XGBoost", "LightGBM"],
    tone: "blue",
    links: [{ label: "Read the report", href: "https://drive.google.com/file/d/1B_FxI6RIL0zfeffB8b4QpwSHGRUiATun/view" }],
    metrics: [
      { value: "3", label: "Models compared" },
      { label: "To fill: rows in dataset", todo: true },
      { label: "To fill: best model AUC", todo: true },
      { label: "To fill: top predictor", todo: true },
    ],
    blocks: [
      {
        heading: "The brief",
        chip: "To fill: data source",
        body: "Self-initiated project comparing three tree-based approaches to estimating flood probability, treated as a methodology exercise rather than a leaderboard chase.",
      },
      {
        heading: "The point of it",
        body: "Three models that all score similarly are a more interesting result than one that wins. The write-up documents feature engineering choices and why each metric was picked.",
      },
    ],
    workflow: [
      { n: "01", title: "Data assembly & cleaning", body: "Missing values, implausible readings, and a check on how the target was defined." },
      { n: "02", title: "Feature engineering", body: "Derived variables, encoding, and a correlation check to catch leakage." },
      { n: "03", title: "Random Forest baseline", body: "A defensible floor to beat, with feature importance as a first read on drivers." },
      { n: "04", title: "Gradient boosting", body: "XGBoost and LightGBM tuned on the same folds for a fair comparison." },
      { n: "05", title: "Evaluation & write-up", body: "Metrics chosen for an imbalanced, high-cost-of-miss problem, documented formally." },
    ],
  },
];

export type Compact = { num: string; title: string; sub: string; year: string; href: string; chip: string };

export const compact: Compact[] = [
  {
    num: "04",
    title: "Garment employee productivity dashboard",
    sub: "Looker Studio · productivity, overtime and idle time by department",
    year: "2025",
    href: "https://lookerstudio.google.com/reporting/c771de61-eeaa-4547-b251-04d5a1b02d0e",
    chip: "bg-mint text-teal",
  },
  {
    num: "05",
    title: "Double exponential smoothing on IHSG",
    sub: "Trend forecasting with parameter tuning and error measurement",
    year: "2025",
    href: "https://drive.google.com/file/d/1ZtffwWE_7tgBHoVUWjh1MyNNCLUP3LyN/view?usp=drive_link",
    chip: "bg-pink text-rose-deep",
  },
  {
    num: "06",
    title: "Data mining pipeline in Python",
    sub: "Missing data, outlier detection and feature selection → Logistic Regression & Random Forest",
    year: "2025",
    href: "https://drive.google.com/file/d/1Ss9-H1aItWclN4tkqO1pqWcAPkttMfU2/view?usp=drive_link",
    chip: "bg-blue-pale text-steel",
  },
];
