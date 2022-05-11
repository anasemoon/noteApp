// // const test= require('fs')
// // test.writeFileSync('test.txt','hello on my new project')
// // test.appendFileSync('test.txt',' anasemoon is the auther')
// // console.log(test.readFileSync('test.txt').toString())
// // var validator= require('validator');
// // console.log(validator.isEmail('osama.com'));
// // console.log(validator.isEmail('osama@gmail.com'));
// // console.log(process.argv)
// // if (process.argv[2]=='add') console.log('addItem')
// // else if(process.argv[2]=='remove') console.log('removeItem')
// // else console.log('error')
// // switch(process.argv[2]){
// //     case 'add':console.log('addItem')
// //     break;
// //     case 'remove':console.log('removeItem')
// //     break;
// //     default:console.log('error')
// //     break;
// // }
const notes=require('./node.js')
const yarg=require('yargs')
yarg.command({
    command:'add',
    discribe:"add item",
    builder:{
        title:{
            describe:'this title new item',
            type:'String',
            demandOption:true
        },
        body:{
            describe:'this body new item',
            type:'String',
            demandOption:true

        }
    },
    handler:()=>{
      notes.addNote(yarg.argv.title,yarg.argv.body) 
    }
})
yarg.command({
    command:'delete',
    discribe:"delete item",
    builder:{
        title:{
            describe:'this title new item',
            type:'String',
            demandOption:true
        },
    },
    handler:()=>{
    //   console.log('deleted items')  
      notes.deleteNotes(yarg.argv.title) 

    }
})
yarg.command({
    command:'list',
    discribe:"list item",
    handler:()=>{
    //   console.log('listed items')  
      notes.listNoted() 

    }
})
yarg.command({
    command:'read',
    discribe:"read item",
    builder:{
        title:{
            describe:'this title new item',
            type:'String',
            demandOption:true
        },
    },

    handler:()=>{
    //   console.log('readen items') 
      notes.readNote(yarg.argv.title) 

    }
})
// console.log(yarg.argv)
yarg.parse()
// const person={
//     name:'elaria',
//     age:20
// }
// const personJson=JSON.stringify(person)
// // console.log(personJson)
// const file=require('fs')
// file.writeFileSync('person.json',personJson)
// const personOpject=JSON.parse(personJson)
// console.log(personOpject)
// console.log(personOpject.name)
// personOpject.name="semoon"
// personOpject.age=30
// file.writeFileSync('person.json',JSON.stringify(personOpject))
// console.log(personOpject)


