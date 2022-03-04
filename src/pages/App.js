import { Router, store } from "../config";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
