import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hackathon2024 from '../Images/hackathon2024.jpg';

const PopUpDialog = () => {
  const [showDialogBox, setShowDialogBox] = useState(false);

  useEffect(() => {
    setShowDialogBox(true);
  }, []);

  return (
    <>
      {showDialogBox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          <div className="relative w-[350px] h-[350px] rounded-xl shadow-lg overflow-hidden">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white bg-red-900 bg-opacity-50 rounded-full p-1 hover:bg-opacity-80 transition cursor-pointer"
              onClick={() => setShowDialogBox(false)}
            >
              &times;
            </button>

            {/* Image link */}
            <Link to="/upcomingEventForm" className="block w-full h-full">
              <img
                src={hackathon2024}
                alt="Popup"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpDialog;
