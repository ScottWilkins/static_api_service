
function parse(obj){
  return obj.filter(person => person.user_data.active === 1)
}
module.exports = parse
