import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SEO_TITLE =
  "Commercial Solicitor & Contract Transformation | Adesoji Fagade";

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description:
    "Commercial solicitor with 25+ years’ experience advising businesses on contracts, SaaS, corporate matters and contract transformation.",
  // Resolved against metadataBase in app/layout.tsx → https://www.adesojifagadesolicitors.com/
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Adesoji Fagade Solicitor",
    url: "/",
    title: SEO_TITLE,
    description:
      "Commercial legal expertise for businesses navigating contracts, growth and change.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adesoji Fagade Solicitor: Commercial law and contract transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

const CONTACT_HREF = "/contact";

// Every homepage link to contract-transformation content reads from this one value.
const CONTRACT_TRANSFORMATION_HREF = "/contract-transformation";

const helpItems = [
  {
    title: "Legal & Contract Transformation",
    body: [
      "As businesses grow, acquire other organisations or become more complex, contracting processes do not always keep pace.",
      "I help businesses review and improve the end-to-end contracting lifecycle, including contract intake, templates, negotiation, approvals, execution, storage, contract data and ongoing management.",
      "The objective is not simply better contracts. It is a more efficient, controlled and scalable way of contracting across the business.",
    ],
    linkLabel: "Explore Legal & Contract Transformation",
    href: CONTRACT_TRANSFORMATION_HREF,
  },
  {
    title: "Commercial Contracts",
    body: [
      "Drafting, reviewing and negotiating commercial agreements that support business relationships while managing legal and commercial risk.",
      "This includes customer and supplier agreements, consultancy and professional services agreements, terms of business, distribution and agency arrangements, confidentiality agreements and other commercial contracts.",
    ],
    linkLabel: "Explore Commercial Contracts",
    href: "/services",
  },
  {
    title: "Technology, SaaS & Digital Agreements",
    body: [
      "Advice for technology businesses and organisations buying or selling digital products and services.",
      "I advise on SaaS agreements, software and digital services arrangements, licensing, technology procurement, development agreements, intellectual property provisions and associated commercial terms.",
      "My experience in digital business and technology brings an additional practical perspective to the contractual work.",
    ],
    linkLabel: "Explore Technology & Digital Agreements",
    href: "/services",
  },
  {
    title: "Company, Shareholder & Business Arrangements",
    body: [
      "Advice on legal arrangements supporting business ownership, investment, collaboration and growth.",
      "This includes shareholder agreements, joint ventures, business collaborations and contractual arrangements arising from corporate transactions and changes in ownership.",
      "Where specialist tax, regulatory, accounting or other advice is required, I identify the need for that input.",
    ],
    linkLabel: "Explore Corporate & Business Services",
    href: "/services",
  },
];

const transformationSteps = [
  {
    title: "Diagnose",
    body: "Understand how contracting currently works and identify bottlenecks, duplication and risk.",
  },
  {
    title: "Map",
    body: "Design practical current-state and future-state contracting workflows.",
  },
  {
    title: "Standardise",
    body: "Develop appropriate templates, playbooks and consistent contracting routes.",
  },
  {
    title: "Control",
    body: "Clarify authority, approvals, escalation and responsibility.",
  },
  {
    title: "Digitise",
    body: "Identify appropriate opportunities for better contract data, repositories, workflow and technology.",
  },
  {
    title: "Embed",
    body: "Help teams understand and adopt the improved contracting process.",
  },
];

const caseStudyPoints = [
  "review and rationalisation of existing contracts;",
  "development of contract templates;",
  "mapping the contracting journey from prospect and NDA through drafting and negotiation;",
  "redesign of approval and escalation processes;",
  "improvement of contract storage, indexing and retrieval; and",
  "coaching teams involved in the contracting lifecycle.",
];

// Shared class strings
const h2 =
  "font-display text-[clamp(38px,4.6vw,64px)] font-normal leading-[1.05] tracking-[-0.035em]";
const em = "italic text-brass";
const button =
  "inline-flex items-center justify-center gap-[15px] border border-transparent bg-ink px-5 py-[15px] text-[10px] font-semibold uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-[#30414c]";
const buttonLight =
  "inline-flex items-center justify-center gap-[15px] border border-transparent bg-ivory px-5 py-[15px] text-[10px] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-cream";
const textLink =
  "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink underline decoration-brass decoration-1 underline-offset-[6px] transition-colors hover:text-brass";
const inlineLink =
  "text-ink underline decoration-brass underline-offset-4 transition-colors hover:text-brass";
const sectionPad = "px-[7vw] py-20 md:px-[10vw] md:py-[120px]";
const twoCol = `grid ${sectionPad} md:grid-cols-[0.9fr_1.1fr] md:gap-[12vw]`;
const copyCol =
  "mt-9 flex max-w-[560px] flex-col gap-5 text-[17px] text-muted md:mt-0 md:pt-[52px]";

function SectionLabel({
  children,
  className = "text-muted",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mb-[25px] flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${className}`}
    >
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
          <h1 className="mb-[30px] font-display text-[clamp(40px,5.6vw,80px)] font-normal leading-[1.04] tracking-[-0.035em]">
            Commercial law, <em className={em}>contract transformation</em> and
            practical business support.
          </h1>
          <p className="mb-[30px] max-w-[560px] font-display text-[clamp(21px,2vw,27px)] leading-[1.3] tracking-[-0.01em] text-ink">
            Commercial legal expertise for businesses navigating contracts,
            growth and change.
          </p>
          <div className="flex flex-col items-start gap-5">
            <p className="m-0 max-w-[560px] text-[17px] text-muted">
              I advise business owners, management teams and organisations on
              commercial contracts, business relationships and the legal and
              operational processes that support effective contracting.
            </p>
            <p className="m-0 max-w-[560px] text-[17px] text-muted">
              From drafting and negotiating complex agreements to improving how
              contracts are requested, negotiated, approved, signed and
              managed, my approach combines legal judgement, commercial
              understanding and practical process analysis.
            </p>
            <p className="m-0 max-w-[560px] text-[17px] text-muted">
              With more than 25 years&rsquo; legal experience, I provide clear,
              commercially focused advice designed around how your business
              actually operates.
            </p>
            <Link className={`${button} mt-3`} href={CONTACT_HREF}>
              Discuss your requirements <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
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

      {/* Introduction */}
      <section className={`${twoCol} bg-paper`}>
        <div>
          <h2 className={h2}>
            Legal advice grounded in <em className={em}>your business</em>
          </h2>
        </div>
        <div className={copyCol}>
          <p>
            A contract rarely exists in isolation. It sits within a commercial
            relationship, a business process and a wider set of operational
            objectives.
          </p>
          <p>
            I take the time to understand not only the legal issue, but also
            how your business works, what you are trying to achieve and where
            legal processes may be creating unnecessary risk, delay or
            complexity.
          </p>
          <p>
            The objective is straightforward: clear advice, proportionate risk
            management and practical solutions that help your business move
            forward.
          </p>
        </div>
      </section>

      {/* How I can help */}
      <section id="services" className={`bg-cream ${sectionPad}`}>
        <h2 className={`${h2} mb-12 md:mb-16`}>How I can help</h2>
        <ol className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2">
          {helpItems.map(({ title, body, linkLabel, href }, i) => (
            <li
              key={title}
              className="group relative flex flex-col gap-10 overflow-hidden border border-line bg-ivory p-7 transition duration-300 hover:border-brass hover:shadow-[0_22px_44px_-26px_rgba(24,36,45,0.4)] motion-safe:hover:-translate-y-1 md:p-9"
            >
              <span
                aria-hidden="true"
                className="font-display text-[48px] leading-none text-brass"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-1 flex-col">
                <h3 className="mb-4 font-display text-[26px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
                  {title}
                </h3>
                <div className="flex flex-col gap-3 text-[15px] leading-[1.65] text-muted">
                  {body.map((para) => (
                    <p key={para} className="m-0">
                      {para}
                    </p>
                  ))}
                </div>
                <Link className={`${textLink} mt-auto self-start pt-8`} href={href}>
                  {linkLabel} <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100"
              />
            </li>
          ))}
        </ol>
      </section>

      {/* Contract transformation feature */}
      <section id="contract-transformation" className={`bg-paper ${sectionPad}`}>
        <div className="grid md:grid-cols-[0.9fr_1.1fr] md:gap-[12vw]">
          <div>
            <SectionLabel>
              <Link
                href={CONTRACT_TRANSFORMATION_HREF}
                className="transition-colors hover:text-brass"
              >
                Legal &amp; Contract Transformation
              </Link>
            </SectionLabel>
            <h2 className={h2}>
              When the business changes,{" "}
              <em className={em}>contracting often needs to change with it.</em>
            </h2>
          </div>
          <div className={copyCol}>
            <p>
              Growth, acquisitions, new products and increasing organisational
              complexity can expose weaknesses in contracting processes that
              previously worked well.
            </p>
            <p>
              Questions may arise around which templates should be used, who
              can approve particular risks, how negotiations are escalated,
              where signed agreements are stored and whether management has
              reliable visibility of its contractual position.
            </p>
            <p>
              My{" "}
              <Link href={CONTRACT_TRANSFORMATION_HREF} className={inlineLink}>
                contract-transformation work
              </Link>{" "}
              examines the complete contracting lifecycle and identifies
              practical opportunities for improvement.
            </p>
          </div>
        </div>

        <ol className="m-0 mt-14 grid list-none grid-cols-1 gap-px border border-line bg-line p-0 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {transformationSteps.map(({ title, body }, i) => (
            <li key={title} className="flex flex-col gap-6 bg-ivory p-7 md:p-9">
              <span
                aria-hidden="true"
                className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brass"
              >
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-3 font-display text-[28px] font-normal leading-[1.1] tracking-[-0.01em] text-ink">
                  {title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.65] text-muted">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
          <Link className={button} href={CONTACT_HREF}>
            Discuss a Contract Transformation Project{" "}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <Link className={textLink} href={CONTRACT_TRANSFORMATION_HREF}>
            Explore Legal &amp; Contract Transformation{" "}
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Experience / case study */}
      <section className={`bg-ink text-ivory ${sectionPad}`}>
        <div className="grid md:grid-cols-[0.9fr_1.1fr] md:gap-[12vw]">
          <div>
            <SectionLabel className="text-[#a9b7c3]">Case study</SectionLabel>
            <h2 className={h2}>
              Experience <em className={em}>in practice</em>
            </h2>
          </div>
          <div className="mt-9 max-w-[580px] border-l border-brass/60 pl-6 md:mt-0 md:pl-9 md:pt-[52px]">
            <h3 className="mb-5 font-display text-[clamp(24px,2.4vw,32px)] font-normal leading-[1.15] tracking-[-0.01em]">
              Post-acquisition fintech contract transformation
            </h3>
            <p className="mb-6 text-[17px] text-[#c9d2d8]">
              Following a cross-border acquisition, I supported a fintech
              business with a significant review and redesign of its
              contracting operations.
            </p>
            <ul className="m-0 mb-6 flex list-none flex-col gap-3 p-0 text-[16px] text-[#e4e9ec]">
              {caseStudyPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.8em] block h-px w-3 shrink-0 bg-brass"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="m-0 text-[17px] text-[#c9d2d8]">
              The engagement brought together commercial legal expertise,
              process analysis and practical implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className={`${twoCol} bg-cream`}>
        <div>
          <h2 className={h2}>
            More than <em className={em}>legal drafting</em>
          </h2>
        </div>
        <div className={copyCol}>
          <p>My experience extends beyond traditional commercial legal work.</p>
          <p>
            Alongside more than 25 years&rsquo; legal experience, my background
            encompasses business analysis, process design, technology and
            digital services.
          </p>
          <p>
            That combination is particularly useful where a legal issue is also
            a business-process issue.
          </p>
          <p>It enables me to ask not only:</p>
          <div className="mt-2 flex flex-col gap-4">
            <p className="m-0 border-l-2 border-line bg-ivory px-6 py-5 font-display text-[clamp(22px,2.2vw,30px)] leading-[1.25] tracking-[-0.01em] text-ink">
              &ldquo;What should this contract say?&rdquo;
            </p>
            <span
              aria-hidden="true"
              className="ml-6 block h-6 w-px bg-brass"
            />
            <p className="m-0 border-l-2 border-brass bg-ink px-6 py-5 font-display text-[clamp(22px,2.2vw,30px)] leading-[1.25] tracking-[-0.01em] text-ivory">
              &ldquo;How should contracting work across this
              organisation?&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* A direct professional relationship */}
      <section className={`${twoCol} bg-paper`}>
        <div>
          <h2 className={h2}>
            A direct professional <em className={em}>relationship</em>
          </h2>
        </div>
        <div className={copyCol}>
          <p>You work directly with the solicitor responsible for your matter.</p>
          <p>
            I place particular emphasis on clear communication, commercially
            realistic advice, careful preparation, defined scope and costs, and
            candid assessment of risk.
          </p>
          <p>
            The scope of the work and basis of fees are agreed before an
            instruction proceeds.
          </p>
          <p>
            Where a matter requires expertise or resources outside the
            appropriate scope of my practice, I will explain this and discuss
            the appropriate next steps.
          </p>
        </div>
      </section>

      {/* Final call to action */}
      <section id="contact" className={`bg-ivory ${sectionPad}`}>
        <div className="flex flex-col items-center text-center">
          <h2 className={h2}>
            Let&rsquo;s discuss <em className={em}>what your business needs</em>
          </h2>
          <div className="my-[50px] flex max-w-[560px] flex-col gap-5 text-[17px] text-muted">
            <p className="m-0">
              You may need advice on an individual agreement, support with a
              corporate or commercial arrangement, or a wider review of the way
              contracts move through your organisation.
            </p>
            <p className="m-0">
              The first step is a conversation about your business, your
              current position and what you are trying to achieve.
            </p>
          </div>
          <Link href={CONTACT_HREF} className={`${button} w-fit`}>
            Discuss your requirements <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
