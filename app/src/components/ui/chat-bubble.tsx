import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface ChatBubbleProps {
	message: string;
	isMine?: boolean;
}

const chatbubbleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        bot: "bg-primary text-primary-foreground hover:bg-primary/90",
        info: "",
        mine:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        default: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export function ChatBubble({ message, isMine }: ChatBubbleProps) {
	return (
              <div className={
				cn("flex items-center py-5",
				isMine ? "justify-end flex-row-reverse" : "justify-start"
				)}>
                <div className={cn(
					"h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent",
					isMine ? "color-primary border-primary" : ""
					)}></div>
                <div className={cn(
					"flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium",
					isMine ? "bg-primary border-primary" : ""

				)}>
                  {message}
                </div>
              </div>
	);
}