document.getElementById("logo");

document.getElementsByTagName("nav");

document.querySelectorAll("a.px_listpage_categoriesleft_click"); // verkeerde categorie (filters)
Array.from(document.getElementsByClassName(".wsp-main-nav-panel .wsp-category-nav .wsp-category-nav__link ")).forEach( (e) => {
    console.log(e.text);
});


Array.from(document.getElementsByClassName("product-title")).forEach( (e) => {
    console.log(e.text);
});


document.querySelectorAll("a").forEach( (e) => {
    console.log(e.href);
});


document.querySelectorAll('.filmstrip img');

