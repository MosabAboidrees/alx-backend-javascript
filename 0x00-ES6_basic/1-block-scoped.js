// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  /* Declaring task with const because the value doesn't need to change */
  const task = false;

  /* Declaring task2 with const for the same reason as task */
  const task2 = true;

  /* Checking the value of trueOrFalse */
  if (trueOrFalse) {
    /* Using let for task to ensure it's block-scoped and doesn't overwrite the outer task */
    let task = true;

    /* Using let for task2 to ensure it's block-scoped and doesn't overwrite the outer task2 */
    let task2 = false;

    /* Avoiding unused block-scoped variables */
    console.log(task, task2); // Log the block-scoped variables to prevent unused errors
  }

  /* Returning the outer task and task2 values */
  return [task, task2];
}
