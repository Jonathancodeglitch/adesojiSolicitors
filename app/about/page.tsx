import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    title: "Understand the objective",
    body: "I begin by understanding your circumstances, priorities and the outcome you are seeking.",
  },
  {
    title: "Explain the position clearly",
    body: "I identify the material issues and explain the options, risks and practical implications in language you can use.",
  },
  {
    title: "Give candid advice",
    body: "I will tell you where an arrangement needs strengthening, where expectations need adjusting and where additional advice is appropriate.",
  },
  {
    title: "Keep the work focused",
    body: "I agree the scope of the instruction, communicate progress and keep you informed of developments affecting the work or its cost.",
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

export default function AboutPage() {
  return (
    <main>
      <section className="grid items-start gap-12 px-[7vw] pb-20 pt-[100px] md:grid-cols-[0.8fr_1.2fr] md:gap-[8vw] md:px-[10vw] md:pb-[120px]">
        {/* Portrait: add the photo at public/images/adesoji-fagade.jpg */}
        <div className="relative isolate w-full max-w-[420px] md:sticky md:top-[120px]">
          <div className="relative aspect-[4/5] overflow-hidden border border-line bg-cream">
            <Image
              src="/adesoji-fagade.jpg"
              alt="Portrait of Adesoji Fagade"
              fill
              priority
              sizes="(min-width: 768px) 38vw, 86vw"
              className="object-cover object-top"
            />
          </div>
          <span
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-brass"
          />
        </div>

        <div>
          <SectionLabel>About</SectionLabel>
          <h1 className="mb-[35px] font-display text-[clamp(40px,4.8vw,70px)] font-normal leading-[1.03] tracking-[-0.035em]">
            Independent legal advice with a{" "}
            <em className={em}>commercial perspective</em>
          </h1>
          <div className="flex max-w-[550px] flex-col gap-6 text-base text-muted">
            <p>
              I am Adesoji Fagade, a solicitor of England and Wales, also
              qualified in Nigeria. I am regulated by the Solicitors Regulation
              Authority under SRA number 8016700.
            </p>
            <p>
              I practise independently as a freelance solicitor, providing
              non-reserved legal services to business owners, founders and
              organisations. My work focuses on commercial contracts,
              procurement, intellectual property and the legal arrangements
              supporting business relationships and transactions.
            </p>
            <p>
              My professional experience spans commercial contracts,
              intellectual property, corporate transactions, property and
              dispute-related work. This breadth informs the way I approach
              commercial advice: considering both the immediate legal question
              and its implications for the wider business.
            </p>
            <p>
              Alongside my legal experience, my involvement in business
              consultancy and digital and media services gives me a practical
              appreciation of the decisions business owners face, from
              negotiating relationships and protecting assets to managing
              operations and pursuing growth.
            </p>
          </div>
        </div>
      </section>

      {/* UK understanding. Nigerian perspective. */}
      <section className="text-center bg-cream px-[10vw] py-[75px]   md:px-[15vw] md:py-[100px]">
        <div>
          <h2 className={`${h2} mb-[30px]`}>
             
            UK understanding.
            <br />
            <em className={em}>Nigerian perspective.</em>
          </h2>
          <p className="max-w-[700px] mx-auto text-[17px] text-muted">
            My experience of working in the UK, Nigerian roots and familiarity
            with both business environments are particularly relevant to clients
            whose commercial interests connect the two markets. They help me
            understand the context behind a transaction, recognise differences
            in expectations and communicate effectively across those settings.
          </p>
        </div>
      </section>

      {/* How I work */}
      <section className="bg-paper px-[7vw] py-20 md:px-[10vw] md:py-[120px]">
        <h2 className={`${h2} mb-12 md:mb-16 text-center`}>How I work</h2>
        <ol className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ title, body }, i) => (
            <li
              key={title}
              className="group relative flex flex-col gap-12 overflow-hidden border border-line bg-ivory p-7 transition duration-300 hover:border-brass hover:shadow-[0_22px_44px_-26px_rgba(24,36,45,0.4)] motion-safe:hover:-translate-y-1"
            >
              <span className="font-display text-[48px] leading-none text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-3 text-xl font-normal leading-[1.2] text-ink">
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
      </section>

      {/* Independent practice. Personal responsibility. */}
      <section className="grid bg-paper px-[7vw] py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-[12vw] md:px-[10vw] md:py-[120px]">
        <div>
          <h2 className={`${h2} mb-7`}>
            Independent practice.
            <br />
            <em className={em}>Personal responsibility.</em>
          </h2>
        </div>
        <div className="mt-9 flex max-w-[540px] flex-col items-start gap-5 text-[17px] text-muted md:mt-0 md:pt-[52px]">
          <p>
            Practising independently allows me to offer a direct professional
            relationship, with personal responsibility for the advice and work I
            undertake.
          </p>
          <p>
            I accept instructions where I can provide an appropriate service.
            Where a matter requires expertise or resources beyond the scope of
            my practice, I will discuss this with you.
          </p>
          <p>
            Details of my practice status, scope of services and insurance
            position are available on the{" "}
            <Link
              href="/client-information"
              className="text-ink underline decoration-brass underline-offset-4 transition-colors hover:text-brass"
            >
              Client Information
            </Link>{" "}
            page.
          </p>
          <a
            className={`${button} mt-1`}
            href="mailto:info@adesojifagadesolicitors.com"
          >
            Discuss your matter <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
