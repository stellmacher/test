import {generalmwindow} from "./mWindowModal";

const mwindow = document.querySelector('#mwindow');

let mwindowHtml = generalmwindow.map((a) => {
    return `
    <div class="modalWindow" style="width: 650px;height: 400px;border-radius: 20px;background-color: #f2f3f4;">
        <div class="container">
            <div class="row">
                <div class="col-md-8" style="height: 350px; padding: 50px 0 50px 50px;">
                    <h1 style="color: rgb(62, 62, 255); font-size: 25px; padding: 0 0 45px 0; font-weight: 700;">${a.text1}</h1>
                    <p style="color: #292929; font-size: 15px;">
                        ${a.text2}
                    </p>
                    <p style="color: #292929; font-size: 15px; padding: 0 0 10px 0;">
                        ${a.text3}
                    </p>
                    <p style="color: rgb(62, 62, 255); font-weight: 700;">
                        ${a.text4}  
                    </p>
                </div>
                <div class="col-md-4">

                </div>
            </div>
        </div>
    </div>
    `
}).join(" ");

mwindow.insertAdjacentHTML('beforeend', mwindowHtml);