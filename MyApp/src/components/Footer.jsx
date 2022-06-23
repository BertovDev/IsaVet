import React from 'react'
import "../footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    return (
        <div className="main-footer" id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <h4>IsaVet</h4>
                        <h1 className="list-unstyled">
                            <li>+54 9 11 6143-9997</li>
                            <li className='fs-5'>Buenos Aires, Argentina</li>
                        </h1>
                    </div>
                    {/* Column2 */}
                    <div className="col-3">
                        <h4>Redes Sociales</h4>
                        <ui className="list-unstyled">
                            <li>Facebook</li>
                            <li>Instragram</li>
                        </ui>
                    </div>

                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} IsaVet | Todos los derechos reservados | Creado por Bautista Berto
                    </p>
                </div>
            </div>
        </div>
    )
}
