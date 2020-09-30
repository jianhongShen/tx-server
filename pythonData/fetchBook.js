//抓取豆瓣读书中的数据信息
const axios = require("axios").default
const cheerio = require("cheerio")
/*
 * 获取到该请求的所有信息
 */
async function getDouBanBookHTML(url){
    const resp = await axios.get(url)
    return resp.data
}

/*
 * 从豆瓣读书中得到书籍信息继而得到一个书记的详情页链接数组
 */
async function getDouBanBookDetailLinks(){
    const html = await getDouBanBookHTML("https://book.douban.com/latest")
    const $ = cheerio.load(html);
    const aEles = $('#content .grid-12-12 li a.cover');
    const links = aEles
    .map((i,ele)=>{
        const href = ele.attribs["href"]
        return href
    })
    .get();
    return links
}

/*
 * 根据地址得到一本书的详情信息
 */
async function getOneBooDetail(detailUrl){
    const resp = await axios.get(detailUrl)
    const $ = cheerio.load(resp.data);
    const name = $('h1').text().trim();
    const imgUrl = $('#mainpic .nbg img').attr("src");
    
    const authorSpan = $("#info span.pl").filter((i,ele)=>{
        return $(ele).text().includes("作者")
    });
    const author = authorSpan.next("a").text();

    const publishSpan = $("#info span.pl").filter((i,ele)=>{
        return $(ele).text().includes("出版年")
    });
    const publishDate = publishSpan[0].nextSibling.nodeValue.trim();
    return{
        name,
        imgUrl,
        author,
        publishDate
    }
}

/*
 * 从获取到的链接当中分析出一个我们想要的数据
 */
async function getAllDouBanBookInfo(){
    const links = await getDouBanBookDetailLinks()
    const proms = links.map(link=>{
        return getOneBooDetail(link)
    })
    return Promise.all(proms)
}

exports.getDouBanBooks = getAllDouBanBookInfo

