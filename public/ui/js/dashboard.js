// Chart Dashboard (Awal)
const ctx = document.getElementById("myChart").getContext("2d");
let delayed;
//Gradient Fill
// let gradient = ctx.createLinearGradient(x0, y0, x1, y1);
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(0, 173, 181,1)");
gradient.addColorStop(1, "rgba(82, 211, 216,0.3)");

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agt",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

const data = {
  labels,
  datasets: [
    {
      data: [211, 326, 165, 350, 420, 375, 500, 124, 547, 444, 568, 785],
      label: "Pemasukan Perbulan",
      fill: true,
      backgroundColor: gradient,
      borderColor: "#17e2e9",
      pointBackgroundColor: "#00ADB5",
      tension: 0.4,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    radius: 5,
    hitRadius: 20,
    hoverRadius: 12,
    resposive: true,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      y: {
        // memberikan Rp dan Jt pada parameter data chart
        ticks: {
          callback: function (value) {
            return "Rp" + value + "jt";
          },
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);
// Chart Dashboard (Akhir)
