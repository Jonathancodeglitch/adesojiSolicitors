import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "info@adesojifagadesolicitors.com";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// Add { label: "Cookie Information", href: "/cookie-information" } here once that page has been prepared.
const legal = [
  { label: "Client Information", href: "/client-information" },
  { label: "Complaints Procedure", href: "/complaints-procedure" },
  { label: "Privacy Notice", href: "/privacy-notice" },
];

const focus =
  "focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#5cc4cb]";
const colHeading = "mb-4 text-[0.72rem] font-semibold uppercase leading-none tracking-[0.14em] text-[#8fa0ae]";
const footLink = `text-[#eef2f4]/85 no-underline transition-colors hover:text-white hover:underline hover:underline-offset-4 ${focus}`;

export default function SiteFooter() {
  // Evaluated when the site is built, so rebuild each January to roll the year over.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0e1b2a] px-5 font-body text-[0.95rem] leading-relaxed text-[#eef2f4]">
      <div className="mx-auto max-w-6xl">
        {/* Top row: brand + call to action */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/15 py-12 sm:flex-row sm:items-center">
          <Link
            href="/"
            aria-label="Adesoji Fagade Solicitor home"
            className={`grid grid-cols-[34px_auto] items-center gap-x-2.5 leading-none text-[#eef2f4] no-underline ${focus}`}
          >
            <span className="row-span-2 grid h-[34px] w-[34px] place-items-center border border-brass font-display text-[14px] text-brass">
              AF
            </span>
            <b className="font-display text-[19px] font-normal tracking-[-0.02em]">
              Adesoji Fagade
            </b>
            <small className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#8fa0ae]">
              Solicitor
            </small>
          </Link>
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 rounded-full bg-[#eef2f4] px-6 py-3 font-semibold text-[#0e1b2a] no-underline transition-opacity hover:opacity-90 ${focus}`}
          >
            Discuss your matter <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-6 lg:col-span-4">
            <p className="mb-3 max-w-[30rem] text-[#a9b7c3]">
              Adesoji Fagade is a solicitor of England and Wales regulated by the
              Solicitors Regulation Authority. SRA No. 8016700.
            </p>
            <p className="mb-0 max-w-[30rem] text-[#a9b7c3]">
              Independent freelance practice providing non-reserved legal
              services. The practice is not an SRA-authorised law firm and does
              not hold professional indemnity insurance.
            </p>
          </div>

          <nav aria-label="Pages" className="md:col-span-2 lg:col-span-2 lg:col-start-6">
            <p className={colHeading}>Pages</p>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {pages.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={footLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal" className="md:col-span-4 lg:col-span-2">
            <p className={colHeading}>Legal</p>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {legal.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={footLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="col-span-2 not-italic md:col-span-6 lg:col-span-3 lg:col-start-10">
            <p className={colHeading}>Contact</p>
            <p className="mb-3 text-[#eef2f4]/85">
              107–111 Fleet Street,
              <br />
              London EC4A 2AB
            </p>
            <a href={`mailto:${EMAIL}`} className={`text-[#eef2f4] underline underline-offset-4 [overflow-wrap:anywhere] ${focus}`}>
              {EMAIL}
            </a>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 border-t border-white/15 py-6 text-[0.85rem] text-[#8fa0ae] md:flex-row md:items-start md:justify-between md:gap-10">
          <p className="m-0 shrink-0">© {year} Adesoji Fagade Solicitor.</p>
          <p className="m-0 max-w-[34rem] md:text-right">
            Website content is provided for general information and does not
            constitute advice on a particular matter.
          </p>
        </div>
      </div>
    </footer>
  );
}