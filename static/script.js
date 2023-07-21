const container = document.getElementById("container-APOD");
const getDateButton = document.getElementById("getDate");
var dateInput = document.getElementById("date");
var date = "";

const API_KEY = '5KdYgisReJGf8wcMqdeFMxYOZKQSyBffa3fa0XgZ';
const base_URL = 'https://api.nasa.gov/planetary/apod?';

// REQUEST APOD 

// fetch(`${base_URL}?api_key=${API_KEY}`)
// .then(res=>res.json())
// .then(data=> {
//     document.querySelector("main").style.background = `url("${data.url}") no-repeat fixed center`;
// document.querySelector("main").style.backgroundSize = "cover";
//     var title = data.title;

//     container.innerHTML = (`
//     <div id="description">
//         <div id="content">
//             <h1>${title.toUpperCase()}</h1>
//             <p>${data.explanation}</p>
//             <p>${data.date}</p>
//         </div>
//     </div>
//     `)
// }).catch(handleError);

// FUNÇÕES

function getDate() {
    date = document.getElementById("date").value;
    console.log(date)
    dateInput.value = "";
    document.querySelector("main").style.background = "--var(--grey)";

    let request = new XMLHttpRequest();
    request.open('GET', base_URL + 'date=' + date + "&api_key=" + API_KEY, true);
    request.send();
    request.onload = function() {
        if(request.status === 200) {

            let data = JSON.parse(request, this.responseText);
            
            document.querySelector("main").style.background = `url("${data.url}") no-repeat fixed center`;
            document.querySelector("main").style.backgroundSize = "cover";
                var title = data.title;
            
                container.innerHTML = (`
                <div id="description">
                    <div id="content">
                        <h1>${title.toUpperCase()}</h1>
                        <p>${data.explanation}</p>
                        <p>${data.date}</p>
                    </div>
                </div>
                `)
        } else {
            window.alert("Por favor, introduza uma data que exista.")
        }
    }
}

function showDescription() {
    document.getElementById("description").style.display = "block";
    document.getElementById("content").style.display = "block";
}

function closeDescription() {
    document.getElementById("description").style.display = "none";
    document.getElementById("content").style.display = "none";
}

