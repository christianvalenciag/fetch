window.onload = function(){
 

      fetch('https://restcountries.eu/rest/v2/alpha/ma') // Poner la abreviatura del pais, para españa "es", para francia "fr"...
      .then(res => res.json())
      .then(res => {
      
      let caja = document.getElementById("country");

      let item=
           `
            <div class="title">INFO DE LOS PAISES</div>
            <div class="count_name">${res.cioc}  - ${res.name} <div class="count_name_nat"> - ${res.nativeName} </div> </div>
            <div class="count_info">
                <div class="">
                   Capital: ${res.capital}
                </div>
                <div class="">
                   Continente: ${res.region}
                </div>
                <div class="">
                   Población: ${res.population} habitantes
                </div>
                <div class="">
                   Area: ${res.area} km
                </div>
            </div>
            <div class="num">
                <div class="">
                    Código de llamada: +${res.callingCodes}
                </div>
            </div>
            <div class="flag">
              <img src="${res.flag}"/>
            </div>
            <span class="fa fa-paperclip"></span>
            <div class="mundo">
            <img src="assets/mundo.png"/>
          </div>
             `;

          caja.innerHTML += item;
      
      });
      
}


