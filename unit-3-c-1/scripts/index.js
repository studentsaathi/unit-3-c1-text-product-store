//store the products array in localstorage as "products"
let arr=JSON.parse(localStorage.getItem("products")) || [] 
function Product(t,d,p,i){
     this.type=t;
     this.desc=d;
     this.price=p;
     this.image=i;

 }
 function storeData(e){
     e.preventDefault()
     let form=document.getElementById("products")
     let type=form.type.value;
     let desc=form.desc.value;
     let price=form.price.value;
     let image=form.image.value;
     //console.log(type,desc)
     let product=new Product(type,desc,price,image);
     //console.log(product)
     arr.push(product)
     localStorage.setItem("products",JSON.stringify(arr))
     

 }