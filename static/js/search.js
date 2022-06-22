let data = document.querySelector('#data').innerText;
let arr = data.split('$$$');
let map = [];

arr.forEach(item => {
    let _arr = item.split('%%');
    map.push({
        title: _arr[0].trim(),
        permalink: _arr[1],
        date: _arr[2],
        summary: _arr[3],
        content: item.trim().toLowerCase()
    })
})

// console.log(map)
let scInput = document.querySelector('#sc-input');
let scRes = document.querySelector('#sc-res')
let scVal = '';

scInput.focus();



function search() {
    let post = '';
    scVal = scInput.value.trim().toLowerCase();
    console.log(scVal);
    // if (scVal.length === 1) return;

    map.forEach(item => {
        if (!scVal) return;
        if (item.content.indexOf(scVal) > -1) {
            let _arrIndex = scanStr(item.content, scVal);
            let _strRes = '';
            let _len = 100;  // 搜索字符前后截取的长度
            let _strStyle0 = '<span style="color: red;">'
            let _strStyle1 = '</span">'
            let _str = '<br><hr>'


            for (let i = 0, len = _arrIndex.length; i < len; i++) {
                let _idx = _arrIndex[i];
                let relidx = i;

                if (relidx > 0 && (_arrIndex[relidx] - _arrIndex[relidx - 1] < _len)) continue;
                // 最好可以高亮当前搜索词
                // item.content = insertStr(item.content, _idx + relidx * _strStyle0.length, _strStyle0);
                // item.content = insertStr(item.content, _idx + (relidx + 1) * scVal.length + (relidx + 1) * _strStyle0.length + relidx * _strStyle1.length, _strStyle1);

                // 概要显示
                _strRes += _str;
                let _startIdx = _idx < _len ? 0 : _idx - _len + (relidx + 1) * _str.length;
                let _endIdx = _idx + _len + (relidx + 1) * _str.length;
                _strRes +=  item.content.substring(_startIdx, _endIdx);
            }
            
            // _arrIndex.forEach((_idx, relidx) => {
            //     if (relidx > 0) {
            //         let _distance = _arrIndex[relidx] - _arrIndex[relidx - 1]
            //     }
            //     // 最好可以高亮当前搜索词
            //     // item.content = insertStr(item.content, _idx + relidx * _strStyle0.length, _strStyle0);
            //     // item.content = insertStr(item.content, _idx + (relidx + 1) * scVal.length + (relidx + 1) * _strStyle0.length + relidx * _strStyle1.length, _strStyle1);

            //     // 概要显示
            //     _strRes += _str;
            //     let _startIdx = _idx < _len ? 0 : _idx - _len + (relidx + 1) * _str.length;
            //     let _endIdx = _idx + _len + (relidx + 1) * _str.length;
            //     _strRes +=  item.content.substring(_startIdx, _endIdx);
            // })

            post += `
                <div class="item" >
                    <a href="${item.permalink}">
                        <span>📄</span>
                        <span class="date">${item.date}</span>
                        <span>${item.title}</span>
                    </a>
                    <div>${_strRes}</div>
                </div>
            `
            // <div>${item.summary}</div>
        }
    })

    let res = `<div class="list">${post}</div>`;
    scRes.innerHTML = res;
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