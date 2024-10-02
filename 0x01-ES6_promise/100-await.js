/* Import the required functions from utils.js */
import { uploadPhoto, createUser } from './utils';

/* Define and export the async function asyncUploadUser */
export default async function asyncUploadUser() {
  let res = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    res = { photo, user };
  } catch (err) {
    res = { photo: null, user: null };
  }
  return res;
}
