document
  .getElementById("inquiry-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const selected = formData.get("selected_ids").split(",");

    // Здесь можно добавить отправку на email или сервер
    alert(
      `Request sent for paintings: ${selected.join(
        ", "
      )}\nWe'll contact you soon!`
    );
    this.reset();
    document
      .querySelectorAll(".selected")
      .forEach((card) => card.classList.remove("selected"));
    this.classList.add("hidden");
  });
