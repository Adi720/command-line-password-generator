// console.log(process.argv)

// if (process.argv[2] == "generate") {
//     console.log('Generated');
// }
// we can do the things commander do using process.argv as well!!!

import { program } from 'commander'
import chalk from 'chalk'
import clipboard from 'clipboardy'
const log = console.log
import createPassword from './utils/createPassword.js'
import savePassword from './utils/savePassword.js'

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

const { length, save, numbers, symbols } = program.opts()

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols)

// Save to file
if (save) {
    savePassword(generatedPassword)
}

// Copy to clipboard
clipboard.writeSync(generatedPassword)

log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.yellow('Password copied to clipboard'))