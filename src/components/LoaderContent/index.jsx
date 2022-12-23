import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
  speed={1.5}
  width="100%"
  height="100vh"
  viewBox="0 0 1246 800"
  backgroundColor="#040011"
  foregroundColor="#262528"
{...props}
  >
    <rect x="1" y="28" rx="0" ry="5" width="100%" height="197" /> 
    <rect x="1" y="234" rx="0" ry="5" width="100%" height="197" /> 
    <rect x="1" y="440" rx="0" ry="5" width="100%" height="197" />
    <rect x="1" y="650" rx="0" ry="5" width="100%" height="197" />
    <rect x="40%" y="900" rx="0" ry="5" width="20%" height="80" /> 
  </ContentLoader>
)

export default MyLoader