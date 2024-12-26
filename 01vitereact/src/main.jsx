
// import { createRoot } from 'react-dom/client'
import  ReactDOM  from 'react-dom/client'
import React from 'react'
import App from './App.jsx'


// simple method execute

function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// test own custom structure tree || not working
const ReactElement = {
    type: 'a', 
    props: {
        href : 'https://www.google.com',
        target : '_blank',
        children : 'Click me to visit google'
    },
    children : 'Click me to visit google'
}

// direct html or jsx
const anotherElement = (
    <a href="https://www.google.in" target="_blank">Visit Google </a>
)

// variable
const anotherUser = "Coffe with Kush";

// through react.createElement || babel inject krta hai
const reactElement = React.createElement(
    'a',
    {href: 'https://www.yahoo.co.in', target:'_blank'},
    'click me to visit yahoo!!!',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // ReactElement
    // anotherElement
    // reactElement
    // <App/>
    // <MyApp/>
    // MyApp()

)
