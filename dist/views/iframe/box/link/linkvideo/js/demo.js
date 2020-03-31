var person = [{
    name: 'Pexels',
    motto: 'Pexels是集大成的素材站，无版权的图片和视频它都有，还集成了别的站点的资源，种类和数量都很可观。Pexels上的视频均为HD高清格式，无需注册即可直接下载，鼠标悬停可预览，点击进入视频页面还能看到相似视频的推荐。',
    href: 'https://www.pexels.com/videos/',
    src: 'img/pexels.com.png',
    sorts: 'wangye'
}, {
    name: 'Pixabay',
    motto: '也是一个老牌的素材站了，事实上Pexels上的很多资源都来自于Pixabay。Pixabay为每一位作者都提供了个人主页，使用者可以关注、点赞以及给作者打钱买咖啡。除了视频，Pixabay也提供数量众多的矢量图、插画、照片等无版权素材，均可免注册直接下载。',
    href: 'https://pixabay.com/videos/',
    src: 'img/pixabay.com.png',
    sorts: 'wangye'
}, {
    name: 'Coverr',
    motto: 'Coverr网站就是纯粹为我们提供免费视频下载的站点，网站为我们做了详细的视频分类，每周一会更新7个视频。如果你喜欢某个视频的话，可以直接点击播放按钮进行视频预览，预览后再决定是否下载。Coverr同时也是支持拥护上传的，如果你有不错的视频素材也可以分享给大家使用哦。',
    href: 'https://coverr.co/',
    src: 'img/coverr.co.png',
    sorts: 'wangye'
}, {
    name: 'Videezy',
    motto: 'Videezy网站同样也是一个纯粹的视频提供站点，我们可以进行关键字搜索，按照时间顺序查看，按照分类查询等等，目前只支持英文。Videezy网站将素材分为了免费和付费素材，免费素材可供我们免费个人使用或者商用。要想获取素材的更多权限就要选择付费素材了，这个的话大家自行选择。',
    href: 'https://www.videezy.com/',
    src: 'img/videezy.com.png',
    sorts: 'wangye'
}, {
    name: 'LifeofVids',
    motto: 'LifeofVids（无版权视频网站）。它们都隶属于加拿大的LEEROY创意工作室，LifeofVids上的所有视频也都是由该工作室拍摄并上传的。也许是由于工作室的偏好原因，相比起别家的唯美视频，这个网站上有不少偏生活化的视频场景，比如港口作业、大型机械工作等。',
    href: 'https://lifeofvids.com/',
    src: 'img/lifeofvids.com.png',
    sorts: 'wangye'
}, {
    name: 'IgniteMotion',
    motto: '网站有很多关于太空类的视频！看到你喜欢的东西？只需单击视频下载链接，即可开始下载视频项目！',
    href: 'https://www.ignitemotion.com/',
    src: 'img/ignitemotion.com.png',
    sorts: 'wangye'
}, {
    name: 'CuteStockFootage',
    motto: '除了免费视频，CuteStockFootage还在其菜单的"免费资源"选项卡下提供各种其他好东西-如照片，音频剪辑，字体和纹理。',
    href: 'https://www.cutestockfootage.com/',
    src: 'img/cutestockfootage.com.png',
    sorts: 'wangye'
}, {
    name: 'Mazwai',
    motto: 'Mazwai是一个新兴的视频站，他们会挑选最优秀的免费视频发布出来。网站旨在帮助设计师、艺术家和创意工作者获取高品质的视频资源，帮助他们设计出更优秀的产品或者作品。不过，网站上所有视频是依据CC3.0协议的，也就是说，您在使用的时候需要署名原作者。',
    href: 'http://mazwai.com/#/grid',
    src: 'img/mazwai.com.png',
    sorts: 'wangye'
}, {
    name: 'Vidlery',
    motto: 'Vidlery则是一个专注动画视频的网站。视频风格多样，不过大部分画风较为简单，数量也十分有限，比较推荐用作主页背景。它还非常贴心地提供了将其动画视频放到自己网站上的教程。',
    href: 'http://vidlery.com/',
    src: 'img/vidlery.com.png',
    sorts: 'wangye'
}, {
    name: 'Distill',
    motto: 'Distill是一个专门提供创意短视频的网站平台，其高清视频也都能免费下载、用于个人或商业项目。',
    href: 'http://www.wedistill.io',
    src: 'img/wedistill.io.png',
    sorts: 'wangye'
}, ]
var inp = document.getElementsByClassName('inp')[0],
    btnList = document.getElementsByClassName('btn-list')[0],
    prompt = document.getElementsByClassName('prompt')[0],
    user = document.getElementsByClassName('user')[0];

function createList(list) {
    var str = '';
    list.forEach(function(ele, index) {
        str += '<a href =' + ele.href + ' target="_self">\
                    <li>\
                    <div class="head-img">\
                    <img src=' + ele.src + ' alt="">\
                    </div>\
                    <div class="tit">\
                    <p class="name">' + ele.name + '</p>\
                    <p class="motto">' + ele.motto + '</p>\
                    </div>\
                    </li>\
                </a>'
    })
    user.innerHTML = str
}
createList(person);
var state = createStore({
    text: '',
    sorts: 'all'
})
state.addFn(function() {
    createList(perArr());
    anti(show());
})
inp.oninput = anti(getInput, 1000)

function getInput() {
    state.change({
        type: 'text',
        value: this.value
    });
}

function anti(hander, delay) {
    var timer = null;
    return function() {
        var _self = this,
            args = arguments;
        clearTimeout(timer)
        timer = setTimeout(function() {
            hander.apply(_self, args)
        }, delay)
    }
}

function show() {
    if (user.children.length == 0) {
        prompt.style.display = 'block'
    } else {
        prompt.style.display = 'none'
    }
}

function addFn(obj, arr) {
    return function() {
        var lastArr = arr;
        for (prop in obj) {
            lastArr = obj[prop](state.getState()[prop], lastArr)
        }
        return lastArr
    }
}
var perArr = addFn({
    text: filterText,
    sorts: filtersorts
}, person)
btnList.onclick = function(e) {
    var tar = e.target;
    if (tar.tagName == 'OPTION') {
        document.getElementsByClassName('active')[0].className = '';
        tar.className = 'active';
        state.change({
            type: 'sorts',
            value: tar.getAttribute('sorts')
        })
    }
}

function filterText(text, arr) {
    return arr.filter(function(ele, index) {
        if (ele.name.indexOf(text) != -1 || ele.motto.indexOf(text) != -1) {
            return true
        }
    })
}

function filtersorts(sorts, arr) {
    if (sorts == 'all') {
        return arr
    } else {
        return arr.filter(function(ele, index) {
            if (ele.sorts == sorts) {
                return true
            }
        })
    }
}