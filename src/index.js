/*console.log('%c HI', 'color: firebrick')

fetch('"https://dog.ceo/api/breeds/image/random/4"')
    .then(d =>d.json())
    .then(newI => 
        newI.forEach(()=> {
        document.querySelector("#dog-image-container").append(newI)
        } )
        )*/

   document.addEventListener("DOMContentLoaded", function (){
 fetch(imgUrl)
 .then(response => response.json())
 .them(data => { (console.log(data.message))
data.message.forEach(dogUrl => {
 let img = document.createElement('img')
 img.src = dogUrl;
 let div = document.getElementById('dog-image-container')
 div.appendChild(img)
});
  })
  

  fetch(imgUrl)
  .then(resp => resp.json())
  .them(data => { 
      (console.log(data.message))
      for(let breed in data.message)
{
    let li = documentcreateElement('li')
    let ul = document.querySelector('#dog-breeds')
    li.innerText = breed;
    ul.appendChild(li)
}  
   }

   