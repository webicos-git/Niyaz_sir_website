function submitForm() {
	let name = $("#name").val();
	let email = $("#email").val();
	let phone = $("#phone").val();
	let subject = $("#subject").val();
	let msg = $("#message").val();

	const message = `Details and query are- Name: ${name}, Email: ${email}, Phone: ${phone}, Subject: ${subject}, Message: ${msg}`;
	const whatsappURL = `https://api.whatsapp.com/send?phone=919224209876&text=${message}`;
	let a = document.createElement("a");
	a.href = whatsappURL;
	a.target = "_blank";
	a.click();
	// window.location.replace('/');
}
