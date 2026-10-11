import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Service = {
  title: string;
  intro?: string;
  body: string[];
};

const services: Service[] = [
  {
    title: "Commercial contracts",
    intro:
      "Clear agreements help prevent uncertainty and provide a sound basis for doing business.",
    body: [
      "I assist with drafting, reviewing and negotiating terms of business and customer agreements; consultancy and professional services agreements; supply and distribution agreements; agency and introducer arrangements; collaboration and joint venture agreements; and confidentiality and non-disclosure agreements.",
      "Advice addresses the provisions that matter to your position, including payment, performance, liability, termination and dispute resolution.",
    ],
  },
  {
    title: "Procurement and supplier relationships",
    intro:
      "Purchasing goods or services creates obligations that can affect costs, delivery and business continuity.",
    body: [
      "I advise on procurement documentation and supplier agreements, including specifications, service standards, payment terms, contractual remedies and the allocation of risk between the parties.",
    ],
  },
  {
    title: "Intellectual property and confidentiality",
    intro:
      "Brands, content, designs, know-how and confidential information can represent significant business value.",
    body: [
      "I assist with the contractual aspects of protecting and using these assets, including ownership provisions, assignments, licences and confidentiality obligations. Particular attention is given to arrangements with employees, consultants, collaborators and service providers.",
    ],
  },
  {
    title: "Company, shareholder and business arrangements",
    intro:
      "Clear arrangements between owners and commercial partners help establish expectations and reduce the potential for disagreement.",
    body: [
      "I advise on shareholder agreements, business collaborations and contractual arrangements supporting investment, ownership changes and business transactions. Where a matter requires tax, accounting or other specialist advice, the need for that input will be identified.",
    ],
  },
  {
    title: "Advice on commercial disagreements",
    intro:
      "When a business relationship becomes difficult, understanding your contractual position can help you decide how to proceed.",
    body: [
      "I advise on contractual rights and obligations, potential breaches, termination provisions and options for negotiated resolution.",
      "This service does not include conducting court proceedings or providing reserved court representation. Where those services are required, I will discuss the need to instruct an appropriately authorised provider.",
    ],
  },
  {
    title: "Support with UK–Nigeria commercial matters",
    body: [
      "I assist clients with UK-facing commercial arrangements involving Nigerian businesses, founders or investors. This may include contracts, collaborations and the legal arrangements supporting a UK business presence.",
      "The applicable jurisdiction and any requirement for separate local or specialist advice will be considered for each instruction.",
    ],
  },
];

// Shared class strings
const h2 =
  "font-display text-[clamp(42px,5vw,68px)] font-normal leading-[1.03] tracking-[-0.035em]";
const button =
  "inline-flex items-center justify-center gap-[15px] border border-transparent bg-ink px-5 py-[15px] text-[10px] font-semibold uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-[#30414c]";

export default function ServicesPage() {
  return (
    <main>
      {/* Commercial legal support for your business */}
      <section className="bg-paper px-[7vw] pb-20 pt-[100px] md:px-[10vw] md:pb-[120px]">
        <div className="mb-12 md:mb-16 md:grid md:grid-cols-[1.3fr_0.7fr] md:items-end md:gap-[8vw]">
          <div>
            <p className="mb-[25px] flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              <span aria-hidden="true" className="block h-px w-6 bg-brass" />
              Services
            </p>
            <h1 className="font-display text-[clamp(40px,5vw,72px)] font-normal leading-[1.03] tracking-[-0.035em]">
              Commercial legal support for{" "}
              <em className="italic text-brass">your business</em>
            </h1>
          </div>
          <p className="mt-8 border-l-2 border-brass pl-5 text-base text-muted md:mt-0">
            I advise on the legal arrangements underpinning business operations,
            transactions and commercial relationships. Support may involve a
            specific document, a negotiation or advice across an agreed project.
            My practice provides non-reserved legal services.
          </p>
        </div>

        <ol className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, intro, body }, i) => (
            <li key={title} className="flex">
              <article className="group relative flex w-full flex-col overflow-hidden border border-line bg-ivory p-7 transition duration-300 hover:border-brass hover:shadow-[0_22px_44px_-26px_rgba(24,36,45,0.4)] motion-safe:hover:-translate-y-1">
                <span className="mb-10 font-display text-[48px] leading-none text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mb-4 font-display text-[26px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
                  {title}
                </h2>
                <div className="flex flex-col gap-3 text-[15px] leading-[1.65] text-muted">
                  {intro && <p className="m-0 font-medium text-ink">{intro}</p>}
                  {body.map((paragraph) => (
                    <p key={paragraph} className="m-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100"
                />
              </article>
            </li>
          ))}
        </ol>
      </section>

      {/* Fees and scope */}
      <section className="text-center bg-cream px-[7vw] py-20  md:px-[10vw] md:py-[120px]">
        <div>
          <h2 className={h2}>
            Fees <em className="italic text-brass">and scope</em>
          </h2>
        </div>
        <div className="mt-9 flex mx-auto max-w-[600px] flex-col items-center justify-center gap-5 text-[17px] text-muted md:mt-0 md:pt-[52px]">
          <p>
            Before work begins, I will explain the proposed scope, the basis of
            my charges and the likely costs. Depending on the matter, work may
            be undertaken for an agreed fixed fee, at an hourly rate or through
            a staged arrangement.
            <br /> Any proposed change to the agreed scope or fee estimate will
            be discussed with you.
          </p>

          <Link
            className={`${button} mt-1`}
            href="mailto:info@adesojifagadesolicitors.com"
          >
            Discuss your requirements <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
