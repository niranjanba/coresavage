const ctx1 = document.querySelector("#myChart1").getContext("2d");
// const ctx2 = document.querySelector("#myChart2").getContext("2d");

let delayed;
//Gradient Fill
let gradient = ctx1.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(58, 123, 213, 1)");
gradient.addColorStop(1, "rgba(0, 210, 255, 0.3)");

//chart1
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jue"];

const data = {
    labels,
    datasets: [
        {
            data: [11, 26, 65, 50, 20, 70],
            label: "No of Clients",
            fill: true,
            backgroundColor: gradient,
            borderColor: "#fff",
            pointBackgroundColor: "rgb(189, 195, 199)",
            tension: 0.2,
        },
    ],
};

const config = {
    type: "line",
    data: data,
    options: {
        radius: 5,
        hitRadius: 30,
        hoverRadius: 10,
        responsive: true,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (
                    context.type === "data" &&
                    context.mode === "default" &&
                    !delayed
                ) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 10;
                }
                return delay;
            },
        },
        // scales: {
        //     y: {
        //         ticks: {
        //             callback: function (value) {
        //                 // console.log(value);
        //                 return "$" + value + "m";
        //             },
        //         },
        //     },
        // },
    },
};

const myChart1 = new Chart(ctx1, config);

// Chart2
// let delayed;
//Gradient Fill
var ctx = document.getElementById("myChart2").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jue"],
        datasets: [
            {
                label: "Number of Projects",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

const projectChart = new Chart(ctx2, config);
