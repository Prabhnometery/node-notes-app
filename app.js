const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Arrow functions not recommended for methods as it outputs something different from the 
// expected because this. behaves differently

// Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    buidler: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Nody',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }

});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove the note',
    buidler: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read your notes',
    buidler: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
});


yargs.parse();





