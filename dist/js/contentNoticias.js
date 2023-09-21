
// Datos de noticias
const noticias = [
    { 
        titulo: 'Noticia 1', 
        contenido: 'Breve descripción de la Noticia 1. Lorem ipsum dolor sit amet, consectetur adipiscing elitasasasas.', 
        imagen: 'home-bg.jpg', 
        link: './noticias/noticias1.html'
    },
    
    { 
        titulo: 'Noticia 2', 
        contenido: 'Breve descripción de la Noticia 1. Lorem ipsum dolor sit amet, consectetur adipiscing elitasasasas.', 
        imagen: 'about-bg.jpg', 
        link: '#'
    },
    { 
        titulo: 'Noticia 3', 
        contenido: 'Breve descripción de la Noticia 1. Lorem ipsum dolor sit amet, consectetur adipiscing elitasasasas.', 
        imagen: 'contact-bg.jpg', 
        link: '#'
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
                <img src="./assets/img/${noticia.imagen}" class="card-img-top" alt="Imagen de la Noticia">
                    <div class="card-body">
                        <h5 class="card-title"><a href="${noticia.link}">${noticia.titulo}</a></h5>
                        <p class="card-text">${noticia.contenido}</p>
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


$(document).ready(function() {
    $('#pagination').twbsPagination({
        totalPages: Math.ceil(noticias.length / 6), 
        visiblePages: 5, // Número de páginas visibles en el paginador
        onPageClick: function(event, page) {
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

