'use strict'

const Hair = ()=>{

    let hair = document.getElementById('hair');

    for(let i =0; i < 24; i++){

        hair.innerHTML+=`

            <div class="hairBackground__shapeHair hairBackground__shapeHair--${i}"></div>
        `;

    }

}

const Main = ()=>{

    Hair();
}

window.addEventListener('load',Main);