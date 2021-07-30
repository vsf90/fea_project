
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
import Body from '../page/Acueil/Body.component';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import Avatar from 'antd/lib/avatar/avatar';
import Acueil from '../page/Acueil/Acueil.component';
 import NosReseaux from '../page/NosReseaux/NosReseaux.component';
import BoostPro from '../page/Boostpro/Boostpro.component';
import MeetUpPro from '../page/Meetup/Meetup.component';
import Relais from '../page/RelaisBP/Relais.component';
import Expert from '../page/ExpertBP/Expert.component';
import ShouraPro from '../page/Shourapro/Shoura.component';
import SprintPro from '../page/Sprint/Sprint.component';
import Services from '../page/Services/Services.components';
import Sprintform from '../page/Sprint/Sprintform/Sprintform';
import Meetform from '../page/Meetup/Meetform/Meetform';
import Shouraform from '../page/Shourapro/Shouraform/Shouraform';
import Boostform from '../page/Boostpro/Boostform/Boostform';
import Relaisform from '../page/RelaisBP/RelaisBP/Relaisform';
import Expertform from '../page/ExpertBP/ExpertBP/Expertform';




import NosPartenaires from '../page/NosPartenaire/NosPartenaires.component';
import CompteAbonnée from '../page/NosReseaux/CompteAbonnén/CompteAbonnée.component';
import FeedbackMesBesions from '../page/FeedbackMesBesions.component';
import FeedbackMonFeedback from '../page/FeedbackMonFeedback.component';
import TicketBoussole from '../page/TicketBoussole.component';



const { Header, Content, Footer, Sider } = Layout; 



function Navbar() {

  
  return (
    <div className="Navbar">
        <Layout>
  
<div/>
    <Sider
      style={{
        overflow: 'auto',
        height: '550vh',
        position: 'fixed',
        width: '275px',
        left: 0,
      }}
    >
      <Menu  theme="light" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
         
        
        <Link  to="/Acueil"></Link>Acueil 
  
      
        </Menu.Item>
        <Menu.Item key="2" icon={<UploadOutlined />}>
        <Link  to="/NosReseaux"></Link>  Notre Resaux
        </Menu.Item>
        <Link  to="/Services">
        <SubMenu key="sub1" icon={<UserOutlined />} title="Nos Services">
              
              <Menu.Item key="3"><Link  to="/SprintPro"></Link>Sprint Pro</Menu.Item>
              <Menu.Item key="4"><Link  to="/MeetUpPro"></Link>Meet'Up Pro</Menu.Item>
              <Menu.Item key="5"><Link  to="/ShouraPro"></Link>Shoura Pro</Menu.Item>
              <Menu.Item key="6"><Link  to="/BoostPro"></Link>Boost Pro </Menu.Item>
              <Menu.Item key="7"><Link  to="/Relais"></Link>Relais BP</Menu.Item>
              <Menu.Item key="8"><Link  to="/Expert"></Link>Expert BP</Menu.Item>

        </SubMenu></Link>
        
        <Menu.Item key="9" icon={<BarChartOutlined />}>
        <Link  to="/NosPartenaires"></Link>
        
          Nos Partenaires
        </Menu.Item>
        <SubMenu key="sub2" icon={<UserOutlined />} title="Feedback">


              <Menu.Item key="10"><Link to="/MesBesoins"></Link>Mes besions Pro immédiate</Menu.Item>
              <Menu.Item key="11"><Link to="/MonFeedback"></Link>Mon feedback sur un service</Menu.Item>
              <Menu.Item key="12"><Link to="/TicketBoussole"></Link>Un ticket Boussole Pro</Menu.Item>
             

        </SubMenu>

          

       
      
      </Menu>
    </Sider>
    <Layout  style={{ marginLeft: 200 }}>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>

        <Switch>
        <Route path="/Acueil" exact component={Acueil} />
        <Route path="/Services" exact component={Services}/> 
        <Route path="/NosReseaux" exact component={NosReseaux} />
        <Route path="/NosPartenaires" exact component={NosPartenaires} />   

        <Route path="/BoostPro" exact component={BoostPro} />  
        <Route path="/MeetUpPro" exact component={MeetUpPro} />  
        <Route path="/Relais" exact component={Relais} />  
        <Route path="/Expert" exact component={Expert} /> 
        <Route path="/ShouraPro" exact component={ShouraPro} />  
        <Route path="/MesBesoins" exact component={FeedbackMesBesions} /> 
        <Route path="/MonFeedback" exact component={FeedbackMonFeedback} /> 
        <Route path="/TicketBoussole" exact component={TicketBoussole} /> 
        <Route path="/SprintPro" exact component={SprintPro} />
        <Route path="/Sprintform" exact component={Sprintform} /> 
        <Route path="/Meetform" exact component={Meetform} /> 
        <Route path="/Shouraform" exact component={Shouraform} /> 
        <Route path="/Boostform" exact component={Boostform} /> 
        <Route path="/Relaisform" exact component={Relaisform} /> 
        <Route path="/Expertform" exact component={Expertform} /> 
        <Route path="/CompteAbonnée" exact component={CompteAbonnée} /> 

        </Switch>
         
    
      </Content>
      <Footer style={{ textAlign: 'center' }}>Boussole Pro ©2021 Created by Ant UED</Footer>
    </Layout>
  </Layout>
    </div>
  );
}

export default Navbar;
