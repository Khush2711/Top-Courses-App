import { useState } from "react";
import Card from "./Card";

function Cards({ courses, category }) {

    let allCourses = [];
    const [likes, setLike] = useState([]);

    const mergeCourses = () => {
        if (courses !== null) {
            if (category === "All") {
                Object.values(courses).forEach((specificTypeOfCourse) => {
                    Object.values(specificTypeOfCourse).forEach((course) => {
                        allCourses.push(course);
                    })
                })
                return allCourses;
            }
            else{
                return courses[category];
            }
        }
    }

    return (
        <div className="bg-bgDark2">

            {/* <div className="w-[950px] mx-auto grid grid-cols-3"> */}
            <div className="flex flex-wrap mx-auto justify-center content-center custom-flex-col">
                {
                    mergeCourses()?.map((course) => {
                        return (
                            <Card key={course.id} {...course} likes={likes} setLike={setLike} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Cards;