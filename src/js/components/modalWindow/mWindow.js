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
                <div style="padding: 30px 0 0 0;">
                    <a class="a1 text-light" href="">${a.btn1}</a>
                    <a class="a2 text-light" href="">${a.btn2}</a>
                    <a class="a3 text-light" href="">${a.btn3}</a>
                    <a class="a4 text-light" href="">${a.btn4}</a>
                    <a class="a5 text-light" href="">${a.btn5}</a>
                </div>
                </div>
                <div class="col-md-4">

                </div>
            </div>
        </div>
    </div>


    <style type="text/css">



    .a1{
        color:#fff; 
        background:#F08080;
        border-radius: 50%;
        padding: 10px 17px 10px 17px;
        text-decoration: none;
        tansition: all .3s linear;
        -webkit-transition: all .3s linear;
        -moz-transition: all .3s linear; 	
        text-transform: uppercase;
        border: solid 2px #CD5C5C;
        font-weight: 600;
    }
    .a1:hover {
        opacity: 0.7;
        tansition: all .3s linear;
        -webkit-transition: all .3s linear;
        -moz-transition: all .3s linear; 
    }   
    .a2{
        color:#fff; 
        background:LightSalmon;
        border-radius: 50%;
        padding: 10px 17px 10px 17px;
        text-decoration: none;
        tansition: all .3s linear;
        -webkit-transition: all .3s linear;
        -moz-transition: all .3s linear; 	
        text-transform: uppercase;
        border: solid 2px #FF7F50;
        font-weight: 600;
    }
    .a2:hover {
        opacity: 0.7;
        tansition: all .3s linear;
        -webkit-transition: all .3s linear;
        -moz-transition: all .3s linear; 
    }   
    .a3{
        color:#fff; 
        background:#ffd078;
        border-radius: 50%;
        padding: 10px 17px 10px 17px;
        text-decoration: none;
        tansition: all .3s linear;
        -webkit-transition: all .3s linear;
        -moz-transition: all .3s linear; 	
        text-transform: uppercase;
        border: solid 2px orange;
        font-weight: 600;
    }
    .a3:hover {
        opacity: 0.7;
        tansition: all .3s linear;
        -webkit-transition: all .3s linear;
        -moz-transition: all .3s linear; 
    }   
    .a4{
        color:#fff; 
        background: rgb(160, 218, 46);
        border-radius: 50%;
        padding: 10px 16px 10px 16px;
        text-decoration: none;
        tansition: all .3s linear;
        -webkit-transition: all .3s linear;
        -moz-transition: all .3s linear; 	
        text-transform: uppercase;
        border: solid 2px YellowGreen;
        font-weight: 600;
    }
    .a4:hover {
        opacity: 0.7;
        tansition: all .3s linear;
        -webkit-transition: all .3s linear;
        -moz-transition: all .3s linear; 
    }   
    .a5{
        color:#fff; 
        background:rgba(140, 184, 53, 0.873);
        border-radius: 50%;
        padding: 10px 16px 10px 16px;
        text-decoration: none;
        tansition: all .3s linear;
        -webkit-transition: all .3s linear;
        -moz-transition: all .3s linear; 	
        text-transform: uppercase;
        border: solid 2px rgb(132, 173, 61);
        font-weight: 600;
    }
    .a5:hover {
        opacity: 0.7;
        tansition: all .3s linear;
        -webkit-transition: all .3s linear;
        -moz-transition: all .3s linear; 
    }   
   </style>


    `
}).join(" ");

mwindow.insertAdjacentHTML('beforeend', mwindowHtml);