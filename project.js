let load=document.getElementById("load");
let input= document.getElementById('input');
let page=1;
let button=document.getElementById('btn')

button.addEventListener("click",()=> {
let keyword=input.value.trim();
let url=`https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=cCuJpa6_vb4-yfmCBUVOj0gw1GzMeYiUoHVwQu4iTFY&per_page=15` ;
console.log(url);

load.style.display="block";
fetch(url).then((res) => res.json()).then((data) => {
       let images = data.results;
        let imagesContainer = document.getElementById('images')
        imagesContainer.innerHTML ='';

        images.forEach((image) => {
            let img = document.createElement('img')
            img.src = image.cover_photo.urls.raw;
            img.style="margin-top:2%; width:100%; max-width:100%; transition: all 0.5s";
            img.style.hover="scale:110%"; 
            imagesContainer.appendChild(img)
        });
        
         
    })
          .catch((err) => {
          console.error(err);
          });
   
})  ;

let more=document.getElementById("more");
more.addEventListener("click",()=>{
    page++;

let keyword=input.value.trim();
let url=`https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=cCuJpa6_vb4-yfmCBUVOj0gw1GzMeYiUoHVwQu4iTFY&per_page=12` ;
console.log(url);
fetch(url).then((res) => res.json()).then((data) => {
       let images = data.results;
        let imagesContainer = document.getElementById('images')
        imagesContainer.innerHTML ='';

        images.forEach((image) => {
            let img = document.createElement('img')
            img.src = image.cover_photo.urls.raw;
            img.style="margin-top:2%; width:100%; max-width:100%; transition: all 0.5s";
            img.style.hover="scale:110%"; 
            imagesContainer.appendChild(img)
        });
        
         
    })
          .catch((err) => {
          console.error(err);
          });
   
})  ;
   