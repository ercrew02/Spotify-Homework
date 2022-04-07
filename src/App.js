import AppRoute from "./Homework1/Pages/Router";
import "./styles.css";
import { Provider } from "react-redux";
import store from './Homework1/reduxThing/store';

export default function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <AppRoute/>
      </div>
    </Provider>
    
  );
}
