# JavaScript Exercises and Solutions

## Table of Contents
1. [Introduction](#introduction)
2. [Temperature Conversion](#temperature-conversion)
3. [Time Conversion](#time-conversion)
4. [Sorting Three Numbers](#sorting-three-numbers)
5. [Star Triangle](#star-triangle)
6. [Star Pyramid](#star-pyramid)
7. [Prime Number Check](#prime-number-check)
8. [Conclusion](#conclusion)

---

## Introduction
This project offers several JavaScript exercises designed to explore various features of the language, including number manipulations, loops, conditions, and dynamic display on a web page.

Each exercise is accompanied by a detailed description, usage instructions, an explanation of the code, and space to include screenshots showcasing the results.

---

## 1. Temperature Conversion
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

## 2. Time Conversion
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

## 3. Sorting Three Numbers
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

## 4. Star Triangle
### Objective
Generate a star pattern in the shape of a triangle using loops.

### Code Explanation

```javascript
let size = parseInt(sections[4].children[1].value);
let result = '';
for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}
alert(result);
```

### Result
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181811.png)

---

## 5. Star Pyramid
### Objective
Display a centered star pyramid.

### Code Explanation

```javascript
let size = parseInt(sections[5].children[1].value);
let result = '';
for (let i = 0; i < size; i++) {
    let space = ' '.repeat(size - i - 1);
    let stars = '*'.repeat(2 * i + 1);
    result += space + stars + '\n';
}
alert(result);
```

### Result
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181832.png)

---

## 6. Prime Number Check
### Objective
Check if a given number is a prime number.

### Code Explanation

```javascript
let number = parseInt(sections[6].children[1].value);
let isPrime = true;
for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}
alert(isPrime ? `${number} is a prime number` : `${number} is not a prime number`);
```

### Result
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181851.png)

---

## Conclusion
This project demonstrates fundamental JavaScript concepts through interactive exercises. You can test and modify the code to better understand its functionality. Screenshots illustrate the results obtained for each exercise.

---

### Example Screenshot
![Screenshot](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181532.png)

