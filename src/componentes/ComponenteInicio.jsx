import React from 'react'
import "../estilos/componenteInicio.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import imagen7 from "../images/26.png";

export function MiniComponentesSegundaSeccion ({imagen, titulo, texto}) {
    return (
        <div className='carta'>
            <img src={require(`../images/${imagen}.jpeg`)} alt="Imagen" id="imagenInicio"/>
            <h1> {titulo} </h1>
            <p> {texto} </p>
        </div>
    )
}
function MiniVideos ({imagen, titulo, texto}) {
    return (
        <div className='carta-video'>
            <img src={require(`../images/${imagen}.png`)}  alt="Imagen" />
            <h1> {titulo} </h1>
            <p> {texto} </p>
        </div>
    )
}
function MiniComponentesCuartaSeccion ({imagen, titulo, texto}) {
    return (
        <div>
            <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
            <h1> {titulo} </h1>
            <p> {texto} </p>
        </div>
    )
}
export function MiniComponenteQuintaSeccion ({titulo, subtitulo, texto1, texto2}) {
    return (
        <section className='container-fluid seccion-quinta'>
            <div className="row">
                <div className="col-12 col-sm-8 col-xxl-8">
                    <h1> <i className="bi bi-gear-wide-connected"> </i> {titulo} </h1>
                    <h2> {subtitulo} </h2>
                    <p> {texto1} </p>
                    <p> {texto2} </p>
                </div>
                <div className="col-12 col-sm-4 col-xxl-4">
                    <img src={imagen7} alt="Imagen" />
                </div>
            </div>
        </section>
    )
}

//Componente a renderizar 
function ComponenteInicio() {
    return (
        <>
            <section className='container-fluid seccion-encabezado'>
                <div className="row">
                    <div className="col-12 col-sm-8 col-xxl-8 primera-columna">
                        <div>
                            <h6> TRANSFORMA TU GESTIÓN CON RED DINÁMICA </h6>
                            <h1> LA SOLUCIÓN INTEGRAL PARA </h1>
                            <h2 > MONITORIZACIÓN Y OBSERVABILIDAD </h2>
                            <p> Una Suite de Supervisión Integral que Incluye Auditoría, Monitorización, Gestión de Configuración, Control Remoto, ITSM, Inventario y Seguridad del Sistema. </p>
                        </div>
                        <div className='btn btn-danger'>
                            <a className='botonInfoFlammas' href={process.env.PUBLIC_URL + "/Datasheet_de_red_dinámica.pdf"} download={"REDDINAMICA-Hoja-de-Datos.pdf"} rel="noopener noreferrer"> Hoja de Datos </a> 
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xxl-4 segunda-columna">
                        <div className='container-fluid'>
                            {/* <video autoPlay preload='auto' loop muted>
                                <source src={require("../images/flammas web.mp4")} type='video/mp4' />
                            </video> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid seccion-segunda'>
                <div>
                    <h1> ONE TOOL TO RULE THEM ALL </h1>
                    <h2> SEA LO QUE SEA QUE QUIERAS SUPERVISAR, TENEMOS LO QUE NECESITAS </h2>
                </div>
                <div className='container contenedor-cartas'>
                    <MiniVideos 
                        imagen = "1"
                        titulo = "MONITORIZACIÓN INTEGRAL"
                        texto = "Software de monitorización preparado y optimizado para cubrir todas tus necesidades."
                    />
                    <MiniVideos
                        imagen = "2"
                        titulo = "CONTROL REMOTO"
                        texto = "Un entorno dinámico con acceso remoto a tus servidores o estaciones de trabajo."
                    />
                    <MiniVideos
                        imagen = "3"
                        titulo = "IT SERVICE MANAGER"
                        texto = "Software de monitorización preparado y optimizado para cubrir todas tus necesidades."
                    />
                </div>
            </section>
            <section className='container-fluid seccion-tercera'>
                <div className='contenedor-info'>
                    <div>
                        <span> ARQUITECTURA TI </span>
                        <h1> ¿CÓMO FUNCIONA RED DINÁMICA? </h1>
                    </div>
                    <div>
                        <p> Así como el prisma descompone la luz en sus colores individuales, Red Dinámica divide la complejidad de los datos empresariales. Cada componente, ya sea proveniente de proveedores, servicios en la nube o clientes, se analiza con precisión milimétrica. Esto permite una comprensión detallada de cada aspecto, facilitando la identificación de áreas de mejora y optimización. </p>
                        <div> <a className='botonInfoFlammas' href={process.env.PUBLIC_URL + "/Datasheet_de_red_dinámica.pdf"} download={"REDDINAMICA-Hoja-de-Datos.pdf"} rel="noopener noreferrer"> DESCUBRE TODAS SUS FUNCIONALIDADES </a> </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </section>
            <section className='container-fluid seccion-cuarta'>
                <div className='row'>
                    <div className='col-12 col-sm-4 col-xxl-4 info'>
                        <div>
                            <span> FUNCIONALIDADES </span>
                            <h3> Toma el control de tu empresa con nuestras soluciones de monitorización </h3>
                        </div>
                    </div>
                    <div className='col-12 col-sm-8 col-xxl-8 contenedor-cards'>
                        <MiniComponentesCuartaSeccion 
                            imagen = "9"
                            titulo = "Monitorización de redes"
                            texto = "Descubre todos tus equipos de red a través de mapas que muestran la estructura de tu red al detalle."
                        />
                        <MiniComponentesCuartaSeccion 
                            imagen = "10"
                            titulo = "Monitorización UX"
                            texto = "Descubre todos tus equipos de red a través de mapas que muestran la estructura de tu red al detalle."
                        />
                        <MiniComponentesCuartaSeccion 
                            imagen = "11"
                            titulo = "Monitorización Cloud"
                            texto = "Descubre todos tus equipos de red a través de mapas que muestran la estructura de tu red al detalle."
                        />
                        <MiniComponentesCuartaSeccion 
                            imagen = "12"
                            titulo = "Servidores"
                            texto = "Mainframe, IBM-i, Unix, Windows, Android y Linux: nuestro sistema es compatible con diversas plataformas."
                        />
                        <MiniComponentesCuartaSeccion 
                            imagen = "13"
                            titulo = "Aplicaciones"
                            texto = "Soluciones personalizables para casi cualquier caso y fuente de datos antes de afectar a los usuarios."
                        />
                        <MiniComponentesCuartaSeccion 
                            imagen = "14"
                            titulo = "Gestión de logs"
                            texto = "Recoge y almacena registros de todo tipo (incluyendo eventos de Windows) para búsquedas y alertas eficientes. "
                        />
                    </div>
                </div>
            </section>
            <MiniComponenteQuintaSeccion 
                titulo = "+500 INTEGRACIONES:"
                subtitulo = "EXPANDE EL PODER DE TU MONITORIZACIÓN"
                texto1 = "Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo."
                texto2 = "Apoyamos tecnologías emergentes, establecidas e incluso sistemas heredados."
            />
            <section className='container seccion-sexta'>
                <h1 className='texting'> MÁS ALLÁ DE LOS LÍMITES, MÁS ALLÁ DE LAS EXPECTATIVAS </h1>
            </section>
        </>
    )
}

export default ComponenteInicio;



