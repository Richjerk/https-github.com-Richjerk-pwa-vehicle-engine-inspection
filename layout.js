import React from "react"
import Header from "iSanusi Vehicle Inspection./header"
const Layout=props=>{
return(<div>
<Header/>
{props.children}
</div>
)
}
export default Layout