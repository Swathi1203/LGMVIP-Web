import React, { useState } from 'react'

function Todolist() {
    const [activity, setActivity] = useState("");
    const [listData, setlistData] = useState([]);

    function addActivity() {
        setlistData([...listData, activity])
        console.log(listData)
        setActivity('');
    }

    function removeActivity(i) {
        const updatedList = listData.filter((elem, id) => {
            return i !== id;
        });
        setlistData(updatedList);
    }

    return (
        <>
            <div className='container'>
                <div className='header'>
                    <center>
                        <h1>TODO LIST</h1>
                    </center>
                    <input type='text' placeholder='Add Activity'  value={activity} onChange={(e) => setActivity(e.target.value)}/>
                        <button onClick={addActivity} >ADD</button>
                        <h1>  <center><p className='list-heading' style={{ marginTop: '20px', fontWeight: 'bold' }}>
                            Here is your list:{")"}
                        </p></center> </h1>     
                        {listData.length > 0 && listData.map((data, i) => {
                        return (
                            <p key={i}>
                            <h1>  <div key={i} className='list-data' >
                                        {data}
                                    </div>   </h1>    
                           
                                    <div className='btn-container' style={{ textAlign: 'right' }}>
                                    <button onClick={() => removeActivity(i)}  className='remove-button'>
                                    Remove
                                    </button> 
                                    </div>   </p>
                        )  
                    })}               
                      </div>   </div>
        </>             
            )
        }                             
        export default Todolist;                            
                               
                    
                   
                      
                   
                   
                             
                   
              
           
  


