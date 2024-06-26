import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoValue, userValue]) => {
      const photo = Object.values(photoValue)[1];
      const user = Object.values(userValue).join(' ');
      console.log(photo, user)
    })
    .catch(() => console.log('Signup system offline'));
}
