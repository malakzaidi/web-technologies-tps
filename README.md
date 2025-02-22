# JavaScript Exercises and Solutions

## Table of Contents
1. [Introduction](#introduction)
2. [Temperature Conversion](#temperature-conversion)
3. [Time Conversion](#time-conversion)
4. [Sorting Three Numbers](#sorting-three-numbers)
5. [Star Triangle](#star-triangle)
6. [Star Pyramid](#star-pyramid)
7. [Prime Number Check](#prime-number-check)
8. [Factorial Calculation](#factorial-calculation)
9. [Fibonacci Sequence](#fibonacci-sequence)
10. [Conclusion](#conclusion)

---

## Introduction
This project offers several JavaScript exercises designed to explore various features of the language, including number manipulations, loops, conditions, and dynamic display on a web page.

Each exercise is accompanied by a detailed description, usage instructions, an explanation of the code, and space to include screenshots showcasing the results.

---

## Temperature Conversion
### Objective
Convert a given temperature from Fahrenheit to Celsius using the formula:
\[ T(\degree C) = \frac{5}{9} \times (T(\degree F) - 32) \]

### Usage Instructions
1. Enter a value in Fahrenheit in the input field.
2. Click the **Convert** button.
3. The converted temperature in Celsius will be displayed below.

### Code Explanation
The JavaScript code retrieves the input value in Fahrenheit, applies the conversion formula, and displays the result:

```javascript
let tempF = parseFloat(sections[1].children[1].value);
let tempC = (5 / 9) * (tempF - 32);
alert(`This temperature is equivalent to ${tempC.toFixed(1)}°C`);
```

### Result
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181655.png)

---

## Time Conversion
### Objective
Convert a duration expressed in seconds into days, hours, minutes, and seconds.

### Usage Instructions
1. Enter a duration in seconds.
2. Click **Convert**.
3. The result is displayed in a readable format.

### Code Explanation

```javascript
let sec = parseInt(sections[2].children[1].value);
let days = Math.floor(sec / 86400);
sec %= 86400;
let hours = Math.floor(sec / 3600);
sec %= 3600;
let minutes = Math.floor(sec / 60);
sec %= 60;

let result = [];
if (days) result.push(`${days} day(s)`);
if (hours) result.push(`${hours} hour(s)`);
if (minutes) result.push(`${minutes} minute(s)`);
if (sec) result.push(`${sec} second(s)`);

alert(`This duration is equivalent to: ${result.join(' ')}`);
```

### Result
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181716.png)

---

## Sorting Three Numbers
### Objective
Enter three numbers and display them in ascending order.

### Code Explanation

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

alert(`Ascending order: ${nums.join(' ')}`);
```

### Result
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181751.png)

---

## Factorial Calculation
### Objective
Compute the factorial of a given number.

### Code Explanation

```javascript
let num = parseInt(sections[7].children[1].value);
let factorial = 1;
for (let i = 2; i <= num; i++) {
    factorial *= i;
}
alert(`The factorial of ${num} is ${factorial}`);
```

### Result
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181851.png)

---

## Fibonacci Sequence
### Objective
Generate the Fibonacci sequence up to a given number of terms.

### Code Explanation

```javascript
let n = parseInt(sections[8].children[1].value);
let fib = [0, 1];
for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
}
alert(`Fibonacci sequence: ${fib.join(', ')}`);
```

### Result
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181851.png)

---

## Conclusion
This project demonstrates fundamental JavaScript concepts through interactive exercises. You can test and modify the code to better understand its functionality. Screenshots illustrate the results obtained for each exercise.

---

### Example Screenshot
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20192546.png)

