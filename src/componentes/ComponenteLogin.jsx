import React, { useEffect, useRef } from 'react';
import "../estilos/componenteLogin.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ComponenteEncabezadoSoluciones } from "./ComponenteSoluciones";

function MiniComponenteLogin ({titulo, texto, nombreBoton}) {
    return (
        <div className='minilogin'>
            <h1> {titulo} </h1>
            <p> {texto} </p>
            <button> {nombreBoton} </button>
        </div>
    )
}

//Componente a renderizar 
function ComponenteLogin() {
    const formRef = useRef(null);
    useEffect(() => {
        const form = formRef.current;
        if(form) {
            form.addEventListener('submit', async function(event) {
                event.preventDefault();
                const nombres = event.target.elements.fname.value;
                const apellidos = event.target.elements.lname.value;
                const email = event.target.elements.email.value;
                const telefono = event.target.elements.phone.value;
                const empresa = event.target.elements.company.value;
                const cargo = event.target.elements.cargo.value;
                const conocimiento = event.target.elements.conocimiento.value;
                const producto = event.target.elements.product.value;
                const mensaje = event.target.elements.message.value;
                const asunto = "Información sobre Red Dinámica";
                const encodedAsunto = encodeURI(asunto);
                const emailBody = `Nombres: ${nombres}\nApellidos: ${apellidos}\nEmail: ${email}\nTeléfono: ${telefono}\nEmpresa: ${empresa}\nCargo: ${cargo}\n¿Cómo conoció Red Dinámica?: ${conocimiento}\nProducto de Interés: ${producto}\nMensaje: ${mensaje}\nAceptación de política: Si`;
                const encodedEmailBody = encodeURI(emailBody);
                const correo = "ventas@reddinamica.com"
                const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correo}&su=${encodedAsunto}&body=${encodedEmailBody}`;
                window.open(gmailUrl, '_blank');
                setTimeout(() => form.reset(), 1000);
            });
        }
    }, []);
    return (
        <>
            <ComponenteEncabezadoSoluciones 
                titulo = "CONTÁCTANOS"
                subtitulo = "RED DINÁMICA"
                texto = "Contacta el equipo de ventas, pide presupuesto o resuelve tus dudas sobre nuestras licencias."            
            />
            <section className='container-fluid seccion-contac'>
                <div className="row">
                    <div className="col-12 col-sm-6 col-xxl-6 info">
                        <form ref={formRef} action="/submit_form" method='POST'>
                            <label for="fname"> (*) Nombres: </label>
                            <input type="text" id="fname" name="firstname" placeholder="Ingresa tus nombres" required="true"/>
                            <label for="lname"> (*) Apellidos: </label>
                            <input type="text" id="lname" name="lastname" placeholder="Ingresa tus apellidos" required="true"/>
                            <label for="email"> (*) Email: </label>
                            <input type="email" id="email" name="email" placeholder="Ingresa tu email" required="true"/>
                            <label for="phone"> (*) Número de teléfono: </label>
                            <input type="number" id="phone" name="phone" placeholder="Ingresa tu número" required="true"/>
                            <label for="company"> (*) Empresa: </label>
                            <input type="text" id="company" name="company" placeholder="Ingresa tu empresa" required="true"/>
                            <label for="cargo"> (*) Cargo: </label>
                            <select id="cargo" name="cargo" required="true">
                                <option value=""> Selecciona </option>
                                <option value="CTO - CIO - Director"> CTO - CIO - Director </option>
                                <option value="Usuario IT"> Usuario IT </option>
                                <option value="Partner"> Partner </option>
                                <option value="Estudiante"> Estudiante </option>
                                <option value="Otro"> Otros </option>
                            </select>
                            <label for="conocimiento" className='mt-3'> (*) ¿Cómo conoció Red Dinámica?: </label>
                            <select id="conocimiento" name="conocimiento" required="true">
                                <option value=""> Selecciona </option>
                                <option value="Buscador (Google - Yahoo, etc)"> Buscador (Google - Yahoo, etc) </option>
                                <option value="Redes Sociales"> Redes Sociales </option>
                                <option value="Publicidad"> Publicidad </option>
                                <option value="Blog - Publicaciones"> Blog - Publicaciones </option>
                                <option value="Plataforma de opiniones"> Plataforma de opiniones </option>
                                <option value="Recomendación de un compañero"> Recomendación de un compañero </option>
                                <option value="Ya utilizo Red Dinámica"> Ya utilizo Red Dinámica </option>
                                <option value="Otro"> Otro </option>
                            </select>
                            <label for="product" className='mt-3'> (*) Producto de Interés: </label>
                            <select id="product" name="product" required="true">
                                <option value=""> Selecciona </option>
                                <option value="Red Dinámica 1"> Red Dinámica 1 </option>
                                <option value="Red Dinámica 2"> Red Dinámica 2 </option>    
                                <option value="Red Dinámica 3"> Red Dinámica 3 </option>
                            </select>
                            <label for="message" className='mt-3'> (*) Mensaje: </label>
                            <input type="text" id="message" name="message" placeholder="Ingresa tu mensaje" required="true"/>
                            {/* <label for="privacy" className='me-3'> (*) <a href={process.env.PUBLIC_URL + "/Política de Privacidad_Flammas.pdf"} target="_blank" rel="noopener noreferrer"> Sí, acepto la política de privacidad </a> </label>
                            <input type="checkbox" id="privacy" name="privacy" required="true" />
                            <p> Al hacer clic en enviar, aceptas que Red Dinámica almacene y procese la información personal suministrada arriba para proporcionarte el contenido solicitado. </p> */}
                            <input type="submit" value="Enviar" />
                        </form>
                    </div>
                    <div className="col-12 col-sm-6 col-xxl-6 botones">
                        <MiniComponenteLogin 
                            titulo = "¿YA ERES CLIENTE?"
                            texto = "Ingresa a la sección de soporte"
                            nombreBoton = "Soporte"
                        />
                        <MiniComponenteLogin 
                            titulo = "¿CONOCES NUESTROS SERVICIOS?"
                            texto = "Hablemos de servicios profesionales"
                            nombreBoton = "Servicios"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}


export default ComponenteLogin;
