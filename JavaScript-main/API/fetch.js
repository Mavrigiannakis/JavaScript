function tietoa()
{
  fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0]);



    document.getElementById('tietoa').innerHTML = "<b>Name: </b>" + data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last
     + "<br>" + "<b>Adress: </b>" + data.results[0].location.street.number + " " + data.results[0].location.street.name
     + "<br>" + data.results[0].location.city + " " + data.results[0].location.state
     + "<br>" + data.results[0].location.postcode + " " + data.results[0].location.country
     + "<br>" + "<b>Phone Number: </b>" + data.results[0].phone
     + "<br>" + "<b>Email: </b>" + data.results[0].email
     + "<br>" +  "<b>Login + Password: </b>" + data.results[0].login.username + " " + data.results[0].login.password;
     document.getElementById('kuva2').src = data.results[0].picture.large;
     document.getElementById('kuva2').style.width = '400px';
  } );
}
