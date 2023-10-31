
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
    
    
    { path: './articulos/articulo.html', title: 'Titulo', image: './assets/img/articulos/articulo12/img121.png', content: 'contenido' },
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




