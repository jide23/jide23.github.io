var person = [{
    name: 'Android设计',
    motto: '安卓官方设计指南',
    href: 'https://developer.android.com/design/index.html',
    src: 'img/developer.android.com.png',
    sorts: 'app'
}, {
    name: '安卓尺寸',
    motto: 'Google安卓主流设备尺寸',
    href: 'https://material.io/devices/',
    src: 'img/material.io.png',
    sorts: 'app'
}, {
    name: 'Apple设计',
    motto: '苹果官方设计指南',
    href: 'https://developer.apple.com/design/',
    src: 'img/developer.apple.com.png',
    sorts: 'app'
}, {
    name: 'Screensiz',
    motto: '移动屏幕尺寸规范',
    href: 'http://screensiz.es/phone',
    src: 'img/screensiz.es.png',
    sorts: 'app'
}, {
    name: 'Google设计',
    motto: '谷歌官方设计指南',
    href: 'https://design.google.com/',
    src: 'img/design.google.com.png',
    sorts: 'app'
}, {
    name: 'Material设计',
    motto: 'MaterialDesign设计官方指南',
    href: 'https://material.io/',
    src: 'img/material.io.png',
    sorts: 'app'
}, {
    name: 'Modern设计',
    motto: '微软Modern官方设计语言',
    href: 'https://www.microsoft.com/en-us/design',
    src: 'img/microsoft.com.png',
    sorts: 'app'
}, {
    name: 'Android设计·中国',
    motto: '安卓官方设计指南中国版·不用翻墙',
    href: 'https://developer.android.google.cn/design/index.html',
    src: 'img/developer.android.google.cn.png',
    sorts: 'app'
}, {
    name: 'WEUI',
    motto: '微信官方小程序UI样式库',
    href: 'https://weui.io/',
    src: 'img/weui.io.png',
    sorts: 'app'
}, {
    name: 'iPhone尺寸',
    motto: 'iPhone各设备屏幕尺寸信息参数',
    href: 'https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions',
    src: 'img/paintcodeapp.com.png',
    sorts: 'app'
}, {
    name: 'FluentDesign',
    motto: 'Window10全新设计语言',
    href: 'https://www.microsoft.com/design/fluent/',
    src: 'img/microsoft.com.png',
    sorts: 'app'
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