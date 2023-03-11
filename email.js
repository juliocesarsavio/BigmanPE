const form = document.querySelector('.mbr-form');
form.addEventListener('submit', (event) => {
event.preventDefault();
const email = document.getElementById('email-form4-5').value;
const data = {
email: email
};
fetch('https://h6gve5l5ajp4xvv6e7cmxjbepa0okysb.lambda-url.sa-east-1.on.aws/', {
method: 'POST',
body: JSON.stringify(data),
headers: {
'Content-Type': 'application/json'
}
})
.catch((error) => {
console.error(error);
});
});