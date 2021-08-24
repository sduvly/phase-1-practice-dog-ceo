document.addEventListener("DOMContentLoaded", () => {
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(data => {
    const dogArr = data.message
    dogArr.forEach(dogImg => {renderImg(dogImg)
        
    })
    //console.log(data.message)
})
})
function renderImg(dogImg){
    const container = document.querySelector("#dog-image-container")
    const imgTag = document.createElement('img')
    imgTag.src = dogImg
    container.appendChild(imgTag)
};
 
fetch("https://dog.ceo/api/breeds/list/all")
.then(resp => resp.json())
.then(newData => {
    const breedArr = Object.keys(newData.message)
    breedArr.forEach(breed => dogBreed(breed))
    
    
    
    //console.log(Object.keys(newData.message))
    })
    function dogBreed(breed){
        const ul = document.querySelector("#dog-breeds")
        const li = document.createElement("li")
        li.addEventListener("click", (e) => {
            e.target.innerText === breed
            //console.log(e.target.innerText)
        })
        ul.style.color = "green"
        ul.append(li)
        li.append(breed)
        const dropdown = document.querySelector("#breed-dropdown")
        dropdown.addEventListener("change", (e) => {
            //console.log(e.target.value)
            //console.log(li.innerText[0])
            if(e.target.value === li.innerText[0]){
                
            }

        })
        
   }
