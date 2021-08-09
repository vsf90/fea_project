import { CheckCircleTwoTone } from "@ant-design/icons";

function DdShouraPro() {
  
   
  return (
    <div className="DdShouraPro">
    <h2>Les demande de Shoura Pro</h2>
    
                        <div className="se-body">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                   
       <table class="table">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Nom</th>
      <th scope="col">Prénom</th>
      <th scope="col">Problématique</th>
      <th scope="col">domaines des experts/consultants</th>
      <th scope="col">Temps</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Zennou</td>
      <td>Khalid</td>
      <td>desc de problimatique</td>
      <td>domaines .....</td>
      <td>WeekEnd</td>
      <td><CheckCircleTwoTone twoToneColor="#52c41a" /></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>desc de problimatique</td>
      <td>domaines .....</td>
      <td>Aprè midi</td>
      <td><CheckCircleTwoTone twoToneColor="#52c41a" /></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>Depamy</td>
      <td>desc de problimatique</td>
      <td>domaines .....</td>
      <td>Dimanche </td>
      <td><CheckCircleTwoTone twoToneColor="#52c41a" /></td>
    </tr>
  </tbody>
</table>
    </div>
  );
}

export default DdShouraPro;
