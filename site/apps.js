// Edit this array of apps
var apps = [
    {
        name: "Visualizer",
        path: "./visualizer/",
        image: "https://github.com/janikmiet/sleep22visualizer/blob/main/visualizer.png?raw=true",
        description: "Sleep Apnea Costs in Europe visualized on map. Costs are calculated by method which is covered in Calculator Application."
    },
    {
        name: "Calculator",
        path: "./calculator/",
        image: "https://github.com/janikmiet/sleep22calculator/blob/main/calculator.png?raw=true",
        description: "Sleep Apnea Cost calculator is an application which estimates cost of sleep apnea by the prevalences of medical conditions connected to sleep apnea. More detailed playbook of the method can be found at <https://research.janimiettinen.fi/material/sleep22/>."
    },
    {
        name: "Prediction",
        path: "./prediction/",
        image: "https://github.com/janikmiet/sleep22prediction/blob/main/prediction.png?raw=true",
        description: "Application simulates Sleep Apnea prevalences and costs for Albania, Armenia, Austria, Azerbaijan, Belarus, Belgium, Bosnia and Herzegovina, Bulgaria, Croatia, Cyprus, Denmark, Estonia, Finland, France, Georgia, Germany, Greece, Hungary, Iceland, Ireland, Italy, Kazakhstan, Latvia, Lithuania, Luxembourg, Malta, Montenegro, Netherlands, Norway, Poland, Portugal, Romania, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Turkey, Ukraine, United Kingdom."
    }
]

var app = new Vue({
    el: '#app',
    data: {
        apps: apps
    }
})