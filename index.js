// console.log(process.argv)

// if (process.argv[2] == "generate") {
//     console.log('Generated');
// }
// we can do the things commander do using process.argv as well!!!

const program = require('commander')

program.version('1.0.0').description('Simple Command Line Password Generator')

// Command and action demo
// program
//     .command('generate')
//     .action(() => {
//         console.log('Generated');
//     })
//     .parse()

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to passwords.txt')
    .option('-nn --no-numbers', 'remove numbers')
    .option('-ns --no-symbols', 'remove symbols')
    .parse()


console.log(program.opts());