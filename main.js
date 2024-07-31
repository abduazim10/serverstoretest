const leftBtn = document.getElementById('left');
const rightbBtn = document.getElementById('right');


const a = document.getElementById('swipea')
const image = document.getElementById('img1');
const rasmlar = ['./img/Banner 1-01.jpg', './img/Banner 2-01.jpg', './img/Banner 3-01.jpg' , './img/Server-01.jpg'];
const num = document.getElementById('number');
const linklar = ['https://www.instagram.com/serverstore_uz?igsh=aDk2ZW82bXI2MTJy','https://youtube.com/@server_store?si=Puv0deeLdw3MUrJy  ','https://www.facebook.com/profile.php?id=61559339369006','https://t.me/Serverstoreuz']




// chap ong button lar uchun
let active = 0;
const changeSlide = (direction) => {
    active += direction;

    if (active < 0) active = rasmlar.length - 1;
    if (active >= rasmlar.length) active = 0;
    image.src = rasmlar[active];

    if (active < 0) active = linklar.length - 1;
    if (active >= linklar.length) active = 0;
    a.href = linklar[active]
}
leftBtn.onclick = () => changeSlide(-1);
rightbBtn.onclick = () => changeSlide(1);








// Api bilan ishlash

fetch('https://serverstore.pythonanywhere.com/api/v1/products/').then(res=>res.json()).then((res)=>{
    console.log(res)
})




//Api uchun function:
const s2_tovars = document.getElementById('s2tovs')



function cr_element(){
    for(i=0; i<21;i++){
        //create element
        let main_div = document.createElement('div')
        let tovar_img = document.createElement('img')
        let tovar_p = document.createElement('p')
        let tovar_btn = document.createElement('tovar')

        //class
        main_div.classList.add('tovar')
        tovar_img.classList.add('timg')
        tovar_p.classList.add('tp')
        tovar_btn.classList.add('btn1')
    
        //append
        main_div.append(tovar_img,tovar_p,tovar_btn)
        s2_tovars.appendChild(main_div)

        //innerHTML
        
        tovar_img.src = res.results.image_url


        i+1
    }
    


}