import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

const EMAIL = "info@adesojifagadesolicitors.com";

const sections = [
  { id: "commitment", title: "My commitment" },
  { id: "how-to-complain", title: "How to complain" },
  { id: "acknowledgment", title: "Acknowledgment and investigation" },
  { id: "response", title: "My response" },
  { id: "legal-ombudsman", title: "The Legal Ombudsman" },
  { id: "conduct", title: "Professional conduct concerns" },
  { id: "fees", title: "Complaints about fees" },
  { id: "records", title: "Records and confidentiality" },
];

// Shared class strings
const p = "m-0 max-w-[40rem] text-[17px] leading-[1.7] text-muted";
const link =
  "text-ink underline decoration-brass underline-offset-4 transition-colors hover:text-brass [overflow-wrap:anywhere] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-brass";
const h2 =
  "font-display text-[clamp(30px,3.4vw,44px)] font-normal leading-[1.1] tracking-[-0.03em]";

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
        <span className="font-display text-[22px] leading-none text-brass">
          {String(n).padStart(2, "0")}
        </span>
        {title}
      </h2>
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  );
}

export default function ComplaintsProcedurePage() {
  return (
    <main>
      {/* Hero */}
      <section className="grid items-start gap-12 bg-paper px-[7vw] pb-16 pt-[100px] md:grid-cols-[1.1fr_0.9fr] md:gap-[8vw] md:px-[10vw] md:pb-[100px]">
        <div>
          <p className="mb-[25px] flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            <span aria-hidden="true" className="block h-px w-6 bg-brass" />
            Adesoji Fagade Solicitor | SRA No. 8016700
          </p>
          <h1 className="mb-[35px] font-display text-[clamp(44px,6vw,84px)] font-normal leading-[1.02] tracking-[-0.035em]">
            Complaints <em className="italic text-brass">Procedure</em>
          </h1>
          <p className="max-w-[500px] text-[17px] text-muted">
            If you are unhappy with my work, communication or fees, please tell
            me. Complaints are handled fairly, promptly and without charge.
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
              Email your complaint <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <span
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-brass"
          />
        </div>
      </section>

      {/* Contents + procedure */}
      <section className="bg-paper px-[7vw] pb-20 md:px-[10vw] md:pb-[120px]">
        <div className="grid gap-12 border-t border-line pt-16 md:pt-[80px] lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-[7vw]">
          <nav
            aria-label="On this page"
            className="self-start lg:sticky lg:top-28"
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
            <Section n={1}>
              <p className={p}>
                I aim to provide a careful, professional and responsive service.
                If you are unhappy with my work, communication or fees, please
                tell me so that I can investigate and seek to resolve your
                concerns. Complaints are handled fairly, promptly and without
                charge. Making a complaint will not, of itself, prejudice the
                handling of your matter.
              </p>
            </Section>

            <Section n={2}>
              <p className={p}>
                Please contact Adesoji Fagade by email at{" "}
                <a className={link} href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>{" "}
                or write to Adesoji Fagade Solicitor, 107–111 Fleet Street,
                London EC4A 2AB.
              </p>
              <p className={p}>
                Please explain the matter concerned, what you believe went
                wrong, any relevant dates and how you would like the issue
                resolved. Include your name, contact details and any supporting
                correspondence. You do not need to use a particular form or
                legal language. If you need assistance or an adjustment to use
                this procedure, please let me know. I can consider a complaint
                made through an authorised representative.
              </p>
            </Section>

            <Section n={3}>
              <p className={p}>
                I aim to acknowledge your complaint within five working days of
                receipt. I will confirm my understanding of your concerns and
                explain the next steps. I may ask for further information or
                suggest a discussion to clarify the issues.
              </p>
              <p className={p}>
                As an independent practitioner, I am responsible for
                investigating complaints about my practice. I will review the
                relevant file, correspondence and fee information, consider each
                issue fairly and explain my findings. If external assistance is
                appropriate, I will consider it, subject to confidentiality and
                any necessary arrangements; an independent review is not
                guaranteed.
              </p>
            </Section>

            <Section n={4}>
              <p className={p}>
                I aim to provide a substantive written response within 20
                working days. The response will explain my findings and any
                proposed remedy, such as an explanation, apology, corrective
                work or an appropriate adjustment to fees.
              </p>
              <p className={p}>
                If more time is needed, I will explain why and give a revised
                timetable. I aim to conclude the procedure and issue a final
                written response within eight weeks of receiving your complaint.
                If you disagree with an initial response, please explain why so
                that I can consider any further points. This does not extend the
                eight-week period or delay your right to approach the Legal
                Ombudsman.
              </p>
            </Section>

            {/* Legal Ombudsman */}
            <Section n={5}>
              <div className="relative flex flex-col gap-5 overflow-hidden border border-line bg-ivory p-6 sm:p-9">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 bg-brass"
                />
                <p className={p}>
                  If you remain dissatisfied after my final response, or your
                  complaint has not been resolved within eight weeks, you may be
                  able to refer it to the Legal Ombudsman. Its service is
                  independent and free to eligible complainants. Eligibility
                  includes individuals and certain small businesses, charities
                  and other organisations; not every business is eligible. The
                  Ombudsman can confirm whether it can consider your complaint.
                </p>
                <p className={p}>
                  You must normally refer your complaint within one year of the
                  act or omission complained about, or within one year of when
                  you should reasonably have known there was cause for
                  complaint. You must also normally refer it within six months
                  of my final written response. The Ombudsman may extend its
                  time limits where it considers that fair and reasonable.
                </p>

                <dl className="m-0 grid grid-cols-1 border-t border-line sm:grid-cols-[7rem_minmax(0,1fr)]">
                  {[
                    {
                      label: "Website",
                      value: (
                        <a
                          className={link}
                          href="https://www.legalombudsman.org.uk"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://www.legalombudsman.org.uk
                        </a>
                      ),
                    },
                    {
                      label: "Email",
                      value: (
                        <a
                          className={link}
                          href="mailto:enquiries@legalombudsman.org.uk"
                        >
                          enquiries@legalombudsman.org.uk
                        </a>
                      ),
                    },
                    {
                      label: "Telephone",
                      value: (
                        <a className={link} href="tel:03005550333">
                          0300 555 0333
                        </a>
                      ),
                    },
                    {
                      label: "Post",
                      value: "Legal Ombudsman, PO Box 6167, Slough, SL1 0EH",
                    },
                  ].map(({ label, value }) => (
                    <div key={label} className="contents">
                      <dt className="border-b border-line pt-4 text-[10px] font-semibold uppercase leading-snug tracking-[0.16em] text-muted sm:py-4">
                        {label}
                      </dt>
                      <dd className="m-0 border-b border-line pb-4 pt-1 text-ink sm:py-3.5 [overflow-wrap:anywhere]">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className={p}>
                  My final response will explain the applicable referral rights
                  and time limits.
                </p>
              </div>
            </Section>

            <Section n={6}>
              <p className={p}>
                The Solicitors Regulation Authority deals with concerns about
                professional conduct, including dishonesty, discrimination and
                serious breaches of professional obligations. You can report a
                conduct concern directly to the SRA without waiting for this
                complaints procedure to finish. The SRA does not ordinarily
                resolve service complaints or award compensation for poor
                service.
              </p>
              <p className={p}>
                Reporting information:{" "}
                <a
                  className={link}
                  href="https://www.sra.org.uk/consumers/problems/report-solicitor/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.sra.org.uk/consumers/problems/report-solicitor/
                </a>
              </p>
              <p className={p}>
                Please identify Adesoji Fagade, SRA No. 8016700, when reporting
                concerns.
              </p>
            </Section>

            <Section n={7}>
              <p className={p}>
                You can use this procedure to complain about fees. Depending on
                the circumstances, you may also have a right to apply to the
                court for assessment of a solicitor’s bill under the Solicitors
                Act 1974. Separate deadlines and conditions apply. Court
                assessment can affect whether the Legal Ombudsman can consider a
                complaint about the same bill; independent advice may be
                appropriate.
              </p>
            </Section>

            <Section n={8}>
              <p className={p}>
                I keep a record of complaints and their outcomes to respond to
                concerns, meet professional obligations and improve my service.
                Information is handled confidentially, subject to necessary
                investigation, regulatory requirements and lawful disclosure.
                Further information appears in my{" "}
                <Link className={link} href="/privacy-notice">
                  Privacy Notice
                </Link>
                .
              </p>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}
