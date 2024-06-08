import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";


function Card({ id, title, description, image, likes, setLike }) {
    const desc = description.substring(0, 100);

    function likeHandler() {
        if (likes.includes(id)) {
            setLike((prev) => prev.filter((cid) => (cid !== id)));
            toast.warning("Liked Removed");
        }
        else {
            setLike((prev) => [...prev, id]);
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="flex flex-col  text-white my-2 mx-2 relative bg-bgDark rounded-lg w-[300px]">

            <div className="">
                <img className="rounded" src={image.url} alt={image.alt} loading="lazy" />
            </div>

            <div className="flex absolute right-[2%] top-[42%] bg-white rounded-[50%] h-[2.5rem] w-[2.5rem] justify-center items-center cursor-pointer"
                onClick={likeHandler} >
                <button >
                    {
                        likes.includes(id) ? <FcLike size={30} /> : <FcLikePlaceholder size={30} />
                    }
                </button>
            </div>


            <div className="text-[1.2rem] p-3 font-bold">
                <p>{title}</p>
            </div>

            <div className="p-3">
                <p>{desc}...</p>
            </div>


        </div>
    );
}

export default Card;