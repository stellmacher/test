import {generalmain_first} from "./main_firstModel";

const main_first = document.querySelector('#main_first');

let main_firstHtml = generalmain_first.map((a) => {
    return `
<div style="display:flex; padding-bottom: 50px;" class="body_1">
    <div class="text">
        <h1 style="color: black" class="partners">${a.text}</h1>
        <p style="font-weight: 500; color: black" class="partners1">${a.text2}</p>
        <button style="background-color: rgb(61, 179, 158); border-radius: 25px; height: 50px; width: 100px; border-color: rgb(61, 179, 158);">
            <a style="text-decoration: none; color: white;" href="#"> ${a.text3} </a>
        </button>
    </div>
    <div style="border-radius: 50%; padding-left: 50px; background-color: rdb(78, 101, 115)" class="ipad">
        <img src="../../assets/img/apple.png">
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-md-3">
            <img style="padding-left:50px; padding-bottom: 10px" src="../../assets/img/square2.png">
            <h1 style="font-size: 25px;
                       padding-left: 20px;">${a.h1_1_1}</h1>
            <p style="text-align: center;" >${a.p_1_1}</p>
        </div>
        <div class="col-md-3">
            <img style="padding-left:50px; padding-bottom: 10px; padding-top: 10px" src="../../assets/img/astronaft.png">
            <h1 style="font-size: 25px;
                        text-align: center;">${a.h1_1_2}</h1>
            <p style="text-align: center;">${a.p_1_2}</p>
        </div>
        <div class="col-md-3">
            <img style="padding-left:50px; padding-bottom: 10px; padding-top: 10px" src="../../assets/img/moon_rover.png">
            <h1 style="font-size: 25px;
                        text-align: center;">${a.h1_1_3}</h1>
            <p style="text-align: center;">${a.p_1_3}</p>
        </div>
        <div class="col-md-3">
            <img style="padding-left:50px; padding-bottom: 10px; padding-top: 10px" src="../../assets/img/astronaft2.png">
            <h1 style="font-size: 25px;
                        text-align: center;">${a.h1_1_4}</h1>
            <p style="text-align: center;">${a.p_1_4}</p>
        </div>
    </div>
</div>

<div style="background-color:rgb(72, 110, 133)" class="main">
    <img src="../../assets/img/main2.png">
</div>

<div style="padding-top: 50px" class="about">
    <h1 style="text-align: center; font-size: 25px;">${a.h1_2}</h1>
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div style="padding-top: 50px" class="col-md-4">
                <iframe width="400px" height="250px" src="https://www.youtube.com/embed/GNmTFLw9ub8" title="CODDY  Оксана Селендеева, Москва" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="social">
                    <p style="font-weight: 1000; text-align: center;">${a.p_2_1}</p>
                </div>
            </div>
            <div style="padding-top: 50px" class="col-md-4"> 
                <p>${a.p_2_2}</p>
                <p>${a.p_2_3}</p>

                <p style="font-weight: 1000; text-align: center;">${a.p_2_4}</p>
                <div style="padding-left: 50px; background-color: white;" class="button">
                    <button style="border-radius:25px;height: 50px; width: 300px; background-color: rgb(4, 147, 180); border-color: rgb(4, 132, 172);"><a href="#">${a.text3}</a></button>
                </div>
                
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</div>
    `
}).join(" ");

main_first.insertAdjacentHTML('beforeend', main_firstHtml);
