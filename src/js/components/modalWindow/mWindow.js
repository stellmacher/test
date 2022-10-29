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
                                        <a class="a1 text-light" href="">${a.btn1}</a>
                                        <a class="a2 text-light" href="">${a.btn2}</a>
                                        <a class="a3 text-light" href="">${a.btn3}</a>
                                        <a class="a4 text-light" href="">${a.btn4}</a>
                                        <a class="a5 text-light" href="">${a.btn5}</a>
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
    
    
    
    
    
    #overlay {
        position: fixed;
        top: 0;
        left: 0;
        display: none;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.65);
        z-index: 999;
        -webkit-animation: fade .6s;
        -moz-animation: fade .6s;
        animation: fade .6s;
        overflow: auto;
    }
    
    .popup {
        top: 25%;
        left: 0;
        right: 0;       
        font-size: 14px;
        margin: auto;
        width: 85%;
        min-width: 320px;
        max-width: 600px;
        position: absolute;
        padding: 15px 20px;
        border: 1px solid #383838;
        background: #fefefe;
        z-index: 1000;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -ms-border-radius: 4px;
        border-radius: 4px;
        font: 14px/18px 'Tahoma', Arial, sans-serif;
        -webkit-box-shadow: 0 15px 20px rgba(0,0,0,.22),0 19px 60px rgba(0,0,0,.3);
        -moz-box-shadow: 0 15px 20px rgba(0,0,0,.22),0 19px 60px rgba(0,0,0,.3);
        -ms-box-shadow: 0 15px 20px rgba(0,0,0,.22),0 19px 60px rgba(0,0,0,.3);
        box-shadow: 0 15px 20px rgba(0,0,0,.22),0 19px 60px rgba(0,0,0,.3);
        -webkit-animation: fade .6s;
        -moz-animation: fade .6s;
        animation: fade .6s;
    }
    
    
    .close {
        top: 10px;
        right: 10px;
        width: 32px;
        height: 32px;
        position: absolute;
        border: none;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        border-radius: 50%;
        background-color: rgba(0, 131, 119, 0.9);
        -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        cursor: pointer;
        outline: none;
     
    }
    .close:before {
        color: rgba(255, 255, 255, 0.9);
        content: "X";
        font-family:  Arial, Helvetica, sans-serif;
        font-size: 14px;
        font-weight: normal;
        text-decoration: none;
        text-shadow: 0 -1px rgba(0, 0, 0, 0.9);
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        transition: all 0.5s;
    }
    /* кнопка закрытия при наведении */
    .close:hover {
        background-color: rgba(252, 20, 0, 0.8);
    }
   </style>

    `
}).join(" ");

mwindow.insertAdjacentHTML('beforeend', mwindowHtml);