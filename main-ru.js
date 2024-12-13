
const menuIcon = document.getElementById('menu-icon');
const header = document.querySelector('header');

menuIcon.addEventListener('click', function() {
    header.classList.toggle('menu-active');
    

    if (!header.classList.contains('menu-active')) {
        document.querySelector('.hnav').style.display = 'none';
    } else {
        document.querySelector('.hnav').style.display = 'flex';
    }
});








fetch('https://serverstore.pythonanywhere.com/api/v1/products/').then(res=>res.json()).then((res)=>{



    
    const s2_tovars = document.getElementById('s2tovs')
    


function cr_element(){
    for(i=0; i<12;i++){
        
    
 
        let main_div = document.createElement('div')
        let tovar_img = document.createElement('img')
        let tovar_p = document.createElement('p')
        let tovar_btn = document.createElement('button')

  
        main_div.classList.add('tovar')
        tovar_img.classList.add('timg')
        tovar_p.classList.add('tp')
        tovar_btn.classList.add('btn1')
    
    
        main_div.append(tovar_img,tovar_p,tovar_btn)
        s2_tovars.appendChild(main_div)

      
        
        tovar_img.src = res.results[i].image_file
        tovar_p.innerHTML = res.results[i].name
        if (tovar_p.innerHTML.length > 60) {
            tovar_p.innerHTML = tovar_p.innerHTML.substring(0, 60);
        }
        tovar_btn.innerHTML = 'ПОДРОБНЕЕ'
        tovar_btn.style.fontFamily = 'Inter'



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


    let modal_img = document.getElementById('modalimg')
    let modal_h1 = document.getElementById('modalh1')
    let modal_p1 = document.getElementById('modalp1')
    let modal_p2 = document.getElementById('modalp2')
    let modal_p3 = document.getElementById('modalp3')
    
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); // Minglar ajratish
    }
    
    function addPercentage(price, percentage) {
        const addedAmount = price * (percentage / 100);
        return price + addedAmount;
    }
    // Modalni ochish uchun funktsiya
    
    
    function handleModalOpen(buttonIndex) {
        const tovarId = res.results[buttonIndex].id;
        const url = `tovar${tovarId}.html`;
    
        // Modal kontentini yangilash funksiyasi
        function updateModalContent() {
            modal.style.display = "block"; // Modalni ko'rsatish
    
            modal_img.src = res.results[buttonIndex].image_file;
            modal_h1.innerHTML = res.results[buttonIndex].model_name;
            modal_p1.innerHTML = res.results[buttonIndex].name;
    
            // Raqqamni to'g'ri formatlash va chiqarish
            let narx = parseInt(res.results[buttonIndex].price);
            modal_p2.innerHTML = formatNumber(narx) + ' Som'; 
    
            let skidka_narx = addPercentage(narx, 40); // Narxga 40% qo'shish
            skidka_narx = Math.round(skidka_narx);
            modal_p3.innerHTML = formatNumber(skidka_narx) + ' Som';
        }
    
        // Tovar sahifasi mavjudligini tekshirish
        fetch(url, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    // Agar sahifa mavjud bo'lsa, unga o'tish
                    window.location.href = url;
                } else {
                    // Aks holda, modalni ko'rsatish
                    updateModalContent();
                }
            })
            .catch(error => {
                // Xato yuz bersa ham, modalni ko'rsatish
                updateModalContent();
            });
    }
    
    // Har bir tugma uchun hodisalarni o'rnatish
    for (let i = 0; i <= 11; i++) {
        const button = document.getElementById(`openModalBtn${i}`);
        if (button) {
            button.onclick = function() {
                handleModalOpen(i);
            };
        }
    }


closeBtn.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


}

cr_element()



})
