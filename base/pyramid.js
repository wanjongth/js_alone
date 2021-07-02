let output = ''

for (let i = 0; i < 9; i++) {
    for (let k = 0; k < 9 - i; k++) {
        output += ' '
    }
    for (let j = 0; j < (2 * i + 1); j++) {
        output += '*'
    }
    output += '\n'
}

for (let i = 0; i < 10; i++) {
    for (let k = 0; k < i; k++) {
        output += ' '
    }
    for (let j = 0; j < 2 * (9 - i) + 1; j++) {
        output += '*'
    }
    output += '\n'
}
console.log(output)