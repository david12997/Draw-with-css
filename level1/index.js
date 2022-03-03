'use strict'

const RenderGrapes = ()=>{

    let container = document.getElementById('container-grapes');

    for(let i =0; i<9;i++){

        container.innerHTML+=`
        
        <!--grape #-->
            
        <div class="grape ${ i === 7 && 'grape--2'} ${i === 6 && 'grape--3'} ${(i<=2 || (i>5 && i<8)) ? 'grape--color1':'grape--color2' }">

            <div class="containerEyes">

                <div class="eyes">
                    <div class="eyes__glow1"></div>
                    <div class="eyes__glow2"></div>
                </div>

                <div class="eyes">
                    <div class="eyes__glow1"></div>
                    <div class="eyes__glow2"></div>
                </div>


            </div>

            <div class="containerMouth">
                <div class="mouth">
                    <div class="mouth__tongue"></div>
                </div>
            </div>

        </div>
        

        <!--grape #-->
        
        `;
    }
}


RenderGrapes();