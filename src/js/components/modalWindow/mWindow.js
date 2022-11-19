import {generalmwindow} from "./mWindowModal";

const mwindow = document.querySelector('#mwindow');

let mwindowHtml = generalmwindow.map((a) => {
    return `
    
    <div id="overlay">
       <div class="popup" style="width: 650px;height: 400px;border-radius: 20px;background-color: #f2f3f4;">
           <div class="main" >
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12" style="height: 350px; padding: 50px 0 50px 50px;">
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
                                    <div style="padding: 30px 0 0 0;">
                                    <button style="cursor: pointer; border: 1px solid transparent; background-color: transparent; " onclick="document.getElementById('overlay').style.display='none';"><a class="a1 text-light"" href="#win123" class="button button-blue">${a.btn1}</a></button>
                                    <button style="cursor: pointer; border: 1px solid transparent; background-color: transparent; " onclick="document.getElementById('overlay').style.display='none';"><a class="a2 text-light" href="#win123" class="button button-blue">${a.btn2}</a></button>
                                    <button style="cursor: pointer; border: 1px solid transparent; background-color: transparent; " onclick="document.getElementById('overlay').style.display='none';"><a class="a3 text-light" href="#win123" class="button button-blue">${a.btn3}</a></button>
                                    <button style="cursor: pointer; border: 1px solid transparent; background-color: transparent; " onclick="document.getElementById('overlay').style.display='none';"><a class="a4 text-light" href="#win45" class="button button-blue">${a.btn4}</a></button>
                                    <button style="cursor: pointer; border: 1px solid transparent; background-color: transparent; " onclick="document.getElementById('overlay').style.display='none';"><a class="a5 text-light" href="#win45" class="button button-blue">${a.btn5}</a></button>
                                    </div>

                                </div>
                            </div>
                            <button class="close" title="Закрыть"
                                onclick="document.getElementById('overlay').style.display='none';">
                            </button>
                    </div>
               </div>

               
        </div>
    </div>


    `
}).join(" ");

mwindow.insertAdjacentHTML('beforeend', mwindowHtml);