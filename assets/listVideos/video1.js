var videoElement = document.querySelector("video");
// console.log(videoElement);
var videoList = [
    // {
    //     videoLink : "../img/video.mp4"
    // },
    {
        videoLink : "../img/trapqueen.mp4"
    }
];

mapVideoElement = function(videoList){
    return `
        <source src="${videoList.videoLink}" type="video/mp4">
    `
}

var getVideoList = videoList.map(mapVideoElement).join(' ');
// console.log(getVideoList)
videoElement.innerHTML =  getVideoList;
/////////////////////////////////////////////////////////////////////////
var videoSug = document.querySelector('.box-menu-video');

var listVideoSug = [

    {
        img : "../img/bosung2.png",
        title : "Soft Rain Sound After Work",
        channel : "Sound FX",
        view : "4Tr lượt xem",
        time : "2 ngày trước"
    },
    {
        img : "../img/bosung.png",
        title : "Relaxing Studio Ghibli Music",
        channel : "Ghibli Music",
        view : "4Tr lượt xem",
        time : "8 năm trước"
    },
    {
        img : "../img/v6.png",
        title : "Look What You Make Me Do | Taylor Swift",
        channel : "Taylor Swift",
        view : "4.5T lượt xem",
        time : "6 năm trước"
    },
    {
        img : "../img/bosung3.png",
        title : "Attack On Titan Full Season | Music Film",
        channel : "Film Sounds",
        view : "40Tr lượt xem",
        time : "5 ngày trước"
    },
    {
        img : "../img/v1.png",
        title : "LET HER GO | OFFICAL MUSIC VIDEO",
        channel : "PASSENGER",
        view : "3.5T lượt xem",
        time : "5 năm trước"
    },
    {
        img : "../img/v11.png",
        title : "Chill After Working | Lofi Chill | 4 Hours",
        channel : "Lofi Chill",
        view : "3Tr lượt xem",
        time : "1 năm trước"
    },
    {
        img : "../img/v2.png",
        title : "Sia -  Unstoppable(Lyrics)",
        channel : "ELectric Pop",
        view : "128N lượt xem",
        time : "2 ngày trước"
    },
    {
        img : "../img/v7.png",
        title : "How Long | Charlie Puth | MV 4K",
        channel : "Charlie Puth",
        view : "4.5T lượt xem",
        time : "5 năm trước"
    },
    
    {
        img : "../img/v3.png",
        title : "Maroon 5 | Girl You Like | MV 4K",
        channel : "Maroon 5",
        view : "2.5T lượt xem",
        time : "4 năm trước"
    },
    {
        img : "../img/v4.png",
        title : "Charlie Puth .Ft Wiz Khalifa | See You Again",
        channel : "Wiz Khalifa",
        view : "6T lượt xem",
        time : "8 năm trước"
    },
    {
        img : "../img/v5.png",
        title : "Wake Me Up | Avicii | Lyrics",
        channel : "Young King",
        view : "45Tr lượt xem",
        time : "5 tháng trước"
    },
    {
        img : "../img/v8.png",
        title : "Mashup The Fat Rat | 2Hours",
        channel : "The Fat That",
        view : "3.2T lượt xem",
        time : "5 năm trước"
    },
    {
        img : "../img/v9.png",
        title : "Cheap Thrill | Offical Music Video | Sia",
        channel : "Sia Singer  ",
        view : "3.5T lượt xem",
        time : "7 năm trước"
    },
    
    {
        img : "../img/v12.png",
        title : "Until You | Shayne Ward | Music Video",
        channel : "Shayne Ward",
        view : "2T lượt xem",
        time : "4 năm trước"
    },
    {
        img : "../img/v13.png",
        title : "The Storm | Lyrics | Music Video",
        channel : "Young King",
        view : "2Tr lượt xem",
        time : "1 năm trước"
    },
    {
        img : "../img/v14.png",
        title : "Âm nhạc thư giãn chữa bách bệnh | Sống khỏe mỗi ngày",
        channel : "Music Healthy",
        view : "4Tr lượt xem",
        time : "5 giờ trước"
    },
    
];

mapVideoSug = function(listVideoSug){
    return `
        <a href="" class="childern-video">
            <img src="${listVideoSug.img}" alt="">
            <div class="info-video">
                <b>${listVideoSug.title}</b>
                <p>${listVideoSug.channel}</p>
                <p>
                    ${listVideoSug.view} 
                    <i style="font-size: 4px;margin: 0px 6px;" class="fa-solid fa-circle"></i>
                    ${listVideoSug.time} 
                </p>
            </div>
        </a>
    `;
}

var mapGetVideoSug = listVideoSug.map(mapVideoSug).join('');
console.log(mapGetVideoSug)
videoSug.innerHTML = mapGetVideoSug;


//////////////////////////////////
var videoCmt = document.querySelector('.netizen-cmt');

var listVideoCmt = [
    {
        img : "../img/acc.png",
        name : "Thang Real",
        time : "2 năm trước",
        text : "My favorite anime 🥰",
        like : 14
    },
    {
        img : "../img/acc2.png",
        name : "Tran Nho Bach",
        time : "1 năm trước",
        text : "My fav anime+ my fav song+ superb editing overall just love it. Many many thanks for this video.",
        like : 89
    },
    {
        img : "../img/acc3.png",
        name : "Pham Anh Tu",
        time : "5 tháng trước",
        text : "Có ai là Việt Nam ở đây không ?",
        like : 89
    },
    {
        img : "../img/acc4.png",
        name : "Nguyen Van Khoa",
        time : "5 ngày trước",
        text : "Your Lie in April klhor eu chorei com esse anime ):",
        like : 123
    },
    {
        img : "../img/acc5.png",
        name : "Trần Đình Cường",
        time : "vài giây trước",
        text : "So sad 💓💞💞",
        like : 12
    },
    {
        img : "../img/acc4.png",
        name : "Loc Quang Son",
        time : "vài giây trước",
        text : "Tôi đã khóc rất nhiều khi xem bộ phim này =((",
        like : 9
    },
];

mapVideoCmt = function(listVideoCmt){
    return `
        <div class="box-cmt">
            <img src="${listVideoCmt.img}" alt="">
            <div class="cmt-content">
                <p>${listVideoCmt.name} <span>${listVideoCmt.time}</span></p>
                <p>${listVideoCmt.text}</p>
                <p><i class="fa-solid fa-thumbs-up"></i> ${listVideoCmt.like} <i class="fa-solid fa-thumbs-down"></i> <span><b>PHẢN HỒI</b></span></p>
            </div>
        </div>
    `;
}

var mapGetVideoCmt = listVideoCmt.map(mapVideoCmt).join('');
console.log(mapGetVideoSug);
videoCmt.innerHTML = mapGetVideoCmt;
