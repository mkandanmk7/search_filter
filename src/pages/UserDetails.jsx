import React, { useState } from 'react'
import Table from '../Components/Table';
import { Users } from '../data/data'

const UserDetails = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        setQuery(e.target.value);
    }

    // filter func
    const searchFilter = (data) => {
        return data.filter(user=>user.first_name.toLowerCase().includes(query)|| 
        user.last_name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
        )
    }
    return (
        <>
            <div>
                <input type="text" placeholder="search here.." onChange={handleSearch} />
                <Table data={searchFilter(Users)} />

            </div>

        </>
    )
}

export default UserDetails