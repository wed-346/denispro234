
import PageRoutes from "./componets/PageRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <PageRoutes/>
   
    </Provider>
   
  );
};
export default App;