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
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 text-center'>Tailwind test</h1>
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/17274035/pexels-photo-17274035/free-photo-of-portrait-of-a-woman-touching-her-lips.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4 text-center">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div >
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
<figure className=" bg-slate-100 rounded-xl p-8  dark:bg-slate-800">
  <img className="w-24 h-24 rounded-xl mx-auto" src="https://images.pexels.com/photos/28529534/pexels-photo-28529534/free-photo-of-elegant-black-and-white-portrait-of-a-woman.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width="384" height="512"/>
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    {/* <Card userName="Sher" Obj={myObj.userNames} arrObj={newArr}/> */}
    {/* <Card userName="Shah"/> */}
    </>
  )
}

export default App
