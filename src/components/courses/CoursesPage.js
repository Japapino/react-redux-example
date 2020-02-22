import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course }); ///the same as course: course <- since the names are the same
  };

  handleSubmit = event => {
    event.preventDefault(); //keeps page from reloading
    this.props.dispatch(courseActions.createCourse(this.state.course)); //have to call actions through dispatch or it wont do anything
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

//Be Specific, only ask for data your component needs.
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
