import { CheckCircleTwoTone } from "@ant-design/icons";
import { Button } from "antd";

function DdSprintPro() {
  
   
  return (
    <div className="DdSprintPro">
    <h2>Les demande de SprintPro</h2>
    
                        <div className="se-body">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                   
       <table class="table">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Prénom</th>
      <th scope="col">Titre</th>
      <th scope="col">Avec qui</th>
      <th scope="col">Temps</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Zennou</td>
      <td>Khalid</td>
      <td>Boussole Pro</td>
      <td>WeekEnd</td>
      <td><CheckCircleTwoTone twoToneColor="#52c41a" /></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Boussole Pro</td>
      <td>Aprè midi</td>
      <td><CheckCircleTwoTone twoToneColor="#52c41a" /></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>Depamy</td>
      <td>Boussole Pro</td>
      <td>Dimanche </td>
      <td><CheckCircleTwoTone twoToneColor="#52c41a" /></td>
    </tr>
  </tbody>
</table>
    </div>
  );
}

export default DdSprintPro;
