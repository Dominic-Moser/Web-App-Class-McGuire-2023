const URL = 'https://randomuser.me/api/?results=10&seed=mullen';


fetch(URL)
  .then((resp) => resp.json()) // Returns the JSON data

  /*   .then(function (response) {
      return response.json()
      }) */

  .then(function(data) { // What you want done with the data
    let people = data.results;
    console.log(people);
    document.getElementById("firstPersonEmail").innerHTML = people[0].email;

    document.getElementById("secondPersonPhone").innerHTML = people[1].phone;
        
    document.getElementById("thirdPersonLastName").innerHTML = people[2].name.last;
        
    document.getElementById("fourthPersonLocationTimezoneDescription").innerHTML = people[3].location.timezone.description;

    document.getElementById("fifthPersonImage").src = people[4].picture.thumbnail;


    })
  .catch(function(error) { // Report the error message
        console.log(error);
    });





    
