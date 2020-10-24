
window.addEventListener("load", function() {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
        const output = document.getElementById("container");
            for (let i = 0; i < json.length; i++) {
                output.innerHTML += `
                <div class = "astronaut">
                <h3>Name: ${json[i].firstName} ${json[i].lastName}</h3>
                 <ul>
                    <li>Hours In Space: ${json[i].hoursInSpace}</li>
                    <li>Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills}</li>
                </ul>
                <img src=${json[i].picture} class = "avatar"></img>    
                </div>
                `;
            }
                        
        });
    });
});

