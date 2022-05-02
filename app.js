//Declaracion de constantes
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
// Agregar evento para cambiar el contenido (pestaña) con un clic
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // Quitar seleccion para las otras pestañas
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // Ocultar los otros articulos
    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
/*

addEventListener(): Registra un evento a un objeto en específico.
classList.contains(): devuelve una colección activa de DOMTokenList de los atributos de clase del elemento. -> contains( String ): Comprueba si la clase indicada existe en el 
                        atributo de clase del elemento.
classList.add(): devuelve una colección activa de DOMTokenList de los atributos de clase del elemento. -> add( String [, String] ): Añade las clases indicadas. Si estas clases existieran 
                en el atributo del elemento serán ignoradas.
classList.remove(): devuelve una colección activa de DOMTokenList de los atributos de clase del elemento. -> remove( String [, String] ): Elimina las clases indicadas.
forEach(): El método forEach() ejecuta la función indicada una vez por cada elemento del array.
target.dataset.id: propiedad de solo lectura de la HTMLElementinterfaz proporciona acceso de lectura/escritura a los atributos de datos personalizados ( data-*) en los elementos.
                    en este caso, fue para darle un id a cada pestaña
*/