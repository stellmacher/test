import { generalmain_second } from "./main_secondModel";

const main_second = document.querySelector('#main_second');

let main_secondHtml = generalmain_second.map((a) => {
    return `
    
        <div class="modal__body">
            <div> 
                <p style="font-size: 25px; font-weight: 700; color: rgb(62, 62, 255);">${a.text}</p>
            </div>     
            <div>
                <p style="color: black">${a.p_2}</p>
            </div>   
            <div style="padding-top: 20px">
            
                <button style="background-color:rgb(255, 94, 34);border-radius: 25px; height: 50px; width: 300px; border: none; box-shadow: inset 0px -5px 0px 0px rgb(243, 37, 18)">
                    <a href="https://yandex.ru/maps/org/coddy/1796824613/reviews/?ll=37.665976%2C55.759202&z=14">${a.button_1}</a>
                </button> 
            </div>   
            <div style="padding-top: 20px">
                <button style="background-color:rgb(183, 71, 70);border-radius: 25px; height: 50px; width: 300px; border: none; box-shadow: inset 0px -5px 0px 0px rgb(157, 44, 43)">
                    <a href="https://otzovik.com/reviews/detskaya_shkola_programmirovaniya_coddy/?&capt4a=02d2d663bfa4d0d6bf66029ccdabd59fce62">${a.button_2}</a>
                </button>
            </div>   
            <div style="padding-top: 20px">
                <button style="background-color:rgb(162, 198, 20);border-radius: 25px; height: 50px; width: 300px; border: none; box-shadow: inset 0px -5px 0px 0px rgb(132, 161, 17)">
                    <a href="https://2gis.ru/moscow/firm/70000001024034010/tab/reviews?writeReview">${a.button_3}</a>
                </button>
            </div>   

            <div style="padding-top: 20px">
                <button style="background-color:rgb(61, 143, 243);border-radius: 25px; height: 50px; width: 300px; border: none; box-shadow: inset 0px -5px 0px 0px rgb(35, 107, 193)">
                    <a href="https://www.google.com/search?hl=ru-RU&gl=ru&q=%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0+%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+Coddy,+%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9+%D0%A1%D1%83%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%BF%D0%B5%D1%80.,+5,+%D1%81%D1%82%D1%80.+19,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+105064&ludocid=10356070423493321921&lsig=AB86z5VTj_T7swasKlCsRAp6wWNs&pli=1#pli=1">${a.button_4}</a>
                </button>
            </div>   
            <div style="padding-top: 20px">
                <button style="background-color:rgb(81, 129, 184);border-radius: 25px; height: 50px; width: 300px; border: none; box-shadow: inset 0px -5px 0px 0px rgb(63, 138, 224)">
                    <a href="https://vk.com/topic-118462431_35942492">${a.button_5}</a>
                </button>
            </div>
            <p style="color: black">${a.p_3}</p>
        </div> 
    
    
    `
}).join(" ");

main_second.insertAdjacentHTML('beforeend', main_secondHtml);