type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
const userValue: User = {
  name: "",
  surname: "",
  email: "",
  password: "",
};
function createOrUpdateUser(
  userValue: User,
  initialValues: Partial<User>
): User {
  // Оновлення користувача
  return { ...userValue, ...initialValues };
}

createOrUpdateUser(userValue, {
  email: "user@mail.com",
  password: "password123",
});
