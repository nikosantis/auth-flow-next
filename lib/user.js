export const users = [
  {
    id: 'f0e27bc7-3e2d-4f9d-be56-0667d7e147b6',
    username: 'admin',
    password: 'secret',
    email: 'admin@email.com'
  },
  {
    id: '5a45985f-8045-4b88-9d91-2a6433fe212d',
    username: 'superadmin',
    password: 'secret',
    email: 'superadmin@email.com'
  }
]

export const findUser = (username, password) => {
  return new Promise((resolve, reject) => {
    const user = users.find(
      (x) => x.username === username && x.password === password
    )
    if (!user) {
      reject(new Error('User does not exist.'))
    }
    resolve(user)
  })
}
