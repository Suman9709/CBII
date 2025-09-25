// WinnerCard.jsx
import React from 'react';

const WinnerCard = ({
    position,
    money,
    stage,
    workspace,
    mentors,
    funding,
    training,
    network,
    cardColor,
  
}) => {
    return (
        <div className={`rounded-xl p-6 shadow-md border border-t-6 ${cardColor}  bg-blue-50`}>
            {/* Header: Position, Money, and Stage Tag */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-blue-700">{position}</h3>
                  {
                    money ? (
                          <p className="text-3xl font-extrabold mt-1">{money}</p>
                    ):(
                        <div className='w-8 h-1 bg-blue-700 rounded-xl mt-4' ></div>
                    )
                  }
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-blue-300`}>
                    {stage}
                </span>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
                {/* Workspace Benefit */}
                <div className="flex items-center">
                    <span className="text-sm font-semibold mr-2 px-2 py-1 rounded-lg bg-purple-200 w-24">Workspace</span>
                    <p className="text-sm text-gray-700">{workspace}</p>
                </div>

                {/* Mentors Benefit */}
                <div className="flex items-center">
                    <span className="text-sm font-semibold mr-2 px-2 py-1 rounded-lg bg-gray-200 w-24">Mentors</span>
                    <p className="text-sm text-gray-700">{mentors}</p>
                </div>

                {/* Funding Benefit */}
                <div className="flex items-center">
                    <span className="text-sm font-semibold mr-2 px-2 py-1 rounded-lg bg-green-200 w-24">Funding</span>
                    <p className="text-sm text-gray-700">{funding}</p>
                </div>

                {/* Training Benefit */}
                <div className="flex items-center">
                    <span className="text-sm font-semibold mr-2 px-2 py-1 rounded-lg bg-yellow-200 w-24">Training</span>
                    <p className="text-sm text-gray-700">{training}</p>
                </div>

                {/* Network Benefit */}
                <div className="flex items-center">
                    <span className="text-sm font-semibold mr-2 px-2 py-1 rounded-lg bg-blue-200 w-24">Network</span>
                    <p className="text-sm text-gray-700">{network}</p>
                </div>
            </div>
        </div>
    );
};

export default WinnerCard;