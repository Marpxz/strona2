// Skrypt JavaScript do obsługi galerii zdjęć


// Pobierz wszystkie obrazy w galerii
const images = document.querySelectorAll('.gallery img');


// Przypisz funkcję do każdego obrazka, która powiększy obraz po kliknięciu
images.forEach(image => {
    image.addEventListener('click', function() {
        // Stwórz nowy element obrazka
        const enlargedImage = document.createElement('img');
        enlargedImage.src = this.src;
        enlargedImage.alt = this.alt;
        enlargedImage.classList.add('enlarged');


        // Dodaj powiększony obraz do body
        document.body.appendChild(enlargedImage);


        // Funkcja do zamknięcia powiększonego obrazu po kliknięciu
        enlargedImage.addEventListener('click', function() {
            document.body.removeChild(this);
        });
    });
});






