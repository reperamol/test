/*==========================================================
  common.js
  2014/06/03
==========================================================*/

/*==========================================================
  変数宣言
==========================================================*/

/*==========================================================
  load時
==========================================================*/
$(window).load(function() {
  // image link hover
  $('.banner_area li a img,'+
    '.pickup_area li,'+
    '.search_area a,'+
    '.mail_area a,'+
    '#index .shop_area .box a,'+
    '#navi-top .main_area .box a,'+
    '#access-top .link a,'+
    '#navi-pet-sp .navi_area a,'+
    '#navi-cafe-sp .navi_area a,'+
    'footer .area_1 a,'+
    'footer .area_4 a'
  ).hover(
    function(){ 
      $(this).queue([]).stop().fadeTo('normal', 0.7);
    },
    function(){
      $(this).queue([]).stop().fadeTo('normal', 1.0);
    }
  );

  // accordion
  $('header .area_2 .btn').click(function(){
    $(this).nextAll('.accordion').slideToggle();
    $(this).toggleClass('open');
  });
  $('.search_area .title').click(function(){
    // ID取得
    var id = $('body').attr('id'); 
    // トップページの場合
    if (id == 'index') {
      // 画面サイズ取得
      var w = $(window).width();
      // スマホより大きい場合
      if (w > 645) {
        // 終了
        return false;
      }
    }
    $(this).next('.accordion').slideToggle();
  });
  $('#index .shop_area .btn').click(function(){
    $(this).prev('.accordion').slideToggle();
    $(this).fadeOut();
  });
  $('#shop-map .main_area .btn,'+
    '#shop-list .main_area .btn').click(function(){
    $(this).next('.accordion').slideToggle(500);
    $(this).toggleClass('open');
  });

  // kakure
    $('header .area_2 .li_1').click(function(){
        // ID取得
        var id = $('body').attr('id');
        // トップページの場合
        if (id == 'index') {
            // 画面サイズ取得
            var w = $(window).width();
            // スマホより大きい場合
            if (w > 645) {
                // 終了
                return false;
            }
        }
        $(this).next('.kakure').slideToggle();
    });
    // hover
    $("#index header .area_2 .center_area").hover(
        function () {
            $(this).children('.kakure').queue([]).animate({left:230}, 500);
        },
        function () {
            $(this).children('.kakure').queue([]).animate({left:-95}, 500);
        }
    );

// var userAgent = window.navigator.userAgent.toLowerCase();
// var appVersion = window.navigator.appVersion.toLowerCase();

  // font size
  $('header .area_1 .li_5 img').click(function(){
    // フォントサイズ変更
    $('html').css({'fontSize': '62.5%'});
    // クラス変更
    $(this).parent().parent().removeClass('l_on');
    $('body').removeClass('font_l');
    // クッキー保存
    $.removeCookie('mmss-font-size');
    $.cookie('mmss-font-size', 'S');
    // IE8
    // if (userAgent.indexOf('msie') != -1) {
    //   if (appVersion.indexOf("msie 8.") != -1) {
/*
        $('div').css({'fontSize': '98%'});
        $('p').css({'fontSize': '70%'});
        $('a').css({'fontSize': '100%'});
        $('span').css({'fontSize': '100%'});
*/
    //   }
    // }
  });
  $('header .area_1 .li_6 img').click(function(){
    // フォントサイズ変更
    $('html').css({'fontSize': '80%'});
    // クラス変更
    $(this).parent().parent().addClass('l_on');
    $('body').addClass('font_l');
    // クッキー保存
    $.removeCookie('mmss-font-size');
    $.cookie('mmss-font-size', 'L');
    // IE8
    // if (userAgent.indexOf('msie') != -1) {
    //   if (appVersion.indexOf("msie 8.") != -1) {
/*
        $('div').css({'fontSize': '100%'});
        $('p').css({'fontSize': '90%'});
        $('a').css({'fontSize': '140%'});
        $('span').css({'fontSize': '120%'});
*/


  // フォントサイズ取得
  // フォントサイズ計算
  // フォントサイズ設定

    //   }
    // }
  });
//console.log('1'.$.cookie('mmss-font-size'));



/*
    // IE8
    if (userAgent.indexOf('msie') != -1) {
      if (appVersion.indexOf("msie 8.") != -1) {

      }
    }

  // 要素取得
  var elements = $("div").css("fontSize");
console.log(elements);
//console.log($('p').css('fontSize'));

//$("div").css("border", "3px solid red");
        //var styles = document.getElementsByTagName('link'),

//console.log(document.getElementsByTagName('div'));
//console.log($('body').find('div').css("fontSize"));

  for ( var i = 0; i < elements.length; i++) {
var aa = elements[i];

//console.log(aa);

    // if ( styles[i].rel.toLowerCase() === 'stylesheet' && styles[i].getAttribute('data-norem') === null ) {
    //     filteredLinks.push( styles[i].href );
    // }
  }
*/






  // hover
  $("#index .search_area").hover(
    function () {
      $(this).children('.accordion').queue([]).animate({left:230}, 500);
    },
    function () {
      $(this).children('.accordion').queue([]).animate({left:-95}, 500);
    }
  );

  // thumb_img click
  $('#shop-detail .thumb_img div').click(function(){
    var src = $(this).children('img').attr('src');
    var alt = $(this).children('img').attr('alt');
    $(this).parent().prev('.main_img').children('img').attr({src:src, alt:alt});
    $(this).parent().prev('.main_img').children('img').hide();
    $(this).parent().prev('.main_img').children('img').fadeIn('slow');
    $(this).parent().children().removeClass('on');
    $(this).addClass('on');
  });

  // トップページの場合
  if ($("body").attr("id") == "index") {
    // 時間差実行
    setTimeout(function(){
      // main_visual
      $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        pause: 4000,
        speed: 10000000,
        controls: false
      });
      // all show
      $('body').hide();
      $('body').css("visibility", "visible");
      if ($(window).width() < 660) {
        $('.shop_area .accordion').css("display", "none");
          $('#index header .area_2 .center_area .kakure').css("display", "none");
      }
      $('body').fadeIn(500, function() {
        $('#index .search_area .accordion').delay(1000).animate({left:-95}, 500);
      });
    }, 500);
  } else {
      $('body').delay(50).css("visibility", "visible");
  }

  // pngバグ修正
  if(navigator.userAgent.indexOf("MSIE") != -1) {
    $('img').each(function() {
      if($(this).attr('src').indexOf('.png') != -1) {
        $(this).css({
          'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
          $(this).attr('src') +
          '", sizingMethod="scale");'
        });
      }
    });
  }

  // windowResize
  windowResize();

});


/*==========================================================
  ready時
==========================================================*/
$(document).ready( function(){
  // font size
  if($.cookie('mmss-font-size') == 'L'){
    // フォントサイズ変更
    $('html').css({'fontSize': '80%'});
    // クラス変更
    $('header .area_1 ul').addClass('l_on');
    $('body').addClass('font_l');
  }
});


/*==========================================================
  resize時
==========================================================*/
$(window).resize(function() {
  windowResize();
});


/*==========================================================
  function
==========================================================*/
// tel link
function smtel(telno) {
  var device = navigator.userAgent;
  if((device.indexOf('iPhone') > 0 && device.indexOf('iPad') == -1) || device.indexOf('Android') > 0){
    document.write('<a href="tel:'+telno.replace(/-/g, '')+'">'+telno+'</a>');
  }else{
    document.write(telno);
  }
}

// slider fit
function windowResize() {
  // 画像サイズ設定
  var img_w = 2000;
  var img_h = 1200;
  // ウインドウサイズ取得
  var window_w = $(window).width();
  var window_h = $(window).height();
  // 縦横比取得
  var img_ratio = img_h / img_w;
  var window_ratio = window_h / window_w;
/*
  // 基準比率を超えない場合
  if (img_ratio > window_ratio) {
    // 横幅合わせ
    $('#index #main_visual_pc').css({'width': '100%'});
  }
  // 基準比率を超える場合
  else {
    // 縦幅から横幅計算合わせ
    $('#index #main_visual_pc').css({'width': window_h / img_ratio});
  }
*/
//背景画像リサイズ横幅をfit
var w = $(window).width();
var h = $(window).width()*1200/2000;
$('#index #main_visual_pc').css({'width':w, 'height':h, 'top':-(h-$(window).height())/2, 'left':0});
//横幅をfitした際に、天地に余白が出てしまう場合
if($(window).height() > h){
w = $(window).height()*2000/1200;
$('#index #main_visual_pc').css({'width':w, 'height':$(window).height(), 'top':0, 'left':-(w-$(window).width())/2});
}


  // PC表示の場合
  if (645 < window_w) {
    // コンテンツ位置設定
    $('#index .banner_area').css({'padding-top': window_h - (100+35)});
  }
  // SP表示の場合
  else {
    // コンテンツ位置設定
    $('#index .banner_area').css({'padding-top': 25});
  }

}
