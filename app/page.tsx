import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "info@adesojifagadesolicitors.com";

const helpItems = [
  {
    title: "Commercial contracts",
    body: "Drafting, reviewing and negotiating agreements that clearly define responsibilities, protect your interests and support your business relationships.",
  },
  {
    title: "Procurement and supply arrangements",
    body: "Advice on purchasing, supplier contracts, service delivery and the allocation of commercial risk.",
  },
  {
    title: "Intellectual property and confidentiality",
    body: "Support with ownership, licensing and contractual protection for brands, creative work, business information and other intellectual assets.",
  },
  {
    title: "Company and business arrangements",
    body: "Advice on shareholder relationships, business collaborations and the legal arrangements supporting ownership and growth.",
  },
];

// Shared class strings
const h2 =
  "font-display text-[clamp(42px,5vw,68px)] font-normal leading-[1.03] tracking-[-0.035em]";
const em = "italic text-brass";
const button =
  "inline-flex items-center justify-center gap-[15px] border border-transparent bg-ink px-5 py-[15px] text-[10px] font-semibold uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-[#30414c]";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-[25px] flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
      <span aria-hidden="true" className="block h-px w-6 bg-brass" />
      {children}
    </p>
  );
}

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section
        id="home"
        className="grid items-end gap-[75px] bg-ivory px-[7vw] pb-20 pt-[100px] md:min-h-[650px] md:grid-cols-[1.3fr_0.7fr] md:gap-[10vw] md:px-[10vw] md:pb-[9vw] md:pt-[10vw]"
      >
        <div>
          <SectionLabel>Independent solicitor · London</SectionLabel>
          <h1 className="mb-[35px] font-display text-[clamp(48px,7vw,92px)] font-normal leading-[1.02] tracking-[-0.035em]">
            Commercial legal advice.
            <br />
            <em className={em}>Clear thinking.</em>
            <br />
            Practical support.
          </h1>
          <div className="flex flex-col items-start gap-5">
            <p className="m-0 max-w-[510px] text-lg text-muted">
              Legal advice should help you understand your position, protect
              your interests and move forward with confidence.
            </p>
            <p className="m-0 max-w-[510px] text-lg text-muted">
              I advise business owners, founders and established organisations
              on the contracts, commercial relationships and legal decisions
              that shape their businesses. From reviewing an agreement to
              supporting a negotiation or advising on business arrangements, my
              approach combines careful legal analysis with an understanding of
              your commercial objectives.
            </p>
            <a
              className={`${button} mt-3`}
              href={`mailto:${EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss your matter <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="self-center border-l border-line pl-6 pt-[30px] md:pl-9">
          <div
            aria-hidden="true"
            className="mb-9 font-display text-[100px] leading-[0.8] text-brass opacity-75 md:mb-[50px] md:text-[130px]"
          >
            AF
          </div>
          <span className="text-[10px] uppercase tracking-[0.15em] text-muted">
            SRA No. 8016700
          </span>
        </div>
      </section>

      {/* Advice grounded in your business */}
      <section className="grid bg-paper px-[7vw] py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-[12vw] md:px-[10vw] md:py-[120px]">
        <div>
          <h2 className={h2}>
            Advice grounded in <em className={em}>your business</em>
          </h2>
        </div>
        <div className="mt-9 flex max-w-[540px] flex-col gap-5 text-[17px] text-muted md:mt-0 md:pt-[52px]">
          <p>
            Every business operates within its own circumstances, priorities and
            constraints. I take the time to understand what you want to achieve,
            identify the legal issues that matter and explain your options in
            clear, practical terms.
          </p>
          <p>
            The aim is to help you make informed decisions, manage risk and put
            workable arrangements in place.
          </p>
        </div>
      </section>

      {/* How I can help */}
      <section
        id="services"
        className="bg-cream px-[7vw] py-20 md:px-[10vw] md:py-[120px]"
      >
        <h2 className={`${h2} mb-12 md:mb-16`}>How I can help</h2>
        <ol className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 xl:grid-cols-4">
          {helpItems.map(({ title, body }, i) => (
            <li
              key={title}
              className="group relative flex flex-col gap-12 overflow-hidden border border-line bg-ivory p-7 transition duration-300 hover:border-brass hover:shadow-[0_22px_44px_-26px_rgba(24,36,45,0.4)] motion-safe:hover:-translate-y-1"
            >
              <span className="font-display text-[48px] leading-none text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-3 font-display text-[24px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
                  {title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.65] text-muted">
                  {body}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100"
              />
            </li>
          ))}
        </ol>
        <Link className={`${button} mt-12`} href="/services">
          Explore services <ArrowUpRight size={17} />
        </Link>
      </section>

      {/* A direct professional relationship */}
      <section className="grid bg-paper px-[7vw] py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-[12vw] md:px-[10vw] md:py-[120px]">
        <div>
          <h2 className={h2}>
            A direct professional <em className={em}>relationship</em>
          </h2>
        </div>
        <div className="mt-9 flex max-w-[540px] flex-col gap-5 text-[17px] text-muted md:mt-0 md:pt-[52px]">
          <p>
            You work directly with the solicitor advising on your matter. I
            place particular emphasis on clear communication, careful
            preparation and candid advice, including where a proposed approach
            creates unnecessary risk or requires further specialist input.
          </p>
          <p>
            The scope of work and basis of fees are agreed before an instruction
            proceeds.
          </p>
        </div>
      </section>

      {/* Let's discuss what you need */}
      <section
        id="contact"
        className="bg-ivory px-[7vw] py-20 md:px-[10vw] md:py-[120px]"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className={h2}>
            Let&rsquo;s discuss <em className={em}>what you need</em>
          </h2>
          <p className="my-[50px] max-w-[500px] text-[17px] text-muted">
            Whether you have an agreement to review, a business decision to make
            or a legal issue to resolve, please get in touch with a brief
            outline of your matter.
          </p>
          <a href={`mailto:${EMAIL}`} className={`${button} w-fit`}>
            Make an enquiry <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
