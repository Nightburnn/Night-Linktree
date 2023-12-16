const shareButtons = document.querySelectorAll(".tile-share-button");

    console.log(shareButtons);
    async function copyText(e) {
      //when button is click it goes to the site this line of code prevents that

      e.preventDefault();
      const link = this.getAttribute("link");
      console.log(link);

      try {
        await navigator.clipboard.writeText(link);
        alert("Copied To Clipboard");
      } catch (err) {
        console.error(err);
      }
    }

    shareButtons.forEach((shareButton) =>
      shareButton.addEventListener("click", copyText)
    );

    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      // reset: true
    });

    // Reveal elements
    sr.reveal(`.image-container`, { origin: "right" });
    sr.reveal(`.share-button`, { origin: "left" });
    sr.reveal(`.tile`, { interval: 100 });
