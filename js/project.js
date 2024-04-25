// Лайк поста

const like_button = document.getElementById('like-button');
const like_icon = document.querySelectorAll('#like-icon path');
const sum_like = document.getElementById('like-number');
let amount_like = { count: 0, liked: false };// выгрузка с бэка
console.log(like_icon)

like_button.addEventListener('click', () => {
    console.log('TYT', amount_like)
    if(!amount_like.liked){
        sum_like.style.color = "#FF0000";
        amount_like.count += 1;
        amount_like.liked = true;
        like_icon[0].setAttribute('fill', '#FF0000');
        sum_like.innerText = amount_like.count;
    } else{
        console.log('TYT else', amount_like.liked)
        like_icon[0].setAttribute('fill', '#CAD1E1');
        sum_like.style.color = "#CAD1E1";
        amount_like.count -= 1;
        amount_like.liked = false;
        sum_like.innerText = amount_like.count;
    }
})

// Копирование ссылки?



// Лента галереи

const leftBtn = document.getElementById('left_btn');
const rightBtn = document.getElementById('right_btn');
const horizonScroll = document.querySelector('.gallery-feed');

rightBtn.addEventListener('click', ()=>{
    horizonScroll.style.scrollBehavior = "smooth";
    horizonScroll.scrollLeft += 384;
});

leftBtn.addEventListener('click', ()=>{
    horizonScroll.style.scrollBehavior = "smooth";
    horizonScroll.scrollLeft -= 384;
});