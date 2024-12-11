// Edit this array of apps
var apps = [
   {
        name: "Prediction Application",
        path: "./prediction/",
        image: "https://github.com/janikmiet/sleep22prediction/blob/main/prediction.png?raw=true",
        description: "Application simulates Sleep Apnea prevalences and costs for Albania, Armenia, Austria, Azerbaijan, Belarus, Belgium, Bosnia and Herzegovina, Bulgaria, Croatia, Cyprus, Denmark, Estonia, Finland, France, Georgia, Germany, Greece, Hungary, Iceland, Ireland, Italy, Kazakhstan, Latvia, Lithuania, Luxembourg, Malta, Montenegro, Netherlands, Norway, Poland, Portugal, Romania, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Turkey, Ukraine, United Kingdom."
    },
    {
        name: "Sleep Apnea Costs in Europe",
        path: "./visualizer/",
        image: "https://github.com/janikmiet/sleep22visualizer/blob/main/visualizer.png?raw=true",
        description: "Sleep Apnea Costs visualized on map. Costs are calculated by method which is covered in the playbook."
    },
    {
        name: "Costs Calculator",
        path: "./calculator/",
        image: "https://github.com/janikmiet/sleep22calculator/blob/main/calculator.png?raw=true",
        description: "Sleep Apnea Cost calculator is an application which estimates cost of sleep apnea by the prevalences of medical conditions connected to sleep apnea. More detailed playbook of the method can be found at <https://research.janimiettinen.fi/material/sleep22/>."
    },
     {
        name: "Playbook: The Method Used in Calculating Sleep Apnea Costs in Europe",
        path: "./docs/",
        image: "./docs/img/plot-europe-cost.png",
        description: "Sleep apnea cost estimated by top-down calculation method presented in Armeni et al. (2019) Cost-of-illness study of Obstructive Sleep Apnea Syndrome (OSAS) in Italy. This project utilizes estimation method with other open data science methods for 42 countries. Guide follows step-by-step data processing by R and packages such as duckdb, tidyverse, vroom and dplyr. "
    }
]

var app = new Vue({
    el: '#app',
    data: {
        apps: apps
    }
})