type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const vU: VerifyUserFn = (user, sentValue) => {
  return user.username === sentValue.username;
}
