import {generalmain_second} from "./main_secondModel";

const main_second = document.querySelector('#main_second');

let main_secondHtml = generalmain_second.map((a) => {
    return `
    <div class="modal__body">
        <div> 
            <h1 style="color:rgb(0, 150, 188)">${a.text}</h1>
        </div>     
        <div>
            <p style="color: black">${a.p_1} <br> ${a.p_4}</p>
            <p style="color: black">${a.p_2}</p>
        </div>   
        <div style="padding-top: 20px">
        
            <button style="background-color:rgb(255, 94, 34);border-radius: 25px; height: 50px; width: 300px; border: none; box-shadow: inset 0px -5px 0px 0px rgb(243, 37, 18)">
                <a href="#">${a.button_1}</a>
            </button> 
        </div>   
        <div style="padding-top: 20px">
            <button style="background-color:rgb(183, 71, 70);border-radius: 25px; height: 50px; width: 300px; border: none; box-shadow: inset 0px -5px 0px 0px rgb(157, 44, 43)">
                <a href="#">${a.button_2}</a>
            </button>
        </div>   
        <div style="padding-top: 20px">
            <button style="background-color:rgb(162, 198, 20);border-radius: 25px; height: 50px; width: 300px; border: none; box-shadow: inset 0px -5px 0px 0px rgb(132, 161, 17)">
                <a href="#">${a.button_3}</a>
            </button>
        </div>   
        <div style="padding-top: 20px">
            <button style="background-color:rgb(61, 143, 243);border-radius: 25px; height: 50px; width: 300px; border: none; box-shadow: inset 0px -5px 0px 0px rgb(35, 107, 193)">
                <a href="#">${a.button_4}</a>
            </button>
        </div>   
        <div style="padding-top: 20px">
            <button style="background-color:rgb(81, 129, 184);border-radius: 25px; height: 50px; width: 300px; border: none; box-shadow: inset 0px -5px 0px 0px rgb(63, 138, 224)">
                <a href="#">${a.button_5}</a>
            </button>
        </div>
        <p style="color: black">${a.p_3}</p>
    </div>  
    
    `
}).join(" ");

main_second.insertAdjacentHTML('beforeend', main_secondHtml);