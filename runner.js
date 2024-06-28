const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQyMGZjZmZhLWE3NDMtNDZlOC04NWY4LWI1MDRlMmVmZjg4ZC0xNzE5NTMyMzQ5MTMxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNTIyMDJjZDYtODA5Ny00Mzg5LWE1ZjUtZDg0ZmQ4NWIxY2FjIiwidHlwZSI6InQifQ.lmwsZgcZH2miSpDSiEEL64_4n_6WU8LbeqA6YKkic4c'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})