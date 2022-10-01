const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let name = form.elements['name'].value;
  let email = form.elements['email'].value;
  let phone = form.elements['phone'].value;
  let subject = form.elements['subject'].value;
  let msg = form.elements['message'].value;

  const message = `Details and query are- Name: ${name}, Email: ${email}, Phone: ${phone}, Subject: ${subject}, Message: ${msg}`;
  const whatsappURL = `https://api.whatsapp.com/send?phone=919224209876&text=${message}`;
  let a = document.createElement('a');
  a.href = whatsappURL;
  a.target = '_blank';
  a.click();
  window.location.replace('/');
});