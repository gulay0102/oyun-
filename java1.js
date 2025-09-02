function startGame() {
  const cities = [
    "Baku",
    "Ganja",
    "Sumqayit",
    "Shaki",
    "Shirvan",
    "Nakhchivan",
    "Mingachevir",
    "Quba",
  ];
  let secretCity =
    cities[Math.floor(Math.random() * cities.length)].toLowerCase();
  let lives = 5;
  let guessed = [];

  while (lives > 0 && !guessed.includes(secretCity)) {
    // Cari vəziyyəti göstəririk
    alert(`Mövcud şəhərlər: ${cities.join(", ")}`);
    alert(`Qalan can: ${lives}`);
    alert(
      `Təxminlərin: ${guessed.length ? guessed.join(", ") : "hələ yoxdur"}`
    );

    // İstifadəçidən təxmin alırıq
    let guess = prompt("Bir şəhər təxmin et (məs: Baku):");
    if (guess === null) {
      // Cancel basıbsa
      alert("Oyunu dayandırdın.");
      return;
    }

    guess = guess.trim().toLowerCase();
    if (!guess) {
      alert("Boş buraxdın — bir şəhər yaz.");
      continue;
    }

    // Siyahıda yoxdursa
    if (!cities.map((c) => c.toLowerCase()).includes(guess)) {
      alert("Xahiş: siyahıdakı şəhərlərdən birini yaz.");
      continue;
    }

    // Əvvəl təxmin edilibsə
    if (guessed.includes(guess)) {
      alert("Bu şəhəri artıq təxmin etmisən. Başqa seç!");
      continue;
    }

    // Təxmini əlavə et
    guessed.push(guess);

    // Doğru yoxlaması
    if (guess === secretCity) {
      alert(`🎉 Təbriklər! Düzgün şəhər: ${secretCity}`);
      break;
    } else {
      lives--;
      if (lives > 0) {
        alert("Səhvdir — yenidən cəhd et.");
      } else {
        alert(`☠️ Uduzdun! Düzgün şəhər: ${secretCity}`);
      }
    }
  }

  // Yenidən oynamaq istəyirsə
  if (confirm("Yenidən oynamaq istəyirsən?")) {
    startGame();
  } else {
    alert("Oynadığın üçün təşəkkürlər!");
  }
}
startGame();
