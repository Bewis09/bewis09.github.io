import { createRoot } from 'react-dom/client';
import "./index.scss"
import App from './app';

const domNode = document.getElementById("root") as HTMLElement
const root = createRoot(domNode);
root.render(<App></App>);