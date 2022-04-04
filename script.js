const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const totalSamples = document.querySelector("#tot");
var MAXVALUES = Number(totalSamples.value);
const myNum = 4;
const freqMin = 5;
const freqMax = 12;
let freq = Math.floor(Math.random() * (freqMax - freqMin + 1)) + freqMin;
// console.log(freq);
var count = 0;
var cheat = false;
var totalCount = 0;
var myValues = [];

document.addEventListener("keydown", (e) => {
  if (e.key == "w") {
    cheat = !cheat;
    cheat
      ? (btn.style.background = "#1CC65A")
      : (btn.style.background = "#1C2DC6");
  }
});
btn.addEventListener("click", (e) => {
  generate();
});

function generate() {
  let res = 0;
  totalCount = 0;
  myValues = [];
  MAXVALUES = Number(totalSamples.value);
  let min = Number(document.querySelector("#min").value);
  let max = Number(document.querySelector("#max").value);
  let yMax = MAXVALUES / max + (MAXVALUES / max) * 0.5;
  var intID = setInterval(() => {
    count += 1;
    // console.log("Count: " + count);
    // console.log(minNum);
    if (
      cheat == true &&
      count > 0 &&
      count % freq == 0 &&
      min <= myNum &&
      myNum <= max
    ) {
      res = myNum;
      freq = Math.floor(Math.random() * (freqMax - freqMin + 1)) + freqMin;
      count = 0;
      // console.log(freq);

      // count= !count
    } else {
      res = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    myValues.push(res);

    // console.log(myValues);
    var trace = {
      x: myValues,
      type: "histogram",
      autobinx: false,

      marker: {
        color: "rgba(100, 200, 102, 0.7)",

        line: {
          color: "rgba(100, 200, 102, 1)",

          width: 4,
        },
      },

      name: "FREQUENCY",

      opacity: 0.75,

      xbins: {
        end: max * 2 + 1,

        size: 1,

        start: min - 0.5,
      },
    };
    var data = [trace];
    var layout = {
      bargap: 0.1,

      title: "Sampled Results",

      xaxis: {
        title: "Value",
        dtick: "D1",

        tickmode: "linear",
      },

      yaxis: {
        title: "Count",
      },
    };
    Plotly.newPlot("myChart", data, layout);
    // console.log(count);
    result.innerHTML = res;
    totalCount++;
    total.innerHTML = "Total Samples: " + totalCount;
    if (myValues.length == MAXVALUES) {
      clearInterval(intID);
      console.log("Total Samples: " + myValues.length);
    }
  }, 1);
}
