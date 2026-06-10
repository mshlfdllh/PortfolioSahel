import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, ArrowRight, Github, Mail, Linkedin, MessageCircle } from "lucide-react";
import heroPortrait from "@/assets/teach.jpeg";
import bgCode from "@/assets/bg-code.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import lovableLogo from "@/assets/lovable.svg";
import gptLogo from "@/assets/Chatgpt.svg";
import geminiLogo from "@/assets/gemini.svg";
import claudeLogo from "@/assets/claude.svg";
import copilotLogo from "@/assets/githubcopilot.svg";
import cursorLogo from "@/assets/cursor.svg";
import grokLogo from "@/assets/grok.svg";
import rorkLogo from "@/assets/rork1.svg";

// Urutan aman: Buat variabel WA_LINK di paling atas setelah import agar tidak terdeteksi merah di bawah
const WA_NUMBER = "6289635961213";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio - M Sahel Fadillah" },
      {
        name: "description",
        content:
          "Portfolio of Aria Vael — full-stack software engineer building reliable web applications with Laravel, PHP, MySQL and modern frontend stacks.",
      },
      { property: "og:title", content: "Aria Vael — Software Engineer & IT Specialist" },
      {
        property: "og:description",
        content: "Full-stack engineer · Laravel, PHP, MySQL, Tailwind. AI-augmented workflow.",
      },
    ],
  }),
  component: Index,
});

const iconColor = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const icons = {
  openai: gptLogo,
  googlegemini: geminiLogo,
  anthropic: claudeLogo,
  githubcopilot: copilotLogo,
  cursor: cursorLogo,
  lovable: lovableLogo,
  rork: rorkLogo,
  grok: grokLogo,
};

const icon = (slug: string) => icons[slug as keyof typeof icons];

const aiTools = [
  { name: "ChatGPT", slug: "openai" },
  { name: "Gemini", slug: "googlegemini" },
  { name: "Claude", slug: "anthropic" },
  { name: "GitHub Copilot", slug: "githubcopilot" },
  { name: "Cursor", slug: "cursor" },
  { name: "Lovable", slug: "lovable" },
  { name: "Rork", slug: "rork" },
  { name: "Grok", slug: "grok" },
];

const skills = [
  { name: "Laravel", slug: "laravel" },
  { name: "PHP", slug: "php" },
  { name: "MySQL", slug: "mysql" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Bootstrap", slug: "bootstrap" },
  { name: "Vite", slug: "vite" },
  { name: "Figma", slug: "figma" },
];

// INI YANG BENER: Semua video dipanggil pakai String Path lurus mengarah ke folder public!
const allProjects = [
  {
    n: "01",
    title: "AeshPadd",
    tag: "Laravel · PHP",
    year: "2026",
    img: "",
    video: "/aeshpad.mp4",
    link: "https://github.com/NotepadProject/AeshPadd.git",
    desc: "Platform pencatatan digital dengan pendekatan desain minimalis yang berfokus pada kemudahan navigasi dan pengalaman pengguna (UX) yang intuitif. Menyediakan ekosistem produktivitas lengkap mulai dari keamanan autentikasi profil, kategorisasi folder interaktif, fitur pin catatan favorit, hingga pencarian real-time untuk efisiensi manajemen data pengguna."
  },
  {
    n: "02",
    title: "E Commerce",
    tag: "Tailwind · JavaScript",
    year: "2026",
    img: "",
    video: "/ecm.mp4",
    link: "https://ecommercebysahel.vercel.app",
    desc: "Proyek concept store restoran Italia yang berfokus pada desain antarmuka (UI) modern yang estetik, responsif, dan kaya akan interaksi visual. Dirancang untuk mensimulasikan alur pengguna (user journey) yang mulus dari penjelajahan katalog, kustomisasi menu, hingga proses simulasi checkout."
  },
  {
    n: "03",
    title: "Company Profile",
    tag: "Bootstrap · JavaScript",
    year: "2024",
    img: "",
    video: "/company.mp4",
    link: "https://serenecompanybysahel.vercel.app",
    desc: "Proyek concept website untuk agensi digital modern dengan fokus pada penyajian informasi bisnis yang elegan, bersih, dan interaktif. Dirancang untuk memaksimalkan user experience (UX), platform ini menampilkan struktur navigasi satu halaman yang mulus (smooth scrolling), presentasi visual portofolio yang dinamis, perkenalan tim, serta formulir kontak interaktif guna membangun impresi digital yang profesional."
  },
  {
    n: "04",
    title: "Workspace Booking",
    tag: "React · Node.js",
    year: "2024",
    img: work4,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    desc: "Aplikasi reservasi ruang kerja dengan kalender interaktif."
  },
  {
    n: "05",
    title: "E-Learning Platform",
    tag: "Laravel · MySQL",
    year: "2024",
    img: work1,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    desc: "Platform kursus online dengan kuis, sertifikat dan progres."
  },
  {
    n: "06",
    title: "API Gateway Service",
    tag: "Node.js · Docker",
    year: "2023",
    img: work2,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    desc: "Gateway internal untuk microservice tim engineering."
  },
];

function Index() {
  const [shown, setShown] = useState(3);
  const projects = allProjects.slice(0, shown);
  const hasMore = shown < allProjects.length;

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-hairline">
        <nav className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="text-display text-xl">SahelPortfolio<span className="text-ink-muted">.</span></a>
          <ul className="hidden md:flex items-center gap-10 text-sm text-ink-muted">
            <li><a href="#top" className="hover:text-foreground transition-colors">Home</a></li>
            <li><a href="#skills" className="hover:text-foreground transition-colors">Skills</a></li>
            <li><a href="#work" className="hover:text-foreground transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-xs uppercase tracking-[0.18em] hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Open to work
            <span className="size-1.5 rounded-full bg-foreground animate-pulse group-hover:bg-primary-foreground" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={bgCode} alt="" aria-hidden className="size-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <div className="absolute inset-0 veil" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
            <div className="col-span-12 lg:col-span-8 animate-rise">
              <p className="text-eyebrow mb-8">Software Engineer · IT Specialist</p>
              <h1 className="text-display text-[12vw] lg:text-[8.5rem] leading-[0.92]">
                I build <em className="italic text-ink-muted">software</em><br />that just works.
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pb-6 animate-rise" style={{ animationDelay: "0.15s" }}>
              <p className="text-base lg:text-lg text-ink-muted max-w-sm leading-relaxed">
                Full-stack engineer focused on Laravel, PHP and modern JavaScript. I ship clean, maintainable web applications — augmented by a thoughtful AI workflow.
              </p>
              <a href="#work" className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] hover:gap-5 transition-all">
                See Projects <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="mt-20 lg:mt-28 grid grid-cols-12 gap-6 lg:gap-10">
            <figure className="col-span-12 lg:col-span-5 aspect-[3/4] overflow-hidden">
              <img src={heroPortrait} alt="Portrait of M Sahel" width={1080} height={1920} className="size-full object-cover grayscale" />
            </figure>
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-6 pb-10 border-b border-hairline">
                {[
                  { k: "1+", v: "Years coding" },
                  { k: "10", v: "Projects shipped" },
                  { k: "32", v: "Tech Stacks" },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="text-display text-5xl lg:text-6xl">{s.k}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-ink-muted">{s.v}</div>
                  </div>
                ))}
              </div>
              <div className="pt-10">
                <h2 className="text-display text-4xl lg:text-6xl leading-none mb-10">
                  Muhammad <em className="italic text-ink-muted">Sahel</em> Fadillah
                </h2>
                <div className="space-y-6 text-ink-muted">
                  <p className="text-display text-2xl lg:text-3xl text-foreground italic">
                    "Reliable code, calm process, and a working product on Friday."
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em]">— How I work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI TOOLS */}
      <section id="tools" className="py-24 lg:py-32 border-t border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <p className="text-eyebrow mb-6">AI Toolkit</p>
              <h2 className="text-display text-4xl lg:text-6xl">
                AI tools I work <em className="italic text-ink-muted">with daily.</em>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6 self-end">
              <p className="text-ink-muted leading-relaxed">
                I treat AI as a power tool, not a shortcut. These are the assistants in my daily workflow — for pair-programming, design exploration, research and shipping faster without sacrificing quality.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-t border-l border-hairline">
            {aiTools.map((t) => (
              <div key={t.name} className="group aspect-square flex flex-col items-center justify-center gap-4 border-r border-b border-hairline p-6 hover:bg-card transition-colors">
                <img
                  src={icon(t.slug)}
                  alt={t.name}
                  loading="lazy"
                  className={`size-12 lg:size-14 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ${t.slug === "githubcopilot" || t.slug === "openai" || t.slug === "cursor" || t.slug === "grok" ? "brightness-0 invert" : ""
                    }`}
                />
                <span className="text-xs uppercase tracking-[0.18em] text-ink-muted group-hover:text-foreground transition-colors">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 lg:py-32 border-t border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-eyebrow mb-6">Tech Stack</p>
              <h2 className="text-display text-4xl lg:text-6xl max-w-2xl">
                Tools of the <em className="italic text-ink-muted">trade.</em>
              </h2>
            </div>
            <p className="text-sm text-ink-muted max-w-xs">
              From Laravel monoliths to modern React frontends — the stack I reach for to ship reliable products.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {skills.map((s) => (
              <div key={s.name} className="group flex flex-col items-center justify-center gap-3 aspect-square rounded-xl border border-hairline bg-card/40 hover:bg-card hover:-translate-y-1 transition-all duration-300">
                <img src={iconColor(s.slug)} alt={s.name} loading="lazy" className="size-8 lg:size-10 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-[10px] lg:text-xs uppercase tracking-[0.14em] text-ink-muted group-hover:text-foreground text-center px-2">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="py-24 lg:py-40 border-t border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-end justify-between mb-16 lg:mb-20 flex-wrap gap-6">
            <div>
              <p className="text-eyebrow mb-6">Selected Projects</p>
              <h2 className="text-display text-5xl lg:text-7xl max-w-2xl">
                Things I've <em className="italic text-ink-muted">built.</em>
              </h2>
            </div>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:gap-4 transition-all">
              GitHub <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {projects.map((p, i) => (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                key={p.n}
                className={`group block animate-rise ${i === 0 && shown >= 1 ? "md:col-span-2" : ""}`}
                style={{ animationDelay: `${(i % 3) * 0.08}s` }}
              >
                <div
                  className={`relative overflow-hidden bg-card ${p.n === "01"
                      ? "aspect-[16/10]"
                      : i === 0
                        ? "aspect-[21/10]"
                        : "aspect-[4/3]"
                    }`}
                >
                  <video
                    src={p.video}
                    poster={p.img}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => { e.currentTarget.play().catch(() => { }); }}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    className={`size-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] ${p.n === "01"
                      ? "object-contain bg-black"
                      : "object-cover"
                      }`}
                  />
                </div>

                <div className="mt-5 w-full">
                  <div className="flex items-center justify-between gap-4 mb-2 w-full">
                    <p className="font-mono text-xs text-ink-muted">{p.n} / {p.year}</p>
                    <div className="flex items-center gap-2 text-ink-muted group-hover:text-ink shrink-0">
                      <span className="text-xs uppercase tracking-[0.18em] hidden sm:inline">{p.tag}</span>
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                  <h3 className="text-display text-2xl lg:text-3xl mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-muted text-justify">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Show more */}
          <div className="mt-16 flex flex-col items-center gap-4">
            {hasMore ? (
              <button
                onClick={() => setShown((n) => Math.min(n + 3, allProjects.length))}
                className="group inline-flex items-center gap-4 rounded-full border border-hairline px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Show more projects
                <span className="font-mono text-[10px] opacity-70">{shown} / {allProjects.length}</span>
              </button>
            ) : (
              shown > 3 && (
                <button onClick={() => setShown(3)} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ink-muted hover:text-foreground transition-colors">
                  Show less
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-40 border-t border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="text-center">
            <p className="text-eyebrow mb-10">Let's work together</p>
            <h2 className="text-display text-[12vw] lg:text-[9rem] leading-[0.9]">
              Have a project<br /><em className="italic text-ink-muted">in mind?</em>
            </h2>
            <p className="mt-8 text-ink-muted max-w-md mx-auto">
              Kirim pesan singkat di bawah — langsung terhubung ke WhatsApp saya.
            </p>
          </div>

          <ContactForm />

          <div className="mt-14 flex flex-col items-center gap-6">
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-5 text-sm uppercase tracking-[0.22em] hover:gap-5 transition-all">
              <MessageCircle className="size-4" />
              Chat WhatsApp · 0896 3596 1213
              <ArrowUpRight className="size-4" />
            </a>

            <div className="flex items-center justify-center gap-6 text-ink-muted">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition-colors">
                <Github className="size-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
                <Linkedin className="size-5" />
              </a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-foreground transition-colors">
                <MessageCircle className="size-5" />
              </a>
              <a href="mailto:hello@ariavael.dev" aria-label="Email" className="hover:text-foreground transition-colors">
                <Mail className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs uppercase tracking-[0.18em] text-ink-muted">
          <div>© 2026 Aria Vael · Software Engineer</div>
          <div className="font-mono normal-case tracking-normal">Built with Laravel · React · Tailwind</div>
          <div>Jakarta · UTC+7</div>
        </div>
      </footer>
    </main>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text =
      `Halo Sahel, saya ${name || "(tanpa nama)"}.\n` +
      `Email: ${email || "-"}\n\n` +
      `${message || "Saya tertarik untuk bekerja sama."}`;
    const url = `${WA_LINK}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="mt-16 mx-auto max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
      <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama" className="bg-card/40 border border-hairline rounded-md px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email (opsional)" className="bg-card/40 border border-hairline rounded-md px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors" />
      <textarea required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Pesanmu" rows={5} className="sm:col-span-2 bg-card/40 border border-hairline rounded-md px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors resize-none" />
      <button type="submit" className="sm:col-span-2 group inline-flex items-center justify-center gap-3 rounded-full border border-hairline px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-primary hover:text-primary-foreground transition-colors">
        <MessageCircle className="size-4" /> Kirim Pesan
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </form>
  );
}