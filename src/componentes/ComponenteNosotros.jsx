import "../estilos/componenteNosotros.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MiniComponenteQuintaSeccion } from "./ComponenteInicio";

function ComponenteEncabezadoNosotros ({titulo, subtitulo}) {
    return (
        <section className="container-fluid seccionEncabezadoNosotros">
            <div>
                <h3> {subtitulo} </h3>
                <h1> {titulo} </h1>
            </div>
        </section>
    )
}
function ComponenteMiniTerceraSeccion ({titulo, subtitulo}) {
    return (
        <section className="mini-terceraseccion">
            <div>
                <h1> {titulo} </h1>
                <p> {subtitulo} </p>
            </div>
        </section>
    )
}
function ComponenteSobreFlammas ({imagen, titulo, texto}) {
    return (
        <section className="container seccion-sobre-flammas">
            <div className="row">
                <div className="col-12 col-sm-12 col-xl-6 imagen">
                    <img src={require(`../images/${imagen}.png`)} alt="imagen" />
                </div>
                <div className="col-12 col-sm-12 col-xl-6 texto">
                    <h2> {titulo} </h2>
                    <p> {texto} </p>
                </div>
            </div>
        </section>
    )
}
function ComponenteMision({imagen, texto}){
    return(
        <div className="carta">
            <div className="imagen-contenedor">
                <img src={require(`../images/${imagen}.png`)} alt="imagen" />
            </div>
            <p> {texto} </p>
        </div>
    )
}
function ComponenteVision({imagen, texto, texto2}){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 imagenVision">
                    <img src={require(`../images/${imagen}.png`)} alt="imagen" />
                </div>
                <div className="col-md-8 text-content">
                    <p> {texto} </p>
                    <p> {texto2} </p>
                </div>
            </div>
        </div>
    )
}
function ComponenteImagenCentral({texto1, texto2, texto3, texto4, imagen}){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 pe-5">
                    <div className="card mb-3">
                        <div className="card-body text-white">
                            <p className="t1">{texto1}</p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body text-white">
                            <p className="t2">{texto2}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 middle-col">
                    <img src={require(`../images/${imagen}.png`)} alt="imagen" />
                </div>
                <div className="col-12 col-md-5 ps-5">
                    <div className="card mb-3">
                        <div className="card-body text-white">
                            <p className="t3">{texto3}</p>
                        </div>
                    </div>
                    <div className="card mb-3">
                    <div className="card-body text-white">
                            <p className="t4">{texto4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function ComponenteValores({imagen, texto}){
    return(
        <div className="col-md-4 col-lg-4 d-flex justify-content-center mb-5">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-4 imagen-contenido">
                        <img className="imagen-puesta" src={require(`../images/${imagen}.png`)} alt="imagen" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">{texto}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function ComponenteTSTI({titulo, subtitulo, texto, imagen}){
    return(
        <section className="container-fluid seccion-TSTI">
                <div className="container">
                    <div className="mt-3">
                        <h2 className="text-center">{titulo}</h2>
                    </div>
                <div className="mt-5">
                    <p className="text-center subti">{subtitulo}</p>
                </div>
                    <div className="row">
                        <div className="col-md-5 text-content">
                            <p className="parrafo"> {texto} </p>
                        </div>
                        <div className="col-md-5 imagenTSTI">
                            <img src={require(`../images/${imagen}.png`)} alt="imagen" />
                        </div>
                    </div>
                </div>
        </section>
    )
}

//Componente a renderizar
function ComponenteNosotrosFlammas () {
    return (
        <>
            <ComponenteEncabezadoNosotros 
                subtitulo = "DESDE 2004 DESARROLLANDO SOFTWARE CON PASIÓN Y TALENTO"
                titulo = "SOMOS UN EQUIPO DE EXPERTOS VOLCADO EN AYUDAR A LÍDERES Y PERSONAL TI A CONSEGUIR LA TOTAL OBSERVABILIDAD DE SU ORGANIZACIÓN"
            />
            <section className="container-fluid seccion-HMV">
                <div className="container">
                    <button className="btn boton-oscuro btn-lg btn-full-width"><h2 className="txt-menu">Nuestra Historia</h2></button>
                    <div className="content mt-3">
                        <ComponenteSobreFlammas 
                            imagen = "33"
                            titulo = "SOBRE RED DINÁMICA:"
                            texto = "Comenzamos en el año 2004 primero con el nombre de Artica. Nuestra primera oficina era aproximadamente del mismo tamaño que un garaje californiano. El proyecto original se publicó bajo licencia de código abierto (GPL2), ya que originalmente surgió como un proyecto personal de su CEO y fundador, Sancho Lerena; a partir de entonces ha evolucionado, transformándose en una suite de monitorización para empresas, traspasando fronteras e idiomas y ofreciendo una de las soluciones más completas del mercado."
                        />
                    </div>
                    <button className="btn boton-oscuro btn-lg btn-full-width mt-3"><h2 className="txt-menu">Misión</h2></button>
                    <div className="content mt-3">
                        <section className="container-fluid seccion-mision">
                            <div className="mt-3">
                                <h2 className="text-center">NUESTRA MISIÓN</h2>
                            </div>
                            <div className="container contenedor-cartas">
                                <ComponenteMision
                                    imagen="25"
                                    texto="Nuestra misión es ofrecer un sistema de monitorización integrado y horizontal para medianas y grandes empresas, capaz de proveer información de distintas fuentes a diferentes departamentos, todo a través de una única consola."
                                />
                                <ComponenteMision
                                    imagen="26"
                                    texto="Creemos en el enorme potencial de la monitorización para mejorar cualquier organización que apoye su negocio en tecnología."
                                />
                                <ComponenteMision
                                    imagen="25"
                                    texto="Queremos ser una alerta temprana, queremos ser aquellos que avisan en el momento exacto antes de que suceda algo imprevisto, queremos ser ese compañero de viaje imprescindible para cualquier aventura y caminar juntos hasta la siguiente meta."
                                />
                            </div>
                        </section>
                    </div>
                    <button className="btn boton-oscuro btn-lg btn-full-width mt-3"><h2 className="txt-menu">Visión</h2></button>
                    <div className="content mt-3">
                        <section className="container-fluid seccion-vision">
                            <div className="mt-3">
                                <h2 className="text-center">NUESTRA VISIÓN</h2>
                            </div>
                            <ComponenteVision
                                imagen="32"
                                texto="Creemos en el crecimiento sostenido. No tenemos prisa, hemos venido para quedarnos. Nuestra relación con clientes y empleados siempre es a largo plazo. Sabemos que el mercado actual está maduro y se renueva constantemente, cambiando las reglas del juego."
                                texto2="Aprendemos, nos adaptamos y crecemos conforme lo hacen nuestros clientes. Nuestra visión es ser los proveedores de tecnología de servicios clave y estar presentes en empresas de todos los sectores a nivel mundial."
                            />
                        </section>
                    </div>
                </div>
            </section>
            <section className="container-fluid contenedor-tercera-seccion">
                <h2> RED DINÁMICA EN NÚMEROS EN LA ACTUALIDAD </h2>
                <p> Desde 2004, Red Dinámica no ha parado de crecer, posibilitando la evolución constante de este proyecto que hace que nos adaptemos a la realidad cambiante de hoy. </p>
                <div className="container-fluid contenedor-cartas-terceraS">
                    <ComponenteMiniTerceraSeccion 
                        titulo = "+1M"
                        subtitulo = "Métricas en la mayor de las instalaciones en un cliente real."
                    />
                    <ComponenteMiniTerceraSeccion 
                        titulo = "24/7"
                        subtitulo = "Soporte técnico disponible a nivel mundial."
                    />
                    <ComponenteMiniTerceraSeccion 
                        titulo = "+60"
                        subtitulo = "Presentes en más de 60 países de todo el mundo en los cinco continentes."
                    />
                    <ComponenteMiniTerceraSeccion 
                        titulo = "96%"
                        subtitulo = "De nuestros clientes se quedan con nosotros y renuevan cada año sus suscripciones."
                    />
                    <ComponenteMiniTerceraSeccion 
                        titulo = "+100K"
                        subtitulo = "Usuarios en todo el mundo que utilizan Red Dinámica en todo tipo de organizaciones."
                    />
                    <ComponenteMiniTerceraSeccion 
                        titulo = "1 HORA"
                        subtitulo = "Es el tiempo que necesitas para instalarlo y cubrir tus sistemas."
                    />
                </div>
            </section>
            <section className="container-fluid seccion-Img-Central">
                <div className="mt-3 titulo">
                    <h2 className="text-center mb-5">¿POR QUÉ CONTAR CON NOSOTROS?</h2>
                </div>
                <ComponenteImagenCentral
                    texto1 = "Somos expertos en migraciones y grandes implantaciones. Tenemos nuestro propio equipo de consultoría e ingeniería especializada."
                    texto2 = "Quién mejor que el fabricante para asegurarse del éxito de un proyecto."
                    texto3 = "Si no estamos lo suficientemente cerca, podemos colaborar con un partner que conozca."
                    texto4 = "Precios muy competitivos."
                    imagen = "33"
                />
            </section>
            {/* Seccion Valores */}
            <section className="container-fluid seccion-valores">
                <div className="mt-3 mb-5">
                    <h2 className="text-center">NUESTROS VALORES</h2>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <ComponenteValores
                            imagen = "33"
                            texto = "Innovar como forma de ver la vida."
                        />
                        <ComponenteValores
                            imagen = "33"
                            texto = "Cuidar y escuchar a nuestros clientes, sobre todo si son críticos."
                        />
                        <ComponenteValores
                            imagen = "33"
                            texto = "Ofrecer el mejor soporte técnico a nuestros clientes."
                        />
                        <ComponenteValores
                            imagen = "33"
                            texto = "Seguir aprendiendo siempre, incluso de lo inesperado."
                        />
                        <ComponenteValores
                            imagen = "33"
                            texto = "Mejora continua y autocrítica constante."
                        />
                    </div>
                </div>
            </section>
            <ComponenteTSTI
                titulo="I+D+i"
                subtitulo="Investigación + Desarrollo + Innovación"
                texto="Desde sus orígenes Red Dinámica siempre se ha caracterizado por ir más allá de lo establecido. Siempre hemos encontrado soluciones diferentes a los problemas nuevos y a los problemas de siempre. Nuestra filosofía de empresa de I+D+i nos acompaña desde que ya en 2007 lideramos un consorcio Europeo que combinaba seguridad y monitorización."
                imagen="33"
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

export default ComponenteNosotrosFlammas;




