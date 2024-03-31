import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa";

function Index() {
    // Use a ref to get the input value
    const inputRef = useRef();

    const handleSearch = () => {
        // Access the input value using the ref
        const inputValue = inputRef.current.value;

        // Redirect to the YouTube search results page
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(inputValue)}`;
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className='bg-slate-300 h-screen flex justify-evenly flex-col'>
            <div className="w-full flex flex-col items-center justify-center  gap-20 md:gap-10">
                <h1 className="text-6xl font-semibold">Google</h1>
                <div className="gap-5 flex items-center justify-center">
                    <input
                        id='input'
                        ref={inputRef}  // Assign the ref to the input element
                        onKeyPress={handleKeyPress}
                        type="search"
                        className='w-[250px] outline-none cursor-pointer px-3 py-2 focus:w-[280px] rounded-lg  '
                    />
                    <button onClick={() => {
                        const inputValue = inputRef.current.value;

                        if (inputValue === "") {
                            alert("Can't Search Empty Field!")
                        } else {
                            handleSearch();
                        }
                    }}>
                        
                        <FaSearch className='text-2xl' />
                    </button>
                </div>
            </div>

            <div className='flex items-center gap-2 justify-center '>
                &copy; Made by Izhar With <FaHeart className='text-red-600 hover:text-red-700 cursor-pointer' />
            </div>
        </div>
    );
}

export default Index;
