//fetching api
async function dogData(Url){
    let data=await fetch(Url)
    let res=await data.json()
    console.log(res)
    let dog1=document.createElement('div')
    dog1.setAttribute('class','row row-cols-1 row-cols-md-3 g-4')
    dog1.setAttribute('id','dog1')
    for(let i=0;i<res.length;i++){
        console.log(res[i])
        var dogBreed=document.getElementById('dogBreed')
        let dog=document.createElement('div')
        dog.setAttribute('class','col')
        dog.setAttribute('id','dog')
        //Append data to html
        dog.innerHTML=`
        
        <div class="card h-100 m-3 data">
        <div class="card-header text-center"> <h5 class="card-title">${res[i].name}</h5></div>
        
                <div class="card-body text-center">
                  <p class="card-text">Origin: ${res[i].origin}</p>
                  <p class="card-text">Life Span: ${res[i].life_span}</p>
                  <p class="card-text">Breed for: ${res[i].bred_for}</p>
                  <p class="card-text">Temperament: ${res[i].temperament}</p>
                  <p class="card-text">Height: ${res[i].height.imperial} Weight: ${res[i].weight.imperial}</p>
                  <p class="card-text">Copy this id in browser to get more Information: ${res[i].reference_image_id}</p>
                  </div>
              </div>
        ` 
        if(Url.includes("search"))
        {
            
            dogBreed.removeChild(document.getElementById('dog1'))
       dogBreed.appendChild(dog)
        }
       else{
        dogBreed.appendChild(dog1)
        dog1.appendChild(dog)
       }
    }
}
//search the dog breed
let Url="https://api.thedogapi.com/v1/breeds/"
dogData(Url)


const form=document.getElementById('form')
const search=document.getElementById('search')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  searchTerm=search.value
  console.log(searchTerm)
  console.log(Url+"search?q="+searchTerm)
  if(searchTerm && searchTerm.value!==""){
    dogData(Url+"search?q="+searchTerm)
  }
  else{
    window.location.reload()
  }
})
