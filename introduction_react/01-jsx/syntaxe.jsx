const h1 = <h1>Bonjour</h1>;
//Cet élément JSX ressemble exactement à HTML ! 
// La seule différence notable est que vous le trouverez dans un fichier JavaScript plutôt que dans un fichier HTML
//Les éléments JSX sont traités comme des expressions JavaScript . 
// Ils peuvent aller partout où les expressions JavaScript peuvent aller. 
// Cela signifie qu'un élément JSX peut être enregistré dans une variable, 
// passé à une fonction, stocké dans un objet ou un tableau… vous l'appelez.

//Voici un exemple d'élément JSX enregistré dans une variable :
const navBar = <nav>I am a nav bar</nav>;

//Voici un exemple de plusieurs éléments JSX stockés dans un objet :

const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};

//Attributs dans JSX :
// Un attribut JSX est écrit en utilisant une syntaxe de type HTML : 
// un nom , suivi d'un signe égal, suivi d'une valeur . 
// La valeur doit être placée entre guillemets, comme ceci : my-attribute-name="my-attribute-value"


//Voici quelques éléments JSX avec des attributs :
<a href='http://www.example.com'>Welcome to the Web</a>;
const title = <h1 id='title'>Introduction to React.js: Part I</h1>;
//Un seul élément JSX peut avoir de nombreux attributs, tout comme en HTML :
const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px' />;

//JSX imbriqué :
//Vous pouvez imbriquer des éléments JSX à l'intérieur d'autres éléments JSX, tout comme en HTML.

//Voici un exemple d'<h1>élément JSX, imbriqué à l'intérieur d'un <a>élément JSX :
<a href="https://www.example.com"><h1>Click me!</h1></a>

//Pour rendre cela plus lisible, vous pouvez utiliser des sauts de ligne et une indentation de style HTML :

/* <a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a> */ //Erreur de compilation

//Si une expression JSX occupe plusieurs lignes, 
// vous devez alors placer l'expression JSX multiligne entre parenthèses. 
// Cela semble étrange au début, mais on s'y habitue :
// (
//   <a href="https://www.example.com">
//     <h1>
//       Click me!
//     </h1>
//   </a>
// )

//Les expressions JSX imbriquées peuvent être enregistrées en tant que variables, 
// transmises à des fonctions, etc., tout comme les expressions JSX non imbriquées ! 
// Voici un exemple d' expression JSX imbriquée enregistrée en tant que variable :
// const theExample = (
//   <a href="https://www.example.com">
//     <h1>
//       Click me!
//     </h1>
//   </a>
// );

//Éléments externes JSX
//Il existe une règle que nous n'avons pas mentionnée : 
// une expression JSX doit avoir exactement un élément le plus externe. 
// En d'autres termes, ce code fonctionnera :
const paragraphs = (
<>
  <div id="i-am-the-outermost-element"> //Le plus externe
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
  <div>
    <h1>Test</h1>
  </div>
</>
);

//Mais ce code ne fonctionnera pas :
// const paragraphs = (
//   <p>I am a paragraph.</p> //Le plus externe
//   <p>I, too, am a paragraph.</p>
// );

/**
 * La première balise d'ouverture et la balise de fermeture finale d'une expression 
 * JSX doivent appartenir au même élément JSX !
  *Il est facile d’oublier cette règle et de se retrouver avec des erreurs difficiles à diagnostiquer.
  *Si vous remarquez qu'une expression JSX comporte plusieurs éléments externes, 
  la solution est généralement simple : enveloppez l'expression JSX dans un <div>élément ou <></> (fragment).
 */

  //Rendre une expression JSX
  const container = document.getElementById('app3');
  const root = ReactDOM.createRoot(container);
  root.render(
    <h1>Bonjour, monde !</h1>
  );

//Cette ligne:
//const container = document.getElementById('app')
// Utilise l'objet Windows.document qui représente notre page Web.
// Utilise la méthode getElementById() de document pour obtenir l'objet Element 
// représentant l'élément HTML avec l'identifiant transmis('root').
// Stocke l'élément dans container.

//Dans la ligne suivante :
//const root = createRoot(container)
//nous utilisons createRoot() issue de la bibliothèque react-dom/client, 
// qui crée une racine React à partir de container et la stocke dans root. 
//root peut être utilisé pour restituer une expression JSX. 
// Il s'agit de la partie « où placer le contenu » du rendu React.

//Passer une variable à render()
/**
 * Précédement, nous avons vu comment créer une racine React en utilisant createRoot() et 
 * utiliser sa méthode render() pour rendre JSX .
  *L'argument de la méthode render() n'a pas besoin d'être JSX, 
  mais il doit être évalué comme une expression JSX. 
  L'argument peut également être une variable, à condition que cette variable soit évaluée comme une expression JSX.
 */
const toDoList = (
    <ol>
      <li>Learn React</li>
      <li>Become a Developer</li>
    </ol>
  );
  
  const container2 = document.getElementById('app2');
  const root2 = ReactDOM.createRoot(container2);
  root2.render(toDoList);

  const hello = <h1>Hello welcome to Ingetis</h1>;

//   root.render(hello, document.getElementById('app3'));
//   root.render(hello, document.getElementById('app3')); alosr ne fonctionne pas car render() ne prend qu'un seul argument, qui doit être une expression JSX. c'est le but de react DOM virtuel, il ne manipule pas le DOM directement, mais plutôt une représentation virtuelle du DOM. Lorsque vous appelez render(), React compare la nouvelle expression JSX avec la précédente et met à jour le DOM de manière efficace en ne modifiant que les parties qui ont changé. C'est pourquoi render() ne prend qu'un seul argument, qui doit être une expression JSX représentant l'état actuel de l'interface utilisateur.

