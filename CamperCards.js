//crear el template referenciado abajo
let template = document.createElement(`template`);
template.innerHTML=`
        <style>h3{color:darkblue;}</style>
        <style>
        .camper-card {
              font-family: 'Arial', sans-serif;
              background: #f4f4f4;
              width: 500px;
              display: grid;
              grid-template-columns: 1fr 2fr;
              grid-gap: 10px;
              margin-bottom: 15px;
              border-bottom: darkorchid 5px solid;
              border-radius: 25px;
          }
        
          .camper-card img {
              width: 100%;
              height: 190px;
              border-radius: 25px;
          }
        
          .camper-card button {
              cursor: pointer;
              background: darkorchid;
              color: #fff;
              border: 0;
              border-radius: 5px;
              padding: 5px 10px;
          }
        </style>
            <div class="camper-card">
            <img height="100%" >
            <div>
              <h3></h3>
              <div class="info">
                <p></p>
                <h5></h5>
              </div>
              <button id="camper-info">Info</button>
            </div>
          </div>
        
`

//crear clase de la etiqueta
class CamperCard extends HTMLElement{
    constructor(){
        //herencia de la clase padre
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))//referenciar el template
        //seleccionar en el shadow DOM la etiqueta creada (h3)
        this.shadowRoot.querySelector(`h3`).innerHTML = this.getAttribute(`name`)
        //imagen
        this.shadowRoot.querySelector("img").src = this.getAttribute("pict")
        //textos
        this.shadowRoot.querySelector(`p`).innerText = this.getAttribute(`life`)
        this.shadowRoot.querySelector(`h5`).innerText = this.getAttribute(`summon`)
    }
}
//definir la etiqueta
window.customElements.define("camper-card", CamperCard)