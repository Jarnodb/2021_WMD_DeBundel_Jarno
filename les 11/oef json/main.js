const output = document.getElementById("boeken");
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200){
        let result = JSON.parse(xhr.responseText);
        boeken.data = result;
        boeken.uitvoeren();
    }
}

xhr.open('GET', 'boeken.json', true);
xhr.send();

const boeken = {
    uitvoeren() {
        let html = "";
        this.data.forEach( boek => {
            let titel ="";
            if(boek.voortitel){
                titel += boek.voortitel + " ";
            }

            html += '<section class="boek">';
            html += '<img class="boekimg" src="' + boek.cover + '" alt="' + titel + '">';
            html += '<h3 class="boekkop">' + boek.titel +'</h3>';
            html += '<span class="boekean">ean ' + boek.ean + '</span>';
            html += '<span class="boekpaginas"> ' + boek.paginas + '</span>';
            html += '<span class="boektaal"> ' + boek.taal + '</span>';
            html += '<div class="boekprijs">&euro;' + boek.prijs + '</div>';
            html += '</section>';
        })
        output.innerHTML = html;
    }
}