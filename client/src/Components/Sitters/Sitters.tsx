import React from 'react'
import api from "../../Api/api"

export default function Sitters() {
    const testingApi = async ()=>{
        const response:any = await api.get("/api/sitters");
         console.log(response.data);
    }
    testingApi();
    
      return (
    <div>
    </div>
  )
}
