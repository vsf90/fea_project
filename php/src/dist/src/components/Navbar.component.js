
import './home.component.css';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import SubMenu from 'antd/lib/menu/SubMenu';
import Body from '../page/Body.component';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import Avatar from 'antd/lib/avatar/avatar';
import Acueil from '../page/Acueil.component';
import BoostPro from '../page/BoostPro.component';
import MeetUpPro from '../page/MeetUpPro.component';
import Relais from '../page/Relais.component';
import ShouraPro from '../page/ShouraPro.component';
import SprintPro from '../page/SprintPro.component';
import Services from '../page/Services.component';


const { Header, Content, Footer, Sider } = Layout; 



function Navbar() {

  
  return (
    <div className="Navbar">
        <Layout>
  

    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
         
        
        <Link  to="/Acueil"></Link>Acueil 
  
      
        </Menu.Item>
        <Menu.Item key="2" icon={<UploadOutlined />}>
          Notre Resaux
        </Menu.Item>
        <Link  to="/Services">
        <SubMenu key="sub1" icon={<UserOutlined />} title="Nos Services">
              
              <Menu.Item key="3"><Link  to="/SprintPro"></Link>Sprint Pro</Menu.Item>
              <Menu.Item key="4"><Link  to="/ShouraPro"></Link>Shoura Pro</Menu.Item>
              <Menu.Item key="5"><Link  to="/MeetUpPro"></Link>Meet Up Pro</Menu.Item>
              <Menu.Item key="6"><Link  to="/BoostPro"></Link>Boost Pro </Menu.Item>
              <Menu.Item key="7"><Link  to="/Relais"></Link>Relais BP</Menu.Item>
        </SubMenu></Link>
        
        <Menu.Item key="8" icon={<BarChartOutlined />}>
          Nos Partenaires
        </Menu.Item>
        <SubMenu key="sub2" icon={<UserOutlined />} title="Feedback">
              <Menu.Item key="9">Mes besions Pro immédiate</Menu.Item>
              <Menu.Item key="10">Mon feedback sur un service</Menu.Item>
              <Menu.Item key="11">Un ticket Boussole Pro</Menu.Item>
             
            </SubMenu>
       
      
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} >
     
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>

        <Switch>
        <Route path="/Acueil" exact component={Acueil} />
        <Route path="/Services" exact component={Services}/>  

        <Route path="/BoostPro" exact component={BoostPro} />  
        <Route path="/MeetUpPro" exact component={MeetUpPro} />  
        <Route path="/Relais" exact component={Relais} />  
        <Route path="/ShouraPro" exact component={ShouraPro} />  
        <Route path="/SprintPro" exact component={SprintPro} /> 
        

  
        </Switch>
         
    
      </Content>
      <Footer style={{ textAlign: 'center' }}>Boussole Pro ©2021 Created by Ant UED</Footer>
    </Layout>
  </Layout>
    </div>
  );
}

export default Navbar;
