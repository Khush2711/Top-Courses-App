import '../App.css';

function Filter({ filterData, category, setCategory, showFilter }) {

    function filterHandler(title) {
        setCategory(title);
    }

    return (
        <div className={`bg-bgDark2 relative`}>
            <div className={`flex justify-center gap-5 py-4 w-[50%] mx-auto custom-filter transition-all duration-1000`}>
                {
                    filterData.map((data) => {
                        return (
                            <button key={data.id} className={`px-2  custom-filter flex h-10 w-full text-xl justify-center items-center bg-bgDark text-white 
                    border border-slate-800 rounded-md bg-opacity-60 hover:bg-opacity-100 duration-[2] transition-all hover:border-white custom-button`} onClick={() => filterHandler(data.title)}>
                                {data.title}
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Filter;