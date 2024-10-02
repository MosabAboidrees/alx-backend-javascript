/* Define and export the function signUpUser */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
