# 🚀 JavaScript Exercices 🧪

This folder contains a collection of JavaScript exercises designed to reinforce fundamental programming concepts. Whether you're a beginner looking to solidify your understanding or an experienced developer brushing up on basics, these exercises offer a practical way to learn and apply JavaScript.

## 📚 Table of Contents

-   🌡️ [Exercise 1: Temperature Conversion](#exercise-1-temperature-conversion)
-   ⏱️ [Exercise 2: Duration Conversion](#exercise-2-duration-conversion)
-   🔢 [Exercise 3: Sorting Three Numbers](#exercise-3-sorting-three-numbers)
-   🔺 [Exercise 4: Star Triangle](#exercise-4-star-triangle)
-   🏔️ [Exercise 4-bis: Star Pyramid](#exercise-4-bis-star-pyramid)
-   ✔️ [Exercise 5: Prime Number Check](#exercise-5-prime-number-check)
-   🌀 [Exercise 6: Fibonacci Sequence](#exercise-6-fibonacci-sequence)
-   📏 [Exercise 7: Square Root Approximation](#exercise-7-square-root-approximation)
-   🏁 [Conclusion](#conclusion)
-   🛠️ [How to Use](#how-to-use)
-   🤝 [Contributing](#contributing)
-   📝 [License](#license)
  
  ![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-26%20021620.png)
  
  ![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-26%20021653.png)

## 🌡️ Exercise 1: Temperature Conversion

### Objective

Convert a temperature from Fahrenheit to Celsius.

### Code

```javascript
button.onclick = function() {
    let tempF = parseFloat(input.value);
    if (!isNaN(tempF)) {
        let tempC = (5 / 9) * (tempF - 32);
        tempC = Math.round(tempC * 10) / 10;
        alert(`Cette température équivaut à ${tempC} degrés Celsius`);
    } else {
        alert("Veuillez entrer une valeur numérique valide.");
    }
};
```
![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-26%20021710.png)

⏱️ Exercise 2: Duration Conversion
Objective
Convert seconds to days, hours, minutes, seconds.

### Code

```javascript
button.onclick = function() {
    let sec = parseInt(input.value);
    if (!isNaN(sec) && sec >= 0) {
        let jours = Math.floor(sec / 86400);
        sec = sec % 86400;
        let heures = Math.floor(sec / 3600);
        sec = sec % 3600;
        let minutes = Math.floor(sec / 60);
        sec = sec % 60;
        let resultText = `Cette durée équivaut à ${jours} jours, ${heures} heures, ${minutes} minutes et ${sec} secondes`;
        alert(resultText);
    } else {
        alert("Veuillez entrer une valeur numérique valide et positive.");
    }
};

```
![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-26%20021814.png)

🔢 Exercise 3: Sorting Three Numbers
Objective
Sort three numbers in ascending order.
### Code

```javascript
button.onclick = function() {
    let nums = [];
    let valid = true;
    for (let i = 0; i < inputs.length; i++) {
        let val = parseFloat(inputs[i].value);
        if (isNaN(val)) {
            valid = false;
            break;
        }
        nums.push(val);
    }
    if (valid) {
        nums.sort((a, b) => a - b);
        alert(`Les nombres dans l'ordre croissant : ${nums.join(", ")}`);
    } else {
        alert("Veuillez entrer des valeurs numériques valides pour les trois nombres.");
    }
};

```
![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-26%20021836.png)

🔺 Exercise 4: Star Triangle
Objective
Display a star triangle pattern based on the given size.

### Code

```javascript
buttons[0].onclick = function() {
    let taille = parseInt(input.value);
    if (!isNaN(taille) && taille > 0) {
        let triangle = "";
        for (let ligne = 1; ligne <= taille; ligne++) {
            triangle += "*".repeat(ligne) + "\n";
        }
        alert(triangle);
    } else {
        alert("Veuillez entrer une taille valide (nombre entier positif).");
    }
};

```
![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-26%20021852.png)


🏔️ Exercise 4-bis: Star Pyramid
Objective
Display a star pyramid pattern based on the given size.

### Code

```
button.onclick = function() {
    let taille = parseInt(input.value);
    if (!isNaN(taille) && taille > 0) {
        let pyramide = "";
        for (let ligne = 0; ligne < taille; ligne++) {
            pyramide += " ".repeat(taille - ligne - 1) + "*".repeat(2 * ligne + 1) + "\n";
        }
        alert(pyramide);
    } else {
        alert("Veuillez entrer une taille valide (nombre entier positif).");
    }
};
```
![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-26%20021925.png)


✔️ Exercise 5: Prime Number Check
Objective
Check if a given number is a prime number.

### Code

```javascript
button.onclick = function() {
    let nombre = parseInt(input.value);
    if (!isNaN(nombre)) {
        if (nombre <= 1) {
            alert(`${nombre} n'est pas un nombre premier`);
            return;
        }
        let estPremier = true;
        for (let i = 2; i <= Math.sqrt(nombre); i++) {
            if (nombre % i === 0) {
                estPremier = false;
                break;
            }
        }
        if (estPremier) {
            alert(`${nombre} est un nombre premier`);
        } else {
            alert(`${nombre} n'est pas un nombre premier`);
        }
    } else {
        alert("Veuillez entrer une valeur numérique valide.");
    }
};

```
![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-26%20021925.png)

🌀 Exercise 6: Fibonacci Sequence
Objective
Calculate the nth term of the Fibonacci sequence or find the first term greater than a given value.

### Code

```javascript
buttons[0].onclick = function() {
    let n = parseInt(inputs[0].value);
    if (!isNaN(n) && n >= 0) {
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        alert(`Le terme de rang ${n} est ${b}`);
    } else {
        alert("Veuillez entrer un rang valide (nombre entier non négatif).");
    }
};

buttons[1].onclick = function() {
    let limite = parseInt(inputs[1].value);
    if (!isNaN(limite) && limite >= 0) {
        let a = 0, b = 1, rang = 1;
        while (b <= limite) {
            let c = a + b;
            a = b;
            b = c;
            rang++;
        }
        alert(`Le premier terme supérieur à ${limite} est ${b} (rang ${rang})`);
    } else {
        alert("Veuillez entrer une limite valide (nombre entier non négatif).");
    }
};

```
![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-26%20021946.png)

---

## 📏 **Exercise 7: Square Root Approximation**

### **Objective**
Calculate the approximate square root of a number using the Newton-Raphson method.

### **Code Explanation**
```javascript
button.onclick = function() {
    let A = parseFloat(input.value); // Get the input value and convert it to a float
    if (!isNaN(A) && A >= 1 && A <= 100) { // Check if the input is a valid number between 1 and 100
        let x = A / 2; // Initial guess
        let precision = 0.000001; // Desired precision
        while (Math.abs(x * x - A) > precision) { // Iterate until the desired precision is achieved
            x = 0.5 * (x + A / x); // Newton-Raphson formula
        }
        alert(`Valeur approchée de la racine carrée de ${A} = ${x}`); // Display the result
    } else {
        alert("Veuillez entrer un nombre A valide compris entre 1 et 100."); // Error message for invalid input
    }
};
```

### **How It Works**
1. The user enters a number between 1 and 100.
2. The program calculates the square root using the Newton-Raphson method.
3. The result is displayed in an alert box.

![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-26%20022020.png)

---
## 🏁 Conclusion

These JavaScript exercises offer a comprehensive way to practice fundamental programming concepts. By working through these challenges, you'll develop a stronger understanding of:

- Basic JavaScript syntax and operations
- Mathematical algorithms and their implementations
- Problem-solving approaches for common programming tasks
- Code organization and optimization techniques

Whether you're a student, hobbyist, or professional developer, mastering these exercises will strengthen your JavaScript foundation and prepare you for more advanced programming challenges.

## 🛠️ How to Use

1. **Clone the repository**
   ```bash
   git clone https://github.com/malakzaidi/web-technologies-tps.git
   cd web-technologies-tps
   ```

2. **Open the exercise files**
   - Each exercise is contained in its own HTML file
   - Open the files in your preferred web browser
   - Use the browser's developer console (F12) to see output and debug

3. **Modify and experiment**
   - Feel free to change parameters and code to see different results
   - Try implementing alternative solutions to the same problems
   - Use these exercises as templates for your own JavaScript practice

4. **Test your knowledge**
   - Try solving the exercises without looking at the provided solutions
   - Compare your approach with the given implementation
   - Challenge yourself to optimize or extend the existing solutions

## 🤝 Contributing

Contributions to improve these exercises or add new ones are welcome! Here's how you can contribute:

1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature/new-exercise`)
3. **Add your exercise** or make improvements to existing ones
4. **Commit your changes** (`git commit -m 'Add new exercise on arrays'`)
5. **Push to the branch** (`git push origin feature/new-exercise`)
6. **Open a Pull Request**

Please ensure your code follows the existing style and includes appropriate comments.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Malak Zaidi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
