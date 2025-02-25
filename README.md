# Web Technologies Exercises

This repository contains a series of exercises focused on JavaScript and web development. Each exercise is designed to help you understand different aspects of web technologies, from basic JavaScript functionalities to more advanced concepts like event handling and DOM manipulation.

## Exercises Overview

### Exercise 1: Permutation
**Objective:** Create a form with two text fields and a button. When the button is clicked, the contents of the two text fields should be swapped.

**Code Explanation:**
- The HTML structure includes two text input fields and a button.
- JavaScript is used to handle the button click event. When the button is clicked, the values of the two text fields are swapped using a temporary variable.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 1 - Permutation</title>
    <style>
        /* CSS */
    </style>
</head>
<body>
    <h1>Permutation de deux zones de texte</h1>
    <div class="form-group">
        <label for="texte1">Zone de texte 1:</label>
        <input type="text" id="texte1" placeholder="Entrez du texte ici">
    </div>
    <div class="form-group">
        <label for="texte2">Zone de texte 2:</label>
        <input type="text" id="texte2" placeholder="Entrez du texte ici">
    </div>
    <button id="permuter">Permuter les textes</button>
    <script>
        const boutonPermuter = document.getElementById('permuter');
        const texte1 = document.getElementById('texte1');
        const texte2 = document.getElementById('texte2');
        
        boutonPermuter.addEventListener('click', function() {
            const temp = texte1.value;
            texte1.value = texte2.value;
            texte2.value = temp;
        });
    </script>
</body>
</html>
```

**Visual Demonstration:**

*Before Permutation:*
<img src="/api/placeholder/600/300" alt="Screenshot showing the form before permutation with sample text entered in both fields" />

*After Permutation:*
<img src="/api/placeholder/600/300" alt="Screenshot showing the form after clicking the button, with the text values swapped between fields" />

### Exercise 2: Simple Calculator
**Objective:** Create a simple calculator that can perform basic arithmetic operations: addition, subtraction, multiplication, and division.

**Code Explanation:**
- The HTML structure includes two input fields for numbers, a set of operation buttons, and a result field.
- JavaScript handles the button click events and performs the corresponding arithmetic operation on the input values.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 2 - Calculatrice Simple</title>
    <style>
        /* CSS */
    </style>
</head>
<body>
    <h1>Calculatrice Simple</h1>
    <div class="calculatrice">
        <div class="form-group">
            <label for="nombre1">Nombre 1:</label>
            <input type="number" id="nombre1">
        </div>
        <div class="form-group">
            <label for="nombre2">Nombre 2:</label>
            <input type="number" id="nombre2">
        </div>
        <div class="buttons">
            <button id="addition">+</button>
            <button id="soustraction">-</button>
            <button id="multiplication">×</button>
            <button id="division">÷</button>
        </div>
        <div class="form-group">
            <label for="resultat">Résultat:</label>
            <input type="number" id="resultat" readonly>
        </div>
    </div>
    <script>
        const nombre1 = document.getElementById('nombre1');
        const nombre2 = document.getElementById('nombre2');
        const resultat = document.getElementById('resultat');

        const btnAddition = document.getElementById('addition');
        const btnSoustraction = document.getElementById('soustraction');
        const btnMultiplication = document.getElementById('multiplication');
        const btnDivision = document.getElementById('division');
        
        function getValues() {
            const val1 = parseFloat(nombre1.value);
            const val2 = parseFloat(nombre2.value);
            
            if (isNaN(val1) || isNaN(val2)) {
                alert("Veuillez entrer des nombres valides");
                return null;
            }
            
            return { val1, val2 };
        }
 
        btnAddition.addEventListener('click', function() {
            const values = getValues();
            if (values) {
                resultat.value = values.val1 + values.val2;
            }
        });
        
        btnSoustraction.addEventListener('click', function() {
            const values = getValues();
            if (values) {
                resultat.value = values.val1 - values.val2;
            }
        });
        
        btnMultiplication.addEventListener('click', function() {
            const values = getValues();
            if (values) {
                resultat.value = values.val1 * values.val2;
            }
        });
        
        btnDivision.addEventListener('click', function() {
            const values = getValues();
            if (values) {
                if (values.val2 === 0) {
                    alert("Division par zéro impossible");
                    return;
                }
                resultat.value = values.val1 / values.val2;
            }
        });
    </script>
</body>
</html>
```

**Visual Demonstration:**
<img src="/api/placeholder/600/300" alt="Screenshot showing the simple calculator with sample calculation result" />

### Exercise 3: BMI Calculator
**Objective:** Develop a BMI (Body Mass Index) calculator that calculates the BMI based on user input for weight and height.

**Code Explanation:**
- The HTML structure includes input fields for weight and height, a calculate button, and a result display area.
- JavaScript calculates the BMI using the formula `BMI = weight / (height * height)` and provides an interpretation of the BMI value.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculateur d'IMC</title>
    <style>
        /* CSS */
    </style>
</head>
<body>
    <div class="calculateur">
        <h1>Calculateur d'IMC</h1>
        <div class="form-group">
            <label for="poids">Poids (kg):</label>
            <input type="number" id="poids" placeholder="76" min="1" max="300" step="0.1">
        </div>
        <div class="form-group">
            <label for="taille">Taille (m):</label>
            <input type="number" id="taille" placeholder="1.45" min="0.5" max="2.5" step="0.01">
        </div>
        <button id="calculer">Calculer mon IMC</button>
        <div id="resultat"></div>
    </div>
    <script>
        document.getElementById('calculer').addEventListener('click', function() {
            const poids = parseFloat(document.getElementById('poids').value);
            const taille = parseFloat(document.getElementById('taille').value);

            if (isNaN(poids) || isNaN(taille) || poids <= 0 || taille <= 0) {
                document.getElementById('resultat').innerHTML = 'Veuillez entrer des valeurs valides.';
                return;
            }
 
            const imc = poids / (taille * taille);

            let interpretation = '';
            if (imc < 18.5) {
                interpretation = 'insuffisance pondérale';
            } else if (imc < 25) {
                interpretation = 'corpulence normale';
            } else if (imc < 30) {
                interpretation = 'surpoids';
            } else if (imc < 35) {
                interpretation = 'obésité modérée';
            } else if (imc < 40) {
                interpretation = 'obésité sévère';
            } else {
                interpretation = 'obésité morbide ou massive';
            }

            document.getElementById('resultat').innerHTML = 
                `Votre IMC est de ${imc.toFixed(2)}. Vous êtes en état d'${interpretation}.`;
        });
    </script>
</body>
</html>
```

**Visual Demonstration:**
<img src="/api/placeholder/600/300" alt="Screenshot showing the BMI calculator with sample input and result" />

### Exercise 4: Advanced Calculator
**Objective:** Develop a scientific calculator that can perform advanced mathematical operations such as square root, exponentiation, trigonometric functions, and logarithms.

**Code Explanation:**
- The calculator features a clean and intuitive user interface with a display screen and a grid of operation buttons.
- It implements a wide range of mathematical functions including:
  - Basic arithmetic operations (addition, subtraction, multiplication, division)
  - Trigonometric functions (sin, cos, tan)
  - Logarithmic functions (ln, log10)
  - Power functions (square, power, square root)
  - Constants (e)
  - Special operations (factorial, percentage, inverse)
- Error handling is implemented for invalid operations (division by zero, negative square root, etc.)
- The calculator evaluates expressions using JavaScript's eval() function with proper input sanitization.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculatrice Scientifique</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
            font-family: Arial, sans-serif;
        }
        
        .calculator {
            width: 500px;
            border: 1px solid #ccc;
            padding: 15px;
            background-color: #fff;
        }
        
        .display {
            width: 100%;
            height: 40px;
            margin-bottom: 15px;
            padding: 5px;
            font-size: 20px;
            text-align: right;
            background-color: #f0f0f0;
            border: 1px solid #ddd;
            box-sizing: border-box;
        }
        
        .buttons {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            grid-gap: 5px;
        }
        
        button {
            padding: 10px 5px;
            font-size: 16px;
            background-color: #909090;
            color: white;
            border: none;
            cursor: pointer;
        }
        
        button:hover {
            background-color: #777;
        }
    </style>
</head>
<body>
    <!-- Calculator HTML structure -->
</body>
</html>
```

**Key Features:**
1. **Modern Grid Layout** - The calculator uses CSS Grid for a responsive button layout
2. **Comprehensive Functions** - Covers all essential scientific calculator operations
3. **Error Handling** - Gracefully handles mathematical errors with user-friendly messages
4. **Expression Evaluation** - Can evaluate complex mathematical expressions
5. **Real-time Display** - Updates the display as users input their calculations

**Visual Demonstration:**
<img src="/api/placeholder/600/400" alt="Screenshot showing the scientific calculator with complex calculation result" />

**Functionality Highlights:**
- **Memory Functions:** Store and recall calculation results
- **Scientific Operations:** Performs advanced mathematical functions
- **Error Prevention:** Validates input to prevent invalid operations
- **Visual Feedback:** Provides clear visual feedback for user actions

**Implementation Notes:**
The calculator implements a robust evaluation system that handles various edge cases such as:
- Division by zero
- Negative values for logarithms
- Non-integer values for factorial operations
- Parsing of complex expressions with multiple operations

## Conclusion
These exercises cover a range of JavaScript functionalities and web development techniques. By completing these exercises, you will gain a solid understanding of how to manipulate the DOM, handle events, and perform calculations using JavaScript. The progression from simple operations (text permutation) to complex applications (scientific calculator) provides a comprehensive learning path for mastering frontend web development concepts.
