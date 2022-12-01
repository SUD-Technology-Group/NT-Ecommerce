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
        songid: '1',
        songname: 'Bones',
        artist: 'Image Dragon',
        songimage: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDYed5whEf4g&psig=AOvVaw2FsKSZqxSgsSNWLcU63E9E&ust=1669970414277000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICM_9yC2PsCFQAAAAAdAAAAABAE',
        url: 'https://zingmp3.vn/bai-hat/Bones-Studio-Acoustic-Jess-Matt/ZWAAWII0.html'
        },
        {
            songid: '2',
            songname: 'Bones',
            artist: 'Image Dragon',
            songimage: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDYed5whEf4g&psig=AOvVaw2FsKSZqxSgsSNWLcU63E9E&ust=1669970414277000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICM_9yC2PsCFQAAAAAdAAAAABAE',
            url: 'https://zingmp3.vn/bai-hat/Bones-Studio-Acoustic-Jess-Matt/ZWAAWII0.html'
        }
    ])
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
