import { ArrowLeft, ArrowUpRight, Check, Mail, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

const principles = [
  {
    title: "Solve the real problem",
    description: "A polished interface means little when it does not improve the way a person or business actually works.",
  },
  {
    title: "Design for reality",
    description: "Products should respect mobile usage, limited connectivity, operational pressure and the context people live in.",
  },
  {
    title: "Keep thinking connected",
    description: "Product strategy, UX and engineering work best when they are treated as one continuous discipline.",
  },
  {
    title: "Build for the long term",
    description: "Good systems should be understandable, maintainable and ready to evolve as the business learns and grows.",
  },
];

const timeline = [
  {
    period: "2020 — 2022",
    title: "Software developer · Padariro Entertainment Studios",
    description: "Built internal tools, supported technical operations and learned how software decisions affect real teams and workflows.",
  },
  {
    period: "2022 — Present",
    title: "Founder & software developer · VansSoftwareLab",
    description: "Working directly with businesses on websites, digital systems, product strategy, deployments and ongoing technical support.",
  },
  {
    period: "Now",
    title: "Building a portfolio of African technology products",
    description: "Developing TheE AI, truDwell and other practical platforms shaped around customer engagement, trust, operations and access.",
  },
];

export default function About() {
  return (
    <div id="top" className="min-h-screen overflow-hidden bg-[#080a0f] text-white">
      <SiteHeader />

      <main>
        <section className="relative px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
          <div className="portfolio-grid absolute inset-0 opacity-25" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Back to professional portfolio
            </Link>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-16">
              <div>
                <p className="eyebrow">The person behind the work</p>
                <h1 className="mt-6 max-w-5xl text-[clamp(3.5rem,10vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-white">
                  Curious by nature.
                  <span className="block text-white/30">A builder by choice.</span>
                </h1>
                <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                  I’m Evans Mudziviri, a software developer and the founder of VansSoftwareLab. I build digital products because I enjoy taking a difficult, unclear problem and turning it into a system people can understand and use.
                </p>
              </div>

              <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] sm:min-h-[34rem]">
                <img
                  src="/IMG_1985.jpeg"
                  alt="Portrait of Evans Mudziviri"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-sm text-white/65">
                    <MapPin className="h-4 w-4 text-emerald-300" />
                    Botswana · Southern Africa · Remote
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/[0.07] px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="eyebrow">My story</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Technology became my way of creating possibility.</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-white/52">
              <p>
                My path has not been about following one narrow job description. It has been about learning what is needed to take an idea all the way from conversation to a working product: understanding the business, shaping the experience, writing the software, deploying it and supporting the people who depend on it.
              </p>
              <p>
                Working with businesses in Botswana, Zimbabwe and South Africa has made one thing clear to me: the best technology is not the technology with the most features. It is the technology that fits the environment, removes friction and earns trust.
              </p>
              <p>
                That is why I am drawn to products for customer engagement, property, retail, hospitality and operations. These are spaces where software can directly improve how a business serves people, makes decisions and grows.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="section-heading">
              <div>
                <p className="eyebrow">How I think</p>
                <h2 className="section-title">Principles that guide the work.</h2>
              </div>
              <p className="section-copy">
                These principles matter more to me than any single framework, tool or trend.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">
              {principles.map((principle) => (
                <article key={principle.title} className="bg-[#0c0e14] p-6 sm:p-9">
                  <Check className="h-5 w-5 text-emerald-300" />
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{principle.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/[0.07] px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="eyebrow">The journey</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Learning by building.</h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/42">
                Each stage has expanded the kind of problem I can take responsibility for—from a single technical task to an entire product system.
              </p>
            </div>

            <div className="space-y-3">
              {timeline.map((item) => (
                <article key={item.period} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200/55">{item.period}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/45">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-10">
              <Sparkles className="h-6 w-6 text-indigo-200" />
              <p className="eyebrow mt-8">What interests me</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">Technology, business and human behaviour.</h2>
              <p className="mt-5 text-sm leading-7 text-white/48">
                I am interested in more than code. I think about why people trust products, how decisions are shaped, how businesses really operate, and how African technology can be both globally ambitious and locally intelligent.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-indigo-400/[0.12] via-white/[0.025] to-emerald-300/[0.08] p-6 sm:p-10">
              <p className="eyebrow">What I am building toward</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">Products that give African businesses stronger digital infrastructure.</h2>
              <p className="mt-5 text-sm leading-7 text-white/48">
                My long-term goal is to create connected products that help businesses communicate, sell, operate and make better decisions—without requiring enterprise budgets or imported assumptions.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white px-6 py-12 text-black sm:px-10 sm:py-16 lg:px-16">
            <div className="contact-grid absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">The professional side</p>
                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl">See what I can build for you.</h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/#work" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-black/15 px-5 text-sm font-semibold text-black transition-colors hover:bg-black/[0.04]">
                  View my work
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href="mailto:evans@vanssoftwarelab.com?subject=Project%20enquiry" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-black px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                  <Mail className="h-4 w-4" />
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
