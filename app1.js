const express = require('express')
let app = express()
const hbs = require('hbs')

//! setting up the view engine
app.set('view engine', 'hbs')
app.set('views','hbsFile')

hbs.registerPartials('./views/components')

//! setting up the static files such as css files
app.use(express.static('public'))

let categories = [
    {
        title:'All'
    },
    {
        title:'Music'
    },
    {
        title:'Comedy'
    },
    {
        title:'Sports'
    },
    {
        title:'News'
    },
    {
        title:'Bollywood'
    },
    {
        title:'Reality Shows'
    },
    {
        title:'Cricket'
    },
    {
        title:'Football'
    },
    {
        title:'Live'
    },
    {
        title:'Entertainment'
    },
    {
        title:'Education'
    },
    {
        title:'Technology'
    }
]
let videos = [
    {
        image: '/images/img1.jpg',
        title: 'Rowdy Baby',
        channel: 'Dhanush'
    },
    {
        image: '/images/img2.jpg',
        title: 'Darshan Thoogudeepa',
        channel: 'Zee Kannada'
    },
    {
        image: '/images/img3.jpg',
        title: 'Charuthanti',
        channel: 'Lahari Audio'
    },
    {
        image: '/images/img4.jpg',
        title: 'Darshan Farm House ',
        channel: 'D Company'
    },
    {
        image: '/images/img5.jpg',
        title: 'Data Analyst',
        channel: 'Data Science'
    },
    {
        image: '/images/img6.jpg',
        title: 'Shrimantudu',
        channel: 'Mythri Movie makers'
    },
    {
        image: '/images/img7.jpg',
        title: 'Ganesha Song',
        channel: 'Gananayakaya'
    },
    {
        image: '/images/img8.jpg',
        title: 'Suntaragali',
        channel: 'SGV Digital'
    },
    {
        image: '/images/img9.jpg',
        title: 'Darshan Birthday',
        channel: 'Rajini Express'
    },
    {
        image: '/images/img10.jpg',
        title: 'LIT',
        channel: 'Rahul Dit-o'
    }
]

app.get('/',(req,res)=>{
    // res.send("<h1>Hello</h1>")
    res.render('home',{categories,videos})
})

app.listen(3000,()=>{
    console.log("Listening to port 3000");
})