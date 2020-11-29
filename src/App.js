import './App.css';
import store from './Redux/store.js'
import { Provider } from 'react-redux'
import Routes from './Component/Routes';
import ErrorBoundries from './Component/ErrorBoundries';
function App() {
  return (
    <Provider store={store}>
      <ErrorBoundries>
        <div className="App" >
          <Routes />
        </div>
      </ErrorBoundries>
    </Provider>
  );
}

export default App;
