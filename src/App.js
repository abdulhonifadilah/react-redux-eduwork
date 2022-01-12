import { Provider } from 'react-redux';
import Redux from './materi/redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <Redux/>
    </Provider>
  );
}

export default App;
