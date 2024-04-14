// Лайки постов
const like_button = document.querySelectorAll('#like-button');
const like_icon = document.querySelectorAll('#like-icon path');
const sum_like = document.querySelectorAll('#like-number');
let amount_like = Array.from({ length: like_button.length }, () => ({ count: 0, liked: false }));// выгрузка с бэка

function likePost(i){
    console.log('TYT',i, amount_like)
    if(!amount_like[i].liked){
        sum_like[i].style.color = "#FF0000";
        amount_like[i].count += 1;
        amount_like[i].liked = true;
        like_icon[i].setAttribute('fill', '#FF0000');
        sum_like[i].innerText = amount_like[i].count;
    } else{
        console.log('TYT else', i, amount_like[i].liked)
        like_icon[i].setAttribute('fill', '#CAD1E1');
        sum_like[i].style.color = "#CAD1E1";
        amount_like[i].count -= 1;
        amount_like[i].liked = false;
        sum_like[i].innerText = amount_like[i].count;
    }
}

//Добавить отправку на бэк

for (let i = 0; i<like_button.length; i++){
    like_button[i].addEventListener('click', ()=>{likePost(i)})
};


// Сортировка ленты
const sort_type_button = document.querySelectorAll("#sorting-type");
const sort_type_span = document.querySelectorAll("#sorting-type span");
var lines_time = document.querySelectorAll('#sort-type_time line');
var lines_rating = document.querySelectorAll('#sort-type_rating line');
var lines_title = document.querySelectorAll('#sort-type_title line');
let sortTypes = {
    timeSortType: "none",
    ratingSortType: "none",
    titleSortType: "none"
};


function sort(i, sortTypes){
    if(i == 0){
        if (sortTypes.timeSortType == 'none') {
            lines_time[0].setAttribute('x2', '12');
            lines_time[1].setAttribute('x2', '7');
            sort_type_span[i].style.color = "#5b606b"
            sortTypes.timeSortType = 'ascending';
            console.log( sortTypes.timeSortType, i);
        } else if ( sortTypes.timeSortType == 'ascending') {
            lines_time[0].setAttribute('x2', '2')
            lines_time[2].setAttribute('x2', '12');
            sortTypes.timeSortType = 'descending';
        }else{
            lines_time[1].setAttribute('x2', '2');
            lines_time[2].setAttribute('x2', '2');
            sort_type_span[i].style.color = "#9c9c9c"
            sortTypes.timeSortType = "none";
        }
        sendSortTypeToBackend(i, sortTypes.timeSortType);
    } else if(i == 1){
        if (sortTypes.ratingSortType == 'none') {
            lines_rating[0].setAttribute('x2', '12');
            lines_rating[1].setAttribute('x2', '7');
            sort_type_span[i].style.color = "#5b606b"
            sortTypes.ratingSortType = 'ascending';
            console.log(sortTypes.ratingSortType, i);
        } else if (sortTypes.ratingSortType == 'ascending') {
            lines_rating[0].setAttribute('x2', '2')
            lines_rating[2].setAttribute('x2', '12');
            sortTypes.ratingSortType = 'descending';
        }else{
            lines_rating[1].setAttribute('x2', '2');
            lines_rating[2].setAttribute('x2', '2');
            sort_type_span[i].style.color = "#9c9c9c"
            sortTypes.ratingSortType = "none";
        }
        sendSortTypeToBackend(i,sortTypes.ratingSortType);
    } else if(i == 2){
        if (sortTypes.titleSortType == 'none') {
            lines_title[0].setAttribute('x2', '12');
            sort_type_span[i].style.color = "#5b606b"
            lines_title[1].setAttribute('x2', '7');
            sortTypes.titleSortType = 'ascending';
            console.log(sortTypes.titleSortType, i);
        } else if (sortTypes.titleSortType == 'ascending') {
            lines_title[0].setAttribute('x2', '2')
            lines_title[2].setAttribute('x2', '12');
            sortTypes.titleSortType = 'descending';
        }else{
            lines_title[1].setAttribute('x2', '2');
            lines_title[2].setAttribute('x2', '2');
            sort_type_span[i].style.color = "#9c9c9c"
            sortTypes.titleSortType = "none";
        }
        sendSortTypeToBackend(i,sortTypes.titleSortType);
    }
}

function sendSortTypeToBackend(i,sortType){
    
    console.log("Sending sort type to backend: " + sortType);
}

for (let i = 0; i < sort_type_button.length; i++){
    sort_type_button[i].addEventListener('click', () => {sort(i, sortTypes);});
};


//Фильтр ленты
const type_filter = document.querySelectorAll("#filter-type");
const type_filter_span = document.querySelectorAll("#filter-type span");
const type_item = document.querySelectorAll("#type_item")
var type_project = document.querySelectorAll("#svg_project line");
var type_year = document.querySelectorAll("#svg_year line");
var type_course = document.querySelectorAll("#svg_course line");
var type_author = document.querySelectorAll("#svg_author line");
var statusFilter = {
    project: 'close',
    year: 'close',
    course: 'close',
    author: 'close'
};

// Открытие ленты
function openFilter(i,status){
        if(i == 0 && statusFilter.project == 'close'){
            type_project[0].setAttribute('stroke-width', '0');
            type_item[i].style.display = "flex"
            type_filter_span[i].style.color = "#5b606b"
            status.project = 'open';
        } else if(i == 0 && statusFilter.project == 'open') {
            type_project[0].setAttribute('stroke-width', '2');
            type_item[i].style.display = "none"
            type_filter_span[i].style.color = "#9c9c9c"
            status.project = 'close';
        }
        else if(i == 1 && statusFilter.year == 'close'){
            type_year[0].setAttribute('stroke-width', '0');
            type_item[i].style.display = "flex"
            type_filter_span[i].style.color = "#5b606b"
            status.year = 'open';
        } else if(i == 1 && statusFilter.year == 'open') {
            type_year[0].setAttribute('stroke-width', '2');
            type_item[i].style.display = "none"
            type_filter_span[i].style.color = "#9c9c9c"
            status.year = 'close';
        }
        else if(i == 2 && statusFilter.course == 'close'){
            type_course[0].setAttribute('stroke-width', '0');
            type_item[i].style.display = "flex"
            type_filter_span[i].style.color = "#5b606b"
            status.course = 'open';
        } else if(i == 2 && statusFilter.course == 'open') {
            type_course[0].setAttribute('stroke-width', '2');
            type_item[i].style.display = "none"
            type_filter_span[i].style.color = "#9c9c9c"
            status.course = 'close';
        }
        else if(i == 3 && statusFilter.author == 'close'){
            type_author[0].setAttribute('stroke-width', '0');
            type_item[i].style.display = "flex"
            type_filter_span[i].style.color = "#5b606b"
            status.author = 'open';
        } else if(i == 3 && statusFilter.author == 'open') {
            type_author[0].setAttribute('stroke-width', '2');
            type_item[i].style.display = "none"
            type_filter_span[i].style.color = "#9c9c9c"
            status.author = 'close';
        }
};

for(let i = 0; i < type_filter.length; i++){
    type_filter[i].addEventListener('click', () => {openFilter(i, statusFilter)})
};

//Применение фильтра
const novella = document.getElementById('#filter_novella');
const site = document.getElementById('#filter_site');
const year22 = document.getElementById('#filterYear_22');
const year23 = document.getElementById('#filterYear_23');
const course1 = document.getElementById('#filter_course1');
const course2 = document.getElementById('#filter_course2');
const author = document.getElementById('#nameAuthor');
const sendFilter = document.getElementById('#sendFilter');

//Функция отправки фильтра на бэк 

// sendFilter.addEventListener('click', /*Название функции отправляющей на бэк*/)