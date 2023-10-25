document.addEventListener('DOMContentLoaded', function () {
    const articles = [
        { title: 'Métodos de producción Just-In-Time (JIT)', image:'./assets/img/articulos/articulo1/img11.png' ,content: 'El JIT es una estrategia de producción que se enfoca en eliminar el desperdicio y mejorar la eficiencia operativa al producir bienes y servicios exactamente cuando son necesarios. Incluye métodos como producción celular, sistema Kanban y enfoque en la calidad total. Esta filosofía empresarial busca entregar productos de alta calidad a tiempo y a un costo mínimo, permitiendo a las organizaciones prosperar en un entorno competitivo.' },
        { title: 'Título del Artículo 2', content: 'Contenido del artículo 2' },

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
