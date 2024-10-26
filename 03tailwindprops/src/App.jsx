import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    userNames : "Raj",
    age:21
  }

  let newArr = [1,2,3]


  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card userName="Sher" Obj={myObj.userNames} arrObj={newArr}/>
    <Card userName="Shah"/>
    </>
  )
}

export default App
