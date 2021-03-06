import { Button, Layout, Menu } from 'antd';
import { Dropdown } from 'antd';
import {  FundOutlined, PullRequestOutlined } from '@ant-design/icons';
import logo from '../img/logo.PNG';
import './Navbar.component.css';
import {
  HomeOutlined,
  SettingFilled,
  BarChartOutlined,
  TeamOutlined,
  UserOutlined,
  GlobalOutlined,
  EditOutlined,
  FileDoneOutlined,
  LogoutOutlined,
  TagOutlined,
  ScheduleOutlined,
  FormOutlined,
  GiftOutlined,
  ProfileOutlined,
  CaretDownFilled,
  WechatOutlined,
  FileTextOutlined
 
} from '@ant-design/icons';

import SubMenu from 'antd/lib/menu/SubMenu';
import { Link, Route, Switch } from 'react-router-dom';
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

import NosPartenaires from '../page/NosPartenaire/NosPartenaires.component';
import FeedbackMesBesions from '../page/FeedBack/FeedbackMesBesions.component';
import FeedbackMonFeedback from '../page/FeedBack/FeedbackMonFeedback.component';
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
import DdBoostPro from '../page/Admin/DbBoostPro.component';
import Mod??rateurs from '../page/Mod??rateur/Mod??rateurs.component';
import AddMod??rateur from '../page/Mod??rateur/AddMod??rateur/AddMod??rateur.component';
import EditMod??rateur from '../page/Mod??rateur/EditMod??rateur/EditMod??rateur.component';
import AddAdmin from '../page/Admin/AddAdmin/AddAdmin.component';
import EditAdmin from '../page/Admin/EditAdmin/EditAdmin.component';
import AdminList from '../page/Admin/AdminLists.component';
import DdRelaisBP from '../page/Admin/DdRelaisBP.component';

import DdExpertBP from '../page/Admin/DdExpertBP.compnent';
import Besoins from '../page/Admin/Besions.component';
import Feedbacks from '../page/Admin/Feedbacks.component';
import AddPublication from '../page/Acueil/AddPublication';


import AjouterRelaisOuExpert from '../page/AjouterRelais/AjouterRelais'


import BesionsPro from '../page/Admin/Besions.component';
import EditCompte from '../page/NosReseaux/EditCompte/EditCompte.component';
import AddPartenaire from '../page/Admin/AddPartenaire';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ListPublications from '../page/Admin/publications/ListPublications.component';
import ListeRelais from '../page/Admin/ListeRelais/ListeRelais.component';
import CompteAbonn??e from '../page/NosReseaux/CompteAbonn??n/CompteAbonn??e.component';

import CompteAbonn??eReseau from '../page/NosReseaux/CompteAbonn??n/CompteAbonn??eReseau.component';
import listInscrit from '../page/Inscrit/listInscrit.component';
import EditInscrit from '../page/Inscrit/EditInscrit';
import EditSprint from '../page/Admin/EditSprint/EditSprint.component';
import EditShoura from '../page/Admin/EditShoura/EditShoura.component';
import EditRelais from '../page/Admin/EditRelais/EditRelais.component';
import EditMeet from '../page/Admin/EditMeet/EditMeet.component';
import EditBoost from '../page/Admin/EditBoost/EditBoost.component';
import EditExpert from '../page/Admin/EditExpert/EditExpert.component';
import ModifierProfile from '../page/ModifierProfile/ModifierProfile.component';
import { config } from '../config';
import RegenererPassword from '../page/regenererPassword/RegenererPassword.component';




const { Header, Content, Footer, Sider } = Layout; 

const menu = (

  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}> <Link  to="/CompteAbonn??e"></Link>Voir profile</Menu.Item>

    <Menu.Item key="2" icon={< EditOutlined/>}><Link  to="/ModifierProfile"></Link>Modifier profile</Menu.Item>

  </Menu>
);


function Navbar(props) {

  const [role, SetRole] = useState("")
  const [Img, SetImg] = useState("")

   console.log('reponse---------------------> id',localStorage.getItem('ID'));

   useEffect(() => {
    console.log(localStorage.getItem('ID'));
    axios.get(config+'/BoussolePro-backend/getUserById.php?id='+localStorage.getItem('ID'))
    .then(response=>{
      console.log("reponse of request ==***=>",response.data.role);
      SetRole(response.data.role);
      SetImg(response.data.urlImage);
      console.log("--------------------->role",role);

   })
   .catch(function (error){
     console.log(error);
    })
  });
   
  
  return (
    <div className="Navbar">
       <Layout>
        
  

    <Sider
    className="logo"
      style={{
        // overflow: 'auto',
        // height: '800px',
        // position: 'fixed',
       // width: '250px',
        
        //minWidth:"273px"

      }}
    >



      <Menu  theme="light" mode="inline" defaultSelectedKeys={['4']} 
      // style={{
      //   minWidth: '270px'
      // }}
      >
      <div className="logo" style={{height: "42px"}} >
      <img src={logo} style={{height:"42px",backgroundPositionY:"center"}} />
      </div>

        <Menu.Item key="1" className={role === "Inscrit" ? 'hidden' : ''} icon={< HomeOutlined />}><Link  to="/Acueil"></Link>Accueil  </Menu.Item>
        <Menu.Item key="2" className={role === "Inscrit" ? 'hidden' : ''} icon={<GlobalOutlined />}> <Link  to="/NosReseaux"></Link>  Notre Resaux  </Menu.Item>

        <SubMenu key="sub1" className={role === "Inscrit" ? 'hidden' : ''} icon={<GiftOutlined />}  title="Nos Services" > 
        <Menu.Item key="3"  className={role === "Inscrit" ? 'hidden' : ''}><Link  to="/Services"></Link>Tous les Services </Menu.Item>
         <Menu.Item key="4"  className={role === "Inscrit" ? 'hidden' : ''}><Link  to="/SprintPro"></Link>Sprint Pro</Menu.Item>
                  <Menu.Item key="5" className={role === "Inscrit" ? 'hidden' : ''}><Link  to="/MeetUpPro"></Link>Meet'Up Pro</Menu.Item>
                  <Menu.Item key="6" className={role === "Inscrit" ? 'hidden' : ''}><Link  to="/ShouraPro"></Link>Shoura Pro</Menu.Item>
                  <Menu.Item key="7" className={role === "Inscrit" ? 'hidden' : ''}><Link  to="/BoostPro"></Link>Boost Pro </Menu.Item>        
                  <Link  to="/Relais"><SubMenu key="sub2" className={role === "Inscrit" ? 'hidden' : ''} icon={<TagOutlined />} title="Relais BP"> 
                <Menu.Item key="8"  className={role === "Inscrit" ? 'hidden' : ''} icon={<TeamOutlined />}><Link  to="/NosRelais" ></Link>Nos Relais</Menu.Item>
        </SubMenu></Link> 
        <Link  to="/Expert">  <SubMenu key="sub3" className={role === "Inscrit" ? 'hidden' : ''} icon={<TagOutlined />} title="Expert BP">
                 <Menu.Item key="9" className={role === "Inscrit" ? 'hidden' : ''} icon={<TeamOutlined />}><Link  to="/NosExperts" ></Link>Nos Experts</Menu.Item>
          </SubMenu></Link>
       </SubMenu> 

        <Menu.Item key="10" className={role === "Inscrit" ? 'hidden' : ''} icon={<BarChartOutlined />}>

          <Link  to="/NosPartenaires"></Link  >Nos Partenaires
        </Menu.Item>
            <SubMenu key="sub4" className={role === "Inscrit" ? 'hidden' : ''} icon={<WechatOutlined /> } title="Feedback">
              <Menu.Item key="11" className={role === "Inscrit" ? 'hidden' : ''} icon={<WechatOutlined /> }> <Link  to="/MesBesoins"></Link>Mes besions Pro imm??diate</Menu.Item>
              <Menu.Item key="12" className={role === "Inscrit" ? 'hidden' : ''} icon={<WechatOutlined /> }><Link  to="/MonFeedback"></Link>Mon feedback sur un service</Menu.Item>
            </SubMenu>



            <SubMenu key="sub5" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''} icon={<UserOutlined />} title="Admin">
              <Menu.Item key="13" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''} icon={<FileDoneOutlined />}><Link  to="/DdSprintPro"></Link>Demandes Sprint Pro</Menu.Item>
              <Menu.Item key="14" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''} icon={<FileDoneOutlined />} ><Link  to="/DdMeetUpPro"></Link>Demandes Meet'Up Pro</Menu.Item>
              <Menu.Item key="15" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''} icon={<FileDoneOutlined />}><Link  to="/DdShouraPro"></Link>Demandes Shoura Pro</Menu.Item>
              <Menu.Item key="16" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''} icon={<FileDoneOutlined />}><Link  to="/DdBoostPro"></Link>Demandes Boost Pro</Menu.Item>
              <Menu.Item key="17" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''} icon={<FileDoneOutlined />}><Link  to="/DdRelaisBP"></Link>Demandes Relais BP</Menu.Item>
              <Menu.Item key="18" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''} icon={<FileDoneOutlined />}><Link  to="/DdExpertBP"></Link>Demandes Expert BP</Menu.Item>
              <Menu.Item key="29" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''} icon={<ScheduleOutlined />}><Link  to="/feedbacks"></Link>Listes des feedbacks</Menu.Item>
              <Menu.Item key="20" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''} icon={<ProfileOutlined />}><Link  to="/besoins"></Link>Listes des besoins Pro</Menu.Item>
              <Menu.Item key="21" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''} icon={<ProfileOutlined />}><Link  to="/AjouterRelaisExpert"></Link>Ajouter Relais/Expert</Menu.Item>
              <Menu.Item key="22" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''} icon={<FileTextOutlined />} ><Link  to="/AddPartenaire"></Link>Ajouter un partenaire</Menu.Item>

            </SubMenu>
              <SubMenu key="sub6" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''} icon={< SettingFilled />} title="Parametres">
               <Menu.Item key="23" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''}  icon={<ProfileOutlined />}><Link  to="/Mod??rateur"></Link>Liste des Mod??rateurs</Menu.Item>
                <Menu.Item key="24" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''}  icon={<ProfileOutlined />} ><Link  to="/AdminList"></Link>Liste des admins</Menu.Item>
                <Menu.Item key="25" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''} icon={<ProfileOutlined />} ><Link  to="/listInscrit"></Link>Liste des inscrits </Menu.Item>
                <Menu.Item key="26" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''}  icon={<ProfileOutlined />} ><Link  to="/ListPublications"></Link>Liste des publication</Menu.Item>
                <Menu.Item key="27" className={role === "Inscrit" || role === "Abonnee" ? 'hidden' : ''}  icon={<ProfileOutlined />} ><Link  to="/ListeRelais"></Link>Liste des Relais et Experts</Menu.Item>

                <Menu.Item key="34" className={role === "Inscrit" || role === "Mod??rateur" ? 'hidden' : ''}  icon={<ProfileOutlined />} ><Link  to="/RegenererPassword"></Link>Reg??nerer un mot de passe</Menu.Item>
              </SubMenu>
             
            <SubMenu key="sub7" className={role === "Inscrit" ? 'hidden' : ''} icon={<FundOutlined />} title="les offres">
              <Menu.Item key="28" className={role === "Inscrit" ? 'hidden' : ''} icon={<PullRequestOutlined />}><Link  to="/OffreStage"></Link>Offres de stage</Menu.Item>
              <Menu.Item key="29" className={role === "Inscrit" ? 'hidden' : ''} icon={<PullRequestOutlined />} ><Link  to="/OffreEmploi"></Link>Offres d'emploi</Menu.Item>
            </SubMenu>

            <SubMenu key="sub8" className={role === "Inscrit" ? 'hidden' : ''} icon={<FileTextOutlined />} title="les demandes">

              <Menu.Item key="30" className={role === "Inscrit" ? 'hidden' : ''} icon={<FileTextOutlined />}><Link  to="/DemandeStage"></Link>Demandes de stage</Menu.Item>
              <Menu.Item key="31" className={role === "Inscrit" ? 'hidden' : ''} icon={<FileTextOutlined />} ><Link  to="/DemandeEmploi"></Link>Demandes d'emploi</Menu.Item>
            </SubMenu>
            <Menu.Item key="32" className={role === "Admin" ||role === "Mod??rateur" ||role === "Abonnee" ? 'hidden' : ''} icon={<FormOutlined />}>
               <Link to="/EditCompte"></Link>L'inscription
             </Menu.Item>
            
           
      </Menu>
      </Sider>
   
    <Layout className="site-layout" className="l">
      <Header className="site-layout-background"  style={{backgroundColor:"#30ABFF"}}>
      <Button type="primary" shape="round" onClick={props.signout} 
      style={{float:"right",marginTop:"15px",padding:"2px",borderRadius:"16px",color:"#FFFFFF",backgroundColor:"#171617"}}
       icon={<LogoutOutlined />} size="middle">
          D??connexion
        </Button>
{/* 
      <Button  onClick={props.signout} style={{float:"right",marginTop:"15px",padding:"2px",borderRadius:"16px"}}  >
   <LogoutOutlined/> <span style={{color:"#FFFFFF"}} >D??connexion</span>
  </Button> */}
      <Dropdown overlay={menu}  >
    <a className="ant-dropdown-link" 
     style={{color:"#fff",float: "right",marginRight:"10px"}}>
      <Avatar icon={<img 
      src={`https://www.boussolepro.net/BoussolePro-backend/images/${Img}`}
       style={{marginBottom:"20px"}} />} 
      style={{marginLeft:"3px"}} /> <CaretDownFilled />
    </a>
  </Dropdown>
 
      </Header>

      <Content >
        

        {
          (role === "Admin" || role === "Mod??rateur" ||role === "Abonnee" || role === "Inscrit") 
          && (<Route path="/CompteAbonn??e" exact component={CompteAbonn??e}/>)
        }
        {
          (role === "Admin" || role === "Mod??rateur" ||role === "Abonnee" || role === "Inscrit") 
          && (<Route path="/ModifierProfile" exact component={ModifierProfile}/>)
        }

        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee") && (
          <Route exact path="/Acueil" component={Acueil} />) }
          
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/Services" exact component={Services}/>)}

        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")  
        && (<Route path="/NosReseaux" exact component={NosReseaux} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        &&(<Route path="/listInscrit" exact component={listInscrit} />) }
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/NosPartenaires" exact component={NosPartenaires} />)}

        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/BoostPro" exact component={BoostPro} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/MeetUpPro" exact component={MeetUpPro} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/Relais" exact component={Relais} /> )}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/Expert" exact component={Expert} /> )}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/ShouraPro" exact component={ShouraPro} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/MesBesoins" exact component={FeedbackMesBesions} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/SprintPro" exact component={SprintPro} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/MonFeedback" exact component={FeedbackMonFeedback} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/Sprintform" exact component={Sprintform} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/Meetform" exact component={Meetform} /> )}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/Shouraform" exact component={Shouraform} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/Boostform" exact component={Boostform} /> )}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/Relaisform" exact component={Relaisform} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/CompteAbonn??eReseau/:id" exact component={CompteAbonn??eReseau}/>)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/Expertform" exact component={Expertform} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/Expertform" exact component={Expertform} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/NosRelais" exact component={Nosrelais} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        && (<Route path="/NosExperts" exact component={Nosexperts} />)}

          {/*  offer's routes  */}
          {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        &&(<Route path="/OffreStage" exact component={OfferStage} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee") 
        &&(<Route path="/OffreEmploi" exact component={OfferEmploi} />) }
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        &&(<Route path="/AddOffreEmploi" exact component={AddOffreEmploi}/>)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        &&(<Route path="/AddOffreStage" exact component={AddOffreStage}/>)}

        {/* Demande's routes */}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        &&(<Route path="/DemandeStage" exact component={DemandeStage} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee") 
        &&(<Route path="/DemandeEmploi" exact component={DemandeEmploi} />)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee") 
        &&(<Route path="/AddDemandeEmploi" exact component={AddDemandeEmploi}/>)}
        {(role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
        &&(<Route path="/AddDemandeStage" exact component={AddDemandeStage}/>)}

        {
          (role === "Admin" || role === "Mod??rateur" ||role === "Abonnee")
          &&(<Route path="/AddPublication" exact component={AddPublication} />)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/AddPartenaire" exact component={AddPartenaire}/>)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/EditAdmin" exact component={EditAdmin}/>)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/DdSprintPro" exact component={DdSprintPro} />)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&( <Route path="/DdShouraPro" exact component={DdShouraPro} />)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/DdMeetUpPro" exact component={DdMeetUpPro} />)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/DdBoostPro" exact component={DdBoostPro} />)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/DdRelaisBP" exact component={DdRelaisBP} />)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/DdExpertBP" exact component={DdExpertBP} />)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/ListPublications" exact component={ListPublications} />)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/ListeRelais" exact component={ListeRelais} />)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/AjouterRelaisExpert" exact component={AjouterRelaisOuExpert} />)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/Besoins" exact component={Besoins}/>)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/feedbacks" exact component={Feedbacks} />)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/BesionsPro" exact component={BesionsPro} />)}

         {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/EditSprint/:id"  component={EditSprint} /> )}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/EditShoura/:id"  component={EditShoura} />) }
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/EditRelais/:id"  component={EditRelais} />) }
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/EditMeet/:id"  component={EditMeet} />)}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/EditBoost/:id"  component={EditBoost} /> )}
          {
          (role === "Admin" || role === "Mod??rateur")
          &&(<Route path="/EditExpert/:id"  component={EditExpert} />) }
          {
          (role === "Admin" || role === "Mod??rateur")
          
          &&(<Route path="/EditInscrit/:id"  component={EditInscrit} />) }
        
          
      {(role === "Admin")     
       &&(<Route path="/Mod??rateur" exact component={Mod??rateurs} />) }
       {(role === "Admin") 
       &&(<Route path="/AddMod??rateur" exact component={AddMod??rateur} />)}
       {(role === "Admin")  
       &&(<Route path="/EditMod??rateur/:id" component={EditMod??rateur} />)}
       {(role === "Admin") 
        && (<Route path="/RegenererPassword" exact component={RegenererPassword} />) }

       {/* route de admin */}
       {(role === "Admin") 
      &&(<Route path="/AdminList" exact component={AdminList} />) }
      {(role === "Admin") 
      &&(<Route path="/AddAdmin" exact component={AddAdmin} /> )}
      {(role === "Admin") 
      &&(<Route path="/EditAdmin/:id"  component={EditAdmin} /> )
      }

        {
          role==="Inscrit" && (<Route path="/EditCompte"exact component={EditCompte} /> )
        }
       

         
    
      </Content>
      <Footer style={{ textAlign: 'center' }}>Boussole <span style={{color:"#30a8ff"}}>Pro</span> ??2021 - Tous les droits sont r??serv??s</Footer>
    </Layout>
   
   
    </Layout>
    </div>
  );
}

export default Navbar;