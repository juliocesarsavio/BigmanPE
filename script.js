function sendLeadData() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "8fd4ade8-a472-44ae-bf92-fa30c264b990");
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "authorization": "8fd4ade8-a472-44ae-bf92-fa30c264b990",
      "firstName": "Bala",
      "lastName": "dsadsa",
      "email": "juliocesarsaviofilho12312@gmail.com",
      "timezone": "America/Los_Angeles",
      "subscribed": false
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch("https://api.mailbluster.com/api/leads", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  