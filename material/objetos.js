let animal = {}

animal.type = 'cachorro'
animal.name = 'Lucky'
animal['can I have'] = true

animal.eat = function eat() {
    console.log(`O ${this.type} chamado ${this.name} está comendo muito`)
}

animal.eat()