
const express = require('express');

const router = express.Router();

router.get('/songbanner.php', (req, res, next) => {
    
    return res.json([
        {
          "id": "1",
          "image": "https://avatar-ex-swe.nixcdn.com/slideshow/2022/11/30/4/7/e/1/1669804126301_org.jpg",
          "content": "Ca khúc của Soobin Hoàng Sơn gửi đến mọi người",
          "songid": "4",
          "songname": "I Know U Know",
          "songimage": "https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/iknowuknow500.jpg"
        },
        {
          "id": "2",
          "image": "https://jokopie.000webhostapp.com/HinhAnh/quang%20cao/maxresdefault.jpg",
          "content": "Một bài hát mới của Madihu",
          "songid": "5",
          "songname": "Có Em",
          "songimage": "https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/Coem.jpg"
        },
        {
          "id": "3",
          "image": "https://jokopie.000webhostapp.com/HinhAnh/quang%20cao/maxresdefault%20(1).jpg",
          "content": "Một bài hát mới của Trúc Nhân ",
          "songid": "6",
          "songname": "Có Không Giữ Mất Đừng Tìm ",
          "songimage": "https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/162668.jpg"
        },
        {
          "id": "4",
          "image": "https://jokopie.000webhostapp.com/HinhAnh/quang%20cao/maxresdefault%20(2).jpg",
          "content": "Một bài hát mới của Hoàng Dũng ",
          "songid": "7",
          "songname": "Tôi Muốn Làm Cái Cây",
          "songimage": "https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/1652170036557_640.jpg"
        }
      ])
})

router.get('/albumhot', (req, res, next) => {
    return res.json(
        [
            {
              "IdAlbum": "1",
              "TenAlbum": "Thấy là yêu thương ( Single )",
              "TencasiAlbum": "onlyC",
              "HinhanhAlbum": "https://jokopie.000webhostapp.com/HinhAnh/Album/thaylayeuthuong.jpg"
            }
        ]
    )
})

router.get('/baihatyeuthich.php', (req, res, next) => {
    return res.json(
        [
            {
              "Idbaihat": "1",
              "Tenbaihat": "Thấy Là Yêu Thương",
              "Hinhbaihat": "https://jokopie.000webhostapp.com/HinhAnh/Album/thaylayeuthuong.jpg",
              "Casi": "OnlyC, Lou Hoàng",
              "Linkbaihat": "https://zingmp3.vn/album/Sau-Lung-Anh-Co-Ai-Kia-Winter-Version-Single-Thieu-Bao-Tram/6B7WWCWB.html",
              "Luotthich": "1"
            },
            {
              "Idbaihat": "3",
              "Tenbaihat": "Memories",
              "Hinhbaihat": "https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/memories.jpg",
              "Casi": "Maroon 5",
              "Linkbaihat": "https://jokopie.000webhostapp.com/Nhac/Memories-Maroon5-6091839.mp3",
              "Luotthich": "1"
            },
            {
              "Idbaihat": "4",
              "Tenbaihat": "I Know U Know",
              "Hinhbaihat": "https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/iknowuknow500.jpg",
              "Casi": "Soobin Hoàng Sơn",
              "Linkbaihat": "https://jokopie.000webhostapp.com/Nhac/IKnowYouKnow-SoobinHoangSon-5430867.mp3",
              "Luotthich": "1"
            },
            {
              "Idbaihat": "5",
              "Tenbaihat": "Có Em",
              "Hinhbaihat": "https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/Coem.jpg",
              "Casi": "Madihu ft LowG",
              "Linkbaihat": "https://jokopie.000webhostapp.com/Nhac/Co-Em-Madihu-ft-Low-G.mp3",
              "Luotthich": "1"
            },
            {
              "Idbaihat": "6",
              "Tenbaihat": "Có Không Giữ Mất Đừng Tìm ",
              "Hinhbaihat": "https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/162668.jpg",
              "Casi": "Trúc Nhân ",
              "Linkbaihat": "https://jokopie.000webhostapp.com/Nhac/Co%20Khong%20Giu%20Mat%20Dung%20Tim%20-%20Truc%20Nhan.mp3",
              "Luotthich": "1"
            }
          ]
    )
})


router.get('/playlistforcurrentday.php', (req, res, next) => {
    return res.json(
        [
            {
              "IdPlaylist": "1",
              "Ten": "Top 100 POP Âu Mỹ Hay Nhất",
              "HinhPlaylist": "https://jokopie.000webhostapp.com/HinhAnh/playlist/backgroundtoppop2020.jpg",
              "Icon": "https://jokopie.000webhostapp.com/HinhAnh/playlist/top100popaumy.jpg"
            }
          ]
    )
})

router.get('/chudevatheloai.php', (req, res, next) => {
    return res.json(
        {
            "theloai": [
              {
                "IdTheloai": "1",
                "IdKeyChuDe": "1",
                "TenTheLoai": "Acoustic EDM",
                "HinhTheLoai": "https://jokopie.000webhostapp.com/HinhAnh/the%20loai/acousticedm.jpg"
              }
            ],
            "chude": [
              {
                "IdChuDe": "1",
                "TenChuDe": "Acoustic",
                "HinhChuDe": "https://jokopie.000webhostapp.com/HinhAnh/chu%20de/acoustic.jpg"
              }
            ]
          }
    )
})

router.get('/danhsachcacplaylist.php', (req, res, next) => {
    return res.json(
        [
            {
              "IdPlaylist": "1",
              "Ten": "Top 100 POP Âu Mỹ Hay Nhất",
              "HinhPlaylist": "https://jokopie.000webhostapp.com/HinhAnh/playlist/backgroundtoppop2020.jpg",
              "Icon": "https://jokopie.000webhostapp.com/HinhAnh/playlist/top100popaumy.jpg"
            }
          ]
    )
})

router.get('/tatcachude.php', (req, res, next) => {
    return res.json(
        [
            {
              "IdAlbum": "1",
              "TenAlbum": "Thấy là yêu thương ( Single )",
              "TenCaSiAlbum": "onlyC",
              "HinhAlbum": "https://jokopie.000webhostapp.com/HinhAnh/Album/thaylayeuthuong.jpg"
            }
          ]
    )
})

router.get('/tatcaalbum.php', (req, res, next) => {
    return res.json(
        [
            {
              "IdAlbum": "1",
              "TenAlbum": "Thấy là yêu thương ( Single )",
              "TenCaSiAlbum": "onlyC",
              "HinhAlbum": "https://jokopie.000webhostapp.com/HinhAnh/Album/thaylayeuthuong.jpg"
            }
          ]
    )
})

module.exports = router;