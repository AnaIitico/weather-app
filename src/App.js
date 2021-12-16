

import 'bootstrap/dist/css/bootstrap.min.css';
import './Basiclayout.css';
import Basiclayout from './components/layout/Basiclayout';
import Home from './components/Home';

function App() {
  return <>
    <Basiclayout>
      <Home/>
    </Basiclayout>
  </>;
}

export default App;
