fetch('https://serverstore.pythonanywhere.com/api/v1/products/').then(res=>res.json()).then((res)=>{
    function mahsulot_page1() {
        
        let s2_tovars = document.querySelector('.s2tovs')
        function formatNumber(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); // Minglar ajratish
        }
        
        function addPercentage(price, percentage) {
            const addedAmount = price * (percentage / 100);
            return price + addedAmount;
        }
        
       
        counts = 0
        for (i=0; i<500; i++){
            if (res.results[i].model_name == 'HPE'){
                counts = counts+1
                
                
                
                
  
                let main_div = document.createElement('div')
                let tovar_img = document.createElement('img')
                let tovar_p = document.createElement('p')
                let tovar_btn = document.createElement('button')

                

  
                main_div.classList.add('tovar')
                tovar_img.classList.add('timg')
                tovar_p.classList.add('tp')
                tovar_btn.classList.add('btn1')
                
                tovar_btn.id = ''

                
  
                main_div.append(tovar_img,tovar_p,tovar_btn)
                s2_tovars.appendChild(main_div)


                
                tovar_img.src = res.results[i].image_file
                tovar_p.innerHTML = res.results[i].name
                if (tovar_p.innerHTML.length > 60) {
                    tovar_p.innerHTML = tovar_p.innerHTML.substring(0, 60);
                }
                tovar_btn.innerHTML = 'ПОДРОБНЕЕ'
                tovar_btn.style.fontFamily = 'Inter'

                tovar_btn.id = i
                var modal = document.getElementById("productModal");
        
        
                var closeBtn = document.getElementsByClassName("closeBtn")[0];
                let modal_img = document.getElementById('modalimg')
                let modal_h1 = document.getElementById('modalh1')
                let modal_p1 = document.getElementById('modalp1')
                // let modal_p2 = document.getElementById('modalp2')
                // let modal_p3 = document.getElementById('modalp3')

                tovar_btn.addEventListener('click' ,()=>{
                    
                    for (i=0;i<201;i++){
                        if(tovar_btn.id == i){
                        
                        

                            modal.style.display = "block";
                            modal_img.src = res.results[i].image_file
                            modal_h1.innerHTML = res.results[i].model_name
                            modal_p1.innerHTML = res.results[i].name
                            let narx = parseInt(res.results[i].price);
                            // modal_p2.innerHTML = formatNumber(narx) + ' Som'; 

                            let skidka_narx = addPercentage(narx, 40); // Narxga 40% qo'shish
                            skidka_narx = Math.round(skidka_narx);
                            // modal_p3.innerHTML = formatNumber(skidka_narx) + ' Som';
                        }
                    }
                    
                });
    
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                }

    
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }   
    }

    mahsulot_page1()
})