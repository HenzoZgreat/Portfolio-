"use client";

import { Button } from "@/components/ui/button";
import { PhoneCall, Copy, Check, Send, Sparkles, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CallMeProps {
  phoneNumber?: string;
  telegramUsername?: string;
}

export default function CallMe({
  phoneNumber = "+251967468126",
  telegramUsername = "henokeshe2",
}: CallMeProps) {
  const [copied, setCopied] = useState(false);

  const formattedPhone = phoneNumber.startsWith("+")
    ? phoneNumber.replace(/(\+\d{3})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4")
    : phoneNumber;

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    toast.success("Phone number copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="call-me" className="py-12 md:py-24 lg:py-28 relative overflow-hidden">
      {/* Radial background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none -z-10" />

      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-card/90 backdrop-blur-xl border border-border/80 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center space-y-8">
          {/* Subtle decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Direct Communication</span>
          </div> */}

          {/* Heading & Subtitle */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Let&apos;s Talk Directly & Start Working Together
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Have a project, job opportunity, or technical inquiry? Reach out by phone call or direct message — I&apos;m ready to connect!
            </p>
          </div>

          {/* Phone Display Card */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-muted/60 border border-border/70 rounded-2xl p-4 sm:px-6 sm:py-4 shadow-inner">
            <div className="flex items-center gap-3 text-foreground font-mono text-xl sm:text-2xl font-bold tracking-wider">
              <PhoneCall className="w-6 h-6 text-primary animate-pulse" />
              <span>{formattedPhone}</span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="gap-2 rounded-xl text-xs font-medium"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Number</span>
                  </>
                )}
              </Button>

              <Button
                size="sm"
                asChild
                className="gap-2 rounded-xl text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={`tel:${phoneNumber}`}>
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Alternative Quick Contact Options */}
          <div className="pt-4 border-t border-border/50 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Or connect instantly via:</span>
            <a
              href={`https://t.me/${telegramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <Send className="w-4 h-4" />
              <span>Telegram (@{telegramUsername})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
