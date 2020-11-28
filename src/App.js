import './App.css';
import InputPage from './Component/InputPage';
import store from './Redux/store.js'
import { Provider } from 'react-redux'
import OutputPage from './Component/outputPage';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <OutputPage/>
      </div>
    </Provider>
  );
}

export default App;
