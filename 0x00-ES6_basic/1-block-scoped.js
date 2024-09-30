export default function taskBlock(trueOrFalse) {
  /* Declaring task with const because the value doesn't need to change */
  const task = false;
  
  /* Declaring task2 with const for the same reason as task */
  const task2 = true;

  /* Checking the value of trueOrFalse */
  if (trueOrFalse) {
    /* Using let for task to ensure it's block-scoped and doesn't overwrite the outer task */
    const task = true;
    
    /* Using let for task2 to ensure it's block-scoped and doesn't overwrite the outer task2 */
    const task2 = false;
  }

  /* Returning the outer task and task2 values */
  return [task, task2];
}
