# JavaScript Exercises and Solutions

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

## Star Pyramid
### Objective
Display a pyramid of stars based on user input for the number of rows.

### Code Explanation

```javascript
let rows = parseInt(sections[6].children[1].value);
let pyramid = '';
for (let i = 1; i <= rows; i++) {
    pyramid += ' '.repeat(rows - i) + '*'.repeat(2 * i - 1) + '\n';
}
alert(pyramid);
```

### Result
For `rows = 5`, the output will be:
```
    *
   ***
  *****
 *******
*********
```

### Screenshot
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20192546.png)

---

## Fibonacci Sequence
### Objective
Compute the nth term of the Fibonacci sequence and find the first term greater than a given limit.

### Code Explanation
#### Finding the nth Term
```javascript
let n = parseInt(sections[7].children[1].value);
let a = 0, b = 1, c;
if (n === 0) {
    alert(`Le terme de rang ${n} est ${a}`);
    return;
}
for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
}
alert(`Le terme de rang ${n} est ${b}`);
```
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20192937.png)

#### Finding the First Term Greater than a Given Limit
```javascript
let limite = parseInt(sections[7].children[3].value);
let a = 0, b = 1, c;
let rang = 1;
while (b <= limite) {
    c = a + b;
    a = b;
    b = c;
    rang++;
}
alert(`Le premier terme supérieur à ${limite} est ${b} (rang ${rang})`);
```
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20193001.png)

---

#### Square Root Approximation
How It Works
Retrieve the user input

sections[8].children[1].value: Gets the input value from the user.
parseFloat(...): Converts the value to a floating-point number.
Validate the input

The function ensures A is between 1 and 100.
If A is out of range, it displays an alert and stops execution.
Initialize variables

x = A / 2: The initial guess for the square root is set to A / 2.
precision = 1e-6: This sets a very small threshold (0.000001) to determine when to stop iterating.
Newton-Raphson Iteration

The algorithm refines the guess x using the formula:
𝑥
new
=
1
2
(
𝑥
+
𝐴
𝑥
)
x 
new
​
 = 
2
1
​
 (x+ 
x
A
​
 )
The process repeats until the difference between x² and A is smaller than 1e-6.
Display the result

Once the condition is met, the computed approximate square root is displayed in an alert.
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20193001.png)

## Conclusion
This project demonstrates fundamental JavaScript concepts through interactive exercises. You can test and modify the code to better understand its functionality. Screenshots illustrate the results obtained for each exercise.

---

### Example Screenshot
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20192546.png)

