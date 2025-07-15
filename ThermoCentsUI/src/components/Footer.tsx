import { Button } from "@/components/ui/button";
import { Github, Leaf, Mail, Twitter } from "lucide-react";

export type ColumnItem = {
	label: string;
	onClick?: () => void;
};

export type Links = {
	githubLink: string;
	twitterLink: string;
	gmailLink: string;
};
export type FooterProps = {
	socialCallToAction: string;
	links: Links;
	header: string;
	productDescription: string;
	primaryColumnTitle: string;
	secondaryColumnTitle: string;
	primaryColumnItems?: ColumnItem[];
	secondaryColumnItems?: ColumnItem[];
};

export function Footer({
	socialCallToAction,
	links,
	header,
	productDescription,
	primaryColumnTitle,
	secondaryColumnTitle,
	primaryColumnItems = [],
	secondaryColumnItems = [],
}: FooterProps) {
	// TODO: Replace with real social media and contact handlers
	const { githubLink, twitterLink } = links;

	const handleGitHubClick = () => {
		alert(`GitHub clicked - TODO: Navigate to ${githubLink}`);
	};

	const handleTwitterClick = () => {
		alert(`Twitter clicked - TODO: Navigate to ${twitterLink}`);
	};

	const handleEmailClick = () => {
		alert("Email clicked - TODO: Open email client or contact form");
	};

	return (
		<footer className="bg-muted/50 border-t border-green-500/20 py-12 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<Leaf className="h-8 w-8 text-green-500" />
							<h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
								{header}
							</h3>
						</div>
						<p className="text-muted-foreground">
							{productDescription}
						</p>
					</div>

					<div className="space-y-4">
						<h4 className="font-semibold text-green-500">
							{primaryColumnTitle}
						</h4>
						<ul className="space-y-2 text-muted-foreground">
							{primaryColumnItems.map((item, index) => (
								<li key={index}>
									<button
										className="hover:text-green-500 transition-colors"
										onClick={item.onClick}
									>
										{item.label}
									</button>
								</li>
							))}
						</ul>
					</div>
					<div className="space-y-4">
						<h4 className="font-semibold text-green-500">
							{secondaryColumnTitle}
						</h4>
						<ul className="space-y-2 text-muted-foreground">
							{secondaryColumnItems.map((item, index) => (
								<li key={index}>
									<button
										className="hover:text-green-500 transition-colors"
										onClick={item.onClick}
									>
										{item.label}
									</button>
								</li>
							))}
						</ul>
					</div>

					<div className="space-y-4">
						<h4 className="font-semibold text-green-500">
							Connect
						</h4>
						<div className="flex space-x-2">
							<Button
								variant="outline"
								size="icon"
								onClick={handleGitHubClick}
								className="border-green-500/30 hover:border-green-500/60 hover:bg-green-500/10 bg-transparent"
							>
								<Github className="h-4 w-4" />
								<span className="sr-only">GitHub</span>
							</Button>

							<Button
								variant="outline"
								size="icon"
								onClick={handleTwitterClick}
								className="border-green-500/30 hover:border-green-500/60 hover:bg-green-500/10 bg-transparent"
							>
								<Twitter className="h-4 w-4" />
								<span className="sr-only">Twitter</span>
							</Button>

							<Button
								variant="outline"
								size="icon"
								onClick={handleEmailClick}
								className="border-green-500/30 hover:border-green-500/60 hover:bg-green-500/10 bg-transparent"
							>
								<Mail className="h-4 w-4" />
								<span className="sr-only">Email</span>
							</Button>
						</div>

						<p className="text-sm text-muted-foreground">
							{socialCallToAction}
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
