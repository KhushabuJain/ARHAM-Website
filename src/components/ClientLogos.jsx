
const clients = [
  { name: "Client 1", logo: "/images/clients/client-01.png" },
  { name: "Client 2", logo: "/images/clients/client-02.png" },
  { name: "Client 3", logo: "/images/clients/client-03.png" },
  { name: "Client 4", logo: "/images/clients/client-04.png" },
  { name: "Client 5", logo: "/images/clients/client-05.png" },
  { name: "Client 6", logo: "/images/clients/client-06.png" },
  { name: "Client 7", logo: "/images/clients/client-07.png" },
  { name: "Client 8", logo: "/images/clients/client-08.png" },
  { name: "Client 9", logo: "/images/clients/client-09.png" },
  { name: "Client 10", logo: "/images/clients/client-10.png" },
  { name: "Client 11", logo: "/images/clients/client-11.png" },
];

export default function ClientLogos() {
  return (
    <section className="relative overflow-hidden bg-[#101F3C] px-6 py-24">
      {/* Subtle architectural background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D6B779]">
            Our Clients
          </p>

          <div className="mx-auto mb-6 h-[3px] w-16 rounded-full bg-[#D6B779]" />

          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Trusted Clientele
          </h2>

          <p className="mx-auto max-w-2xl leading-relaxed text-[#D1D7E0]">
            We value the relationships we have built with
            organizations and businesses through our
            engineering and construction experience.
          </p>
        </div>

        {/* Client logo cards */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group flex h-28 items-center justify-center rounded-xl border border-[#E9E6DF] bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#D6B779] hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)] md:h-32"
              style={{
                animation: "clientFadeUp 0.7s ease both",
                animationDelay: `${index * 80}ms`,
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain opacity-75 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes clientFadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .group {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
