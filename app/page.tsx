import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram, Send } from "lucide-react";
import Link from "next/link";
import ContactForm from "./components/contact-form";
import Navbar from "./components/navbar";
import ProfileImage from "./components/profile-Image";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import TypingAnimation from "./components/typing-animation";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="flex justify-center">
            <div className="inline-flex flex-col items-center gap-10 md:flex-row md:items-center">
              {/* Left: Text Content */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Henok Eshetu
                  </h1>
                  <p className="text-lg font-semibold text-primary">
                    <TypingAnimation />
                  </p>
                </div>
                <p className="text-gray-500 md:text-lg dark:text-gray-400 max-w-xl">
                  Backend-focused full stack developer specializing in scalable
                  systems. Building elegant solutions with Java, Go, Python, and
                  React.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link href="https://github.com/HenzoZgreat" target="_blank">
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/henokeshe2/"
                    target="_blank"
                  >
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://www.instagram.com/henzo_z_great/"
                    target="_blank"
                  >
                    <Button variant="outline" size="icon">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </Link>
                  <Link href="https://t.me/henokeshe2" target="_blank">
                    <Button variant="outline" size="icon">
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Telegram</span>
                    </Button>
                  </Link>
                  <Link href="mailto:henokeshe2@gmail.com">
                    <Button variant="outline" size="icon">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: Profile Image */}
              <div className="flex justify-center">
                <ProfileImage />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Habesha Treasure"
                description="Full-stack e-commerce platform for selling Ethiopian traditional products. Features admin panel, shopping cart, favorites, and Amharic language support with integrated payment methods."
                image="/habeshaTreasure.PNG?height=400&width=600"
                link="https://github.com/HenzoZgreat/Habesha-Treasure-FullStack"
                deployLink="#"
                tags={["React", "Tailwind", "E-commerce"]}
              />
              <ProjectCard
                title="DEUTSCHE MEDIZIN Backend"
                description="Comprehensive student management system backend for a real college. Handles student registration, transcripts, assessment reports, and admin functionalities."
                image="/DeutscheLandingPage.PNG?height=400&width=600"
                link="https://github.com/HenzoZgreat/DEUTSCHE_MEDIZIN-Collage-Backend"
                deployLink="#"
                tags={["Java", "Spring Boot", "Backend"]}
              />
              <ProjectCard
                title="DEUTSCHE MEDIZIN Frontend"
                description="Frontend for the student management system providing intuitive interface for student and admin operations."
                image="/DeutscheLandingPage.PNG?height=400&width=600"
                link="https://github.com/surafelbit/DEUTSCHE_MEDIZIN-Collage-Frontend"
                deployLink="https://deutsche-medizin-collage-frontend-n.vercel.app/"
                tags={["React", "Vite", "Tailwind"]}
              />
              <ProjectCard
                title="Matrix Calculator App"
                description="A sophisticated matrix calculation application with intuitive UI for performing advanced matrix operations, easy manipulation and seamless copy-paste functionality."
                image="/matrixCalculator.PNG?height=400&width=600"
                link="https://github.com/HenzoZgreat/Matrix-Calculator-App"
                deployLink="https://matrix-calculator-app-6u2u.vercel.app/"
                tags={["Next.js", "Tailwind", "ShadCn"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Henok Eshetu. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
