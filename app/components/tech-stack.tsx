import { Card } from "@/components/ui/card";
import {
  Code,
  Zap,
  Database,
  GitBranch,
  Github,
  Package,
  Cloud,
  Terminal,
  BookOpen,
  Layers,
} from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: Code },
      { name: "Next.js", icon: Zap },
      { name: "Vite", icon: Zap },
      { name: "TailwindCSS", icon: Layers },
      { name: "Bootstrap", icon: Code },
      { name: "TypeScript", icon: Code },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java", icon: Code },
      { name: "Spring Boot", icon: Package },
      { name: "Go", icon: Zap },
      { name: "Python", icon: Code },
      { name: "FastAPI", icon: Zap },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "Docker", icon: Package },
      { name: "Swagger", icon: BookOpen },
      { name: "Railway", icon: Cloud },
      { name: "Vercel", icon: Cloud },
      { name: "Linux", icon: Terminal },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-6">{tech.category}</h3>
          <div className="grid grid-cols-2 gap-4">
            {tech.skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 rounded-md bg-primary/5 px-3 py-2 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 hover:bg-primary/10 transition-colors"
                >
                  <IconComponent className="h-4 w-4 flex-shrink-0" />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </Card>
      ))}
    </div>
  );
}
