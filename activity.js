 //Accesccing html element using DOM
 const topic = document.getElementById('suggestedTopic');
 const activityText = document.getElementById('activity');
 /*
 1)By using async with fetch api store fetched data in variable 'data' 
 2)await keyword makes JavaScript runtime to pause code on this line not allowing
 further code to execute  until the async function returned its result
 3) json() that lets you extract a JSON object from the response
 */
 async function activities() {
     try {
        var response = await fetch('https://www.boredapi.com/api/activity')
        if (response.status==200) {
            var data = await response.json();
            return data;
        }
    
     } catch (error) {
         alert("try after some time :( ")
         
     }


 }
 //After that using promise ,we can retrive data
 activities().then(data => {
     topic.innerHTML = "Try this   " + data.type + "  activity"
     activityText.innerHTML = data.activity;
 })