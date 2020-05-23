exports.list = (names) => {
  //your code here
  if (names.length == 0) {
    return ''
  }
  if (names.length == 1) {
    let obj = names[0]
    return obj.name
  }
  if (names.length >= 2) {
    let new_str = []
    let obj = names.slice(names.length - 1)
    for (let i = 0; i < names.length - 1; i++) {
      new_str.push(names[i].name)
    }
    let final_str = new_str.join(', ') + ' & ' + obj[0].name
    return final_str
  }
}