function sendLeadData() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "854039dd-8144-4f30-955c-aaa69e3c9f8d");
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "authorization": "854039dd-8144-4f30-955c-aaa69e3c9f8d",
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
  