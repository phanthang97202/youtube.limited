var test = document.querySelector('.logo-youtube');
test.onclick = function(){
    alert('Test Javascript')
}

// chức năng đóng mở menu 
var getBodyElm = document.querySelector("body");
// console.log(getBodyElm);
var btnCLose = document.getElementById("btnCLose");
var headerCloseBody = document.querySelector(".headerCloseBody");
btnCLose.onclick = function close(){
    if(window.pageXOffset < getBodyElm.offsetWidth ){
        // console.log(window.pageXOffset)
        headerCloseBody.classList.toggle("closeMenuYT");
    }
}
// xóa thông báo 

var deleteBtn = document.querySelector('.deleteBtn');
var callDelete = document.querySelector('.header-account-first');

deleteBtn.onclick = function(){
    callDelete.classList.add("deletedNotifi");
}


// chức năng ẩn cái menu dropdown icon video
var callVideo = document.querySelector('#openVideo');
var hideText = document.querySelector('span .text-dropdown-video')
callVideo.onclick = function callBox(e){
    callVideo.classList.toggle("show");
    openAccInfo.classList.remove("showAccInfo");
    openClose.classList.remove("showNotifi");
    e.stopPropagation();
} 

window.onclick = function(e){
    if(!e.target.matches('.fa-video')){
        callVideo.classList.remove('show');
        e.stopPropagation();
    }
}

// chức năng bật tắt của header bell icon 

var bellElement = document.querySelector('.fa-bell');
var openClose = document.querySelector('.header-account-main');
var headerMain = document.querySelector(".header-account-bell");

bellElement.addEventListener("click",function(){
    openClose.classList.toggle("showNotifi");
    openAccInfo.classList.remove("showAccInfo");
    callVideo.classList.remove("show");
})

// headerMain.onclick = function(e){
//     if(e.target == e.currentTarget){
//         openClose.classList.remove("showNotifi");
//     }
//     // e.stopPropagation();
// }
// headerMain.addEventListener("click",function(e){
//     if(e.target == e.currentTarget){
//         openClose.classList.toggle("showNotifi");
//     }
// })

// ấn ra ngoài cũng sẽ đóng thông báo 
window.onclick = function(){
    if(!ev.target.matches('.header-account-main')){
        openClose.classList.remove('showNotifi');
    }
}

// chức năng đóng mở menu dropdown acc 
var accElement = document.querySelector('.header-img-acc');
var openAccInfo = document.querySelector('.header-acc-img_main');
accElement.addEventListener('click',function(e){
    openAccInfo.classList.toggle("showAccInfo");
    openClose.classList.remove("showNotifi");
    callVideo.classList.remove("show");
})

// function removePointer(){
//     sayHello = function (){
//          console.log("...");
//     }
// }
// function greeting(){
//       sayHello ();
//     }
// function sayHello() {
//       console.log("hello world")
//     }
// removePointer();
// greeting();


// dom js html 
const content = document.querySelectorAll('.list-dom');

const btnSelect = document.querySelectorAll(".select");


function hideAllContents(){
    content.forEach(function(content){
        content.classList.remove('showList');
    })
}

function hideAllItems(){
    btnSelect.forEach(function(item){
        item.classList.remove('active');
    })
}

btnSelect.forEach(function(item,index){
item.addEventListener('click',function(){
        hideAllContents();
        hideAllItems();

        item.classList.add('active');
        content[index].classList.add('showList');
    });
});


//select page 

const btnSelectPage = document.querySelectorAll(".page");

function hideAllItemsPage(){
    btnSelectPage.forEach(function(item){
        item.classList.remove('color-select');
    })
}

btnSelectPage.forEach(function(item,index){
item.addEventListener('click',function(){
        hideAllContents();
        hideAllItemsPage();

        item.classList.add('color-select');
        content[index].classList.add('showList');
    });
});

//  -------------------------------------------------------------------------------------------------

// render video all 

var getVideoAll = document.getElementById('getVideoAll');
var videoAll = [
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/anime4.png",
        title : "Trap Queen - Adriana Gomez | Eightfold X MKJ Remix (Lyrics + Vietsub) ♫",
        channel : "Lofi Music",
        img_channel: "./assets/img/all1.jpg",
        view :"1 Tr lượt xem",
        time : "5 năm trước"
    },
    
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all3.png",
        title : "Lễ cầu hồn cho một giấc mơ | PKD",
        channel : "Phê Kinh Dị",
        img_channel: "./assets/img/all3.jpg",
        view :"2 Tr lượt xem",
        time : "6 giờ trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all4.png",
        title : "Bói toán,tiên tri có thật hay không? | Nhện",
        channel : "Spiderum",
        img_channel: "./assets/img/all4.jpg",
        view :"60N lượt xem",
        time : "3 giờ trước"
    },
    
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all15.png",
        title : "Soul | Cuộc sống màu nhiệm | Review",
        channel : "The Reviewer",
        img_channel: "./assets/img/all15.jpg",
        view :"2 Tr lượt xem",
        time : "5 tháng trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/anime3.png",
        title : "Healing Cafe Music Mix ",
        channel : "Cafee Morning",
        img_channel: "./assets/img/all14.jpg",
        view :"9 Tr lượt xem",
        time : "5 năm trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all2.png",
        title : "2022 Road Map for Deverloper",
        channel : "JS Mastery",
        img_channel: "./assets/img/all2.jpg",
        view :"1 Tr lượt xem",
        time : "6 ngày trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all16.png",
        title : "Spiderum | Tiêu chuẩn người yêu của con gái",
        channel : "Spiderum",
        img_channel: "./assets/img/all16.jpg",
        view :"56N lượt xem",
        time : "3 năm trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all17.png",
        title : "Kiminogawoa | Your Name Music Film",
        channel : "Film Music",
        img_channel: "./assets/img/all17.jpg",
        view :"4 Tr lượt xem",
        time : "5 giờ trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all18.png",
        title : "Coding Game | Morio Game Toturial",
        channel : "Coder Gaming",
        img_channel: "./assets/img/all18.jpg",
        view :"2 Tr lượt xem",
        time : "9 năm trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all5.png",
        title : "Highlight : Barca 0-4 Liver | Legendary",
        channel : "CTM TV",
        img_channel: "./assets/img/all5.jpg",
        view :"5 Tr lượt xem",
        time : "2 năm trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all6.png",
        title : "Summertime | Lana Del Rey",
        channel : "Lana Del Rey",
        img_channel: "./assets/img/all6.jpg",
        view :"100 Tr lượt xem",
        time : "6 năm trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all7.png",
        title : "Tóm tắt lịch sử Việt Nam",
        channel : "Lịch Sử VN",
        img_channel: "./assets/img/all7.jpg",
        view :"1 Tr lượt xem",
        time : "7 ngày trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all8.png",
        title : "Vụ án tại nhà hàng Trung Hoa | Conan",
        channel : "Pop Kids",
        img_channel: "./assets/img/all8.jpg",
        view :"50 Tr lượt xem",
        time : "5 ngày trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all9.png",
        title : "Ca nhạc | Tình ca tình ta :333",
        channel : "Bolero Music",
        img_channel: "./assets/img/all9.jpg",
        view :"6,5 Tr lượt xem",
        time : "3 ngày trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all10.png",
        title : "Gameplay RPG",
        channel : "Heart Gaming",
        img_channel: "./assets/img/all10.jpg",
        view :"5N lượt xem",
        time : "4 ngày trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all11.png",
        title : "Những bức vẽ kì quái | PKD",
        channel : "Phê Kinh Dị",
        img_channel: "./assets/img/all11.jpg",
        view :"10 Tr lượt xem",
        time : "2 năm trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all12.png",
        title : "Tát nước đầu đình | Music Video",
        channel : "Lynh Lee",
        img_channel: "./assets/img/all12.jpg",
        view :"96 Tr lượt xem",
        time : "1 năm trước"
    },
    {
        video : "./assets/listVideos/video1.html",
        link : "./assets/img/all13.png",
        title : "Avicii Music All Best Songs | Music Video",
        channel : "Music Chill",
        img_channel: "./assets/img/all11.jpg",
        view :"906 Tr lượt xem",
        time : "1 năm trước"
    },
];

var getListsAll = function(videoAll){
    return `
            <div class="col l-2-4 m-4 c-12">
                <div  class="body-many-videos">
                    <a href="${videoAll.video}">
                        <img  src="${videoAll.link}" alt="">
                        <div class="video-info">
                            <div class="video-info-title">
                                <img src="${videoAll.img_channel}" alt="">
                                <b>${videoAll.title}</b>
                            </div>
                            <div class="video-info-channel">
                                <p>${videoAll.channel}</p> 
                                <div class="video-info-time">
                                    <p>${videoAll.view}</p>
                                    <i style="font-size: 4px;margin: 0px 6px;" class="fa-solid fa-circle"></i>
                                    <p>${videoAll.time}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
    `;
} 
var renderVideoAll = videoAll.map(getListsAll).join(' ');
getVideoAll.innerHTML = renderVideoAll;




// renderVideo Film

var getVideo = document.getElementById('getVideo');
var videoFilm = [
    {
        link : "./assets/img/phim7.png",
        title : "Review Phim Gonjiham | Far footage type",
        channel : "Phê Kinh Dị",
        img_channel: "./assets/img/phim6-lg.jpg",
        view :"100 Tr lượt xem",
        time : "1 ngày trước"
    },
    {
        link : "./assets/img/phim6.png",
        title : "Ju-On 2 | Lời nguyền kinh hoàng 2",
        channel : "Phê Kinh Dị",
        img_channel: "./assets/img/phim6-lg.jpg",
        view :"561N lượt xem",
        time : "3 năm trước"
    },
    {
        link : "./assets/img/phim4.png",
        title : "Điềm gở - Đỉnh cao phim kinh dị | Sinister ",
        channel : "Phê Kinh Dị",
        img_channel: "./assets/img/phim6-lg.jpg",
        view :"5 Tr lượt xem",
        time : "3 ngày trước"
    },
    {
        link : "./assets/img/phim8.png",
        title : "Toàn bộ Planet Apes",
        channel : "Phê Phim",
        img_channel: "./assets/img/phephim.jpg",
        view :"10N lượt xem",
        time : "3 ngày trước"
    },
    {
        link : "./assets/img/nguoigianghoa.png",
        title : "Người giảng hòa ",
        channel : "The Reviewer",
        img_channel: "./assets/img/thereviewer-logo.jpg",
        view :"100N lượt xem",
        time : "15 ngày trước"
    },
    {
        link : "./assets/img/phim1.png",
        title : "Toàn bộ Bat Man trong 30 phút",
        channel : "Phê Phim",
        img_channel: "./assets/img/phephim.jpg",
        view :"23N lượt xem",
        time : "3 giờ trước"
    },
    {
        link : "./assets/img/phim2.png",
        title : "Toàn bộ về Harry Potter trong 84 phút",
        channel : "The Reviewer",
        img_channel: "./assets/img/thereviewer-logo.jpg",
        view :"15N lượt xem",
        time : "1 giờ trước"
    },
    {
        link : "./assets/img/phim3.png",
        title : "Toàn bộ về Dark Knight trong 24 phút",
        channel : "Phê Phim",
        img_channel: "./assets/img/phephim.jpg",
        view :"2,4 Tr lượt xem",
        time : "8 ngàytrước"
    },
    
    {
        link : "./assets/img/phim5.png",
        title : "Valorant tựa game Wibu | Review Game",
        channel : "The Reviewer",
        img_channel: "./assets/img/thereviewer-logo.jpg",
        view :"150N lượt xem",
        time : "5 giờ trước"
    },
    
    

];
var getLists = function(videoFilm){
    return `
            <div class="col l-2-4 m-4 c-12">
                <div  class="body-many-videos">
                    <a href="">
                        <img  src="${videoFilm.link}" alt="">
                        <div class="video-info">
                            <div class="video-info-title">
                                <img src="${videoFilm.img_channel}" alt="">
                                <b>${videoFilm.title}</b>
                            </div>
                            <div class="video-info-channel">
                                <p>${videoFilm.channel}</p> 
                                <div class="video-info-time">
                                    <p>${videoFilm.view}</p>
                                    <i style="font-size: 4px;margin: 0px 6px;" class="fa-solid fa-circle"></i>
                                    <p>${videoFilm.time}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
    `;
} 
var renderVideo = videoFilm.map(getLists).join(' ');
getVideo.innerHTML = renderVideo;

// renderVideo Sport
var getVideoSport = document.getElementById('getVideoSport');
var videoSport = [
    {
        link : "./assets/img/hattrick.png",
        title : "Highlights | Man United 3-2 Tottenham",
        channel : "K+ Sports",
        img_channel: "./assets/img/hattrick-channel.jpg",
        view :"1 Tr lượt xem",
        time : "3 ngày trước"
    },
    {
        link : "./assets/img/s1.png",
        title : "Highlights | Real Madrid 3-1 PSG",
        channel : "FPT Play",
        img_channel: "./assets/img/s1.jpg",
        view :"10 Tr lượt xem",
        time : "6 ngày trước"
    },
    {
        link : "./assets/img/s3.png",
        title : "Road to Quatar World Cup Final",
        channel : "Sport Life",
        img_channel: "./assets/img/s3.jpg",
        view :"22 Tr lượt xem",
        time : "9 ngày trước"
    },
    {
        link : "./assets/img/s11.png",
        title : "Highlight | Barcelona - Levante | Coutinho tỏa sáng ",
        channel : "La Liga",
        img_channel: "./assets/img/s11.jpg",
        view :"206N lượt xem",
        time : "5 ngày trước"
    },
    {
        link : "./assets/img/s2.png",
        title : "Tổng quan lực lượng trước trận đấu Man United vs Atletico",
        channel : "FPT Play",
        img_channel: "./assets/img/s2.jpg",
        view :"6N lượt xem",
        time : "1 ngày trước"
    },
    {
        link : "./assets/img/s4.png",
        title : "CHAMPIONS LEAGUE 2016 | REAL MADRID",
        channel : "C1 TV",
        img_channel: "./assets/img/s3.jpg",
        view :"62N lượt xem",
        time : "9 ngày trước"
    },
    {
        link : "./assets/img/s9.png",
        title : "Quang Hải xuất ngoại | Thăng Tiền Tỉ",
        channel : "Thăng Tiền Tỉ",
        img_channel: "./assets/img/s4.jpg",
        view :"62N lượt xem",
        time : "1 ngày trước"
    },
    {
        link : "./assets/img/s5.png",
        title : "That Why Luka Is The Best Mid",
        channel : "IEORI Sport",
        img_channel: "./assets/img/s5.jpg",
        view :"60N lượt xem",
        time : "3 ngày trước"
    },
    {
        link : "./assets/img/s6.png",
        title : "Màn trình diễn kinh điển của Thanh Nhã | Cơn lốc đường biên",
        channel : "FPT Play",
        img_channel: "./assets/img/s6.jpg",
        view :"66N lượt xem",
        time : "3 giờ trước"
    },
    {
        link : "./assets/img/s10.png",
        title : "Highlight | Real Sociadad - Alaves ",
        channel : "La Liga",
        img_channel: "./assets/img/s10.jpg",
        view :"61N lượt xem",
        time : "7 ngày trước"
    },
    {
        link : "./assets/img/s7.png",
        title : "Maroc - Road to World Cup Final 2018",
        channel : "Asia Football",
        img_channel: "./assets/img/s7.jpg",
        view :"96N lượt xem",
        time : "2 ngày trước"
    },
    {
        link : "./assets/img/s8.png",
        title : "Five Assist of Round 5 EPL | K+",
        channel : "K+ Sport",
        img_channel: "./assets/img/s8.jpg",
        view :"26N lượt xem",
        time : "9 ngày trước"
    },
    
];
var getListsSport = function(videoSport){
    return `
    <div class="col l-2-4 m-4 c-12">
    <div  class="body-many-videos">
        <a href="">
            <img  src="${videoSport.link}" alt="">
            <div class="video-info">
                <div class="video-info-title">
                    <img src="${videoSport.img_channel}" alt="">
                    <b>${videoSport.title}</b>
                </div>
                <div class="video-info-channel">
                    <p>${videoSport.channel}</p> 
                    <div class="video-info-time">
                        <p>${videoSport.view}</p>
                        <i style="font-size: 4px;margin: 0px 6px;" class="fa-solid fa-circle"></i>
                        <p>${videoSport.time}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>
    `;
} 
var renderVideoSport = videoSport.map(getListsSport).join(' ');
getVideoSport.innerHTML = renderVideoSport;
                    
