import React from "react";
import { Link } from "react-router-dom";

const CourseItem = ({ course }) => {
  // console.log('course =', course);
  return (
    <div>
      <div className="slide-grade-list-container">
        <p>{course.title}</p>
        <Link to={`/subject-page/${course._id}`}>
          <img src={course.image} alt={course.title} />
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;