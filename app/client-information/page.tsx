import Link from "next/link";
import { ArrowUpRight, ShieldAlert } from "lucide-react";

const facts = [
  { label: "Regulated by", value: "Solicitors Regulation Authority" },
  { label: "SRA number", value: "8016700" },
  { label: "Services", value: "Non-reserved legal services" },
  { label: "Professional indemnity insurance", value: "Not held", alert: true },
];

const sections = [
  {
    title: "Practice status",
    body: [
      "Adesoji Fagade Solicitor is the independent practice of Adesoji Fagade, a solicitor of England and Wales regulated by the Solicitors Regulation Authority. My SRA number is 8016700.",
      "I provide non-reserved legal services. I am regulated personally as a solicitor; the practice is not an SRA-authorised law firm.",
    ],
  },
  {
    title: "Scope of services",
    body: [
      "My services include commercial legal advice and the drafting, review and negotiation of business agreements.",
      "I do not undertake reserved legal activities, including conducting litigation or exercising reserved rights of audience before courts. If your matter requires services outside my practice scope, I will explain this and discuss appropriate next steps.",
    ],
  },
];

const tiles = [
  {
    title: "Concerns and complaints",
    body: "If you are unhappy with my service or fees, please contact me. My Complaints Procedure explains how I will address your concerns and the routes available through the Legal Ombudsman and the Solicitors Regulation Authority.",
    label: "Complaints Procedure",
    href: "/complaints-procedure",
  },
  {
    title: "Your personal information",
    body: "My Privacy Notice explains how personal information is collected, used, shared and retained, and how you can exercise your information rights.",
    label: "Privacy Notice",
    href: "/privacy-notice",
  },
];

// Shared class strings
const h2 =
  "font-display text-[clamp(32px,3.6vw,48px)] font-normal leading-[1.08] tracking-[-0.03em]";
const row =
  "grid gap-6 py-12 md:grid-cols-[0.9fr_1.1fr] md:gap-[8vw] md:py-[72px]";
const copy =
  "flex max-w-[540px] flex-col gap-5 text-[17px] leading-[1.7] text-muted";
const alertInk = "text-[#9a2f1f]";

export default function ClientInformationPage() {
  return (
    <main>
      {/* Hero + facts */}
      <section className="bg-paper px-[7vw] pb-16 pt-[100px] md:px-[10vw] md:pb-[100px]">
        <p className="mb-[25px] flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          <span aria-hidden="true" className="block h-px w-6 bg-brass" />
          Adesoji Fagade Solicitor
        </p>
        <h1 className="mb-14 font-display text-[clamp(44px,6.5vw,92px)] font-normal leading-[1.02] tracking-[-0.035em] md:mb-20">
          Client <em className="italic text-brass">Information</em>
        </h1>

        <dl
          aria-label="Practice at a glance"
          className="m-0 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {facts.map(({ label, value, alert }) => (
            <div
              key={label}
              className={`group relative flex flex-col gap-10 overflow-hidden border bg-ivory p-6 transition duration-300 motion-safe:hover:-translate-y-1 ${
                alert
                  ? "border-[#e3beb4] hover:shadow-[0_22px_44px_-26px_rgba(154,47,31,0.45)]"
                  : "border-line hover:border-brass hover:shadow-[0_22px_44px_-26px_rgba(24,36,45,0.4)]"
              }`}
            >
              <dt className="text-[10px] font-semibold uppercase leading-snug tracking-[0.16em] text-muted">
                {label}
              </dt>
              <dd
                className={`m-0 font-display text-[26px] leading-[1.15] tracking-[-0.01em] ${
                  alert ? alertInk : "text-ink"
                }`}
              >
                {value}
              </dd>
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-0.5 ${alert ? "bg-[#9a2f1f]" : "bg-brass"}`}
              />
            </div>
          ))}
        </dl>
      </section>

      {/* Details */}
      <section className="bg-paper px-[7vw] pb-4 md:px-[10vw]">
        <div className="border-t border-line">
          {sections.map(({ title, body }, i) => (
            <div key={title} className={`${row} border-b border-line`}>
              <div className="flex items-baseline gap-5">
                <span className="font-display text-[22px] leading-none text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className={h2}>{title}</h2>
              </div>
              <div className={copy}>
                {body.map((t) => (
                  <p key={t} className="m-0">
                    {t}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Insurance disclosure */}
        <div className="relative my-12 overflow-hidden border border-[#e3beb4] bg-[#fbf1ee] px-6 py-10 md:my-[72px] md:px-12 md:py-14">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-[#9a2f1f]"
          />
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-[8vw]">
            <div>
              <span className="mb-6 flex h-12 w-12 items-center justify-center border border-[#e3beb4] bg-ivory text-[#9a2f1f]">
                <ShieldAlert size={22} aria-hidden="true" />
              </span>
              <h2 className={h2}>Professional indemnity insurance</h2>
            </div>
            <div className={copy}>
              <p className="m-0 font-display text-[24px] leading-[1.35] tracking-[-0.01em] text-ink">
                I do not hold professional indemnity insurance for this
                practice. As I provide only non-reserved legal services, I am
                not required by the SRA to maintain that insurance.
              </p>
              <p className="m-0">
                This means that there is no professional indemnity insurance
                policy available to meet a claim arising from my work. It does
                not remove my professional duties or any legal liability I may
                have to you.
              </p>
              <p className="m-0">
                My practice arrangements and the protections available to you
                will be explained before you decide whether to instruct me.
              </p>
            </div>
          </div>
        </div>

        <div className={`${row} border-y border-line`}>
          <div className="flex items-baseline gap-5">
            <span className="font-display text-[22px] leading-none text-brass">
              03
            </span>
            <h2 className={h2}>Accepting instructions</h2>
          </div>
          <div className={copy}>
            <p className="m-0">
              Before accepting an instruction, I will complete the necessary
              checks and confirm the scope of work and terms of engagement in
              writing. This will include the basis of fees and relevant
              information about how your matter will be handled.
            </p>
          </div>
        </div>
      </section>

      {/* Link tiles */}
      <section className="mt-16 bg-cream px-[7vw] py-20 md:mt-[100px] md:px-[10vw] md:py-[100px]">
        <div className="grid gap-5 md:grid-cols-2">
          {tiles.map((tile) => (
            <article
              key={tile.href}
              className="group relative flex flex-col gap-5 overflow-hidden border border-line bg-ivory p-7 transition duration-300 focus-within:border-brass hover:border-brass hover:shadow-[0_22px_44px_-26px_rgba(24,36,45,0.4)] motion-safe:hover:-translate-y-1 md:p-9"
            >
              <h2 className="font-display text-[clamp(28px,2.6vw,36px)] font-normal leading-[1.1] tracking-[-0.02em]">
                {tile.title}
              </h2>
              <p className="m-0 flex-1 text-base leading-[1.7] text-muted">
                {tile.body}
              </p>
              <Link
                href={tile.href}
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink after:absolute after:inset-0 after:content-[''] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-brass"
              >
                <span className="underline decoration-brass underline-offset-[6px]">
                  {tile.label}
                </span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="text-brass transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100"
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
