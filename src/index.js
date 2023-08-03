import React from "react";
import { createRoot } from "react-dom/client"; // Fixed import statement

import App from './App';

createRoot(document.getElementById('root')).render(<App />); // Fixed function call
