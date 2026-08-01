export type Stage = {
  n: string; label: string; title: string; body: string;
  card: string; numTone: string; chip: string; titleTone: string; bodyTone: string;
  dots?: boolean;
};

export const stages: Stage[] = [
  {
    n: "01", label: "Collect", title: "Get the raw material",
    body: "Satellite scenes pulled through Google Earth Engine, public datasets, survey exports, scraped tables. Whatever the question needs — before it looks like data at all.",
    card: "bg-teal", numTone: "text-pink", chip: "bg-cream/[.18] text-mint-light", titleTone: "text-cream", bodyTone: "text-mint-light/85",
  },
  {
    n: "02", label: "Clean", title: "The unglamorous half",
    body: "Missing values, outliers, mismatched coordinate systems, class imbalance, cloud cover. This is where most of the honesty of a project lives.",
    card: "bg-pink", numTone: "text-rose", chip: "bg-ink/10 text-plum", titleTone: "text-maroon", bodyTone: "text-maroon/80",
  },
  {
    n: "03", label: "Explore", title: "Look before modelling",
    body: "Distributions, correlations, and — for anything with a location — spatial autocorrelation. Moran's I and LISA maps tell you whether geography is doing the work.",
    card: "bg-blue", numTone: "text-cream", chip: "bg-navy-soft/15 text-navy", titleTone: "text-navy", bodyTone: "text-navy/80",
  },
  {
    n: "04", label: "Model", title: "Train, tune, compare",
    body: "Random Forest, XGBoost, LightGBM, EfficientNet, Fuzzy C-Means — whichever earns its place. Then the harder question: does it still hold on data it has never seen?",
    card: "bg-sand", numTone: "text-rose", chip: "bg-ink/[.08] text-brown", titleTone: "text-ink", bodyTone: "text-cocoa/80",
  },
  {
    n: "05", label: "Communicate", title: "Make the decision obvious",
    body: "A Streamlit dashboard, a Looker report, or three sentences in a meeting. If nobody can act on it, the model was a hobby.",
    card: "bg-ink", numTone: "text-pink", chip: "bg-cream/[.14] text-pink", titleTone: "text-cream", bodyTone: "text-cream/80", dots: true,
  },
];
