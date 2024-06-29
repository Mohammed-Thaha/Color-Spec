let image_upload = document.getElementById("image_upload");
let input_btn = document.getElementById("input-file");
// let delete_btn=
//mt-->Mohammed Thaha
const color_picker_btn = document.getElementById("color_picker");
const delete_btn = document.getElementById("refresh_button");
function isWhiteHex(hex) {
    // Remove any leading # if present
    hex = hex.replace("#", "");
    return hex.toUpperCase() === "FFFFFF";
}

if (!window.EyeDropper) {
  alert("Your browser Does not support EyeDropper");
}

input_btn.onchange = function () {
  //created by mt
  image_upload.src = URL.createObjectURL(input_btn.files[0]);
  this.value = null;
};
let text_show = document.getElementById("text"); //result text mt
const image_container = document.getElementById("image_container");

// console.log(image_container);

const h3 = document.querySelector("h3");

//created using mdn documentation

const color_picker = async () => {
  const ed = new EyeDropper(); //i have create a nex object mt
  const { sRGBHex } = await ed.open();

  text_show.innerHTML = "The Color You Pick:";
  if(isWhiteHex(sRGBHex)){
  h3.innerHTML = sRGBHex;
  h3.style.backgroundColor="black";
  h3.style.color = sRGBHex;
  }else{
    h3.innerHTML = sRGBHex;
    h3.style.color = sRGBHex;
  }
};

color_picker_btn.addEventListener("click", color_picker);
delete_btn.addEventListener("click",()=>{
    location.reload();
})
function display(){
    const menu=document.querySelector(".menu-bar");//menu icon
        //console.log(menu);
        const menulist=document.querySelector(".menu");//list of menus
        //console.log(menulist)
        menu.addEventListener("click",()=>{
        menulist.classList.toggle("showmenu");});
}
display();

//created by mt
