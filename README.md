# JavaScript Exercises and Solutions

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
The JavaScript code retrieves the input value in Fahrenheit, applies the conversion formula, and displays the result. Here is the code used:

```javascript
let tempF = parseFloat(sections[1].children[1].value); // Retrieves the value in Fahrenheit
let tempC = (5 / 9) * (tempF - 32); // Applies the conversion formula
alert(`This temperature is equivalent to ${tempC.toFixed(1)}°C`); // Displays the result
```

### Result
Insert a screenshot here showing the conversion of a temperature from Fahrenheit to Celsius.
![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181532.png)

---

## 2. Time Conversion
### Objective
Convert a duration expressed in seconds into days, hours, minutes, and seconds.

### Usage Instructions
1. Enter a duration in seconds.
2. Click **Convert**.
3. The result is displayed in a readable format (e.g., "1 day(s) 3 hour(s) 25 minute(s) 10 second(s)").

### Code Explanation
The code breaks down the duration in seconds into days, hours, minutes, and seconds using division and modulo operations:

```javascript
let sec = parseInt(sections[2].children[1].value); // Retrieves the duration in seconds
let days = Math.floor(sec / 86400); // Converts to days
sec %= 86400;
let hours = Math.floor(sec / 3600); // Converts to hours
sec %= 3600;
let minutes = Math.floor(sec / 60); // Converts to minutes
sec %= 60;

let result = [];
if (days) result.push(`${days} day(s)`);
if (hours) result.push(`${hours} hour(s)`);
if (minutes) result.push(`${minutes} minute(s)`);
if (sec) result.push(`${sec} second(s)`);

alert(`This duration is equivalent to: ${result.join(' ')}`); // Displays the result
```

### Result
Insert a screenshot here showing the conversion of a duration in seconds.
![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181532.png)

---

## 3. Sorting Three Numbers
### Objective
Enter three numbers and display them in ascending order.

### Usage Instructions
1. Enter three numbers in the designated fields.
2. Click **Sort**.
3. The program sorts and displays the numbers in ascending order.

### Code Explanation
The code uses a bubble sort algorithm to sort the three numbers:

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

alert(`Ascending order: ${nums.join(' ')}`); // Displays the sorted numbers
```

### Result
Insert a screenshot here showing three numbers sorted in ascending order.
![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181532.png)

---

## 4. Star Triangle
### Objective
Generate a star pattern in the shape of a triangle using **while** and **for** loops.

### Usage Instructions
1. Enter a size for the triangle.
2. Click **Triangle (while)** or **Triangle (for)** to display the corresponding pattern.

### Code Explanation
The code generates a star triangle using nested loops:

```javascript
let size = parseInt(sections[4].children[1].value);
let result = '';
for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}
alert(result); // Displays the triangle
```

### Result
Insert a screenshot here showing a generated star triangle.
![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181532.png)

---

## 4-bis. Star Pyramid
### Objective
Display a centered star pyramid.

### Usage Instructions
1. Enter the size of the pyramid.
2. Click **Display Pyramid**.
3. The pyramid is displayed using spaces and stars.

### Code Explanation
The code generates a pyramid by adding spaces and stars symmetrically:

```javascript
let size = parseInt(sections[5].children[1].value);
let result = '';
for (let i = 0; i < size; i++) {
    let space = ' '.repeat(size - i - 1);
    let stars = '*'.repeat(2 * i + 1);
    result += space + stars + '\n';
}
alert(result); // Displays the pyramid
```

### Result
Insert a screenshot here showing a star pyramid.
![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181532.png)

---

## 5. Prime Number Check
### Objective
Check if a given number is a prime number.

### Usage Instructions
1. Enter an integer.
2. Click **Test**.
3. The program checks if the number is prime and displays the result.

### Code Explanation
The code checks if a number is prime by testing its divisors:

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
Insert a screenshot here showing the verification of a prime number.
 ![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181532.png)
 
---

## Conclusion
This project demonstrates fundamental JavaScript concepts through interactive exercises. You can test and modify the code to better understand its functionality. Screenshots illustrate the results obtained for each exercise.

---

### Example Screenshot
![image_alt](https://github.com/malakzaidi/web-technologies-tps/blob/main/screenshots/Screenshot%202025-02-22%20181532.png)
