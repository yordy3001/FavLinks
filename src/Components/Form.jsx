import { useState } from "react"

// function handleSubmmit(){
//   alert("Submitted")
// }





function Form() {

  const[name, setName] = useState("")
  const[URL, setURL] = useState("")


let handleSubmmit = (event) => {
  event.preventDefault()
  //alert('Submitted from arrow function')

  if(name == "" || URL == ""){
    alert("URL AND NAME ARE THE SAME")
  } else{
    console.log
  }

}

let handleNameChange =(event) =>{
 // console.log(event.target.value)
  setName(event.target.value)
}

let handleURLChange =(event) =>{
   setURL(event.target.value)
 }




    return (
      <form onSubmit={handleSubmmit}>
        <label for="linkName">Link Name</label>
        <input type="text" name="linkName" onChange={handleNameChange}/>
  
        
  
      <br/>
        <label for="linkURL">Link URL</label>
        <input type="text" name="linkURL" onChange={handleURLChange} />

      <br/>
      <br/>
  
  
      <input type="submit" disabled={name === "" && URL === ""}/>
      </form>
    )
  }
  


  export default Form