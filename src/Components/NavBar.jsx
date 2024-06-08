function NavBar({ showFilter,setFilter }) {

    function showFilterHandler()
    {
        setFilter(!showFilter);
    }

    return (
        <>
            <nav className={`w-full relative flex justify-center bg-bgDark h-16 items-center text-white font-bold text-3xl mx-auto`}>
                <div className={`absolute left-5`} onClick={showFilterHandler}>
                    <div className="w-[35px] h-[5px] bg-white my-1"></div>
                    <div className="w-[35px] h-[5px] bg-white my-1"></div>
                    <div className="w-[35px] h-[5px] bg-white my-1"></div>
                </div>
                <h1 className="">Top Courses</h1>
            </nav>
        </>
    )
}

export default NavBar;