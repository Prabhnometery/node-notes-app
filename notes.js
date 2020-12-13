const chalk = require('chalk');
const fs = require('fs');

const addNote = (title,body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note =>  note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
       fs.writeFileSync('notes.json', JSON.stringify(notes))
       console.log(chalk.green.inverse('New Note Added'))
    } else {
        console.log(chalk.red.inverse('Title Already Taken!'))
    }
};

const loadNotes = () => {

    try {
        const databuffer = fs.readFileSync('notes.json');
        const dataJSON = databuffer.toString();
        return JSON.parse(dataJSON);
        
    } catch (err) {
        return [];
        
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const removedNotes = notes.filter(note => note.title !== title);

    if (notes.length > removedNotes.length) {
        fs.writeFileSync('notes.json', JSON.stringify(removedNotes));
        console.log(chalk.green.inverse('Note removed!'))

    } else {
        console.log(chalk.red.inverse('No note found!'))

    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green('Your Notes...'))
    notes.forEach(note => {
        console.log(note.title)  
    });
};

const readNote = (title) => {
    const notes = loadNotes();
    const askedNote = notes.find(note => note.title === title);
    if(askedNote) {
        console.log(chalk.green.bold(askedNote.title));
        console.log(askedNote.body);
    } else {
        console.log(chalk.red('No note found! Try to enter the correct title'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}




