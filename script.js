 function showInfo(place) {
    const details = {
        Hampi: "Hampi is famous for its ancient Vijayanagara Empire monuments.",
        Mysuru: "Mysuru is famous for its royal palace and cultural heritage.",
        Coorg: "Coorg is famous for coffee plantations and green landscapes.",
        Gokarna: "Gokarna is famous for its beautiful beaches."
    };

    alert(details[place]);
}

function searchPlaces() {
    let input = document.getElementById("search")
        .value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        let name = card.querySelector("h2")
            .innerText.toLowerCase();

        card.style.display =
            name.includes(input) ? "block" : "none";
    });
}