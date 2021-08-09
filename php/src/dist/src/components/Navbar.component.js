



import { Layout, Menu } from 'antd';
import { Dropdown, message } from 'antd';
import { DownOutlined, FundOutlined, PullRequestOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import logo from '../img/logo transparent.png'
import {
  HomeOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  GlobalOutlined,
  EditOutlined,
  FileDoneOutlined,
  MailOutlined,
  LogoutOutlined,
  TagOutlined,
  ScheduleOutlined,
  FormOutlined,
  GiftOutlined,
  CarryOutOutlined,
  ProfileOutlined
 
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
import Nosrelais from '../page/NosRelais/Nosrelais';
import Nosexperts from '../page/NosExperts/Nosexperts';
import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'




import NosPartenaires from '../page/NosPartenaire/NosPartenaires.component';
import CompteAbonnée from '../page/NosReseaux/CompteAbonnén/CompteAbonnée.component';
import FeedbackMesBesions from '../page/FeedbackMesBesions.component';
import FeedbackMonFeedback from '../page/FeedbackMonFeedback.component';
import TicketBoussole from '../page/TicketBoussole.component';
import DdSprintPro from '../page/Admin/DdSprintPro.component';
import OfferStage from '../page/offers/OfferStage.component';
import OfferEmploi from '../page/offers/OfferEmploi.component';
import AddOffreEmploi from '../page/offers/AddOffer/AddOffreEmploi.component';
import AddOffreStage from '../page/offers/AddOffer/AddOffreStage.component';
import AddDemandeStage from '../page/demandes/AddDemande/AddDemandeStage.component';
import AddDemandeEmploi from '../page/demandes/AddDemande/AddDemandeEmploi.component';
import DemandeStage from '../page/demandes/DemandeStage.component';
import DemandeEmploi from '../page/demandes/DemandeEmploi.component';
import DdShouraPro from '../page/Admin/DbShouraPro.component';
import DdMeetUpPro from '../page/Admin/DdMeetUpPro.component';
import DdRelaisPro from '../page/Admin/DdRelaisBP.component';
import DdBoostPro from '../page/Admin/DbBoostPro.component';
import DdRelaisBP from '../page/Admin/DdRelaisBP.component';
import DdExpairBP from '../page/Admin/DdExpairBP.compnent';




const { Header, Content, Footer, Sider } = Layout; 
/*const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};*/

const menu = (
<<<<<<< Updated upstream
  <Menu /*onClick={onClick}*/>
    <Menu.Item key="1" icon={<UserOutlined />}>Voir profile</Menu.Item>
=======
  <Menu onClick={onClick}>
    <Menu.Item key="1" icon={<UserOutlined />}> <Link  to="/CompteAbonnée"></Link>Voir profile</Menu.Item>
>>>>>>> Stashed changes
    <Menu.Item key="2" icon={< EditOutlined/>}>Modifier profile</Menu.Item>
    <Menu.Item key="3" icon={<LogoutOutlined />}>Déconnexion</Menu.Item>
  </Menu>
);


function Navbar() {

  
  return (
    <div className="Navbar">
       <Layout>
        
  

    <Sider
      style={{
        overflow: 'auto',
        height: '550vh',
        position: 'fixed',
        width: '275px',
        left: 0,
        width:"1000px",
        maxWidth: '240px'
      }}
    >


<<<<<<< Updated upstream
      <Menu  theme="light" /*mode="inline"*/ defaultSelectedKeys={['4']}>
      <div className="logo" style={{height: "60px", background: "rgba(255, 255, 255, 0.4)"}} ><img src={logo} style={{height:"60px",backgroundPositionY:"center"}} /></div>
=======
      <Menu  theme="light" mode="inline" defaultSelectedKeys={['4']}>
      <div className="logo" style={{height: "60px", background: "rgba(255, 255, 255, 0.4)"}} >
      <img src={logo} style={{height:"60px",backgroundPositionY:"center"}} /></div>
>>>>>>> Stashed changes

        <Menu.Item key="1" icon={<UserOutlined />}><Link  to="/Acueil"></Link>Accueil  </Menu.Item>
        
       

        <Menu.Item key="2" icon={<GlobalOutlined />}> <Link  to="/NosReseaux"></Link>  Notre Resaux  </Menu.Item>
       
      
     
        <Link  to="/Services">
       
        <SubMenu key="sub1" icon={<GiftOutlined />}  title="Nos Services" >
              
              <Menu.Item key="3"><Link  to="/SprintPro"></Link>Sprint Pro</Menu.Item>
              <Menu.Item key="4"><Link  to="/MeetUpPro"></Link>Meet'Up Pro</Menu.Item>
              <Menu.Item key="5"><Link  to="/ShouraPro"></Link>Shoura Pro</Menu.Item>
              <Menu.Item key="6"><Link  to="/BoostPro"></Link>Boost Pro </Menu.Item>
             
             
              <Link  to="/Relais">
             
              <SubMenu key="sub2" icon={<TagOutlined />} title="Relais BP">
              <Menu.Item key="7" icon={<TeamOutlined />}><Link  to="/NosRelais" ></Link>Nos Relais</Menu.Item>
            </SubMenu></Link>


              <Link  to="/Expert">
             
             <SubMenu key="sub3" icon={<TagOutlined />} title="Expert BP">
             <Menu.Item key="8" icon={<TeamOutlined />}><Link  to="/NosExperts" ></Link>Nos Experts</Menu.Item>
           </SubMenu></Link>
        </SubMenu></Link>
        
        <Menu.Item key="9" icon={<BarChartOutlined />}>
        <Link  to="/NosPartenaires"></Link>
        
          Nos Partenaires   </Menu.Item>
       

            <SubMenu key="sub4" icon={<FormOutlined />} title="Feedback">
              <Menu.Item key="10"> <Link  to="/MesBesoins"></Link>Mes besions Pro immédiate</Menu.Item>
              <Menu.Item key="11"><Link  to="/MonFeedback"></Link>Mon feedback sur un service</Menu.Item>
              <Menu.Item key="12"><Link  to="/TicketBoussole"></Link>Un ticket Boussole Pro</Menu.Item>
             
            </SubMenu>
            <SubMenu key="sub5" icon={<FormOutlined />} title="Admin">
              <Menu.Item key="13" icon={<FileDoneOutlined />}><Link  to="/DdSprintPro"></Link>Demandes Sprint Pro</Menu.Item>
              <Menu.Item key="14" icon={<FileDoneOutlined />} ><Link  to="/DdMeetUpPro"></Link>Demandes Meet'Up Pro</Menu.Item>
              <Menu.Item key="15" icon={<FileDoneOutlined />}><Link  to="/DdShouraPro"></Link>Demandes Shoura Pro</Menu.Item>
              <Menu.Item key="16" icon={<FileDoneOutlined />}><Link  to="/DdBoostPro"></Link>Demandes Boost Pro</Menu.Item>
              <Menu.Item key="17" icon={<FileDoneOutlined />}><Link  to="/DdRelaisBP"></Link>Demandes Relais BP</Menu.Item>
              <Menu.Item key="18" icon={<FileDoneOutlined />}><Link  to="/DdExpairBP"></Link>Demandes Expert BP</Menu.Item>
              
              <Menu.Item key="19" icon={<ScheduleOutlined />}><Link  to="/feedbacks"></Link>Listes des feedbacks</Menu.Item>
              <Menu.Item key="20" icon={<ProfileOutlined />}><Link  to="/besions"></Link>Les besions Pro</Menu.Item>
            </SubMenu>



            <SubMenu key="sub6" icon={<FundOutlined />} title="les offres">
              <Menu.Item key="21" icon={<PullRequestOutlined />}><Link  to="/OffreStage"></Link>Offres de stage</Menu.Item>
              <Menu.Item key="22" icon={<PullRequestOutlined />} ><Link  to="/OffreEmploi"></Link>Offres d'emploi</Menu.Item>
            </SubMenu>

            <SubMenu key="sub7" icon={<FundOutlined />} title="les demandes">
              <Menu.Item key="23" icon={<PullRequestOutlined />}><Link  to="/DemandeStage"></Link>Demandes de stage</Menu.Item>
              <Menu.Item key="24" icon={<PullRequestOutlined />} ><Link  to="/DemandeEmploi"></Link>Demandes d'emploi</Menu.Item>
            </SubMenu>
      </Menu>
      </Sider>
   
    <Layout className="site-layout" style={{ marginLeft: 200 }} className="l">
      <Header className="site-layout-background"  >
      <Dropdown overlay={menu}  >
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{color:"#fff",float: "right",marginRight:"10px"}}>
      Mon profile<Avatar icon={<UserOutlined style={{marginBottom:"20px"}} />} style={{marginLeft:"3px"}} />
    
    </a>
  </Dropdown>
      </Header>

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

      

        <Route path="/NosRelais" exact component={Nosrelais} /> 
        <Route path="/NosExperts" exact component={Nosexperts} /> 


      {/* admin's routes  */}
        <Route path="/DdSprintPro" exact component={DdSprintPro} />
        <Route path="/DdShouraPro" exact component={DdShouraPro} />
        <Route path="/DdMeetUpPro" exact component={DdMeetUpPro} />
        <Route path="/DdBoostPro" exact component={DdBoostPro} />
        <Route path="/DdRelaisBP" exact component={DdRelaisBP} />
        <Route path="/DdExpairBP" exact component={DdExpairBP} />


        
        {/* offer's routes */}
        <Route path="/OffreStage" exact component={OfferStage} /> 
        <Route path="/OffreEmploi" exact component={OfferEmploi} /> 
        <Route path="/AddOffreEmploi" exact component={AddOffreEmploi}/>
        <Route path="/AddOffreStage" exact component={AddOffreStage}/>


        {/* Demande's routes */}
        <Route path="/DemandeStage" exact component={DemandeStage} /> 
        <Route path="/DemandeEmploi" exact component={DemandeEmploi} /> 
        <Route path="/AddDemandeEmploi" exact component={AddDemandeEmploi}/>
        <Route path="/AddDemandeStage" exact component={AddDemandeStage}/>
       

        </Switch>
         
    
      </Content>
      <Footer style={{ textAlign: 'center' }}>Boussole <span style={{color:"#30a8ff"}}>Pro</span> ©2021 - Tous les droits sont réservés</Footer>
    </Layout>
   
   
    </Layout>
    </div>
  );
}

export default Navbar;
