import React from 'react'

const ContactCard = ({ name, number, email }) => {
    return (
        <div className='p-6 mb-4 flex flex-col items-center justify-center border border-blue-700 rounded-xl text-blue-700 text-md'>
            <h3>{name}</h3>
            <p>📞{number}</p>
            <p>📩{email}</p>
        </div>
    )
}

export default ContactCard