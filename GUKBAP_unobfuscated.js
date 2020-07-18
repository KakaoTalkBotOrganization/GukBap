let bap = [9000, 7000, 6000, 5000];

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg['startsWith']('!국밥 ')) {
        let price = msg.substr(4).split(' ');

        if (isNaN(price)) {
            replier.reply('숫자만 넣어.');
        } else {
            if (price <= average(bap)) {
                replier.reply('평균 가격인 ' + numberWithCommas(average(bap)) + '원보다\n' + numberWithCommas(Math.floor(average(bap) - price)) + '원 부족해, 즉 국밥을 살수 없어.')
            } else {
                if (price >= 1000000000000) {
                    replier.reply('정상적인 가격을 넣어.')
                } else {
                    replier.reply('그걸 살 바에 ' + numberWithCommas(Math.floor(price / average(bap))) + '개의 국밥을\n뜨ㅡㅡ끈하고 든ㅡ든하게 먹는게 낫지.')
                }
            }
        }
    }
}

function average(arr) {
    let sum = 0x0;
    for (var i = 0x0; i < arr.length; i++) sum += arr[i];
    return sum / arr.length;
}

function numberWithCommas(num) {
    return (num + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function Donotdelete(_0x4b0d9a) {
    return n.reply('윤동원');
}
