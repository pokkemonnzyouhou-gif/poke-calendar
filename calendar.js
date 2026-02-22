const calendar = document.getElementById("calendar");

// ▼▼▼イベントをここに追加していく▼▼▼
const events = {
  "2026-03-15": {
    name: "ポケモンカフェ春メニュー開始",
    url: "https://あなたの記事URL",
    type: "cafe"
  },
  "2026-03-20": {
    name: "ポケモンセンター配布",
    url: "https://あなたの記事URL",
    type: "center"
  },
  "2026-03-25": {
    name: "ポケパークイベント",
    url: "https://あなたの記事URL",
    type: "park"
  }
};
// ▲▲▲ここまで▲▲▲

function generateCalendar() {

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  const today = new Date().toISOString().split("T")[0];

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  let html = "<table class='poke-cal'><tr>";

  const days = ["日","月","火","水","木","金","土"];
  for(let d of days){
    html += "<th>" + d + "</th>";
  }
  html += "</tr><tr>";

  for(let i=0; i<firstDay; i++){
    html += "<td></td>";
  }

  for(let i=1; i<=lastDate; i++){

    let thisDate = year + "-" + String(month+1).padStart(2,'0') + "-" + String(i).padStart(2,'0');

    let eventClass = "";
    let eventText = "";
    let linkStart = "";
    let linkEnd = "";

    if(events[thisDate]){
      eventClass = events[thisDate].type;
      eventText = "<div class='event'>" + events[thisDate].name + "</div>";
      linkStart = "<a href='"+events[thisDate].url+"' target='_blank'>";
      linkEnd = "</a>";
    }

    if(thisDate === today){
      eventClass += " today";
    }

    html += "<td class='"+eventClass+"'>"+linkStart+i+eventText+linkEnd+"</td>";

    if((i + firstDay) % 7 === 0){
      html += "</tr><tr>";
    }
  }

  html += "</tr></table>";
  calendar.innerHTML = html;
}

generateCalendar();
