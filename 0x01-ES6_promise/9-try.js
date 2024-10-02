/* Define and export the guardrail function */
export default function guardrail(mathFunction) {
  /* Initialize the queue array */
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(String(err));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
