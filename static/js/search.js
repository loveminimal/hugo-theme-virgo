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

console.log(map)
let scInput = document.querySelector('#sc-input');
let scRes = document.querySelector('#sc-res')
let scVal = '';



function search() {
    let post = '';
    scVal = scInput.value.trim().toLowerCase();
    console.log(scVal);

    map.forEach(item => {
        if (!scVal) return;
        if (item.content.indexOf(scVal) > -1) {
            post += `
                <div class="item" >
                    <a href="${item.permalink}">
                        <span>📄</span>
                        <span class="date">${item.date}</span>
                        <span>${item.title}</span>
                    </a>
                    <div>${item.summary}</div>
            </div>
            `
        }
    })

    let res = `<div class="list">${post}</div>`;
    scRes.innerHTML = res;
}

// search()
