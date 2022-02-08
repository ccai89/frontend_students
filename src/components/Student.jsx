import React, { useState, useEffect } from 'react';

const Student = ({ student, average, setTags, tags } = student) => {
  // collapsible state for each student - default false = closed
  const [collap, setCollap] = useState(false);
  const [newTag, setNewTag] = useState('');  

  const renderTags = () => {
    return (
      tags[student.id] ? tags[student.id].map( tag => <span className='tags' key={`${tag}_${student.id}`}>{tag}</span>) : null
    );
  };
  
  useEffect(() => {renderTags();}, [tags]);

  return (
    <div className='student'>
      {/* picture */}
      <img
        className='picture'
        src={student.pic}
        alt={`${student.firstName}_${student.lastName}`}
      />
      {/* student info */}
      <div className='info'>
        <h1 className='studentName'>
          {`${student.firstName} ${student.lastName}`.toUpperCase()}
        </h1>
        <div className='details email'>Email: {student.email}</div>
        <div className='details company'>Company: {student.company}</div>
        <div className='details skill'>Skill: {student.skill}</div>
        <div className='details average'>Average: {average}</div>
        {collap && (
          <div className='details collapsible'>
            {student.grades.map((grades, i) => (
              <div key={`test${i}`}>{`Test ${i + 1}: \t ${grades}%`}</div>
            ))}
          </div>
        )}
        {/* display tags and tag input */}
        {tags[student.id] && <br />}
        {tags[student.id] && (
          <div className='details tag_container'>{renderTags()}</div>
        )}

        {/* input for new tags with listener for 'enter' */}
        <input
          className='details tag_input'
          type='text'
          value={newTag}
          placeholder='Add a tag'
          onChange={(event) => {
            setNewTag(event.target.value);
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              
              const studentTags = tags[student.id] ? [...tags[student.id], newTag] : [newTag];
              tags[student.id] = studentTags;
              setTags(tags);
              setNewTag('');
            }
            
          }}
        />
      </div>
      {/* button toggle */}
      <div className='toggle' onClick={() => setCollap(!collap)}>
        {!collap ? '+' : '-'}
      </div>
    </div>
  );
};

export default Student;
