import React, { useState } from 'react'
import Secondpage from './Secondpage'


const Firstpage = () => {
    const [ren, setRen] = useState(false);
    return (
        <>
            <button className="btnn" onClick={() =>
                setRen(!ren)
            }>Click Me</button>
            {ren && <Secondpage />}

        </>
    )
}

export default Firstpage
