import {Home} from "./pages/home";
import {Provider} from 'react-redux'
import store from "./store";

export function App() {
    return <Provider store={store}>
        <Home/>
    </Provider>
}
