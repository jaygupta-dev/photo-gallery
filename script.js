
let galleryDiv = document.querySelector('.gallery-div');

let divShowPhoto = document.querySelector('.div-rgba');
let modalPhoto = document.querySelector('.modal-photo');
let downloadPhoto = document.querySelector('.download');
let closeBtn = document.querySelector('.close');




closeBtn.addEventListener('click', () => {
    divShowPhoto.style.display = 'none';
    galleryDiv.style.display = 'block';
    location.reload();
});

function getSrcModal(x) {
    let a = x.src;
    x.src = modalPhoto.src;
    modalPhoto.src = a;
    downloadPhoto.href = modalPhoto.src;
}

function getSrc(x) {
    galleryDiv.style.display = 'none';
    divShowPhoto.style.display = 'block';
    modalPhoto.src = x.src;
    downloadPhoto.href = modalPhoto.src;
}
function seeMore(x){
x.href = "https://www.google.com/search?q=wallpaper&sca_esv=598630557&hl=en&authuser=0&tbm=isch&sxsrf=ACQVn091CcN9wVJ8TUac2tz9CnhYdgQAJA%3A1705347479861&source=hp&biw=804&bih=687&ei=l4mlZc--MvKl2roP5umr4AE&iflsig=ANes7DEAAAAAZaWXp6UmixbqvdD8bqROXsRpUlTnKjAD&ved=0ahUKEwiP5oO2kuCDAxXyklYBHeb0ChwQ4dUDCAc&uact=5&oq=wallpaper&gs_lp=EgNpbWciCXdhbGxwYXBlcjIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyCxAAGIAEGLEsdfghggQABiABBixAzIFEAAYgAQyDhAAGIAEGIoFGLEDGIMBMgUQABiABDIIEAAYgAQYsQNIqQ1QAFijC3AAeACQAQCYAccBoAG3DKoBAzAuObgBA8gBAPgBAYoCC2d3cy13aXotaW1nwgIEECMYJ8ICBBAAGAM&sclient=img";
}
