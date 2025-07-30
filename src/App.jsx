import { Provider } from "react-redux";

import store from "./Store/index.js";
import InputSection from "./Components/InputSection.jsx";
import OutputSection from "./Components/OutputSection.jsx";

import "./App.css";


export default function App() {
  return (<>
    <Provider store={store}>
      <InputSection />
      <OutputSection />
    </Provider>
  </>);
}