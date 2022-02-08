import React, { useState } from 'react';
import Student from './Student';

const ClassOfStudents = ({ students, setTags, tags } = props) => {

  return (
    students.map(student => {
      const grades = student.grades;
      const average = Math.floor(grades.reduce((a, b) => a + parseInt(b), 0) / grades.length * 1000) / 1000 + '%';
      return (
        <div key={student.id}>
          <Student student={student} average={average} setTags={setTags} tags={tags} />
        </div>
      );
    })
  );
};

export default ClassOfStudents;