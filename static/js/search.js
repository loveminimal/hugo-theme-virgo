let siteParams = parseSiteParams();

let data = document.querySelector('#data').innerText.trim();
data = data.slice(0, data.length - 2) + ']';
let map = JSON.parse(data);

let scClear = document.querySelector('#sc-clear');
let scInput = document.querySelector('#sc-input');
let scRes = document.querySelector('#sc-res')
let scVal = '';

// 自动聚集搜索框
scInput.focus();
scClear.style = 'opacity: 0;'


function search() {
    let post = '';
    scVal = scInput.value.trim().toLowerCase();
    // console.log(scVal);
    // if (scVal.length === 1) return;
    let scResPostsCounts = 0, // 搜索结果所在页面数
        scResScValCounts = 0; // 搜索词出现的总次数

        
    map.forEach(item => {
        if (!scVal) return;
        if (item.content.indexOf(scVal) > -1 || item.title.indexOf(scVal) > -1) {
            let _arrIndex = scanStr(item.content, scVal);
            let strRes = '';
            let _radius = 100;  // 搜索字符前后截取的长度
            let _strStyle0 = '<span style="background: yellow;">'
            let _strStyle1 = '</span>'
            let _strSeparator = '<hr>'
            
            scResPostsCounts += 1;
            scResScValCounts += _arrIndex.length;

            // 统计与首个与其前邻的索引（不妨称为基准索引）差值小于截取半径的索引位小于截取半径的索引的个数
            // 如果差值小于半径，则表示当前索引内容已包括在概要范围内，则不重复截取，且
            // 下次比较的索引应继续与基准索引比较，直到大于截取半径， _count重新置 为 0；
            let _count = 0;

            for (let i = 0, len = _arrIndex.length; i < len; i++) {
                let _idxItem = _arrIndex[i];
                let _relidx = i;


                // 如果相邻搜索词出现的距离小于截取半径，那么忽略后一个出现位置的内容截取（因为已经包含在内了）
                if (_relidx > 0 && (_arrIndex[_relidx] - _arrIndex[_relidx - 1 - _count] < _radius)) {
                    _count += 1;
                    continue;
                }
                _count = 0;

                // 概要显示
                // _startIdx, _endIdx 会在超限时自动归限（默认，无需处理）
                strRes += _strSeparator;
                let _startIdx = _idxItem - _radius + (_relidx + 1) * _strSeparator.length;
                let _endIdx = _idxItem + _radius + (_relidx + 1) * _strSeparator.length;
                strRes +=  item.content.substring(_startIdx, _endIdx);
            }

            // 进一步对搜索摘要进行处理，高亮搜索词
            let _arrStrRes = scanStr(strRes, scVal);
            // console.log(_arrStrRes)
            for (let i = 0, len = _arrStrRes.length; i < len; i++) {
                let _idxItem = _arrStrRes[i];
                let _realidx = i;

                strRes =
                    strRes.slice(0, (_idxItem + _realidx * (_strStyle0.length + _strStyle1.length))) + // 当前索引位置之前的部分
                    _strStyle0 + scVal + _strStyle1 +
                    strRes.slice(_idxItem + scVal.length + _realidx * (_strStyle0.length + _strStyle1.length)); // 之后的部分
            }

            post += `
                <div class="item" >
                    <a href="${item.permalink}">
                        <span>📄</span>
                        <span class="date">${item.date}</span>
                        <span>${item.title}</span>
                    </a>
                    <div class="summary">${strRes}</div>
                </div>
            `
            // <div>${item.summary}</div>
        }
    })

    let _total = siteParams.en ? 'Total' : '条目',
        _times = siteParams.en ? 'Times' : '次数';
    let res = `
        <div class="statistics">${_total}： ${scResPostsCounts} &nbsp;&nbsp;${_times}： ${scResScValCounts}</div>
        <div class="list ${siteParams.isSingleColumnOfPostList ? 'list-single-col' : ''}">
            ${post}
        </div>
    `;
    scRes.innerHTML = res;

    // Hmm... 强迫症，为 0 的时候，不想统计条目显示
    if (scResPostsCounts == 0) {
        document.querySelector('.statistics').style = 'opacity: 0;'
    } 
    // 同样无值时不显示清空符号
    scClear.style = scVal ? 'opacity: 1' : 'opacity: 0';
}

// search()
function scanStr(content, str) {
    let index = content.indexOf(str);   // str 出现的位置
    let num = 0;                        // str 出现的次数
    let arrIndex = [];                  // str 出现的位置集合

    while(index !== -1) {
        // console.log(index);
        arrIndex.push(index);
        num += 1;
        index = content.indexOf(str, index + 1); // 从 str 出现的位置下一位置继续
    }

    // console.log(arrIndex);
    return arrIndex;

}


// 在字符串指定位置插入新的字符串
function insertStr(str, start, newStr){   
    return str.slice(0, start) + newStr + str.slice(start);
}

// 清空搜索框
function clearInputVal() {
    if (!scInput.value) return;
    scInput.value = '';    
    search();
}


function parseSiteParams() {
	let _vars = document.querySelector('#vars');
	console.log(_vars.innerText);

	return JSON.parse(_vars.innerText)
}