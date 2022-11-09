import { generaltop_first } from "./top_firstModal";

const top_first = document.querySelector('#top_first');

let top_firstHtml = generaltop_first.map((a) => {
    return `
    <div class="modal__body">
        <div class="container">
            <div class="row">
                <div class="Coddy_text" style="display: flex; justify-content:center; text-align: center;">
                    <p  style="font-size: 25px; font-weight: 700; color: rgb(62, 62, 255);">${a.text1}</p>
                </div>

                <div class="feedback_coddy">
                    <h5 class="feedback_text" style="font-weight: 400; color: black; color: #292929; font-size: 15px; padding: 20px 0;">${a.text2}</h5>
                </div>

                <div class="questions_Coddy_text" >
                    <form action="text"></form>
                        <p><textarea name="comment" cols="40" rows="3" style: background-color: transparent; >${a.text3}</textarea></p>
                    </form>
                </div>

                <div class="quastians">
                    <h5 class="quastians-text" style="padding: 20px 0; font-size: 15px; color: #292929;">${a.text4} <a href="#" style="color: #00008B;">${a.text5}</a></h5>
                </div>

                <div class="privacy_coddy" style="display: flex;">
                    <div>
                        <input type="checkbox" id="yes" name="yes" checked>
                    </div>
                    
                    <p class="privacy_text" style="display: flex; font-size: 10px; color: #292929;">${a.text6} <a href="#" style="color: #00008B;">${a.text7}</a> ${a.text8}<a href="#" style="color: #00008B;">${a.text9}</a></p>
                </div>

                <button style="width: 150px; background-color: #00FF00; margin: 20px 15px; border-radius: 15px; border-style: none; border-width: 0; border-color: transparent;"><a href="#" style="font-size: 15px; display:flex; color: whitesmoke;">${a.text10}</a></button>
            </div>
        </div>
    </div>
    `
}).join(" ");

top_first.insertAdjacentHTML('beforeend', top_firstHtml);