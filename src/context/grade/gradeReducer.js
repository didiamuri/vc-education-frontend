import {
  GET_ALL_GRADES,
  GET_ARTICLES_BY_CHAPTER,
  GET_CHAPTERS_BY_COURSE,
  GET_COURSE,
  GET_COURSES_BY_GRADE,
} from "../types";

const gradeReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_GRADES:
      return {
        ...state,
        grades: action.payload,
        loading: false,
      };

    case GET_COURSES_BY_GRADE:
      return {
        ...state,
        courses: action.payload,
        loading: false,
      };

    case GET_COURSE:
      console.log("course in reduce = ", action.payload);
      return {
        ...state,
        course: action.payload,
        loading: false,
      };

    case GET_CHAPTERS_BY_COURSE:
      return {
        ...state,
        chapters: action.payload,
        loading: false,
      };

      case GET_ARTICLES_BY_CHAPTER:
        console.log("articles in reduce = ", action.payload);
        return {
          ...state,
          articles: action.payload,
          loading: false,
        };

    default:
      return state;
  }
};

export default gradeReducer;
