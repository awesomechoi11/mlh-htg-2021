import faker from 'faker'

function between(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

export default function run() {
    console.log(faker.helpers.createCard())
    console.log({
        rating: between(1, 5),
        comment: 'lorem',
        name: faker.name.findName(),
        date: '123'
    })

}