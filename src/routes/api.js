const express = require('express');
const router = express.Router();

let songs = [
    {
        Idbaihat: '1',
        Tenbaihat: 'Phố đã lên đèn',
        Hinhbaihat: 'https://nguoinoitieng.tv/images/nnt/102/0/bglq.jpg',
        Casi: 'Huyền Tâm Môn',
        Linkbaihat:
            'https://firebasestorage.googleapis.com/v0/b/music-app-7af26.appspot.com/o/Pho%20Da%20Len%20Den%20-%20Huyen%20Tam%20Mon%20-%20Huyen%20T.mp3?alt=media&token=f80a6884-1d6a-4ca2-86ee-2029e54afc1a',
        Luotthich: '1',
    },
    {
        Idbaihat: '2',
        Tenbaihat: 'Chuyện đôi ta',
        Hinhbaihat: 'https://i.ytimg.com/vi/6eONmnFB9sw/hqdefault.jpg',
        Casi: 'EmceeDaLab - Ft. Muội',
        Linkbaihat: 'https://firebasestorage.googleapis.com/v0/b/music-app-7af26.appspot.com/o/ChuyenDoiTa-EmceeLDaLAB-7120974.mp3?alt=media&token=b743d045-96e5-4302-aec6-6e6903f8d975',
        Luotthich: '1',
    },
    {
        Idbaihat: '3',
        Tenbaihat: 'Lời tạm biệt chưa nói',
        Hinhbaihat: 'https://i.ytimg.com/vi/B9PDYlaV84w/maxresdefault.jpg',
        Casi: 'Grey-D - Ft. TLinh',
        Linkbaihat: 'https://firebasestorage.googleapis.com/v0/b/music-app-7af26.appspot.com/o/LoiTamBietChuaNoi-GREYDDoanTheLanOrange-7613756.mp3?alt=media&token=f58b553a-739f-4c2f-ac30-f9198008545e',
        Luotthich: '1',
    },
    {
        Idbaihat: '4',
        Tenbaihat: 'Tình yêu đến sau',
        Hinhbaihat: 'https://i.ytimg.com/vi/gpMjpxiI4oc/maxresdefault.jpg',
        Casi: 'Myra Trần',
        Linkbaihat: 'https://firebasestorage.googleapis.com/v0/b/music-app-7af26.appspot.com/o/TinhYeuDenSau-MyraTran-8294285.mp3?alt=media&token=ccc0e490-e95c-470e-97d8-71b850871c1b',
        Luotthich: '1',
    },
    {
        Idbaihat: '5',
        Tenbaihat: 'Khó vẽ nụ cười',
        Hinhbaihat: 'https://avatar-ex-swe.nixcdn.com/song/share/2019/09/18/4/f/6/c/1568774493494.jpg',
        Casi: 'Đạt G - Ft. Du Uyên',
        Linkbaihat: 'https://firebasestorage.googleapis.com/v0/b/music-app-7af26.appspot.com/o/KhoVeNuCuoi-DatGDuUyen-6114344.mp3?alt=media&token=29e08950-d37b-472c-b323-568342ecc9e1',
        Luotthich: '1',
    },
    {
        Idbaihat: '6',
        Tenbaihat: 'Để Mị nói cho mà nghe',
        Hinhbaihat: 'https://vtv1.mediacdn.vn/thumb_w/650/2019/6/24/6515288525379895095650748160869936109977600o1140x641-1561360005975305648654.jpg',
        Casi: 'Hoàng Thùy Linh',
        Linkbaihat: 'https://firebasestorage.googleapis.com/v0/b/music-app-7af26.appspot.com/o/DeMiNoiChoMaNghe-HoangThuyLinh-6153588.mp3?alt=media&token=37f9f2fb-c79b-4a84-908c-33336fe030ed',
        Luotthich: '1',
    },
];

let playlist = [];

router.get('/songbanner.php', (req, res, next) => {
    return res.json([
        {
            id: '1',
            image: 'https://avatar-ex-swe.nixcdn.com/slideshow/2022/11/30/4/7/e/1/1669804126301_org.jpg',
            content: 'Ca khúc mới cũa Lady Mây gửi đến mọi người',
            songid: '4',
            songname: 'Tình yêu đến sau',
            songimage: 'https://nguoinoitieng.tv/images/nnt/102/0/bglq.jpg',
        },
        {
            id: '2',
            image: 'https://jokopie.000webhostapp.com/HinhAnh/quang%20cao/maxresdefault.jpg',
            content: 'Một bài hát mới của Madihu',
            songid: '5',
            songname: 'Có Em',
            songimage: 'https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/Coem.jpg',
        },
        {
            id: '3',
            image: 'https://jokopie.000webhostapp.com/HinhAnh/quang%20cao/maxresdefault%20(1).jpg',
            content: 'Một bài hát mới của Trúc Nhân ',
            songid: '6',
            songname: 'Có Không Giữ Mất Đừng Tìm ',
            songimage: 'https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/162668.jpg',
        },
        {
            id: '4',
            image: 'https://jokopie.000webhostapp.com/HinhAnh/quang%20cao/maxresdefault%20(2).jpg',
            content: 'Một bài hát mới của Hoàng Dũng ',
            songid: '7',
            songname: 'Tôi Muốn Làm Cái Cây',
            songimage: 'https://jokopie.000webhostapp.com/HinhAnh/bai%20hat/1652170036557_640.jpg',
        },
    ]);
});

router.get('/albumhot', (req, res, next) => {
    return res.json([
        {
            IdAlbum: '1',
            TenAlbum: 'Thấy là yêu thương ( Single )',
            TencasiAlbum: 'onlyC',
            HinhanhAlbum: 'https://jokopie.000webhostapp.com/HinhAnh/Album/thaylayeuthuong.jpg',
        },
    ]);
});

router.get('/baihatyeuthich.php', (req, res, next) => {
    return res.json(songs);
});

router.get('/playlistforcurrentday.php', (req, res, next) => {
    return res.json([
        {
            IdPlaylist: '1',
            Ten: 'Top 100 POP Âu Mỹ Hay Nhất',
            HinhPlaylist: 'https://jokopie.000webhostapp.com/HinhAnh/playlist/backgroundtoppop2020.jpg',
            Icon: 'https://jokopie.000webhostapp.com/HinhAnh/playlist/top100popaumy.jpg',
        },
    ]);
});

router.get('/chudevatheloai.php', (req, res, next) => {
    return res.json({
        theloai: [
            {
                IdTheloai: '1',
                IdKeyChuDe: '1',
                TenTheLoai: 'Acoustic EDM',
                HinhTheLoai: 'https://jokopie.000webhostapp.com/HinhAnh/the%20loai/acousticedm.jpg',
            },
        ],
        chude: [
            {
                IdChuDe: '1',
                TenChuDe: 'Acoustic',
                HinhChuDe: 'https://jokopie.000webhostapp.com/HinhAnh/chu%20de/acoustic.jpg',
            },
        ],
    });
});

router.get('/danhsachcacplaylist.php', (req, res, next) => {
    return res.json([
        {
            IdPlaylist: '1',
            Ten: 'Top 100 POP Âu Mỹ Hay Nhất',
            HinhPlaylist: 'https://jokopie.000webhostapp.com/HinhAnh/playlist/backgroundtoppop2020.jpg',
            Icon: 'https://jokopie.000webhostapp.com/HinhAnh/playlist/top100popaumy.jpg',
        },
    ]);
});

router.get('/tatcachude.php', (req, res, next) => {
    return res.json([
        {
            IdAlbum: '1',
            TenAlbum: 'Thấy là yêu thương ( Single )',
            TenCaSiAlbum: 'onlyC',
            HinhAlbum: 'https://jokopie.000webhostapp.com/HinhAnh/Album/thaylayeuthuong.jpg',
        },
    ]);
});

router.get('/tatcaalbum.php', (req, res, next) => {
    return res.json([
        {
            IdAlbum: '1',
            TenAlbum: 'Thấy là yêu thương ( Single )',
            TenCaSiAlbum: 'onlyC',
            HinhAlbum: 'https://jokopie.000webhostapp.com/HinhAnh/Album/thaylayeuthuong.jpg',
        },
    ]);
});

router.post('/danhsachbaihat.php', (req, res, next) => {
    const id = req.body.idquangcao;
    let data = songs.filter((s) => s.Idbaihat == id);
    return res.json(data);
});

router.post('/addMusic', (req, res, next) => {
    let { Idbaihat, Tenbaihat, Hinhbaihat, Casi, Linkbaihat, Luotthich } = req.body;
    playlist.add({...req.body});
    return res.json("True");
})

router.get('playlist', (req, res, next) => {
    return res.json(playlist);
})

module.exports = router;
