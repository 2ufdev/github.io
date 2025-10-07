const texts = [
  { title: "1", text: "Alicia je sais que ce que je vais dire ne changera pas ce que j’ai fait, mais j’ai besoin que tu saches la vérité. Pas celle qui arrange, pas celle qu’on dit pour se faire pardonner, mais celle que je ressens vraiment au fond de moi." },
  { title: "2", text: "J’ai merdé. J’ai blessé quelqu’un de bien, quelqu’un qui m’attendait, qui croyait en moi, pendant que moi je faisais n’importe quoi. Je suis parti, j’ai parlé avec une autre, alors que c’est avec toi que j’aurais dû rester. Toi que j’aurais dû rassurer, aimer comme tu le méritais. Et aujourd’hui je me rends compte de la gravité de ce que j’ai fait. Ce n’était pas juste une erreur, c’était une trahison envers quelqu’un qui ne voulait que mon bien.." },
  { title: "3", text: "Je regrette profondément, sincèrement. Pas juste parce que je t’ai perdu ou que tu t’es éloignée, mais parce que je sais que j’ai détruit quelque chose de vrai, quelque chose de rare. Tu ne méritais pas d’être blessée, encore moins par moi. Tu m’avais donné ta confiance, et moi, j’ai tout gâché." },
  { title: "4", text: "Depuis que c’est arrivé, j’arrête pas d’y penser. J’essaie de comprendre pourquoi j’ai agi comme ça, et la seule réponse que j’ai, c’est que j’ai été con, aveugle, et immature. J’ai cherché ailleurs ce que j’avais déjà, ce que je ne retrouverai pas. Et maintenant je ressens ce vide, ce manque de toi, de tes mots, de ton regard sur les photos, de ta présence. C’est comme si tout ce que je faisais avant n’avait plus aucun sens sans toi." },
  { title: "5", text: "Je ne veux pas d’une autre. Je ne cherche pas à combler ce vide avec quelqu’un d’autre, parce que personne ne te remplacera. Je t’aime réellement, profondément, et ce n’est pas juste des mots. C’est un sentiment que je ressens dans chaque partie de moi, même quand j’essaie de faire semblant que tout va bien. Je t’aime au point de vouloir changer, de devenir quelqu’un de meilleur, pas pour me faire pardonner, mais parce que je ne veux plus jamais faire ce genre de mal à quelqu’un, surtout pas à toi." },
  { title: "6", text: "Je sais que tu doutes peut-être de moi maintenant, que tu penses que mes paroles ne valent plus rien. Et tu as raison de douter. C’est à moi de te prouver, avec le temps, avec des gestes, que je suis sincère. Que je ne veux pas seulement réparer, mais reconstruire, différemment, plus vrai, plus solide." },
  { title: "7", text: "Je ne te demande pas de me pardonner tout de suite. Je sais que ça prend du temps, que la confiance se gagne pas en un message. Mais si tu laisses une petite place, juste une chance, je te jure que je saurai la mériter. Parce qu’au fond, malgré mes erreurs, malgré mes fautes, c’est toi que j’aime. Et c’est toi que je veux." },
  { title: "8", text: "Bonne anniversaire la femme que j'aime Alicia la princesse" }, // 8e
  { title: "9", text: "tie a moi pour la vie mtn hop ( hey salut beauté tv de moi)" } // 8e
];

let index = 0;
let bgIndex = 0;
let bgInterval = null;

const titleEl = document.getElementById("title");
const textEl = document.getElementById("text");
const background = document.getElementById("background");
const audio = new Audio("son.mp3");
const audio2 = new Audio("son2.mp3");

// Fond animé pour page 8 et 9
const backgrounds8 = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];
const backgrounds9 = ["9_img1.jpg","9_img2.jpg","9_img3.jpg","9_img4.jpg","9_img5.jpg"];

// Affichage initial
titleEl.textContent = texts[index].title;
textEl.textContent = texts[index].text;

// Événements flèches
document.getElementById("next").addEventListener("click", () => changeText(1));
document.getElementById("prev").addEventListener("click", () => changeText(-1));

function changeText(direction) {
  titleEl.classList.add("fade-out");
  textEl.classList.add("fade-out");

  setTimeout(() => {
    index = (index + direction + texts.length) % texts.length;

    titleEl.textContent = texts[index].title;
    textEl.textContent = texts[index].text;

    titleEl.classList.remove("fade-out");
    textEl.classList.remove("fade-out");
    titleEl.classList.add("fade-in");
    textEl.classList.add("fade-in");

  // Arrête tous les audios
  audio.pause();
  audio.currentTime = 0;
  audio2.pause();
  audio2.currentTime = 0;

  if (index === 7) { // page 8
    audio.play().catch(() => {});
    startBackgroundCycle(backgrounds8);
  } else if (index === 8) { // page 9
    audio2.play().catch(() => {});

    // stoppe tout cycle en cours et reset le fond
    stopBackgroundCycle();
    background.style.background = "#0f0f0f"; // fond neutre avant les images

    // attend 9 secondes avant de lancer le cycle des images pour page 9
    setTimeout(() => {
      startBackgroundCycle(backgrounds9);
  }, 15000);
  } else {
    stopBackgroundCycle();
    background.style.background = "#0f0f0f";
  }




    setTimeout(() => {
      titleEl.classList.remove("fade-in");
      textEl.classList.remove("fade-in");
    }, 600);
  }, 300);
}

// Lance le cycle d’images pour n’importe quelle page
function startBackgroundCycle(images) {
  stopBackgroundCycle(); // stoppe tout cycle en cours
  bgIndex = 0;
  background.style.opacity = 1;
  background.style.backgroundImage = `url(${images[bgIndex]})`;

  bgInterval = setInterval(() => {
    bgIndex = (bgIndex + 1) % images.length;
    background.style.opacity = 0;

    setTimeout(() => {
      background.style.backgroundImage = `url(${images[bgIndex]})`;
      background.style.opacity = 1;
    }, 1000);
  }, 4000);
}

// Arrête le cycle d’images
function stopBackgroundCycle() {
  clearInterval(bgInterval);
  bgInterval = null;
  background.style.opacity = 1;
  background.style.background = "#0f0f0f";
}
