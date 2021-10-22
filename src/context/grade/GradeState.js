import { useReducer } from "react";
import axios from "axios";
import {
  GET_ALL_GRADES,
  GET_COURSE,
  GET_COURSES_BY_GRADE,
  GET_CHAPTERS_BY_COURSE,
  GET_ARTICLES_BY_CHAPTER,
} from "../types";
import gradeReducer from "./gradeReducer";
import GradeContext from "./gradeContext";

const GradeState = (props) => {
  const initialState = {
    loading: true,
    grades: [],
    courses: [],
    course: null,
    chapters: [],
    articles: [],
  };
  const [state, dispatch] = useReducer(gradeReducer, initialState);

  console.log(state);

  //get all grades
  const getAllGrades = async () => {
    try {
      const res = await axios.get("/api/grades/");
      dispatch({
        type: GET_ALL_GRADES,
        payload: res.data.data,
      });
    } catch (err) {}
  };
  // fetch all courses by grade
  const getCoursesByGrades = async (gradeId) => {
    try {
      const res = await axios.get(`/api/grades/${gradeId}/courses`);
      dispatch({
        type: GET_COURSES_BY_GRADE,
        payload: res.data.data,
      });
    } catch (err) {}
  };

  //get Course
  const getCourse = async (courseId) => {
    try {
      const res = await axios.get(`/api/courses/${courseId}`);
      // console.log('cc->',res.data.data[0])
      dispatch({
        type: GET_COURSE,
        payload: res.data.data[0],
      });
    } catch (err) {}
  };

  //get chapters by Course
  const getChaptersByCourse = async (courseId) => {
    try {
      const res = await axios.get(`/api/courses/${courseId}/chapters`);
      dispatch({
        type: GET_CHAPTERS_BY_COURSE,
        payload: res.data.data,
      });
    } catch (err) {}
  };

  //get Artciles By Chap
  const getArtcileByChap = async (chapterId) => {
    try {
      console.log("res chapterId ->", chapterId);

      const res = await axios.get(`/api/chapters/${chapterId}/articles`);

      console.log("res articles ->", res.data.data);
      dispatch({
        type: GET_ARTICLES_BY_CHAPTER,
        payload: res.data.data,
      });
    } catch (err) {
      console.log('errr', err);
    }
  };

  return (
    <GradeContext.Provider
      value={{
        loading: state.loading,
        grades: state.grades,
        courses: state.courses,
        course: state.course,
        chapters: state.chapters,
        articles: state.articles,
        getAllGrades,
        getCoursesByGrades,
        getCourse,
        getChaptersByCourse,
        getArtcileByChap,
      }}
    >
      {props.children}
    </GradeContext.Provider>
  );
};

export default GradeState;
