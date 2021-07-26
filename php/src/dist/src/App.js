import './App.css';
import Login from './components/login.component';
import "antd/dist/antd.css";
import "@ant-design/icons"
import { Content } from 'antd/lib/layout/layout';

import Home from './components/home.component';

function App() {
  return (
    <div className="h">
     
       <Home></Home>
    
        {/* <Login></Login> */}        
    </div>
  );
}

export default App;
