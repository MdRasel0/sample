const chalk = require('chalk')
const fs = require('fs')
const getNotes = () => {
    return 'This Notes...'
}
const addNote = (title,body) => {

    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title ==title)

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new note added')
    } else{
        console.log('note title taken!!')
    }    

}
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    // const notesToKeep = notes.filter(function(note){
    //     return note.title !== title
    // })
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found'))
    }
    
}
const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('note not found'))
    }
    }

const saveNotes = function(notes){

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () => {
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch{
        return[]
    }
}
const ListNotes = (title) => {
    const notes = loadNotes()
    console.log(chalk.inverse('your notes'))
    notes.forEach((note) => {
        console.log(note.title)
        
    }); 
 
 }
 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    ListNotes: ListNotes,
    readNotes: readNotes
}