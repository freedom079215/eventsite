// JavaScript Document
function MM_swapImgRestore() { //v3.0
    var i, x, a = document.MM_sr; for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}
function MM_preloadImages() { //v3.0
    var d = document; if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length, a = MM_preloadImages.arguments; for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) { d.MM_p[j] = new Image; d.MM_p[j++].src = a[i]; }
    }
}

function MM_findObj(n, d) { //v4.01
    var p, i, x; if (!d) d = document; if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document; n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n]; for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
    if (!x && d.getElementById) x = d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
    var i, j = 0, x, a = MM_swapImage.arguments; document.MM_sr = new Array; for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) { document.MM_sr[j++] = x; if (!x.oSrc) x.oSrc = x.src; x.src = a[i + 2]; }
}

var x;
var currentCanvas = null;
$(document).ready(function () {
    $('#onoff').click(
        function () {
            $(".popmenu").slideToggle();
        }
    );

    $(window).resize(function () {
        x = $(window).width();
        if (x > 1001) {//
            if (!currentCanvas || currentCanvas != 'kvw') {
                $(".popmenu").show();
                $("#kv").attr("src","https://mkp.taishinbank.com.tw/TsCms/event/mk171201/kvw")
                currentCanvas = 'kvw'
            }
        }
        if (x < 1000) {//    
            if (!currentCanvas || currentCanvas != 'kvh') {
                $(".popmenu").hide();
    			$("#kv").attr("src","https://mkp.taishinbank.com.tw/TsCms/event/mk171201/kvh")
                currentCanvas = 'kvh'
            }
        }
    });
    $(window).trigger("resize");//再次觸發執行因為IE或是其他瀏覽器有時候會漏掉
});

function pa01go() { $('html,body').stop().animate({ scrollTop: $('pa01').offset().top }, 800); }
function pa02go() { $('html,body').stop().animate({ scrollTop: $('pa02').offset().top }, 800); }
function pa03go() { $('html,body').stop().animate({ scrollTop: $('pa03').offset().top }, 800); }
function pa04go() { $('html,body').stop().animate({ scrollTop: $('pa04').offset().top }, 800); }

$(document).ready(function () {
    $(document).ready(init);
    function init() { $(window).scroll(windowscroll); }
    //<!--偵測目前卷軸位置改變上下BAR其他外觀-->
    function windowscroll() {
        var this_scrollTop = $(this).scrollTop();
        if (this_scrollTop >= 0 && this_scrollTop < 50) {
            $('#btn01').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_05.png");
            $('#btn02').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_06.png");
            $('#btn03').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_07.png");
            $('#btn04').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_09.png");
			$('.scrolldown').fadeIn();
        }
        if (this_scrollTop > 50) {
			$('.scrolldown').fadeOut();
        }
        if (this_scrollTop > $("pa01").offset().top - 100) {
            $('#btn01').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/headero_05.png");
            $('#btn02').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_06.png");
            $('#btn03').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_07.png");
            $('#btn04').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_09.png");

        }
        if (this_scrollTop > $("pa02").offset().top - 100) {
            $('#btn01').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_05.png");
            $('#btn02').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/headero_06.png");
            $('#btn03').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_07.png");
            $('#btn04').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_09.png");


        }
        if (this_scrollTop > $("pa03").offset().top - 100) {
            $('#btn01').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_05.png");
            $('#btn02').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_06.png");
            $('#btn03').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/headero_07.png");
            $('#btn04').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_09.png");

        }
        if (this_scrollTop > $("pa04").offset().top - 100) {
            $('#btn01').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_06.png");
            $('#btn03').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/header_07.png");
            $('#btn04').attr("src", "https://mkp.taishinbank.com.tw/TsCms/event/mk171201/img/images/headero_09.png");

        }
    }
})

jQuery(function ($) {
    var $doc = $(document)
    var formula = 1 + (1.12 / 100)
    var $principal = $('#principal')
    var $principalAndInterest = $('#principal-and-interest')

    $principal.add($principalAndInterest).val('0')

    $doc.on('keypress', '#principal', function (event) {
        if (event.which != 8 && event.which != 0 && (event.which < 48 || event.which > 57)) {
            return false
        }
    }).on('keypress', '#principal', function () {
        $principalAndInterest.val(calc($principal.val()))
    }).on('keyup', '#principal', function () {
        var principal = $principal.val()
        principal.replace(/[^0-9]/g, '')
        $principal.val(principal.replace(/[^0-9]/g, ''))
    }).on('keyup', '#principal', function () {
        $principalAndInterest.val(calc($principal.val()))
    }).on('focus', '#principal', function () {
        $principal.select()
    })

    function calc(money) {
        return Math.round(parseFloat(money) * formula)
    }
})

//< !--canvas-->
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    createjs.MotionGuidePlugin.install();
    images = images || {};
    ss = ss || {};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function handleComplete(evt) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }
    exportRoot = new lib.kv();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    }

    makeResponsive(true, 'both', false, 1);
    fnStartAnimation();
}

function IsMobile() {
    var Uagent = navigator.userAgent || navigator.vendor || window.opera;
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(Uagent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(Uagent.substr(0, 4)));
}

jQuery(function ($) {
    (function (lib, img, cjs, ss, an) {

        var p; // shortcut to reference prototypes
        lib.ssMetadata = [
            { name: "kv_atlas_", frames: [[367, 875, 114, 68], [208, 875, 157, 93], [492, 0, 258, 257], [309, 528, 264, 242], [575, 528, 219, 219], [752, 0, 211, 206], [656, 259, 212, 217], [0, 875, 206, 124], [575, 749, 248, 147], [0, 556, 300, 190], [309, 307, 345, 219], [0, 0, 490, 305], [796, 478, 181, 180], [0, 307, 307, 247], [0, 772, 513, 101]] }
        ];


        // symbols:



        (lib.小小金花 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();



        (lib.小金花 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(1);
        }).prototype = p = new cjs.Sprite();



        (lib.圖層0 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(2);
        }).prototype = p = new cjs.Sprite();



        (lib.圖層2 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(3);
        }).prototype = p = new cjs.Sprite();



        (lib.圖層3 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(4);
        }).prototype = p = new cjs.Sprite();



        (lib.圖層4 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(5);
        }).prototype = p = new cjs.Sprite();



        (lib.圖層5 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(6);
        }).prototype = p = new cjs.Sprite();



        (lib.大金花 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(7);
        }).prototype = p = new cjs.Sprite();



        (lib._070 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(8);
        }).prototype = p = new cjs.Sprite();



        (lib._090 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(9);
        }).prototype = p = new cjs.Sprite();



        (lib._120 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(10);
        }).prototype = p = new cjs.Sprite();



        (lib._168 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(11);
        }).prototype = p = new cjs.Sprite();



        (lib.旺春聯 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(12);
        }).prototype = p = new cjs.Sprite();



        (lib.狗 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(13);
        }).prototype = p = new cjs.Sprite();



        (lib.辛勤工作回報的年終獎金正在想如何好好規劃旺旺發財新臺幣定存專案最高階年息168讓您穩穩存好存滿加薪又加值 = function () {
            this.spriteSheet = ss["kv_atlas_"];
            this.gotoAndStop(14);
        }).prototype = p = new cjs.Sprite();
        // helper functions:

        function mc_symbol_clone() {
            var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
            clone.gotoAndStop(this.currentFrame);
            clone.paused = this.paused;
            clone.framerate = this.framerate;
            return clone;
        }

        function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
            var prototype = cjs.extend(symbol, cjs.MovieClip);
            prototype.clone = mc_symbol_clone;
            prototype.nominalBounds = nominalBounds;
            prototype.frameBounds = frameBounds;
            return prototype;
        }


        (lib.補間動畫3 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.狗();
            this.instance.parent = this;
            this.instance.setTransform(-153.5, -123.5);

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-153.5, -123.5, 307, 247);


        (lib.補間動畫2 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.狗();
            this.instance.parent = this;
            this.instance.setTransform(-153.5, -123.5);

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-153.5, -123.5, 307, 247);


        (lib.補間動畫1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.狗();
            this.instance.parent = this;
            this.instance.setTransform(-153.5, -123.5);

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-153.5, -123.5, 307, 247);


        (lib.圖層5_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.圖層5();
            this.instance.parent = this;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = getMCSymbolPrototype(lib.圖層5_1, new cjs.Rectangle(0, 0, 212, 217), null);


        (lib.圖層4_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.圖層4();
            this.instance.parent = this;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = getMCSymbolPrototype(lib.圖層4_1, new cjs.Rectangle(0, 0, 211, 206), null);


        (lib.圖層3_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.圖層3();
            this.instance.parent = this;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = getMCSymbolPrototype(lib.圖層3_1, new cjs.Rectangle(0, 0, 219, 219), null);


        (lib.圖層2_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.圖層2();
            this.instance.parent = this;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = getMCSymbolPrototype(lib.圖層2_1, new cjs.Rectangle(0, 0, 264, 242), null);


        (lib.圖層0_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.圖層0();
            this.instance.parent = this;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = getMCSymbolPrototype(lib.圖層0_1, new cjs.Rectangle(0, 0, 258, 257), null);


        (lib.辛勤工作回報的年終獎金正在想如何好好規劃旺旺發財新臺幣定存專案最高階年息168讓您穩穩存好存滿加薪又加值_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.辛勤工作回報的年終獎金正在想如何好好規劃旺旺發財新臺幣定存專案最高階年息168讓您穩穩存好存滿加薪又加值();
            this.instance.parent = this;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = getMCSymbolPrototype(lib.辛勤工作回報的年終獎金正在想如何好好規劃旺旺發財新臺幣定存專案最高階年息168讓您穩穩存好存滿加薪又加值_1, new cjs.Rectangle(0, 0, 513, 101), null);


        (lib.大金花_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.大金花();
            this.instance.parent = this;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = getMCSymbolPrototype(lib.大金花_1, new cjs.Rectangle(0, 0, 206, 124), null);


        (lib.旺春聯_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.旺春聯();
            this.instance.parent = this;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = getMCSymbolPrototype(lib.旺春聯_1, new cjs.Rectangle(0, 0, 181, 180), null);


        (lib._168_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib._168();
            this.instance.parent = this;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = getMCSymbolPrototype(lib._168_1, new cjs.Rectangle(0, 0, 490, 305), null);


        (lib._120_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib._120();
            this.instance.parent = this;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = getMCSymbolPrototype(lib._120_1, new cjs.Rectangle(0, 0, 345, 219), null);


        (lib._090_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib._090();
            this.instance.parent = this;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = getMCSymbolPrototype(lib._090_1, new cjs.Rectangle(0, 0, 300, 190), null);


        (lib._070_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib._070();
            this.instance.parent = this;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = getMCSymbolPrototype(lib._070_1, new cjs.Rectangle(0, 0, 248, 147), null);


        (lib.小金花_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.小金花();
            this.instance.parent = this;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = getMCSymbolPrototype(lib.小金花_1, new cjs.Rectangle(0, 0, 157, 93), null);


        (lib.小小金花_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.小小金花();
            this.instance.parent = this;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        }).prototype = getMCSymbolPrototype(lib.小小金花_1, new cjs.Rectangle(0, 0, 114, 68), null);


        (lib.元件4 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.圖層2_1();
            this.instance.parent = this;
            this.instance.setTransform(204.5, -221.4, 0.609, 0.609, 0, 0, 0, 132.2, 121.3);

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ regX: 132, regY: 121, x: 204.4, y: -183.7 }, 0).wait(1).to({ y: -107.8 }, 0).wait(1).to({ y: -9.1 }, 0).wait(1).to({ y: 41.3 }, 0).wait(1).to({ y: 69.3 }, 0).wait(1).to({ y: 87 }, 0).wait(1).to({ y: 98.9 }, 0).wait(1).to({ y: 107.1 }, 0).wait(1).to({ y: 112.5 }, 0).wait(1).to({ y: 116 }, 0).wait(1).to({ y: 117.8 }, 0).wait(1).to({ regX: 132.2, regY: 121.3, x: 204.5, y: 118.6 }, 0).to({ y: 88.6 }, 5, cjs.Ease.get(-1)).wait(62));

            // 圖層 2
            this.instance_1 = new lib.圖層3_1();
            this.instance_1.parent = this;
            this.instance_1.setTransform(314.8, -225.7, 0.609, 0.609, 0, 0, 0, 109.8, 109.7);
            this.instance_1._off = true;

            this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({ _off: false }, 0).wait(1).to({ regX: 109.5, regY: 109.5, x: 314.6, y: -187.9 }, 0).wait(1).to({ y: -111.9 }, 0).wait(1).to({ y: -13.2 }, 0).wait(1).to({ y: 37.1 }, 0).wait(1).to({ y: 65.1 }, 0).wait(1).to({ y: 82.8 }, 0).wait(1).to({ y: 94.8 }, 0).wait(1).to({ y: 102.9 }, 0).wait(1).to({ y: 108.4 }, 0).wait(1).to({ y: 111.8 }, 0).wait(1).to({ y: 113.6 }, 0).wait(1).to({ regX: 109.8, regY: 109.7, x: 314.8, y: 114.3 }, 0).to({ y: 84.3 }, 5, cjs.Ease.get(-1)).wait(57));

            // 圖層 3
            this.instance_2 = new lib.圖層4_1();
            this.instance_2.parent = this;
            this.instance_2.setTransform(415.8, -226.7, 0.609, 0.609, 0, 0, 0, 105.7, 103.2);
            this.instance_2._off = true;

            this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({ _off: false }, 0).wait(1).to({ regX: 105.5, regY: 103, x: 415.6, y: -184.1 }, 0).wait(1).to({ y: -92.8 }, 0).wait(1).to({ y: 3.2 }, 0).wait(1).to({ y: 48 }, 0).wait(1).to({ y: 73.1 }, 0).wait(1).to({ y: 88.9 }, 0).wait(1).to({ y: 99.3 }, 0).wait(1).to({ y: 106.1 }, 0).wait(1).to({ y: 110.3 }, 0).wait(1).to({ y: 112.5 }, 0).wait(1).to({ regX: 105.7, regY: 103.2, x: 415.8, y: 113.3 }, 0).to({ y: 83.3 }, 5, cjs.Ease.get(-1)).wait(55));

            // 圖層 4
            this.instance_3 = new lib.圖層0_1();
            this.instance_3.parent = this;
            this.instance_3.setTransform(535.7, -231.6, 0.609, 0.609, 0, 0, 0, 129.2, 128.7);
            this.instance_3._off = true;

            this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({ _off: false }, 0).wait(1).to({ regX: 129, regY: 128.5, x: 535.6, y: -189.1 }, 0).wait(1).to({ y: -97.7 }, 0).wait(1).to({ y: -1.8 }, 0).wait(1).to({ y: 43 }, 0).wait(1).to({ y: 68.2 }, 0).wait(1).to({ y: 84 }, 0).wait(1).to({ y: 94.4 }, 0).wait(1).to({ y: 101.2 }, 0).wait(1).to({ y: 105.4 }, 0).wait(1).to({ y: 107.6 }, 0).wait(1).to({ regX: 129.2, regY: 128.7, x: 535.7, y: 108.4 }, 0).to({ y: 78.4 }, 5, cjs.Ease.get(-1)).wait(52));

            // 圖層 5
            this.instance_4 = new lib.圖層5_1();
            this.instance_4.parent = this;
            this.instance_4.setTransform(639.7, -221.5, 0.609, 0.609, 0, 0, 0, 106.2, 108.8);
            this.instance_4._off = true;

            this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({ _off: false }, 0).wait(1).to({ regX: 106, regY: 108.5, x: 639.6, y: -172.9 }, 0).wait(1).to({ y: -63.2 }, 0).wait(1).to({ y: 25 }, 0).wait(1).to({ y: 64.6 }, 0).wait(1).to({ y: 86.9 }, 0).wait(1).to({ y: 100.8 }, 0).wait(1).to({ y: 109.5 }, 0).wait(1).to({ y: 114.7 }, 0).wait(1).to({ y: 117.5 }, 0).wait(1).to({ regX: 106.2, regY: 108.8, x: 639.7, y: 118.5 }, 0).to({ y: 88.5 }, 5, cjs.Ease.get(-1)).wait(50));

            // 圖層 6
            this.instance_5 = new lib.旺春聯_1();
            this.instance_5.parent = this;
            this.instance_5.setTransform(90.6, 421, 1, 1, 180, 0, 0, 90.5, 90);
            this.instance_5.alpha = 0;
            this.instance_5._off = true;

            this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({ _off: false }, 0).wait(1).to({ y: 380.8, alpha: 0.143 }, 0).wait(1).to({ y: 290.5, alpha: 0.466 }, 0).wait(1).to({ y: 217.8, alpha: 0.725 }, 0).wait(1).to({ y: 185.2, alpha: 0.842 }, 0).wait(1).to({ y: 166.8, alpha: 0.908 }, 0).wait(1).to({ y: 155.4, alpha: 0.948 }, 0).wait(1).to({ y: 148.2, alpha: 0.974 }, 0).wait(1).to({ y: 143.9, alpha: 0.99 }, 0).wait(1).to({ y: 141.6, alpha: 0.998 }, 0).wait(1).to({ y: 141, alpha: 1 }, 0).wait(1).to({ rotation: 166.1, y: 140.9 }, 0).wait(1).to({ rotation: 143.7, x: 90.5 }, 0).wait(1).to({ rotation: 105 }, 0).wait(1).to({ rotation: 67.5, y: 141 }, 0).wait(1).to({ rotation: 45.9, x: 90.4 }, 0).wait(1).to({ rotation: 32.5 }, 0).wait(1).to({ rotation: 23.3, x: 90.5 }, 0).wait(1).to({ rotation: 16.6 }, 0).wait(1).to({ rotation: 11.6 }, 0).wait(1).to({ rotation: 7.9, x: 90.4 }, 0).wait(1).to({ rotation: 5.1, y: 141.1 }, 0).wait(1).to({ rotation: 3.1, y: 141 }, 0).wait(1).to({ rotation: 1.6, x: 90.5, y: 141.1 }, 0).wait(1).to({ rotation: 0.7, x: 90.4 }, 0).wait(1).to({ rotation: 0.2, x: 90.5, y: 141 }, 0).wait(1).to({ rotation: 0 }, 0).wait(37));

            // 圖層 8 (mask)
            var mask = new cjs.Shape();
            mask._off = true;
            var mask_graphics_24 = new cjs.Graphics().p("AhpCOQgZgQgNgeQgMgcACghQADhBA2hAQAhgmAigNQAjgOAxAKQA2ANAZAhQARAWADAdQACAdgNAYQgNAZgZAOQgaAPgcAAQgFAagOAWQgQAXgVAOQgWAOgcAAIgDAAQgaAAgVgMg");
            var mask_graphics_25 = new cjs.Graphics().p("AgzCIIgPgKIgJAGQgWAOgcAAQgbABgXgNQgZgQgNgeQgMgcACghQADhBA2hAQAhgmAigNQAkgOAxAKQA1ANAZAhIAIALQAigEAlAUQAzAcAVAwQAKAYgBAbQAAAcgNAXQgUAigrASQglAPgvABQhEAAgvgag");
            var mask_graphics_26 = new cjs.Graphics().p("AilCIIgQgKIgIAGQgWAOgcAAQgbABgXgNQgZgQgNgeQgMgcACghQADhBA2hAQAhgmAigNQAkgOAxAKQA2ANAZAhIAIALQAfgEAhARQAdgPAogMQBogfA/AYQAyAUAUAsQAKAXAAAZQgBAYgMAVQgOAXgcARQgUAMgiAMQheAhg8gBIgPAAQgMAIgPAGQgkAPgvABQhFAAgvgag");
            var mask_graphics_27 = new cjs.Graphics().p("AkaCSIgPgKIgJAGQgWAOgcABQgbABgXgOQgZgPgNgfQgMgcACggQADhBA2hBQAhglAigNQAkgPAxALQA2AMAZAhIAIAMQAfgFAiARQAdgPAogMQBngeA/AYQAWAIAQAOQAlgGAnADQAHgaARgUQASgUAYgJQAZgIAaAFQAbAFATARQAmAkgCBUQgBBFgcAjQgcAhhFAQQhHAQhGgCQg+gBglgUQhNAZg0gBIgOgBQgNAIgPAHQglAPgvAAQhFAAgvgag");
            var mask_graphics_28 = new cjs.Graphics().p("ADVCwQgbgKgSgVQgJgKgHgQQg0AIgzgBQg9gBglgUQhNAZg0gBIgPgBQgNAIgPAHQglAPgvAAQhFAAgugaIgQgKIgJAGQgWAOgbABQgcABgWgOQgZgPgNgfQgMgcABggQADhBA3hBQAgglAigNQAlgPAxALQA1AMAaAhIAHAMQAggFAiARQAcgPApgMQBngeA+AYQAWAIAQAOQAlgGAoADQAGgaARgUQATgUAYgJQAYgIAbAFQAaAFAUARQATATAKAgQApgoA0gGQAjgDAfAQQAhARANAeQAHARAEAEQAEAFAMAHQAjAWAMAmQANAogVAjQgSAfgnAPQgcAMguADQgiAEgIACQgHACgdAPQg5AegwAAQgdAAgZgKg");
            var mask_graphics_29 = new cjs.Graphics().p("ABnCwQgbgKgRgVQgKgKgHgQQgzAIgzgBQg+gBglgUQhNAZg0gBIgPgBQgNAIgPAHQglAPgvAAQhFAAgugaIgQgKIgIAGQgXAOgbABQgcABgWgOQgZgPgNgfQgMgcABggQAEhBA2hBQAgglAigNQAlgPAxALQA1AMAaAhIAHAMQAggFAiARQAcgPApgMQBogeA+AYQAWAIAQAOQAlgGAnADQAGgaASgUQASgUAYgJQAYgIAbAFQAbAFATARQAUATAJAgQApgoA0gGQAjgDAfAQQAhARANAeIACAFQAPgJAVgIIAvgUIA8gaQAjgNAbACQAtAEAcApQAcApgMAqIgKAaQgGAOgCAKQgBAJAAAOIgBAXQgCAUgMATQgLASgSALQgSALgdAFIg0AFQguAFgLAAQghAAgVgMQgNgHgMgMQgZAIgmADQgiAEgIACQgGACgeAPQg4AegxAAQgdAAgZgKg");
            var mask_graphics_30 = new cjs.Graphics().p("AgyCwQgbgKgSgVQgJgKgIgQQgzAIgzgBQg+gBglgUQhOAZg0gBIgPgBQgMAIgPAHQglAPgvAAQhFAAgvgaIgQgKIgIAGQgWAOgcABQgbABgXgOQgZgPgNgfQgMgcACggQADhBA2hBQAhglAigNQAkgPAxALQA2AMAZAhIAIAMQAfgFAiARQAdgPAogMQBogeA/AYQAVAIARAOQAlgGAnADQAHgaARgUQASgUAYgJQAZgIAaAFQAbAFASARQAUATAJAgQAqgoA0gGQAigDAgAQQAhARANAeIACAFQAPgJAVgIIAugUIA8gaQAjgNAcACQAsAEAcApQAKAPAFAPIAfgGIBfgUQAwgKAZAAQAqgBAcASQAcASALAhQALAhgLAdQgFAQgVAeQgXAggNALQgmAjhNAMQhIAMgvgRIgUgIQgMgFgJgBQgKgBgTAEIgDADQgTALgdAFIgzAFQguAFgMAAQggAAgWgMQgNgHgLgMQgaAIgmADQghAEgIACQgHACgeAPQg4AegwAAQgcAAgZgKg");
            var mask_graphics_31 = new cjs.Graphics().p("AigCwQgbgKgSgVQgJgKgIgQQgzAIgzgBQg+gBglgUQhNAZg1gBIgOgBQgNAIgPAHQglAPgvAAQhFAAgvgaIgPgKIgJAGQgWAOgcABQgbABgXgOQgZgPgNgfQgMgcACggQADhBA2hBQAhglAigNQAkgPAxALQA2AMAZAhIAIAMQAfgFAiARQAdgPAogMQBogeA/AYQAWAIAQAOQAlgGAnADQAHgaARgUQASgUAYgJQAZgIAaAFQAbAFATARQAUATAJAgQAqgoAzgGQAigDAgAQQAhARANAeIACAFQAPgJAVgIIAugUIA8gaQAjgNAcACQAsAEAcApQALAPAFAPIAegGIBfgUQAwgKAZAAQAqgBAcASQALAHAJAKIAOgFQAxgQAegDQAtgFAgARQAmAUAVAzQAVAxgJApQgFAXgPATQgPAUgVAHQgUAIgfgDQgkgFgRAAQgcgBgnAJIhCAPQhJAQgsgYQhBAJgrgPIgUgIQgMgFgJgBQgJgBgUAEIgDADQgTALgdAFIgzAFQguAFgMAAQggAAgWgMQgMgHgMgMQgZAIgnADQghAEgIACQgHACgdAPQg4AegwAAQgdAAgZgKg");
            var mask_graphics_32 = new cjs.Graphics().p("AkkCwQgbgKgRgVQgJgKgIgQQg0AIgzgBQg9gBglgUQhOAZg0gBIgPgBQgMAIgQAHQglAPgvAAQhFAAgugaIgQgKIgIAGQgXAOgbABQgcABgWgOQgZgPgNgfQgMgcABggQAEhBA2hBQAgglAigNQAlgPAxALQA1AMAaAhIAIAMQAfgFAiARQAdgPAogMQBogeA+AYQAWAIAQAOQAmgGAnADQAGgaASgUQASgUAYgJQAYgIAbAFQAbAFATARQAUATAJAgQAqgoAzgGQAjgDAfAQQAhARAMAeIADAFQAPgJAUgIIAvgUIA8gaQAjgNAbACQAtAEAcApQAKAPAFAPIAegGIBggUQAwgKAYAAQAqgBAcASQAMAHAIAKIAOgFQAygQAegDQAegDAZAGQAMgRAKgIQARgOAagDQAXgCAZAHIAlALQAVAHAPACQAOABAagCQAcgCANABQAqAEAdAlQAcAlgKApQgKAigmAaQgaASgxARQg3AUgkAKQgyAPgrAFQgnAEgdgGQgggEgRAAQgbgBgnAJIhDAPQhIAQgtgYQhAAJgrgPIgVgIQgMgFgJgBQgJgBgTAEIgEADQgSALgdAFIg0AFQguAFgLAAQghAAgVgMQgNgHgLgMQgZAIgmADQgiAEgIACQgGACgeAPQg4AegxAAQgdAAgZgKg");
            var mask_graphics_33 = new cjs.Graphics().p("AmqCwQgbgKgRgVQgJgKgIgQQg0AIgzgBQg9gBglgUQhOAZg0gBIgPgBQgMAIgQAHQglAPgvAAQhFAAgugaIgQgKIgIAGQgXAOgbABQgcABgWgOQgZgPgNgfQgMgcABggQAEhBA2hBQAgglAigNQAlgPAxALQA1AMAaAhIAIAMQAfgFAiARQAdgPAogMQBogeA+AYQAWAIAQAOQAmgGAnADQAGgaASgUQASgUAYgJQAYgIAbAFQAbAFATARQAUATAJAgQAqgoAzgGQAjgDAfAQQAhARANAeIADAFQAPgJAUgIIAvgUIA7gaQAjgNAbACQAtAEAcApQAKAPAFAPIAegGIBggUQAwgKAYAAQAqgBAcASQAMAHAIAKIAOgFQAygQAegDQAegDAZAGQAMgRAKgIQARgOAagDQAXgCAZAHIAlALQAVAHAPACQAOABAagCQAcgCANABQAmADAbAfQAggHAlgFIBhgLQAhgDARACQAeAFAXAZQAWAYADAfQADAfgQAcIgFAIQAKAagFAeQgHAogeAUQgXAPgkACIhBgCIhTAEQgoACgcgEIgnAAQgiAAgXgDQgvgFgdgWQgHgGgHgIQgjAJgfAEQgnAEgdgGQgggEgRAAQgbgBgnAJIhDAPQhIAQgtgYQhAAJgrgPIgVgIQgMgFgJgBQgJgBgTAEIgEADQgSALgdAFIg0AFQgtAFgLAAQghAAgVgMQgNgHgLgMQgaAIgmADQgiAEgIACQgGACgeAPQg4AegxAAQgdAAgZgKg");
            var mask_graphics_34 = new cjs.Graphics().p("ApsCwQgbgKgSgVQgJgKgIgQQgzAIgzgBQg+gBglgUQhNAZg1gBIgOgBQgNAIgPAHQglAPgvAAQhFAAgvgaIgPgKIgJAGQgWAOgcABQgbABgXgOQgZgPgNgfQgMgcACggQADhBA2hBQAhglAigNQAkgPAxALQA2AMAZAhIAIAMQAfgFAiARQAdgPAogMQBogeA/AYQAWAIAQAOQAlgGAnADQAHgaARgUQASgUAYgJQAZgIAaAFQAbAFATARQAUATAJAgQAqgoA0gGQAigDAgAQQAhARANAeIACAFQAPgJAVgIIAugUIA8gaQAjgNAcACQAsAEAcApQALAPAFAPIAdgGIBfgUQAwgKAZAAQAqgBAcASQALAHAJAKIAOgFQAxgQAegDQAfgDAYAGQAMgRAKgIQASgOAagDQAXgCAZAHIAkALQAWAHAPACQANABAbgCQAbgCANABQAnADAbAfQAfgHAlgFIBhgLQAigDAQACQAfAFAWAZQAMANAHAQQAbgOAmgKQBggYBiAIQBQAGAjAmQAbAfgGAsQgGAtgiAXQgbARg6AGQg/AGgYAMIgcARQgRAMgMAEQglANg/gaQgagMgTgMQgJAPgPAKQgXAPglACIhBgCIhSAEQgoACgdgEIgmAAQgiAAgXgDQgvgFgdgWQgIgGgGgIQgkAJgfAEQgnAEgdgGQgggEgQAAQgcgBgnAJIhCAPQhJAQgsgYQhBAJgqgPIgUgIQgMgFgJgBQgKgBgTAEIgDADQgTALgdAFIgzAFQguAFgMAAQggAAgWgMQgNgHgLgMQgaAIgmADQghAEgIACQgHACgeAPQg4AegwAAQgdAAgZgKg");
            var mask_graphics_35 = new cjs.Graphics().p("ArfCwQgbgKgSgVQgJgKgIgQQgzAIgzgBQg+gBglgUQhNAZg1gBIgOgBQgNAIgPAHQglAPgvAAQhFAAgvgaIgPgKIgJAGQgWAOgcABQgbABgXgOQgZgPgNgfQgMgcACggQADhBA2hBQAhglAigNQAkgPAxALQA2AMAZAhIAIAMQAfgFAiARQAdgPAogMQBogeA/AYQAWAIAQAOQAlgGAnADQAHgaARgUQASgUAYgJQAZgIAaAFQAbAFATARQAUATAJAgQAqgoA0gGQAigDAgAQQAhARANAeIACAFQAPgJAVgIIAugUIA8gaQAjgNAcACQAsAEAcApQALAPAFAPIAegGIBfgUQAvgKAZAAQAqgBAcASQALAHAJAKIAOgFQAxgQAegDQAfgDAYAGQAMgRAKgIQASgOAagDQAXgCAZAHIAkALQAWAHAPACQANABAbgCQAbgCANABQAnADAbAfQAfgHAlgFIBhgLQAigDAQACQAfAFAWAZQAMANAHAQQAbgOAmgKQBggYBiAIQA1AEAhARQAxgTAvAFQAXACA2ATQAhAMAQAIQAaANAOASQAZAfgIArQgIArghAWQgTANgcAGQgSAEgiADIhyAJQgnAEgXgDQgigDgVgRQgKgJgHgLQgkAFgRAJIgcARQgRAMgMAEQglANg/gaQgagMgTgMQgJAPgPAKQgXAPglACIhBgCIhSAEQgoACgdgEIgmAAQgiAAgXgDQgvgFgdgWQgIgGgGgIQgjAJggAEQgnAEgdgGQgggEgQAAQgcgBgnAJIhCAPQhJAQgrgYQhBAJgrgPIgUgIQgMgFgJgBQgKgBgTAEIgDADQgTALgdAFIgzAFQguAFgMAAQggAAgWgMQgMgHgMgMQgaAIgmADQghAEgIACQgHACgeAPQg4AegwAAQgdAAgZgKg");
            var mask_graphics_36 = new cjs.Graphics().p("APPCuQgPgPgHgUQgTgFgVgJQgbgLgTgNQgJAPgPAKQgXAPgkACIhBgBIhTADQgoACgcgDIgnAAQgigBgXgDQgvgFgdgWQgIgGgGgHQgjAJgfADQgoAEgcgFQgggEgRgBQgbgBgnAJIhDAQQhIAPgsgXQhAAJgrgQIgVgIQgMgEgJgBQgJgBgUAEIgDACQgSAMgdAEIg0AFQguAFgLAAQghAAgVgLQgNgHgMgNQgZAJgmADQgiADgIADQgGACgeAPQg4AdgxABQgdAAgZgKQgbgLgRgUQgJgLgIgPQg0AIgzgBQg+gCglgUQhNAZg0gBIgPgBQgMAJgQAGQglAPgvABQhFAAgugaIgQgKIgIAGQgXAOgbAAQgcABgWgNQgZgQgNgeQgMgcABghQAEhBA2hAQAggmAigNQAlgOAxAKQA1ANAaAhIAHALQAggEAiARQAdgPAogMQBogfA+AYQAWAJAQANQAmgFAnACQAGgZASgUQASgUAYgJQAYgJAbAFQAbAFATASQAUATAJAgQAqgpAzgFQAjgEAfARQAhAQANAfIACAFQAPgJAVgJIAvgTIA8gaQAjgNAbACQAtAEAcAoQAKAPAFAQIAegGIBggUQAvgKAYAAQAqgBAcASQALAHAJAJIAOgEQAygQAegEQAegDAZAHQAMgSAKgIQARgOAagCQAXgDAZAHIAlAMQAVAHAPABQAOACAagDQAcgCANABQAmAEAbAeQAfgHAmgFIBhgLQAhgDARADQAeAFAXAZQAMANAGAPQAbgOAngKQBfgXBiAHQA1AEAhASQAxgTAvAEQAVACAtAQIAYgEQBLgLAoAcQAWAPALAZQAMAagEAZQgDAagRAWQgRAWgYAKQgRAHgZADIgCAAQgTAMgbAHQgRADgiADIgxAEQgwAOgQAEIglAHQgVAFgPAGIgUAKIgUALQguAYgpAAQgzgBgggfg");
            var mask_graphics_37 = new cjs.Graphics().p("ANTCuQgPgPgHgUQgTgFgVgJQgagLgUgNQgJAPgPAKQgXAPgkACIhBgBIhTADQgnACgdgDIgnAAQgigBgXgDQgvgFgdgWQgHgGgHgHQgjAJgfADQgnAEgdgFQgggEgRgBQgbgBgnAJIhCAQQhIAPgtgXQhAAJgrgQIgVgIQgMgEgJgBQgJgBgTAEIgEACQgSAMgdAEIg0AFQguAFgLAAQghAAgVgLQgNgHgLgNQgaAJgmADQgiADgIADQgGACgeAPQg4AdgxABQgdAAgZgKQgbgLgRgUQgJgLgIgPQgzAIg0gBQg9gCglgUQhOAZg0gBIgPgBQgMAJgQAGQglAPgvABQhFAAgugaIgQgKIgIAGQgXAOgbAAQgcABgWgNQgZgQgNgeQgMgcABghQAEhBA2hAQAggmAigNQAlgOAxAKQA1ANAaAhIAIALQAfgEAiARQAdgPAogMQBogfA+AYQAWAJAQANQAmgFAnACQAGgZASgUQASgUAYgJQAYgJAbAFQAbAFATASQAUATAJAgQAqgpAzgFQAjgEAfARQAhAQANAfIADAFQAPgJAUgJIAvgTIA8gaQAjgNAbACQAtAEAcAoQAKAPAFAQIAegGIBggUQAwgKAYAAQAqgBAcASQAMAHAIAJIANgEQAygQAegEQAegDAZAHQAMgSAKgIQARgOAagCQAXgDAZAHIAlAMQAVAHAPABQAOACAagDQAcgCANABQAnAEAaAeQAggHAlgFIBhgLQAhgDARADQAeAFAXAZQAMANAHAPQAbgOAmgKQBfgXBiAHQA1AEAhASQAygTAuAEQAOACAWAGQAHgIAIgHQAugnBUgEQBEgDBDATQAUAFAQAHQAegHAYAEQAqAHAaApQAaAngHAsQgIApghAhQgfAggsAMQglAHgSAGIgaAMIgaAMQgcALgegCQgfgBgZgPQgVgMgOgTQgMAEgOAEQgRADgiADIgxAEQgwAOgQAEIglAHQgVAFgPAGIgUAKIgUALQguAYgpAAQgzgBgggfg");
            var mask_graphics_38 = new cjs.Graphics().p("ALQCuQgPgPgHgUQgTgFgVgJQgagLgUgNQgJAPgPAKQgXAPgkACIhBgBIhTADQgoACgcgDIgnAAQgigBgXgDQgvgFgdgWQgHgGgHgHQgjAJgfADQgnAEgcgFQgggEgRgBQgbgBgnAJIhDAQQhIAPgtgXQhAAJgrgQIgVgIQgMgEgJgBQgJgBgTAEIgEACQgSAMgdAEIg0AFQguAFgLAAQghAAgVgLQgNgHgLgNQgaAJgmADQgiADgIADQgGACgeAPQg4AdgxABQgdAAgZgKQgbgLgRgUQgJgLgIgPQg0AIgzgBQg9gCglgUQhOAZg0gBIgPgBQgMAJgQAGQglAPgvABQhFAAgugaIgQgKIgIAGQgXAOgbAAQgcABgWgNQgZgQgNgeQgMgcABghQAEhBA2hAQAggmAigNQAlgOAxAKQA1ANAaAhIAIALQAfgEAiARQAdgPAogMQBogfA+AYQAWAJAQANQAmgFAnACQAGgZASgUQASgUAYgJQAYgJAbAFQAbAFATASQAUATAJAgQAqgpAzgFQAjgEAfARQAhAQANAfIADAFQAPgJAUgJIAvgTIA8gaQAjgNAbACQAtAEAcAoQAKAPAFAQIAegGIBggUQAwgKAYAAQAqgBAcASQAMAHAIAJIAOgEQAygQAegEQAegDAYAHQAMgSAKgIQARgOAagCQAXgDAZAHIAlAMQAVAHAPABQAOACAagDQAcgCANABQAmAEAbAeQAggHAlgFIBhgLQAhgDARADQAeAFAXAZQAMANAHAPQAbgOAmgKQBfgXBiAHQA1AEAhASQAygTAuAEQANACAXAGQAHgIAIgHQAugnBUgEQBEgDBDATQAUAFAQAHQAegHAYAEQAjAFAXAdQARgEATgBIAsgCQAbgBARgDIAggJQAUgFANgBQAbgCAZAOQAZANANAXQAOAXAAAcQAAAcgPAWQgOAWgeAVQglAWgRAMIhLA9QgtAignADQgtAEgwghQgggVgSgaIgUAGIgaAMIgaAMQgcALgegCQgfgBgZgPQgVgMgOgTQgMAEgOAEQgRADgiADIgxAEQgwAOgQAEIglAHQgVAFgPAGIgUAKIgUALQguAYgpAAQgzgBgggfg");
            var mask_graphics_39 = new cjs.Graphics().p("AJrCuQgPgPgHgUQgSgFgWgJQgagLgTgNQgKAPgOAKQgXAPglACIhBgBIhSADQgoACgdgDIgmAAQgigBgXgDQgvgFgdgWQgIgGgHgHQgiAJgfADQgnAEgdgFQgggEgQgBQgcgBgnAJIhCAQQhJAPgsgXQhBAJgrgQIgUgIQgMgEgJgBQgKgBgTAEIgDACQgTAMgdAEIgzAFQguAFgMAAQggAAgWgLQgNgHgLgNQgaAJgmADQghADgIADQgHACgeAPQg4AdgwABQgdAAgZgKQgbgLgSgUQgJgLgIgPQgzAIgzgBQg+gCglgUQhOAZg0gBIgPgBQgMAJgPAGQglAPgvABQhFAAgvgaIgQgKIgIAGQgWAOgcAAQgbABgXgNQgZgQgNgeQgMgcACghQADhBA2hAQAhgmAigNQAkgOAxAKQA2ANAZAhIAIALQAfgEAiARQAdgPAogMQBogfA/AYQAVAJARANQAlgFAnACQAHgZARgUQASgUAYgJQAZgJAaAFQAbAFATASQAUATAJAgQAqgpA0gFQAigEAgARQAhAQANAfIACAFQAPgJAVgJIAugTIA8gaQAjgNAcACQAsAEAcAoQAKAPAFAQIAfgGIBfgUQAwgKAZAAQAqgBAcASQALAHAIAJIAPgEQAxgQAegEQAfgDAYAHQAMgSAKgIQASgOAagCQAWgDAZAHIAkAMQAWAHAPABQANACAbgDQAbgCANABQAnAEAbAeQAfgHAlgFIBhgLQAigDAQADQAfAFAWAZQAMANAHAPQAbgOAmgKQBggXBiAHQA0AEAhASQAygTAvAEQANACAWAGQAHgIAIgHQAvgnBTgEQBEgDBEATQATAFAQAHQAegHAYAEQAjAFAYAdQAQgEATgBIAsgCQAbgBARgDIAhgJQAUgFANgBQAagCAZAOQATAKANAQQAigIAagBQApgDAhAKQAlAMAZAdQAbAfgBAjQgBAVgLATQgKATgSAMQgNAJgXAJIglAPIgZAPQgQAKgKAFQgvAVhGgSQglgKgbgTIgtAkQgtAigmADQgtAEgwghQghgVgSgaIgUAGIgaAMIgZAMQgcALgfgCQgfgBgZgPQgVgMgOgTQgMAEgNAEQgSADgiADIgxAEQgwAOgQAEIglAHQgVAFgOAGIgVAKIgUALQgtAYgqAAQgzgBgggfg");
            var mask_graphics_40 = new cjs.Graphics().p("AIDCuQgOgPgIgUQgSgFgWgJQgagLgTgNQgJAPgPAKQgXAPglACIhBgBIhSADQgoACgdgDIgmAAQgigBgXgDQgugFgdgWQgIgGgGgHQgjAJggADQgnAEgdgFQgggEgQgBQgcgBgnAJIhCAQQhJAPgsgXQhBAJgrgQIgUgIQgMgEgJgBQgKgBgTAEIgDACQgTAMgdAEIgzAFQguAFgMAAQggAAgWgLQgMgHgMgNQgaAJgmADQghADgIADQgHACgeAPQg4AdgwABQgdAAgZgKQgbgLgSgUQgJgLgIgPQgzAIgzgBQg+gCglgUQhNAZg1gBIgOgBQgNAJgPAGQglAPgvABQhFAAgvgaIgPgKIgJAGQgWAOgcAAQgbABgXgNQgZgQgNgeQgMgcACghQADhBA2hAQAhgmAigNQAkgOAxAKQA2ANAZAhIAIALQAfgEAiARQAdgPAogMQBogfA/AYQAWAJAQANQAlgFAnACQAHgZARgUQASgUAYgJQAZgJAaAFQAbAFATASQAUATAJAgQAqgpA0gFQAigEAgARQAhAQANAfIACAFQAPgJAVgJIAugTIA8gaQAjgNAcACQAsAEAcAoQALAPAFAQIAegGIBfgUQAwgKAZAAQAqgBAcASQALAHAJAJIAOgEQAxgQAegEQAfgDAYAHQAMgSAKgIQASgOAagCQAXgDAZAHIAkAMQAWAHAPABQAMACAbgDQAbgCANABQAnAEAbAeQAfgHAlgFIBhgLQAigDAQADQAfAFAWAZQAMANAHAPQAbgOAmgKQBggXBiAHQA1AEAhASQAxgTAvAEQANACAWAGQAHgIAIgHQAvgnBTgEQBEgDBEATQATAFAQAHQAegHAYAEQAjAFAYAdQARgEASgBIAsgCQAbgBARgDIAhgJQAUgFANgBQAagCAZAOQAUAKAMAQQAjgIAZgBIAZgBIATgVQAOgOALgIQAXgQAdgBQAegBAYAOQAMAHASAQQAUASAJAGQAOAJAjAMQAhALAPALQAiAYAEAsQAEAugdAdQgbAcg/AKQhDAKhDgIQgggFgZgIIgOAGIgZAPQgQAKgKAFQgvAVhGgSQglgKgbgTIgtAkQgtAigmADQgtAEgwghQgggVgTgaIgUAGIgaAMIgZAMQgcALgfgCQgfgBgZgPQgVgMgNgTQgMAEgOAEQgSADgiADIgxAEQgwAOgQAEIglAHQgVAFgOAGIgVAKIgUALQgtAYgqAAQgzgBgggfg");
            var mask_graphics_41 = new cjs.Graphics().p("AF3CuQgPgPgHgUQgTgFgVgJQgbgLgTgNQgJAPgPAKQgXAPgkACIhBgBIhTADQgnACgcgDIgnAAQgigBgXgDQgvgFgdgWQgIgGgGgHQgjAJgfADQgoAEgcgFQgggEgRgBQgbgBgnAJIhDAQQhJAPgsgXQhAAJgrgQIgVgIQgMgEgJgBQgJgBgUAEIgDACQgSAMgdAEIg0AFQguAFgLAAQghAAgVgLQgNgHgMgNQgZAJgmADQgiADgIADQgGACgeAPQg4AdgxABQgdAAgZgKQgbgLgRgUQgJgLgIgPQg0AIgzgBQg+gCglgUQhNAZg0gBIgPgBQgMAJgQAGQglAPgvABQhFAAgugaIgQgKIgIAGQgXAOgbAAQgcABgWgNQgZgQgNgeQgMgcABghQAEhBA2hAQAggmAigNQAlgOAxAKQA1ANAaAhIAHALQAggEAiARQAdgPAogMQBogfA+AYQAWAJAQANQAmgFAnACQAGgZASgUQASgUAYgJQAYgJAbAFQAbAFATASQAUATAJAgQAqgpAzgFQAjgEAfARQAhAQANAfIACAFQAPgJAVgJIAvgTIA8gaQAjgNAbACQAtAEAcAoQAKAPAFAQIAegGIBggUQAwgKAYAAQAqgBAcASQALAHAJAJIAOgEQAygQAegEQAegDAZAHQAMgSAKgIQARgOAagCQAXgDAZAHIAlAMQAVAHAPABQAOACAagDQAcgCANABQAmAEAbAeQAegHAmgFIBhgLQAhgDARADQAeAFAXAZQAMANAGAPQAbgOAngKQBfgXBiAHQA1AEAhASQAxgTAvAEQANACAXAGQAGgIAJgHQAugnBUgEQBEgDBDATQAUAFAPAHQAfgHAYAEQAiAFAYAdQARgEATgBIAsgCQAbgBARgDIAggJQAUgFANgBQAbgCAZAOQATAKAMAQQAjgIAagBIAYgBIAUgVQANgOALgIQAXgQAegBQAegBAYAOQALAHATAQQATASAKAGIAIAEQAQgLAXgJQBygtCcA2QBBAWAWAlQASAdgJAlQgIAkgcAWQgbAVglACQgkACgggQQgCAVgOATQgOASgUALQgkAUgygEQhEgEgmgoQg7AHg7gHQgggFgZgIIgNAGIgaAPQgQAKgJAFQgvAVhGgSQgmgKgbgTIgsAkQgtAignADQgtAEgwghQgggVgSgaIgUAGIgaAMIgaAMQgcALgegCQgfgBgZgPQgVgMgOgTQgMAEgOAEQgRADgiADIgxAEQgwAOgQAEIglAHQgVAFgPAGIgUAKIgUALQguAYgpAAQgzgBgggfg");
            var mask_graphics_42 = new cjs.Graphics().p("ACqCuQgPgPgHgUQgSgFgWgJQgagLgTgNQgKAPgOAKQgXAPgkACIhBgBIhSADQgoACgdgDIgmAAQgigBgXgDQgvgFgdgWQgIgGgHgHQgjAJgfADQgnAEgdgFQgggEgQgBQgcgBgnAJIhCAQQhJAPgsgXQhBAJgrgQIgUgIQgMgEgJgBQgKgBgTAEIgDACQgTAMgdAEIgzAFQguAFgMAAQggAAgWgLQgNgHgLgNQgaAJgmADQghADgIADQgHACgeAPQg4AdgwABQgdAAgZgKQgbgLgSgUQgJgLgIgPQgzAIgzgBQg+gCglgUQhOAZg0gBIgPgBQgMAJgPAGQglAPgvABQhFAAgvgaIgQgKIgIAGQgWAOgcAAQgbABgXgNQgZgQgNgeQgMgcACghQADhBA2hAQAhgmAigNQAkgOAxAKQA2ANAZAhIAIALQAfgEAiARQAdgPAogMQBogfA/AYQAVAJARANQAlgFAnACQAHgZARgUQASgUAYgJQAZgJAaAFQAbAFATASQAUATAJAgQAqgpA0gFQAigEAgARQAhAQANAfIACAFQAPgJAVgJIAugTIA8gaQAjgNAcACQAsAEAcAoQAKAPAFAQIAfgGIBfgUQAwgKAZAAQAqgBAcASQALAHAIAJIAPgEQAxgQAegEQAfgDAYAHQAMgSAKgIQASgOAagCQAXgDAZAHIAkAMQAWAHAPABQANACAbgDQAbgCANABQAnAEAbAeQAfgHAlgFIBhgLQAigDAPADQAfAFAWAZQAMANAHAPQAbgOAmgKQBggXBiAHQA0AEAhASQAygTAvAEQANACAWAGQAHgIAIgHQAvgnBTgEQBEgDBEATQATAFAQAHQAegHAYAEQAjAFAYAdQARgEASgBIAsgCQAbgBARgDIAhgJQAUgFANgBQAagCAZAOQATAKANAQQAjgIAZgBIAZgBIATgVQAOgOALgIQAXgQAdgBQAegBAYAOQAMAHASAQQAUASAJAGIAIAEQARgLAWgJQBzgtCbA2IAKAEIAEgBQBBgIAhAAQAsAAALgBQAKgBApgKQAfgHATACQAmACAZAbIAggCQAzgCAhANQAVAIAPAPQAQAQAGATQAKAfgRAuQgPAqgZAXQglAjg+gCQgkgCgqgQIgGABQgMADgSAAIgfABQgNACgsALQgrAMhEAKQgsAHgcgDQgrgFgegZQgKAJgMAHQgkAUgygEQhFgEgmgoQg6AHg7gHQgggFgagIIgNAGIgZAPQgQAKgKAFQgvAVhGgSQglgKgbgTIgtAkQgtAigmADQgtAEgwghQghgVgSgaIgUAGIgaAMIgZAMQgcALgfgCQgfgBgZgPQgVgMgOgTQgLAEgOAEQgSADgiADIgxAEQgwAOgQAEIglAHQgVAFgOAGIgVAKIgUALQgtAYgqAAQgzgBgggfg");
            var mask_graphics_43 = new cjs.Graphics().p("EgkjAEoQgegBgcgOQgcgOgQgYQgcgpAIg1QAHguAhgqQAZgfAdgLQAggMA5APQA0ANAUAXQAaAggKA1QgEAWgSArQgOAggLAOQgRAWgcALQgYAKgZAAIgIgBgAD/BTQgOgPgIgUQgSgFgWgJQgagLgTgNQgJAPgPAKQgXAPglACIhAgBIhSADQgoACgdgDIgmAAQgigBgXgDQgvgFgdgWQgIgGgGgHQgjAJggADQgnAFgdgGQgggEgQgBQgcgBgnAJIhCAQQhJAPgsgXQhBAJgrgQIgUgIQgMgEgJgBQgJgBgUAEIgDACQgTAMgdAEIgzAFQguAFgMAAQggAAgWgLQgMgHgMgMQgaAIgmADQghADgIADQgHACgeAPQg4AdgwABQgdAAgZgKQgbgLgSgUQgJgLgIgPQgzAIgzgBQg+gCglgTQhNAYg1gBIgOAAQgNAIgPAGQglAPgvABQhFAAgvgaIgPgKIgJAGQgWAOgcAAQgbABgXgNQgZgQgNgdQgMgcACghQADhCA2hAQAhgmAigNQAkgOAxAKQA2ANAZAhIAIALQAfgEAiARQAdgPAogMQBogfA/AYQAWAJAQANQAlgFAnACQAHgZARgUQASgUAYgJQAZgJAaAFQAbAFATASQAUATAJAgQAqgpA0gFQAigEAgARQAhAQANAfIACAFQAPgJAVgJIAugTIA8gaQAjgNAcACQAsAEAcAoQALAPAFAQIAegGIBfgUQAwgKAZAAQAqgBAcASQALAHAJAJIAOgEQAxgQAegEQAfgDAYAHQAMgSAKgIQASgOAagCQAXgDAZAHIAkAMQAWAHAPABQANACAbgDQAbgCANABQAnAEAbAfQAfgIAlgFIBggLQAigDAQADQAfAFAWAZQANANAGAPQAbgOAmgKQBggXBiAHQA1AEAhASQAxgTAvAEQANACAWAGQAHgIAIgHQAvgnBTgEQBEgDBEATQAUAFAPAIQAegIAYAEQAjAGAYAcQARgDASgCIAsgCQAbgBARgDIAhgJQAUgFANgBQAagCAZAOQAUAKAMAQQAjgHAZgCIAZAAIATgWQAOgOALgIQAXgQAdgBQAegBAYAOQAMAHASAQQAUASAJAGIAIAFQARgMAWgJQBzgtCbA2IAKAEIAEgBQBBgIAhAAQAsAAALgBQAKgBApgKQAfgHATACQAmADAZAaIAggCQAzgCAhANQAVAIAPAPQAQAQAGATQAKAfgRAvQgPAqgZAWQglAjg+gCQgjgCgrgQIgGABQgMADgSAAIgfABQgNACgsALQgrAMhEAKQgsAHgcgDQgrgFgegZQgKAKgMAGQgkAUgygEQhFgEgmgnQg6AGg7gHQgggEgZgJIgOAGIgZAPQgQAKgKAFQgvAVhGgSQglgKgbgTIgtAkQgtAigmADQgtAEgwghQgggVgTgaIgUAGIgaAMIgZAMQgcALgfgCQgfgBgZgPQgVgMgNgTQgMAFgOADQgSADgiADIgxAEQgwAOgQAEIglAHQgVAFgOAGIgVAKIgUALQgtAYgqAAQgzgBgggfg");
            var mask_graphics_44 = new cjs.Graphics().p("EgjtAF7QgwgBgqglQgbgYgMggQgOgjAIggQAEgNAHgNQgTgNgNgTQgcgpAIg0QAHgvAhgoQAZggAdgKQAggMA5AOQA0ANAUAYQAaAfgKA0IAAACQAdgDAcAEQArAGAlAUQAyAcASArQALAXgCAaQgBAagOAUQgLAPgSAMQgLAIgYAMQgsAXgbAIQgpAMghgJQgNAVgYALQgWALgYAAIgCAAgAD/AAQgOgOgIgUQgSgEgWgJQgagMgTgMQgJAPgPAKQgXAPglACIhAgCIhSAEQgoACgdgEIgmAAQgiAAgXgDQgvgFgdgWQgIgGgGgIQgjAJggAEQgnAEgdgGQgggEgQAAQgcgBgnAJIhCAPQhJAQgsgYQhBAJgrgPIgUgIQgMgFgJgBQgJgBgUAEIgDADQgTALgdAFIgzAFQguAFgMAAQggAAgWgMQgMgHgMgMQgaAIgmADQghAEgIACQgHACgeAPQg4AegwAAQgdAAgZgKQgbgKgSgVQgJgKgIgQQgzAIgzgBQg+gBglgUQhNAZg1gBIgOgBQgNAIgPAHQglAPgvAAQhFAAgvgaIgPgKIgJAGQgWAOgcABQgbABgXgOQgZgPgNgfQgMgcACggQADhCA2hBQAhglAigNQAkgPAxALQA2AMAZAhIAIAMQAfgFAiARQAdgPAogMQBogeA/AYQAWAIAQAOQAlgGAnADQAHgaARgUQASgUAYgJQAZgIAaAFQAbAFATARQAUATAJAgQAqgoA0gGQAigDAgAQQAhARANAeIACAFQAPgJAVgIIAugUIA8gaQAjgNAcACQAsAEAcApQALAPAFAPIAegGIBfgUQAwgKAZAAQAqgBAcASQALAHAJAKIAOgFQAxgQAegDQAfgDAYAGQAMgRAKgIQASgOAagDQAXgCAZAHIAkALQAWAHAPACQANABAbgCQAbgCANABQAnADAbAfQAfgHAlgFIBggLQAigDAQACQAfAFAWAZQANANAGAQQAbgOAmgKQBggYBiAIQA1AEAhARQAxgTAvAFQANABAWAGQAHgHAIgHQAvgoBTgDQBEgEBEATQAUAGAPAHQAegIAYAEQAjAGAYAcQARgDASgBIAsgCQAbgBARgEIAhgIQAUgGANAAQAagCAZANQAUAKAMAQQAjgHAZgCIAZAAIATgVQAOgPALgHQAXgRAdgBQAegBAYAPQAMAGASARQAUASAJAGIAIAEQARgMAWgJQBzgtCbA3IAKADIAEAAQBBgIAhAAQAsAAALgCQAKgBApgJQAfgHATABQAmADAZAaIAggBQAzgCAhANQAVAIAPAPQAQAPAGAUQAKAfgRAuQgPArgZAWQglAkg+gDQgjgBgrgRIgGACQgMACgSABIgfABQgNABgsAMQgrAMhEAKQgsAGgcgDQgrgEgegZQgKAJgMAHQgkATgygDQhFgFgmgnQg6AHg7gIQgggEgZgJIgOAGIgZAPQgQALgKAEQgvAWhGgSQglgLgbgTIgtAkQgtAigmADQgtADgwgfQgggVgTgaIgUAGIgaALIgZAMQgcALgfgBQgfgCgZgOQgVgMgNgUQgMAFgOADQgSAEgiADIgxAEQgwAOgQADIglAIQgVAFgOAGIgVAKIgUAKQgtAXgqAAQgzgBgggfg");
            var mask_graphics_45 = new cjs.Graphics().p("EgjtAF7QgwgBgqglQgbgYgMggQgOgjAIggQAEgNAHgNQgTgNgNgTQgcgpAIg0QAHgvAhgoQAZggAdgKQAggMA5AOQA0ANAUAYQAaAfgKA0IAAACQAdgDAcAEQArAGAlAUIANAIQAngTApgOQBPgbAsAZQAOAIAOARIAZAeIAbAeQAPASAIAPQARAkgQApQgPApglAOQgSAGgcABQgfgBgQABQgbACgrALQg5AOgMACQhIANgsgaQglAJgegIQgNAVgYALQgWALgYAAIgCAAgAD/AAQgOgOgIgUQgSgEgWgJQgagMgTgMQgJAPgPAKQgXAPglACIhAgCIhSAEQgoACgdgEIgmAAQgiAAgXgDQgvgFgdgWQgIgGgGgIQgjAJggAEQgnAEgdgGQgggEgQAAQgcgBgnAJIhCAPQhJAQgsgYQhBAJgrgPIgUgIQgMgFgJgBQgJgBgUAEIgDADQgTALgdAFIgzAFQguAFgMAAQggAAgWgMQgMgHgMgMQgaAIgmADQghAEgIACQgHACgeAPQg4AegwAAQgdAAgZgKQgbgKgSgVQgJgKgIgQQgzAIgzgBQg+gBglgUQhNAZg1gBIgOgBQgNAIgPAHQglAPgvAAQhFAAgvgaIgPgKIgJAGQgWAOgcABQgbABgXgOQgZgPgNgfQgMgcACggQADhCA2hBQAhglAigNQAkgPAxALQA2AMAZAhIAIAMQAfgFAiARQAdgPAogMQBogeA/AYQAWAIAQAOQAlgGAnADQAHgaARgUQASgUAYgJQAZgIAaAFQAbAFATARQAUATAJAgQAqgoA0gGQAigDAgAQQAhARANAeIACAFQAPgJAVgIIAugUIA8gaQAjgNAcACQAsAEAcApQALAPAFAPIAegGIBfgUQAwgKAZAAQAqgBAcASQALAHAJAKIAOgFQAxgQAegDQAfgDAYAGQAMgRAKgIQASgOAagDQAXgCAZAHIAkALQAWAHAPACQANABAbgCQAbgCANABQAnADAbAfQAfgHAlgFIBggLQAigDAQACQAfAFAWAZQANANAGAQQAbgOAmgKQBggYBiAIQA1AEAhARQAxgTAvAFQANABAWAGQAHgHAIgHQAvgoBTgDQBEgEBEATQAUAGAPAHQAegIAYAEQAjAGAYAcQARgDASgBIAsgCQAbgBARgEIAhgIQAUgGANAAQAagCAZANQAUAKAMAQQAjgHAZgCIAZAAIATgVQAOgPALgHQAXgRAdgBQAegBAYAPQAMAGASARQAUASAJAGIAIAEQARgMAWgJQBzgtCbA3IAKADIAEAAQBBgIAhAAQAsAAALgCQAKgBApgJQAfgHATABQAmADAZAaIAggBQAzgCAhANQAVAIAPAPQAQAPAGAUQAKAfgRAuQgPArgZAWQglAkg+gDQgjgBgrgRIgGACQgMACgSABIgfABQgNABgsAMQgrAMhEAKQgsAGgcgDQgrgEgegZQgKAJgMAHQgkATgygDQhFgFgmgnQg6AHg7gIQgggEgZgJIgOAGIgZAPQgQALgKAEQgvAWhGgSQglgLgbgTIgtAkQgtAigmADQgtADgwgfQgggVgTgaIgUAGIgaALIgZAMQgcALgfgBQgfgCgZgOQgVgMgNgUQgMAFgOADQgSAEgiADIgxAEQgwAOgQADIglAIQgVAFgOAGIgVAKIgUAKQgtAXgqAAQgzgBgggfg");
            var mask_graphics_46 = new cjs.Graphics().p("EgjtAF7QgwgBgqglQgbgYgMggQgOgjAIggQAEgNAHgNQgTgNgNgTQgcgpAIg0QAHgvAhgoQAZggAdgKQAggMA5AOQA0ANAUAYQAaAfgKA0IAAACQAdgDAcAEQArAGAlAUIANAIQAngTApgOQBPgbAsAZQAMAHANAOIAVgDIAogCQAQgBAGgDIATgQQASgRAZgGQAZgHAYAGQAYAHATARQASASAIAXQAQAxggA3QgTAig0AuQggAdgWAPQgfAVgeAIQgeAJgggEQgggEgcgQQgagPgIgCIgCgBIgnAJQg5AOgMACQhIANgsgaQglAJgegIQgNAVgYALQgWALgYAAIgCAAgAD/AAQgOgOgIgUQgSgEgWgJQgagMgTgMQgJAPgPAKQgXAPglACIhAgCIhSAEQgoACgdgEIgmAAQgiAAgXgDQgvgFgdgWQgIgGgGgIQgjAJggAEQgnAEgdgGQgggEgQAAQgcgBgnAJIhCAPQhJAQgsgYQhBAJgrgPIgUgIQgMgFgJgBQgJgBgUAEIgDADQgTALgdAFIgzAFQguAFgMAAQggAAgWgMQgMgHgMgMQgaAIgmADQghAEgIACQgHACgeAPQg4AegwAAQgdAAgZgKQgbgKgSgVQgJgKgIgQQgzAIgzgBQg+gBglgUQhNAZg1gBIgOgBQgNAIgPAHQglAPgvAAQhFAAgvgaIgPgKIgJAGQgWAOgcABQgbABgXgOQgZgPgNgfQgMgcACggQADhCA2hBQAhglAigNQAkgPAxALQA2AMAZAhIAIAMQAfgFAiARQAdgPAogMQBogeA/AYQAWAIAQAOQAlgGAnADQAHgaARgUQASgUAYgJQAZgIAaAFQAbAFATARQAUATAJAgQAqgoA0gGQAigDAgAQQAhARANAeIACAFQAPgJAVgIIAugUIA8gaQAjgNAcACQAsAEAcApQALAPAFAPIAegGIBfgUQAwgKAZAAQAqgBAcASQALAHAJAKIAOgFQAxgQAegDQAfgDAYAGQAMgRAKgIQASgOAagDQAXgCAZAHIAkALQAWAHAPACQANABAbgCQAbgCANABQAnADAbAfQAfgHAlgFIBggLQAigDAQACQAfAFAWAZQANANAGAQQAbgOAmgKQBggYBiAIQA1AEAhARQAxgTAvAFQANABAWAGQAHgHAIgHQAvgoBTgDQBEgEBEATQAUAGAPAHQAegIAYAEQAjAGAYAcQARgDASgBIAsgCQAbgBARgEIAhgIQAUgGANAAQAagCAZANQAUAKAMAQQAjgHAZgCIAZAAIATgVQAOgPALgHQAXgRAdgBQAegBAYAPQAMAGASARQAUASAJAGIAIAEQARgMAWgJQBzgtCbA3IAKADIAEAAQBBgIAhAAQAsAAALgCQAKgBApgJQAfgHATABQAmADAZAaIAggBQAzgCAhANQAVAIAPAPQAQAPAGAUQAKAfgRAuQgPArgZAWQglAkg+gDQgjgBgrgRIgGACQgMACgSABIgfABQgNABgsAMQgrAMhEAKQgsAGgcgDQgrgEgegZQgKAJgMAHQgkATgygDQhFgFgmgnQg6AHg7gIQgggEgZgJIgOAGIgZAPQgQALgKAEQgvAWhGgSQglgLgbgTIgtAkQgtAigmADQgtADgwgfQgggVgTgaIgUAGIgaALIgZAMQgcALgfgBQgfgCgZgOQgVgMgNgUQgMAFgOADQgSAEgiADIgxAEQgwAOgQADIglAIQgVAFgOAGIgVAKIgUAKQgtAXgqAAQgzgBgggfg");
            var mask_graphics_47 = new cjs.Graphics().p("EgjtAF7QgwgBgqglQgbgYgMggQgOgjAIggQAEgNAHgNQgTgNgNgTQgcgpAIg0QAHgvAhgoQAZggAdgKQAggMA5AOQA0ANAUAYQAaAfgKA0IAAACQAdgDAcAEQArAGAlAUIANAIQAngTApgOQBPgbAsAZQAMAHANAOIAVgDIAogCQAQgBAGgDIATgQQASgRAZgGQAZgHAYAGQAYAHATARQALALAIANQALgBAQAAQAeAAANgDIAUgHIAUgHQAigJAiASQAiARAMAhQADAIAHAlQAHAiAAAGQABAsgkAlQgeAgglAHQgOADgSAAIghgCQgagCgkABQgqACgbAHIgmANQgYAJgQACQgbADgagKIgHACQgeAJgggEQgggEgcgQQgagPgIgCIgCgBIgnAJQg5AOgMACQhIANgsgaQglAJgegIQgNAVgYALQgWALgYAAIgCAAgAD/AAQgOgOgIgUQgSgEgWgJQgagMgTgMQgJAPgPAKQgXAPglACIhAgCIhSAEQgoACgdgEIgmAAQgiAAgXgDQgvgFgdgWQgIgGgGgIQgjAJggAEQgnAEgdgGQgggEgQAAQgcgBgnAJIhCAPQhJAQgsgYQhBAJgrgPIgUgIQgMgFgJgBQgJgBgUAEIgDADQgTALgdAFIgzAFQguAFgMAAQggAAgWgMQgMgHgMgMQgaAIgmADQghAEgIACQgHACgeAPQg4AegwAAQgdAAgZgKQgbgKgSgVQgJgKgIgQQgzAIgzgBQg+gBglgUQhNAZg1gBIgOgBQgNAIgPAHQglAPgvAAQhFAAgvgaIgPgKIgJAGQgWAOgcABQgbABgXgOQgZgPgNgfQgMgcACggQADhCA2hBQAhglAigNQAkgPAxALQA2AMAZAhIAIAMQAfgFAiARQAdgPAogMQBogeA/AYQAWAIAQAOQAlgGAnADQAHgaARgUQASgUAYgJQAZgIAaAFQAbAFATARQAUATAJAgQAqgoA0gGQAigDAgAQQAhARANAeIACAFQAPgJAVgIIAugUIA8gaQAjgNAcACQAsAEAcApQALAPAFAPIAegGIBfgUQAwgKAZAAQAqgBAcASQALAHAJAKIAOgFQAxgQAegDQAfgDAYAGQAMgRAKgIQASgOAagDQAXgCAZAHIAkALQAWAHAPACQANABAbgCQAbgCANABQAnADAbAfQAfgHAlgFIBggLQAigDAQACQAfAFAWAZQANANAGAQQAbgOAmgKQBggYBiAIQA1AEAhARQAxgTAvAFQANABAWAGQAHgHAIgHQAvgoBTgDQBEgEBEATQAUAGAPAHQAegIAYAEQAjAGAYAcQARgDASgBIAsgCQAbgBARgEIAhgIQAUgGANAAQAagCAZANQAUAKAMAQQAjgHAZgCIAZAAIATgVQAOgPALgHQAXgRAdgBQAegBAYAPQAMAGASARQAUASAJAGIAIAEQARgMAWgJQBzgtCbA3IAKADIAEAAQBBgIAhAAQAsAAALgCQAKgBApgJQAfgHATABQAmADAZAaIAggBQAzgCAhANQAVAIAPAPQAQAPAGAUQAKAfgRAuQgPArgZAWQglAkg+gDQgjgBgrgRIgGACQgMACgSABIgfABQgNABgsAMQgrAMhEAKQgsAGgcgDQgrgEgegZQgKAJgMAHQgkATgygDQhFgFgmgnQg6AHg7gIQgggEgZgJIgOAGIgZAPQgQALgKAEQgvAWhGgSQglgLgbgTIgtAkQgtAigmADQgtADgwgfQgggVgTgaIgUAGIgaALIgZAMQgcALgfgBQgfgCgZgOQgVgMgNgUQgMAFgOADQgSAEgiADIgxAEQgwAOgQADIglAIQgVAFgOAGIgVAKIgUAKQgtAXgqAAQgzgBgggfg");
            var mask_graphics_48 = new cjs.Graphics().p("EgjtAF7QgwgBgqglQgbgYgMggQgOgjAIggQAEgNAHgNQgTgNgNgTQgcgpAIg0QAHgvAhgoQAZggAdgKQAggMA5AOQA0ANAUAYQAaAfgKA0IAAACQAdgDAcAEQArAGAlAUIANAIQAngTApgOQBPgbAsAZQAMAHANAOIAVgDIAogCQAQgBAGgDIATgQQASgRAZgGQAZgHAYAGQAYAHATARQALALAIANQALgBAQAAQAeAAANgDIAUgHIAUgHQAigJAiASIAHAEIALgDQAmgKAgACQAmABAfATQAiAUAMAgIAAAAIA4gZQAtgRAjAIQAoAJAVApQAVAogOAnQgHAQgOASQgJAKgTATQgfAggXAOQgpAZg6gCQg3gBgigZIgTAHQggAJg3AEQgtADgcgBQgngCgfgMQgSgIgQgLQgpACgbAHIgmANQgYAJgQACQgbADgagKIgHACQgeAJgggEQgggEgcgQQgagPgIgCIgCgBIgnAJQg5AOgMACQhIANgsgaQglAJgegIQgNAVgYALQgWALgYAAIgCAAgAD/AAQgOgOgIgUQgSgEgWgJQgagMgTgMQgJAPgPAKQgXAPglACIhAgCIhSAEQgoACgdgEIgmAAQgiAAgXgDQgvgFgdgWQgIgGgGgIQgjAJggAEQgnAEgdgGQgggEgQAAQgcgBgnAJIhCAPQhJAQgsgYQhBAJgrgPIgUgIQgMgFgJgBQgJgBgUAEIgDADQgTALgdAFIgzAFQguAFgMAAQggAAgWgMQgMgHgMgMQgaAIgmADQghAEgIACQgHACgeAPQg4AegwAAQgdAAgZgKQgbgKgSgVQgJgKgIgQQgzAIgzgBQg+gBglgUQhNAZg1gBIgOgBQgNAIgPAHQglAPgvAAQhFAAgvgaIgPgKIgJAGQgWAOgcABQgbABgXgOQgZgPgNgfQgMgcACggQADhCA2hBQAhglAigNQAkgPAxALQA2AMAZAhIAIAMQAfgFAiARQAdgPAogMQBogeA/AYQAWAIAQAOQAlgGAnADQAHgaARgUQASgUAYgJQAZgIAaAFQAbAFATARQAUATAJAgQAqgoA0gGQAigDAgAQQAhARANAeIACAFQAPgJAVgIIAugUIA8gaQAjgNAcACQAsAEAcApQALAPAFAPIAegGIBfgUQAwgKAZAAQAqgBAcASQALAHAJAKIAOgFQAxgQAegDQAfgDAYAGQAMgRAKgIQASgOAagDQAXgCAZAHIAkALQAWAHAPACQANABAbgCQAbgCANABQAnADAbAfQAfgHAlgFIBggLQAigDAQACQAfAFAWAZQANANAGAQQAbgOAmgKQBggYBiAIQA1AEAhARQAxgTAvAFQANABAWAGQAHgHAIgHQAvgoBTgDQBEgEBEATQAUAGAPAHQAegIAYAEQAjAGAYAcQARgDASgBIAsgCQAbgBARgEIAhgIQAUgGANAAQAagCAZANQAUAKAMAQQAjgHAZgCIAZAAIATgVQAOgPALgHQAXgRAdgBQAegBAYAPQAMAGASARQAUASAJAGIAIAEQARgMAWgJQBzgtCbA3IAKADIAEAAQBBgIAhAAQAsAAALgCQAKgBApgJQAfgHATABQAmADAZAaIAggBQAzgCAhANQAVAIAPAPQAQAPAGAUQAKAfgRAuQgPArgZAWQglAkg+gDQgjgBgrgRIgGACQgMACgSABIgfABQgNABgsAMQgrAMhEAKQgsAGgcgDQgrgEgegZQgKAJgMAHQgkATgygDQhFgFgmgnQg6AHg7gIQgggEgZgJIgOAGIgZAPQgQALgKAEQgvAWhGgSQglgLgbgTIgtAkQgtAigmADQgtADgwgfQgggVgTgaIgUAGIgaALIgZAMQgcALgfgBQgfgCgZgOQgVgMgNgUQgMAFgOADQgSAEgiADIgxAEQgwAOgQADIglAIQgVAFgOAGIgVAKIgUAKQgtAXgqAAQgzgBgggfg");
            var mask_graphics_49 = new cjs.Graphics().p("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");
            var mask_graphics_50 = new cjs.Graphics().p("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");
            var mask_graphics_51 = new cjs.Graphics().p("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");
            var mask_graphics_52 = new cjs.Graphics().p("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");
            var mask_graphics_53 = new cjs.Graphics().p("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");
            var mask_graphics_54 = new cjs.Graphics().p("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");
            var mask_graphics_55 = new cjs.Graphics().p("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");
            var mask_graphics_56 = new cjs.Graphics().p("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");
            var mask_graphics_57 = new cjs.Graphics().p("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");
            var mask_graphics_58 = new cjs.Graphics().p("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");
            var mask_graphics_59 = new cjs.Graphics().p("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");
            var mask_graphics_60 = new cjs.Graphics().p("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");
            var mask_graphics_61 = new cjs.Graphics().p("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");
            var mask_graphics_62 = new cjs.Graphics().p("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");
            var mask_graphics_63 = new cjs.Graphics().p("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");
            var mask_graphics_64 = new cjs.Graphics().p("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");
            var mask_graphics_65 = new cjs.Graphics().p("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");
            var mask_graphics_66 = new cjs.Graphics().p("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");
            var mask_graphics_67 = new cjs.Graphics().p("ArsJPQgegUgLgdQgQALgZAFQgRADggABQgsAAgagGQgmgIgVgWQgNgOgGgRQhgBGhlAOQgyAHgigLQgTgGgOgJQgLAEgMACQgdAEgdgHQgkgKghgaQgeALggACQgdABgagIQgIAHgJAGQgYAOgeAAQgdABgbgMQgSgIgHAAQgGABgQAIQgeAOgigGQgigGgXgXQgXgYgFgiQgFgiAPgeQAGgMAZgeQAogtAWgVQBDhDA9gQIAxgLIAUgHIAUgGQAegGAeAOQAdAOAPAbQAPABARADQAZAEApAOIAEgBQAfgMAZgDQAbgEAwAEQBGAHAlAZIAKgFIAugcQA5gfAtAFQAbACAXAPQAXAOAOAXQAGAJAEAJQA7gmAvgLQAfgHAdAEQAgAEAZAQQAWAOAMAYQApgjAngMQA2gSAqAWQAnATAPAvQAPAtgOAtQgVBHhYBDQhNA7g/ACIgHAAQgkAAgggTgAJoDMQgagJgTgVQgUATgaAEQgwAJgxgjIgOgLQgMAGgNAGQgzAVg2gCQgogBgcgPQgjgSgIgjQgJgBhKAAQgygBgbgQIgIgFIgcASIgwAgQgdARgYACQgWADgVgIQgWgIgPgQQgKgLgFgBQgFgCgOACQgsAIghgMQgJgDgJgGQhAAWgwgGIgQgDIgBABIgbAKQgsASgXAGQgrAMgvgEQgogDgegRQgRgKgNgNQgNAGgOADQgYAFgugIIgWgEQguAKgwACQg3ABgfgRIgZgPQgPgIgMABQgLAAgMAHIgVANQgSAKgZAGQgPADggADQgkAFgVgBQgfgBgXgMQgSgKgMgRIgCACQgpAZg6gCQg3gBgigZIgTAHQggAJg3AEQgtADgcgBQgngCgfgMQgTgIgPgLQgqACgaAHIgmANQgYAJgQACQgbADgagKIgHACQgeAJgggEQgggEgcgQQgagPgIgCIgDgBIgmAJQg5AOgMACQhIANgsgaQglAJgegIQgNAVgYALQgXAMgZgBQgwgBgqglQgbgYgMggQgOgjAIgfQADgNAIgNQgUgNgMgTQgcgpAIg0QAHgvAhgpQAZggAdgKQAggMA5AOQA0ANAUAYQAaAggKA0IAAACQAcgDAdAEQArAGAlAUIANAIQAmgTAqgOQBPgbAsAZQAMAHANAOIAVgDIAogCQAQgBAGgDIATgQQASgRAZgGQAZgHAYAGQAYAHATARQALALAIANQALgBAQAAQAeAAANgDIAUgHIAUgHQAigJAiASIAHAEIALgDQAmgKAgACQAmABAfATQAiAUAMAgIAAAAIA4gZQAtgRAiAHIABgCQARgdAlgUQAngWBGgRQA3gOBDgMQAfgGASAAQAcgCAVAHQAfAJAWAaIAPgDQA9gJA7ABQApAAAYAKQAcAMAQAbQAHANAEAMQAkgJAUgDQAhgFAaAFQAfAFAYAUIAJAJIAVgMIAQgIQgBgUAHgTQAKgcAZgTQAZgTAegCQARgBAZAFIAqAJQARADAtACQBGACBJgDQgNgNgGgSQgSgEgWgJQgagMgTgMQgKAPgOAKQgXAPglACIhBgCIhSAEQgoACgdgEIgmAAQgiAAgXgDQgvgFgdgWQgIgGgHgIQgjAJgfAEQgnAEgdgGQgggEgQAAQgcgBgnAJIhCAPQhJAQgsgYQhBAJgrgPIgUgIQgMgFgJgBQgKgBgTAEIgDADQgTALgdAFIgzAFQguAFgMAAQggAAgWgMQgNgHgLgMQgaAIgmADQghAEgIACQgHACgeAPQg4AegwAAQgdAAgZgKQgbgKgSgVQgJgKgIgQQgzAIgzgBQg+gBglgUQhOAYg0AAIgPgBQgMAIgPAHQglAPgvAAQhFAAgvgaIgQgKIgIAGQgWAOgcABQgbABgXgOQgZgPgNgfQgMgcACggQADhCA2hBQAhglAigNQAkgPAxALQA2AMAZAhIAIAMQAfgFAiARQAdgPAogMQBogeA/AYQAVAIARAOQAlgGAnADQAHgaARgUQASgUAYgJQAZgIAaAFQAbAFATARQAUATAJAgQAqgoA0gGQAigDAgAQQAhARANAeIACAFQAPgJAVgIIAugUIA8gaQAjgNAcACQAsAEAcApQAKAPAFAPIAfgGIBfgUQAwgKAZAAQAqgBAcASQALAHAIAKIAPgFQAxgQAegDQAfgDAYAGQAMgRAKgIQASgOAagDQAXgCAZAHIAkALQAWAHAPACQANABAbgCQAbgCANABQAnADAbAfQAfgHAlgFIBhgLQAigDAQACQAfAFAWAZQAMANAHAQQAbgOAmgKQBfgYBiAIQA0AEAhARQAygTAvAFQANABAWAGQAHgHAIgHQAvgoBTgDQBEgEBEATQATAGAQAHQAegIAYAEQAjAGAYAcQARgDASgBIAsgCQAbgBARgEIAhgIQAUgGANAAQAagCAZANQATAKANAQQAjgHAZgCIAZAAIATgVQAOgPALgHQAXgRAdgBQAegBAYAPQAMAGASARQAUASAJAGIAIAEQARgMAWgJQBzgtCbA3IAKADIAEAAQBBgIAhAAQAsAAALgCQAKgBApgJQAfgHATABQAmADAZAaIAggBQAzgCAhANQAVAIAPAPQAQAPAGAUQAKAfgRAuQgPArgZAWQglAkg+gDQgkgBgqgRIgGACQgMACgSABIgfABQgNABgsAMQgrAMhEAKQgsAGgcgDQgrgEgegZQgKAJgMAHQgkATgygDQhFgFgmgnQg6AHg7gIQgggEgagJIgNAGIgZAPQgQALgKAEQgvAWhGgSQglgLgbgTIgtAkQgtAjgmADQgtADgwggQghgVgSgaIgUAGIgaALIgZAMQgcALgfgBQgfgCgZgOQgVgMgOgUQgLAFgOADQgSAEgiADIgxAEQgwAOgQADIglAIIgKACIAGAAQAtgBAiAKQAZAHAZAQIAcgEQBEgKAjAGQAfAGAaATQAaAUANAcQAGANADAOIBugRQAygHAVABQApADAZAVIAMALQAHAHAGADQAJAEATAAQAcAAATAFIAzgtQAlgfAhgLQAugOApASQAUAJAPARQAPASAEAVIAmADIAXgEQAegFAUgBQAigCAZAJQAmgEAsgBICngFIBJgEIBIgDIAaAAQALgSATgNQAYgRAdgBQAQgBAWAEIAlAJQAiAJApADIApACQAYABAQADQAhAFAXAPQBBgdA/gDQBNgDA9AkQAhAUASAZQAGAJAMAZQAMAVAIALQAIALAJADQAGADAOAAIBiAAQAdAAAQABQAZADASAIQAZANAPAYQAQAZgBAcQAAAbgQAZQgQAYgZAMQgTAJgcACIgyAAIhLAAQgrAAgegGQgogHgegSQgjgUgRgfIgHgLQgEgGgGgBQgGgCgNAFQgbAKgeADQgLAMgNAJQgmAag2ALQgqAIg8AAQhNAAgrgRQgegMgWgWQgJgKgHgLIgMABIhFAAIgeAFIgGAFIgMAKQgVAPgiADIg9AAIg5ABQghgBgWgKQgKgFgIgGQgIAGgJAEQgUAJgfACIg1ACQgWAAgwAHQgtAFgYAAQgmAAgggLQgjgOgVgZQgHgJgFgLIgOADQgDAfgTAZQgUAagdAIQgdAIghgMQgdgKgbgXQgYgUgMgXQgfAFggALQgQAGgFAFQgFAFgFAJIgHAPQgPAcghAMQgSAHgRAAQgPAAgOgFg");
            var mask_graphics_68 = new cjs.Graphics().p("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");
            var mask_graphics_69 = new cjs.Graphics().p("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");
            var mask_graphics_70 = new cjs.Graphics().p("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");
            var mask_graphics_71 = new cjs.Graphics().p("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");
            var mask_graphics_72 = new cjs.Graphics().p("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");
            var mask_graphics_73 = new cjs.Graphics().p("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");
            var mask_graphics_74 = new cjs.Graphics().p("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");
            var mask_graphics_75 = new cjs.Graphics().p("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");
            var mask_graphics_76 = new cjs.Graphics().p("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");
            var mask_graphics_77 = new cjs.Graphics().p("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");
            var mask_graphics_78 = new cjs.Graphics().p("Al3JOQgLgOgDgRQgOAJgKAGQgsAWgzgDQghgCgbgOQgLgFgJgHQguAYgnACQgoACgjgWQgegTgLgeQgQAMgZAFQgRADggAAQgsAAgagFQgmgJgVgWQgNgNgGgRQhgBGhlAOQgyAGgigLQgTgFgOgKQgLAEgMACQgdAFgdgIQgkgKghgaQgeAMggABQgdACgagIQgIAHgJAFQgYAOgeABQgdAAgbgMQgSgIgHABQgGAAgQAIQgeAOgigFQgigGgXgYQgXgXgFgjQgFgiAPgdQAGgNAZgdQAogtAWgWQBDhDA9gQIAxgLIAUgHIAUgFQAegHAeAPQAdAOAPAbQAPAAARADQAZAEApAPIAEgCQAfgLAZgEQAbgEAwAEQBGAHAlAaIAKgGIAugbQA5gfAtAEQAOABANAFQALgZAVgOQATgMAcgEIAzgDIA0gFQAegDAVADQAcADAvARIBgAiQAUgIARgBQAKAAAUADQAVACAKAAQAKgBAkgIQAcgGAsAAQAvABAbAJQAYAHARANQAngbBPgDQBJgCAlAWQAJAFAHAHQAQgHAYgCQAsgFBMAIQBWAJAigBIAVgBIAEgSQADgMAFgKIgaABQgogBgcgPQgjgTgIgiQgJgChKAAQgyAAgbgRIgIgFIgcASIgwAhQgdAQgYADQgWACgVgIQgWgIgPgQQgKgKgFgCQgFgCgOACQgsAJghgMQgJgEgJgFQhAAVgwgGIgQgCIgBAAIgbALQgsARgXAHQgrAMgvgEQgogEgegQQgRgKgNgOQgNAHgOADQgYAEgugIIgWgDQguAKgwABQg3ABgfgQIgZgPQgPgIgMAAQgLABgMAGIgVANQgSALgZAFQgPADggAEQgkAEgVgBQgfgBgXgMQgSgJgMgRIgCABQgpAZg6gBQg3gBgigaIgTAHQggAJg3AEQgtAEgcgCQgngCgfgMQgTgHgPgMQgqACgaAIIgmANQgYAIgQACQgbAEgagKIgHACQgeAIgggEQgggEgcgPQgagPgIgDIgDAAIgmAIQg5APgMACQhIAMgsgaQglAKgegIQgNAUgYAMQgXALgZAAQgwgCgqglQgbgYgMggQgOgiAIgfQADgNAIgOQgUgNgMgSQgcgpAIg1QAHguAhgqQAZgfAdgLQAggMA5APQA0ANAUAXQAaAggKA1IAAACQAcgDAdAEQArAGAlAUIANAHQAmgSAqgOQBPgcAsAaQAMAHANAOIAVgDIAogCQAQgBAGgDIATgQQASgRAZgHQAZgGAYAGQAYAGATASQALALAIANQALgCAQAAQAeAAANgDIAUgGIAUgHQAigJAiARIAHAEIALgDQAmgJAgABQAmACAfASQAiAUAMAhIAAAAIA4gaQAtgRAiAIIABgCQARgdAlgVQAngWBGgRQA3gNBDgNQAfgFASgBQAcgBAVAGQAfAKAWAZIAPgCQA9gJA7AAQApAAAYALQAcAMAQAbQAHAMAEANQAkgJAUgDQAhgFAaAEQAfAGAYATIAJAJIAVgLIAQgJQgBgUAHgTQAKgbAZgTQAZgTAegDQARgBAZAFIAqAJQARADAtACQBGACBJgCQgNgOgGgRQgSgFgWgJQgagLgTgNQgKAPgOAKQgXAPglACIhBgBIhSADQgoACgdgDIgmAAQgigBgXgDQgvgFgdgWQgIgGgHgHQgjAJgfADQgnAEgdgFQgggEgQgBQgcgBgnAJIhCAQQhJAPgsgXQhBAJgrgQIgUgIQgMgEgJgBQgKgBgTAEIgDACQgTAMgdAEIgzAFQguAFgMAAQggAAgWgLQgNgHgLgNQgaAJgmADQghADgIADQgHACgeAPQg4AdgwABQgdAAgZgKQgbgLgSgUQgJgLgIgPQgzAIgzgBQg+gCglgUQhOAZg0gBIgPgBQgMAJgPAGQglAPgvABQhFAAgvgaIgQgKIgIAGQgWAOgcAAQgbABgXgNQgZgQgNgeQgMgcACghQADhCA2hAQAhgmAigNQAkgOAxAKQA2ANAZAhIAIALQAfgEAiARQAdgPAogMQBogfA/AYQAVAJARANQAlgFAnACQAHgZARgUQASgUAYgJQAZgJAaAFQAbAFATASQAUATAJAgQAqgpA0gFQAigEAgARQAhAQANAfIACAFQAPgJAVgJIAugTIA8gaQAjgNAcACQAsAEAcAoQAKAPAFAQIAfgGIBfgUQAwgKAZAAQAqgBAcASQALAHAIAJIAPgEQAxgQAegEQAfgDAYAHQAMgSAKgIQASgOAagCQAXgDAZAHIAkAMQAWAHAPABQANACAbgDQAbgCANABQAnAEAbAeQAfgHAlgFIBhgLQAigDAQADQAfAFAWAZQAMANAHAPQAbgOAmgKQBfgXBiAHQA0AEAhASQAygTAvAEQANACAWAGQAHgIAIgHQAvgnBTgEQBEgDBEATQATAFAQAHQAegHAYAEQAjAFAYAdQARgEASgBIAsgCQAbgBARgDIAhgJQAUgFANgBQAagCAZAOQATAKANAQQAjgIAZgBIAZgBIATgVQAOgOALgIQAXgQAdgBQAegBAYAOQAMAHASAQQAUASAJAGIAIAEQARgLAWgJQBzgtCbA2IAKAEIAEgBQBBgIAhAAQAsAAALgBQAKgBApgKQAfgHATACQAmACAZAbIAggCQAzgCAhANQAVAIAPAPQAQAQAGATQAKAfgRAvQgPAqgZAXQglAjg+gCQgkgCgqgQIgGABQgMADgSAAIgfABQgNACgsALQgrAMhEAKQgsAHgcgDQgrgFgegZQgKAJgMAHQgkAUgygEQhFgEgmgoQg6AHg7gHQgggFgagIIgNAGIgZAPQgQAKgKAFQgvAVhGgSQglgKgbgTIgtAkQgtAigmADQgtAEgwghQghgVgSgaIgUAGIgaAMIgZAMQgcALgfgCQgfgBgZgPQgVgMgOgTQgLAEgOAEQgSADgiADIgxAEQgwAOgQAEIglAHIgKADIAGAAQAtgBAiAKQAZAHAZAPIAcgEQBEgKAjAHQAfAFAaAUQAaATANAcQAGAOADAOIBugRQAygIAVACQApACAZAWIAMALQAHAGAGADQAJAEATAAQAcABATAFIAzgtQAlggAhgKQAugPApASQAUAJAPASQAPARAEAVIAmADIAXgEQAegFAUgBQAigBAZAIQAmgDAsgCICngEIBJgFIBIgDIAaABQALgSATgNQAYgRAdgCQAQgBAWAFIAlAJQAiAIApADIApACQAYACAQACQAhAFAXAPQBBgdA/gCQBNgDA9AjQAhAUASAaQAGAJAMAYQAMAWAIALQAIALAJADQAGACAOAAIBiAAQAdAAAQACQAZADASAJQAZALAPAZQAQAZgBAbQAAAcgQAZQgQAYgZALQgTAJgcACIgyABIhLAAQgrgBgegFQgogIgegSQgjgUgRgfIgHgLQgEgFgGgCQgGgCgNAFQgbAKgeAEQgLALgNAKQgmAag2ALQgqAIg8AAQhNAAgrgRQgegMgWgXQgJgJgHgLIgMAAIhFABIgeAEIgGAGIgMAKQgVAPgiADIg9AAIg5AAQghgBgWgKQgKgEgIgHQgIAGgJAFQgUAJgfACIg1ABQgWABgwAGQgtAGgYAAQgmgBgggLQgjgNgVgaQgHgIgFgMIgOADQgDAfgTAZQgUAagdAIQgdAIghgLQgdgKgbgXQgYgVgMgXQgfAGggAKQgQAHgFAFQgFAEgFAJIgHAPQgPAdghAMQgJADgJACIAJANQAKARADAUQAjABAfANIAKAEQAZgdAigXQAmgZAkgHQAsgIAkATQASAKANARIAJAOQAVgVAdgQQA+ghBIABQAiABAaAIQAZgGAZAEQAcAEAWAQQAXARAHAZIAFAaQACARADAJQAEAIAJALIAOASQAOAUAEAYQAEAZgIAWQgIAXgRAQQAAAmgYAaQgZAbg9ALQhcAThZgCQhWgBgkglIgKgNIgTAGQgdAGgjgKQgNgDgVgJQgGAEgEAEQgGAGgFALIgKARQgWAhhBAEQgvADgegMQgWgJgQgRQgOgOgJgRQhHANgxgQIgKgEIgNAMIgRARQgSAVgLAJQgUAQghAIQgJADgyAHQg/ANggADQgrAEgpgIQgrgIgagVQgSgOgKgVIgGgMIgRABQgOANgSAMQgXANgpAOQg4ATglAJQg0AMgsABIgEAAQhJAAgegog");

            this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(24).to({ graphics: mask_graphics_24, x: 190.2, y: 175.3 }).wait(1).to({ graphics: mask_graphics_25, x: 197.2, y: 176.1 }).wait(1).to({ graphics: mask_graphics_26, x: 208.6, y: 176.1 }).wait(1).to({ graphics: mask_graphics_27, x: 220.3, y: 175 }).wait(1).to({ graphics: mask_graphics_28, x: 234.2, y: 176.4 }).wait(1).to({ graphics: mask_graphics_29, x: 245.2, y: 176.4 }).wait(1).to({ graphics: mask_graphics_30, x: 260.6, y: 176.4 }).wait(1).to({ graphics: mask_graphics_31, x: 271.6, y: 176.4 }).wait(1).to({ graphics: mask_graphics_32, x: 284.8, y: 176.4 }).wait(1).to({ graphics: mask_graphics_33, x: 298.2, y: 176.4 }).wait(1).to({ graphics: mask_graphics_34, x: 317.6, y: 176.4 }).wait(1).to({ graphics: mask_graphics_35, x: 329.1, y: 176.4 }).wait(1).to({ graphics: mask_graphics_36, x: 332.2, y: 178.4 }).wait(1).to({ graphics: mask_graphics_37, x: 344.6, y: 178.4 }).wait(1).to({ graphics: mask_graphics_38, x: 357.7, y: 178.4 }).wait(1).to({ graphics: mask_graphics_39, x: 367.7, y: 178.4 }).wait(1).to({ graphics: mask_graphics_40, x: 378.1, y: 178.4 }).wait(1).to({ graphics: mask_graphics_41, x: 392.2, y: 178.4 }).wait(1).to({ graphics: mask_graphics_42, x: 412.6, y: 178.4 }).wait(1).to({ graphics: mask_graphics_43, x: 404.1, y: 187.5 }).wait(1).to({ graphics: mask_graphics_44, x: 404.1, y: 195.7 }).wait(1).to({ graphics: mask_graphics_45, x: 404.1, y: 195.7 }).wait(1).to({ graphics: mask_graphics_46, x: 404.1, y: 195.7 }).wait(1).to({ graphics: mask_graphics_47, x: 404.1, y: 195.7 }).wait(1).to({ graphics: mask_graphics_48, x: 404.1, y: 195.7 }).wait(1).to({ graphics: mask_graphics_49, x: 404.1, y: 195.7 }).wait(1).to({ graphics: mask_graphics_50, x: 404.1, y: 195.8 }).wait(1).to({ graphics: mask_graphics_51, x: 404.1, y: 196.9 }).wait(1).to({ graphics: mask_graphics_52, x: 404.1, y: 196.9 }).wait(1).to({ graphics: mask_graphics_53, x: 404.1, y: 196.9 }).wait(1).to({ graphics: mask_graphics_54, x: 404.1, y: 197.9 }).wait(1).to({ graphics: mask_graphics_55, x: 404.1, y: 198.3 }).wait(1).to({ graphics: mask_graphics_56, x: 404.1, y: 198.8 }).wait(1).to({ graphics: mask_graphics_57, x: 404.1, y: 198.8 }).wait(1).to({ graphics: mask_graphics_58, x: 404.1, y: 198.8 }).wait(1).to({ graphics: mask_graphics_59, x: 404.6, y: 198.8 }).wait(1).to({ graphics: mask_graphics_60, x: 410.1, y: 198.8 }).wait(1).to({ graphics: mask_graphics_61, x: 434.1, y: 198.8 }).wait(1).to({ graphics: mask_graphics_62, x: 434.1, y: 216.3 }).wait(1).to({ graphics: mask_graphics_63, x: 434.1, y: 216.3 }).wait(1).to({ graphics: mask_graphics_64, x: 434.1, y: 216.7 }).wait(1).to({ graphics: mask_graphics_65, x: 434.1, y: 217.4 }).wait(1).to({ graphics: mask_graphics_66, x: 434.1, y: 217.4 }).wait(1).to({ graphics: mask_graphics_67, x: 434.1, y: 218.8 }).wait(1).to({ graphics: mask_graphics_68, x: 434.1, y: 219 }).wait(1).to({ graphics: mask_graphics_69, x: 434.1, y: 219 }).wait(1).to({ graphics: mask_graphics_70, x: 434.1, y: 220.8 }).wait(1).to({ graphics: mask_graphics_71, x: 434.1, y: 220.8 }).wait(1).to({ graphics: mask_graphics_72, x: 434.1, y: 220.8 }).wait(1).to({ graphics: mask_graphics_73, x: 434.1, y: 220.8 }).wait(1).to({ graphics: mask_graphics_74, x: 434.1, y: 220.8 }).wait(1).to({ graphics: mask_graphics_75, x: 434.1, y: 220.8 }).wait(1).to({ graphics: mask_graphics_76, x: 434.1, y: 220.8 }).wait(1).to({ graphics: mask_graphics_77, x: 434.1, y: 220.8 }).wait(1).to({ graphics: mask_graphics_78, x: 434.1, y: 220.8 }).wait(1));

            // 圖層 7
            this.instance_6 = new lib.辛勤工作回報的年終獎金正在想如何好好規劃旺旺發財新臺幣定存專案最高階年息168讓您穩穩存好存滿加薪又加值_1();
            this.instance_6.parent = this;
            this.instance_6.setTransform(422.5, 217.5, 1, 1, 0, 0, 0, 256.5, 50.5);
            this.instance_6._off = true;

            var maskedShapeInstanceList = [this.instance_6];

            for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
                maskedShapeInstanceList[shapedInstanceItr].mask = mask;
            }

            this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({ _off: false }, 0).wait(55));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(124, -295.3, 160.8, 147.4);


        (lib.元件3 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.小金花_1();
            this.instance.parent = this;
            this.instance.setTransform(78.5, 46.5, 1, 1, 0, 0, 0, 78.5, 46.5);

            this.timeline.addTween(cjs.Tween.get(this.instance).to({ y: 36.5 }, 21).to({ y: 46.5 }, 23).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 157, 93);


        (lib.元件2 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.大金花_1();
            this.instance.parent = this;
            this.instance.setTransform(103, 62, 1, 1, 0, 0, 0, 103, 62);

            this.timeline.addTween(cjs.Tween.get(this.instance).to({ y: 68 }, 22).to({ y: 62 }, 21).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 206, 124);


        (lib.元件1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.小小金花_1();
            this.instance.parent = this;
            this.instance.setTransform(57, 34, 1, 1, 0, 0, 0, 57, 34);
            this.instance.alpha = 0.699;

            this.timeline.addTween(cjs.Tween.get(this.instance).to({ y: 39 }, 15).to({ y: 34 }, 14).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 114, 68);


        (lib.狗_1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // 圖層 1
            this.instance = new lib.補間動畫1("synched", 0);
            this.instance.parent = this;
            this.instance.setTransform(153.5, 123.5);

            this.instance_1 = new lib.補間動畫2("synched", 0);
            this.instance_1.parent = this;
            this.instance_1.setTransform(153.5, 103.5, 1, 1, -5.2);
            this.instance_1._off = true;

            this.instance_2 = new lib.補間動畫3("synched", 0);
            this.instance_2.parent = this;
            this.instance_2.setTransform(153.5, 123.5);

            this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 15).to({ state: [{ t: this.instance_2 }] }, 16).wait(1));
            this.timeline.addTween(cjs.Tween.get(this.instance).to({ _off: true, rotation: -5.2, y: 103.5 }, 15).wait(17));
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ _off: false }, 15).to({ _off: true, rotation: 0, y: 123.5 }, 16).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 307, 247);


        // stage content:
        (lib.kv = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // timeline functions:
            this.frame_170 = function () {
                this.stop();
            }

            // actions tween:
            this.timeline.addTween(cjs.Tween.get(this).wait(170).call(this.frame_170).wait(1));

            // 狗
            this.instance = new lib.狗_1();
            this.instance.parent = this;
            this.instance.setTransform(-93.2, 281.7, 0.524, 0.524, 0, 0, 0, 153.5, 123.5);
            this.instance._off = true;

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({ _off: false }, 0).to({ regX: 153.7, regY: 123.6, scaleX: 0.62, scaleY: 0.62, rotation: -15.7, guide: { path: [-93.1, 281.7, 102.8, 307.7, 238.8, 453.7, 238.8, 453.7, 238.8, 453.7] } }, 8, cjs.Ease.get(-1)).to({ regX: 153.6, scaleX: 0.67, scaleY: 0.67, rotation: 0, guide: { path: [238.8, 453.7, 258.7, 356.4, 282.2, 311.7, 305.6, 267, 332.6, 274.9] } }, 7, cjs.Ease.get(0.98)).to({ regX: 153.7, scaleX: 0.73, scaleY: 0.73, guide: { path: [332.6, 274.9, 370, 285.8, 414.1, 397.6] } }, 6, cjs.Ease.get(-1)).to({ scaleX: 0.81, scaleY: 0.81, guide: { path: [414.1, 397.5, 414.3, 398.1, 414.5, 398.7, 434.9, 292.1, 459.9, 242.8, 484.9, 193.5, 514.5, 201.4] } }, 7, cjs.Ease.get(1)).to({ regX: 154.1, regY: 123.5, scaleX: 0.88, scaleY: 0.88, guide: { path: [514.5, 201.5, 553.9, 212.1, 601.5, 324, 601.5, 324, 601.5, 324] } }, 8, cjs.Ease.get(-1)).to({ regX: 153.8, regY: 123.7, scaleX: 0.95, scaleY: 0.95, guide: { path: [601.5, 324, 654.9, 185.8, 707.8, 164.7] } }, 7, cjs.Ease.get(1)).to({ scaleX: 0.97, scaleY: 0.97, guide: { path: [707.7, 164.7, 736.8, 153.1, 765.7, 177, 794.6, 200.8, 823.3, 260.1, 823.3, 260.1, 823.3, 260.1] } }, 6, cjs.Ease.get(-1)).to({ regX: 153.5, regY: 123.5, scaleX: 1, scaleY: 1, guide: { path: [823.3, 260.1, 846.3, 231.4, 875.8, 193.9] } }, 3).wait(94));

            // 1.68
            this.instance_1 = new lib._168_1();
            this.instance_1.parent = this;
            this.instance_1.setTransform(756, 567.5, 1, 1, 0, 0, 0, 245, 152.5);
            this.instance_1.alpha = 0;
            this.instance_1._off = true;

            this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({ _off: false }, 0).wait(1).to({ y: 562.2, alpha: 0.067 }, 0).wait(1).to({ y: 554.1, alpha: 0.168 }, 0).wait(1).to({ y: 540.7, alpha: 0.335 }, 0).wait(1).to({ y: 523.9, alpha: 0.545 }, 0).wait(1).to({ y: 512.6, alpha: 0.686 }, 0).wait(1).to({ y: 505.6, alpha: 0.773 }, 0).wait(1).to({ y: 500.9, alpha: 0.832 }, 0).wait(1).to({ y: 497.5, alpha: 0.875 }, 0).wait(1).to({ y: 494.9, alpha: 0.908 }, 0).wait(1).to({ y: 492.9, alpha: 0.933 }, 0).wait(1).to({ y: 491.3, alpha: 0.952 }, 0).wait(1).to({ y: 490.1, alpha: 0.967 }, 0).wait(1).to({ y: 489.2, alpha: 0.978 }, 0).wait(1).to({ y: 488.6, alpha: 0.987 }, 0).wait(1).to({ y: 488.1, alpha: 0.993 }, 0).wait(1).to({ y: 487.7, alpha: 0.997 }, 0).wait(1).to({ y: 487.6, alpha: 0.999 }, 0).wait(1).to({ y: 487.5, alpha: 1 }, 0).wait(89));

            // 1.20%
            this.instance_2 = new lib._120_1();
            this.instance_2.parent = this;
            this.instance_2.setTransform(528.5, 589.5, 1, 1, 0, 0, 0, 172.5, 109.5);
            this.instance_2.alpha = 0;
            this.instance_2._off = true;

            this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({ _off: false }, 0).wait(1).to({ y: 584.2, alpha: 0.067 }, 0).wait(1).to({ y: 576.1, alpha: 0.168 }, 0).wait(1).to({ y: 562.7, alpha: 0.335 }, 0).wait(1).to({ y: 545.9, alpha: 0.545 }, 0).wait(1).to({ y: 534.6, alpha: 0.686 }, 0).wait(1).to({ y: 527.6, alpha: 0.773 }, 0).wait(1).to({ y: 522.9, alpha: 0.832 }, 0).wait(1).to({ y: 519.5, alpha: 0.875 }, 0).wait(1).to({ y: 516.9, alpha: 0.908 }, 0).wait(1).to({ y: 514.9, alpha: 0.933 }, 0).wait(1).to({ y: 513.3, alpha: 0.952 }, 0).wait(1).to({ y: 512.1, alpha: 0.967 }, 0).wait(1).to({ y: 511.2, alpha: 0.978 }, 0).wait(1).to({ y: 510.6, alpha: 0.987 }, 0).wait(1).to({ y: 510.1, alpha: 0.993 }, 0).wait(1).to({ y: 509.7, alpha: 0.997 }, 0).wait(1).to({ y: 509.6, alpha: 0.999 }, 0).wait(1).to({ y: 509.5, alpha: 1 }, 0).wait(103));

            // 0.90%
            this.instance_3 = new lib._090_1();
            this.instance_3.parent = this;
            this.instance_3.setTransform(349, 621, 1, 1, 0, 0, 0, 150, 95);
            this.instance_3.alpha = 0;
            this.instance_3._off = true;

            this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33).to({ _off: false }, 0).wait(1).to({ y: 615.7, alpha: 0.067 }, 0).wait(1).to({ y: 607.6, alpha: 0.168 }, 0).wait(1).to({ y: 594.2, alpha: 0.335 }, 0).wait(1).to({ y: 577.4, alpha: 0.545 }, 0).wait(1).to({ y: 566.1, alpha: 0.686 }, 0).wait(1).to({ y: 559.1, alpha: 0.773 }, 0).wait(1).to({ y: 554.4, alpha: 0.832 }, 0).wait(1).to({ y: 551, alpha: 0.875 }, 0).wait(1).to({ y: 548.4, alpha: 0.908 }, 0).wait(1).to({ y: 546.4, alpha: 0.933 }, 0).wait(1).to({ y: 544.8, alpha: 0.952 }, 0).wait(1).to({ y: 543.6, alpha: 0.967 }, 0).wait(1).to({ y: 542.7, alpha: 0.978 }, 0).wait(1).to({ y: 542.1, alpha: 0.987 }, 0).wait(1).to({ y: 541.6, alpha: 0.993 }, 0).wait(1).to({ y: 541.2, alpha: 0.997 }, 0).wait(1).to({ y: 541.1, alpha: 0.999 }, 0).wait(1).to({ y: 541, alpha: 1 }, 0).wait(120));

            // 0.70%
            this.instance_4 = new lib._070_1();
            this.instance_4.parent = this;
            this.instance_4.setTransform(190, 646.5, 1, 1, 0, 0, 0, 124, 73.5);
            this.instance_4.alpha = 0;
            this.instance_4._off = true;

            this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({ _off: false }, 0).wait(1).to({ y: 641.2, alpha: 0.067 }, 0).wait(1).to({ y: 633.1, alpha: 0.168 }, 0).wait(1).to({ y: 619.7, alpha: 0.335 }, 0).wait(1).to({ y: 602.9, alpha: 0.545 }, 0).wait(1).to({ y: 591.6, alpha: 0.686 }, 0).wait(1).to({ y: 584.6, alpha: 0.773 }, 0).wait(1).to({ y: 579.9, alpha: 0.832 }, 0).wait(1).to({ y: 576.5, alpha: 0.875 }, 0).wait(1).to({ y: 573.9, alpha: 0.908 }, 0).wait(1).to({ y: 571.9, alpha: 0.933 }, 0).wait(1).to({ y: 570.3, alpha: 0.952 }, 0).wait(1).to({ y: 569.1, alpha: 0.967 }, 0).wait(1).to({ y: 568.2, alpha: 0.978 }, 0).wait(1).to({ y: 567.6, alpha: 0.987 }, 0).wait(1).to({ y: 567.1, alpha: 0.993 }, 0).wait(1).to({ y: 566.7, alpha: 0.997 }, 0).wait(1).to({ y: 566.6, alpha: 0.999 }, 0).wait(1).to({ y: 566.5, alpha: 1 }, 0).wait(135));

            // 旺春聯
            this.instance_5 = new lib.元件4("synched", 0, false);
            this.instance_5.parent = this;
            this.instance_5.setTransform(368.1, 245, 1, 1, 0, 0, 0, 352.1, 134);
            this.instance_5._off = true;

            this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72).to({ _off: false }, 0).wait(99));

            // 小金花
            this.instance_6 = new lib.元件3();
            this.instance_6.parent = this;
            this.instance_6.setTransform(720.5, 205.5, 1, 1, 0, 0, 0, 78.5, 46.5);
            this.instance_6.alpha = 0;
            this.instance_6._off = true;

            this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({ _off: false }, 0).wait(1).to({ regY: 41.5, y: 191.5, alpha: 0.1 }, 0).wait(1).to({ y: 174.5, alpha: 0.289 }, 0).wait(1).to({ y: 149, alpha: 0.572 }, 0).wait(1).to({ y: 134.1, alpha: 0.738 }, 0).wait(1).to({ y: 125.9, alpha: 0.828 }, 0).wait(1).to({ y: 120.7, alpha: 0.886 }, 0).wait(1).to({ y: 117.2, alpha: 0.926 }, 0).wait(1).to({ y: 114.7, alpha: 0.953 }, 0).wait(1).to({ y: 113, alpha: 0.973 }, 0).wait(1).to({ y: 111.8, alpha: 0.986 }, 0).wait(1).to({ y: 111, alpha: 0.994 }, 0).wait(1).to({ y: 110.6, alpha: 0.999 }, 0).wait(1).to({ regY: 46.5, y: 115.5, alpha: 1 }, 0).wait(144));

            // 小小金花
            this.instance_7 = new lib.元件1();
            this.instance_7.parent = this;
            this.instance_7.setTransform(59, 463, 1, 1, 0, 0, 0, 57, 34);
            this.instance_7.alpha = 0;
            this.instance_7._off = true;

            this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({ _off: false }, 0).wait(1).to({ regY: 36.5, y: 456.5, alpha: 0.1 }, 0).wait(1).to({ y: 439.5, alpha: 0.289 }, 0).wait(1).to({ y: 414, alpha: 0.572 }, 0).wait(1).to({ y: 399.1, alpha: 0.738 }, 0).wait(1).to({ y: 390.9, alpha: 0.828 }, 0).wait(1).to({ y: 385.7, alpha: 0.886 }, 0).wait(1).to({ y: 382.2, alpha: 0.926 }, 0).wait(1).to({ y: 379.7, alpha: 0.953 }, 0).wait(1).to({ y: 378, alpha: 0.973 }, 0).wait(1).to({ y: 376.8, alpha: 0.986 }, 0).wait(1).to({ y: 376, alpha: 0.994 }, 0).wait(1).to({ y: 375.6, alpha: 0.999 }, 0).wait(1).to({ regY: 34, y: 373, alpha: 1 }, 0).wait(150));

            // 大金花
            this.instance_8 = new lib.元件2();
            this.instance_8.parent = this;
            this.instance_8.setTransform(156, 559, 1, 1, 0, 0, 0, 103, 62);
            this.instance_8.alpha = 0;

            this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({ regY: 65, y: 553, alpha: 0.1 }, 0).wait(1).to({ y: 536, alpha: 0.289 }, 0).wait(1).to({ y: 510.5, alpha: 0.572 }, 0).wait(1).to({ y: 495.6, alpha: 0.738 }, 0).wait(1).to({ y: 487.4, alpha: 0.828 }, 0).wait(1).to({ y: 482.2, alpha: 0.886 }, 0).wait(1).to({ y: 478.7, alpha: 0.926 }, 0).wait(1).to({ y: 476.2, alpha: 0.953 }, 0).wait(1).to({ y: 474.5, alpha: 0.973 }, 0).wait(1).to({ y: 473.3, alpha: 0.986 }, 0).wait(1).to({ y: 472.5, alpha: 0.994 }, 0).wait(1).to({ y: 472.1, alpha: 0.999 }, 0).wait(1).to({ regY: 62, y: 469, alpha: 1 }, 0).wait(158));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(603, 817, 206, 124);
        // library properties:
        lib.properties = {
            width: 1100,
            height: 640,
            fps: 24,
            color: "#990000",
            opacity: 0.00,
            manifest: [
                { src: "images/kv_atlas_.png?1511862971495", id: "kv_atlas_" }
            ],
            preloads: []
        };




    })(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});


    if (!IsMobile()) {
        var controller = $.superscrollorama();
        var scrollDuration = 100;

        //controller.addTween('#tab00 ', TweenMax.from($('#tab00 '), .5, { css: { opacity: 0 }, ease: Quad.easeInOut }), scrollDuration);
        controller.addTween('.tabL', TweenMax.from($('.tabL'), .7, { css: { opacity: 0, marginRight: '100px' }, ease: Quad.easeInOut }), scrollDuration);
        controller.addTween('.tabR', TweenMax.from($('.tabR'), .5, { css: { opacity: 0, marginRight: '-10%' }, ease: Quad.easeInOut }), scrollDuration);
        controller.addTween('.men', TweenMax.from($('.men'), .5, { css: { opacity: 0, marginRight: '1000px', rotation: 0 }, ease: Quad.easeInOut }), scrollDuration);
        //controller.addTween('.mon1', TweenMax.from( $('.mon1'), .7, {css:{opacity:0,rotation: 720},delay:2, ease:Quad.easeInOut}), scrollDuration);
        //controller.addTween('.mon2', TweenMax.from( $('.mon2'), .5, {css:{opacity:0,rotation: 720},delay:3, ease:Quad.easeInOut}), scrollDuration);
        controller.addTween('#pk', TweenMax.from($('#pk'), .5, { css: { opacity: 0 }, ease: Quad.easeInOut }), scrollDuration);
        controller.addTween('#pa0300', TweenMax.from($('#pa0300'), .5, { css: { opacity: 0, scale: 0 }, ease: Quad.easeInOut }), scrollDuration);


        controller.addTween('#tbox1,#tbox2', TweenMax.from($('#tbox1,#tbox2'), .5, { css: { opacity: 0, scale: 0 }, ease: Quad.easeInOut }), scrollDuration);
        $('ul.tabshow li').css('position', 'relative').each(function () {
            controller.addTween('ul.tabshow li', TweenMax.from($(this), 1, { delay: Math.random() * .2, css: { left: Math.random() * 200 - 100, top: Math.random() * 200 - 100, opacity: 0 }, ease: Back.easeOut }));
        });
    }

})
var lib, images, createjs, ss, AdobeAn;