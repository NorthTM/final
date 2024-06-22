$(function () {

    // 首页轮播
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: true,
    });

    // 二级导航动态调整
    (function () {
        var strs = ["尖沙咀", "油麻地", "中环", "香港大学", "坚尼地城", "红磡", "铜锣湾", "太平山",];
        var colors = ["c3d59f", "dac0a7", "e2a9af", "e090b9", "3e0cb6d", "edb066", "f5926e", "f4727d",];
        var urls = ["https://baike.baidu.com/item/%E5%B0%96%E6%B2%99%E5%92%80/1230975?fr=ge_ala", 
                    "https://baike.baidu.com/item/%E6%B2%B9%E9%BA%BB%E5%9C%B0/4919757?fr=ge_ala", 
                    "https://baike.baidu.com/item/%E4%B8%AD%E7%8E%AF/2220250?fr=ge_ala", 
                    "https://baike.baidu.com/item/%E9%A6%99%E6%B8%AF%E5%A4%A7%E5%AD%A6%E7%AB%99/5493123?fr=ge_ala",
                    "https://baike.baidu.com/item/%E5%9D%9A%E5%B0%BC%E5%9C%B0%E5%9F%8E/4922948?fr=ge_ala", 
                    "https://baike.baidu.com/item/%E7%BA%A2%E7%A3%A1/5626068?fr=ge_ala", 
                    "https://baike.baidu.com/item/%E9%93%9C%E9%94%A3%E6%B9%BE/2025337?fr=ge_ala", 
                    "https://baike.baidu.com/item/%E5%A4%AA%E5%B9%B3%E5%B1%B1/68431?fr=ge_ala"];
        var str = "";
        for (var i = 0; i < strs.length; i++) {
            str += `<div class="item">
                <a href="${urls[i]}">
                    <div class="item-img"></div>
                    <p style='color:#${colors[i]}'>${strs[i]}</p>
                </a>
            </div>`;
        }
        $(".nav").html(str);
    })();

});
