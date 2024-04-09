
const like_button = document.querySelectorAll('#like-button');
const like_icon = document.querySelectorAll('#like-icon');
const sum_like = document.querySelectorAll('#like-number');
let x = Array(like_button.length).fill(0);
console.log(sum_like);

function likePost(i){
    if(x[i] == 0){
        like_icon[i].src = "../assets/img/red-likes.svg";
        sum_like[i].style.color = "#FF0000";
        sum_like[i].innerText = parseInt(sum_like[i].innerText) + 1;
        console.log('Лайкунт ' + i + 'пост');
        x[i] += 1;
    } else{
        like_icon[i].src = "../assets/img/Likes.png";
        sum_like[i].style.color = "#CAD1E1";
        sum_like[i].innerText = parseInt(sum_like[i].innerText) - 1;
        console.log('Анлайкунт ' + i + 'пост');
        x[i] -= 1;
    }
}

for (let i = 0; i<like_button.length; i++){
    like_button[i].addEventListener('click', ()=>{likePost(i)})
};