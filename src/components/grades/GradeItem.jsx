import axios from "axios";
import React, { useState, useContext, Fragment, useEffect } from "react";
import Slider from "react-slick";
// import thumbnail1 from "../../assets/img/thumbnail1.png";
// import thumbnail2 from "../../assets/img/thumbnail2.png";
import GradeContext from "../../context/grade/gradeContext";
import CourseItem from "./CourseItem";

const GradeItem = ({ grade}) => {
  // const gradeContext = useContext(GradeContext);
  // const { courses } = gradeContext;

  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCoursesByGrades(grade._id);

  }, []);

  // fetch all courses by grade
  const getCoursesByGrades = async (gradeId) => {
    try {
      const res = await axios.get(`/api/grades/${gradeId}/courses`);
      setCourses(res.data.data);
    } catch (err) {

    }
  };


  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      {courses.length>0 &&
        <div className="container mt-4 mb-2">
          <h2 className="title">{grade.title}</h2>
          <Slider {...settings}>
            {
              courses.map((course, key) => {
                return (<CourseItem course={course} key={key} />)
              })
            }
          </Slider>
        </div>
      }

    </Fragment>
  );
};

export default GradeItem;
