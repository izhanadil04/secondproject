function nonborder(){
    document.getElementById("search_input").style.outlineColor="white"
}
var product =[
[1,'The Hallmark of Elegance & Functionality','images/greeac1.jpg','Built-in WIFI Smartphone interface Quiet down to 19 dB(A) Multiple fan speeds Precise airflow control Swing louver control I-Feel function Remote & wired controller options',120000,'Gree'],
[2,'vireo r32 wall mount 2.5 Ton AC','images/greeac2.jpg','Auto Clean Dehumidification I-Feel functionality Self-diagnosis Multiple fan speeds Automatic voltage adaptation Low voltage start-up Swing louver control',150000,'Gree'],
[3,'The Future Of Environmental Efficiency','images/greeac3.jpg','4-Way discharge air Multiple fan speeds Swing louver control Automatic voltage adaption',310000,'Gree'],
[4,'Inverter Series HSU-19VRA22','images/haierac1.jpg','UVC Sterilization WiFi Control WiFi Control Smart Clean Smart Clean',130000,'Haier'],
[5,'UV PLUS T2 INVERTER','images/haierac3.jpg','Power Input (W)510 -3500 Running Current (A)2.4 -15.5 Refrigerant R32 Air Circulation (m3/h)1510',250000,'Haier'],
[6,'Air Conditioner HSU-19VQC22','images/haierac2.png','UVC Sterilization WiFi Control WiFi Control Smart Clean Smart Clean',250000,'Haier'],
[7,'Excel 1.5 Ton Silver Inverter Split AC','images/dawlanceac1.webp','Inverter Mono Split Cooling Capacity(Btu/h) 18000 BTU/h Function Reversible',170000,'Dawlance'],
[8,'Enercon X 1 Ton Inverter Split AC','images/dawlanceac2.webp','AC Inverter Mono Split Cooling Capacity (Btu/h) 12500 BTU/h Function Reversible Self Cleaning Yes',142000,'Dawlance'],
[9,'Gallant 2 Ton Inverter Floor Standing AC','images/dawlanceac3.png','Gold Fin Yes Self Cleaning Yes',373000,'Dawlance'],
[10,'PEL InverterOn Jumbo Black','images/pelac1.webp','(H&C) Air Conditioner (1 Ton & 2 Ton Wifi Available',146000,'Pel'],
[11,'PEL InverterOn Turbo DC T3','images/pelac3.webp','12K Turbo DC Ultimate T3 Range Capacity Cooling 1004(100~1182)W Range Current Cooling 4.5(1.1~5.4) ARated Current 9.0 ARange Capacity Heating 925(240~1083) W',139000,'Pel'],
[12,'PEL Regal Air Conditioner','images/pelac2.webp','Regal (Heat & Cool) 2.0 Ton Rated Capacity Cooling 7100 Rated Running Current Cooling 14.5 W Maximum Current 19 A Rated Power Cooling 2500 W Maximum Power 4000 W',28400,'Pel'],
[13,'2 Ton Ultron SUPER eComfort Mirror Black DC Inverter','images/orientac3.webp','T3 tropicalized inverter Japanese PCB Kit Auto Pilot Optimized compressor drive Low voltage operation 70V',255000,'Orient'],
[14,'1 Ton Ultron MEGA eComfort DC Inverter','images/oreintac1.webp','T3 tropicalized inverter Japanese PCB Kit Auto Pilot Optimized compressor drive Low voltage operation 70V 100% pure copper',133000,'Orient'],
[15,'4 Ton ULTIMATE Silk White H/C','images/orientstandac.webp','on-inverter technology Energy efficient technology R410 Eco friendly refrigerant Heat & Cool 4D air flow',410000,'Orient']
]
var gree="";
var haier="";
var dawlance="";
var pel="";
var orient="";
var brands =[];
for (var iterator of product){
    if(brands.includes(iterator[5])){
    }else{
        brands.push(iterator[5])
    }
    if(iterator[5] == "Gree"){
        gree +=`
    <div  class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-4 d-flex justify-content-center">
    <div class="card" style="width: 16rem;">
        <img src="${iterator[2]}"class="card-img-top" alt="..." style="hight:100px;">
            <div class="card-body">
            <h6 class="card-title">${iterator[1]}</h6>
              <p class="card-text fw-bold">Rs.${iterator[4]}</p>
            <a id="bookbtn" href="detail.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}"class="btn btn-dark rounded-pill d-flex justify-content-center">See Detail</a>
            </div>
        </div>
    </div>
`
    }
    if(iterator[5] == "Haier"){
        haier +=`<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-4 d-flex justify-content-center">
    <div class="card" style="width: 16rem;">
        <img src="${iterator[2]}" class="card-img-top" alt="..." style="hight:100px;">
            <div class="card-body">
            <h6 class="card-title">${iterator[1]}</h6>
              <p class="card-text fw-bold">Rs.${iterator[4]}</p>
            <a id="bookbtn" href="detail.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}" class="btn btn-dark rounded-pill d-flex justify-content-center">See Detail</a>
            </div>
        </div>
    </div>`

    }
    if(iterator[5] == "Dawlance"){
        dawlance +=`<div  class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-4 d-flex justify-content-center">
    <div class="card" style="width: 16rem;">
        <img src="${iterator[2]}" class="card-img-top" alt="..." style="hight:100px;">
            <div class="card-body">
            <h6 class="card-title">${iterator[1]}</h6>
              <p class="card-text fw-bold">Rs.${iterator[4]}</p>
            <a id="bookbtn" href="detail.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}"class="btn btn-dark rounded-pill d-flex justify-content-center">See Detail</a>
            </div>
        </div>
    </div>`
    }
    if(iterator[5]== "Pel"){
        pel +=`<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-4 d-flex justify-content-center">
    <div class="card" style="width: 16rem;">
        <img src="${iterator[2]}" class="card-img-top" alt="..." style="hight:100px;">
            <div class="card-body">
            <h6 class="card-title">${iterator[1]}</h6>
              <p class="card-text fw-bold">Rs.${iterator[4]}</p>
            <a id="bookbtn" href="detail.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}" class="btn btn-dark rounded-pill d-flex justify-content-center">See Detail</a>
            </div>
        </div>
    </div>`
    }
    if(iterator[5]== "Orient"){
        orient +=`<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3 d-flex justify-content-center">
    <div class="card" style="width: 16rem;">
        <img src="${iterator[2]}" class="card-img-top" alt="..." style="hight:100px;">
            <div class="card-body">
            <h6 class="card-title">${iterator[1]}</h6>
              <p class="card-text fw-bold">Rs.${iterator[4]}</p>
            <a id="bookbtn" href="detail.html?desc=${iterator[3]}&Product_ID=${iterator[0]}&Product_Name=${iterator[1]}&Product_Img=${iterator[2]}&Product_Price=${iterator[4]}"class="btn btn-dark rounded-pill d-flex justify-content-center">See Detail</a>
            </div>
        </div>
    </div>`
    }

}
document.getElementById("productListing_gree").innerHTML = gree
document.getElementById("productListing_haier").innerHTML = haier
document.getElementById("productListing_dawlance").innerHTML = dawlance
document.getElementById("productListing_pel").innerHTML = pel
document.getElementById("productListing_orient").innerHTML = orient

var listing = "";
for (var list of brands) {
    listing +=`
                 <li><a id="color" class="dropdown-item" href="products.html?category=${list}">${list}</a></li>   
        `
}
document.getElementById("productlisting").innerHTML = listing

