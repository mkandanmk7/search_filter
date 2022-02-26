import React from 'react'

const Table = ({ data }) => {
    return (
        <div>
            <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E mail</th>
                    </tr>

                    {data.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })}
                </thead>


            </table>
        </div>
    )
}

export default Table