import { faker } from "@faker-js/faker";

export function generateUserData(){
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let data = {
        firstName: firstName,
        lastName: lastName,
        password: faker.internet.password(),
        phone:faker.phone.number(),
        email: faker.internet.email(firstName,lastName,'test.com'),
    };
    return data;
}