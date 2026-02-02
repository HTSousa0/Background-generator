document.addEventListener("DOMContentLoaded", function () {

	const form = document.querySelector(".form-group");
	const input = document.getElementById("description");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		const description = input.value.trim();

		if (!description) {
			return;
		}

		setLoading(true);
	});


	function setLoading(isLoading) {
		const button = document.getElementById("btn-text");

		if (isLoading) {
			button.innerHTML = "Gerando Background...";
		} else {
			button.innerHTML = "Gerar Background Mágico";
		}
	}


});
