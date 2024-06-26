import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoValue, userValue]) => {
      console.log(`${photoValue.body} ${userValue.firstName} ${userValue.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
