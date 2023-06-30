import { toast } from "@/components/hooks/use-toast";

export async function share({ title, text }: { title: string; text: string }) {
	try {
		if (navigator.share) {
			await navigator.share({
				title,
				text,
			});
		} else {
			toast({
				title: "Sharing is not supported on this browser",
				variant: "destructive",
				description: "Please copy the link and share it manually",
			});
		}
	} catch (_) {
		toast({
			title: "An error occurred while sharing",
			variant: "destructive",
			description: "Please copy the link and share it manually",
		});
	}
}
