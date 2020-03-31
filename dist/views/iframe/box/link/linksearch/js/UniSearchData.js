var UniSearch = {
    langCode: "",
    searchUrl: "",
    data: {},
    defaults: {},
    Theme: "google2011"
};
UniSearch.defaults.preferredList = {};
UniSearch.defaults.preferredList["zh-cn"] = {
    prefer: 1,
    web: "baidu",
    video: "youku",
    VIP: "V6",
    shopping: "tmall",
    xueshu: "bdxs",
    linggan: "zcool"
};
UniSearch.defaults.preferredConList = {};
UniSearch.defaults.preferredConList["zh-cn"] = [{
        c: "web",
        n: "baidu"
    },
    {
        c: "img",
        n: "unsplash"
    },
    {
        c: "shopping",
        n: "tmall"
    }
];
UniSearch.defaults.firstShow = {};
UniSearch.defaults.firstShow["zh-cn"] = {
    title: "prefer",
    item: 1
};
UniSearch.defaults.order = {};
UniSearch.defaults.order["zh-cn"] = ["prefer", "web", "video", "VIP", "shopping", "xueshu", "linggan"];
UniSearch.data["zh-cn"] = {};
UniSearch.data["zh-cn"]["more"] = {};
UniSearch.data["zh-cn"]["set"] = {
    title: "[语言选择]"
};
UniSearch.data["zh-cn"]["prefer"] = {
    title: "首选",
    items: [
        {
            c: "web",
            n: "baidu"
        },
        {
            c: "shopping",
            n: "tmall"
        }
    ]
};
UniSearch.data["zh-cn"]["web"] = {
    title: "网页",
    items: {
        baidu: {
            title: "百度",
            url: "http://www.baidu.com/s?&ch=2&ie=utf-8&wd="
        },
        so: {
            title: "360搜索",
            url: "https://www.haosou.com/s?q="
        },
        live: {
            title: "Bing",
            url: "http://cn.bing.com/search?form=QBLH&filt=all&q="
        },
        soso: {
            title: "搜狗",
            url: "http://www.sogou.com/web?query="
        },
        wiki: {
            title: "维基[EN]",
            url: "https://en.wikipedia.org/wiki/"
        },
        doge: {
            title: "多吉",
            url: "https://www.dogedoge.com/results?q="
        }
        // google: {
        //     title: "Google",
        //     url: "https://www.google.com.hk/search?safe=strict&source=hp&ei=0X8xXp7jHsWTr7wPstC_sA8&q="
        // }
    }
};
UniSearch.data["zh-cn"]["video"] = {
    title: "视频",
    items: {
        le: { title: "乐视", url: "http://so.le.com/s?wd=" },
        iqiyi: { title: "爱奇艺", url: "http://so.iqiyi.com/so/q_" },
        mgtv: { title: "芒果", url: "https://so.mgtv.com/so/k-" },
        tudou: { title: "土豆", url: "https://www.soku.com/nt/search/q_" },
        qq: { title: "腾讯", url: "https://v.qq.com/x/search/?q=" },
        sohu: { title: "搜狐", url: "https://so.tv.sohu.com/mts?box=1&wd=" },
        youku: { title: "优酷", url: "https://so.youku.com/search_video/q_" },
        bilibili: { title: "哔哩哔哩", url: "https://search.bilibili.com/all?keyword=" },
        pptv: { title: "PPTV", url: "http://sou.pptv.com/s_video?kw=" }
    }
};
UniSearch.data["zh-cn"]["VIP"] = {
    title: "视频解析",
    items: {
        V1: { title: "V1", url: "https://tv.08bk.com/?url= " },
        V2: { title: "V2", url: "http://jx.618ge.com/?url=" },
        V3: { title: "V3", url: "http://jx.598110.com/?url=" },
        V4: { title: "V4", url: "http://www.82190555.com/index/qqvod.php?url=" },
        V5: { title: "V5", url: "http://jiexi.071811.cc/jx2.php?url=" },
        V6: { title: "V6", url: "http://17kyun.com/api.php?url=" },
        V7: { title: "V7", url: "http://www.85105052.com/admin.php?url=" },
        V8: { title: "V8", url: "http://api.bbbbbb.me/jx/?url=" },
        V9: { title: "V9", url: "https://z1.m1907.cn/?a=1&jx=" },
        V10: { title: "V10", url: "http://jx.drgxj.com/?url=" }
    }
};
UniSearch.data["zh-cn"]["shopping"] = {
    title: "购物",
    items: {
        tmall: {
            title: "天猫",
            subtitle: "",
            url: "https://list.tmall.com/search_product.htm?q="
        },
        jd: {
            title: "京东商城",
            subtitle: "",
            url: "https://search.jd.com/Search?keyword={keyword}&enc=utf-8&wq="
        },
        vip: {
            title: "唯品会",
            subtitle: "",
            url: "http://category.vip.com/suggest.php?keyword="
        },
        suning: {
            title: "苏宁",
            subtitle: "易购",
            url: "https://search.suning.com/"
        },
        gome: {
            title: "国美",
            subtitle: "商城",
            url: "https://search.gome.com.cn/search?question="
        },
        dangdang: {
            title: "当当",
            subtitle: "商城",
            url: "http://search.dangdang.com/?key="
        },
        jumei: {
            title: "聚美",
            subtitle: "优品",
            url: "http://search.jumei.com/?filter=0-11-1&search="
        },
        // amazon: { 
        //     title: "amazon",
        //     url: "https://www.amazon.cn/s?k="
        // },
        // ebay: { 
        //     title: "ebay",
        //     url: "https://www.ebay.com/sch/i.html?_nkw="
        // },
        kaola: { 
            title: "考拉",
            url: "https://search.kaola.com/search.html?key="
        },
        smzdm: { 
            title: "什么值得买",
            url: "https://search.smzdm.com/?c=home&s="
        }
    }
};

UniSearch.data["zh-cn"]["xueshu"] = {
    title: "学术",
    items: {
        bdxs: {
            title: "百度学术",
            url: "http://xueshu.baidu.com/s?wd="
        },
        ggxs: {
            title: "谷歌学术",
            url: "https://c3.glgoo.top/scholar?hl=zh-CN&as_sdt=0%2C5&q="
        },
        xsqs: {
            title: "学术趋势",
            url: "http://trend.cnki.net/TrendSearch/trendshow.htm?searchword="
        },
        syzx: {
            title: "术语在线",
            url: "http://www.termonline.cn/list.htm?k="
        },
        weipu: {
            title: "维普",
            url: "http://www.cqvip.com/main/search.aspx?k="
        },
        nki: {
            title: "NKI",
            url: "http://scholar.cnki.net/result.aspx?q="
        },
        zhiwang: {
            title: "知网",
            url: "http://kns.cnki.net/kns/brief/Default_Result.aspx?code=SCDB&kw="
        },
        wanfang: {
            title: "万方",
            url: "http://www.wanfangdata.com.cn/search/searchList.do?searchType=all&showType=&pageSize=&searchWord="
        },
        tushuguan: {
            title: "世界数字图书馆",
            url: "http://mx.wdl.org/zh/search/?q="
        }
    }
};
UniSearch.data["zh-cn"]["linggan"] = {
    title: "灵感",
    items: {
        // behance: {
        //     title: "Behance",
        //     url: "https://www.behance.net/search?content=projects&sort=comments&time=week&search="
        // },
        // dribbble: {
        //     title: "Dribbble",
        //     url: "https://dribbble.com/search/"
        // },
        // uicn: {
        //     title: "Ui中国",
        //     url: "https://s.ui.cn/index.html?t=ds&type=project&other_w="
        // },
        zcool: {
            title: "站酷",
            url: "https://www.zcool.com.cn/search/content?&word="
        },
        shijueme: {
            title: "视觉中国",
            url: "http://shijue.me/community/search?search=works&key="
        },
        huaban: {
            title: "花瓣",
            url: "http://huaban.com/search/?q="
        },
        taolinggan: {
            title: "淘靈感",
            url: "https://www.mydesy.com/?s="
        },
        shejibang: {
            title: "设计帮",
            url: "http://www.designboom.cn/news/search.php?kw="
        },
        topys: {
            title: "TOPYS",
            url: "https://www.topys.cn/search?k="
        },
        logonews: {
            title: "标志情报局",
            url: "https://www.logonews.cn/?s="
        },
        renren: {
            title: "人人小站",
            url: "http://zhan.renren.com/tag?value="
        },
        shejibang: {
            title: "工业设计在线",
            url: "http://www.dolcn.com/?s=手机&submit="
        },
        puxiang: {
            title: "普象",
            url: "https://www.pushthink.com/search?site=pushthink&key="
        },
        zuisheji: {
            title: "最设计",
            url: "http://ad518.com/search/key-"
        }
    }
};
// https://search.tianya.cn/bbs?q=
// https://www.jianshu.com/search?q=
// https://s.weibo.com/weibo/
// https://www.douban.com/search?q=
// http://tieba.baidu.com/f?kw=