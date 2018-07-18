$(function(){
     $(document).on('click','.alert-text',function () {
        $.alert('感谢您的提交');
     });
     
    $(document).on('click','.alert-text-title', function () {
        $.alert('Here goes alert text', 'Custom Title!');
    });
     
    $(document).on('click', '.alert-text-title-callback',function () {
        $.alert('Here goes alert text', 'Custom Title!', function () {
            $.alert('Button clicked!')
        });
    });
     
    $(document).on('click', '.alert-text-callback',function () {
        $.alert('Here goes alert text', function () {
            $.alert('Button clicked!')
        });
    });
  })
/*=== 默认为 standalone ===*/
$(function(){
  
  /*=== 有标题 ===*/
  var myPhotoBrowserCaptions1 = $.photoBrowser({
      photos : [
          {
              url: 'img/jingdian/jd1.jpg',
              caption: '外滩'
          },
          {
              url: 'img/jingdian/jd2.jpg',
              caption: '外滩'
          },{
              url: 'img/jingdian/jd3.jpg',
              caption: '城隍庙'
          },{
              url: 'img/jingdian/jd4.jpg',
              caption: '城隍庙'
          },{
              url: 'img/jingdian/jd5.jpg',
              caption: '南京路步行街'
          },{
              url: 'img/jingdian/jd6.jpg',
              caption: '上海博物馆'
          },{
              url: 'img/jingdian/jd7.jpg',
              caption: '上海杜莎夫人蜡像馆'
          },
          {
              url: 'img/jingdian/jd8.jpg',
              caption: '陈伟霆'
          },
          {
              url: 'img/jingdian/jd9.jpg',
              caption: '人民广场'
          },
          {
              url: 'img/jingdian/jd10.jpg',
              caption: '人民广场'
          },
          {
              url: 'img/jingdian/jd11.jpg',
              caption: '陆家嘴'
          },
          {
              url: 'img/jingdian/jd12.jpg',
              caption: '陆家嘴'
          },
          {
              url: 'img/jingdian/jd13.jpg',
              caption: '东方明珠'
          },
          {
              url: 'img/jingdian/jd14.jpg',
              caption: '环球金融中心'
          },
          {
              url: 'img/jingdian/jd15.jpg',
              caption: '滨江大道'
          },
          {
              url: 'img/jingdian/jd16.jpg',
              caption: '田子坊'
          },
          {
              url: 'img/jingdian/jd17.jpg',
              caption: 'M50创意园'
          },
          {
              url: 'img/jingdian/jd18.jpg',
              caption: '泰晤士小镇'
          },
      ],
      theme: 'dark',
      type: 'standalone'
  });
  $(document).on('click','.pb-standalone-captions1',function () {
    myPhotoBrowserCaptions1.open();
  });
 

 /*=== 有标题 ===*/
  var myPhotoBrowserCaptions2 = $.photoBrowser({
      photos : [
          {
              url: 'img/meishi/meishi1.jpg',
              caption: '青团'
          },
          {
              url: 'img/meishi/meishi2.jpg',
              caption: '耳光馄饨'
          },{
              url: 'img/meishi/meishi3.jpg',
              caption: '奶油小方'
          },{
              url: 'img/meishi/meishi4.jpg',
              caption: '小杨生煎'
          },{
              url: 'img/meishi/meishi5.jpg',
              caption: '南翔馒头店'
          },{
              url: 'img/meishi/meishi6.jpg',
              caption: '真圆粢饭团'
          },{
              url: 'img/meishi/meishi7.jpg',
              caption: '大王锅贴'
          },{
              url: 'img/meishi/meishi8.2.jpg',
              caption: '蟹黄鱼'
          },{
              url: 'img/meishi/meishi9.jpg',
              caption: '佳家汤包'
          },{
              url: 'img/meishi/meishi10.jpg',
              caption: '阿大葱油饼'
          },{
              url: 'img/meishi/meishi11.jpg',
              caption: '虹口糕团'
          },{
              url: 'img/meishi/meishi12.jpg',
              caption: '牛蛙面'
          },{
              url: 'img/meishi/meishi13.jpg',
              caption: '桃源眷村'
          },{
              url: 'img/meishi/meishi14.jpg',
              caption: '蒲石小点'
          },{
              url: 'img/meishi/meishi15.jpg',
              caption: '花悦庭'
          },{
              url: 'img/meishi/meishi16.5.jpg',
              caption: '新仙清汤牛腩'
          },{
              url: 'img/meishi/meishi16.jpg',
              caption: 'hava a good time'
          },{
              url: 'img/meishi/meishi17.jpg',
              caption: 'kuma cafe & store'
          },{
              url: 'img/meishi/meishi18.jpg',
              caption: 'Line Friends cafe & Store'
          },{
              url: 'img/meishi/meishi19.jpg',
              caption: 'Lady M'
          },
          {
              url: 'img/meishi/meishi20.jpg',
              caption: '喜茶'
          },
      ],
      theme: 'dark',
      type: 'standalone'
  });
  $(document).on('click','.pb-standalone-captions2',function () {
    myPhotoBrowserCaptions2.open();
  });

  /*=== 有标题 ===*/
  var myPhotoBrowserCaptions3 = $.photoBrowser({
      photos : [
          {
              url: 'img/zhusu/zhusu2.jpg',
              caption: ''
          },
          {
              url: 'img/zhusu/zhusu4.jpg',
              caption: ''
          },{
              url: 'img/zhusu/zhusu8.jpg',
              caption: ''
          },{
              url: 'img/zhusu/zhusu11.jpg',
              caption: ''
          },{
              url: 'img/zhusu/zhusu12.jpg',
              caption: ''
          },{
              url: 'img/zhusu/zhusu13.jpg',
              caption: ''
          },{
              url: 'img/zhusu/zhusu14.jpg',
              caption: ''
          },{
              url: 'img/zhusu/zhusu15.jpg',
              caption: ''
          },
      ],
      theme: 'dark',
      type: 'standalone'
  });
  $(document).on('click','.pb-standalone-captions3',function () {
    myPhotoBrowserCaptions3.open();
  });
})

$(function(){
     
    $(document).on('click', '.alert-text-callback',function () {
        $.alert('1', function () {
            $.alert('2', function () {
              $.alert('3', function (){
                 window.location.href='foru.html';
              });
            });
        });
    });
  })