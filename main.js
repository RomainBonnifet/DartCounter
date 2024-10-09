// sélection de tout les éléments svg de la cible
const double20 = document.querySelector("#use21");
const outer20 = document.querySelector("#use23");
const triple20 = document.querySelector("#use25");
const inner20 = document.querySelector("#use27");

const double5 = document.querySelector("#use31");
const outer5 = document.querySelector("#use33");
const triple5 = document.querySelector("#use35");
const inner5 = document.querySelector("#use37");

const double12 = document.querySelector("#use41");
const outer12 = document.querySelector("#use43");
const triple12 = document.querySelector("#use45");
const inner12 = document.querySelector("#use47");

const double9 = document.querySelector("#use51");
const outer9 = document.querySelector("#use53");
const triple9 = document.querySelector("#use55");
const inner9 = document.querySelector("#use57");

const double14 = document.querySelector("#use61");
const outer14 = document.querySelector("#use63");
const triple14 = document.querySelector("#use65");
const inner14 = document.querySelector("#use67");

const double11 = document.querySelector("#use71");
const outer11 = document.querySelector("#use73");
const triple11 = document.querySelector("#use75");
const inner11 = document.querySelector("#use77");

const double8 = document.querySelector("#use81");
const outer8 = document.querySelector("#use83");
const triple8 = document.querySelector("#use85");
const inner8 = document.querySelector("#use87");

const double16 = document.querySelector("#use91");
const outer16 = document.querySelector("#use93");
const triple16 = document.querySelector("#use95");
const inner16 = document.querySelector("#use97");

const double7 = document.querySelector("#use101");
const outer7 = document.querySelector("#use103");
const triple7 = document.querySelector("#use105");
const inner7 = document.querySelector("#use107");

const double19 = document.querySelector("#use111");
const outer19 = document.querySelector("#use113");
const triple19 = document.querySelector("#use115");
const inner19 = document.querySelector("#use117");

const double3 = document.querySelector("#use121");
const outer3 = document.querySelector("#use123");
const triple3 = document.querySelector("#use125");
const inner3 = document.querySelector("#use127");

const double17 = document.querySelector("#use131");
const outer17 = document.querySelector("#use133");
const triple17 = document.querySelector("#use135");
const inner17 = document.querySelector("#use137");

const double2 = document.querySelector("#use141");
const outer2 = document.querySelector("#use143");
const triple2 = document.querySelector("#use145");
const inner2 = document.querySelector("#use147");

const double15 = document.querySelector("#use151");
const outer15 = document.querySelector("#use153");
const triple15 = document.querySelector("#use155");
const inner15 = document.querySelector("#use157");

const double10 = document.querySelector("#use161");
const outer10 = document.querySelector("#use163");
const triple10 = document.querySelector("#use165");
const inner10 = document.querySelector("#use167");

const double6 = document.querySelector("#use171");
const outer6 = document.querySelector("#use173");
const triple6 = document.querySelector("#use175");
const inner6 = document.querySelector("#use177");

const double13 = document.querySelector("#use181");
const outer13 = document.querySelector("#use183");
const triple13 = document.querySelector("#use185");
const inner13 = document.querySelector("#use187");

const double4 = document.querySelector("#use191");
const outer4 = document.querySelector("#use193");
const triple4 = document.querySelector("#use195");
const inner4 = document.querySelector("#use197");

const double18 = document.querySelector("#use201");
const outer18 = document.querySelector("#use203");
const triple18 = document.querySelector("#use205");
const inner18 = document.querySelector("#use207");

const double1 = document.querySelector("#use211");
const outer1 = document.querySelector("#use213");
const triple1 = document.querySelector("#use215");
const inner1 = document.querySelector("#use217");

const center = document.querySelector("#circle219");
const centerDouble = document.querySelector("#circle221");

//tableau des éléments svg de la cible pour boucler dessus
const targetElements = [
  double20,
  outer20,
  triple20,
  inner20,
  double5,
  outer5,
  triple5,
  inner5,
  double12,
  outer12,
  triple12,
  inner12,
  double9,
  outer9,
  triple9,
  inner9,
  double14,
  outer14,
  triple14,
  inner14,
  double11,
  outer11,
  triple11,
  inner11,
  double8,
  outer8,
  triple8,
  inner8,
  double16,
  outer16,
  triple16,
  inner16,
  double7,
  outer7,
  triple7,
  inner7,
  double19,
  outer19,
  triple19,
  inner19,
  double3,
  outer3,
  triple3,
  inner3,
  double17,
  outer17,
  triple17,
  inner17,
  double2,
  outer2,
  triple2,
  inner2,
  double15,
  outer15,
  triple15,
  inner15,
  double10,
  outer10,
  triple10,
  inner10,
  double6,
  outer6,
  triple6,
  inner6,
  double13,
  outer13,
  triple13,
  inner13,
  double4,
  outer4,
  triple4,
  inner4,
  double18,
  outer18,
  triple18,
  inner18,
  double1,
  outer1,
  triple1,
  inner1,
  center,
  centerDouble,
];

// tableau des points de la cible pour boucler dessus
const targetElementPoint = [
  40, 20, 60, 20, 10, 5, 15, 5, 24, 12, 36, 12, 18, 9, 27, 9, 28, 14, 42, 14,
  22, 11, 33, 11, 16, 8, 24, 8, 32, 16, 48, 16, 14, 7, 21, 7, 38, 19, 57, 19, 6,
  3, 9, 3, 34, 17, 51, 17, 4, 2, 6, 2, 30, 15, 45, 15, 20, 10, 30, 10, 12, 6,
  18, 6, 26, 13, 39, 13, 8, 4, 12, 4, 36, 18, 54, 18, 2, 1, 3, 1, 25, 50,
];

class Player {
  constructor(name){
    this.name = name;
    this.score = 301;
    this.volley = 3
    this.lastScores = [0]
    this.currentPlayer = false
  }
}

const playersArray = []
let gameIsStarted = false
const saveVolleyValues = []
let inputName = document.querySelector('#playerName')
let currentPlayerIndex = 0
let displayPlayers = document.querySelector('#playersTable')
let infoGame = document.querySelector('.infoGame')
let validVolley = false


// écouteur d'event sur le bouton Start pour lancer le décompte 
let startGameButton = document.querySelector('#startButton')
startGameButton.addEventListener('click', startGame)

// retire le comportement par défaut du form, appel de la fonction qui crée un nouveau joueur
let formAddPlayer = document.querySelector('#formAddPlayer')
formAddPlayer.addEventListener('submit', (event)=>{
  event.preventDefault();
  createNewPlayer();
})

// on récupère la valeur de l'input et crée un nouvea joueur avec le nom renseigné
function createNewPlayer(){
  let newPlayer = new Player(inputName.value)
  console.log(newPlayer);
  playersArray.push(newPlayer)
  console.log(playersArray);
  inputName.value = ''
  displayPlayersArray()
}

// fonction qui définie le current player en fonction des joueurs du tableau playersArray
function defineCurrentPlayer(playersArray){
  playersArray[currentPlayerIndex].currentPlayer = false
  currentPlayerIndex = (currentPlayerIndex + 1) % playersArray.length;
  playersArray[currentPlayerIndex].currentPlayer = true;
  console.log(playersArray);
}


function startGame(){
  //on vérifie qu'au moins un joueur est inscrit dans le tableau playersArray
  if (playersArray.length >= 1) {
    gameIsStarted = true
    playersArray[currentPlayerIndex].currentPlayer = true
    // on appel la fonction qui déclenche les écouteurs d'event sur la cible 
    pushCurrentPlayerVolley()
    // on cache le bouton Start ainsi que le form addPlayers
    hide(startGameButton)
    hide(formAddPlayer)
    updateInfoGame()
  }
  
}

missedShotBtn()
function missedShotBtn() {
  let missedShotBtn = document.getElementById("missedBtn");
  if (missedShotBtn) {
    missedShotBtn.addEventListener("click", () => {
      // Décrémente le nombre de fléchettes restantes du current player
      playersArray[currentPlayerIndex].volley--;
      // Ajoute la valeur à l'array saveVolleyValues
      saveVolleyValues.push(0);
      updateInfoGame()
      if (saveVolleyValues.length === 3) {
        validationVolley()
      }
    });
  }
}

function pushCurrentPlayerVolley() {
  targetElements.forEach((element, index) => {
    element.addEventListener('click', () => {
      // Récupère la valeur associée à l'élément cliqué
      let targetElementValue = targetElementPoint[index];
      // Décrémente le nombre de fléchettes restantes du current player 
      playersArray[currentPlayerIndex].volley--
      //affiche en temps réel le nombre de fléchettes restantes du current player
      displayPlayersArray()
      // Ajoute la valeur à l'array saveVolleyValues
      saveVolleyValues.push(targetElementValue);

      updateInfoGame()
      // une fois ques les trois flèchettes on été lancée, on demande la validation des valeurs par le user avant de passer à la suite
      if (saveVolleyValues.length === 3) {
        validationVolley()
      }
      });

  });
  
}

function handleScores(volleyArray) {
  // applique la logique de décrémentation du score pour le current player
  if (playersArray[currentPlayerIndex].currentPlayer) {
    playersArray[currentPlayerIndex].lastScores = [...volleyArray]
    let volleySum = sumVolleyArray(volleyArray)
    playersArray[currentPlayerIndex].score -= volleySum
    //si le score est négatif, la dernière vollée de fléchettes du joueur est annulée 
    if (playersArray[currentPlayerIndex].score < 0) {
      console.log('Vous devez finir par un score exact');
      playersArray[currentPlayerIndex].score += volleySum
    }
    // si le score atteind exactement 0, le joueur a gagné
    if (playersArray[currentPlayerIndex].score === 0) {
      infoGame.innerHTML = `Fin de la partie ${playersArray[currentPlayerIndex].name} a gagné !`
      console.log(playersArray[currentPlayerIndex].name + ' a gagné');

      updateInfoGame()

      
      //score du joueur = 0, fin de la partie
      endGame()
    }
  }
  displayPlayersArray()
}

// on récupère les valeurs de la volée de fléchettes pour les additionner et décrémenter le score du joueur. 
function sumVolleyArray(saveVolleyValues) {
  return saveVolleyValues.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0)
}

// affiche les infos de chaques joueurs enregistrés dans le tableau playersArray
function displayPlayersArray() {
  displayPlayers.innerHTML = ''
  playersArray.forEach(player => {
    let div = document.createElement('div')
    div.textContent = `${player.name} : ${player.score} points. Fléchettes restantes : ${player.volley}`
    displayPlayers.appendChild(div)
  })
}

function hide(element) {
  element.style.display = 'none'
}

// update les info de la partie (nom du joueur en cours et les valeurs de ses lancés)
function updateInfoGame() {
  infoGame.textContent = `Au tour de ${playersArray[currentPlayerIndex].name} Score actuel : ${saveVolleyValues}`
  console.log("i call updateInfoGame");
}

// une fois que les valeurs des trois fléchettes on été enregistrées, on demande au user de valider les valeurs. Si les valeurs son bonnes on applique la logique de décrémentation, sinon on annule l'entièreté de la vollée pour que le joueur recommence
function validationVolley() {
  const span = infoGame
  const question = document.createElement('p');
    question.innerText = `Voulez-vous valider la série ${saveVolleyValues}`;

    const yesButton = document.createElement('button');
    yesButton.innerText = 'Oui';
    yesButton.addEventListener('click', () => {
        validVolley = true;
        updateInfoGame();
        handleGame()
    });

    const noButton = document.createElement('button');
    noButton.innerText = 'Non';
    noButton.addEventListener('click', () => {
      saveVolleyValues.length = 0
      playersArray[currentPlayerIndex].volley = 3
      updateInfoGame();
      displayPlayersArray()
    });

    // Effacer le contenu actuel du span
    span.innerHTML = '';

    // Ajouter la question et les boutons dans le span
    span.appendChild(question);
    span.appendChild(yesButton);
    span.appendChild(noButton);
}

function handleGame() {

  // on remet le nombre de fléchettes à 3
  playersArray[currentPlayerIndex].volley = 3
  // Appelle la fonction qui décrémente le score du current player avec les valeurs sauvegardées
  handleScores(saveVolleyValues);
  // Définit le joueur suivant
  defineCurrentPlayer(playersArray)
  // Remet à zéro saveVolleyValues pour le prochain tour
  saveVolleyValues.length = 0;
  // Affiche les informations de jeu
  displayPlayersArray()

  updateInfoGame()

}

function endGame(){
  alert(playersArray[currentPlayerIndex].name + ' a gagné')
}


