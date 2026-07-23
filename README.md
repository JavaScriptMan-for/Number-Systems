# Number Systems

```bash
npm install number-systems
```

## How use

1. getValueSymbol

```typescript
console.log(getValueSymbol('c')) //13
console.log(getValueSymbol('2')) //2
console.log(getValueSymbol(4)) //4
```

2. updateNumberSystem

```typescript
console.log(updateNumberSystem('1b30f', 16, 2)) //11011001100001111 (from hex to bin system)

console.log(updateNumberSystem('1b30f', 12, 2)) //Error '1b30f' is not based on a 12-point system

console.log(updateNumberSystem('100111', 2, 8)) //47 (from bin to oct)
console.log(updateNumberSystem('100111', 2, 2)) //100111 you'll get the same number
```
3. checkNumberOnNumberSystem

```typescript
console.log(checkNumberOnNumberSystem('32', 2)) //false
console.log(checkNumberOnNumberSystem('12fa1', 16)) //true
```
