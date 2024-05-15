function createPage(){
    goodsArray.forEach(element => {
        goodsDiv.innerHTML += 
        `
            <div class="goods_">
                <div class="title">
                    <h3>${element.name}</h3>
                </div>
                    
                <div class="main_image">
                        <img src="images/${element.name}.jpg" alt=${element.name}>
                </div>
                    
                <div class="offers">
                    <img src="images/mono-lapka.png" alt="Монолапка">
                    <img src="images/4d15326d3a1a5432186d384d396cb85421a4dd82.png" alt="Приват частинами">
                </div>

                <div class="buttons">
                    <div class="top_button">
                        <div class="old_price">
                            <h5>${element.price}</h5>
                            <h5>грн</h5>
                        </div>
                        <div class="new_price">
                            <h5>${element.discount_price}</h5>
                            <h5>грн</h5>
                        </div>
                    </div>

                    <div class="bottom_button">
                        <div>
                            <h5>Ціна за купоном</h5>
                        </div>
                        <div class="new_price">
                            <h5>${element.coupon_price}</h5>
                            <h5>грн</h5>
                        </div>
                    </div>
                </div>

            </div>
        `
    });
}

function printGoods(){
    console.log("Доступні товари :")
    goodsArray.forEach(element => {
        console.log(element)
    });
}

let goodsDiv = document.getElementById("goods");

let goodsArray = [
    {
        name: "Корм для котів Мяу з м'ясом 300 г",
        price: 43.90,
        discount_price: 36.90,
        coupon_price: 36.90,
    },
    {
        name: "Котячий корм Whiskas желе з куркою 85г",
        price: 18,
        discount_price: 14,
        coupon_price: 14,
    },
    {
        name: "Сухий корм для дорослих котів Purina Cat Chow Adult",
        price: 301,
        discount_price: 213,
        coupon_price: 213,
    },
    {
        name: "Купити котячий корм Pro Plan Delicate з м'ясом індички",
        price: 2650,
        discount_price: 2554.40,
        coupon_price: 80,
    },
    {
        name: "Корм для котів Gourmet Perle Лосось та сайда пауч 85 г",
        price: 21,
        discount_price: 18,
        coupon_price: 80,
    },
]
goodsArray = goodsArray.sort()

if (goodsDiv){
    printGoods()
    createPage()
}
else{
    console.log("Помилка знаходження блоку товарів")
}