import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";


const root = createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
            <StrictMode>
            
            </StrictMode>
      </BrowserRouter>
)