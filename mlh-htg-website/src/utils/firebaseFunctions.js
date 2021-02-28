import firebase, { firestore } from './firebase'


const fire = firebase

const db = fire.firestore().collection('hackathonstuff').doc("mlhhtg2021")


function newUserDefaults(user) {
    return {
        username: user.username,
        email: user.email,
        orgname: user.orgname,
        orgweb: user.orgweb,
        created: fire.firestore.Timestamp.now(),
        'last-login': fire.firestore.Timestamp.now(),
        new: true
    }

}

export async function getUserfromRef(userRef) {
    let user = await userRef.get()
    if (user.exists) {
        return user.data()
    } else {
        console.error('user does not exist!!!')
    }
}

export function getUserfromUid(uid) {
    return firestore.doc('hackathonstuff/mlhhtg2021/users/' + uid).get()
}

export function createNewUser(userdata) {
    const userRef = firestore.collection('hackathonstuff/mlhhtg2021/users').doc(userdata.uid)
    console.log('creating user with: ', userdata)

    return userRef.set(newUserDefaults(userdata))
        .catch(e => {
            console.log('error creating new user')
            console.log(e)
        })
}

export function searchOrgbyName(name) {
    if (!name) {
        return "Not found"
    }
    var name = name.toUpperCase()
    var nonprofits = firestore.collection('hackathonstuff').doc("mlhhtg2021").collection('nonprofits')

    return nonprofits.where('name', '==', name).get().then(query => {
        if (!query.empty) {
            return query.docs[0].data()
        } else {
            return "Not found"
        }
    })
}

export function getSchedule(uid) {
    db.collection('users').doc(uid).collection('schedule').get().then(snapshot => {
        if (!snapshot.empty) {
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        }
        return false
    })
}

export function addSchedule(uid, data) {
    db.collection('users').doc(uid).collection('schedule').add(data)
}