import React from "react";
import "../estilos/componenteSoluciones.css";
import "../estilos/componenteInicio.css"
import { MiniComponenteQuintaSeccion } from "./ComponenteInicio";
import { MiniComponenteProductos } from "./ComponenteProductos"

export function ComponenteEncabezadoSoluciones ({titulo, subtitulo, texto}) {
    return (
        <section className="container-fluid seccionEncabezadoSoluciones">
            <h3> {subtitulo} </h3>
            <h1> {titulo} </h1>
            <p> <b> {texto} </b> </p>
        </section>
    )
}
function ComponenteInfoIzquierdaSoluciones ({titulo, texto, imagen, id}) {
    return (
        <section className="container contenedorCartaInfoIzquierda" id={id}>
            <div className="row">
                <div className="col-12 col-sm-6 col-xl-6 info">
                    <h2> {titulo} </h2>
                    <p> {texto} </p>
                </div>
                <div className="col-12 col-sm-6 col-xl-6 imagen">
                    <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
                </div>
            </div>
        </section>
    ) 
}
function ComponenteInfoDerechoSoluciones ({titulo, texto, imagen}) {
    return (
        <section className="container contenedorCartaInfoIzquierda">
            <div className="row">
                <div className="col-12 col-sm-6 col-xl-6 imagen">
                    <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
                </div>
                <div className="col-12 col-sm-6 col-xl-6 info">
                    <h2> {titulo} </h2>
                    <p> {texto} </p>
                </div>
            </div>
        </section>
    ) 
}
function ComponentetxtDerechoSoluciones({titulo, texto, texto1, imagen}){
    return(
        <section className="container contenedorAZJIzquierda">
            <div className="row">
                <div className="col-12 col-sm-6 col-xl-6 info">
                    <h2 className="text-end"> {titulo} </h2>
                    <p className="text-end"> {texto} </p>
                    <p className="text-end"> {texto1} </p>
                </div>
                <div className="col-12 col-sm-6 col-xl-6 imagen">
                <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
                </div>
            </div>
        </section>
    )
}
function ComponentetxtIzquierdaSoluciones({titulo,texto,imagen}){
    return(
        <section className="container contenedorAZJIzquierda">
            <div className="row">
            <div className="col-12 col-sm-6 col-xl-6 imagen">
                    <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
                </div>
                <div className="col-12 col-sm-6 col-xl-6 info">
                    <h2 className="text-start"> {titulo} </h2>
                    <p className="text-start"> {texto} </p>
                </div>
            </div>
        </section>
    )
}
function ComponenteInfoCentral({titulo, texto1, texto2}){
    return(
        <section className="container contenedorInfoCentral">
            <div className="row">
                <div className="col-md-3 d-flex justify-content-center align-items-center derecha">
                    
                </div>
                <div className="col-md-6 info">
                    <h2 className="text-center">{titulo}</h2>
                    <p className="text-justify">{texto1}</p>
                    <p className="text-justify">{texto2}</p>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center izquierda">
                    
                </div>
            </div>
        </section>
    )
}
function ComponenteFuncionalidadAvanzada ({imagen, titulo, texto}) {
    return (
        <div className="funcionalidades">
            <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
            <h2> {titulo} </h2>
            <p> {texto} </p>
        </div>
    )
}
function ComponenteMinisLogs ({nombreIcono, texto}) {
    return (
        <div className="carta-log carta-infra">
            <i className={`bi bi-${nombreIcono}`}> </i>
            <p>  {texto} </p>
        </div>
    )
}
function ComponenteMiniInfra ({nombreIcono, texto}) {
    return (
        <div className="carta-infra">
            <i className={`bi bi-${nombreIcono}`}> </i>
            <p>  {texto} </p>
        </div>
    )
}
function ComponenteCartaAnimable ({nombreIcono, titulo, subtitulo, texto}) {
    return (
        <div className="maincontainer">
            <div className="card">
                <div className="thefront">
                    <i className={`bi ${nombreIcono}`}></i>
                    <h6> {titulo} </h6>
                </div>
                <div className="theback">
                    <h6> {subtitulo} </h6>
                    <p> {texto} </p>
                </div>
            </div>
        </div>
    )
}
function ComponenteViñetaAnimada ({ nombreImagen, titulo, texto }) {
    return (
        <>
            <div className="viñeta-animada">
                <img src={require(`../images/${nombreImagen}.png`)} alt="Imagen"/>
                <h2> {titulo} </h2>
                <p> {texto} </p>
            </div>
        </>
    )
}
function MiniComponentesSegundaSeccion ({imagen, titulo, texto}) {
    return (
        <div className='carta'>
            <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
            <h1> {titulo} </h1>
            <p> {texto} </p>
        </div>
    )
}

// Componentes a renderizar
export function ComponenteSolucionesMonitorizacion () {
    return (
        <>
            <ComponenteEncabezadoSoluciones 
                subtitulo = "Soluciones de Red Dinámica"
                titulo = "Monitorización de red"
                texto = "Red Dinámica te permite descubrir todos tus equipos de red y representar su topología en mapas que conectan interfaces y visualizan la estructura de su red al detalle. Ve más allá, unificando la gestión de tus dispositivos con una completa observabilidad en tu red."
            />
            <section className="container-fluid seccionEscrituraPrincipalSoluciones">
                <h2> ¿Qué aporta la monitorización de redes a tu compañía? </h2>
                <p> En la actualidad, las redes son esenciales para el negocio de muchas empresas y organizaciones. Las interrupciones o pérdidas de rendimiento de estas pueden conllevar graves consecuencias, como paradas en el servicio o caídas en la productividad. Tu sistema debe ser capaz de supervisar en todo momento el estado de tus redes y los diferentes componentes que forman parte de esta. </p>
                <p> Por ello, el monitoreo de redes será fundamental para prevenir incidencias o ayudar a resolverlas lo antes posible, cuando estas sean inevitables. </p>
            </section>
            <ComponenteInfoIzquierdaSoluciones 
                titulo = "Desde lo más básico a lo inimaginable"
                texto = "Ancho de banda, pérdida de paquetes, latencia, disponibilidad, número de conexiones. Da igual el origen: routers, AP, switches, firewalls, servidores, estaciones de trabajo, IoT. Si tiene IP, Red Dinámica puede coger el dato. No estamos limitados sólo a SNMP o a recogida de datos con agentes."
                imagen = "33"
                id = "none"
            />
            <ComponenteInfoDerechoSoluciones 
                titulo = "Gestión de IPs"
                texto = "Nuestro sistema IPAM permite gestionar redes, superedes y hacer subnetting. Podrás gestionar ubicaciones físicas, realizar reservas de IP y disponer de un mapa de IP así como informes de uso de IP, y alertas cuando te quedes sin IP disponibles. Se puede integrar con un servidor DHCP de Microsoft."
                imagen = "42"
                id = "none"
            />
            <ComponenteInfoIzquierdaSoluciones 
                titulo = "Análisis de red en tiempo real"
                texto = "Netflow sirve para obtener estadísticas en tiempo real de tus equipos de red (routers, switches, firewalls) y ofrecer informes de uso, cuellos de botella o ayudar a hacer diagnósticos de problemas."
                imagen = "43"
            />
            <ComponenteInfoDerechoSoluciones 
                titulo = "Alta escalabilidad"
                texto = "Escalabilidad prácticamente ilimitada gracias a Command Center, y nuestros Servidores Satélite que permiten escalar horizontalmente y generar decenas de miles de consultas de red por segundo de forma distribuida. Contamos con clientes con más 100.000 dispositivos de red en una única instancia."
                imagen = "44"
                id = "none"
            />
            <ComponenteInfoIzquierdaSoluciones
                titulo = "Informes y cuadros de mando"
                texto = "Red Dinámica recoge todo tipo de datos y te ofrece un editor de informes para que puedas generarlos de manera personalizada: top N, gráficas detalladas a cualquier escala de tiempo, informes SLA, informes de disponibilidad, cronogramas y decenas más."
                imagen = "37"
            />
            <ComponenteInfoDerechoSoluciones 
                titulo = "Gestión de configuraciones"
                texto = "Red Dinámica puede recoger la configuraciones de tus equipos, detectar cuando cambian (y donde) y recuperar backup de dichas configuraciones. También podrá desplegar cambios masivamente en decenas de equipos (como por ejemplo añadir una VLAN)."
                imagen = "32"
            />
            <header className="funcionalidades"> Funcionalidades Avanzadas </header>
            <section className="container-fluid seccionFuncionAvanzadas">
                <ComponenteFuncionalidadAvanzada 
                    imagen = "25"
                    titulo = "Entornos distribuidos"
                    texto = "Descubre y monitoriza equipos remotos en redes de clientes de manera autónoma y desplegando una sencilla sonda instalable en Windows, Raspberrys o pequeñas máquinas virtuales. Nuestros servidores satélites funcionan de manera autónoma y silenciosa y son capaces de gestionar cientos de dispositivos."
                />
                <ComponenteFuncionalidadAvanzada 
                    imagen = "26"
                    titulo = "Licenciamiento sin sorpresas"
                    texto = "Conoce exactamente lo que te va a costar, sin sorpresas, sin ampliaciones, sin módulos adicionales. Planifica el crecimiento de su entorno con exactitud desde el día uno. En Red Dinámica todo incluido, significa eso, todo incluido en el coste inicial de la licencia."
                />
                <ComponenteFuncionalidadAvanzada 
                    imagen = "24"
                    titulo = "Monitorización de seguridad"
                    texto = "Controla en todo momento de qué versiones, modelos e IP dispones. No sólo de equipos de red como switches, routers, también firewalls. Establece alertas si se usan modelos con vulnerabilidades. Envía los logs de todos tus sistemas a nuestra consola de logs y crea alertas de correlación."
                />
                <ComponenteFuncionalidadAvanzada 
                    imagen = "38"
                    titulo = "Inteligencia artificial"
                    texto = "Deja que se configuren solo los umbrales de fallo de manera automática, en base al uso cotidiano. Crea alertas en base al uso proyectado de tus recursos. Genera informes útiles para planificar el uso de tu red."
                />
            </section>
            <ComponenteEncabezadoSoluciones 
                subtitulo = "Soluciones de Red Dinámica"
                titulo = "Gestión de Logs"
                texto = "Imagina poder buscar información en los logs a lo largo de todos tus sistemas monitorizados con un solo click de ratón. Si ya tienes actualmente instalado un agente de Red Dinámica en esas máquinas, ¿por qué no recoger también logs?"
            />
            <ComponenteInfoIzquierdaSoluciones 
                titulo = "Auditoría y seguridad (HIPAA, RGPD, ISO 27001)"
                texto = "Lo último que quieres es fallar en una auditoría o tener que revelar una posible violación de datos porque no has recogido los datos necesarios para una investigación o no dispones de los datos requeridos para averiguar lo que ha pasado. Si ya monitorizas esos sistemas, guarda sus logs."
                imagen = "23"
                id = "log"
            />
            <section className="container-fluid contenedor-cartitas">
                <MiniComponenteProductos 
                    titulo = "Almacenamiento económico para sus logs"
                    texto = "El tipo de almacenamiento para guardar logs en Red Dinámica es muy asequible con respecto a otras herramientas similares. Con Red Dinámica ahorrarás dinero en almacenamiento a largo plazo. La licencia Enterprise ya cubre esta funcionalidad, sólo tendrás que asignar más almacenamiento en tus servidores."
                />
                <MiniComponenteProductos 
                    titulo = "Búsqueda de la información simple y sencilla"
                    texto = "No necesitarás ser un científico de datos ni normalizar la información en un complicado juego de plantillas. Busca cadenas o patrones mediante expresiones regulares, y guarda tus búsquedas. Tan simple como suena."
                />
            </section>
            <section className="container-fluid contenedor-cartas-logs">
                <ComponenteMinisLogs 
                    nombreIcono = "diagram-3"
                    texto = "Olvídate de formatos, parseos o definiciones estrictas."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "terminal"
                    texto = "Compatible con Linux, Windows y Unix por igual."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "chat"
                    texto = "Compatible con cualquier log en formato texto plano de cualquier aplicación."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "search"
                    texto = "Investiga entre tu historial de logs con búsquedas intuitivas y sencillas."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "filetype-csv"
                    texto = "Sencillo de extraer. No requiere instalar software intermedio ni redirigir logs a través de la red."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "lock"
                    texto = "Investiga los registros con filtros de búsqueda intuitivos y un veloz rendimiento, visualízalos en bonitos paneles de Kibana."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "database"
                    texto = "Tus datos seguirán siendo tuyos. Almacenamiento local 100% on-premise."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "pie-chart"
                    texto = "Escala según tus necesidades. Puedes ampliar la capacidad de almacenamiento según lo necesites."
                />
            </section>
            <section className="container-fluid contenedor-animables">
                <header> La solución de supervisión total para la observabilidad total </header>
                <div className="container contenedor-cartas-animables">
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-person-lines-fill"
                        titulo = "Experiencia de usuario"
                        subtitulo = "Experencia de usuario"
                        texto = "Comprueba si tu aplicación como se espera. Detecta el fallo antes que lo hagan tus clientes."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-graph-up"
                        titulo = "Monitorización de aplicaciones (APM)"
                        subtitulo = "Monitorización de aplicaciones (APM)"
                        texto = "Supervisa tus aplicaciones empresariales a todo nivel y obten todos los datos APM que necesites."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-display"
                        titulo = "Monitorización de entornos virtuales"
                        subtitulo = "Monitorización de entornos virtuales"
                        texto = "Optimiza tu infraestructura ya sea en instalaciones hibridas, virtuales o cloud."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-exclamation-diamond-fill"
                        titulo = "Gestión de incidencias"
                        subtitulo = "Gestión de incidencias"
                        texto = "Integra el sistema de ticketing de tu infraestructura en Red Dinámica."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-joystick"
                        titulo = "Control Remoto"
                        subtitulo = "Control Remoto"
                        texto = "Todos tus dispositivos controlados por una herramienta accesible con solo un navegador web."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-headset"
                        titulo = "Gestión de servicio y asistencia"
                        subtitulo = "Gestión de servicio y asistencia"
                        texto = "Mida y supervise su pila de TI para detectar resolver problemas en tu infraestructura de TI."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-cpu-fill"
                        titulo = "Monitorización mainframe"
                        subtitulo = "Monitorización mainframe"
                        texto = "Dispón de una única plataforma para recoger y mostrar la información venga de donde venga."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-ethernet"
                        titulo = "Monitorización de redes"
                        subtitulo = "Monitorización de redes"
                        texto = "Observa toda tu información en conjunto, incluso cuando tengas miles de dispositivos que supervisar."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-card-checklist"
                        titulo = "Inventario TI"
                        subtitulo = "Inventario TI"
                        texto = "Recoge y supervisa el estado de todos los datos de tu infraestructura informática en una sola herramienta."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-file-earmark-text"
                        titulo = "Recolección de logs"
                        subtitulo = "Recolección de logs"
                        texto = "Recoge, visualiza y centraliza todos tus registros en un único punto."
                    />
                </div>
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
export function ComponenteSolucionesInfraestructura () {
    return (
        <>
            <ComponenteEncabezadoSoluciones 
                titulo = "MONITORIZACIÓN DE INFRAESTRUCTURA"
                subtitulo = "SOLUCIONES DE RED DINÁMICA"
                texto = "Red Dinámica no es un puzzle de distintas soluciones integradas de forma superficial, cubrimos desde el hardware hasta las aplicaciones de usuario."
            />
            <section className="container-fluid contenedor-cartas-infra">
                <ComponenteMinisLogs 
                    nombreIcono = "alarm-fill"
                    texto = "Gracias a que todos los datos empleados se integran en tiempo real y su potente capacidad de histórico para ver gráficas de varios meses."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "arrow-down-circle"
                    texto = "Dashboard en tiempo real, informes personalizables al milímetro y un sistema de notificaciones flexible que proporcionan una visión de 360º."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "bag-check"
                    texto = "Sistema operativo base, aplicaciones, bases de datos, logs, almacenamiento, redes, experiencia de usuario. Todo en una única plataforma."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "calendar2-week-fill"
                    texto = "integradas en nuestra librería de tecnología."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "camera-video-fill"
                    texto = "100% multitenant, podrá dar servicio a diferentes empresas con la misma instancia."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "cloud-arrow-down-fill"
                    texto = "Mediante plantillas, despliegue de plugins y una configuración remota integrada en la interfaz gráfica."
                />
            </section>
            <section className="container-fluid contenedor-tercero-infra">
                <header> CARACTERÍSTICAS ESPECIALES </header>
                <div className="row">
                    <div className="col-12 col-sm-4 col-xl-4">
                        <h2> MONITORIZACIÓN SIN AGENTES </h2> 
                        <p> Aunque te recomendamos instalar un agente local, también podrás descubrir tus servidores y obtener información remotamente de ellos, sin necesidad de instalar agentes. </p>
                    </div>
                    <div className="col-12 col-sm-4 col-xl-4">
                        <h2> MONITORIZACIÓN A BAJO NIVEL </h2>
                        <p> Los agentes de Red Dinámica, como el resto de nuestra tecnología, son un desarrollo propio, no derivado de terceros. Pueden obtener la información directamente de la fuente, usando llamadas nativas al sistema operativo, sin conectores de terceros o artefactos pesados. Su huella en el sistema es mínima. </p>
                    </div>
                    <div className="col-12 col-sm-4 col-xl-4">
                        <h2> PERSONALIZACIÓN TOTAL </h2>
                        <p> Red Dinámica te permitirá personalizar tu monitorización de servidores y cualquier proceso, servicio o aplicación, reutilizando scripts propios o facilitando el despliegue de nuevos. </p>
                    </div>
                </div>
            </section>
            <section className="container-fluid contenedor-cuarta-infra">
                <header> CARACTERÍSTICAS TÉCNICAS </header>
                <div className="row">
                    <div className="col-12 col-sm-6 col-xl-6 primera-col">
                        <ComponenteMiniInfra 
                            nombreIcono = "building"
                            texto = "Alta escalabilidad, para gestionar miles de servidores por medio de una única consola, nuestro Command Center™"
                        />
                        <ComponenteMiniInfra
                            nombreIcono = "box"
                            texto = "Agentes paquetizados para instalación desatendida"
                        />
                        <ComponenteMiniInfra 
                            nombreIcono = "arrow-repeat"
                            texto = "Sistema de provisión automática y centralizada basada en reglas"
                        />
                        <ComponenteMiniInfra
                            nombreIcono = "graph-up"
                            texto = "API/CLI para automatización en provisión y configuración posterior"
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-xl-6 segunda-col">
                    <ComponenteMiniInfra 
                            nombreIcono = "cloud"
                            texto = "Monitorización integrada de Kubernetes, Vmware, AWS, Azure y Google Cloud"
                        />
                        <ComponenteMiniInfra
                            nombreIcono = "pencil"
                            texto = "Personalización OEM en instaladores e interfaz"
                        />
                        <ComponenteMiniInfra 
                            nombreIcono = "diagram-2"
                            texto = "Proxys directos e inversos en el caso de que su topología sea compleja"
                        />
                        <ComponenteMiniInfra
                            nombreIcono = "cloud-arrow-up"
                            texto = "HA en toda la plataforma"
                        />
                    </div>
                </div>
            </section>
            <ComponenteEncabezadoSoluciones 
                titulo = "MONITORIZACIÓN DE EXPERIENCIA DE USUARIO"
                subtitulo = "SOLUCIONES DE RED DINÁMICA"
                texto = "Detecta y analiza problemas que afectan al usuario en cualquier punto de tu stack tecnológico."
            />
            <section className="container-fluid contenedor-cartas-infra">
                <ComponenteMinisLogs 
                    nombreIcono = "geo-alt"
                    texto = "Ubicaciones múltiples, podrá lanzar diferentes pruebas desde diferentes lugares geográficos."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "clipboard-check"
                    texto = "Podrás crear la prueba de experiencia de usuario a través de un grabador, sin tener que codificar nada."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "eye"
                    texto = "Visibilidad end-to-end, reduciendo MTTR y asegurando una SLA del 100%."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "bar-chart-line"
                    texto = "Capturas de pantalla, al encontrar un fallo en la transacción para saber exactamente cómo lo ve el usuario, independientemente del código."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "pencil"
                    texto = "Mejora el rendimiento, identificando las métricas clave de rendimiento para la carga de páginas, interacción de usuario y descarga de elementos. Detecta cuellos de botella y problemas de latencia."
                />
                <ComponenteMinisLogs 
                    nombreIcono = "arrow-repeat"
                    texto = "Compatible con cualquier tecnología, al realizar toda la monitorización utilizando navegadores estandarizados. Como un usuario más."
                />
            </section >
            <section className="container-fluid contenedor-segunda-usu">
                <header> ¿POR QUÉ ELEGIR RED DINÁMICA TU MONITORIZACIÓN DE EXPERIENCIA DE USUARIO? </header>
                <div className="container sub-contenedor-usu">
                    <div>
                        <i className="bi bi-broadcast"></i>
                        <h2> ¿Utilizas Selenium u otros programas de monitorización UX? </h2>
                        <p> Red Dinámica es flexible y se adapta a cualquier tecnología del mercado, pudiendo integrar toda la monitorización en un solo punto, podemos reutilizar tus scrips actuales e integrarlos. </p>
                    </div>
                    <div>
                        <i className="bi bi-robot"></i>
                        <h2> Automatización todo-en-uno </h2>
                        <p> Si dispones de un sistema de automatización de tareas, Red Dinámica UX te permitirá ejecutar los scripts que hayas desarrollado e implementado, para monitorizar su ejecución. </p>
                    </div>
                    <div>
                        <i className="bi bi-person-circle"></i>
                        <h2> End User Experience controlado </h2>
                        <p> Podrá monitorizar el rendimiento de tráfico de datos, así como los tiempos de respuesta de su aplicación, además de solventar cualquier problema antes que tus clientes. </p>
                    </div>
                    <div>
                        <i className="bi bi-lightbulb"></i>
                        <h2> Licencia sencilla de entender </h2>
                        <p> La monitorización de experiencia de usuario está incluida de serie en la licencia estándar Enterprise. No hagas cábalas, y disfruta sin límites de la monitorización extremo a extremo que ofrecemos. </p>
                    </div>
                </div>
            </section>
            <section className="container-fluid contenedor-animables">
                <header> La solución de supervisión total para la observabilidad total </header>
                <div className="container contenedor-cartas-animables">
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-person-lines-fill"
                        titulo = "Experiencia de usuario"
                        subtitulo = "Experencia de usuario"
                        texto = "Comprueba si tu aplicación como se espera. Detecta el fallo antes que lo hagan tus clientes."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-graph-up"
                        titulo = "Monitorización de aplicaciones (APM)"
                        subtitulo = "Monitorización de aplicaciones (APM)"
                        texto = "Supervisa tus aplicaciones empresariales a todo nivel y obten todos los datos APM que necesites."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-display"
                        titulo = "Monitorización de entornos virtuales"
                        subtitulo = "Monitorización de entornos virtuales"
                        texto = "Optimiza tu infraestructura ya sea en instalaciones hibridas, virtuales o cloud."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-exclamation-diamond-fill"
                        titulo = "Gestión de incidencias"
                        subtitulo = "Gestión de incidencias"
                        texto = "Integra el sistema de ticketing de tu infraestructura en Red Dinámica."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-joystick"
                        titulo = "Control Remoto"
                        subtitulo = "Control Remoto"
                        texto = "Todos tus dispositivos controlados por una herramienta accesible con solo un navegador web."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-headset"
                        titulo = "Gestión de servicio y asistencia"
                        subtitulo = "Gestión de servicio y asistencia"
                        texto = "Mida y supervise su pila de TI para detectar resolver problemas en tu infraestructura de TI."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-cpu-fill"
                        titulo = "Monitorización mainframe"
                        subtitulo = "Monitorización mainframe"
                        texto = "Dispón de una única plataforma para recoger y mostrar la información venga de donde venga."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-ethernet"
                        titulo = "Monitorización de redes"
                        subtitulo = "Monitorización de redes"
                        texto = "Observa toda tu información en conjunto, incluso cuando tengas miles de dispositivos que supervisar."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-card-checklist"
                        titulo = "Inventario TI"
                        subtitulo = "Inventario TI"
                        texto = "Recoge y supervisa el estado de todos los datos de tu infraestructura informática en una sola herramienta."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-file-earmark-text"
                        titulo = "Recolección de logs"
                        subtitulo = "Recolección de logs"
                        texto = "Recoge, visualiza y centraliza todos tus registros en un único punto."
                    />
                </div>
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
export function ComponenteSolucionesCloud () {
    return (
        <>
            <ComponenteEncabezadoSoluciones 
                titulo = "MONITORIZACIÓN CLOUD Y VIRTUAL"
                subtitulo = "SOLUCIONES DE RED DINÁMICA"
                texto = "Es la solución todo-en-uno que te ayudará a supervisar tu infraestructura, sin importar si es on-premise, virtualizada, híbrida o en cloud."
            />
            <ComponentetxtDerechoSoluciones
                titulo="Monitorización centralizada de entornos híbridos"
                texto="Supervisa todos los detalles de tus entornos allí donde estén, sin importar el proveedor de servicios, tecnología de virtualización o API de abstracción."
                texto1="Unifica todo el control de tus activos en un único lugar: la consola de Red Dinámica. Podrás gestionar desde cien elementos a varios cientos de miles desde múltiples orígenes, escalando de forma progresiva y dinámica."
                imagen="24"
            />
            <ComponentetxtIzquierdaSoluciones
                titulo="Entornos Cloud"
                texto="Haciendo uso de APIs remotas y de manera centralizada somos capaces de unificar los datos de diferentes proveedores ofreciendo un paraguas de unificación de información (incluyendo costes) que permiten comparar y reportar datos de cualquier tipo de proveedor."
                imagen="25"
            />
            <ComponentetxtDerechoSoluciones
                titulo="Toma el control de los datos de tus sistemas"
                texto="Hace años, era mucho más sencillo obtener información de tu infraestructura. Hoy en día, es mucho más complicado ante la variedad de arquitecturas on-premise de contenedores dinámicos, mezclada con entornos cloud y SaaS externos de todo tipo."
                texto1="Controla el crecimiento y uso de todos tus sistemas. Gracias a nuestros agentes, sondas remotas o uso de APIs de acceso a la infraestructura cloud, podrá sacar el máximo partido a sus recursos, ahorrar y estimar futuras inversiones."
                imagen="26"
            />
            <section className="container-fluid bg-white contenedorFondoBlanco">
                <div className="row">
                    <div className="col-12 col-sm-6 col-xl-6 info text-dark">
                        <h2 className="text-start"> <span className="text-dark">INTEGRACIÓN</span> LAAS </h2>
                        <p> En el caso de que no tengas acceso a los servidores de infraestructura, podrás instalar agentes en tus máquinas o monitorizarlas desde fuera.</p>
                        <p>Además, podrás dar de alta dinámicamente sistemas de manera sencilla, utilizando los mecanismos de provisión de tu proveedor de IaaS y las APIs de Red Dinámica.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-6 imagen">
                        <img src={require(`../images/49.png`)} alt="Imagen" />
                    </div>
                </div>
            </section>
            <ComponenteInfoCentral
                titulo="INFRAESTRUCTURA DE VIRTUALIZACIÓN"
                texto1="Andora FMS monitoriza automáticamente servidores ESX, DataStores, máquinas virtuales y VirtualCenter de su arquitectura VMware. Además, la monitorización de entornos virtuales no afecta al rendimiento del sistema VMware. Nuestro software utiliza la API oficial para recopilar toda la información."
                texto2="También puede ser utilizada con virtualización Kubernetes, Docker Swarm, OpenStack, Nutanix, XEN, RHEV, HyperV siguiendo los mismos principios (con acceso a las APIs externas)."
            />
            <ComponenteEncabezadoSoluciones 
                titulo = "Monitorización Continua de la Seguridad del Sistema"
                subtitulo = "SOLUCIONES DE RED DINÁMICA"
                texto = "En Red Dinámica, entendemos la importancia de mantener la integridad y la seguridad de tus sistemas en un mundo digital en constante evolución. Nuestra plataforma está diseñada para proporcionarte las herramientas necesarias para auditar y asegurar tus sistemas con confianza."
            />
            <section className="container-fluid seccion-segunda">
                <div className='container contenedor-cartas'> 
                    <MiniComponentesSegundaSeccion 
                    imagen = "1"
                    titulo = "MONITORIZACIÓN DEL HARDENING"
                    texto = "Hemos fusionado las recomendaciones del CIS con nuestra tecnología de monitorización para ofrecerte un sistema de auditoría de securización integrado con más de 1500 comprobaciones individuales. Esto te permite rastrear y evaluar en tiempo real la evolución de tus medidas de hardening en todos tus entornos."
                    />
                    <MiniComponentesSegundaSeccion 
                    imagen = "2"
                    titulo = "MONITORIZACIÓN DE VULNERABILIDADES PERMANENTE"
                    texto = "Integramos toda la base de datos de vulnerabilidades de Mitre (CVE) y NIST para poder realizar auditorías de software vulnerable en toda su organización de manera continuada. Se utilizarán tanto los agentes como el componente remoto Discovery para determinar cuáles de sus sistemas tienen software con vulnerabilidades."
                    />
                    <MiniComponentesSegundaSeccion 
                    imagen = "3"
                    titulo = "FLEXIBILIDAD EN EL INVENTARIO"
                    texto = "Ya sea que utilices sistemas Linux de varias distribuciones o cualquier versión de Windows, nos adaptamos a todo. No importa la complejidad de tu infraestructura, con Red Dinámica puedes realizar un inventario detallado de todo tipo de sistemas y personalizarlo a tu gusto."
                    />
                    <MiniComponentesSegundaSeccion 
                    imagen = "4"
                    titulo = "MONITORIZACIÓN DE LA INFRAESTRUCTURA DE SEGURIDAD"
                    texto = "Monitoriza el estado de infraestructuras de seguridad: Backups, antivirus, VPN, firewalls, IDS/IPS, SIEM, honeypots, sistemas de autenticación, sistemas de almacenamiento, recogida de logs, etc."
                    />
                    <MiniComponentesSegundaSeccion 
                    imagen = "5"
                    titulo = "MONITORIZACIÓN DE LA SEGURIDAD EN SERVIDORES"
                    texto = "Verificamos en tiempo real la seguridad del acceso remoto, de las contraseñas, de los puertos abiertos y del cambio sobre ficheros clave del sistema. Si algo se mueve, serás avisado casi en tiempo real."
                    />
                    <MiniComponentesSegundaSeccion 
                    imagen = "6"
                    titulo = "ALERTAS PROACTIVAS"
                    texto = "No solo te ayudamos a detectar posibles brechas de seguridad, sino que también te brindamos alertas proactivas y recomendaciones para abordar cualquier problema antes de que se convierta en una amenaza real."
                    />
                </div>
            </section>
            <section className="container-fluid seccion-viñetas-animadas">
                <ComponenteViñetaAnimada 
                    nombreImagen = "49"
                    titulo = "INVENTARIO Y CONTROL DE ACTIVOS HARDWARE Y SOFTWARE"
                    texto = "Supervisa y gestiona todos los dispositivos y software en tu red. Lleva un inventario actualizado de tus activos tecnológicos y usa la autenticación para bloquear lo no autorizado. Además, supervisa y gestiona el software en tu red, solo permite lo autorizado y bloquea lo que no lo es. Tu seguridad lo requiere."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "50"
                    titulo = "Inventario y Control de Dispositivos"
                    texto = "En Red Dinámica, cuidamos la seguridad de tus sistemas desde la base, esto significa identificar y gestionar tus dispositivos de hardware para que solo los autorizados tengan acceso, bloqueando los no deseados. Mantener un inventario adecuado minimiza riesgos internos, organiza tu entorno y brinda claridad a tu red."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "54"
                    titulo = "Gestión de Vulnerabilidades"
                    texto = "Analiza tus activos de forma continua para detectar vulnerabilidades potenciales y soluciónalas antes de que se conviertan en un problema. Refuerza la seguridad de tu red asegurándote de que el software y los sistemas operativos en tu organización estén siempre actualizados con las últimas medidas de seguridad."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "56"
                    titulo = "Uso Controlado de Privilegios Administrativos"
                    texto = "Supervisa de cerca los controles de acceso y el comportamiento de los usuarios con cuentas privilegiadas para evitar cualquier acceso no autorizado a sistemas críticos. Asegúrate de que solo las personas autorizadas tengan privilegios elevados para evitar cualquier mal uso de los privilegios administrativos."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "13"
                    titulo = "Configuración Segura de Hardware y Software"
                    texto = "Establece y mantiene configuraciones de seguridad basadas en los estándares aprobados por tu organización. Crea un sistema de gestión de configuraciones riguroso que detecte y alerte sobre cualquier configuración incorrecta, y establece un proceso de control de cambios para evitar que los atacantes se aprovechen de servicios y configuraciones vulnerables."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "14"
                    titulo = "Mantenimiento, Supervisión y Análisis de Logs de Auditoría"
                    texto = "Recopila, administra y analiza los logs de auditoría de eventos para identificar posibles anomalías. Mantén registros detallados para comprender a fondo los ataques y poder responder de manera eficaz a los incidentes de seguridad."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "14"
                    titulo = "Defensas contra Malware"
                    texto = "Supervisa y controla la instalación y ejecución de código malicioso en varios puntos de tu empresa para prevenir ataques. Configura y utiliza software antimalware y aprovecha la automatización para garantizar actualizaciones rápidas de defensas y una acción correctiva ágil en caso de ataques."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "14"
                    titulo = "Protección del Correo Electrónico y los Navegadores Web"
                    texto = "Protege y administra tus navegadores web y sistemas de correo electrónico contra amenazas en línea para reducir tu superficie de ataque. Desactiva navegadores y complementos de correo electrónico no autorizados y asegura que los usuarios solo accedan a sitios web de confianza mediante filtros de URL basados en la red."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "14"
                    titulo = "Capacidades de Recuperación de Datos"
                    texto = "Establece procesos y herramientas para asegurar que la información crítica de tu organización esté respaldada adecuadamente. Asegúrate de contar con un sistema de recuperación de datos confiable para restaurar la información en caso de ataques que pongan en peligro los datos críticos."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "14"
                    titulo = "Defensa de Límites y Protección de Datos"
                    texto = "Identifica y separa los datos sensibles, y establece una serie de procesos que incluyan la codificación, planes de protección contra la infiltración de datos y técnicas de prevención de pérdida de datos."
                />
                <ComponenteViñetaAnimada 
                    nombreImagen = "14"
                    titulo = "Supervisión y Control de Cuentas"
                    texto = "Supervisa de cerca todo el ciclo de vida de tus sistemas y cuentas de aplicaciones, desde su creación hasta su eliminación, pasando por su uso e inactividad. Esta gestión activa previene que los atacantes aprovechen cuentas de usuarios legítimos pero inactivos para fines maliciosos."
                />
            </section>
            <section className="container-fluid seccionImg">
                <div></div>
            </section>
            <ComponentetxtDerechoSoluciones
                titulo="LA BASE DE DATOS DE VULNERABILIDADES MÁS COMPLETA"
                texto="Tengas el número de sistemas que tengas, estén donde estén, buscaremos cada pieza de software instalada contrastaremos con la mayor base de datos pública del mundo (CVE, NVD, VulnDB, NVR, MSUG, RHSD) y la contrastaremos con la mayor base de datos del mundo de vulnerabilidades para decirte dónde tienes que actuar."
                texto1="Establece alertas, crea dashboards e informes técnicos para filtrar por grupos de máquina, tipos de ataque, vector de intrusión, uso de privilegios y otros muchos campos."
                imagen="31"
            />
            <section className="container-fluid bg-white contenedorIMGTopBot">
                <div className="row">
                    <div className="col-12 imagen">
                        <img src={require(`../images/44.png`)} alt="Imagen" />
                    </div>
                    <div className=" container-fluid info text-dark">
                        <h2 className="text-center"> <span className="text-dark">NUESTRO</span> ROADMAP <span className="text-dark">DE SEGURIDAD</span></h2>
                        <p className="p-orange fw-bold">Estamos construyendo una herramienta para controlarlo todo.</p>
                        <p> Red Dinámica es la base para monitorizar, auditar, obtener logs, generar alertas, gestionar configuraciones (NCM), ejecutar tareas de manera distribuida (RMM) y mucho más.</p>
                        <p>Con la monitorización de seguridad, el análisis de hardening y la detección de vulnerabilidades hemos dado el primer paso pero nuestro roadmap es mucho más ambicioso.</p>
                    </div>
                    <div className="col-12 container-fluid imagen-fullwidth">
                        
                    </div>
                    <div className="container-fluid info text-dark">
                        <p className="p-orange fw-bold"> Red Dinámica será verdaderamente, la herramienta única para controlarlo todo.</p>
                    </div>
                </div>
            </section>
            <section className="container-fluid contenedorIMGTopBot">
                <div className="row">
                    <div className="col-12 imagen">
                        <img src={require(`../images/42.png`)} alt="Imagen" />
                    </div>
                    <div className=" container-fluid info2 text-white">
                        <h2 className="text-center"> <span className="text-white">SEGURIDAD QUE PUEDES</span> VER Y VERIFICAR</h2>
                        <p>Estamos comprometidos a brindarte transparencia en todo momento. Nuestra plataforma te permite verificar fácilmente la implementación de cada control y realizar un seguimiento constante del estado de tu seguridad. No todas las categorías son aplicables a todos los sistemas, pero hemos desarrollado controles que te ayudarán a determinar si son relevantes para tu entorno.</p>
                    </div>
                </div>
            </section>
            <section className="container-fluid contenedor-animables">
                <header> La solución de supervisión total para la observabilidad total </header>
                <div className="container contenedor-cartas-animables">
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-person-lines-fill"
                        titulo = "Experiencia de usuario"
                        subtitulo = "Experencia de usuario"
                        texto = "Comprueba si tu aplicación como se espera. Detecta el fallo antes que lo hagan tus clientes."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-graph-up"
                        titulo = "Monitorización de aplicaciones (APM)"
                        subtitulo = "Monitorización de aplicaciones (APM)"
                        texto = "Supervisa tus aplicaciones empresariales a todo nivel y obten todos los datos APM que necesites."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-display"
                        titulo = "Monitorización de entornos virtuales"
                        subtitulo = "Monitorización de entornos virtuales"
                        texto = "Optimiza tu infraestructura ya sea en instalaciones hibridas, virtuales o cloud."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-exclamation-diamond-fill"
                        titulo = "Gestión de incidencias"
                        subtitulo = "Gestión de incidencias"
                        texto = "Integra el sistema de ticketing de tu infraestructura en Red Dinámica."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-joystick"
                        titulo = "Control Remoto"
                        subtitulo = "Control Remoto"
                        texto = "Todos tus dispositivos controlados por una herramienta accesible con solo un navegador web."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-headset"
                        titulo = "Gestión de servicio y asistencia"
                        subtitulo = "Gestión de servicio y asistencia"
                        texto = "Mida y supervise su pila de TI para detectar resolver problemas en tu infraestructura de TI."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-cpu-fill"
                        titulo = "Monitorización mainframe"
                        subtitulo = "Monitorización mainframe"
                        texto = "Dispón de una única plataforma para recoger y mostrar la información venga de donde venga."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-ethernet"
                        titulo = "Monitorización de redes"
                        subtitulo = "Monitorización de redes"
                        texto = "Observa toda tu información en conjunto, incluso cuando tengas miles de dispositivos que supervisar."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-card-checklist"
                        titulo = "Inventario TI"
                        subtitulo = "Inventario TI"
                        texto = "Recoge y supervisa el estado de todos los datos de tu infraestructura informática en una sola herramienta."
                    />
                    <ComponenteCartaAnimable 
                        nombreIcono = "bi-file-earmark-text"
                        titulo = "Recolección de logs"
                        subtitulo = "Recolección de logs"
                        texto = "Recoge, visualiza y centraliza todos tus registros en un único punto."
                    />
                </div>
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