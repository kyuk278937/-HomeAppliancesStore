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
                    <div>
                        <img src="images/mono-lapka.png" alt="Монолапка">
                        <h5>${element.lapka}</h5>
                    </div>
                    <div>
                        <img src="images/4d15326d3a1a5432186d384d396cb85421a4dd82.png" alt="Приват частинами">
                        <h5>${element.pb}</h5>
                    </div>
                </div>

                <div class="buttons">
                    <div class="top_button"  onclick="redirectToNewPage('${element.url}')">
                        <div class="old_price">
                            <h5>${element.price}</h5>
                            <h5>грн</h5>
                        </div>
                        <div class="new_price">
                            <h5>${element.discount_price}</h5>
                            <h5>грн</h5>
                        </div>
                    </div>

                    <div class="bottom_button"  onclick="redirectToNewPage('${element.url}')">
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

function redirectToNewPage(url) {
    window.location.href = url;
}

let goodsDiv = document.getElementById("goods");

let goodsArray = [
    {
        name: "Корм для котів Мяу з м'ясом 300 г",
        url: "http://www.example.com",
        lapka: 6,
        pb: 8,
        price: 43.90,
        discount_price: 36.90,
        coupon_price: 36.90,
    },
    {
        name: "Котячий корм Whiskas желе з куркою 85г",
        url: "http://www.example.com",
        lapka: '-',
        pb: '-',
        price: 18,
        discount_price: 14,
        coupon_price: 14,
    },
    {
        name: "Сухий корм для дорослих котів Purina Cat Chow Adult",
        url: "http://www.example.com",
        lapka: 6,
        pb: 8,
        price: 301,
        discount_price: 213,
        coupon_price: 213,
    },
    {
        name: "Купити котячий корм Pro Plan Delicate з м'ясом індички",
        url: "http://www.example.com",
        lapka: 8,
        pb: 8,
        price: 2650,
        discount_price: 2554.40,
        coupon_price: 2554.40,
    },
    {
        name: "Корм для котів Gourmet Perle Лосось та сайда пауч 85 г",
        url: "http://www.example.com",
        lapka: '-',
        pb: '-',
        price: 21,
        discount_price: 18,
        coupon_price: 18,
    },
    {
        name: "Royal Canin Sensible 33",
        url: "http://www.example.com",
        lapka: 6,
        pb: 8,
        price: 210,
        discount_price: 178.50,
        coupon_price: 178.50,
    },
    {
        name: "Royal Canin Exigent Savour Sensation",
        url: "http://www.example.com",
        lapka: 6,
        pb: 8,
        price: 210,
        discount_price: 178.50,
        coupon_price: 178.50,
    },
    {
        name: "Royal Canin Hairball Care",
        url: "http://www.example.com",
        lapka: 6,
        pb: 8,
        price: 245,
        discount_price: 208.25,
        coupon_price: 208.25,
    },
    {
        name: "Клуб 4 лапи Premium з куркою для дорослих котів",
        url: "http://www.example.com",
        lapka: 7,
        pb: 5,
        price: 2154,
        discount_price: 1856,
        coupon_price: 1856,
    },
    {
        name: "Royal Canin Kitten Sterilised Сухий корм для стерилізованих кошенят 2 кг",
        url: "http://www.example.com",
        lapka: 3,
        pb: 9,
        price: 890,
        discount_price: 850,
        coupon_price: 850,
    },
    {
        name: "Brit Care Cat Grain Free Sterilized Sensitive",
        url: "http://www.example.com",
        lapka: 7,
        pb: 8,
        price: 822,
        discount_price: 698.70,
        coupon_price: 698.70,
    },
    {
        name: "Brit Care Cat Grain Free Sensitive Insect & Fresh Herring",
        url: "http://www.example.com",
        lapka: 6,
        pb: 8,
        price: 21,
        discount_price: 824,
        coupon_price: 700.40,
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