export default function numberToAlphabetLetter(number){
    if(typeof number !== 'number') throw new Error('first parameter should be a number')

    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
         'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
         'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
    return alphabet[number]
}