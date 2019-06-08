import React from "react";
import { connect } from "react-redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course }); ///the same as course: course <- since the names are the same
  };

  handleSubmit = event => {
    event.preventDefault(); //keeps page from reloading
    alert(this.state.course.title);
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
      </form>
    );
  }
}

//Be Specific, only ask for data your component needs.
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
