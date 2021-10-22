import React, { Fragment, useContext, useEffect } from "react";
import Slider from "react-slick";

import GradeContext from "../../context/grade/gradeContext";
import GradeItem from "./GradeItem";

const Grades = () => {
  const gradeContext = useContext(GradeContext);
  const { grades, loading, getAllGrades } = gradeContext;

  useEffect(() => {
    getAllGrades();
  }, []);

  return (
    <Fragment>
      {grades.map((grade) => {
        return <GradeItem grade={grade} key={grade._id} />;
      })}
    </Fragment>
  );
};

export default Grades;
