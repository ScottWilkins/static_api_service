
function parseUser(id, json){

  var newObj =  json.filter((person) => {
    return person.user_data.id == id

  })
  return (newObj[0].user_data)
}

module.exports = parseUser
