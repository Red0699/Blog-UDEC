
const articles = [
    { path: './articulos/articulo1.html', title: 'Métodos de producción Just-In-Time (JIT)', image: './assets/img/articulos/articulo1/img11.png', content: 'El JIT es una estrategia de producción que se enfoca en eliminar el desperdicio y mejorar la eficiencia operativa al producir bienes y servicios exactamente cuando son necesarios. Incluye métodos como producción celular, sistema Kanban y enfoque en la calidad total. Esta filosofía empresarial busca entregar productos de alta calidad a tiempo y a un costo mínimo, permitiendo a las organizaciones prosperar en un entorno competitivo.' },
    { path: './articulos/articulo2.html', title: 'Mejora de la eficiencia energética en la industria', image: './assets/img/articulos/articulo2/img21.png', content: 'La eficiencia energética industrial es esencial para reducir costos, minimizar la huella de carbono y contribuir a la sostenibilidad. Las empresas pueden lograrlo mediante auditorías energéticas, tecnologías eficientes y gestión inteligente de energía. La inversión en energías renovables y la formación de empleados son clave. La eficiencia energética no solo beneficia económicamente a corto plazo, sino que también tiene un impacto sostenible en el medio ambiente.' },
    { path: './articulos/articulo3.html', title: 'Diseño de layout y distribución de planta', image: './assets/img/articulos/articulo3/img31.png', content: 'El diseño de layout y distribución de planta es fundamental para optimizar la eficiencia operativa en entornos industriales y comerciales. Se enfoca en aspectos como el flujo de material, el uso eficiente del espacio, la seguridad, la flexibilidad y la comunicación. Sus beneficios incluyen mayor productividad, reducción de costos, mejora de la calidad, flexibilidad y aumento de la moral de los empleados. Un diseño cuidadoso permite a las empresas adaptarse a cambios en el mercado y mantenerse competitivas.' },
    { path: './articulos/articulo4.html', title: 'Ergonomía y diseño de estaciones de trabajo', image: './assets/img/articulos/articulo4/img41.png', content: 'La ergonomía y el diseño de estaciones de trabajo son fundamentales para la salud, seguridad y productividad en el entorno laboral. La ergonomía se enfoca en adaptar el lugar de trabajo a las necesidades de los empleados para mejorar la comodidad y el rendimiento. El diseño de estaciones de trabajo, ya sea individual o colaborativo, puede aumentar la productividad y reducir lesiones laborales, además de elevar la satisfacción y moral de los empleados.' },
    { path: './articulos/articulo5.html', title: 'Mantenimiento industrial', image: './assets/img/articulos/articulo5/img52.png', content: 'El mantenimiento industrial abarca actividades para mantener, reparar y mejorar equipos y sistemas industriales, garantizando su eficiencia y seguridad. Se clasifica en tipos como correctivo, preventivo, predictivo y proactivo. Su importancia radica en la optimización de recursos, seguridad, fiabilidad, cumplimiento normativo, reducción de costos y sostenibilidad. El mantenimiento industrial es esencial para la operación segura y eficiente en el entorno industrial, permitiendo a las empresas mantenerse competitivas.' },
    { path: './articulos/articulo6.html', title: 'Sistemas de gestión ambiental en la industria', image: './assets/img/articulos/articulo6/img61.png', content: 'Los Sistemas de Gestión Ambiental (SGA) ayudan a las organizaciones a gestionar su desempeño ambiental, cumplir regulaciones y promover la sostenibilidad. La norma ISO 14001 es clave en este campo. Los principios de un SGA incluyen el compromiso de la alta dirección, la planificación, implementación y monitoreo. Su implementación no solo asegura el cumplimiento, sino que también mejora la eficiencia, responsabilidad y sostenibilidad, ofreciendo ventajas competitivas y una mejor reputación en el mercado.' },
    { path: './articulos/articulo7.html', title: 'Gestión de proyectos en ingeniería industrial', image: './assets/img/articulos/articulo7/img71.png', content: 'La gestión de proyectos en ingeniería industrial implica la planificación, ejecución y control de proyectos para alcanzar objetivos dentro de restricciones como tiempo y presupuesto. Se utilizan herramientas como WBS y diagramas de Gantt. Los desafíos incluyen la complejidad, cambios en requisitos y optimización de recursos. La comunicación efectiva y el control de costos son cruciales para el éxito en este campo.' },
    { path: './articulos/articulo8.html', title: 'Gestión de recursos humanos en la industria', image: './assets/img/articulos/articulo8/img81.png', content: 'La gestión de recursos humanos en la industria se enfoca en reclutar, desarrollar y retener empleados con las habilidades necesarias para cumplir objetivos operativos y estratégicos. Un enfoque estratégico en la gestión del talento contribuye al éxito a largo plazo, asegurando una fuerza laboral competente y comprometida.' },
    { path: './articulos/articulo9.html', title: 'Toma de decisiones en ingeniería industrial', image: './assets/img/articulos/articulo9/img91.png', content: 'La toma de decisiones en la ingeniería industrial implica evaluar opciones basadas en datos y análisis para optimizar la eficiencia y calidad en entornos industriales. Un enfoque analítico y ético, combinado con modelado y simulación, es esencial para el éxito en este campo.' },
    { path: './articulos/articulo10.html', title: 'Simulación de procesos industriales', image: './assets/img/articulos/articulo10/img102.png', content: 'La simulación de procesos industriales es una poderosa herramienta de la ingeniería industrial que permite modelar y analizar sistemas complejos en un entorno virtual. Se utiliza para optimizar operaciones, tomar decisiones informadas y reducir costos operativos en diversos campos de la industria.' },
    { path: './articulos/articulo11.html', title: 'Robótica en la industria', image: './assets/img/articulos/articulo11/img111.png', content: 'La robótica industrial transforma la industria, aumentando eficiencia y seguridad. Los robots realizan tareas diversas en líneas de producción automatizadas y en entornos peligrosos. Se clasifican en manipuladores, móviles y colaborativos. Ventajas incluyen eficiencia, calidad, reducción de costos, flexibilidad y seguridad, pero hay desafíos en inversión, integración, formación y cuestiones éticas. El futuro de la robótica implica inteligencia artificial, robots autónomos y colaboración cercana. La ética y el empleo son consideraciones importantes.' },
    { path: './articulos/articulo12.html', title: 'Gestión de la seguridad en el trabajo', image: './assets/img/articulos/articulo12/img121.png', content: 'La gestión de la seguridad en el trabajo es esencial para proteger a los empleados, cumplir con regulaciones, y mantener operaciones eficientes y responsables. Incluye la identificación y evaluación de riesgos, prevención y control, capacitación, cumplimiento legal, investigación de accidentes, participación de empleados, uso de tecnología y tiene beneficios como la reducción de accidentes y la mejora del bienestar de los empleados. El artículo aborda estrategias clave para mantener un entorno laboral seguro.' },
    { path: './articulos/articulo13.html', title: 'Estudio de tiempos y movimientos', image: './assets/img/articulos/articulo13/img131.png', content: 'El estudio de tiempos y movimientos en ingeniería industrial busca mejorar la eficiencia analizando y optimizando procesos laborales para reducir costos y ofrecer mayor calidad en entornos industriales. Esta técnica beneficia a empresas y trabajadores al crear ambientes más efectivos y seguros.' },
    { path: './articulos/articulo14.html', title: 'Análisis de datos y estadísticas en la industria', image: './assets/img/articulos/articulo14/img141.png', content: 'El análisis de datos y estadísticas en la industria es esencial para la toma de decisiones informadas y la mejora continua. Los datos se recopilan a través de sensores y sistemas de gestión, y se analizan de manera descriptiva, inferencial y predictiva. Esto se aplica a la optimización de la producción, gestión de la cadena de suministro, control de calidad, mantenimiento predictivo y análisis de costos. Herramientas como software de análisis, big data y machine learning son fundamentales. Los beneficios incluyen la toma de decisiones informada, eficiencia operativa, innovación y competitividad. El análisis de datos es vital para mejorar la eficiencia, la calidad y la competitividad en la industria.' },
    { path: './articulos/articulo15.html', title: 'Mejora continua en procesos', image: './assets/img/articulos/articulo15/img15.jpg', content: 'La mejora continua en procesos es un enfoque clave en la industria para optimizar la eficiencia y calidad. Implica definir objetivos, identificar oportunidades, desarrollar soluciones, implementar cambios y evaluar resultados. Sus beneficios incluyen la reducción de costos, mejor calidad y mayor satisfacción del cliente. Para tener éxito, es necesario crear una cultura de mejora continua, involucrar a todos los empleados y medir resultados. Este proceso es una inversión a largo plazo que aumenta las posibilidades de éxito empresarial. ' },
    { path: './articulos/articulo16.html', title: 'Gestión de la Cadena de Suministro', image: './assets/img/articulos/articulo16/img16.png', content: 'La gestión de la cadena de suministro (SCM) es vital para las empresas en un entorno global y digital. La complejidad, la adaptación a la demanda cambiante y la colaboración son desafíos clave. Las mejoras incluyen integración, simplificación, colaboración e innovación. Una SCM eficiente mejora la competitividad y la satisfacción del cliente.' },
    { path: './articulos/articulo17.html', title: 'Optimización de la Producción', image: './assets/img/articulos/articulo17/img17.jpeg', content: 'La optimización de la producción se enfoca en mejorar la eficiencia, calidad y flexibilidad de los procesos de fabricación o prestación de servicios. Esto conlleva beneficios como reducción de costos y mayor calidad. Se apoya en herramientas como la gestión de la cadena de suministro y Lean Manufacturing. Su implementación es esencial para la competitividad y el éxito empresarial a largo plazo.' },
    { path: './articulos/articulo18.html', title: 'Control de Calidad y Gestión de Calidad Total', image: './assets/img/articulos/articulo18/img18.webp', content: 'Control de calidad se enfoca en la inspección y corrección de defectos en productos y servicios terminados, mientras que la Gestión de Calidad Total (TQM) busca la mejora continua en todos los aspectos de una organización y previene defectos. Ambos enfoques son clave para garantizar la calidad, y su elección depende de los objetivos y la cultura de calidad de la organización.' },
    { path: './articulos/articulo19.html', title: 'Ingeniería de Manufactura', image: './assets/img/articulos/articulo19/img19.jpg', content: 'La ingeniería de manufactura se enfoca en optimizar la producción mediante el diseño de procesos, automatización, control de calidad y reducción de costos. Su importancia en la industria moderna radica en su capacidad para mejorar la eficiencia y calidad de los productos, manteniendo la competitividad.' },
    { path: './articulos/articulo20.html', title: 'Automatización Industrial', image: './assets/img/articulos/articulo20/img20.jpg', content: 'La automatización industrial mejora la eficiencia y calidad en diversas industrias al realizar tareas de manera precisa y rápida, reduciendo errores y aumentando la seguridad. Se aplica en robótica de fabricación, procesos químicos y logística. Con tecnologías avanzadas, como la inteligencia artificial y el IoT, continuará siendo fundamental en la industria moderna.' },
    { path: './articulos/articulo21.html', title: 'Diseño de Sistemas de Producción', image: './assets/img/articulos/default2.png', content: 'La ingeniería de fabricación se enfoca en mejorar la eficiencia y calidad de los procesos de producción. Implica diseño, automatización, control de calidad y reducción de costos. La tecnología desempeña un papel clave en la optimización de la producción. La inversión en sistemas de producción bien diseñados y tecnología avanzada es esencial para la competitividad empresarial.' },
    { path: './articulos/articulo22.html', title: 'Análisis de riesgos en la industria', image: './assets/img/articulos/articulo22/img22.jpeg', content: 'El análisis de riesgos en la industria es esencial para identificar amenazas, prevenir accidentes, garantizar la continuidad de negocios y cumplir con normativas. Se sigue un proceso que incluye identificación, evaluación y mitigación de riesgos, con tecnología desempeñando un papel clave. La preparación y gestión de riesgos son cruciales en un entorno industrial complejo para lograr un entorno seguro y éxito a largo plazo.' },
    { path: './articulos/articulo23.html', title: 'Lean Manufacturing', image: './assets/img/articulos/articulo23/img23.jpg', content: 'Lean Manufacturing es una filosofía que busca la eficiencia al eliminar actividades y recursos que no aportan valor al producto o servicio. Se basa en principios como la identificación del valor del cliente, la eliminación de desperdicios y la mejora continua. Se aplica en diversas industrias para lograr eficiencia, reducción de costos y calidad del producto, beneficiando la satisfacción del cliente. En un mundo enfocado en la eficiencia y calidad, el Lean Manufacturing sigue siendo esencial para el éxito empresarial.' },
    { path: './articulos/articulo24.html', title: 'Six Sigma y sus metodologías', image: './assets/img/articulos/articulo24/img241.png', content: 'Six Sigma es un enfoque de gestión que busca mejorar la calidad y eficiencia al reducir la variabilidad y minimizar defectos en los procesos. Utiliza metodologías como DMAIC y DMADV, ofreciendo beneficios como la reducción de defectos, aumento de la satisfacción del cliente y toma de decisiones basada en datos. Es una herramienta poderosa para la mejora continua en diversas industrias.' },
    { path: './articulos/articulo25.html', title: 'Gestión de operaciones', image: './assets/img/articulos/articulo25/img25.jpeg', content: 'La gestión de operaciones se enfoca en optimizar recursos y procesos para producir productos y servicios de alta calidad de manera eficiente. Incluye aspectos como planificación de producción, control de calidad, gestión de inventarios y mejora continua. La tecnología desempeña un papel clave, y la inversión en gestión de operaciones es esencial para el éxito empresarial.' },
    { path: './articulos/articulo26.html', title: 'Planificación y programación de la producción', image: './assets/img/articulos/articulo26/img26.jpeg', content: 'La planificación y programación de la producción son esenciales para el éxito empresarial, permitiendo a las organizaciones anticipar la demanda, diseñar procesos eficientes y programar tareas de manera efectiva. Esto conduce a una mayor eficiencia en la producción, reducción de costos y la capacidad de satisfacer las necesidades de los clientes.' },
    { path: './articulos/articulo27.html', title: 'Logística industrial', image: './assets/img/articulos/articulo27/img27.jpg', content: 'La logística industrial se encarga de optimizar el flujo de productos y servicios a lo largo de la cadena de suministro, centrándose en la eficiencia y la satisfacción del cliente. La tecnología y la mejora continua son fundamentales para mantener la competitividad en un entorno empresarial en constante evolución.' },
    { path: './articulos/articulo28.html', title: 'Gestión de inventarios', image: './assets/img/articulos/articulo28/img28.jpeg', content: 'La gestión de inventarios se enfoca en equilibrar la oferta y la demanda de productos para evitar pérdidas de ventas y reducir costos. La tecnología y las mejores prácticas son esenciales para mantener la competitividad en un entorno empresarial en constante evolución.' },


    { path: './articulos/articulo.html', title: 'Titulo', image: './assets/img/articulos/default2.png', content: 'contenido' },
];

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Agrega un manejador de eventos al botón de búsqueda
searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm));

    // Limpia la lista de tarjetas existente
    articleList.innerHTML = '';

    // Muestra los artículos filtrados
    filteredArticles.forEach((article, index) => {
        const tarjetaHTML = crearTarjetaArticulo(article, index);
        articleList.innerHTML += tarjetaHTML;
    });
});

// Agrega un manejador de eventos para la entrada de texto (opcional)
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm));

    // Limpia la lista de tarjetas existente
    articleList.innerHTML = '';

    // Muestra los artículos filtrados
    filteredArticles.forEach((article, index) => {
        const tarjetaHTML = crearTarjetaArticulo(article, index);
        articleList.innerHTML += tarjetaHTML;
    });
});

function crearTarjetaArticulo(article, index) {
    return `

            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4 d-flex align-items-center">
                        <img src="${article.image}" alt="Imagen del artículo" class="img-fluid">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text" style="font-size: 16px;">${article.content}</p>
                            <a href="${article.path}" class="btn btn-success btn-sm">Leer más</a>
                        </div>
                    </div>
                </div>
            </div>
        
        `;
}


const articleList = document.getElementById('article-list');

articles.forEach((article, index) => {
    const tarjetaHTML = crearTarjetaArticulo(article, index);
    articleList.innerHTML += tarjetaHTML;
});

$(document).ready(function () {
    $('#pagination').twbsPagination({
        totalPages: Math.ceil(articles.length / 5),
        visiblePages: 5, // Número de páginas visibles en el paginador
        onPageClick: function (event, page) {
            const articlesPerPage = 5;
            const startIndex = (page - 1) * articlesPerPage;
            const endIndex = startIndex + articlesPerPage;
            const tarjetas = articles.slice(startIndex, endIndex);
            articleList.innerHTML = '';
            tarjetas.forEach((article, index) => {
                const tarjetaHTML = crearTarjetaArticulo(article, index);
                articleList.innerHTML += tarjetaHTML;
            });
        }
    });
});




