export interface UserWithInterface {
  name: string;
  age: number;
  email: string;
  address?: UserAddress;
}
type UserAddress = {
  city: string;
  country: string;
};
//obj
export const mango: UserWithInterface = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

export const poly: UserWithInterface = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
export function createUserData(data: UserWithInterface): UserWithInterface {
  return data;
}
// console.log(createUserData(mango));
