const weeks = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
const endDate = new Date(year, month,  0) // 月の最後の日を取得
const endDayCount = endDate.getDate() // 月の末日
const lastMonthEndDate = new Date(year, month - 1, 0) // 前月の最後の日の情報
const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月の末日
const startDay = startDate.getDay() // 月の最初の日の曜日を取得
let dayCount = 1 // 日にちのカウント
let calendarHtml = '' // HTMLを組み立てる変数

// 今日の年・月・日付の取得
var today = date.getDate();
// year month today

calendarHtml += '<h1>' + year  + '/' + month + '月</h1>'
calendarHtml += '<table>'

// 曜日の行を作成
for (let i = 0; i < weeks.length; i++) {
    calendarHtml += '<td class="week-container">' + weeks[i] + '</td>'
}

for (let w = 0; w < 6; w++) {
    calendarHtml += '<tr>'

    for (let d = 0; d < 7; d++) {
        if (w == 0 && d < startDay) {
            // 1行目で1日の曜日の前
            let num = lastMonthendDayCount - startDay + d + 1
            calendarHtml += '<td class="is-disabled">' + num + '</td>'
        } else if (dayCount > endDayCount) {
            // 末尾の日数を超えた
            let num = dayCount - endDayCount
            calendarHtml += '<td class="is-disabled">' + num + '</td>'
            dayCount++
        } else {
            if(dayCount == today){
                calendarHtml += '<td class="dayday is-today">' +dayCount+ '<div class="day"><div><div><span class="dayWeather"></span></div><div><img class="dayWeatherIcon"></div></div></div>'
            }else if(dayCount == today+1){
                calendarHtml += '<td class"dayday">' +dayCount+ '<div class="tomorrow"><div><div><span class="tomorrowWeather"></span></div><div><img class="tomorrowWeatherIcon"></div></div></div>'
            }else if(dayCount == today+2){
               calendarHtml += '<td class"dayday">' +dayCount+ '<div class="dayAfterTomorrow"><div><div><span class="dayAfterTomorrowWeather"></span></div><div><img class="dayAfterTomorrowWeatherIcon"></div></div></div>'
            }else{
            calendarHtml += '<td class"dayday">' + dayCount
            
        }
        calendarHtml +='<textarea id="day'+w+d+'"></textarea></td>'
        dayCount++
        }
    }
    calendarHtml += '</tr>'
}
calendarHtml += '</table>'


document.querySelector('#calendar').innerHTML = calendarHtml
