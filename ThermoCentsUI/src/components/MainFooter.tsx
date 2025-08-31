import { Footer, type Links } from "./Footer";

export function MainFooter() {
	const links: Links = {
		githubLink: "github.com/SaqAsh",
		twitterLink: "elonIsMyDad.com",
		gmailLink: "cliffsideintegrated@gmail.com",
	};
	return (
		<Footer
			socialCallToAction="Please donate generously for the masjid, I will buy an rs7"
			links={links}
			header="ThemoCents"
			productDescription="Smart energy management for a sustainable future."
			primaryColumnTitle="Baitul Jannah Masjid Links"
			primaryColumnItems={[
				{
					label: "Donate",
					onClick: () =>
						alert("Donate clicked - TODO: Navigate to donate page"),
				},
			]}
			secondaryColumnTitle="More donations"
			secondaryColumnItems={[
				{
					label: "Donate for the new masjid",
					onClick: () =>
						alert(
							"Donate for the new masjid clicked - TODO: Navigate to donate for the new masjid page"
						),
				},
			]}
		></Footer>
	);
}
