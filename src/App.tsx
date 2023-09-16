import { Button } from "./components/ui/button";

function App() {
	return (
		<>
			<div className="grid place-items-center h-screen">
				<Button size={"lg"} variant={"destructive"}>
					Click Me!
				</Button>
			</div>
		</>
	);
}

export default App;
