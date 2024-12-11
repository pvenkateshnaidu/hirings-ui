import React, { useState } from 'react';
import fields from './postjob.json'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  // Import Quill styles
import {TextField,Checkbox,FormControlLabel,Button,Box, Typography, FormControl, InputLabel,FormGroup,Chip, Stack} from "@mui/material";


const JobPostingForm = () => {
  const [formData,setFormData] = useState(
    fields.reduce((acc,fields) => ({...acc,[fields.name]:fields.type === "checkbox" ? false : ""}),{})
  )

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleMultiCheckboxChange = (name, option) => {
    
    setFormData((prev) => {
      const currentValues = prev[name] || [];
      return {
        ...prev,
        [name]: currentValues.includes(option)
          ? currentValues.filter((item) => item !== option)
          : [...currentValues, option],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
   
    <section className='Main-section'>
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: 1100,
        margin: "0 auto",
        background:'#fff',
        padding:'20px'
      }}
    >
      {fields.map((field, index) => {
        // Render standalone fields
        if (field.type === "text") {
          return (
            <Box >
            <InputLabel>{field.label}</InputLabel>  
            <TextField
              key={index}
              name={field.name}
            
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name] || ""}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            </Box>
          );
        }

        if (field.type === "checkbox" && field.options) {
          // Multi-checkbox options
          return (
            <FormGroup key={index}>
              <Typography variant="h6">{field.label}</Typography>
              <Stack direction="row"  flexWrap="wrap" gap={1}>
          {field.options.map((option, optIndex) => (
            <Chip
              key={optIndex}
              label={option}
              color={(formData[field.name] || []).includes(option) ? 'primary' : 'default'}
              clickable
              onClick={() => handleMultiCheckboxChange(field.name, option)}
              variant="outlined"
              sx={{margin:0}}
            />
          ))}
        </Stack>
            </FormGroup>
          );
        }

        if (field.type === "checkbox") {
          // Single checkbox
          return (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  name={field.name}
                  checked={formData[field.name] || false}
                  onChange={handleChange}
                />
              }
              label={field.label}
            />
          );
        }

        if (field.type === "section") {
     
          // Render section with nested fields
          return (
            <Box key={index} sx={{ borderRadius: 2 }}>
              <Typography variant="h6">{field.heading}</Typography>
              <Typography variant="body2" gutterBottom>
                {field.description}
              </Typography>
              {field.fields.map((nestedField, nestedIndex) => (
                <FormControl fullWidth key={nestedIndex}>
                <div className='labelName'>{nestedField.name}</div>
                {/* <InputLabel>{nestedField.name}</InputLabel> */}
                <Stack direction="row" gap={1} flexWrap="wrap">
                {nestedField.options.map((option, optIndex) => (
                  <Chip
                  key={optIndex}
                  label={option}
                  color={formData[nestedField.name]?.includes(option) ? 'primary' : 'default'}
                  clickable
                  onClick={() => handleMultiCheckboxChange(nestedField.name, option)}
                  variant={formData[nestedField.name]?.includes(option) ? 'filled' : 'outlined'}
                  sx={{
                    backgroundColor: formData[nestedField.name]?.includes(option)
                      ? 'blue'
                      : 'transparent',
                   
                  }}
                  />
                ))}
                </Stack>
                </FormControl>
              ))}
            </Box>
          );
        }

        return null; // Placeholder for unsupported types
      })}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
    </section>
  );
};

export default JobPostingForm;
