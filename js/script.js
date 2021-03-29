
    
    //slider producto    
    var contenedor = document.querySelector(".main--slider-container"),
        btnIzquierdo = document.getElementById("main--btn-left"),
        btnDerecho = document.getElementById("main--btn-rigth");

        btnDerecho.addEventListener("click", function(){
            contenedor.scrollLeft += contenedor.offsetWidth;//offsetWidth -> indica el tamaño total del contenedor
        });

        btnIzquierdo.addEventListener("click", function(){
            contenedor.scrollLeft -= contenedor.offsetWidth;
        });

