const items = [
  "Python", "Scikit-learn", "PyTorch", "R", "SQL",
  "Google Earth Engine", "QGIS", "Streamlit", "Power BI", "Looker Studio",
];

export default function Marquee() {
  return (
    <div
      className="dots overflow-hidden bg-teal py-[17px]"
      style={{ ["--dot" as string]: "rgba(250,243,227,.22)", ["--dot-r" as string]: "8px", ["--dot-s" as string]: "40px" }}
    >
      {/* The list is rendered twice; translating the track -50% loops seamlessly. */}
      <div className="flex w-max animate-marquee items-center gap-[30px] whitespace-nowrap text-[13px] font-bold tracking-[.04em] text-sand">
        {[0, 1].flatMap((pass) =>
          items.flatMap((label) => [
            <span key={pass + label}>{label}</span>,
            <span key={pass + label + "-dot"} aria-hidden className="text-pink">◦</span>,
          ])
        )}
      </div>
    </div>
  );
}
