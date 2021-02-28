import faker from 'faker'
import { firestore } from './firebase'

function between(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

function run() {
    var batch = firestore.batch();

    for (var i = 0; i < 50; i++) {
        let docRef = firestore.collection('hackathonstuff/mlhhtg2021/reviews').doc()
        batch.set(docRef, {
            rating: between(3, 6),
            comment: faker.lorem.paragraph(),
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
            date: faker.date.past().toLocaleString()
        })

    }
    batch.commit().then(() => {
        console.log('done!')
    }).catch(e => {
        console.log(e)
    })
}