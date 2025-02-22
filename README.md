Here’s a modified version of your `README.md` file that includes detailed explanations of the code and leaves space for screenshots to showcase the results. This version is structured to provide a clear understanding of each exercise while maintaining a professional and organized format.

---

# TP JavaScript : Exercices et Solutions

## Introduction
Ce projet propose plusieurs exercices en JavaScript permettant d'explorer diverses fonctionnalités du langage, notamment les manipulations de nombres, les boucles, les conditions et l'affichage dynamique sur une page web.

Chaque exercice est accompagné d'une description détaillée, du mode d'utilisation, d'une explication du code et d'un espace pour insérer des captures d'écran illustrant les résultats obtenus.

---

## 1. Conversion de Températures
### Objectif
Convertir une température donnée en Fahrenheit vers Celsius en utilisant la formule :
\[ T(\degree C) = \frac{5}{9} \times (T(\degree F) - 32) \]

### Mode d'utilisation
1. Saisir une valeur en Fahrenheit dans le champ de saisie.
2. Cliquer sur le bouton **Convertir**.
3. La conversion en degrés Celsius s'affiche en dessous.

### Explication du Code
Le code JavaScript récupère la valeur saisie en Fahrenheit, applique la formule de conversion, et affiche le résultat. Voici le code utilisé :

```javascript
let tempF = parseFloat(sections[1].children[1].value); // Récupère la valeur en Fahrenheit
let tempC = (5 / 9) * (tempF - 32); // Applique la formule de conversion
alert(`Cette température équivaut à ${tempC.toFixed(1)}°C`); // Affiche le résultat
```

### Résultat
Insérez ici une capture d'écran montrant la conversion d'une température en Fahrenheit vers Celsius.

---

## 2. Conversion de Durées
### Objectif
Convertir une durée exprimée en secondes en jours, heures, minutes et secondes.

### Mode d'utilisation
1. Saisir une durée en secondes.
2. Cliquer sur **Convertir**.
3. Le résultat est affiché sous forme lisible (ex : "1 jour(s) 3 heure(s) 25 minute(s) 10 seconde(s)").

### Explication du Code
Le code décompose la durée en secondes en jours, heures, minutes et secondes en utilisant des divisions et des modulos :

```javascript
let sec = parseInt(sections[2].children[1].value); // Récupère la durée en secondes
let jours = Math.floor(sec / 86400); // Convertit en jours
sec %= 86400;
let heures = Math.floor(sec / 3600); // Convertit en heures
sec %= 3600;
let minutes = Math.floor(sec / 60); // Convertit en minutes
sec %= 60;

let result = [];
if (jours) result.push(`${jours} jour(s)`);
if (heures) result.push(`${heures} heure(s)`);
if (minutes) result.push(`${minutes} minute(s)`);
if (sec) result.push(`${sec} seconde(s)`);

alert(`Cette durée équivaut à: ${result.join(' ')}`); // Affiche le résultat
```

### Résultat
Insérez ici une capture d'écran montrant la conversion d'une durée en secondes.

---

## 3. Classer Trois Nombres
### Objectif
Saisir trois nombres et les afficher en ordre croissant.

### Mode d'utilisation
1. Saisir trois nombres dans les champs dédiés.
2. Cliquer sur **Classer**.
3. Le programme trie et affiche les nombres en ordre croissant.

### Explication du Code
Le code utilise un algorithme de tri à bulles pour classer les trois nombres :

```javascript
let nums = [
    parseFloat(sections[3].children[1].value),
    parseFloat(sections[3].children[2].value),
    parseFloat(sections[3].children[3].value)
];

for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] > nums[j]) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
}

alert(`Ordre croissant: ${nums.join(' ')}`); // Affiche les nombres triés
```

### Résultat
Insérez ici une capture d'écran montrant trois nombres triés en ordre croissant.

---

## 4. Triangle d'Étoiles
### Objectif
Générer un motif en forme de triangle en utilisant des boucles **while** et **for**.

### Mode d'utilisation
1. Entrer une taille pour le triangle.
2. Cliquer sur **Triangle (while)** ou **Triangle (for)** pour afficher le motif correspondant.

### Explication du Code
Le code génère un triangle d'étoiles en utilisant des boucles imbriquées :

```javascript
let taille = parseInt(sections[4].children[1].value);
let result = '';
for (let i = 1; i <= taille; i++) {
    for (let j = 1; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}
alert(result); // Affiche le triangle
```

### Résultat
Insérez ici une capture d'écran montrant un triangle d'étoiles généré.

---

## 4-bis. Pyramide d'Étoiles
### Objectif
Afficher une pyramide d'étoiles centrée.

### Mode d'utilisation
1. Saisir la taille de la pyramide.
2. Cliquer sur **Afficher pyramide**.
3. La pyramide est affichée en utilisant des espaces et des étoiles.

### Explication du Code
Le code génère une pyramide en ajoutant des espaces et des étoiles de manière symétrique :

```javascript
let taille = parseInt(sections[5].children[1].value);
let result = '';
for (let i = 0; i < taille; i++) {
    let espace = ' '.repeat(taille - i - 1);
    let etoiles = '*'.repeat(2 * i + 1);
    result += espace + etoiles + '\n';
}
alert(result); // Affiche la pyramide
```

### Résultat
Insérez ici une capture d'écran montrant une pyramide d'étoiles.

---

## 5. Vérification de Nombre Premier
### Objectif
Vérifier si un nombre donné est un nombre premier.

### Mode d'utilisation
1. Entrer un nombre entier.
2. Cliquer sur **Tester**.
3. Le programme vérifie si le nombre est premier et affiche le résultat.

### Explication du Code
Le code vérifie si un nombre est premier en testant ses diviseurs :

```javascript
let nombre = parseInt(sections[6].children[1].value);
let estPremier = true;
for (let i = 2; i <= Math.sqrt(nombre); i++) {
    if (nombre % i === 0) {
        estPremier = false;
        break;
    }
}
alert(estPremier ? `${nombre} est un nombre premier` : `${nombre} n'est pas un nombre premier`);
```

### Résultat
Insérez ici une capture d'écran montrant la vérification d'un nombre premier.

---

## Conclusion
Ce projet met en pratique des concepts fondamentaux de JavaScript à travers des exercices interactifs. Vous pouvez tester et modifier le code pour mieux comprendre son fonctionnement. Les captures d'écran illustrent les résultats obtenus pour chaque exercice.

---

### Exemple de Capture d'Écran
![image_alt](https://github.com/malakzaidi/Tps_POO_SDIA1/blob/main/TP1/src/screenshots/image_2024-10-27_111933283.png?raw=true)

---

This version of the `README.md` file is well-structured, provides detailed explanations, and leaves space for screenshots to showcase the results of each exercise. Let me know if you need further adjustments!
