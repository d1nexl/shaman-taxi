import { Phone, MessageCircle, Send } from "lucide-react";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Variant = "solid" | "outline";

export function ContactChannels({
  dict,
  variant = "outline",
  className = "",
}: {
  dict: Dictionary["contact"];
  variant?: Variant;
  className?: string;
}) {
  const channels = [
    { label: dict.call, href: `tel:${site.phoneHref}`, Icon: Phone },
    { label: dict.whatsapp, href: site.whatsapp, Icon: MessageCircle },
    { label: dict.telegram, href: site.telegram, Icon: Send },
    { label: dict.viber, href: site.viber, Icon: MessageCircle },
  ];

  const base =
    "group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ease-premium";
  const styles =
    variant === "solid"
      ? "bg-ink text-paper hover:bg-brass-dark"
      : "border border-line bg-white text-ink hover:border-ink hover:-translate-y-0.5";

  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {channels.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          className={`${base} ${styles}`}
          {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <Icon className="h-4 w-4 text-brass transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
          {label}
        </a>
      ))}
    </div>
  );
}
