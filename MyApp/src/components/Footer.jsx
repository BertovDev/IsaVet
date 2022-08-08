import React from 'react'
import "../footer.css"
import "../App.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import { Facebook,Instagram } from 'react-bootstrap-icons';

export default function Footer() {
    return (
        <div className="main-footer" id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <h2>IsaVet</h2>
                        <h3 className="list-unstyled">
                            <li>+54 9 11 6143-9997</li>
                            <li className='fs-5'>Buenos Aires, Argentina</li>
                        </h3>
                    </div>
                    {/* Column2 */}
                    <div className="col-3 text-center"  >
                        <h4>Redes Sociales</h4>
                        <ui className="list-unstyled">
                            <li>
                                <a href='https://www.facebook.com/isavetinsumos' target="_blank" style={{marginRight:"1rem"}}>
                                    <Facebook size={30}/>
                                </a>
                                <a href='https://www.instagram.com/isavet.ins/?hl=es' target="_blank">
                                    <Instagram size={30}/>
                                </a>
                            </li>
                        </ui>
                    </div>

                </div>
                <hr />
                <div className="row text-center">
                    <h5 className="col-sm">
                        &copy;{new Date().getFullYear()} IsaVet | Todos los derechos reservados
                    </h5>
                </div>
            </div>
        </div>
    )
}
