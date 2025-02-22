# JavaScript Conversion, Sorting, and Sequence Application

This project demonstrates various useful JavaScript functions, including temperature conversion, time conversion, number sorting, star pyramid generation, and Fibonacci sequence calculation. Each function is implemented in JavaScript and interacts with a simple HTML interface. This README provides detailed explanations for each code snippet and instructions on how to use the application.

## Table of Contents

1. [Introduction](#introduction)
2. [Temperature Conversion](#temperature-conversion)
3. [Time Conversion](#time-conversion)
4. [Sorting Three Numbers](#sorting-three-numbers)
5. [Star Triangle](#star-triangle)
6. [Star Pyramid](#star-pyramid)
7. [Prime Number Check](#prime-number-check)
8. [Fibonacci Sequence](#fibonacci-sequence)
9. [Square Root Approximation](#square-root-approximation)
10. [Conclusion](#conclusion)

---
## Introduction
This project offers several JavaScript exercises designed to explore various features of the language, including number manipulations, loops, conditions, and dynamic display on a web page.

Each exercise is accompanied by a detailed description, usage instructions, an explanation of the code, and screenshots showcasing the results.
---

## Temperature Conversion

### Description:
This project converts a temperature from Fahrenheit to Celsius using the formula:
\[
T(\degree C) = \frac{5}{9} \times (T(\degree F) - 32)
\]

### How It Works:
1. **Retrieve the user input**: The user enters the temperature in Fahrenheit, which is retrieved using JavaScript.
    ```javascript
    let tempF = parseFloat(sections[1].children[1].value);
    ```
2. **Formula application**: The input is converted into Celsius using the formula:
    ```javascript
    let tempC = (5 / 9) * (tempF - 32);
    ```
3. **Display the result**: The calculated Celsius temperature is shown in an alert.
    ```javascript
    alert(`This temperature is equivalent to ${tempC.toFixed(1)}°C`);
    ```

### Screenshot:
![Temperature Conversion Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20192913.png)

---

## Time Conversion

### Description:
This project converts a time duration in seconds into days, hours, minutes, and remaining seconds.

### How It Works:
1. **Retrieve the user input**: The input (in seconds) is taken and converted to an integer.
    ```javascript
    let sec = parseInt(sections[2].children[1].value);
    ```
2. **Perform the conversion**:
    - First, we convert seconds into days by dividing by 86400.
    - Then, we convert the remaining seconds into hours, minutes, and the leftover seconds.
    ```javascript
    let days = Math.floor(sec / 86400);
    sec %= 86400;
    let hours = Math.floor(sec / 3600);
    sec %= 3600;
    let minutes = Math.floor(sec / 60);
    sec %= 60;
    ```
3. **Display the result**: The result is displayed as a string in the form of days, hours, minutes, and seconds.
    ```javascript
    alert(`This duration is equivalent to: ${result.join(' ')}`);
    ```

### Screenshot:
![Time Conversion Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20193001.png)

---

## Sorting Three Numbers

### Description:
This program sorts three numbers entered by the user in ascending order.

### How It Works:
1. **Retrieve the input**: The three numbers are obtained from the user and stored in an array.
    ```javascript
    let nums = [
        parseFloat(sections[3].children[1].value),
        parseFloat(sections[3].children[2].value),
        parseFloat(sections[3].children[3].value)
    ];
    ```
2. **Sort the numbers**: A nested loop is used to compare each number and swap them if necessary.
    ```javascript
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    ```
3. **Display the result**: The sorted numbers are displayed in ascending order.
    ```javascript
    alert(`Ascending order: ${nums.join(' ')}`);
    ```

### Screenshot:
![Sorting Numbers Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20193012.png)

---

## Star Pyramid

### Description:
This project generates a star pyramid pattern based on the number of rows input by the user.

### How It Works:
1. **Retrieve the user input**: The number of rows for the pyramid is taken from the input.
    ```javascript
    let rows = parseInt(sections[6].children[1].value);
    ```
2. **Generate the pyramid**: A loop iterates to build the pyramid, calculating the number of spaces and stars for each row.
    ```javascript
    pyramid += ' '.repeat(rows - i) + '*'.repeat(2 * i - 1) + '\n';
    ```
3. **Display the result**: The star pyramid is displayed in an alert.
    ```javascript
    alert(pyramid);
    ```

### Screenshot:
![Star Pyramid Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20193025.png)

---

## Fibonacci Sequence

### Description:
This program calculates the Fibonacci sequence and displays either the nth term or the first Fibonacci number greater than a given limit.

### Finding the nth Fibonacci Term:
1. **Retrieve the input**: The nth term of the Fibonacci sequence is retrieved.
    ```javascript
    let n = parseInt(sections[7].children[1].value);
    ```
2. **Calculate the nth term**: The Fibonacci sequence is calculated using two variables `a` and `b`, which store the previous two terms.
    ```javascript
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    ```
3. **Display the result**: The nth term is displayed in an alert.
    ```javascript
    alert(`Le terme de rang ${n} est ${b}`);
    ```

### Finding the First Fibonacci Term Greater Than a Limit:
1. **Retrieve the input**: The limit is retrieved from the input field.
    ```javascript
    let limite = parseInt(sections[7].children[3].value);
    ```
2. **Calculate the first term greater than the limit**: A while loop checks each Fibonacci number until one greater than the limit is found.
    ```javascript
    while (b <= limite) {
        c = a + b;
        a = b;
        b = c;
        rang++;
    }
    ```
3. **Display the result**: The first Fibonacci number greater than the limit is displayed along with its rank.
    ```javascript
    alert(`Le premier terme supérieur à ${limite} est ${b} (rang ${rang})`);
    ```

### Screenshot:
![Fibonacci Sequence Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20193032.png)

---

## Square Root Approximation

### Description:
This program approximates the square root of a number using the Newton-Raphson method.

### How It Works:
1. **Retrieve the user input**: The number for which the square root is to be calculated is retrieved.
    ```javascript
    let A = parseFloat(sections[8].children[1].value);
    ```
2. **Input validation**: Ensures that the input is between 1 and 100. If it's out of range, the program stops and alerts the user.
    ```javascript
    if (A < 1 || A > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }
    ```
3. **Initial guess**: The initial guess for the square root is set to half of the number.
    ```javascript
    let x = A / 2;
    let precision = 1e-6;
    ```
4. **Newton-Raphson Iteration**: The approximation is refined using the Newton-Raphson formula.
    ```javascript
    let x_new = 0.5 * (x + A / x);
    ```
5. **Display the result**: The result is displayed when the approximation is accurate to within the specified precision.
    ```javascript
    alert(`The approximate square root of ${A} is ${x.toFixed(6)}`);
    ```

### Screenshot:
![Square Root Approximation Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20193038.png)

---

## Conclusion

This repository provides simple but effective examples of how core concepts in web technologies can be implemented using JavaScript. It includes practical applications such as conversions, sorting algorithms, Fibonacci sequences, and numerical approximations. Each section is designed to demonstrate key concepts in programming and algorithmic thinking, making it a useful resource for both beginners and experienced developers.
