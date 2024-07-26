import React, { useEffect, useRef} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../estilos/componenteSoporte.css";
import { MiniComponenteQuintaSeccion } from "./ComponenteInicio";

function onChange(value) {
//     console.log("Captcha value:", value);
}
function ComponentetxtIzquierdaSoluciones({titulo,texto,texto1,texto2,imagen}){
    return(
        <section className="container contenedorAZJIzquierda">
            <div className="row">
            <div className="col-12 col-sm-6 col-xl-6 imagen">
                    <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
                </div>
                <div className="col-12 col-sm-6 col-xl-6 info">
                <h2 className="text-start"> {titulo} </h2>
                <p className="text-start"> {texto} </p>
                <p className="text-start"> {texto1} </p>
                <p className="text-start"> {texto2} </p>
                </div>
            </div>
        </section>
    )
}
function ComponenteViñetaAnimada ({ nombreImagen, titulo, texto }) {
    return (
        <>
            <div className="viñeta-animada" id="viñeta-animada">
                <img src={require(`../images/${nombreImagen}.png`)} alt="nombreImagen"/>
                <h1> {titulo} </h1>
                <p> {texto} </p>
            </div>
        </>
    )
}
function ComponenteInfojhoanIzquierdaSoluciones ({titulo, texto, imagen, imagen2}) {
    return (
        <section className="container contenedorCartaInfojhoanIzquierda">
            <div className="row">
                <div className="col-12 col-sm-6 col-xl-6 info">
                    <h2> {titulo} </h2>
                    <p> {texto} </p>
                </div>
                <div className="col-12 col-sm-6 col-xl-6 imagen">
                    <div>
                        <img src={require(`../images/${imagen}.png`)} alt="Imagen" className="imagen" />
                        <div className='correo'>
                            <h3>ENVÍENOS UN MENSAJE</h3>
                            <p>ventas@flammas.com</p>
                        </div>
                    </div>
                    <div>
                        <img src={require(`../images/${imagen2}.png`)} alt="Imagen" className="imagen" />
                        <div className='telefono'>
                            <h3>TELÉFONO</h3>
                            <p>987463783</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) 
}

//Componentes a renderizar
export function ComponenteSoporteProfesional () {  
    const formRef = useRef(null);
    useEffect(() => {
        const form = formRef.current;
        if(form) {
            form.addEventListener('submit', async function(event) {
                event.preventDefault();
                const nombres = event.target.elements.fname.value;
                const apellidos = event.target.elements.lname.value;
                const email = event.target.elements.email.value;
                const empresa = event.target.elements.company.value;
                const país = event.target.elements.country.value;
                const mensaje = event.target.elements.message.value;
                const asunto = "Información sobre Red Dinámica";
                const encodedAsunto = encodeURI(asunto);
                const emailBody = `Nombres: ${nombres}\nApellidos: ${apellidos}\nEmail: ${email}\nEmpresa: ${empresa}\nPaís: ${país}\nMensaje: ${mensaje}`;
                const encodedEmailBody = encodeURI(emailBody);
                const correo = "ventas@flammas.com"
                const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correo}&su=${encodedAsunto}&body=${encodedEmailBody}`;
                window.open(gmailUrl, '_blank');
                setTimeout(() => form.reset(), 1000);
            });
        }
    }, []);
    return (
        <>
            <section className='container-fluid seccion-encabezado-soporte'>
                <div className="row">
                    <div className="col-12 col-sm-6 col-xxl-6 primera-columna">
                        <div>
                            <h1> SERVICIOS PROFESIONALES DE RED DINÁMICA FMS </h1>
                            <h2> NUESTRO EQUIPO DE EXPERTOS ESTÁ PARA AYUDARTE </h2>
                            <p> La experiencia acumulada de nuestros ingenieros te permitirá afrontar cualquier reto de monitorización. Para información adicional sobre nuestros servicios, por favor contacta con nosotros. </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xxl-6 seccion-contac-soporte ">
                        <form ref={formRef} action="/submit_form" method='POST'>
                            <div>
                                <label for="fname"> (*) Nombres: </label>
                                <input type="text" id="fname" name="firstname" placeholder="Ingresa tus nombres" required="true"/>
                            </div>
                            <div>
                                <label for="lname"> (*) Apellidos: </label>
                                <input type="text" id="lname" name="lastname" placeholder="Ingresa tus apellidos" required="true"/>
                            </div>
                            <div>
                                <label for="email"> (*) Email: </label>
                                <input type="email" id="email" name="email" placeholder="Ingresa tu email" required="true"/>
                            </div>
                            <div>
                                <label for="company"> (*) Empresa - Compañia: </label>
                                <input type="text" id="company" name="company" placeholder="Ingresa tu empresa - compañia" required="true"/>
                            </div>
                            <div>
                                <label for="country"> (*) País: </label>
                                <input type="text" id="country" name="country" placeholder="Ingresa tu país" required="true"/>
                            </div>
                            <div>
                                <label for="message" className='mt-3'> (*) Mensaje: </label>
                                <input type="text" id="message" name="message" placeholder="Ingresa tu mensaje" required="true"/>
                            </div>
                            <div>
                                <p> Red Dinámica necesita la información de contacto que nos proporciona para ponernos en contacto contigo acerca de nuestros productos y servicios. Puedes darte de baja de estas comunicaciones en cualquier momento. Para obtener información sobre como darte de baja, asi como nuestras practicas de privacidad y el compromiso de proteger su privacidad, consulta nuestra Política de privacidad. </p>
                                <div className = "recaptcha">
                                    <ReCAPTCHA
                                        ref={ReCAPTCHA}
                                        sitekey="6Lc1HwoqAAAAABkcsPIudTn2uCqLIOIMGxS37ysm"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <input type="submit" value="Enviar" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className='container-fluid seccion-49'>
                <div>
                    <h2> SERVICIO PROFESIONALES PARA CLIENTE FINAL</h2>
                </div>
                <section className="container-fluid seccion-viñetas-mart">
                    <ComponenteViñetaAnimada 
                        nombreImagen = "96"
                        texto = "Extensiones de soporte 24×7 sobre el contrato de soporte estándar."
                    />
                    <ComponenteViñetaAnimada 
                        nombreImagen = "97"
                        texto = "Formación a medida, presencial o remota. Disponemos de varios niveles de certificación."
                    />
                    <ComponenteViñetaAnimada 
                        nombreImagen = "98"
                        texto = "Desarrollo de funcionalidades a medida, públicas (que se incorporan a nuestro roadmap) o privadas."
                    />
                    <ComponenteViñetaAnimada 
                        nombreImagen = "99"
                        texto = "Outsourcing de personal, completo o parcial. Remoto o presencial."
                    />
                    <ComponenteViñetaAnimada 
                        nombreImagen = "100"
                        texto = "Desarrollo de integraciones a medida (plugins) para integrar la monitorización en aplicaciones propias o ampliar la monitorización de nuestros plugins actuales."
                    />
                    <ComponenteViñetaAnimada 
                        nombreImagen = "102"
                        texto = "Proyectos por bolsas de horas para intervenciones puntuales (p.e: migraciones, integraciones, actualizaciones, despliegues de configuración)"
                    />
                    <ComponenteViñetaAnimada 
                        nombreImagen = "103"
                        texto = "Proyectos de despliegue completos llave en mano. Desde la consultoría de análisis hasta la coordinación de equipos propios y de terceros: jefe de proyecto, consultor especialista, desarrolladores e incluso diseñadores gráficos."
                    />
                </section>
            </section>
            <section className='container-fluid seccion-jhoan'>
                <div>
                    <h2> SERVICIO PROFESIONALES PARA MSP’S E INTEGRADORES</h2>
                </div>
                <section className="container-fluid seccion-viñetas-urquia">
                <ComponenteViñetaAnimada 
                    nombreImagen = "88"
                    texto = "Colaboración en la implantación con personal técnico integrado en sus equipos."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "89"
                    texto = "Jefatura externa de proyectos de implantación."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "90"
                    texto = "Formación de equipos completos de operación."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "91"
                    texto = "Ayuda en la puesta en marcha de soluciones SaaS propias."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "92"
                    texto = "Creación personalizada de productos OEM."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "93"
                    texto = "Ingeniería de monitorización a medida."
                />
                </section>
            </section>
            <ComponenteInfojhoanIzquierdaSoluciones 
                titulo = "¡PONTE EN CONTACTO!"
                texto = "Nos encanta saber de ti. Nuestro equipo está siempre aquí para apoyarle"
                imagen = "94"
                imagen2 ="95"
            />
            <MiniComponenteQuintaSeccion 
                titulo = "+500 INTEGRACIONES:"
                subtitulo = "EXPANDE EL PODER DE TU MONITORIZACIÓN"
                texto1 = "Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo."
                texto2 = "Apoyamos tecnologías emergentes, establecidas e incluso sistemas heredados."
            />
        </>
    )
}
export function ComponenteSoporteTecnico () {
    const formRef = useRef(null);
    useEffect(() => {
        const form = formRef.current;
        if(form) {
            form.addEventListener('submit', async function(event) {
                event.preventDefault();
                const nombres = event.target.elements.fname.value;
                const apellidos = event.target.elements.lname.value;
                const email = event.target.elements.email.value;
                const empresa = event.target.elements.company.value;
                const país = event.target.elements.country.value;
                const mensaje = event.target.elements.message.value;
                const asunto = "Información sobre Red Dinámica";
                const encodedAsunto = encodeURI(asunto);
                const emailBody = `Nombres: ${nombres}\nApellidos: ${apellidos}\nEmail: ${email}\nEmpresa: ${empresa}\nPaís: ${país}\nMensaje: ${mensaje}`;
                const encodedEmailBody = encodeURI(emailBody);
                const correo = "ventas@flammas.com"
                const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correo}&su=${encodedAsunto}&body=${encodedEmailBody}`;
                window.open(gmailUrl, '_blank');
                setTimeout(() => form.reset(), 1000);
            });
        }
    }, []);
    return (
        <>
        <section className='container-fluid seccion-encabezado-soporte'>
                <div className="row">
                    <div className="col-12 col-sm-6 col-xxl-6 primera-columna">
                        <div>
                            <h1> SOPORTE TÉCNICO DE RED DINÁMICA </h1>
                            <h2> SOMOS EXPERTOS EN RED DINÁMICA </h2>
                            <p> Garantizamos la continuidad del servicio y ofrecemos soporte a los equipos técnicos que gestionan Red Dinámica. </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xxl-6 seccion-contac-soporte ">
                    <form ref={formRef} action="/submit_form" method='POST'>
                            <div>
                                <label for="fname"> (*) Nombres: </label>
                                <input type="text" id="fname" name="firstname" placeholder="Ingresa tus nombres" required="true"/>
                            </div>
                            <div>
                                <label for="lname"> (*) Apellidos: </label>
                                <input type="text" id="lname" name="lastname" placeholder="Ingresa tus apellidos" required="true"/>
                            </div>
                            <div>
                                <label for="email"> (*) Email: </label>
                                <input type="email" id="email" name="email" placeholder="Ingresa tu email" required="true"/>
                            </div>
                            <div>
                                <label for="company"> (*) Empresa - Compañia: </label>
                                <input type="text" id="company" name="company" placeholder="Ingresa tu empresa - compañia" required="true"/>
                            </div>
                            <div>
                                <label for="country"> (*) País: </label>
                                <input type="text" id="country" name="country" placeholder="Ingresa tu país" required="true"/>
                            </div>
                            <div>
                                <label for="message" className='mt-3'> (*) Mensaje: </label>
                                <input type="text" id="message" name="message" placeholder="Ingresa tu mensaje" required="true"/>
                            </div>
                            <div>
                                <p> Red Dinámica necesita la información de contacto que nos proporciona para ponernos en contacto contigo acerca de nuestros productos y servicios. Puedes darte de baja de estas comunicaciones en cualquier momento. Para obtener información sobre como darte de baja, asi como nuestras practicas de privacidad y el compromiso de proteger su privacidad, consulta nuestra Política de privacidad. </p>
                                <div className = "recaptcha" id="recap">
                                    <ReCAPTCHA
                                        ref={ReCAPTCHA}
                                        sitekey="6Lc1HwoqAAAAABkcsPIudTn2uCqLIOIMGxS37ysm"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <input type="submit" value="Enviar" />
                            </div>
                        </form>
                    </div>
                </div>
        </section>
        <ComponentetxtIzquierdaSoluciones
        texto="El objetivo principal del servicio de soporte técnico es brindar soporte para ayudar a resolver cualquier problema relacionado con la instalación, funcionamiento y uso de Red Dinámica."
        texto1="El canal de soporte principal disponible para todos los clientes de soporte es nuestro Sistema de soporte, que garantiza la mensajería en línea para una comunicación rápida y fácil entre los clientes y nuestros especialistas técnicos. Damos soporte en inglés y español:"
        texto2="Los clientes con niveles de soporte avanzados pueden acceder a los servicios de soporte por teléfono, llamando a números dedicados. El soporte 24/7 también está disponible para niveles de soporte avanzado."
        imagen="83"
        />
            <section className='container-fluid seccion-jhoan'>
                <div>
                    <h2> NOS GANAMOS LA CONFIANZA DE NUESTROS CLIENTES EN TODO EL MUNDO </h2>
                </div>
                <section className="container-fluid seccion-viñetas-jhoan">
                <ComponenteViñetaAnimada 
                    nombreImagen = "84"
                    titulo = "Rápido y eficiente"
                    texto = "Soporte ofrecido por el equipo de ingeniería de Red Dinámica."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "85"
                    titulo = "Soporte integral"
                    texto = "Ofrecemos soporte opcional 24/7 para entornos críticos."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "86"
                    titulo = "SLA controlado"
                    texto = "Nuestros procedimientos de soporte incluyen una estricto monitorización de SLA."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "87"
                    titulo = "Servicio confiable"
                    texto = "Nuestro soporte es el activo mejor valorado de nuestra plataforma."
                />
                </section>
            </section>
            <MiniComponenteQuintaSeccion 
                titulo = "+500 INTEGRACIONES:"
                subtitulo = "EXPANDE EL PODER DE TU MONITORIZACIÓN"
                texto1 = "Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo."
                texto2 = "Apoyamos tecnologías emergentes, establecidas e incluso sistemas heredados."
            />
        </>
    )
}
