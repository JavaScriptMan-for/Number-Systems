export namespace NumberSystems {

/**
 * @function getValueSymbol returns the value of a specific character
 * @param char one symbol or figure from number system (example: 'a', 5, 'f')
 * @returns or figure or value symbol
 */
export function getValueSymbol(char: string | number): number | never {
    const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

    if(!isNaN(Number(char))) return Number(char)
    if(typeof char === 'number' && char > 9) throw new Error("Char can't have length > 1!")

    if(typeof char === 'number') return Number(char)
    
    if(char.length > 1) throw new Error("Char can't have length > 1!")

    const result = symbols.indexOf(char) 

    if(result === -1) throw new Error("Char not found!")
    
    return result + 10
}

/**
 * @function updateNumberSystem converts a number from any number system to any number system
 * @param num the number itself
 * @param from the number system of this number
 * @param to the number system to convert this number to
 * @returns a number converted to the desired number system
 */
export function updateNumberSystem(num: string, from: number, to: number): string | never {
    if(from < 2 || from > 32) throw new Error("Неверная система счисления")
    if(to < 2 || to > 32) throw new Error("Неверная система счисления")

    if(num.split("").some(n => getValueSymbol(n) >= from)) throw new Error('Число находиться не в указанной системе счисления')

    if(from === to) return num

        const toInt = parseInt(num, from)

        const toResultSys = toInt.toString(to)

        return toResultSys 
}

/**
 * 
 * @function checkNumberOnNumberSystem checks whether a number can exist in the specified number system
 * @param num the number itself
 * @param sys the number system of this number
 * @returns if it can be in this number system, then it is true, else false
 */
export function checkNumberOnNumberSystem(num: string | number, sys: number): boolean {
    if(num.toString().split("").some(n => getValueSymbol(n) >= sys)) return false
    return true
}

/**
 * @function bin convert number to the binary (base 2) number system
 * @param num number itself
 * @param from_sys the number system of this number
 * @returns a number converted to binary (base 2) notation
 */
export function bin(num: string | number, from_system?: number): string | never {
    let sys = from_system ? from_system : 10
    if(!checkNumberOnNumberSystem(num, sys)) throw new Error("Число находиться не в данной Вами системе счисления")

    if(sys === 2) return num.toString()

    if(typeof num === 'number') sys = 10


    const toInt = parseInt(num.toString(), sys);

    return toInt.toString(2)
}

/**
 * @function hex convert number to the hexadecimal (base 16) number system
 * @param num number itself
 * @param from_sys the number system of this number
 * @returns a number converted to hexadecimal (base 16) notation
 */
export function hex(num: string | number, from_system?: number): string | never {
    let sys = from_system ? from_system : 10;

    if(!checkNumberOnNumberSystem(num, sys)) throw new Error("Число находиться не в данной Вами системе счисления")

    if(from_system === 16) return num.toString()

    if(typeof num === 'number') sys = 10

    const toInt = parseInt(num.toString(), sys)

    return toInt.toString(16)
}

/**
 * @function oct convert number to the octal (base 8) number system
 * @param num number itself
 * @param from_sys the number system of this number
 * @returns a number converted to octal (base 8) notation
 */

export function oct(num: string | number, from_system?: number) {
    let sys = from_system ? from_system : 10

    if(!checkNumberOnNumberSystem(num, sys)) throw new Error("Число находиться не в данной Вами системе счисления")

    const toInt = parseInt(num.toString(), sys)

    return toInt.toString(from_system)
}

/**
 * @function int convert number to the decimal (base 10) number system
 * @param num number itself
 * @param from_sys the number system of this number
 * @returns a number converted to decimal (base 10) notation
 */

export function int(num: string | number, from_system?: number) {
    let sys = from_system ? from_system : 10

    if(!checkNumberOnNumberSystem(num, sys)) throw new Error("Число находиться не в данной Вами системе счисления")

    return parseInt(num.toString(), sys)
}
}
