
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/klondike-solitaire-card-game/id6480581971";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/74/d2/60/74d2600e-dd68-8155-9b3f-b685c00e64e6/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ea/17/55/ea1755d8-343a-a23a-fe83-f626a589b6a0/f5f1bea5-2145-4b52-b1b7-ea5ff3ce2a30_IOS-Description-meng-chhy_11.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/25/24/5f/25245fdc-5d95-f16e-6724-4f65afc25244/fc902ef1-712c-4aa0-82ea-f8bc725b6ec6_IOS-Description-meng-chhy_13.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/90/2f/77/902f77b4-35db-cac6-755a-d0d659eef2cb/382d7b34-cbf8-4b8a-ba59-8654fac93005_IOS-Description-meng-chhy_12.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

