import React from "react";
import { Github, ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface FeaturedProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  deployLink?: string;
  tags?: string[];
  reversed?: boolean;
}

export default function FeaturedProjectCard({
  title,
  description,
  image,
  link,
  deployLink,
  tags = [],
  reversed = false,
}: FeaturedProjectCardProps) {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-6 md:py-10">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Content Section */}
        <div
          className={`w-full lg:col-span-6 z-20 space-y-4 md:space-y-6 ${
            reversed ? "order-2 lg:order-2" : "order-2 lg:order-1"
          }`}
        >
          {/* Tag & Title */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wide block mb-2">
              Featured Project
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight">
              {title}
            </h3>
          </div>

          {/* Overlapping Glassmorphism Description Box */}
          <div
            className={`backdrop-blur-xl bg-card/80 border border-border/60 rounded-2xl p-6 md:p-8 shadow-2xl space-y-4 relative z-20 ${
              reversed ? "lg:-ml-16" : "lg:-mr-16"
            }`}
          >
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-normal">
              {description}
            </p>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-muted/80 px-2.5 py-1 text-xs font-medium text-foreground border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-2">
            {deployLink && deployLink !== "#" ? (
              <Link
                href={deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2.5 rounded-full bg-muted border border-border text-foreground hover:bg-muted/80 hover:text-primary transition-colors"
                aria-label="Visit project website"
              >
                <Globe className="w-5 h-5" />
              </Link>
            ) : link ? (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2.5 rounded-full bg-muted border border-border text-foreground hover:bg-muted/80 hover:text-primary transition-colors"
                aria-label="View Source Code on GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
            ) : null}

            {link && deployLink && deployLink !== "#" && (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2.5 rounded-full bg-muted border border-border text-foreground hover:bg-muted/80 hover:text-primary transition-colors"
                aria-label="View Source Code on GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>

        {/* Image Container - Static cover without hover scaling */}
        <div
          className={`w-full lg:col-span-6 z-10 ${
            reversed ? "order-1 lg:order-1" : "order-1 lg:order-2"
          }`}
        >
          <div className="relative w-full aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden border border-border/80 shadow-xl bg-muted">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


