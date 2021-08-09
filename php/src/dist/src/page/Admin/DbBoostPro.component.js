import { CheckCircleTwoTone } from "@ant-design/icons";

function DdBoostPro() {
  
   
  return (
    <div className="DdBoostPro">
    <h2>Les demande de Boost Pro</h2>
    
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
      <th scope="col">Avec-qui</th>
      <th scope="col">Qui est-ce qui initie le Sprint Pro 15min ?</th>
      <th scope="col">Raison professionnelle</th>
      <th scope="col">Temps</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Zennou</td>
      <td>Khalid</td>
      <td>BP</td>
      <td>Fatrui lorian</td>
      <td>hayti nhtyd suy</td>
      <td>raison ....</td>
      <td>weekEnd</td>
      <td><CheckCircleTwoTone twoToneColor="#52c41a" /></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Fatrui lorian</td>
      <td>hayti nhtyd suy</td>
      <td>raison ....</td>
      <td>weekEnd</td>
      <td><CheckCircleTwoTone twoToneColor="#52c41a" /></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>Depamy</td>
      <td>Fatrui lorian</td>
      <td>hayti nhtyd suy</td>
      <td>raison ....</td>
      <td>weekEnd</td>
      <td><CheckCircleTwoTone twoToneColor="#52c41a" /></td>
    </tr>
  </tbody>
</table>
    </div>
  );
}

export default DdBoostPro;
