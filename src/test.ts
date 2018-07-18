console.log('This file has purposeful errors to confirm tool is working');

const myFirstName: string = 'Michael'
const myLastName: string = 'Erickson'

class Person {
  public firstName: string
  public lastName: string

  constructor(firstName: string = '', lastName: string = '') {
    this.firstName = firstName
    this.lastName = lastName
  }

  public greet() {
    return "Hello, " + this.firstName
  }

  public salutation() {
    return "Hello Mr. " + this.lastName
  }

}

let mike = new Person("Mike", "Erickson")
console.log(mike.greet())
console.log(mike.salutation())
