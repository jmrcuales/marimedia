/**
 * Editorial introduction for the `/blog` index. Holds the page's single H1.
 *
 * Top padding reduced from `pt-40` (MARIWEB-009 final polish): `Navigation`
 * is now a sticky, in-flow header (~80px) rather than a fixed overlay, so
 * this section no longer needs to reserve extra clearance space for it.
 */
export default function BlogIndexHero() {
  return (
    <section className="pt-16 md:pt-20 pb-20 px-4 bg-[#FFF5F7]">
      <div className="container mx-auto max-w-6xl text-center">
        <span className="text-sm font-semibold text-[#D6216E] uppercase tracking-wider">
          Health Articles
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222222] mt-3 mb-5">
          Functional Medicine &amp; Preventive Health Insights
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Clear, practical guides on functional medicine, preventive health,
          and the health summits and trends shaping wellness in 2026, written
          by the Mari Media team.
        </p>
      </div>
    </section>
  );
}
