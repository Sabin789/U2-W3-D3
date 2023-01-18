let row=document.querySelector(".row")
let books
let cards
const getBooks = async (endpoint = "books",) => {
    try {
        let res = await fetch(`https://striveschool-api.herokuapp.com/${endpoint}`, {
            method: "GET",
          headers:{
            authorization:"yes"
          }
        }) 
       
        let books = await res.json() 
       
      

       const arrayOfCards=books.map(({category,img,price,title,asin})=>{
        return `
    
        <div class="col col-lg-3" id="${asin}">
         <div class="card" style="height: 100%;">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">Category:${category}</p>
              <p class="card-text">Price:${price}</p>
              <a class="btn btn-primary" onkeypress="addCard(this)">Add to cart</a>
              <a class="btn btn-danger"  onkeypress="skipCard(this)">Skip</a>

            </div>
           </div>
        </div>
  ` })
        const stringOfCards=arrayOfCards.join("")
        cards=stringOfCards
       
       row.innerHTML=stringOfCards
       
      
    } catch(err) {
        console.log(err)
    }
}
let parent=document.querySelectorAll(".col.col-lg-3")
let cart=document.querySelectorAll(".cart")
let skip=document.querySelectorAll(".skip")


    for(i=0;i<cart.length;i++){
        cart[i].closest(".card").classList.add("bg-danger")
    }



// skip.addEventListener("click", ()=>{
//     for(i=0;i<skip.length;i++){
//         skip[i].closest(".card").remove()
//          }
// })
    




let string=document.getElementById("searchInput")
let h5=document.querySelectorAll("h5")

console.log(booksArr)
string.addEventListener("keyup",function (e){
    let val=string.value
 e=val

    console.log(val)
for (i=0;i<h5.length;i++){
 if (val.length>=3) {
 
  const filtered=booksArr[i].filter(books=>{
    
    return(
        books.title.includes(val)
    )
    })
    console.log(filtered)
    // getBooks(filtered)
    
 }

 }
}
)
window.onload=getBooks()