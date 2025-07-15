import RenderBackground from "./components/Background/RenderBackground";
import { MainFooter } from "./components/MainFooter";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-providor";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<RenderBackground />
			<div className="flex justify-between items-center p-4">
				<div>
					<h1 className="text-2xl font-bold">ThermoCents</h1>
					<p className="text-sm text-gray-500">
						Welcome to the ThermoCents App
					</p>
				</div>
				<ModeToggle />
			</div>
			<MainFooter />
		</ThemeProvider>
	);
}
export default App;
