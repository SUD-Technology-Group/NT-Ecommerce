const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const handlebars = require('express-handlebars');
const db = require('./config/db');

const indexRouter = require('./src/routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'hbs');
app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
        defaultView: 'client/pages',
        layoutsDir: path.join(__dirname, 'src/views/layouts/'),
        partialsDir: [path.join(__dirname, 'src/views/partials/')],
    }),
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

db.connect();

app.get('/thongAPI', (req, res, next) => {
    return res.json([
        {
        idBaiHat: '1',
        tenBaiHat: 'Bones',
        artist: 'Image Dragon',
        hinhBaiHat: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDYed5whEf4g&psig=AOvVaw2FsKSZqxSgsSNWLcU63E9E&ust=1669970414277000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICM_9yC2PsCFQAAAAAdAAAAABAE',
        url: 'https://zingmp3.vn/bai-hat/Bones-Studio-Acoustic-Jess-Matt/ZWAAWII0.html'
        },
        {
            idBaiHat: '2',
            tenBaiHat: 'Bones',
            artist: 'Image Dragon',
            hinhBaiHat: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDYed5whEf4g&psig=AOvVaw2FsKSZqxSgsSNWLcU63E9E&ust=1669970414277000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICM_9yC2PsCFQAAAAAdAAAAABAE',
            url: 'https://zingmp3.vn/bai-hat/Bones-Studio-Acoustic-Jess-Matt/ZWAAWII0.html'
        }
    ])
})

app.get('/API/songbanner.php', (req, res, next) => {
    
    return res.json([
        {
          "IDQuangCao": "1",
          "HinhAnh": "https://jokopie.000webhostapp.com/HinhAnh/quang%20cao/iknowuknow.jpg",
          "NoiDung": "Ca khúc của Soobin Hoàng Sơn gửi đến mọi người",
          "IdBaiHat": "4",
          "TenBaiHat": "I Know U Know",
          "HinhBaiHat": "https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/iknowuknow500.jpg"
        },
        {
          "IDQuangCao": "2",
          "HinhAnh": "https://jokopie.000webhostapp.com/HinhAnh/quang%20cao/maxresdefault.jpg",
          "NoiDung": "Một bài hát mới của Madihu",
          "IdBaiHat": "5",
          "TenBaiHat": "Có Em",
          "HinhBaiHat": "https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/Coem.jpg"
        },
        {
          "IDQuangCao": "3",
          "HinhAnh": "https://jokopie.000webhostapp.com/HinhAnh/quang%20cao/maxresdefault%20(1).jpg",
          "NoiDung": "Một bài hát mới của Trúc Nhân ",
          "IdBaiHat": "6",
          "TenBaiHat": "Có Không Giữ Mất Đừng Tìm ",
          "HinhBaiHat": "https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/162668.jpg"
        },
        {
          "IDQuangCao": "4",
          "HinhAnh": "https://jokopie.000webhostapp.com/HinhAnh/quang%20cao/maxresdefault%20(2).jpg",
          "NoiDung": "Một bài hát mới của Hoàng Dũng ",
          "IdBaiHat": "7",
          "TenBaiHat": "Tôi Muốn Làm Cái Cây",
          "HinhBaiHat": "https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/1652170036557_640.jpg"
        }
      ])
})

app.get('/API/albumhot', (req, res, next) => {
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

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
