import { GraduationCap, MapPin, Code2, Sparkles, Award } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about-me" className="py-12 md:py-24 lg:py-28 relative overflow-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background & Journey</span>
          </div> */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-3xl">
            About Me
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Passionate about backend systems, distributed architectures, and crafting robust full-stack web applications.
          </p>
        </div>

        {/* Non-Traditional Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Story Card (Large Span) */}
          <div className="md:col-span-7 bg-card/80 backdrop-blur-md border border-border/80 rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                <GraduationCap className="w-5 h-5" />
                <span>5 Years Degree Journey</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Bahir Dar University Graduate
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                I hold a <strong className="text-foreground font-semibold">Computer Engineering Degree</strong> following 5 years of rigorous academic and practical training at <strong className="text-foreground font-semibold">Bahir Dar University</strong>. My education laid a strong foundation in computer architecture, software design patterns, algorithm optimization, and network systems.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Living and working in <strong className="text-foreground font-semibold">Ethiopia 🇪🇹</strong>, I combine my deep theoretical engineering background with hands-on development expertise to build clean, maintainable, and high-performance software.
              </p>
            </div>

            {/* Metric Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/50">
              <div>
                <span className="text-2xl md:text-3xl font-extrabold text-foreground block">5 Years</span>
                <span className="text-xs md:text-sm text-muted-foreground">Engineering Education</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-extrabold text-foreground block">B.Sc.</span>
                <span className="text-xs md:text-sm text-muted-foreground">Computer Engineering</span>
              </div>
            </div>
          </div>

          {/* Side Cards (Stacked) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Card: Location & Global Mindset */}
            <div className="bg-card/80 backdrop-blur-md border border-border/80 rounded-3xl p-6 md:p-8 shadow-xl space-y-3 flex-1 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Based in Ethiopia</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Operating out of Ethiopia with a global engineering mindset. Ready to collaborate with cross-functional teams locally and internationally to deliver world-class digital products.
              </p>
            </div>

            {/* Card: Engineering Philosophy */}
            <div className="bg-card/80 backdrop-blur-md border border-border/80 rounded-3xl p-6 md:p-8 shadow-xl space-y-3 flex-1 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Backend & Architecture</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Specialized in backend development with Java, Spring Boot, Python, and Go, coupled with modern React frontends for end-to-end full stack reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
