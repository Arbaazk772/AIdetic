import React, { useEffect, useState } from 'react'
import "./Second.css";

const Secondpage = () => {

    const [datas, setDatas] = useState([]);


    useEffect(() => {
        fetch('https://reqres.in/api/users/2')
            .then((res) => res.json())
            .then((datas) => setDatas(datas.data));
    }, []);

    return (
        <div >
            <h2>TABLE</h2>
            <table className='power' >
                <tr>
                    <td><b>ID</b></td>
                    <td>{datas.id}</td>
                </tr>
                <tr>
                    <td><b>EMAIL</b></td>
                    <td>{datas.email}</td>
                </tr>
                <tr>
                    <td><b>NAME</b></td>
                    <td>{datas.first_name} {datas.last_name}</td>
                </tr>

                <tr>
                    <td><b>AVATAR</b></td>
                    <td><img src={datas.avatar} /></td>
                </tr>
            </table>
        </div>
    );
}


export default Secondpage;
