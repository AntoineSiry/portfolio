import { cn } from "../../utils/style"
import { ExternalLinkIcon } from "lucide-react"
import { Text } from "../text/text";

export const Label = (props) => {
  const { type, link} = props;

  const Tag = link ? "a" : "span";

  const text ={
    ended: "Terminé",
    wip: "En cours",
    ood: "Hors ligne"
  }[type] ?? "Pas de lien";

  return(
    <Tag href={link} target="_blank" rel="noreferrer">
      <Text
        size="sm"
        className={cn(
          "rounded uppercase px-1",
          {
            "flex gap-1 items-center hover:brightness-110": !!link,
            "bg-emerald-600 text-primary": type === "ended",
            "bg-blue-400 text-primary": type === "wip",
            "bg-amber-500 text-primary": type === "ood",
          }
        )}
      >
        <span>{text}</span>
        {link && (
          <ExternalLinkIcon className="text-primary w-3.5 h-3.5" />
        )}
      </Text>
    </Tag>
  );
}