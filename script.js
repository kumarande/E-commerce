let countDate = new Date("july 31 , 2024 00:00:00").getTime();
 function CountDown(){

    let now = new Date().getTime();
    gap = countDate - now;
 
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor(gap % (day) / (hour));
    let m = Math.floor(gap % (hour) / (minute));
    let s = Math.floor(gap % (minute) / (second));

    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
 }

 setInterval(function(){
    CountDown();
 },1000)





 const product = [
    {
        id:0,
        image:"images/w1.png",
        title:"Smart Watch",
        price:2500,
    },
    {
        id:1,
        image:"images/pr11.png",
        title:"Mouse",
        price:700,
    },
    {
        id:2,
        image:"images/h1.png",
        title:"Headphones",
        price:17000,
    },
    {
        id:3,
        image:"images/img3.jpg p-5",
        title:"Laptop",
        price:47000,
    }
 ];
 const categories = [...new Set(product.map((item) =>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item) =>
    {
        var{image,title,price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src= ${image}></img>
                </div>
                <div class='bottom'>
                    <h5>${title}</h5>
                    <h4>₹ ${price}.00</h4>` +
                    "<button1 onclick='addtocart("+(i++)+")'>Add to Cart</button1>" +
                `</div>
            </div>`
        )
    }).join('')

    var cart = [];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a){
        cart.splice(a,1);
        displaycart();
    }

    function displaycart(a){
        let j=0, total=0;
        document.getElementById("count").innerHTML=cart.length;

if(cart.length==0){
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ "+0+".00";
}  
else{
    document.getElementById("cartItem").innerHTML =cart.map((items) =>{
        var{image,title,price} =items;
        total=total+price;
        document.getElementById("total").innerHTML = "$" +total+".00";
        return(
            `<div class='cart-item'>
            <div class='row-img'>
                 <img class='rowing' src=${image}>
            </div>
            <p style='font-size:18px;'>${title}</p>
            <h2 style='font-size:15px;'>₹ ${price}.00</h2>` +
            "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
        );
    }).join("");
} 
}



//* form validation in Javascript

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var message = document.getElementById('message').value;
    var errorDiv = document.getElementById('errorDiv');
    errorDiv.innerHTML = ''; // Reset error messages

    if (name.trim() === '') {
      errorDiv.innerHTML += 'Name is required.<br>';
    }
    if (email.trim() === '') {
      errorDiv.innerHTML += 'Email is required.<br>';
    } else if (!isValidEmail(email)) {
      errorDiv.innerHTML += 'Invalid email address.<br>';
    }
    if (mobile.trim() === '') {
      errorDiv.innerHTML += 'Mobile number is required.<br>';
    } else if (!isValidMobile(mobile)) {
      errorDiv.innerHTML += 'Invalid mobile number.<br>';
    }
    if (message.trim() === '') {
      errorDiv.innerHTML += 'Message is required.<br>';
    }

    if (errorDiv.innerHTML !== '') {
      errorDiv.style.display = 'block';
      return false; // Prevent form submission
    }
    return true; // Allow form submission
  }

  function isValidEmail(email) {
    // Basic email validation pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function isValidMobile(mobile) {
    // Check if mobile number is 10 digits long
    var mobilePattern = /^\d{10}$/;
    return mobilePattern.test(mobile);
  }

  //log in form 
