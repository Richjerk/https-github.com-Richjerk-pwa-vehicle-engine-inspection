import React from "react"
const ComponentImage=()=>{
return(
<div>
<h1>Component Image</h1>
<p>Upload Component Image</p>
</div>
)
}
export default ComponentImagePage

import Layout from "../components/
layout"
import FancyPragraph from "../
components/fancy-paragraph"

const ComponentImagePage=()=>(
<Layout>
<h1>Component Image</h1>
<FancyParagraph
paragraphText="Styled with CSS
Modules."/>
</Layout>
)