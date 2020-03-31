var person = [{ name: 'Adobe Stock', motto: 'Adobe旗下创意平台，具备大量优质的笔刷内容，除此以外还拥有精美的图片与3D模型素材。', href: 'https://stock.adobe.com/', src: 'img/stock.adobe.com.png', sorts: 'brush' },
    { name: 'brusheezy', motto: '是互联网上大量笔刷的一个索引往网站，里面有着大量的不同类型笔刷可以选择。', href: 'https://www.brusheezy.com/', src: 'img/brusheezy.com.png', sorts: 'brush' },
    { name: 'psbrushes', motto: '该网站目前拥有500多套优质笔刷。其中有不少笔刷能够快速绘制出特定物品，方便制作素材。', href: 'http://psbrushes.net', src: 'img/psbrushes.net.png', sorts: 'brush' },
    { name: 'myphotoshopbrushes', motto: '该网站收录了大量的笔刷，浏览笔刷时可以通过选择评分或者下载次数进行筛选。', href: 'https://myphotoshopbrushes.com/', src: 'img/myphotoshopbrushes.com.png', sorts: 'brush' },
    { name: 'qbrushes', motto: '该站点可以帮助用户快速查找所需的笔刷，可以通过笔刷类型、标签等方式进行浏览。', href: 'https://qbrushes.net/', src: 'img/qbrushes.net.png', sorts: 'brush' },
    { name: 'brushking', motto: '搜索笔刷时，可以通过主题类型进行筛选，并且鼠标移至缩略图时会显示笔刷的使用许可以及其他信息。', href: 'https://www.brushking.eu/', src: 'img/brushking.eu.png', sorts: 'brush' },
    { name: 'wowbrushes', motto: '有着各式各样的高质量笔刷，能够免费下载，并且可以适用于个人和商业的项目上。', href: 'http://wowbrushes.com/', src: 'img/wowbrushes.com.png', sorts: 'brush' },
    { name: 'brushlovers', motto: '笔刷收集量庞大，并且极为细致的标签，分类网站还对笔刷质量进行评级、分类。', href: 'https://www.brushlovers.com/', src: 'img/brushlovers.com.png', sorts: 'brush' },
]
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