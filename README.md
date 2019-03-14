# Love triangles

## History
Spichonees (made-up name) live in country Spichland where are no gender. Spichonees are big lovers, so each Spichonee loves any another Spichonee. Unfortunately there are sometimes situations, when Spichonee A loves Spichonee B, Spichonee B loves Spichonee C and Spichonee C loves Spichonee A. This phenomenon is called *Love triangle*.

## Task
Your task is to implement function `getLoveTrianglesCount` which calculates how many *love triangles phenomenons* take place. The function takes the array of integers as the only parameter. An integer `k` on `n`th place means, that `n`th Spichonee loves `k`th Spichonee.

For example:
```js
                                  // 1  2  3  Spichonees
  let count = getLoveTrianglesCount([2, 3, 1]);
  console.log(count); // 1
  /**
    1st Spichonee loves 2nd Spichonee.
    2nd Spichonee loves 3rd Spichonee.
    3rd Spichonee love 1st Spichonee.
    There is love triangle.
  */
```

Write your code in `src/index.js.
*Be sure, that all tests are positive. That means you cannot catch any error in tests.*


## Prepare and test

- Install [Node.js](https://nodejs.org/en/)
- Clone this repository: `git clone https://github.com/SIARHEI-SMANTSAR/love-triangle.git`
- Go to folder `love-triangle`
- Run `npm install` in command line
- Run `npm test` in command line
- You will see the number of passing and failing tests
