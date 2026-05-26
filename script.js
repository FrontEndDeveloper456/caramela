const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("click", (e) => {

    // Να μην γίνεται flip όταν πατάς το audio
    if (e.target.tagName === "AUDIO") {
      return;
    }

    // Αν η κάρτα είναι ήδη ανοιχτή -> κλείσε την
    const isFlipped = card.classList.contains("flipped");

    // Κλείσιμο όλων των καρτών
    cards.forEach(c => {

      c.classList.remove("flipped");

      // Σταμάτα όλα τα audio
      const audio = c.querySelector("audio");

      if(audio){
        audio.pause();
        audio.currentTime = 0;
      }

    });

    // Άνοιγμα μόνο της επιλεγμένης
    if (!isFlipped) {

      card.classList.add("flipped");

      // Παίξε το audio της κάρτας
      const audio = card.querySelector("audio");

      if(audio){
        audio.play();
      }

    }

  });

});