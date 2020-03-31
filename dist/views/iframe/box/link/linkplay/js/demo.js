var person = [{
    name: 'Pixact',
    motto: '测试你对像素宽度的识别能力',
    href: 'http://pixact.ly',
    src: 'img/pixact.ly.png',
    sorts: 'play'
}, {
    name: '设计之眼',
    motto: '来看看你有没有设计之眼吧~',
    href: 'https://www.supremo.co.uk/designers-eye/',
    src: 'img/supremo.co.uk.png',
    sorts: 'play'
}, {
    name: 'bezier',
    motto: '用贝塞尔曲线绘图，提高钢笔工具的运用',
    href: 'https://bezier.method.ac/',
    src: 'img/bezier.method.ac.png',
    sorts: 'play'
}, {
    name: 'RGBchallenge',
    motto: '测试你对RGB值的了解',
    href: 'http://www.rgbchallenge.com',
    src: 'img/rgbchallenge.com.png',
    sorts: 'play'
}, {
    name: 'helvarialquiz',
    motto: '分辨Arial和Helvetica字体',
    href: 'http://www.ironicsans.com/helvarialquiz',
    src: 'img/ironicsans.com.png',
    sorts: 'play'
}, {
    name: 'Color',
    motto: '匹配色轮的颜色',
    href: 'http://color.method.ac',
    src: 'img/color.method.ac.png',
    sorts: 'play'
}, {
    name: 'Type',
    motto: '字体排版练习',
    href: 'http://type.method.ac',
    src: 'img/type.method.ac.png',
    sorts: 'play'
}, {
    name: 'Shape',
    motto: '钢笔工具使用练习',
    href: 'http://shape.method.ac',
    src: 'img/shape.method.ac.png',
    sorts: 'play'
}, {
    name: 'RealorPhotoshop',
    motto: '分辨图像是真是假',
    href: 'http://landing.adobe.com/en/na/products/creative-cloud/69308-real-or-photoshop',
    src: 'img/landing.adobe.com.png',
    sorts: 'play'
}, {
    name: 'dedesigntheweb',
    motto: '通过原型图来分辨是哪个网站',
    href: 'http://dedesigntheweb.com',
    src: 'img/dedesigntheweb.com.png',
    sorts: 'play'
}, {
    name: 'colorrun',
    motto: '点击亮度高的颜色',
    href: 'http://colorrun.pl',
    src: 'img/colorrun.pl.png',
    sorts: 'play'
}, {
    name: 'TheColor',
    motto: '看你有多色',
    href: 'http://game.ioxapp.com/color',
    src: 'img/game.ioxapp.com.png',
    sorts: 'play'
}, {
    name: 'CSSDiner',
    motto: 'CSS午餐，简单易懂的CSS选择器在线学习游戏',
    href: 'http://flukeout.github.io',
    src: 'img/flukeout.github.io.png',
    sorts: 'play'
}, {
    name: 'FlexboxDefense',
    motto: '边玩塔防游戏边学习CSSFlexbox属性',
    href: 'http://www.flexboxdefense.com',
    src: 'img/flexboxdefense.com.png',
    sorts: 'play'
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