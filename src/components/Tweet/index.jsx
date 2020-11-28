import React from 'react'
import Avatar from "./Avatar"

const Tweet = () => {
    return (
        <>
            <div className="flex max-w-md p-6 mx-auto mt-10 bg-gray-100 rounded-lg shadow-xl">
                <div className="pt-1 ml-6">
                    <h1 className="text-2xl leading-tight text-center text-blue-700">Tweet</h1>
                    <Avatar />
                </div>
            </div>
        </>
    )
}

export default Tweet
