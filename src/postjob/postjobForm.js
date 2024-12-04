import React, { useState } from 'react';
import { TextField, Button, Typography, Box,InputLabel } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  // Import Quill styles

const JobPostingForm = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [department, setDepartment] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleDescriptionChange = (value) => {
    setJobDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ jobTitle, location, department, jobDescription });
  };

  return (
    <Box sx={{ maxWidth: '90%', margin: 'auto', padding: 2, boxShadow: 3 }}>
      <Typography variant="h1" gutterBottom className='heading-1'>Post a Job</Typography>
      <form onSubmit={handleSubmit}>

        <InputLabel htmlFor="company" required>Company you're hiring for </InputLabel>
        <TextField
         id="company"
          variant="outlined"
          fullWidth
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          margin="0"
        />

        <InputLabel htmlFor="company" required>Job title / Designation </InputLabel>
        <TextField
          id="jobtitle"
          label="Location"
          variant="outlined"
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          margin="0"
        />

<InputLabel htmlFor="company" required>Type of Job</InputLabel>


        
        <Typography variant="body1" gutterBottom>Job Description:</Typography>
        <ReactQuill
          value={jobDescription}
          onChange={handleDescriptionChange}
          theme="snow"
        />

   
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Post Job
        </Button>
      </form>
    </Box>
  );
};

export default JobPostingForm;
