var person = [{
    name: '书法字体',
    motto: '在线书法字体转换_毛笔书法字体生成_矢量书法字典在线查询',
    href: 'http://www.shufaziti.com/',
    src: 'img/shufaziti.com.png',
    sorts: 'fonts'
}, {
    name: '字体网站|Fonts',
    motto: '我们的Web字体库提供了一系列样式，可以涵盖您网站的任何项目。看看我们的新websafe字体保持在趋势的顶端',
    href: 'https://www.fonts.com/web-fonts',
    src: 'img/fonts.com.png',
    sorts: 'fonts'
}, {
    name: '说文解字',
    motto: '說文解字，在線查詢，篆書字典，說文解字注，在線查詢',
    href: 'http://www.shuowen.org/',
    src: 'img/shuowen.org.png',
    sorts: 'fonts'
}, {
    name: '求字体',
    motto: '字体下载-求字体网提供中文和英文字体库下载、识别与预览服务，找字体的好帮手',
    href: 'http://www.qiuziti.com/',
    src: 'img/qiuziti.com.png',
    sorts: 'fonts'
}, {
    name: 'Googlefonts',
    motto: 'Google字体是一个非常好的开源项目，它不但提供了丰富的字体，更提供了方便快捷的使用方式',
    href: 'http://www.googlefonts.cn',
    src: 'img/googlefonts.cn.png',
    sorts: 'fonts'
}, {
    name: 'FontsinUse',
    motto: '在线字体效果展示',
    href: 'https://fontsinuse.com/',
    src: 'img/fontsinuse.com.png',
    sorts: 'fonts'
}, {
    name: 'Fontsup',
    motto: '免费英文字体下载库',
    href: 'https://fontsup.com/',
    src: 'img/fontsup.com.png',
    sorts: 'fonts'
}, {
    name: 'Fonts2u',
    motto: '详细分类免费字体搜索下载库',
    href: 'http://zh.fonts2u.com/',
    src: 'img/zh.fonts2u.com.png',
    sorts: 'fonts'
}, {
    name: 'Urbanfonts',
    motto: '免费英文字体搜索下载站',
    href: 'https://www.urbanfonts.com/',
    src: 'img/urbanfonts.com.png',
    sorts: 'fonts'
}, {
    name: 'myfonts',
    motto: '最新时尚的商业英文字体',
    href: 'http://www.myfonts.com/',
    src: 'img/myfonts.com.png',
    sorts: 'fonts'
}, {
    name: '苹方字体',
    motto: '苹果最新的系统界面字体SanFrancisco',
    href: 'https://developer.apple.com/fonts/',
    src: 'img/developer.apple.com.png',
    sorts: 'fonts'
}, {
    name: 'Comicneue',
    motto: '免费手写可爱字体官网下载',
    href: 'http://comicneue.com/',
    src: 'img/comicneue.com.png',
    sorts: 'fonts'
}, {
    name: 'Typekit',
    motto: 'Adobe出品的web在线字库',
    href: 'https://typekit.com/',
    src: 'img/typekit.com.png',
    sorts: 'fonts'
}, {
    name: '思源宋体',
    motto: 'Adobe、Google出品的开源中文宋体',
    href: 'https://source.typekit.com/source-han-serif/',
    src: 'img/source.typekit.com.png',
    sorts: 'fonts'
}, {
    name: '360查字体',
    motto: '查版权，免纠纷',
    href: 'https://fonts.safe.360.cn/',
    src: 'img/fonts.safe.360.cn.png',
    sorts: 'fonts'
}, {
    name: 'UrbanFonts',
    motto: '字体资源搜索与下载。',
    href: 'http://www.urbanfonts.com',
    src: 'img/urbanfonts.com.png',
    sorts: 'fonts'
}, {
    name: 'DaFont',
    motto: '字体资源搜索与下载。',
    href: 'http://www.dafont.com',
    src: 'img/dafont.com.png',
    sorts: 'fonts'
}, {
    name: 'FontM',
    motto: '字体资源搜索与下载。',
    href: 'http://fontm.com',
    src: 'img/fontm.com.png',
    sorts: 'fonts'
}, {
    name: 'fontsquirrel',
    motto: '字体松鼠，可商用的免费字体',
    href: 'http://www.fontsquirrel.com',
    src: 'img/fontsquirrel.com.png',
    sorts: 'wangye'
}, {
    name: 'FontFabric',
    motto: '提供漂亮的免费字体下载',
    href: 'http://fontfabric.com',
    src: 'img/fontfabric.com.png',
    sorts: 'wangye'
}, {
    name: 'LostType',
    motto: '非常多漂亮的英文字体，带banner展示',
    href: 'http://www.losttype.com/browse',
    src: 'img/losttype.com.png',
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