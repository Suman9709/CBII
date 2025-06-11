import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import hackathon2024 from '../Images/hackathon2024.jpg'


const PopUpDialog = () => {

    const [showDialogBox, setShowDialogBox] = useState(false);
    useEffect(() => {
        setShowDialogBox(true);
    }, [])
    return (
        <>
            {showDialogBox && (
                <div className="fixed inset-0 z-50 flex items-center justify-center ">
                    <div className="relative  rounded-xl shadow-lg max-w-md w-1/2 h-3/4">
                        {/* Close button */}
                        <button
                            className="absolute top-2 right-2 text-red-900 hover:text-black text-xl"
                            onClick={() => setShowDialogBox(false)}
                        >
                            &times;
                        </button>

                        {/* Image link */}
                        <Link to="/upcomingEventForm" className="block w-full h-full">
                            <img
                                src={hackathon2024}
                                alt="Popup"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </Link>
                    </div>
                </div>
            )}
        </>

    )
}

export default PopUpDialog