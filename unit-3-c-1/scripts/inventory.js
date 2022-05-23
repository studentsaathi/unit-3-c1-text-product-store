let data =JSON.parse(localStorage.getItem("products"))
data.map(function(el,index){
    let showdata=document.getElementById("all_products")
    let div=document.createElement("div")
    let image=document.createElement("img")
    image.src=el.image;
    let type=document.createElement("p")
    type.innerText=el.type;
    let desc=document.createElement("p")
    desc.innerText=el.desc;
    let price=document.createElement("p")
    price.innerText=`PRICE : - ${el.price}`
    let btn=document.createElement("button")
    btn.innerText="Remove"
    btn.addEventListener("click",function(){
        removeITEM(el,index)

    })


    div.append(image,type,desc,price,btn)
    showdata.append(div)
})
function removeITEM(el,index){
    data.splice(index,1)
    localStorage.setItem("products",JSON.stringify(data))
    window.location.reload()
}