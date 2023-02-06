const gifts = ["Charlie", "Samip", "Ali"];
const Event = "birthday"

function writeCards(gifts, Event) {
   let writeCardsEmptyArray = [...gifts]
    for (let i = 0;i < writeCardsEmptyArray.length ; i++) {
        writeCardsEmptyArray[i] = `Thank you, ${gifts[i]}, for the wonderful ${Event} gift!`;
        
    }
    return writeCardsEmptyArray;
  
}

writeCards(gifts, Event)

function countDown(assignment) {
    let count = assignment
    while (count >= 0)
    console.log(count--)
}

countDown(10)
