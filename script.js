const mon = document.getElementById("mon");
const tue = document.getElementById("tue");
const wed = document.getElementById("wed");
const thu = document.getElementById("thu");
const fri = document.getElementById("fri");
const sat = document.getElementById("sat");
const sun = document.getElementById("sun");
const bars = document.getElementById("bars");
const maxHeight = bars.offsetHeight - 60;

async function loadBar() {
  const response = await fetch("data.json");
  const data = await response.json();
  let maxValue = -1;
  for (let x of data) {
    if (x.amount > maxValue) {
      maxValue = x.amount;
    }
  }
  function setHeight(amount) {
    return (amount / maxValue) * maxHeight + "px";
  }
  mon.style.height = setHeight(data[0].amount);
  mon.setAttribute("data-before", "$" + data[0].amount);
  tue.style.height = setHeight(data[1].amount);
  tue.setAttribute("data-before", "$" + data[1].amount);
  wed.style.height = setHeight(data[2].amount);
  wed.setAttribute("data-before", "$" + data[2].amount);
  thu.style.height = setHeight(data[3].amount);
  thu.setAttribute("data-before", "$" + data[3].amount);
  fri.style.height = setHeight(data[4].amount);
  fri.setAttribute("data-before", "$" + data[4].amount);
  sat.style.height = setHeight(data[5].amount);
  sat.setAttribute("data-before", "$" + data[5].amount);
  sun.style.height = setHeight(data[6].amount);
  sun.setAttribute("data-before", "$" + data[6].amount);
  const today = new Date();
  todayDay = today.getDay();
  bars.children.item(todayDay - 1).classList.add("current");
}

loadBar();
