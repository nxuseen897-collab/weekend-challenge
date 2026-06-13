# JavaScript Functions – Assignment

## Overview

In this assignment you will practise writing JavaScript functions using different syntax styles and control flow structures. All your code must live in **a single JavaScript file** called `script.js`.

By the end of this assignment you should be comfortable:

- Defining functions using both the `function` keyword and **arrow function** syntax
- Working with `switch` statements for branching logic
- Using a `while` loop to repeat an action
- Using a `do...while` loop to guarantee at least one execution

---

## Requirements

### 1. `add7` — Add Seven to a Number

Write a function called `add7` that accepts **one number** as an argument and returns that number plus 7.

```js
add7(10); // returns 17
add7(3);  // returns 10
```

> **Requirement:** Write this function using **arrow function** syntax.

---


### 2. Grade Checker — `switch` Statement

Write a function called `getGradeScore` that accepts a **letter grade** as a string and returns the corresponding numeric score. Use a **`switch` statement** inside the function.

| Grade | Score |
|-------|-------|
| `"A"` | 80    |
| `"B"` | 70    |
| `"C"` | 60    |
| `"D"` | 50    |
| `"E"` | 40    |

```js
getGradeScore("A"); // returns 80
getGradeScore("C"); // returns 60
```

> Add a `default` case that returns `"Invalid grade"` for any input that doesn't match the table above.

---

### 3. Countdown — `while` Loop

Write a function called `countdown` that accepts a number `n` and uses a **`while` loop** to log every integer counting down from `n` to `1`.

```js
countdown(5);
// logs:
// 5
// 4
// 3
// 2
// 1
```

---

### 5. Secret Finder — `do...while` Loop

Write a function called `findSecret` that uses a **`do...while` loop** to count from `0` to `20`. On each number, log it to the console. When the loop reaches the secret number (hardcode `13` inside your function), log `"Found the secret number: 13"` instead and stop the loop.

```js
findSecret();
// logs:
// 0
// 1
// 2
// ...
// 12
// Found the secret number: 13
```

---

## Testing Your Work

After writing each function, call it at the bottom of your file and log the result so you can verify it in the browser console 

```js
console.log(add7(10));             // 17       
console.log(getGradeScore("A"));   // 80
countdown(5);                      // logs 5 down to 1
findSecret();                      // logs 0 to 12 then "Found the secret number: 13"
```

Open your browser's DevTools console to check that every output is correct before submitting.

---

## Submission Instructions

### 1. Fork the Repository

Click the **Fork** button at the top-right of the assignment repository on GitHub. This creates your own personal copy of the repo.

### 2. Clone Your Fork

Copy the URL of **your fork** (not the original), then run:

```bash
git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
```

Open the cloned folder in your code editor.

### 3. Do Your Work

Do your workn on the `script.js` inside the project folder and write all five functions there.

### 4. Commit and Push

Once you are done, stage, commit, and push your changes:

```bash
git add script.js
git commit -m "Complete JavaScript functions assignment"
git push origin main
```

### 5. Submit Your Link

Paste the link to **your fork** (e.g. `https://github.com/YOUR-USERNAME/REPO-NAME`)  share it with your instructor.

---

## Checklist

Before submitting, confirm that your `script.js`:

- [ ] Contains the `add7` function written as an **arrow function**

- [ ] Contains the `getGradeScore` function using a **`switch` statement** with a `default` case
- [ ] Contains the `countdown` function using a **`while` loop**
- [ ] Contains the `findSecret` function using a **`do...while` loop**
- [ ] Has `console.log` calls at the bottom that test every function
- [ ] Has been pushed to GitHub and the link is submitted

---

Good luck! If you get stuck, re-read the relevant section in your notes or ask during the next session.