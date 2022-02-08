import { render } from 'react-dom';
import React, { useState, useEffect } from 'react';
import ClassOfStudents from './components/ClassOfStudents';
import Searchbar from './components/Searchbar';

const App = () => {
  // save students from JSON
  const [students, setStudents] = useState([]);
  // filted will change based on search term - defaults to being the same as students
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [tags, setTags] = useState({});

  // initial fetching of student data
  useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data.students);
        setFilteredStudents(data.students);
      });
  }, []);

  return (
    <div className='main_container'>
      <div className='class'>
        <Searchbar
          students={students}
          setFilteredStudents={setFilteredStudents}
          tags={tags}
        />
        <ClassOfStudents
          students={filteredStudents}
          setTags={setTags}
          tags={tags}
        />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
