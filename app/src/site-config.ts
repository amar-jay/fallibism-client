export type SiteConfig = {
	name: string;
	description: string;
	url: string;
	handle: string; // twitter handle
	github: {
		url: string;
		api: string;
	};
	links: {
		// twitter: string
	};
};

var siteConfig = {} as SiteConfig;

const repoName = "fallibilism/struct";
// if (process.env.NODE_ENV !== "production") {
	siteConfig = {
		name: "fallibilism",
		description: "xxxxx",
		url: "https://themanan.com",
		handle: "@AbdelmananAbde2",
		github: {
			url: "https://github.com/" + repoName,
			api: "https://api.github.com/repos/" + repoName,
		},
		links: {
			twitter: "https://twitter.com/AbdelmananAbde2",
		},
	// };
}

export { siteConfig };
