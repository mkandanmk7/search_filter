import React, { useState } from 'react'
import { Users } from '../data/data'

const UserDetails = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        setQuery(e.target.value);
    }
    return (
        <>
            <div>
                <input type="text" placeholder="search here.." onChange={handleSearch} />
                <ul>

                    {
                        Users.filter((user) => user.first_name.toLowerCase().includes(query)).map(data => {
                            return (
                                <div key={data.id}>
                                    <li>{data.first_name}</li>
                                    {/* <li>{data.last_name}</li> */}
                                </div>
                            )
                        })

                    }
                </ul>

            </div>

        </>
    )
}

export default UserDetails