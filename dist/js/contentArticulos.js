document.addEventListener('DOMContentLoaded', function () {
    const articles = [
        { title: 'Métodos de producción Just-In-Time (JIT)', image: './assets/img/articulos/articulo1/img11.png', content: 'El JIT es una estrategia de producción que se enfoca en eliminar el desperdicio y mejorar la eficiencia operativa al producir bienes y servicios exactamente cuando son necesarios. Incluye métodos como producción celular, sistema Kanban y enfoque en la calidad total. Esta filosofía empresarial busca entregar productos de alta calidad a tiempo y a un costo mínimo, permitiendo a las organizaciones prosperar en un entorno competitivo.' },
        { title: 'Mejora de la eficiencia energética en la industria', image: './assets/img/articulos/articulo2/img21.png', content: 'La eficiencia energética industrial es esencial para reducir costos, minimizar la huella de carbono y contribuir a la sostenibilidad. Las empresas pueden lograrlo mediante auditorías energéticas, tecnologías eficientes y gestión inteligente de energía. La inversión en energías renovables y la formación de empleados son clave. La eficiencia energética no solo beneficia económicamente a corto plazo, sino que también tiene un impacto sostenible en el medio ambiente.' },
        { title: 'Diseño de layout y distribución de planta', image: './assets/img/articulos/articulo3/img31.png', content: 'El diseño de layout y distribución de planta es fundamental para optimizar la eficiencia operativa en entornos industriales y comerciales. Se enfoca en aspectos como el flujo de material, el uso eficiente del espacio, la seguridad, la flexibilidad y la comunicación. Sus beneficios incluyen mayor productividad, reducción de costos, mejora de la calidad, flexibilidad y aumento de la moral de los empleados. Un diseño cuidadoso permite a las empresas adaptarse a cambios en el mercado y mantenerse competitivas.' },
        { title: 'Ergonomía y diseño de estaciones de trabajo', image: './assets/img/articulos/articulo4/img41.png', content: 'La ergonomía y el diseño de estaciones de trabajo son fundamentales para la salud, seguridad y productividad en el entorno laboral. La ergonomía se enfoca en adaptar el lugar de trabajo a las necesidades de los empleados para mejorar la comodidad y el rendimiento. El diseño de estaciones de trabajo, ya sea individual o colaborativo, puede aumentar la productividad y reducir lesiones laborales, además de elevar la satisfacción y moral de los empleados.' },
        { title: 'Mantenimiento industrial', image: './assets/img/articulos/articulo5/img52.png', content: 'El mantenimiento industrial abarca actividades para mantener, reparar y mejorar equipos y sistemas industriales, garantizando su eficiencia y seguridad. Se clasifica en tipos como correctivo, preventivo, predictivo y proactivo. Su importancia radica en la optimización de recursos, seguridad, fiabilidad, cumplimiento normativo, reducción de costos y sostenibilidad. El mantenimiento industrial es esencial para la operación segura y eficiente en el entorno industrial, permitiendo a las empresas mantenerse competitivas.' },
        { title: 'Sistemas de gestión ambiental en la industria', image: './assets/img/articulos/articulo6/img61.png', content: 'Los Sistemas de Gestión Ambiental (SGA) ayudan a las organizaciones a gestionar su desempeño ambiental, cumplir regulaciones y promover la sostenibilidad. La norma ISO 14001 es clave en este campo. Los principios de un SGA incluyen el compromiso de la alta dirección, la planificación, implementación y monitoreo. Su implementación no solo asegura el cumplimiento, sino que también mejora la eficiencia, responsabilidad y sostenibilidad, ofreciendo ventajas competitivas y una mejor reputación en el mercado.'},
        { title: 'Gestión de proyectos en ingeniería industrial', image: './assets/img/articulos/articulo7/img71.png', content: 'La gestión de proyectos en ingeniería industrial implica la planificación, ejecución y control de proyectos para alcanzar objetivos dentro de restricciones como tiempo y presupuesto. Se utilizan herramientas como WBS y diagramas de Gantt. Los desafíos incluyen la complejidad, cambios en requisitos y optimización de recursos. La comunicación efectiva y el control de costos son cruciales para el éxito en este campo.'},
        { title: 'Gestión de recursos humanos en la industria', image: './assets/img/articulos/articulo8/img81.png', content: 'La gestión de recursos humanos en la industria se enfoca en reclutar, desarrollar y retener empleados con las habilidades necesarias para cumplir objetivos operativos y estratégicos. Un enfoque estratégico en la gestión del talento contribuye al éxito a largo plazo, asegurando una fuerza laboral competente y comprometida.'},
        { title: 'Toma de decisiones en ingeniería industrial', image: './assets/img/articulos/articulo9/img91.png', content: 'La toma de decisiones en la ingeniería industrial implica evaluar opciones basadas en datos y análisis para optimizar la eficiencia y calidad en entornos industriales. Un enfoque analítico y ético, combinado con modelado y simulación, es esencial para el éxito en este campo.'},
        { title: 'Simulación de procesos industriales', image: './assets/img/articulos/articulo10/img102.png', content: 'La simulación de procesos industriales es una poderosa herramienta de la ingeniería industrial que permite modelar y analizar sistemas complejos en un entorno virtual. Se utiliza para optimizar operaciones, tomar decisiones informadas y reducir costos operativos en diversos campos de la industria.'},
    ];

    const articleList = document.getElementById('article-list');

    articles.forEach((article, index) => {

        const card = document.createElement('div');
        card.classList.add('mb-3');
        card.innerHTML = `
            <div class="card">
                <div class="row g-0">
                    <div class="col-md-4 d-flex align-items-center">
                        <img src="${article.image}" alt="Imagen del artículo" class="img-fluid">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text" style="font-size: 16px;">${article.content}</p>
                            <a href="./articulos/articulo${index + 1}.html" class="btn btn-success btn-sm">Leer más</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        articleList.appendChild(card);
    });
});
