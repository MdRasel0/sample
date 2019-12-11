const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');

//customize yargs version

yargs.version('1.1.0');

//Create a add command
yargs.command({
    command: 'add',
    describe: 'adding a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'This is Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
//create remove command
yargs.command({
    command: 'remove',
    describe: 'removing a command',
    builder: {
        title:{
            describe: 'remove title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//create list command to reade a note
yargs.command({
    command: 'list',
    describe: 'to listing a note',
    handler(){
        notes.ListNotes()
    }
})
//create read command
yargs.command({
    command:'read',
    describe: 'Reading the note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})
//write a command
yargs.command({
    command:'write',
    describe: 'writing the note',
    handler(){
        console.log('The note is writed')
    } 
})

yargs.parse()
//console.log(yargs.argv);
