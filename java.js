 // Acessa o campo de busca e a galeria de imagens
 let searchBox = document.querySelector('#searchBox');
 let imagem = document.querySelectorAll('#galeria-imagem .imagem');
 

 searchBox.oninput=() =>{
    imagem.forEach(hide => hide.style.display='none');
    let value=searchBox.value;

    imagem.forEach(filter =>{
        let title=filter.getAttribute('data-title');

        if(value == title){
            filter.style.display= "block";

        }
        else if(searchBox.value == ''){
            filter.style.display= "block";
        }
    })
 }