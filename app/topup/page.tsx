import React from 'react'
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <h1 >DIGITAL CODES</h1>
      <div>
        <Image 
            src={"/images/TOPUP/codM.jpg"}
            width={200}
            height={200}
            alt={"CODM"}
            loading="lazy"
        />
        <p>COD:Mobile</p>
      </div>
    </div>
  )
}

export default Page
