function createPage(){
    goodsArray.forEach(element => {
        goodsDiv.innerHTML += 
        `
            <div class="goods_">
                <div class="title">
                    <h3>${element}</h3>
                </div>
                    
                <div class="main_image">
                        <img src="images/${element}.jpg" alt="Самогон">
                </div>
                    
                <div class="offers">
                    <img src="images/mono-lapka.png" alt="Монолапка">
                    <img src="images/4d15326d3a1a5432186d384d396cb85421a4dd82.png" alt="Приват частинами">
                </div>

                <div class="buttons">
                    <div class="top_button">
                        <div class="old_price">
                            <h5>безцінно</h5>
                            <h5>грн</h5>
                        </div>
                        <div class="new_price">
                            <h5>999999</h5>
                            <h5>грн</h5>
                        </div>
                    </div>

                    <div class="bottom_button">
                        <div>
                            <h5>Ціна за купоном</h5>
                        </div>
                        <div class="new_price">
                            <h5>888888</h5>
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
    "Корм для котів Мяу з м'ясом 300 г",
    'Кошачий корм Whiskas желе с курицей 85г',
    'Сухий корм для дорослих котів Purina Cat Chow Adult',
    "Купити котячий корм Pro Plan Delicate з м'ясом індички",
]
goodsArray = goodsArray.sort()

if (goodsDiv){
    printGoods()
    createPage()
}
else{
    console.log("Помилка знаходження блоку товарів")
}