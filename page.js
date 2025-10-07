const texts = [
  { title: "2", text: "J’ai merdé. J’ai blessé quelqu’un de bien, quelqu’un qui m’attendait, qui croyait en moi, pendant que moi je faisais n’importe quoi. Je suis parti, j’ai parlé avec une autre, alors que c’est avec toi que j’aurais dû rester. Toi que j’aurais dû rassurer, aimer comme tu le méritais. Et aujourd’hui je me rends compte de la gravité de ce que j’ai fait. Ce n’était pas juste une erreur, c’était une trahison envers quelqu’un qui ne voulait que mon bien.." },
  { title: "3", text: "Je regrette profondément, sincèrement. Pas juste parce que je t’ai perdu ou que tu t’es éloignée, mais parce que je sais que j’ai détruit quelque chose de vrai, quelque chose de rare. Tu ne méritais pas d’être blessée, encore moins par moi. Tu m’avais donné ta confiance, et moi, j’ai tout gâché." },
  { title: "4", text: "Depuis que c’est arrivé, j’arrête pas d’y penser. J’essaie de comprendre pourquoi j’ai agi comme ça, et la seule réponse que j’ai, c’est que j’ai été con, aveugle, et immature. J’ai cherché ailleurs ce que j’avais déjà, ce que je ne retrouverai pas. Et maintenant je ressens ce vide, ce manque de toi, de tes mots, de ton regard sur les photos, de ta présence. C’est comme si tout ce que je faisais avant n’avait plus aucun sens sans toi." },
  { title: "5", text: "Je ne veux pas d’une autre. Je ne cherche pas à combler ce vide avec quelqu’un d’autre, parce que personne ne te remplacera. Je t’aime réellement, profondément, et ce n’est pas juste des mots. C’est un sentiment que je ressens dans chaque partie de moi, même quand j’essaie de faire semblant que tout va bien. Je t’aime au point de vouloir changer, de devenir quelqu’un de meilleur, pas pour me faire pardonner, mais parce que je ne veux plus jamais faire ce genre de mal à quelqu’un, surtout pas à toi." },
  { title: "6", text: "Je sais que tu doutes peut-être de moi maintenant, que tu penses que mes paroles ne valent plus rien. Et tu as raison de douter. C’est à moi de te prouver, avec le temps, avec des gestes, que je suis sincère. Que je ne veux pas seulement réparer, mais reconstruire, différemment, plus vrai, plus solide." },
  { title: "7", text: "Je ne te demande pas de me pardonner tout de suite. Je sais que ça prend du temps, que la confiance se gagne pas en un message. Mais si tu laisses une petite place, juste une chance, je te jure que je saurai la mériter. Parce qu’au fond, malgré mes erreurs, malgré mes fautes, c’est toi que j’aime. Et c’est toi que je veux." }
];

let index = -1;

const titleEl = document.getElementById("title");
const textEl = document.getElementById("text");

titleEl.classList.add("fade");
textEl.classList.add("fade");

document.getElementById("next").addEventListener("click", () => changeText(1));
document.getElementById("prev").addEventListener("click", () => changeText(-1));

function changeText(direction) {

  titleEl.classList.add("out");
  textEl.classList.add("out");

  setTimeout(() => {
    index = (index + direction + texts.length) % texts.length;
    titleEl.textContent = texts[index].title;
    textEl.textContent = texts[index].text;

    titleEl.classList.remove("out");
    textEl.classList.remove("out");
  }, 600);
}