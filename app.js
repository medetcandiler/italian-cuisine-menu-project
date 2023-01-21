const myMenu=[
    {
        nameOfFood:'Abruzzo and Molise',
        category:'basics',
        price:20.99,
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Campo_Imperatore_2009_-Ristoro_Mucciante_Arrosticini-_by_RaBoe_014.jpg/170px-Campo_Imperatore_2009_-Ristoro_Mucciante_Arrosticini-_by_RaBoe_014.jpg',
        description:'Pasta, meat, and vegetables are central to the cuisine of Abruzzo and Molise. Chili peppers (peperoncini) are typical of Abruzzo, where they are called diavoletti ("little devils") for their spicy heat.'
    },
    {
        nameOfFood:'Apulia',
        category:'regional',
        price:9.99,
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Orecchiette_con_cima_di_rapa.jpg/220px-Orecchiette_con_cima_di_rapa.jpg',
        description:'Apulia is a massive food producer; major production includes wheat, tomatoes, zucchini, broccoli, bell peppers, potatoes, spinach, eggplants, cauliflower, fennel, endive, chickpeas, lentils, beans, and cheese.'
    },
    {
        nameOfFood:'Basilicata',
        category:'regional',
        price:19.99,
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Pasta_peperoni_cruschi.jpg/220px-Pasta_peperoni_cruschi.jpg',
        description:'The cuisine of Basilicata is mostly based on inexpensive ingredients and deeply anchored in rural traditions.'
    },
    {
        nameOfFood:'Piedmont',
        category:'traditional',
        price:29.99,
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Agnolotti.JPG/220px-Agnolotti.JPG',
        description:'Between the Alps and the Po valley, featuring a large number of different ecosystems, the Piedmont region offers a refined and varied cuisine.'
    },
    {
        nameOfFood:'Calabria',
        category:'regional',
        price:7.99,
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Nduja_mit_Brot.jpg/220px-Nduja_mit_Brot.jpg',
        description:'In Calabria, a history of French rule under the House of Anjou and Napoleon, along with Spanish influences, affected the language and culinary skills as seen in the naming of foods such as cake, gatò, from the French gateau.'
    },
    {
        nameOfFood:'Campania',
        category:'traditional',
        price:39.99,
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Parmigiana_di_melanzane.jpg/220px-Parmigiana_di_melanzane.jpg',
        description:'Campania extensively produces tomatoes, peppers, spring onions, potatoes, artichokes, fennel, lemons, and oranges which all take on the flavor of volcanic soil.'
    },
    {
        nameOfFood:'Emilia-Romagna',
        category:'traditional',
        price:22.99,
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Piadina.jpg/220px-Piadina.jpg',
        description:'Emilia-Romagna is especially known for its egg and filled pasta made with soft wheat flour. '
    },
    {
        nameOfFood:'Lazio',
        category:'traditional',
        price:17.99,
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/220px-Espaguetis_carbonara.jpg',
        description:'It features fresh, seasonal and simply-prepared ingredients from Roman Campagna. These include peas, globe artichokes and fava beans, shellfish, milk-fed lamb and goat, and cheeses such as Pecorino Romano and ricotta.'
    },
    {
        nameOfFood:'Lombardy',
        category:'basics',
        price:24.99,
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ossobuco_con_risotto_alla_milanese.jpg/220px-Ossobuco_con_risotto_alla_milanese.jpg',
        description:'Due to the different historical events of its provinces and the variety of its territory, Lombard cuisine has a very varied culinary tradition.'
    },
    {
        nameOfFood:'Tuscany',
        category:'basics',
        price:49.99,
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Bistecca_alla_fiorentina-01.jpg/220px-Bistecca_alla_fiorentina-01.jpg',
        description:'Simplicity is central to the Tuscan cuisine. Legumes, bread, cheese, vegetables, mushrooms, and fresh fruit are used. '
    }
]
let buttonsDOM=document.querySelector('.buttons-container');
let menuAreaDOM=document.querySelector('.menu-container');
// reach myMenu category property and create buttons 
let category=[...new Set(myMenu.map(item => item.category))];
let x= category.map(e => e.toUpperCase)
category.unshift('All')
console.log(category)
function createButton(items='All'){
    const newButton=document.createElement('button');
    newButton.classList.add('button', 'button:hover', 'button:active');
    newButton.innerText= items.toUpperCase();
    console.log(newButton.innerHTML)
    newButton.onclick= changeMenu;
    return newButton;
}

category.forEach(item => buttonsDOM.appendChild(createButton(item)));

// create menu list items in DOM
function createMenu(item){
    let items=`
    <div class="row">
            <div class="visual">
                <img src="${item.img}" alt="${item.nameOfFood}">
            </div>
            <div class="write">
                <div class="write-in">
                    <div class="menu-title">
                        <h4>${item.nameOfFood}</h4>
                        <h4>${item.price}</h4>
                    </div>
                    <p class="description">${item.description}</p>
                </div>
            </div>
        </div>
    `
    return items;
}

myMenu.forEach(element => {
    menuAreaDOM.innerHTML += createMenu(element) ;
});

function changeMenu(){
    menuAreaDOM.innerHTML='';
    if(this.innerText=='ALL'){
        myMenu.map(element =>  menuAreaDOM.innerHTML+= createMenu(element));
    }else {
        let filter=myMenu.filter(e => e.category.toUpperCase() == this.innerText);
        filter.forEach(e => menuAreaDOM.innerHTML+= createMenu(e))
    }
}





// if( this.innerText=='basics'){
//     let filter=myMenu.filter( e => e.category == 'basics');
//     filter.map(e => menuAreaDOM.innerHTML+= createMenu(e));
// }else if(this.innerText=='regional'){
//     let filter=myMenu.filter(e => e.category=='regional');
//     filter.map(e=>menuAreaDOM.innerHTML+=createMenu(e))
// }else if(this.innerText=='traditional'){
//     let filter=myMenu.filter(e=> e.category=='traditional');
//     filter.map(e=> menuAreaDOM.innerHTML+= createMenu(e))
// }


// switch(true){
//     case(this.innerText=='All'):
//         console.log(this.innerText=='All')
//         myMenu.forEach(e=> menuAreaDOM.innerHTML+=createMenu(e))
//         break;
//     case(this.innerText=='Basics'):
//         let basics=myMenu.filter( e => e.category == 'basics');
//         basics.map(e => menuAreaDOM.innerHTML+= createMenu(e))
//         break;
//     case(this.innerTex=="regional"):
//         let regional=myMenu.filter(e => e.category== "regional");
//         regional.map(e => menuAreaDOM.innerHTML+= createMenu(e));
//         break;
//     case(this.innerText=='traditional'):
//         let traditional=myMenu.filter(e => e.category=='traditional');
//         traditional.map(e => menuAreaDOM.innerHTML+= createMenu(e));
//         break;
// }