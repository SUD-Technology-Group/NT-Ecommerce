
const express = require('express');
const router = express.Router();

router.get('/songbanner.php', (req, res, next) => {
    
    return res.json([
        {
          "id": "1",
          "image": "https://www.nhaccuatui.com/bai-hat/u-me-em-kay-tran.vwrXWDDu5bVj.html",
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

module.exports = router;