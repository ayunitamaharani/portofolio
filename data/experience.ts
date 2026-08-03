export type Stat = { value: string; label: string };
export type Block = { heading: string; body?: string; list?: string[] };

export type Job = {
  id: string;
  tone: "teal" | "blue" | "rose";
  badge: string;
  year: string;
  months: string;
  title: string;
  titleAccent?: string;
  org: string;
  bullets: string[];
  detail: {
    left: Block[];
    rightHeading: string;
    stats: Stat[];
    todo: string[];
    tail?: Block;
    tags?: string[];
    link?: { label: string; href: string };
  };
};

export const jobs: Job[] = [
  {
    id: "e1",
    tone: "teal",
    badge: "Cohort CDC-05",
    year: "2026",
    months: "Feb — Jul",
    title: "Coding Camp 2026 — Data Science",
    titleAccent: "cohort",
    org: "DBS Foundation × Dicoding Indonesia · graduated July 2026",
    bullets: [
      "Intensive training in end-to-end data pipelines — preprocessing and exploratory analysis through to machine learning model development in Python.",
      "Collaborated in an agile team to design and deliver a capstone project, turning a complex dataset into a deployed, user-facing product.",
    ],
    detail: {
      left: [
        {
          heading: "Context",
          body: "A selective national upskilling programme run by DBS Foundation with Dicoding. Six months, full learning path, then a team capstone judged on whether it actually shipped.",
        },
        {
          heading: "What I owned",
          list: [
            "Data analysis and stratified splitting for the capstone dataset.",
            "The Streamlit interface the model was served through.",
            "An A/B test comparing two interface variants.",
          ],
        },
      ],
      rightHeading: "Outcome",
      stats: [
        { value: "10", label: "Courses completed" },
        { value: "1", label: "Deployed capstone" },
      ],
      todo: [],
      link: { label: "SkinSense", href: "#projects" },
    },
  },
  {
    id: "e2",
    tone: "blue",
    badge: "Internship",
    year: "2026",
    months: "Jan — Feb",
    title: "Badan Riset dan Inovasi Nasional",
    titleAccent: "(BRIN)",
    org: "Pusat Riset Iklim dan Atmosfer",
    bullets: [
      "Conducted land use / land cover research, processing Landsat-5 and Sentinel-2 satellite imagery with Google Earth Engine and QGIS.",
      "Applied Fuzzy C-Means clustering and Random Forest classification to produce a land cover map of Segara Anakan.",
      "Authored a kerja praktik report on NDVI and spatial autocorrelation (Moran's I, LISA cluster mapping) in R, and deployed an interactive Streamlit dashboard to communicate the findings.",
    ],
    detail: {
      left: [
        {
          heading: "Context",
          body: "Segara Anakan in Cilacap is one of Java's largest remaining mangrove lagoons, and it has been shrinking for decades. The research centre needed a reproducible way to measure that change from open satellite archives rather than field surveys.",
        },
        {
          heading: "Deliverables",
          list: [
            "Land cover classification map of the lagoon.",
            "Kerja praktik report on NDVI and spatial autocorrelation.",
            "A public Streamlit dashboard for non-technical readers.",
          ],
        },
      ],
      rightHeading: "What came out of it",
      stats: [
        { value: "2,593", label: "NDVI sample points" },
        { value: "0.761", label: "Mean NDVI" },
      ],
      todo: [],
      tags: ["Google Earth Engine", "QGIS", "R", "Streamlit"],
    },
  },
  {
    id: "e3",
    tone: "rose",
    badge: "Organisation",
    year: "2025",
    months: "Jan — Dec",
    title: "Young On Top",
    titleAccent: "Semarang",
    org: "Staff, Catalyst Division · Treasurer & Project Officer",
    bullets: [
      "Served as Treasurer and Project Officer for two major division projects, including volunteer and community-based initiatives.",
      "Led Pekan Literasi with a 9.7k-follower book community — grew attendance 20% through outreach and partnership with two Duta Baca Kota Semarang.",
    ],
    detail: {
      left: [
        {
          heading: "Context",
          body: "Young On Top is a national youth development community. In the Semarang chapter's Catalyst Division I handled money and delivery — the two things that decide whether a volunteer event actually happens.",
        },
        {
          heading: "Pekan Literasi",
          body: "A literacy week run with a 9.7k-follower book community. I led outreach, secured a partnership with two Duta Baca Kota Semarang, and attendance rose 20% against the previous edition.",
        },
      ],
      rightHeading: "Numbers",
      stats: [
        { value: "+20%", label: "Attendance growth" },
        { value: "9.7k", label: "Community reach" },
      ],
      todo: [],
      tail: {
        heading: "Transferable to data work",
        body: "Budget tracking, stakeholder negotiation, and explaining a plan to people who did not write it — the same muscles a dashboard needs.",
      },
    },
  },
];
