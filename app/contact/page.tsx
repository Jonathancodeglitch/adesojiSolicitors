import { ArrowUpRight, CalendarClock, Mail, MapPin } from "lucide-react";

const EMAIL = "info@adesojifagadesolicitors.com";

const label =
  "mb-[25px] flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted";
const rowIcon =
  "flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-paper text-brass";

export default function ContactPage() {
  return (
    <main>
      {/* Discuss your matter */}
      <section className="grid items-start gap-12 bg-paper px-[7vw] pb-20 pt-[100px] md:grid-cols-[1.1fr_0.9fr] md:gap-[8vw] md:px-[10vw] md:pb-[120px]">
        <div>
          <p className={label}>
            <span aria-hidden="true" className="block h-px w-6 bg-brass" />
            Contact
          </p>
          <h1 className="mb-[35px] font-display text-[clamp(44px,6vw,84px)] font-normal leading-[1.02] tracking-[-0.035em]">
            Discuss your <em className="italic text-brass">matter</em>
          </h1>
          <p className="max-w-[500px] text-[17px] text-muted">
            For enquiries about commercial legal advice, contracts, procurement,
            intellectual property or related business arrangements, please email
            a brief outline of what you need.
          </p>
          <p className="mb-0 mt-6 max-w-[500px] border-l-2 border-brass pl-5 text-base leading-[1.7] text-muted">
            Sending an enquiry does not create a solicitor–client relationship.
            An instruction begins once the necessary checks have been completed
            and I have confirmed acceptance and the terms of engagement in
            writing.
          </p>
        </div>

        {/* Contact card + note */}
        <div>
          <p className="mb-8 text-[17px] leading-[1.7] text-muted">
            Please include your name, business name where applicable, the nature
            of the matter, other parties&rsquo; names for conflict checking, any
            relevant deadline and your preferred contact details. Avoid sending
            sensitive documents until I have confirmed an appropriate method.
          </p>
          <div className="relative isolate">
          <div className="border border-line bg-ivory p-7 md:p-9">
            <ul className="m-0 flex list-none flex-col p-0">
              <li className="flex gap-4 border-b border-line pb-6">
                <span className={rowIcon}>
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <address className="not-italic leading-[1.6] text-ink">
                  Adesoji Fagade Solicitor
                  <br />
                  107–111 Fleet Street
                  <br />
                  London EC4A 2AB
                </address>
              </li>
              <li className="flex gap-4 border-b border-line py-6">
                <span className={rowIcon}>
                  <Mail size={18} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="m-0 mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    Email
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group inline-flex items-start gap-1.5 text-ink underline decoration-brass underline-offset-4 [overflow-wrap:anywhere] transition-colors hover:text-brass"
                  >
                    {EMAIL}
                    <ArrowUpRight
                      size={15}
                      aria-hidden="true"
                      className="mt-1 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 pt-6">
                <span className={rowIcon}>
                  <CalendarClock size={18} aria-hidden="true" />
                </span>
                <small className="text-sm text-muted">Appointments by prior arrangement.</small>
              </li>
            </ul>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-8 inline-flex w-full items-center justify-center gap-[15px] bg-ink px-5 py-[15px] text-[10px] font-semibold uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-[#30414c]"
            >
              Email an outline <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <span
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-brass"
          />
          </div>
        </div>
      </section>
    </main>
  );
}