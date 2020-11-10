import Local from 'passport-local'
import { findUser } from './user'

export const localStrategy = new Local.Strategy((username, password, done) => {
  findUser(username, password)
    .then((user) => {
      if (user.password !== password) { return done(null, false) }
      done(null, user)
    })
    .catch((error) => {
      done(error)
    })
})
