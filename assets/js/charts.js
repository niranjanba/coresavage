const ctx1 = document.querySelector("#myChart1").getContext("2d");
const ctx2 = document.querySelector("#myChart2").getContext("2d");

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
let gradient1 = ctx2.createLinearGradient(0, 0, 0, 400);
gradient1.addColorStop(0, "rgba(92, 37, 141, 1)");
gradient1.addColorStop(1, "rgba(67, 137, 162, 1)");

const projectLables = ["1", "2", "3", "4", "5", "6"];

const projectData = {
    projectLables,
    datasets: [
        {
            data: [11, 26, 65, 50, 20, 70],
            label: "No of Projects",
            fill: true,
            backgroundColor: gradient1,
            borderColor: "#fff",
            pointBackgroundColor: "rgb(189, 195, 199)",
            tension: 0.2,
        },
    ],
};

const projectConfig = {
    type: "line",
    data: projectData,
    options: {
        radius: 5,
        hitRadius: 30,
        hoverRadius: 10,
        responsive: true,
        // animation: {
        //     onComplete: () => {
        //         delayed = true;
        //     },
        //     delay: (context) => {
        //         let delay = 0;
        //         if (
        //             context.type === "data" &&
        //             context.mode === "default" &&
        //             !delayed
        //         ) {
        //             delay = context.dataIndex * 300 + context.datasetIndex * 10;
        //         }
        //         return delay;
        //     },
        // },
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

const projectChart = new Chart(ctx2, config);
