import React, { cloneElement } from "react"


export default props =>{
    console.log(typeof props.children)
    return (
        <div>
            {/** forma de renderizar com apenas 1 filho 
             {Reac.cloneElement(props.children, {...props})}
            */}
            

            {React.Children.map(props.children, (child)=>{
                return cloneElement(child, {...props})
            })
        
        }
            
        </div>
    )
}