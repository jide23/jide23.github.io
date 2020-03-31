var person = [{
    name: 'Adobe软件插件',
    motto: '提供adobe下所有软件提供的插件下载，辅助你的设计',
    href: 'https://www.adobeexchange.com/creativecloud.html#!&search%3Fpp=PHSP&q=geogle',
    src: 'img/adobeexchange.com.png',
    sorts: 'other'
}, {
    name: 'ZXP',
    motto: '一个开源的Adobe扩展安装程序',
    href: 'https://zxpinstaller.com/',
    src: 'img/zxpinstaller.com.png',
    sorts: 'xiazai'
}, {
    name: 'PsPlay',
    motto: 'PsPlay-移动设计零阻力-腾讯ISUX',
    href: 'https://isux.tencent.com/resources/psplay/',
    src: 'img/isux.tencent.com.png',
    sorts: 'xiazai'
}, {
    name: 'OfficeToolPlus',
    motto: '一个用于自定义安装、激活、管理Office的小工具，免费，小巧，无广告，无捆绑',
    href: 'http://office.bcoder.cn/',
    src: 'img/office.bcoder.cn.png',
    sorts: 'xiazai'
}, {
    name: '不知语冰',
    motto: '一个创作者的个人主页，而他写下的软件好多个设计辅助软件如fonTags，其他桌面软件如：高级文本编辑器、图片剪切增强工具、图片压缩、图片隐写、PS启动器修改、隐藏用户写入、伪装锁屏。。。',
    href: 'http://nullice.com/',
    src: 'img/nullice.com.png',
    sorts: 'xiazai'
}, {
    name: 'DesignCamera样机神器',
    motto: 'DesignCamera是一款效率超高的UI样机神器，可以让你在几秒钟内快速创建3D模型和演示动画。只需将作品拖入DesignCamera窗口，再进行一些简单的设置，就可以导出使用了，目前支持PNG、JPG、avi、mov和mp4文件。',
    href: 'https://rotato.xyz/',
    src: 'img/rotato.xyz.png',
    sorts: 'xiazai'
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