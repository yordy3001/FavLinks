function Table(props){

  let rows = [{name: "Cam's test", URL:"Text.com"}, {name:"test 2", URL: "test.com"}].map((data)=>{
    return(
     

      <tr>
        <td>{data.name}</td>
        <td>{data.URL}</td>

      </tr>

    )
  })
   
  
   

    return(
      <table>
        <thead>

           <tr>
            <th>Link Name</th>
            <th>Link URL</th>
          </tr>




        </thead>
        <tbody>
              {rows}
        </tbody>

        </table>
    )
  
  }
  


  export default Table
  