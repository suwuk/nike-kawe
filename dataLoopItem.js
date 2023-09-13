

const sepatu = [
    {
        name: 'Nike SB Dunk Low Pro Premium',
        price: 1.478,
        gambar: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7cdeb7b0-884e-4542-8f22-e35045fa5154/sb-dunk-low-pro-shoes-QqSCDj.png'
    },
    {
        name: 'Air Jordan Legacy 312 Low',
        price: 2.199,
        gambar: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3bf68179-df2c-41b2-98e4-d969f831e26f/air-jordan-legacy-312-low-shoes-6Vd4Xl.png'
    },
    {
        name: 'Nike Air Max 95',
        price: 2.489,
        gambar: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2d20e9f6-989a-4df4-afe8-ff677e801aeb/air-max-95-shoes-DWVbzZ.png'
    },
    {
        name: 'Air jordan 1 Mid SE Craft',
        price: 2.129,
        gambar: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/baccff07-c847-43d5-bdb3-a78b7fd3846e/air-jordan-1-mid-se-craft-shoes-n5bFMW.png'
    },
    {
        name: 'Nike Air Max Pulse',
        price: 2.379,
        gambar: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d91889a4-7369-47bd-b012-b1042aefbc9a/air-max-pulse-shoes-QShhG8.png'
    },
    {
        name: 'Air Jordan 1 Low SE',
        price: 1.939,
        gambar: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e3d0c449-a732-4b11-9430-c80fd3cbf2fd/air-jordan-1-low-se-shoes-fQgpsv.png'
    },
]

const baju = [
    {
        name: 'Nike Sportswear Trend',
        price: 849,
        gambar: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/04390726-3fcb-4fa8-a415-dbb207c77717/sportswear-trend-short-sleeve-top-wPH3tD.png'
    },
    {
        name: 'Jordan Flight Heritage',
        price: 5.990,
        gambar: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3344ea78-9e1e-4b82-86fd-5346899b249b/jordan-flight-heritage-jacket-pCb1pm.png'
    },
    {
        name: 'Nike Max90',
        price: 549,
        gambar: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d2468621-159a-4013-a193-c57a2915efaf/max90-basketball-t-shirt-jQZ50P.png'
    },
    {
        name: 'Jordan Flight Fleece',
        price: 1079,
        gambar: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fa252c9b-5f99-4502-ae82-2121368d4e50/jordan-flight-fleece-trousers-HSj5Dx.png'
    },
    {
        name: 'Nike ACG \'Canyon Farer\'',
        price: 1659,
        gambar: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c642119d-188f-4f0f-bb4e-0d3d1ff597e5/acg-canyon-farer-trousers-WphjMP.png'
    },
    {
        name: 'Nike Sportswear Tech Fleece Re-Imagined',
        price: 1940,
        gambar: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0e89f206-edc8-463f-8d75-5e59fe1249d6/sportswear-tech-fleece-re-imagined-loose-fit-open-hem-tracksuit-bottoms.png'
    },
]

function displayProduct(tampung,array,classIcon,item){
    array.map(({name,price,gambar}) => {
        let productName = document.createElement('h1');
        productName.innerText = name;

        let productPrice = document.createElement('span');
        productPrice.innerText = `Rp ${price}K`;

        let icon = document.createElement('img');
        icon.setAttribute('class',classIcon);
        icon.setAttribute('src',gambar);

        let desc = document.createElement('div');
        desc.setAttribute('class','description');
        desc.append(productName,productPrice);

        let wadahItems = document.createElement('div');
        wadahItems.setAttribute('class',item);
        wadahItems.setAttribute('data-aos','fade-left');
        wadahItems.setAttribute('data-aos-duration','1500');
        wadahItems.append(icon,desc);

        document.getElementById(tampung).append(wadahItems);
    })
}

window.onload = function() {
    const menuHamburger = document.querySelector(".menu-hamburger")
    const navLinks = document.querySelector(".nav-links")
    menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
    })

    displayProduct('productShoes',sepatu,'gambar-sepatu','sepatu');
    displayProduct('productClothes',baju,'gambar-baju','baju');

   
}

