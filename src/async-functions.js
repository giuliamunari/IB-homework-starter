const getTatooineResidents = () => {
    const superagent = require('superagent')
    return superagent
        .get('https://swapi.co/api/planets/1/')
        .then(res => res.body.residents)
        .catch(error => `😱  OOOps!! something went wrong! 😱 \n${error.status} ${error.message}`)
}

const promiseMeAString = (argument) => {
    return new Promise((resolve, reject) => {
        if (typeof argument === 'string') resolve('You kept the Promise!')
        else if (argument === null) reject('You have failed me!')
    })
}

module.exports = { getTatooineResidents, promiseMeAString }