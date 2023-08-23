
import PageRoutes from "./componets/PageRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<Provider store={store}>
			<PageRoutes />
			<ToastContainer position="top-center" />

		</Provider>

	);
};
export default App;