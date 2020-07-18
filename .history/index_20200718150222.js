class Cat {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }
  speak() {
    return `${name} says meow!`
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }
  speak() {
    return `${name} says woof!`
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }
  speak() {
    this.sex === "Male" ? `It's me! ${name}, the parrot!` : `${name} says squawk!`
  }
}