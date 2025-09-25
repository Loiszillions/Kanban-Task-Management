import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Suspense fallback={<div>Loading...</div>}>
		<HashRouter>
			<StyleSheetManager shouldForwardProp={(prop) => prop !== "shake"}>
				<App />
			</StyleSheetManager>
		</HashRouter>
	</Suspense>
);
