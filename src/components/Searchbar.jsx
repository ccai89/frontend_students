import React, { useState, useEffect } from 'react';

const Searchbar = ({ students, setFilteredStudents, tags } = props) => {
  const [nameSearch, setNameSearch] = useState('');
  const [tagSearch, setTagSearch] = useState('');

  // partial search for names
  const filterByName = (student) => {
    const first = student.firstName.toUpperCase().slice(0, nameSearch.length);
    const last = student.lastName.toUpperCase().slice(0, nameSearch.length);
    return first === nameSearch || last === nameSearch ? student : false;
  };

  // partial search for tags
  const filterByTag = (student) => {
    if (student && tags[student.id]) {
      const _tags = tags[student.id];
      for (let i = 0; i < _tags.length; i++) {
        if (_tags[i].slice(0, tagSearch.length).toUpperCase() === tagSearch)
          return true;
      }
    }
    else if(tagSearch === '' && student) return true;
    else return false;
  };

  useEffect(() => {
    const filtered = students.filter((student) => {
      return filterByTag(filterByName(student));
    });
    setFilteredStudents(filtered);
    console.log('filtered',filtered);
  }, [nameSearch, tagSearch, tags]);

  return (
    <div>
      <input
        className='searchbar name'
        type='text'
        placeholder='Search by name'
        onChange={(e) => setNameSearch(e.target.value.toUpperCase())}
      ></input>
      <hr width='97%' color='#eee' />
      <input
        className='searchbar tag'
        type='text'
        placeholder='Search by tag'
        onChange={(e) => setTagSearch(e.target.value.toUpperCase())}
      ></input>
      <hr width='97%' color='#eee' />
    </div>
  );
};

export default Searchbar;
