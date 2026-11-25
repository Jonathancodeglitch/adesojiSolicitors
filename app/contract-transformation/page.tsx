import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SEO_TITLE = "Contract & Legal Operations Transformation | Adesoji Fagade";
const SEO_DESCRIPTION =
  "Improve contract processes, templates, approvals, workflows and contract management with practical legal and process transformation support.";

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description: SEO_DESCRIPTION,
  alternates: { canonical: "/contract-transformation" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Adesoji Fagade Solicitor",
    url: "/contract-transformation",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
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

const warningSigns = [
  "Different teams use different versions of the same template, or start from the last signed deal.",
  "Nobody is quite sure who can approve a liability cap, a discount or a non-standard term.",
  "Routine agreements queue behind complex ones because everything goes to the same people.",
  "Negotiations stall while comments circulate by email with no clear owner.",
  "Signed contracts are hard to find, and key dates, renewals and obligations are tracked informally or not at all.",
  "After an acquisition, two or more contracting approaches run side by side.",
  "Management cannot easily answer basic questions about the business’s contractual position.",
];

const lifecycle = [
  {
    stage: "Request and intake",
    body: "How a need for a contract is raised, what information is captured at the start and how requests are prioritised and routed.",
  },
  {
    stage: "Templates and drafting",
    body: "Which standard documents exist, whether they reflect how the business actually trades, and who may use or amend them.",
  },
  {
    stage: "Negotiation",
    body: "Fallback positions, negotiation playbooks and the point at which a request for different terms should be escalated.",
  },
  {
    stage: "Approval and authority",
    body: "Who can accept which risks, approve which deviations and commit the business, and how those decisions are recorded.",
  },
  {
    stage: "Signature and execution",
    body: "Signing authority, execution formalities and the controls that make sure the agreed version is the version signed.",
  },
  {
    stage: "Storage and contract data",
    body: "Where executed agreements are kept, how they are indexed and which key terms are captured so that they can be found and reported on.",
  },
  {
    stage: "Obligations, renewals and change",
    body: "Tracking commitments, renewal and termination dates, variations and the ongoing management of the relationship after signature.",
  },
];

const approach = [
  {
    title: "Diagnose",
    body: "Interviews with the people who request, negotiate, approve and manage contracts, together with a review of a sample of agreements and existing templates, to establish how contracting actually works today.",
    output: "Findings on bottlenecks, duplication, risk exposure and priorities.",
  },
  {
    title: "Map",
    body: "The current contracting journey is documented step by step, then a practical future-state process is designed around the business’s size, risk appetite and resources.",
    output: "Current-state and future-state workflow maps.",
  },
  {
    title: "Standardise",
    body: "Templates are reviewed, rationalised and redrafted where needed, supported by guidance on when each document should be used and which positions can be accepted.",
    output: "Template set, negotiation playbooks and contracting routes.",
  },
  {
    title: "Control",
    body: "Decision rights are clarified so that routine matters move quickly while material risks reach the right people.",
    output: "Approval and escalation framework, with clear responsibilities.",
  },
  {
    title: "Digitise",
    body: "Opportunities are identified for better contract data, a reliable repository and workflow tools. The aim is to define what the business needs before any technology is chosen.",
    output: "Contract data fields, repository structure and requirements for technology.",
  },
  {
    title: "Embed",
    body: "Teams are supported through the change with guidance and coaching, so the improved process is understood and used in practice.",
    output: "Guidance materials, team coaching and a plan for ongoing ownership.",
  },
];

const situations = [
  {
    title: "Growing businesses",
    body: "Where contract volumes have increased and processes designed for a smaller organisation are no longer keeping pace.",
  },
  {
    title: "Following an acquisition",
    body: "Where different businesses, templates and approval routes need to be brought together into one coherent approach.",
  },
  {
    title: "New products and markets",
    body: "Where launching a SaaS, digital or service offering calls for new customer terms and a repeatable way of contracting.",
  },
  {
    title: "Organisations without a legal operations function",
    body: "Where contracting is handled across sales, procurement, finance and management with no single owner of the process.",
  },
];

// Shared class strings (consistent with the rest of the site)
const h2 =
  "font-display text-[clamp(38px,4.6vw,64px)] font-normal leading-[1.05] tracking-[-0.035em]";
const em = "italic text-brass";
const button =
  "inline-flex items-center justify-center gap-[15px] border border-transparent bg-ink px-5 py-[15px] text-[10px] font-semibold uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-[#30414c]";
const sectionPad = "px-[7vw] py-20 md:px-[10vw] md:py-[120px]";
const copyCol =
  "mt-9 flex max-w-[560px] flex-col gap-5 text-[17px] text-muted md:mt-0 md:pt-[52px]";
const inlineLink =
  "text-ink underline decoration-brass underline-offset-4 transition-colors hover:text-brass";

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

export default function ContractTransformationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-ivory px-[7vw] pb-20 pt-[100px] md:px-[10vw] md:pb-[120px]">
        <div className="md:grid md:grid-cols-[1.3fr_0.7fr] md:items-end md:gap-[8vw]">
          <div>
            <SectionLabel>
              <Link href="/services" className="transition-colors hover:text-brass">
                Services
              </Link>
              <span aria-hidden="true">/</span>
              Legal &amp; Contract Transformation
            </SectionLabel>
            <h1 className="mb-[30px] font-display text-[clamp(40px,5.4vw,78px)] font-normal leading-[1.04] tracking-[-0.035em]">
              Contract and legal operations{" "}
              <em className={em}>transformation</em>
            </h1>
            <div className="flex max-w-[600px] flex-col gap-5 text-[17px] text-muted">
              <p className="m-0">
                Most businesses can draft a contract. Fewer have a reliable way
                of contracting: a clear route from the first request to a
                signed, stored and well-managed agreement.
              </p>
              <p className="m-0">
                I help organisations review and improve that route, combining
                commercial legal expertise with process analysis and practical
                implementation, so that contracting becomes quicker, better
                controlled and able to scale with the business.
              </p>
            </div>
          </div>
          <div className="mt-10 border-l-2 border-brass pl-5 md:mt-0">
            <p className="m-0 mb-6 text-base text-muted">
              Suitable for a focused review of one part of the process or a
              wider transformation project, scoped and agreed in advance.
            </p>
            <Link className={button} href={CONTACT_HREF}>
              Discuss a Contract Transformation Project{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className={`grid bg-paper ${sectionPad} md:grid-cols-[0.9fr_1.1fr] md:gap-[12vw]`}>
        <div>
          <h2 className={h2}>
            Signs your contracting process{" "}
            <em className={em}>needs attention</em>
          </h2>
        </div>
        <div className="mt-9 max-w-[580px] md:mt-0 md:pt-[52px]">
          <p className="mb-6 text-[17px] text-muted">
            Contracting problems rarely announce themselves. They tend to show
            up as delay, inconsistency and uncertainty, for example where:
          </p>
          <ul className="m-0 flex list-none flex-col gap-0 border-t border-line p-0 text-[16px] text-ink">
            {warningSigns.map((sign) => (
              <li key={sign} className="flex gap-4 border-b border-line py-4">
                <span
                  aria-hidden="true"
                  className="mt-[0.8em] block h-px w-3 shrink-0 bg-brass"
                />
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The contracting lifecycle */}
      <section className={`bg-cream ${sectionPad}`}>
        <div className="md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-[12vw]">
          <h2 className={h2}>
            The whole <em className={em}>contracting lifecycle</em>
          </h2>
          <div className={copyCol}>
            <p>
              Improvements made at one stage are easily undone at another. A
              better template achieves little if nobody knows who may approve
              changes to it, and a contract repository is of limited value if
              the right information is never captured at signature.
            </p>
            <p>
              The review therefore looks at each stage of the lifecycle and at
              the hand-offs between them.
            </p>
          </div>
        </div>
        <ol className="m-0 mt-14 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
          {lifecycle.map(({ stage, body }, i) => (
            <li
              key={stage}
              className="flex flex-col gap-8 border border-line bg-ivory p-7"
            >
              <span
                aria-hidden="true"
                className="font-display text-[40px] leading-none text-brass"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-3 font-display text-[23px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
                  {stage}
                </h3>
                <p className="m-0 text-[15px] leading-[1.65] text-muted">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Approach and outputs */}
      <section className={`bg-paper ${sectionPad}`}>
        <div className="md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-[12vw]">
          <div>
            <SectionLabel>Approach</SectionLabel>
            <h2 className={h2}>
              How a transformation <em className={em}>project works</em>
            </h2>
          </div>
          <div className={copyCol}>
            <p>
              Each engagement follows six stages. Not every business needs all
              of them: a project may focus on templates and approvals alone, or
              cover the full lifecycle in phases.
            </p>
            <p>
              Each stage produces practical outputs that the business owns and
              can continue to use.
            </p>
          </div>
        </div>
        <ol className="m-0 mt-14 grid list-none grid-cols-1 gap-px border border-line bg-line p-0 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {approach.map(({ title, body, output }, i) => (
            <li key={title} className="flex flex-col gap-6 bg-ivory p-7 md:p-9">
              <span
                aria-hidden="true"
                className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brass"
              >
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-1 flex-col">
                <h3 className="mb-3 font-display text-[28px] font-normal leading-[1.1] tracking-[-0.01em] text-ink">
                  {title}
                </h3>
                <p className="m-0 mb-6 text-[15px] leading-[1.65] text-muted">
                  {body}
                </p>
                <p className="m-0 mt-auto border-t border-line pt-4 text-[14px] leading-[1.6] text-ink">
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Typical output
                  </span>
                  {output}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Why legal expertise matters */}
      <section className={`bg-ink text-ivory ${sectionPad}`}>
        <div className="grid md:grid-cols-[0.9fr_1.1fr] md:gap-[12vw]">
          <div>
            <h2 className={h2}>
              Process improvement, <em className={em}>with legal judgement</em>
            </h2>
          </div>
          <div className="mt-9 flex max-w-[580px] flex-col gap-5 text-[17px] text-[#c9d2d8] md:mt-0 md:pt-[52px]">
            <p>
              Contract processes sit at the point where legal risk, commercial
              pressure and day-to-day operations meet. Improving them well
              requires an understanding of all three.
            </p>
            <p>
              As a solicitor with more than 25 years&rsquo; legal experience
              and a background in business analysis, process design and
              digital services, I can assess which risks genuinely need
              control, draft the templates and playbooks myself, and design
              approval routes that protect the business without slowing it
              down unnecessarily.
            </p>
            <p>
              The advice is independent of any software provider. Where
              technology is appropriate, the focus is on defining what the
              business needs from it, rather than starting with a particular
              product.
            </p>
            <p className="m-0 border-l border-brass/60 pl-5 text-[16px] text-[#e4e9ec]">
              This approach was applied following a cross-border acquisition,
              where I supported a fintech business with a significant review
              and redesign of its contracting operations, from contract
              rationalisation and templates through to approvals, storage and
              team coaching.
            </p>
          </div>
        </div>
      </section>

      {/* When this is useful */}
      <section className={`bg-cream ${sectionPad}`}>
        <h2 className={`${h2} mb-12 md:mb-16`}>
          When this work is <em className={em}>most useful</em>
        </h2>
        <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 xl:grid-cols-4">
          {situations.map(({ title, body }) => (
            <li
              key={title}
              className="group relative flex flex-col overflow-hidden border border-line bg-ivory p-7 transition duration-300 hover:border-brass"
            >
              <h3 className="mb-3 font-display text-[23px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
                {title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.65] text-muted">{body}</p>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Scope and fees */}
      <section className={`grid bg-paper ${sectionPad} md:grid-cols-[0.9fr_1.1fr] md:gap-[12vw]`}>
        <div>
          <h2 className={h2}>
            Scope <em className={em}>and fees</em>
          </h2>
        </div>
        <div className={copyCol}>
          <p>
            Transformation work is scoped before it begins. We will agree the
            parts of the contracting process to be reviewed, the outputs to be
            produced, the people involved and the timetable.
          </p>
          <p>
            The scope of the work and basis of fees are agreed before an
            instruction proceeds. Larger projects can be divided into phases,
            so that each stage is agreed and reviewed before the next begins.
          </p>
          <p>
            Where a project calls for specialist input outside the scope of my
            practice, such as technical systems implementation, data protection
            or tax advice, I will identify this and discuss the appropriate
            next steps. My practice provides non-reserved legal services;
            details of my practice status are on the{" "}
            <Link href="/client-information" className={inlineLink}>
              Client Information
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* Final call to action */}
      <section className={`bg-ivory ${sectionPad}`}>
        <div className="flex flex-col items-center text-center">
          <h2 className={h2}>
            Let&rsquo;s look at <em className={em}>how you contract</em>
          </h2>
          <p className="my-[50px] max-w-[560px] text-[17px] text-muted">
            A first conversation is an opportunity to discuss how contracts
            currently move through your organisation, where the pressure
            points are and what you would like to change.
          </p>
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <Link href={CONTACT_HREF} className={`${button} w-fit`}>
              Discuss a Contract Transformation Project{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/services" className={`${inlineLink} text-[15px]`}>
              View all services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
