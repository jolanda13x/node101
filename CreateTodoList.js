const fs = require('fs')
const moment=require('moment')
const todoList=[
    {
        text: 'Water Plants,
        date: moment('11.12.2020, 21:50', 'DD.MM.YYYY, hh:mm'),
        id: 1,
        done: false
      },
      {
        text: 'Buy Spaghetti',
        date: moment('1.12.2020, 11:05', 'DD.MM.YYYY, hh:mm'),
        id: 2,
        done: true
      },
      {
        text: 'Buy Pesto',
        date: moment('1.12.2020, 11:05', 'DD.MM.YYYY, hh:mm'),
        id: 3,
        done: true
      }
]
const json=JSON.stringify(todoList)
fs.writeFileSync('todo.json',json)