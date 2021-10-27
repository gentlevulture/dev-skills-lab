const todos = [
  {text: 'Coding and programming', done: false, _id: 125223},
  {text: 'Networking', done: true, _id: 127904},
  {text: 'Cryptography', done: false, _id: 139608},
  {text: 'Code reviewing', done: false, _id: 322521},
  {text: 'Database knowledge', done: false, _id: 409721},
  {text: 'Communication', done: true, _id: 806931},
  {text: 'Electrical engineering', done: false, _id: 111348},
  {text: 'Software development life cycle knowledge', done: false, _id: 223200},
  {text: 'Grit', done: true, _id: 579296},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, todos)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const todo = todos.find(todo => todo._id === parseInt(id))
    if (!todo) throw new Error ('No todo was found')
    return callback(null, todo)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

export { 
	find,
  findById
}