const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slide');
let currentIndex = 0;

// Function to calculate slide width dynamically
const changeSlide = (direction) => {
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;

    const slideWidth = images[0].offsetWidth; // Calculate the current slide width dynamically
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

// Add event listeners for the buttons
leftBtn.addEventListener('click', () => changeSlide(-1));
rightBtn.addEventListener('click', () => changeSlide(1));

// Automatically change slides every 5 seconds
setInterval(() => changeSlide(1), 5000);

// Optional: handle window resize to recalculate slide position
window.addEventListener('resize', () => {
    const slideWidth = images[0].offsetWidth; // Recalculate the slide width on window resize
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

const menuIcon = document.getElementById('menu-icon');
const header = document.querySelector('header');

menuIcon.addEventListener('click', function() {
    header.classList.toggle('menu-active');
    
    // Hide menu if it's open when clicked again
    if (!header.classList.contains('menu-active')) {
        document.querySelector('.hnav').style.display = 'none';
    } else {
        document.querySelector('.hnav').style.display = 'flex';
    }
});






// Api bilan ishlash

fetch('https://serverstore.pythonanywhere.com/api/v1/products/').then(res=>res.json()).then((res)=>{
    console.log(res)


    //Api uchun function:
    const s2_tovars = document.getElementById('s2tovs')
    


function cr_element(){
    for(i=0; i<12;i++){
        
    
        //create element
        let main_div = document.createElement('div')
        let tovar_img = document.createElement('img')
        let tovar_p = document.createElement('p')
        let tovar_btn = document.createElement('button')

        //class
        main_div.classList.add('tovar')
        tovar_img.classList.add('timg')
        tovar_p.classList.add('tp')
        tovar_btn.classList.add('btn1')
    
        //append
        main_div.append(tovar_img,tovar_p,tovar_btn)
        s2_tovars.appendChild(main_div)

        //innerHTML
        
        tovar_img.src = res.results[i].image_file
        tovar_p.innerHTML = res.results[i].name
        tovar_btn.innerHTML = 'ПОДРОБНЕЕ'
        tovar_btn.style.fontFamily = 'Inter'

        //id

        tovar_btn.id = 'openModalBtn'+i

        var modal = document.getElementById("productModal");
        var openModalBtn0 = document.getElementById("openModalBtn0");
        var openModalBtn1 = document.getElementById("openModalBtn1");
        var openModalBtn2 = document.getElementById("openModalBtn2");
        var openModalBtn3 = document.getElementById("openModalBtn3");
        var openModalBtn4 = document.getElementById("openModalBtn4");
        var openModalBtn5 = document.getElementById("openModalBtn5");
        var openModalBtn6 = document.getElementById("openModalBtn6");
        var openModalBtn7 = document.getElementById("openModalBtn7");
        var openModalBtn8 = document.getElementById("openModalBtn8");
        var openModalBtn9 = document.getElementById("openModalBtn9");
        var openModalBtn10 = document.getElementById("openModalBtn10");
        var openModalBtn11 = document.getElementById("openModalBtn11");
        
        var closeBtn = document.getElementsByClassName("closeBtn")[0];
        
    }
    // Modal elementlarini olish

    let modal_img = document.getElementById('modalimg')
    let modal_h1 = document.getElementById('modalh1')
    let modal_p1 = document.getElementById('modalp1')
    let modal_p2 = document.getElementById('modalp2')
// Modalni ochish
openModalBtn0.onclick = function() {
    modal.style.display = "block";
    modal_img.src = res.results[0].image_file
    modal_h1.innerHTML = res.results[0].model_name
    modal_p1.innerHTML = res.results[0].name
    modal_p2.innerHTML = res.results[0].price -'.00' + ' Som'
}
openModalBtn1.onclick = function() {
    modal.style.display = "block";
    modal_img.src = res.results[1].image_file
    modal_h1.innerHTML = res.results[1].model_name
    modal_p1.innerHTML = res.results[1].name
    modal_p2.innerHTML = res.results[1].price -'.00' + ' Som'

}
openModalBtn2.onclick = function() {
    modal.style.display = "block";
    modal_img.src = res.results[2].image_file
    modal_h1.innerHTML = res.results[2].model_name
    modal_p1.innerHTML = res.results[2].name
    modal_p2.innerHTML = res.results[2].price -'.00' + ' Som' 

}
openModalBtn3.onclick = function() {
    modal.style.display = "block";
    modal_img.src = res.results[3].image_file
    modal_h1.innerHTML = res.results[3].model_name
    modal_p1.innerHTML = res.results[3].name
    modal_p2.innerHTML = res.results[3].price -'.00' + ' Som'

}
openModalBtn4.onclick = function() {
    modal.style.display = "block";
    modal_img.src = res.results[4].image_file
    modal_h1.innerHTML = res.results[4].model_name
    modal_p1.innerHTML = res.results[4].name
    modal_p2.innerHTML = res.results[4].price -'.00' + ' Som'

}
openModalBtn5.onclick = function() {
    modal.style.display = "block";
    modal_img.src = res.results[5].image_file
    modal_h1.innerHTML = res.results[5].model_name
    modal_p1.innerHTML = res.results[5].name
    modal_p2.innerHTML = res.results[5].price -'.00' + ' Som'

}
openModalBtn6.onclick = function() {
    modal.style.display = "block";
    modal_img.src = res.results[6].image_file
    modal_h1.innerHTML = res.results[6].model_name
    modal_p1.innerHTML = res.results[6].name
    modal_p2.innerHTML = res.results[6].price  -'.00' + ' Som'

}
openModalBtn7.onclick = function() {
    modal.style.display = "block";
    modal_img.src = res.results[7].image_file
    modal_h1.innerHTML = res.results[7].model_name
    modal_p1.innerHTML = res.results[7].name
    modal_p2.innerHTML = res.results[7].price -'.00' + ' Som'

}
openModalBtn8.onclick = function() {
    modal.style.display = "block";
    modal_img.src = res.results[8].image_file
    modal_h1.innerHTML = res.results[8].model_name
    modal_p1.innerHTML = res.results[8].name
    modal_p2.innerHTML = res.results[8].price -'.00' + ' Som'

}
openModalBtn9.onclick = function() {
    modal.style.display = "block";
    modal_img.src = res.results[9].image_file
    modal_h1.innerHTML = res.results[9].model_name
    modal_p1.innerHTML = res.results[9].name
    modal_p2.innerHTML = res.results[9].price -'.00' + ' Som'

}
openModalBtn10.onclick = function() {
    modal.style.display = "block";
    modal_img.src = res.results[10].image_file
    modal_h1.innerHTML = res.results[10].model_name
    modal_p1.innerHTML = res.results[10].name
    modal_p2.innerHTML = res.results[10].price -'.00' + ' Som'

}
openModalBtn11.onclick = function() {
    modal.style.display = "block";
    modal_img.src = res.results[11].image_file
    modal_h1.innerHTML = res.results[11].model_name
    modal_p1.innerHTML = res.results[11].name
    modal_p2.innerHTML = res.results[11].price -'.00' + ' Som'

}

// Modalni yopish
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Modaldan tashqariga bosilganda yopish
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


}

cr_element()



})
