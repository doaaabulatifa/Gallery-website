const thumbcontainer = document.getElementById("thumbcon");
const displayImage = document.getElementById("display");
const bodyBackground = document.getElementById("body");
const audioPlayer = document.getElementById('audioPlayer');
const birdImg =[
    {url:"https://images.unsplash.com/photo-1480044965905-02098d419e96?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt:"yellow bird"},
{url:"https://images.unsplash.com/photo-1551647064-ad28089c98e8?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt:"bird"},
{url:"https://images.unsplash.com/photo-1520638023360-6def43369781?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt:"bird"},
{url:"https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt:"bird"},
{url:"https://images.unsplash.com/photo-1564349520584-662a9bf2f3aa?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt:"bird"},
{url:"https://images.unsplash.com/photo-1600982459727-58f0cf5de042?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt:"bird"},
{url:"https://images.unsplash.com/photo-1549997380-591bf8f652ca?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt:"bird"},
{url:"https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt:"bird"},
{url:"https://images.unsplash.com/photo-1549964810-f575d8168478?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt:"bird"},
{url:"https://images.unsplash.com/photo-1550089479-fe0e48e7d788?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt:"bird"},
{url:"https://images.unsplash.com/uploads/141155339325423394b24/03982423?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJpcmR8ZW58MHx8MHx8fDI%3D",
alt:"flower"},
{url:"https://images.unsplash.com/photo-1574626003470-ac963a52dc7e?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt:"bird"},
{url:"https://images.unsplash.com/photo-1591198936750-16d8e15edb9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJpcmR8ZW58MHx8MHx8fDI%3D",
alt:"bird"},
{url:"https://images.unsplash.com/photo-1569411378499-565391f5ffe0?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
alt:"bird"}
];
let imgIndex = 0;


function creatThumbnails() {
    birdImg.forEach(function(image, index) {
      const img = document.createElement("img");
      img.src = image.url;
      img.alt = image.alt;
      thumbcontainer.appendChild(img);
      img.addEventListener("click", function() {
        changeImage(index);
        playAudio();
        img.focus();
     
      
      });
    });
}



function changeImage(index) {
    if (index >= 0 && index < birdImg.length) {
      imgIndex = index;
      const imageUrl = birdImg[imgIndex].url;
      bodyBackground.style.backgroundImage = `url(${imageUrl})`;
    } else {
    
      imgIndex = (index + birdImg.length) % birdImg.length;
      const imageUrl = birdImg[imgIndex].url;
      bodyBackground.style.backgroundImage = `url(${imageUrl})`;
    }
  }

creatThumbnails();

document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      changeImage(imgIndex);
        event.preventDefault();
      }
    else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        changeImage(imgIndex + 1);
       
        
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        changeImage(imgIndex - 1);
        
    }
});
function playAudio() {
    audioPlayer.play();
  }

  // function creatThumbnails (){
//     freedomImg.forEach(function(image){
//         const img = document.createElement("img");
//         img.src =image.url;
//         img.alt =image.alt;
//         thumbcontainer.appendChild(img);
//         img.addEventListener("click",function(){
//             creatBigImage(image);  
//         });

//     })
// }
// creatThumbnails();

// function creatBigImage(image){
//     displayImage.innerHTML = "";
//     const bigImg = document.createElement("img");
//     bigImg.src=image.url;
//     bigImg.alt =image.alt;
//     bodyBackground.appendChild(bigImg);


  

// async function getCats() {
//     //fetch data from API
//     const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
//     console.log("HTTP Response:", response);

//     //parse response into json
//     const data = await response.json();
//     for(let i =0;i<=data.length;i++){
//     console.log("JSON Data:", data[i].url);
  
//     //wrangle data (optional)
//     const wrangledCats = data[i].url;
  
//     return wrangledCats;
//   }}
  
//   function displayCat(cat) {
//     console.log("Cat:", cat);
//     document.getElementById("cat-img").src = cat;
//     //   document.getElementById("fox-img-2").src = fox;
//     //   document.getElementById("fox-img-3").src = fox;
//     document.getElementById("cat-img").alt = "cat image";
//   }
  
//   async function addCats() {
//     // getFoxes contains our data
//     const myCats = await getCats();
//     console.log("My Cats:", myCats);
  
//     //give myFoxes (our data) as argument to displayFox
//     displayCat(myCats);
//   }
  
