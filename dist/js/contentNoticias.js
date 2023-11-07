
// Datos de noticias
const noticias = [
    {
        titulo: 'Estudiantes de Ingeniería Industrial en la Universidad de Cundinamarca Extensión Soacha Desarrollan Innovadores Materiales Didácticos para la Formación',
        contenido: 'Estudiantes de Ingeniería Industrial de la Universidad de Cundinamarca en Soacha desarrollan materiales didácticos innovadores para transformar la educación. Proyectos incluyen simulaciones interactivas, plataforma de aprendizaje en línea y tarjetas didácticas.',
        imagen: 'default.jpg',
        link: './noticias/noticias1.html'
    },

    {
        titulo: 'Así avanza el MEDIT en la Universidad de Cundinamarca, extensión Soacha',
        contenido: 'La Universidad de Cundinamarca, Extensión Soacha, implementa con éxito el plan MEDIT A UN CLIC en respuesta a la emergencia sanitaria por COVID-19. La estrategia logra una alta asistencia a clases y una amplia gama de servicios en línea, incluyendo atención virtual, formación en biblioteca, capacitación, y apoyo a estudiantes y docentes.',
        imagen: 'notice1.jpg',
        link: './noticias/noticias2.html'
    },
    {
        titulo: 'Ideas que transforma el ingeniero industrial en Colombia',
        contenido: 'Estudiantes de Ingeniería Industrial presentan innovaciones en la Conferencia InNGENIO 2019. Destaca un mortero sostenible con cáscara de huevo, reemplazando el cemento. Esta solución es más resistente y reduce la contaminación ambiental. Importancia de la investigación en ingeniería.',
        imagen: 'notice2.jpg',
        link: './noticias/noticias3.html'
    },
    {
        titulo: 'Noticia 4',
        contenido: 'Breve descripción de la Noticia 1. Lorem ipsum dolor sit amet, consectetur adipiscing elitasasasas.',
        imagen: 'post-bg.jpg',
        link: '#'
    },
    {
        titulo: 'Noticia 5',
        contenido: 'Breve descripción de la Noticia 1. Lorem ipsum dolor sit amet, consectetur adipiscing elitasasasas.',
        imagen: 'post-sample-image.jpg',
        link: '#'
    },
    {
        titulo: 'Noticia 6',
        contenido: 'Breve descripción de la Noticia 1. Lorem ipsum dolor sit amet, consectetur adipiscing elitasasasas.',
        imagen: 'about-bg.jpg',
        link: '#'
    },
    {
        titulo: 'Noticia 7',
        contenido: 'Breve descripción de la Noticia 1. Lorem ipsum dolor sit amet, consectetur adipiscing elitasasasas.',
        imagen: 'about-bg.jpg',
        link: '#'
    },

    // Agrega más noticias aquí...
];

// Función para crear tarjetas de noticias
function crearTarjetaNoticia(noticia) {
    return `
            <div class="col-md-4 mb-4">
                <div class="card">
                <img src="./assets/img/noticias/${noticia.imagen}" class="card-img-top" alt="Imagen de la Noticia">
                    <div class="card-body">
                        <h5 class="card-title"><a href="${noticia.link}">${noticia.titulo}</a></h5>
                        <p class="card-text" style="font-size: 16px;">${noticia.contenido}</p>
                    </div>
                </div>
            </div>
        `;
}

// Llena la lista de noticias
const noticiasContainer = document.getElementById('noticias');
noticias.forEach(noticia => {
    const tarjetaHTML = crearTarjetaNoticia(noticia);
    noticiasContainer.innerHTML += tarjetaHTML;
});


$(document).ready(function () {
    $('#pagination').twbsPagination({
        totalPages: Math.ceil(noticias.length / 6),
        visiblePages: 5, // Número de páginas visibles en el paginador
        onPageClick: function (event, page) {
            const noticiasPerPage = 6;
            const startIndex = (page - 1) * noticiasPerPage;
            const endIndex = startIndex + noticiasPerPage;
            const tarjetas = noticias.slice(startIndex, endIndex);
            noticiasContainer.innerHTML = '';
            tarjetas.forEach(noticia => {
                const tarjetaHTML = crearTarjetaNoticia(noticia);
                noticiasContainer.innerHTML += tarjetaHTML;
            });
        }
    });
});

