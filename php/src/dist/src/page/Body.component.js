
import "../css/Body.component.css";
import photo1 from "../image/f1.jpg";
import photo2 from "../image/f2.jpg";
import photo3 from "../image/f3.jpg";
import photo4 from "../image/f4.jpg";
import photo5 from "../image/f5.jpg";


import { Alert, Collapse } from "antd";


const { Panel } = Collapse;


const text = `A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`; 
function callback(key) {
    console.log(key);
  }
  
function Body() {
    
    return (
      
      <div className="container">
            <div className="row">
           
                <div className="col-lg-8"> 
                <Alert
                message="Acctualitée de Boussole Pro"
                description="Bienveneu sur les acctualitées de Boussole Pro."
                type="info"
                showIcon
                />
                <br></br>
                
                    <div className="card mb-4">
                        <a href="#!"><img className="card-img-top" src={photo1} alt="f1" /></a>
                        <div className="card-body">
                            <div className="small text-muted">January 1, 2021</div>
                            <h2 className="card-title">Featured Post Title</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                            
                        </div>
                        <Collapse defaultActiveKey={['1']} onChange={callback}>
                                <Panel header="Read more" key="1">
                                <p>{text}</p>
                                </Panel>
                            </Collapse>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card mb-4">
                                <a href="#!"><img className="card-img-top" src={photo2} alt="f2" /></a>
                                <div className="card-body">
                                    <div className="small text-muted">January 1, 2021</div>
                                    <h2 className="card-title h4">Post Title</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    
                                </div>
                                <Collapse defaultActiveKey={['1']} onChange={callback}>
                                        <Panel header="Read more" key="2">
                                        <p>{text}</p>
                                        </Panel>
                                    </Collapse>
                            </div>
                           
                            <div className="card mb-4">
                                <a href="#!"><img className="card-img-top" src={photo3} alt="f3" /></a>
                                <div className="card-body">
                                    <div className="small text-muted">January 1, 2021</div>
                                    <h2 className="card-title h4">Post Title</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    
                                </div>
                                <Collapse defaultActiveKey={['1']} onChange={callback}>
                                        <Panel header="Read more" key="3">
                                        <p>{text}</p>
                                        </Panel>
                                    </Collapse>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            
                            <div className="card mb-4">
                                <a href="#!"><img className="card-img-top" src={photo4} alt="f4" /></a>
                                <div className="card-body">
                                    <div className="small text-muted">January 1, 2021</div>
                                    <h2 className="card-title h4">Post Title</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    
                                </div>
                                <Collapse defaultActiveKey={['1']} onChange={callback}>
                                        <Panel header="Read more " key="4">
                                        <p>{text}</p>
                                        </Panel>
                                    </Collapse>
                            </div>
                            
                            <div className="card mb-4">
                                <a href="#!"><img className="card-img-top" src={photo5} alt="f5" /></a>
                                <div className="card-body">
                                    <div className="small text-muted">January 1, 2021</div>
                                    <h2 className="card-title h4">Post Title</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.</p>
                                    
                                </div>
                                <Collapse defaultActiveKey={['1']} onChange={callback}>
                                        <Panel header="Read more" key="5">
                                        <p>{text}</p>
                                        </Panel>
                                    </Collapse>
                            </div>
                        </div>
                    </div>
                   
                    <nav aria-label="Pagination">
                        <hr className="my-0" />
                        <ul className="pagination justify-content-center my-4">
                            <li className="page-item disabled"><a className="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
                            <li className="page-item active" aria-current="page"><a className="page-link" href="#!">1</a></li>
                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                            <li className="page-item"><a className="page-link" href="#!">3</a></li>
                            <li className="page-item"><a className="page-link" href="#!">4</a></li>
                            <li className="page-item"><a className="page-link" href="#!">5</a></li>
                            <li className="page-item"><a className="page-link" href="#!">6</a></li>
                            <li className="page-item"><a className="page-link" href="#!">7</a></li>
                            <li className="page-item disabled"><a className="page-link" href="#!">...</a></li>
                            <li className="page-item"><a className="page-link" href="#!">15</a></li>
                            <li className="page-item"><a className="page-link" href="#!">16</a></li>
                            <li className="page-item"><a className="page-link" href="#!">17</a></li>
                            <li className="page-item"><a className="page-link" href="#!">18</a></li>
                            <li className="page-item"><a className="page-link" href="#!">19</a></li>
                            <li className="page-item"><a className="page-link" href="#!">Older</a></li>
                        </ul>
                    </nav>
                </div>
                
                <div className="col-lg-4">
                    
                    <div className="card mb-4">
                        <div className="card-header">Search</div>
                        <div className="card-body">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                  
                    <div className="card mb-4">
                        <div className="card-header">Categories</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">Offre de Stage/Emploi</a></li>
                                        <li><a href="#!">Sprint Pro</a></li>
                                        <li><a href="#!">Shoura Pro</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">Demande de Stage/Emploi</a></li>
                                        <li><a href="#!">Boost Pro</a></li>
                                        <li><a href="#!">Meet Up Pro</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="card mb-4">
                        <div className="card-header">Side Widget</div>
                        <div className="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
                    </div>
                    <div className="center">
                        <div id="social-test">
                        <ul className="social">
                            <li><a href="https://facebook.com/colorlib"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="https://twitter.com/colorlib"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="https://instagram.com/colorlib"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.youtube.com/c/Colorlib"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                            <li><a href="https://github.com/puikinsh"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        
                        </ul>
                        <p className="credits">For more awesome social buttons  <a href="https://colorlib.com/wp/html-social-buttons-templates/"> click here</a></p>
                        </div>
                        </div>
                </div>
            </div>
      

    
      </div>
    );
  }
  
  export default Body;
  