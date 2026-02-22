const calendar = document.getElementById("calendar");

function generateCalendar() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  let html = "<table border='1'><tr>";

  const days = ["日","月","火","水","木","金","土"];
  for(let d of days){
    html += "<th>" + d + "</th>";
  }
  html += "</tr><tr>";

  for(let i=0; i<firstDay; i++){
    html += "<td></td>";
  }

  for(let i=1; i<=lastDate; i++){
    if((i + firstDay -1) % 7 === 0){
      html += "</tr><tr>";
    }
    html += "<td>" + i + "</td>";
  }

  html += "</tr></table>";

  calendar.innerHTML = html;
}

generateCalendar();
html += "</tr></table>";
calendar.innerHTML = html;
}

generateCalendar();
