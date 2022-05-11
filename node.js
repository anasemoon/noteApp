const fs=require('fs')
const { title } = require('process')
const addNote=(title,body)=>{
    const notes=loadNotes()
    const dublicatedNotes=notes.find((note)=>{
        return note.title===title

    })
    // console.log(dublicatedNotes)
    if(!dublicatedNotes){
    notes.push(
        {
            title,
            body:body
        }
    )
    saveNotes(notes)
    console.log('element is added successly')
}
else console.log('error title is dublicated')}
const loadNotes=()=>{
    try{
        const data=fs.readFileSync('node.json').toString()
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
}
const saveNotes=(notes)=>{
    const savedData=JSON.stringify(notes)
    fs.writeFileSync('node.json',savedData)
}
const deleteNotes=(title)=>{
    const notes=loadNotes()
    const notesToKeep=notes.filter((obj)=>{
        return obj.title!==title

    })
    if (notes.length==notesToKeep.length){
        console.log ('this title is not fined')
    }
    else {
    // console.log(notes)
    // console.log(notesToKeep)
    saveNotes(notesToKeep)
    console.log('removed')}
}
const readNote=(title)=>{
    const notes=loadNotes()
    const noteToRead=notes.find((note)=>{
        return note.title===title})
        console.log(noteToRead)
        if(noteToRead){
            console.log(noteToRead.body)
        }
        else console.log('this title is not founded')
   
}
const listNoted=()=>{
    const notes=loadNotes()
    notes.forEach(note => {
        console.log(note.title)
        
    });
}
module.exports={
    addNote,
    deleteNotes,
    readNote,
    listNoted
}