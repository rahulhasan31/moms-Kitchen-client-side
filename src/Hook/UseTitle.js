import { useEffect } from "react"


const useTitle= title=>{
    useEffect(()=>{
          document.title= `${title} -photographer future`
    },[title])
}



export default useTitle;