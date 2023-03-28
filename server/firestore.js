const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')

var serviceAccount = require('./firestore.json')

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore()

module.exports = { db }
