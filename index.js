function theBeatlesPlay (musicians, instruments) {
  var newArr = []
  for (var i = 0; i<musicians.length; i++) {
    newArr.push(musicians[i]+" plays "+instruments[i])
  }
  return newArr
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]
function iLoveTheBeatles (facts) {
  var newFacts=[]
  let i=0
  while (i < facts.length){
    newFacts.push(`${facts[i]}!!!}`)
    i++
  }
  return newFacts
}
function iLoveTheBeatles(num){
  var array = []
  do {
  (array.push("I love the Beatles"))
  num++
  }
  while(num<15);
  return array
}