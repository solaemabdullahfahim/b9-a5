const ticketButtons = document.querySelectorAll('.seat')
let count=0;
for (const button of ticketButtons) {
    button.addEventListener('click', function (e) {

        
        //Total Seat:
        const totalSeat = document.getElementById('total-seat');
        

        if(totalSeat.innerText<=32){
            alert('You cant buy more than 4 ticket !');
            buttonId.setAttribute('disabled',true);
            return;
        }

        //Updating Total Seats:
        const updatedSeat = parseInt(totalSeat.innerText) - 1;
        totalSeat.innerText = updatedSeat;
        const buttonId = button.innerText;
        
        setBgColor(buttonId);
        setTextColor(buttonId);

        //Appending The seat Info::

        const seatContainer = document.getElementById('seat-container');
        const div = document.createElement('div');
        div.classList.add('flex');
        div.classList.add('justify-between');
        div.classList.add('px-8');
        div.classList.add('inter');
        const p = document.createElement("p");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        p.innerText = buttonId;
        p1.innerText = "Economy";
        p2.innerText = 550;
        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(p2);
        seatContainer.appendChild(div);

        //Next Button:
        const num=document.getElementById('number');
        num.addEventListener('keyup',function(){
            const numberLength=num.value.length;
            if(numberLength>0 && totalSeat.innerText<36 ){
                document.getElementById('next-btn').removeAttribute('disabled');
            }
        })


        //Current Seat:
        const currentSeat = document.getElementById('current-seat');
        const updatedSeatCount = parseInt(currentSeat.innerText) + 1;
        currentSeat.innerText = updatedSeatCount;
    

        //Total Price:
        const totalPrice = document.getElementById('total-price');
        const updatedTotalPrice = parseInt(totalPrice.innerText) + 550;
        totalPrice.innerText = updatedTotalPrice;

        //Grand Total Price:
        const grandTotal=document.getElementById('grand-price');
        const updatedGrandTotalPrice=parseInt(grandTotal.innerText)+550;
        grandTotal.innerText=updatedGrandTotalPrice;

        //Coupon:

        if (parseInt(totalPrice.innerText) == 2200) {
            const couponButton = document.getElementById('coupon-btn');
            couponButton.removeAttribute('disabled');
        }

    }, { once: true })
}
    

    //Hide Coupon Button:

    document.getElementById('coupon-btn').addEventListener('click', function () {
        const inputContainer = document.getElementById('input-container');
        const inputField = document.getElementById('input-field').value;
        const inputSample1 ="NEW15";
        const inputSample2 ="Couple 20";
        if(inputField==inputSample1){
            inputContainer.classList.add('hidden')

            //adding Discount Part:
            const discountContainer=document.getElementById('discount-container');
            discountContainer.classList.remove('hidden');
            const totalPrice=document.getElementById('total-price').innerText;
            const discountPrice=document.getElementById('discount-price');
            discountPrice.innerText=parseInt(totalPrice)*0.15;


            const grandTotalPrice=document.getElementById('grand-price');
            const updatedGrand=parseInt(totalPrice) -parseInt(discountPrice.innerText);
            grandTotalPrice.innerText=updatedGrand;
            


        }else if(inputField===inputSample2){
            inputContainer.classList.add('hidden')

            //adding Discount Part:
            const discountContainer=document.getElementById('discount-container');
            discountContainer.classList.remove('hidden');
            const totalPrice=document.getElementById('total-price').innerText;
            const discountPrice=document.getElementById('discount-price');
            discountPrice.innerText=parseInt(totalPrice)*0.20;

            const grandTotalPrice=document.getElementById('grand-price');
            const updatedGrand=parseInt(totalPrice) -parseInt(discountPrice.innerText);
            grandTotalPrice.innerText=updatedGrand;
        }
        else{
            alert("Please give a correct coupon ! ")
        }

    });


    // Success Section:

    document.getElementById('next-btn').addEventListener('click',function(){
        hideElementByID('main');
        hideElementByID('header');
        hideElementByID('footer');
        showElementByID('success')
    })

    document.getElementById('continue').addEventListener('click',function(){
        // hideElementByID('success');
        // hideElementByID('discount-container');
        // showElementByID('main');
        // showElementByID('input-container');
        // showElementByID('header');
        // showElementByID('footer');
        // setValueByID("total-seat",36);
        // setValueByID("current-seat",0);
        // setValueByID("total-price",0);
        // setValueByID("grand-price",0);
        // setValueByID("discount-price",0);
        // setValueByID("input-field"," ");
        window.location.reload();

    })

function setBgColor(id) {
    document.getElementById(id).classList.add('bg-green-500')
}
function setTextColor(id) {
    document.getElementById(id).classList.add('text-white')
}

function hideElementByID(id){
    document.getElementById(id).classList.add('hidden');
}
function showElementByID(id){
    document.getElementById(id).classList.remove('hidden');
}

function setValueByID(id,value){
    const element=document.getElementById(id);
    element.innerText=value;
}

