import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

const sections = [
  { id: "responsible", title: "Who is responsible for your information?" },
  { id: "collect", title: "Information I may collect" },
  { id: "sources", title: "Where information comes from" },
  { id: "lawful-bases", title: "Purposes and lawful bases" },
  { id: "sensitive", title: "Sensitive information and criminal offence data" },
  { id: "recipients", title: "Who may receive information?" },
  { id: "transfers", title: "International transfers" },
  { id: "retention", title: "Retention" },
  { id: "security", title: "Security" },
  { id: "rights", title: "Your rights" },
  { id: "marketing", title: "Marketing and website technologies" },
  { id: "automated", title: "Automated decisions" },
  { id: "complaints", title: "Privacy complaints" },
  { id: "updates", title: "Updates" },
];

// Facts taken directly from sections 1, 6 and 10.
const glance = [
  { label: "Controller", value: "Adesoji Fagade" },
  {
    label: "Selling your information",
    value: "I do not sell personal information",
  },
  { label: "Your requests", value: "Normally answered within one month" },
  { label: "Cost of a request", value: "Normally free of charge" },
];

const lawfulBases = [
  {
    term: "Contract",
    text: "Where processing is necessary to enter into or perform an engagement with you as an individual client.",
  },
  {
    term: "Legal obligation",
    text: "Where processing is necessary to comply with applicable legal duties, including tax and anti-money laundering requirements where these apply.",
  },
  {
    term: "Legitimate interests",
    text: "Where processing is necessary to assess enquiries, deliver services to organisational clients, check conflicts, administer and secure the practice, prevent fraud, meet professional responsibilities or establish, exercise or defend legal rights. I consider your rights and interests before relying on this basis.",
  },
  {
    term: "Consent",
    text: "Where I ask you to agree to an optional use, such as a marketing subscription or a website technology requiring consent. You can withdraw consent at any time without affecting earlier lawful processing.",
  },
];

const retention = [
  {
    term: "Client matter files",
    text: "Normally six years after the matter closes, with longer retention where justified by the matter or applicable legal requirements.",
  },
  {
    term: "Enquiries that do not lead to an instruction",
    text: "Normally 12 months after the last substantive contact. Limited information may be retained longer where necessary for conflict checks or legal claims.",
  },
  {
    term: "Complaint records",
    text: "Normally six years after final resolution, unless a continuing issue requires longer retention.",
  },
  {
    term: "Accounting and statutory compliance records",
    text: "For the applicable statutory period.",
  },
];

// Shared class strings
const p = "m-0 max-w-[40rem] text-[17px] leading-[1.7] text-muted";
const link =
  "text-ink underline decoration-brass underline-offset-4 transition-colors hover:text-brass [overflow-wrap:anywhere] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-brass";
const h2 =
  "font-display text-[clamp(30px,3.4vw,44px)] font-normal leading-[1.1] tracking-[-0.03em]";
const termLabel =
  "text-[10px] font-semibold uppercase leading-snug tracking-[0.16em] text-muted";

const EMAIL = "info@adesojifagadesolicitors.com";

function Section({
  n,
  className = "",
  children,
}: {
  n: number;
  className?: string;
  children: React.ReactNode;
}) {
  const { id, title } = sections[n - 1];
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-t border-line py-12 first:border-t-0 first:pt-0 ${className}`}
    >
      <h2 className={`${h2} mb-6 flex items-baseline gap-4`}>
        <span className="shrink-0 font-display text-[22px] leading-none text-brass">
          {String(n).padStart(2, "0")}
        </span>
        {title}
      </h2>
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  );
}

/** Marks text the source document says must be completed or confirmed before publication. */
function DraftNote({
  title = "Draft note · remove before launch",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[40rem] border-l-4 border-[#b4572a] bg-[#fbf1e8] px-5 py-4 text-[15px] leading-relaxed">
      <p className="mb-1.5 text-[10px] font-semibold uppercase leading-snug tracking-[0.16em] text-[#9a4a22]">
        {title}
      </p>
      <div className="text-ink">{children}</div>
    </div>
  );
}

export default function PrivacyNoticePage() {
  return (
    <main>
      {/* Hero */}
      <section className="grid items-start gap-12 bg-paper px-[7vw] pb-16 pt-[100px] md:grid-cols-[1.1fr_0.9fr] md:gap-[8vw] md:px-[10vw] md:pb-[80px]">
        <div>
          <p className="mb-[25px] flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            <span aria-hidden="true" className="block h-px w-6 bg-brass" />
            Adesoji Fagade Solicitor | SRA No. 8016700
          </p>
          <h1 className="mb-[35px] font-display text-[clamp(44px,6vw,84px)] font-normal leading-[1.02] tracking-[-0.035em]">
            Privacy <em className="italic text-brass">Notice</em>
          </h1>
          <p className="max-w-[500px] text-[17px] text-muted">
            This notice explains how I handle personal information relating to
            enquiries, clients, people involved in client matters, business
            contacts and website visitors.
          </p>
          <p className="mb-0 mt-8 text-sm text-muted">
            Last updated: 6 October 2026
          </p>
        </div>

        <div className="relative isolate">
          <div className="border border-line bg-ivory p-7 md:p-9">
            <span className="mb-6 flex h-11 w-11 items-center justify-center border border-line bg-paper text-brass">
              <Mail size={18} aria-hidden="true" />
            </span>
            <p className="m-0 mb-6 text-[15px] text-muted [overflow-wrap:anywhere]">
              {EMAIL}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex w-full items-center justify-center gap-[15px] bg-ink px-5 py-[15px] text-[10px] font-semibold uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-[#30414c]"
            >
              Email a privacy request{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <span
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-brass"
          />
        </div>
      </section>

      {/* At a glance */}
      <section
        aria-label="At a glance"
        className="bg-paper px-[7vw] pb-16 md:px-[10vw] md:pb-[80px]"
      >
        <dl className="m-0 grid grid-cols-1 border-y border-line sm:grid-cols-2 lg:grid-cols-4">
          {glance.map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col gap-3 border-b border-line py-7 last:border-b-0 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-l lg:first:border-l-0"
            >
              <dt className={termLabel}>{label}</dt>
              <dd className="m-0 font-display text-[24px] leading-[1.2] tracking-[-0.01em] text-ink">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Contents + notice */}
      <section className="bg-paper px-[7vw] pb-20 md:px-[10vw] md:pb-[120px]">
        <div className="grid gap-12 border-t border-line pt-16 md:pt-[80px] lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-[7vw]">
          <nav
            aria-label="On this page"
            className="self-start lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto"
          >
            <p className="mb-4 flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              <span aria-hidden="true" className="block h-px w-6 bg-brass" />
              On this page
            </p>
            <ol className="m-0 grid list-none grid-cols-1 gap-x-6 p-0 text-[15px] leading-snug min-[480px]:grid-cols-2 lg:grid-cols-1 lg:border-l lg:border-line">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="grid grid-cols-[2rem_1fr] py-2 text-ink no-underline transition-colors hover:text-brass focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-brass lg:pl-4"
                  >
                    <span className="font-display text-brass">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="min-w-0">
            {/* 1 */}
            <Section n={1}>
              <p className={p}>
                Adesoji Fagade, practising as Adesoji Fagade Solicitor, is the
                controller of personal information processed by this practice.
                This notice explains how I handle personal information relating
                to enquiries, clients, people involved in client matters,
                business contacts and website visitors.
              </p>
              <p className={p}>
                For privacy enquiries or requests, contact{" "}
                <a className={link} href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>{" "}
                or write to Adesoji Fagade Solicitor, 107–111 Fleet Street,
                London EC4A 2AB.
              </p>
            </Section>

            {/* 2 */}
            <Section n={2}>
              <p className={p}>
                Depending on the enquiry or instruction, I may collect your
                name, address, email, telephone number, business details, role
                and correspondence; identity and verification information;
                information about instructions, agreements, transactions and
                other parties; billing and payment records; and information
                relating to complaints or legal rights.
              </p>
              <p className={p}>
                Where relevant and necessary, matter documents may contain
                sensitive information, including health, ethnicity or religious
                information, or information about criminal allegations or
                convictions. Please avoid sending information that is
                unnecessary for your enquiry or matter.
              </p>
              <p className={p}>
                Website hosting and security services may process technical
                information such as IP addresses, browser details, access times
                and security logs.
              </p>
              <DraftNote>
                The precise website arrangements must be confirmed before this
                notice is published.
              </DraftNote>
            </Section>

            {/* 3 */}
            <Section n={3}>
              <p className={p}>
                I may receive information directly from you, from someone
                authorised to act for you, or from clients, counterparties,
                their advisers, professional contacts, public registers and
                other legitimate sources. Identity or compliance providers may
                supply information where relevant checks are required. Where
                information is obtained indirectly, privacy information will be
                provided as required by law, subject to applicable exemptions,
                including those protecting legal professional privilege and
                confidentiality.
              </p>
            </Section>

            {/* 4 */}
            <Section n={4}>
              <p className={p}>
                I use personal information to respond to enquiries, assess
                whether I can accept an instruction, check conflicts, deliver
                agreed services, communicate about matters, administer fees and
                records, comply with applicable obligations and address
                complaints or legal claims.
              </p>
              <dl className="m-0 grid grid-cols-1 border-t border-line sm:grid-cols-[13rem_minmax(0,1fr)]">
                {lawfulBases.map(({ term, text }) => (
                  <div key={term} className="contents">
                    <dt className="border-b border-line pt-4 font-display text-[22px] leading-tight text-ink sm:py-5 sm:pr-4">
                      {term}
                    </dt>
                    <dd className="m-0 border-b border-line pb-5 pt-1.5 text-[15px] leading-[1.65] text-muted sm:py-5">
                      {text}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className={p}>
                If identity, instruction or other necessary information is not
                provided, I may be unable to accept or continue an instruction.
                I will explain any relevant requirement.
              </p>
            </Section>

            {/* 5 */}
            <Section n={5}>
              <p className={p}>
                In addition to an Article 6 lawful basis, sensitive information
                is processed only where an applicable UK GDPR condition is met.
                This may include processing necessary to establish, exercise or
                defend legal claims under Article 9(2)(f), or another condition
                identified for the particular purpose.
              </p>
              <p className={p}>
                Criminal offence information is processed only where permitted
                by Article 10 and applicable UK law. Where appropriate, this
                includes the legal claims condition in paragraph 33 of Schedule
                1 to the Data Protection Act 2018, covering obtaining legal
                advice and establishing, exercising or defending legal rights.
                Additional safeguards and documentation are maintained where
                required. A different condition will be identified where the
                legal claims condition does not apply.
              </p>
            </Section>

            {/* 6 */}
            <Section n={6}>
              <p className={p}>
                Where necessary and lawful, information may be shared with
                technology providers supporting email, hosting, document storage
                and security; identity or compliance providers; accountants and
                other professional advisers; other lawyers, experts or service
                providers involved in a matter; counterparties or their advisers
                where needed to carry out your instructions; and regulators,
                authorities or other bodies where disclosure is required or
                permitted by law.
              </p>
              <p className={p}>
                Sharing is limited to what is appropriate for the purpose and
                remains subject to professional confidentiality and applicable
                law. Providers acting as processors must operate under
                appropriate data protection terms. I do not sell personal
                information. Your information is not automatically shared with
                any separate consultancy, verification or media business
                associated with me.
              </p>
            </Section>

            {/* 7 */}
            <Section n={7}>
              <DraftNote title="Complete before publication">
                Confirm the email, hosting, storage and other providers used;
                identify any countries outside the UK where personal information
                is transferred or remotely accessed; and specify the actual
                transfer safeguards. These may include UK adequacy regulations,
                an applicable UK-US Data Bridge arrangement, or approved
                contractual safeguards supported by any required assessment.
                Explain how a person can request details or a copy of the
                relevant safeguards. Do not assert that all information remains
                in the UK without checking the providers.
              </DraftNote>
            </Section>

            {/* 8 */}
            <Section n={8}>
              <p className={p}>
                I retain information only for as long as reasonably necessary
                for its purpose, taking account of legal and professional
                obligations, applicable limitation periods, complaints,
                potential claims and the nature of the matter.
              </p>
              <p className={`${termLabel} m-0`}>Standard periods</p>
              <dl className="m-0 grid grid-cols-1 border-t border-line sm:grid-cols-[13rem_minmax(0,1fr)]">
                {retention.map(({ term, text }) => (
                  <div key={term} className="contents">
                    <dt className="border-b border-line pt-4 font-display text-[20px] leading-tight text-ink sm:py-5 sm:pr-4">
                      {term}
                    </dt>
                    <dd className="m-0 border-b border-line pb-5 pt-1.5 text-[15px] leading-[1.65] text-muted sm:py-5">
                      {text}
                    </dd>
                  </div>
                ))}
                <div className="contents">
                  <dt className="border-b border-line pt-4 font-display text-[20px] leading-tight text-ink sm:py-5 sm:pr-4">
                    Website technical and security logs
                  </dt>
                  <dd className="m-0 border-b border-line pb-5 pt-1.5 text-[15px] leading-[1.65] text-muted sm:py-5">
                    <span className="bg-[#fbf1e8] px-1.5 text-[#9a4a22]">
                      [insert the provider-specific period or clear retention
                      criteria after confirmation]
                    </span>
                  </dd>
                </div>
              </dl>
              <DraftNote>
                The source document marks these periods as proposed, to be
                confirmed against the practice’s adopted retention schedule
                before publication.
              </DraftNote>
              <p className={p}>
                When retention is no longer justified, information is securely
                deleted or anonymised. Backup copies are removed through the
                applicable backup cycle.
              </p>
            </Section>

            {/* 9 */}
            <Section n={9}>
              <p className={p}>
                I use appropriate technical and organisational measures to
                protect personal information against unauthorised access, loss
                and misuse. Access is restricted to those who need it for an
                authorised purpose. No transmission or storage method is
                entirely risk-free. Please contact me before sending
                particularly sensitive material so that an appropriate method
                can be agreed.
              </p>
            </Section>

            {/* 10 */}
            <Section n={10}>
              <p className={p}>
                Depending on the circumstances, you may request access to your
                information, correction of inaccuracies, erasure, restriction of
                processing or portability. You may object to processing based on
                legitimate interests and can object at any time to processing
                for direct marketing. Where processing relies on consent, you
                can withdraw it.
              </p>
              <p className={p}>
                These rights are subject to legal conditions and exemptions,
                including those protecting legal professional privilege, other
                people’s rights and records needed for legal obligations or
                claims.
              </p>
              <p className={p}>
                Please send requests to{" "}
                <a className={link} href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
                . I may need to verify your identity. I will normally respond
                within one month, subject to any lawful extension or other
                applicable adjustment, which I will explain. Requests are
                normally free of charge.
              </p>
            </Section>

            {/* 11 */}
            <Section n={11}>
              <p className={p}>
                If optional marketing communications are introduced, I will
                explain how information is used and provide an appropriate way
                to decline or unsubscribe. Client service communications are
                separate from marketing.
              </p>
              <DraftNote title="Complete before publication">
                Confirm the website’s actual cookies, analytics, embedded
                content and enquiry-form providers. Add an accurate cookie
                notice covering purposes, durations and providers, and configure
                consent where legally required. If no cookies are used, verify
                this before stating it.
              </DraftNote>
            </Section>

            {/* 12 */}
            <Section n={12}>
              <DraftNote title="Confirm before publication">
                Proposed wording: “I do not make decisions producing legal or
                similarly significant effects about you solely through automated
                processing.” If any provider uses profiling or such decisions,
                replace this statement with the applicable details, safeguards
                and rights.
              </DraftNote>
            </Section>

            {/* 13: Information Commissioner's Office */}
            <Section n={13}>
              <p className={p}>
                If you are concerned about how I use your information, please
                contact me using the details above. I will consider your
                concerns and seek to resolve them. This does not affect your
                right to complain to the Information Commissioner’s Office.
              </p>
              <dl className="m-0 grid max-w-[40rem] grid-cols-1 border-t border-line sm:grid-cols-[7rem_minmax(0,1fr)]">
                {[
                  {
                    label: "Website",
                    value: (
                      <a
                        className={link}
                        href="https://ico.org.uk/make-a-complaint/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://ico.org.uk/make-a-complaint/
                      </a>
                    ),
                  },
                  {
                    label: "Telephone",
                    value: (
                      <a className={link} href="tel:03031231113">
                        0303 123 1113
                      </a>
                    ),
                  },
                  {
                    label: "Post",
                    value:
                      "Information Commissioner’s Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF",
                  },
                ].map(({ label, value }) => (
                  <div key={label} className="contents">
                    <dt
                      className={`${termLabel} border-b border-line pt-4 sm:py-4`}
                    >
                      {label}
                    </dt>
                    <dd className="m-0 border-b border-line pb-4 pt-1 text-ink sm:py-3.5 [overflow-wrap:anywhere]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Section>

            {/* 14 */}
            <Section n={14} className="!border-t-0">
              <p className={p}>
                This notice may be updated to reflect changes in the practice,
                its services or applicable requirements. The current version
                will be published on the website with its update date. Where
                required, material changes will also be brought to your
                attention.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}
