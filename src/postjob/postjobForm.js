import React, { useState } from 'react';
import fields from './postjob.json'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  // Import Quill styles
import {TextField,Checkbox,FormControlLabel,Button,Box, Typography, FormControl, InputLabel,FormGroup,Chip, Stack, Stepper, Step, StepLabel, Autocomplete, } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/* Steps  */
const steps = ['Job Details', 'Candidate Requirements', 'Interviewer Information','Job Preview','Publish Job'];


const JobPostingForm = () => {
  const [formData,setFormData] = useState(
    fields.reduce((acc,fields) => ({...acc,[fields.name]:fields.type === "checkbox" ? false : ""}),{})
  )

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const dontIncludeChange = (e) => {

  }

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

  const addressFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

/* Degree / specialization List */
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const degreeSpcializationList = [
  { title:'BA'},
  { title:'B.Tech'},
  { title:'B.Arch'},
  { title:'B.Com'},
  { title:'Bsc'},
  { title:'BBA'},
]

const previousIndustryExp = [
  { title:'Airlines / Aviation / Aerospace'},
  { title:'Agriculture / Forestry / Livestock / Fertilizers'},
  { title:'Accounting / Auditing / Taxation'},
  { title:'Design'},
  { title:'Consumer Goods & Retail'},
  { title:'Education'}, 
]

const skillsList = [
  { title:'Test Drive Coordination'},
  { title:'Test automation'},
  { title:'Test case management'},
  { title:'Test analysis'},
  { title:'Real time analysis'},
  { title:'Design reviews'}, 
  { title:'Design support'},
  { title:'Design aesthetics'},
]


const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
const [chipData, setChipData] = React.useState([
    { key: 0, label: 'B.Voc: Software Development' },
    { key: 1, label: 'BCA: Mobile Application and Web Technology' },
    { key: 2, label: 'BE/B.Tech: Artificial Intelligence' },
    { key: 3, label: 'M.Des: Design' },
    { key: 4, label: 'M.Voc: Mobile Phone Application Development' },
])

const regionalLanguageListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
const [regionalLanguageData, setRegionalLanguageData] = React.useState([
    { key: 0, label: 'Assamese' },
    { key: 1, label: 'Bengali' },
    { key: 2, label: 'Gujarati' },
    { key: 3, label: 'Hindi' },
    { key: 4, label: 'Kannada' },
    { key: 5, label: 'Malayalam' },
    { key: 6, label: 'Marathi' },
    { key: 7, label: 'Oriya' },
    { key: 8, label: 'Punjabi' },
    { key: 9, label: 'Tamil' },
    { key: 10, label: 'Telugu' }
])

const suggestedSkillsListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
const [suggestedSkillsData, setsuggestedSkillsData] = React.useState([
    { key: 0, label: 'Test Drive Coordination' },
    { key: 1, label: 'Test automation' },
    { key: 2, label: 'Test case management' },
    { key: 3, label: 'Test analysis' },
    { key: 4, label: 'Real time analysis' },
    { key: 5, label: 'Design reviews' },
    { key: 6, label: 'Design support' },
    { key: 7, label: 'Design aesthetics' },
    { key: 8, label: 'Design analysis' },
    { key: 9, label: 'Front end' },
    { key: 10, label: 'Design development' }
])

const handleDelete = (chipToDelete) => () => {
  setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
};

const regionalLanguagehandleDelete = (chipToDelete) => () => {
  setRegionalLanguageData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
};

const suggestedSkillshandleDelete = (chipToDelete) => () => {
  setsuggestedSkillsData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
};


  return (
   
    <section className='Main-section pb-4'>

      {/* Top breadcrumbs content start here */}
        <div class="container pt-4" style={{"padding-left":"20px","padding-right":"20px"}}>
        <nav aria-label="breadcrumb" class="pt-4 pb-4 ps-3 pe-3 mb-4" style={{background: "#fff"}}>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item active"><a href="#">Job Details</a></li>
              <li class="breadcrumb-item"><a href="#">Condidate Requirements</a></li>
              <li class="breadcrumb-item"><a href="#">Interviewer Information</a></li>
              <li class="breadcrumb-item"><a href="#">Job Preview</a></li>
              <li class="breadcrumb-item"><a href="#">Publish Job</a></li>
            </ol>
          </nav>
        </div>
          
        {/* Top breadcrumbs content start here */}

    {/* Job Details form start here  */}
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
      
        
        

      <div class="d-flex justify-content-center bottom-buttons">
      <button type="button" class="btn btn-outline-dark">Back</button>
      <Button type="submit" variant="contained" color="primary">
        Continue
      </Button>
      </div>
    </Box>
    {/* Job Details form end here  */}

    {/* Candidate Requirements form start here  */}
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

    <label>Degree / specialization</label>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={degreeSpcializationList}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => {
              const { key, ...optionProps } = props;
              return (
                <li key={key} {...optionProps}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              );
            }}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField {...params} label="E.g - B.Tech/BE" placeholder="E.g - B.Tech/BE" />
            )}
          />

            <div class="grayBackground">
            <label>Suggested specializations:</label>
            <div class="chipArray">
            {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
            </div>
            </div>

          <div>
          <label>Previous industry experience</label>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={previousIndustryExp}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => {
              const { key, ...optionProps } = props;
              return (
                <li key={key} {...optionProps}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              );
            }}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField {...params} label="E.g - B.Tech/BE" placeholder="E.g - B.Tech/BE" />
            )}
          />
          <span>You can select upto 10 industries</span>
          </div>

          <div>
            <label>Gender</label>
            <div>
            <Chip label="Both" component="a" href="#basic-chip" variant="outlined" clickable />
            <Chip label="Male" component="a" href="#basic-chip" variant="outlined" clickable/>
            <Chip label="female" component="a" href="#basic-chip" variant="outlined" clickable/>
            </div>
          </div>

          <div>
            <label>Age (in years)</label>
            <div class="d-flex">
              <div class="d-flex">
                <input type="text" name="minAge" value="18" class="form-control" />
              </div>
              <div class="d-flex align-self-center">
                <p class="toText d-flex">to</p>
                </div>
              <div class="d-flex">
              <input type="text" name="maxAge" value="60" class="form-control" />
              </div>
            </div>
            <span>Min. age must be above 18</span>
          </div>

          <div class="">
            <label>Regional language required:</label>
            <div class="chipArray">
            {regionalLanguageData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : regionalLanguagehandleDelete(data)}
            />
          </ListItem>
        );
      })}
            </div>
            </div>


            <div>
              <label>Skills preference</label>
              <p><span>You can add up to 15 key skills to make your job visible to the right candidates.</span></p>

              <div>
              <Autocomplete
        multiple
        id="tags-outlined"
        options={skillsList}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Skills"
          />
        )}
      />
              </div>
            </div>

            <div class="grayBackground">
            <label>Suggested skills:</label>
            <div class="chipArray">
            {suggestedSkillsData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : suggestedSkillshandleDelete(data)}
            />
          </ListItem>
        );
      })}
            </div>
            </div>

        <div>
          <label>Job Description</label>
          <p>
            <span>Describe the responsibilities of this job and other specific requirements here.</span>
          </p>
          <div>
          <textarea name="postContent" class="w-100" />
          </div>
        </div>

            <div class="d-flex justify-content-center bottom-buttons">
      <button type="button" class="btn btn-outline-dark">Back</button>
      <Button type="submit" variant="contained" color="primary">
        Continue
      </Button>
      </div>


    </Box>
    {/* Candidate Requirements form start here  */}

    {/* Interviewer Information form start here  */}
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
    }}>
      <div>
        <label>Interview method and address</label>
        <p>Let candidates know how interview will be conducted for this job.</p>
      </div>
      <div>
        <label>
        Is this a walk-in interview ?
        </label>

        <div>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group">
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
            
          </RadioGroup>
        </div>

        <Box 
        component="form"
        onSubmit={addressFormSubmit}
        >
          <div>
            <label>Walk-in Interview address</label>
            <p>
              <input type="text" class="form-control" placeholder="Search for your address/locality" />
            </p>
          </div>

          <div>
            <label>Add Floor / Plot no. / Shop no. (optional)</label>
            <p>
              <input type="text" class="form-control" placeholder="Enter office floor / plot no. / shop no.  (optional)" />
            </p>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div>
              <label>Walk-in Start date</label>
              <p>
                <input type="date" class="form-control" placeholder="dd/mm/yyyy" />
              </p>
              </div>
            </div>

            <div class="col-sm-6">
              <div>
              <label>Walk-in End Date</label>
              <p>
                <input type="date" class="form-control" placeholder="dd/mm/yyyy" />
              </p>
              </div>
            </div>

          </div>

          <div class="d-flex">
            <div><input type="checkbox" /></div><span>&nbsp;Don't include&nbsp;</span>
            <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} class="customSelect">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={10}
                  onChange={dontIncludeChange}
                  label="All Saturdays & Sundays"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>All Saturdays & Sundays</MenuItem>
                  <MenuItem value={20}>All Sundays</MenuItem>
                </Select>
              </FormControl>
            </div>

          </div>

          <div>
          <label>Walk-in timings</label>
          <div class="d-flex">
              <div>
              <p>
                <input type="text" class="form-control" placeholder="Search for your address/locality" />
              </p>
              </div>

              <div><p>&nbsp;-&nbsp;</p></div>

              <div>
              <p>
                <input type="text" class="form-control" placeholder="Search for your address/locality" />
              </p>
              </div>
              </div>
          </div>

          <div>
              <label>Walk-in timings</label>
              <p>
                <textarea class="form-control" placeholder="Search for your address/locality" ></textarea>
              </p>
              </div>

              <div>
            <label>Company address</label>
            <p>
              <input type="text" class="form-control" placeholder="Search for your address/locality" />
            </p>
          </div>

        </Box>

        <Divider component="div" />

        <Box 
        component="form"
        onSubmit={addressFormSubmit}
        >
        <div>
          <label>Communication Preferences</label>
          <p class="blueButton"><span><svg height="20" viewBox="0 0 24 24" width="20"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="#0074E8"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span> Leads information will be accessible on hirings portal and can be <b>downloaded in excel</b> format</p>
        </div>

        <div>
          <label>Do you want candidates to contactyou via Call / Whatsapp after they apply?</label>
          <div>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group">
            <FormControlLabel value="1" control={<Radio />} label="Yes, to myself" />
            <FormControlLabel value="2" control={<Radio />} label="Yes, to other recruiter" />
            <FormControlLabel value="3" control={<Radio />} label="No, I will contact candidates first" />
            
          </RadioGroup>
          </div>

          <div>
            <label>Fill other recruiter details</label>
            <div>
              <label>Recruiter's Name</label>
              <p>
                <input type="text" class="form-control" placeholder="Enter the name" />
              </p>
            </div>

            <div>
              <label>Recruiter's Whatsapp No.</label>
              <p>
                <input type="text" class="form-control" placeholder="Enter number" />
              </p>
            </div>

            <div>
              <label>Recruiter's Email ID</label>
              <p>
                <input type="email" class="form-control" placeholder="Enter email" />
              </p>
            </div>

          </div>

          <div>
            <label>Which candidates should be able to contact you ?</label>
            <div>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group">
            <FormControlLabel value="1" control={<Radio />} label="All candidates" />
            <FormControlLabel value="2" control={<Radio />} label="Only matched candidates (~60% of all candidates)" />
          </RadioGroup>
          </div>
          <p class="blueButton">Matched candidates have some OR all key criteria such as education, work experience, skills, industry, or language as well as those who fulfil preferences like age and location.</p>
          </div>

          <div>
          <label>Notification Preferences</label> 
          <p>
            <label>
              Every time you receive a candidate application,do you want <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g filter="url(#a)"><path fill="#fff" d="m7.524 18.829.302.178a8.297 8.297 0 0 0 4.213 1.148h.003c4.562 0 8.275-3.694 8.277-8.235 0-2.2-.86-4.27-2.422-5.826a8.243 8.243 0 0 0-5.852-2.415c-4.566 0-8.278 3.694-8.28 8.235 0 1.555.437 3.07 1.265 4.382l.197.311-.836 3.04 3.133-.818ZM2 22l1.413-5.134a9.853 9.853 0 0 1-1.33-4.953c.003-5.463 4.47-9.907 9.959-9.907a9.92 9.92 0 0 1 7.044 2.905A9.824 9.824 0 0 1 22 11.921c-.002 5.462-4.47 9.907-9.958 9.907h-.004a9.99 9.99 0 0 1-4.759-1.206L2 22Z"></path></g><path fill="url(#b)" d="M2.427 11.91c0 1.686.442 3.332 1.283 4.782l-1.364 4.956 5.097-1.33a9.646 9.646 0 0 0 4.593 1.165h.005c5.298 0 9.61-4.291 9.613-9.565A9.481 9.481 0 0 0 18.84 5.15a9.575 9.575 0 0 0-6.8-2.805c-5.298 0-9.61 4.29-9.613 9.565Zm9.614 9.573Zm0 0Z"></path><path fill="url(#c)" d="M2.084 11.907c-.001 1.746.457 3.45 1.329 4.953L2 21.994l5.279-1.378a9.988 9.988 0 0 0 4.759 1.207h.004c5.488 0 9.956-4.445 9.958-9.908a9.824 9.824 0 0 0-2.914-7.01A9.92 9.92 0 0 0 12.042 2c-5.49 0-9.956 4.444-9.958 9.907Zm3.143 4.695-.197-.312a8.184 8.184 0 0 1-1.265-4.382c.002-4.54 3.714-8.235 8.28-8.235 2.21.001 4.289.859 5.852 2.415a8.165 8.165 0 0 1 2.422 5.826c-.002 4.54-3.715 8.235-8.277 8.235h-.003a8.296 8.296 0 0 1-4.213-1.148l-.302-.178-3.133.817.836-3.038Zm6.815 5.22Zm0 0Z"></path><path fill="#fff" fill-rule="evenodd" d="M9.553 7.766c-.186-.412-.382-.42-.56-.428-.145-.006-.31-.006-.477-.006a.916.916 0 0 0-.663.31c-.228.248-.871.847-.871 2.065 0 1.219.892 2.396 1.016 2.561.124.166 1.721 2.746 4.25 3.738 2.102.825 2.53.661 2.986.62.456-.041 1.472-.599 1.68-1.177.207-.578.207-1.074.145-1.178-.063-.103-.228-.165-.477-.289-.249-.123-1.472-.723-1.7-.805-.229-.083-.394-.124-.56.124-.166.248-.643.805-.788.97-.145.166-.29.187-.54.063-.248-.124-1.05-.386-2-1.23-.74-.656-1.24-1.466-1.384-1.714-.145-.248-.016-.382.109-.505.112-.111.249-.29.373-.434.124-.145.166-.248.249-.413.083-.165.041-.31-.02-.434-.063-.124-.547-1.348-.768-1.838Z" clip-rule="evenodd"></path><defs><linearGradient id="b" x1="12" x2="12" y1="21.648" y2="2.346" gradientUnits="userSpaceOnUse"><stop stop-color="#20B038"></stop><stop offset="1" stop-color="#60D66A"></stop></linearGradient><linearGradient id="c" x1="12" x2="12" y1="21.994" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient><filter id="a" width="22" height="21.994" x="0.75" y="1.206" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="-0.25" dy="0.2"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_209_21114"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_209_21114" result="shape"></feBlend></filter></defs></svg></span> Alerts from hirings?
            </label>
          </p>
          <div>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group">
            <FormControlLabel value="1" control={<Radio />} label="Yes, to other recruiter" />
            <FormControlLabel value="2" control={<Radio />} label="No, send me summary once a day" />
          </RadioGroup>
          </div>

        </div>

        <div class="d-flex justify-content-center bottom-buttons">
      <button type="button" class="btn btn-outline-dark">Back</button>
      <Button type="submit" variant="contained" color="primary">
        Continue
      </Button>
      </div>

        </div>

        </Box>

      </div>
    </Box>
    {/* Interviewer Information form start here  */}

    {/* Job Preview form start here  */}
    <Box component="form"
    onSubmit={handleSubmit}
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 3,
      maxWidth: 1100,
      margin: "0 auto",
      background:'#fff',
      padding:'20px'
    }}>

<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="div">
            <div class="d-flex justify-content-between  align-items-center accordianHead">
              <div>
                <div class="d-flex  align-items-center">
                  <div>
                    <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.265 8.74848C19.7142 8.74848 19.2661 8.30033 19.2661 7.74952V4.1355C19.2661 3.70637 18.9169 3.35729 18.4878 3.35729H12.9859C12.5568 3.35729 12.2076 3.70637 12.2076 4.1355V7.74952C12.2076 8.30033 11.7595 8.74848 11.2087 8.74848C10.6579 8.74848 10.2097 8.30033 10.2097 7.74952V4.1355C10.2097 2.60474 11.4551 1.35938 12.9859 1.35938H18.4878C20.0186 1.35938 21.264 2.60474 21.264 4.1355V7.74952C21.264 8.3004 20.8159 8.74848 20.265 8.74848Z" fill="#C1DBFB"></path><path d="M27.6234 26.9473H3.85002C2.26685 26.9473 0.983398 25.6639 0.983398 24.0806V9.16935C0.983398 7.58619 2.26679 6.30273 3.85002 6.30273H27.6234C29.2065 6.30273 30.49 7.58613 30.49 9.16935V24.0806C30.4899 25.6638 29.2065 26.9473 27.6234 26.9473Z" fill="#C1DBFB"></path><path d="M27.6234 6.30273H23.542C25.1252 6.30273 26.4086 7.58612 26.4086 9.16935V24.0806C26.4086 25.6638 25.1252 26.9473 23.542 26.9473H27.6234C29.2066 26.9473 30.49 25.6639 30.49 24.0806V9.16929C30.49 7.58613 29.2066 6.30273 27.6234 6.30273Z" fill="#C1DBFB"></path><path d="M27.6234 6.30273H3.85002C2.26685 6.30273 0.983398 7.58612 0.983398 9.16935V11.163C0.983398 14.0318 3.309 16.3574 6.1778 16.3574H25.2954C28.1642 16.3574 30.4898 14.0318 30.4898 11.163V9.16929C30.4899 7.58613 29.2065 6.30273 27.6234 6.30273Z" fill="#C1DBFB"></path><path d="M27.6234 6.30273H23.542C25.1252 6.30273 26.4086 7.58612 26.4086 9.16935V16.2366C28.7423 15.7269 30.49 13.6496 30.49 11.163V9.16929C30.49 7.58613 29.2066 6.30273 27.6234 6.30273Z" fill="#C1DBFB"></path><path d="M7.57739 19.9233C6.83753 19.9233 6.23779 19.3235 6.23779 18.5837V15.4705C6.23779 14.7307 6.83753 14.1309 7.57739 14.1309C8.31718 14.1309 8.91698 14.7306 8.91698 15.4705V18.5837C8.91692 19.3235 8.31718 19.9233 7.57739 19.9233Z" fill="#EBF3FE"></path><path d="M6.23779 17.582V18.5845C6.23779 19.3243 6.83753 19.9241 7.57739 19.9241C8.31718 19.9241 8.91698 19.3244 8.91698 18.5845V17.582H6.23779Z" fill="white"></path><path d="M20.4424 20.5293L21.8171 21.904L18.9376 24.7835L17.5629 23.4088L20.4424 20.5293Z" fill="#EBF3FE"></path><path d="M15.3668 29.1309L19.3087 25.189C19.5346 24.9631 19.5346 24.5969 19.3087 24.3711L17.9801 23.0425C17.7542 22.8166 17.3879 22.8166 17.1621 23.0425L13.2202 26.9844C12.6274 27.5771 12.6274 28.5381 13.2202 29.1309C13.813 29.7236 14.774 29.7236 15.3668 29.1309Z" fill="#DFE1E6"></path><path d="M19.3083 24.3711L17.9797 23.0425C17.7539 22.8166 17.3877 22.8166 17.1618 23.0425L16.2925 23.9118L18.439 26.0583L19.3083 25.189C19.5342 24.9631 19.5342 24.5969 19.3083 24.3711Z" fill="#DFE1E6"></path><path d="M25.4881 24.3899C29.6452 24.3899 33.0151 21.0199 33.0151 16.8629C33.0151 12.7059 29.6452 9.33594 25.4881 9.33594C21.3311 9.33594 17.9612 12.7059 17.9612 16.8629C17.9612 21.0199 21.3311 24.3899 25.4881 24.3899Z" fill="white"></path><path d="M25.4879 22.1857C28.4273 22.1857 30.8102 19.8028 30.8102 16.8634C30.8102 13.9239 28.4273 11.541 25.4879 11.541C22.5484 11.541 20.1655 13.9239 20.1655 16.8634C20.1655 19.8028 22.5484 22.1857 25.4879 22.1857Z" fill="#C1DBFB"></path><path d="M29.2512 13.0993C27.682 11.5301 25.377 11.1464 23.447 11.9466C24.0734 12.2063 24.6605 12.59 25.1698 13.0993C27.2483 15.1778 27.2483 18.5477 25.1698 20.6263C24.6605 21.1356 24.0734 21.5193 23.447 21.779C25.3769 22.5791 27.682 22.1955 29.2512 20.6263C31.3297 18.5477 31.3297 15.1778 29.2512 13.0993Z" fill="#EBF3FE"></path><path d="M31.152 11.1985C31.0933 11.1397 31.0335 11.0823 30.9732 11.0256V9.16799C30.9732 7.32083 29.4705 5.81804 27.6233 5.81804H21.7472V4.13452C21.7472 2.33718 20.2849 0.875 18.4876 0.875H12.9857C11.1884 0.875 9.72621 2.33718 9.72621 4.13452V5.81804H3.84995C2.00279 5.81804 0.5 7.32083 0.5 9.16799V24.0793C0.5 25.9265 2.00279 27.4292 3.84995 27.4292H10.8441C11.1111 27.4292 11.3275 27.2128 11.3275 26.9458C11.3275 26.6789 11.1111 26.4624 10.8441 26.4624H3.84995C2.53582 26.4624 1.46673 25.3934 1.46673 24.0792V14.3275C2.41329 15.7315 3.97035 16.6914 5.75409 16.8236V18.5836C5.75409 19.5887 6.57187 20.4065 7.57702 20.4065C8.58223 20.4065 9.40001 19.5887 9.40001 18.5836V16.8394H17.4779C17.4779 16.8471 17.4776 16.8548 17.4776 16.8625C17.4776 18.5086 17.9712 20.0786 18.8876 21.4044L17.8614 22.4306C17.5031 22.3292 17.1015 22.4187 16.82 22.7003L12.8782 26.6422C12.0979 27.4225 12.0979 28.6921 12.8782 29.4723C13.6602 30.2544 14.9262 30.2545 15.7083 29.4723L19.6502 25.5304C19.9317 25.2489 20.0213 24.8474 19.9199 24.4891L20.947 23.462C23.6633 25.3327 27.284 25.3386 30.0066 23.4771V24.0793C30.0066 25.3934 28.9375 26.4625 27.6234 26.4625H19.988C19.721 26.4625 19.5046 26.6789 19.5046 26.9459C19.5046 27.2129 19.721 27.4293 19.988 27.4293H27.6233C29.4705 27.4293 30.9732 25.9265 30.9732 24.0794V22.6996C31.0334 22.643 31.0932 22.5857 31.152 22.5268C34.2825 19.3964 34.2828 14.3293 31.152 11.1985ZM10.6929 4.13452C10.6929 2.87028 11.7214 1.84173 12.9857 1.84173H18.4876C19.7518 1.84173 20.7804 2.87028 20.7804 4.13452V5.81804H19.7492V4.13452C19.7492 3.43888 19.1832 2.87292 18.4876 2.87292H12.9857C12.29 2.87292 11.7241 3.43888 11.7241 4.13452V5.81804H10.6929V4.13452ZM12.6908 5.81804V4.13452C12.6908 3.97197 12.8231 3.83972 12.9857 3.83972H18.4876C18.6502 3.83972 18.7825 3.97197 18.7825 4.13452V5.81804H12.6908ZM8.43328 17.0978H6.72089V15.4705C6.72089 14.9984 7.10496 14.6143 7.57708 14.6143C8.0492 14.6143 8.43328 14.9984 8.43328 15.4705V17.0978ZM7.57708 19.4398C7.10496 19.4398 6.72089 19.0557 6.72089 18.5836V18.0645H8.43328V18.5836C8.43328 19.0557 8.0492 19.4398 7.57708 19.4398ZM9.40001 15.8727V15.4705C9.40001 14.4653 8.58223 13.6475 7.57702 13.6475C6.57187 13.6475 5.75409 14.4653 5.75409 15.4705V15.8527C3.35431 15.6377 1.46673 13.6165 1.46673 11.1617V9.16799C1.46673 7.85386 2.53582 6.78477 3.84995 6.78477H27.6233C28.9374 6.78477 30.0065 7.85386 30.0065 9.16799V10.2464C26.9498 8.14925 22.6441 8.37799 19.8238 11.1984C18.5466 12.4755 17.7539 14.1079 17.5378 15.8727H9.40001V15.8727ZM15.0246 28.7888C14.6204 29.1931 13.966 29.1931 13.5617 28.7888C13.3663 28.5934 13.2587 28.3336 13.2587 28.0573C13.2587 27.781 13.3663 27.5212 13.5617 27.3259L16.2925 24.595L17.7555 26.058L15.0246 28.7888ZM18.9665 24.8469L18.439 25.3744L16.9761 23.9115L17.5036 23.384C17.5221 23.3655 17.5464 23.3562 17.5707 23.3562C17.595 23.3562 17.6193 23.3655 17.6378 23.3839C17.638 23.384 17.638 23.3841 17.6382 23.3842L18.9665 24.7125C19.0035 24.7496 19.0035 24.8099 18.9665 24.8469ZM19.3315 23.7103L18.6401 23.019L19.4888 22.1703C19.5966 22.2918 19.7079 22.4109 19.8238 22.5267C19.9398 22.6428 20.0589 22.754 20.1802 22.8614L19.3315 23.7103ZM20.5073 21.8432C19.177 20.5128 18.4443 18.744 18.4443 16.8626C18.4443 14.9812 19.177 13.2124 20.5073 11.882C23.2599 9.12945 27.7155 9.12906 30.4684 11.882C33.221 14.6346 33.2214 19.0902 30.4684 21.8432C27.7158 24.5958 23.2603 24.5961 20.5073 21.8432Z" fill="#172B4D"></path><path d="M30.7908 17.5255C30.53 17.4688 30.2725 17.6342 30.2158 17.8951C30.0191 18.7997 29.5674 19.6256 28.9095 20.2835C27.0183 22.1745 23.9574 22.1747 22.0661 20.2835C20.1793 18.3967 20.1793 15.3268 22.0661 13.4401C23.9572 11.549 27.0181 11.5488 28.9095 13.4401C29.5667 14.0973 30.0182 14.9223 30.2153 15.8259C30.2721 16.0867 30.5297 16.2523 30.7905 16.1952C31.0514 16.1383 31.2167 15.8808 31.1598 15.6199C30.9233 14.5351 30.3815 13.5449 29.5931 12.7565C27.3242 10.4875 23.6518 10.4873 21.3826 12.7565C19.1189 15.0201 19.1189 18.7034 21.3826 20.967C23.6462 23.2306 27.3293 23.2308 29.5931 20.967C30.3823 20.1778 30.9243 19.1866 31.1605 18.1006C31.2171 17.8397 31.0517 17.5823 30.7908 17.5255Z" fill="#172B4D"></path></svg>&nbsp; &nbsp; &nbsp;
                  </div>
                  <div>
                    <label>Job Details</label>
                    <div class="shortDetails">
                      <ul>
                        <li>Job Title:
                          <span>Front-end Developer (React.js)</span>
                        </li>
                        <li>Department:
                          <span>Software Engineering</span>
                        </li>
                        <li>Work Type:
                          <span>Work from home</span>
                        </li>
                        <li>
                          <a href="#">View 6 more</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p><a>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#EBF3FE"></rect><g clip-path="url(#clip0_502_26996)"><path d="M10 19.6397V21.6664C10 21.853 10.1467 21.9997 10.3333 21.9997H12.36C12.4467 21.9997 12.5333 21.9664 12.5933 21.8997L19.8733 14.6264L17.3733 12.1264L10.1 19.3997C10.0333 19.4664 10 19.5464 10 19.6397ZM21.8067 12.693C22.0667 12.433 22.0667 12.013 21.8067 11.753L20.2467 10.193C19.9867 9.93305 19.5667 9.93305 19.3067 10.193L18.0867 11.413L20.5867 13.913L21.8067 12.693Z" fill="#0074E8"></path></g><defs><clipPath id="clip0_502_26996"><rect width="16" height="16" fill="white" transform="translate(8 8)"></rect></clipPath></defs></svg></a></p>
              </div>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="jobDetailsData">
                  
                  <p>
                    <span>Company name</span>
                    <span>Tango IT Solutions</span>
                  </p>
                  <p>
                    <span>Job title</span>
                    <span>Front-end Developer (React.js)</span>
                  </p>
                  <p>
                    <span>Job role/ category</span>
                    <span>Frontend Development</span>
                  </p>
                  <p>
                    <span>Job type</span>
                    <span>Full Time | Day shift</span>
                  </p>
                  <p>
                    <span>Work type</span>
                    <span>Work from home</span>
                  </p>

                  <p>
                    <span>Job City</span>
                    <span>All Areas in Hyderabad Region</span>
                  </p>
                  <p>
                    <span></span>
                    <span><div class="blueButton">You will be receiving applications from Hyderabad Region
                      </div></span>
                  </p>
                  <p>
                    <span>Monthly Salary | Pay Type</span>
                    <span></span>
                  </p>
                  <p>
                    <span>Additional perks</span>
                    <span></span>
                  </p>
                  <p>
                    <span>Joining Fee</span>
                    <span></span>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="div">
          <div class="d-flex justify-content-between  align-items-center accordianHead">
              <div>
                <div class="d-flex  align-items-center">
                  <div>
                    <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.9037 16.5582C31.6666 15.3893 31.5257 13.8686 30.5609 12.8599C30.1358 12.4154 29.9582 11.7908 30.0856 11.1891C30.3749 9.82373 29.6941 8.45653 28.43 7.86436C27.8731 7.60343 27.4818 7.08534 27.3833 6.47821C27.1597 5.10048 26.0309 4.07158 24.6385 3.97601C24.025 3.9339 23.4728 3.59206 23.1617 3.06163C22.4555 1.85775 21.0312 1.30597 19.6983 1.71992C19.1108 1.90234 18.4727 1.78301 17.991 1.40079C16.8975 0.533108 15.3702 0.533033 14.2769 1.40079C13.795 1.78308 13.1569 1.90242 12.5694 1.71984C11.2364 1.30634 9.81231 1.85775 9.10615 3.06163C8.79492 3.59206 8.24283 3.9339 7.62931 3.97601C6.23685 4.07158 5.10816 5.10055 4.88453 6.47829C4.78602 7.08534 4.39471 7.60343 3.83781 7.86436C2.57377 8.45653 1.89303 9.82373 2.18223 11.1892C2.30969 11.7908 2.132 12.4154 1.70692 12.8599C0.742163 13.8686 0.601247 15.3894 1.36418 16.5581C1.7003 17.0732 1.76023 17.7198 1.52442 18.2877C0.98918 19.5768 1.40719 21.0457 2.54084 21.8601C3.04029 22.2189 3.32979 22.8002 3.31505 23.415C3.28166 24.8103 4.20206 26.0292 5.55332 26.379C5.95208 26.4822 6.29851 26.713 6.5468 27.0277L3.43935 34.529C3.2379 35.0153 3.33272 35.5591 3.68674 35.9486C4.04084 36.3379 4.57352 36.484 5.0765 36.3296L8.4785 35.2857C8.57738 35.2552 8.68491 35.2997 8.73348 35.3913L10.4007 38.5351C10.6369 38.9804 11.087 39.25 11.5865 39.25C12.1371 39.25 12.6207 38.9285 12.8315 38.4196L16.0702 30.6009C16.1126 30.5995 16.155 30.5995 16.1975 30.6009L19.4362 38.4196C19.6375 38.9057 20.0892 39.2233 20.6148 39.2483C21.1322 39.274 21.6172 39.0058 21.8669 38.535L23.5341 35.3913C23.5828 35.2996 23.6899 35.255 23.7892 35.2856L27.1911 36.3295C27.6944 36.4839 28.2269 36.3379 28.5809 35.9485C28.9349 35.5591 29.0297 35.0152 28.8283 34.529L25.721 27.0275C25.9693 26.7129 26.3157 26.4822 26.7145 26.3789C28.0658 26.0291 28.9862 24.8103 28.9528 23.415C28.9381 22.8001 29.2276 22.2188 29.7271 21.86C30.8606 21.0457 31.2787 19.5767 30.7434 18.2877C30.5076 17.7198 30.5675 17.0732 30.9037 16.5582ZM11.7892 37.9879C11.7433 38.0984 11.6505 38.119 11.5992 38.1215C11.5482 38.1238 11.4535 38.1123 11.3974 38.0065L9.73013 34.8627C9.42837 34.2939 8.76289 34.0183 8.14741 34.2071L4.74549 35.2511C4.63112 35.2861 4.556 35.2276 4.52149 35.1896C4.48697 35.1517 4.43584 35.0714 4.48163 34.9608L7.23837 28.3056C7.86039 29.1577 8.90004 29.6327 9.99466 29.5044C10.6059 29.4332 11.2111 29.6677 11.6144 30.1319C12.3846 31.0184 13.5695 31.3574 14.6611 31.0546L11.7892 37.9879ZM27.7462 35.1896C27.7116 35.2277 27.6365 35.2861 27.5222 35.2511L24.1204 34.2071C23.505 34.0184 22.8393 34.2939 22.5375 34.8628L20.8703 38.0065C20.8143 38.1121 20.7206 38.1232 20.6684 38.1215C20.6171 38.119 20.5244 38.0984 20.4785 37.9879L17.6059 31.0533C17.8682 31.1261 18.1358 31.1633 18.4018 31.1633C19.2431 31.1632 20.0679 30.8056 20.6532 30.1319C21.0566 29.6677 21.6625 29.433 22.273 29.5044C23.3671 29.6322 24.4071 29.1574 25.0292 28.3055L27.786 34.961C27.8319 35.0714 27.7807 35.1517 27.7462 35.1896ZM29.9589 15.9416C29.4188 16.7689 29.3225 17.8078 29.7014 18.7204C30.0345 19.5227 29.7744 20.437 29.0687 20.9438C28.2663 21.5202 27.8012 22.4542 27.8248 23.442C27.8455 24.3104 27.2727 25.0691 26.4316 25.2868C25.6445 25.4906 24.9837 26.0029 24.5875 26.6959C24.5866 26.6974 24.5857 26.699 24.5849 26.7006C24.5008 26.8484 24.4279 27.0039 24.3692 27.1669C24.0749 27.9843 23.2658 28.4844 22.4038 28.3838C21.422 28.269 20.4495 28.6461 19.8014 29.3918C19.2317 30.0476 18.2971 30.2224 17.5291 29.8167C16.6739 29.3651 15.626 29.3479 14.7383 29.8167C13.97 30.2225 13.0356 30.0476 12.466 29.3918C11.8179 28.646 10.8448 28.2691 9.8636 28.3838C9.00058 28.4842 8.19245 27.9841 7.89814 27.1669C7.83956 27.0042 7.76692 26.8491 7.683 26.7016C7.68173 26.6992 7.68037 26.6968 7.67909 26.6944C7.28281 26.0022 6.6223 25.4904 5.83575 25.2867C4.99469 25.069 4.42185 24.3104 4.44261 23.4419C4.46622 22.454 4.00113 21.5201 3.19865 20.9437C2.49301 20.4369 2.23291 19.5226 2.56603 18.7203C2.94486 17.8077 2.84861 16.7689 2.30848 15.9414C1.83362 15.214 1.9213 14.2674 2.52181 13.6396C3.20474 12.9255 3.49026 11.9221 3.2855 10.9553C3.10556 10.1055 3.52928 9.2545 4.31598 8.88597C5.21073 8.46675 5.83944 7.63426 5.99772 6.65898C6.13691 5.80138 6.83946 5.16094 7.70609 5.10146C8.69183 5.03386 9.57883 4.4847 10.0788 3.63236C10.5185 2.88304 11.4049 2.5397 12.2345 2.79717C13.1781 3.09013 14.2036 2.89868 14.9778 2.28441C15.6582 1.74443 16.6089 1.74443 17.2894 2.28441H17.2894C18.0635 2.89861 19.089 3.09013 20.0326 2.79724C20.8624 2.53955 21.7488 2.88297 22.1884 3.63236C22.6883 4.4847 23.5753 5.03386 24.561 5.10146C25.4277 5.16094 26.1303 5.80138 26.2694 6.6589C26.4277 7.63426 27.0564 8.46683 27.9512 8.88597C28.7379 9.2545 29.1616 10.1055 28.9817 10.9553C28.7769 11.922 29.0623 12.9255 29.7453 13.6396C30.3461 14.2675 30.4338 15.214 29.9589 15.9416Z" fill="#172B4D"></path><path d="M27.2651 16.6499C26.9567 16.6148 26.6765 16.8381 26.6418 17.1478C26.4053 19.2605 25.5573 21.1677 24.286 22.7026V22.3708C24.286 20.9428 23.329 19.6644 21.9588 19.2621L20.3994 18.8044C20.2677 18.6431 20.0876 18.5243 19.8801 18.4699C19.8686 18.4669 19.8571 18.4643 19.8456 18.462L18.4435 18.1879V17.1735C19.2187 16.5824 19.7644 15.7016 19.911 14.6879C20.3234 14.5382 20.6187 14.1425 20.6187 13.6791C20.6187 12.5732 20.6187 11.5894 20.6187 10.4706C20.6187 9.69074 20.0323 9.04534 19.2773 8.9521C19.1676 8.21541 18.5308 7.64844 17.7639 7.64844H14.4353C12.8983 7.64844 11.648 8.89879 11.648 10.4356V13.6791C11.648 14.1425 11.9434 14.5382 12.3557 14.6879C12.5024 15.7017 13.048 16.5825 13.8233 17.1736V18.188L12.4411 18.4561C12.429 18.4584 12.417 18.4612 12.4051 18.4642C12.1978 18.5188 12.0179 18.6379 11.8862 18.7995L10.3094 19.2622C8.93899 19.6644 7.98198 20.9428 7.98198 22.371V22.7025C6.71073 21.1676 5.86267 19.2604 5.62618 17.1477C5.59159 16.8381 5.31194 16.6147 5.00289 16.6499C4.69323 16.6845 4.47035 16.9636 4.50502 17.2732C5.16787 23.1945 10.1672 27.6597 16.134 27.6597C22.1008 27.6597 27.1001 23.1944 27.763 17.2732C27.7976 16.9636 27.5748 16.6846 27.2651 16.6499ZM23.1578 22.3708V23.8697C21.8555 25.0247 20.2679 25.859 18.5205 26.2611L17.4676 22.7858L18.2498 22.0364C18.2918 22.0413 18.3338 22.0444 18.3759 22.0444C18.7085 22.0444 19.036 21.8925 19.2486 21.6079L20.4264 20.0318C20.4352 20.02 20.4422 20.0073 20.4505 19.9952L21.6409 20.3446C22.534 20.6068 23.1578 21.44 23.1578 22.3708ZM15.6648 22.0539L15.0889 21.5103L16.1693 20.8037L17.1976 21.482L16.6007 22.0539H15.6648ZM18.3676 20.9022L17.1035 20.0683L18.0405 19.2587L19.3976 19.524L18.3676 20.9022ZM14.4353 8.77659H17.7639C17.9855 8.77659 18.1658 8.95684 18.1658 9.17844C18.1658 9.66939 18.5652 10.0688 19.0562 10.0688H19.0887C19.3103 10.0688 19.4906 10.249 19.4906 10.4706V12.0159H18.6992C18.6397 12.0159 18.5912 11.9674 18.5912 11.9078V11.54C18.5912 11.0207 18.2856 10.6124 17.7527 10.4199C17.4425 10.3078 17.1502 10.3022 17.0948 10.3022V10.3036C16.9681 10.3016 15.1663 10.3022 15.1587 10.3022C14.444 10.3151 13.6756 10.7076 13.6756 11.5398V11.9078C13.6756 11.9674 13.6271 12.0159 13.5676 12.0159H12.7762V10.4356C12.7761 9.5208 13.5204 8.77659 14.4353 8.77659ZM12.7761 13.6257V13.1441H13.5675C14.2492 13.1441 14.8037 12.5895 14.8037 11.9078V11.5398C14.8037 11.535 14.8039 11.5313 14.8042 11.5286C14.8488 11.4865 15.015 11.436 15.1659 11.4305C15.1702 11.4306 15.1747 11.4305 15.1793 11.4306C15.2506 11.4303 16.5829 11.4304 17.0909 11.4304C17.2285 11.4325 17.4138 11.482 17.4625 11.5284C17.4628 11.5312 17.463 11.535 17.463 11.54V11.9078C17.463 12.57 17.9867 13.1107 18.6415 13.1412C18.6924 13.1464 18.6529 13.1431 19.4906 13.1441V13.6257C19.1311 13.653 18.84 13.9437 18.8169 14.3101C18.7279 15.7217 17.5492 16.8275 16.1335 16.8275C14.7178 16.8275 13.5391 15.7216 13.45 14.31C13.4268 13.9437 13.1357 13.653 12.7761 13.6257ZM16.1333 17.9556C16.5449 17.9556 16.9423 17.8895 17.3152 17.7675V18.3942L16.1627 19.39L14.9515 18.3877V17.7675C15.3244 17.8895 15.7218 17.9556 16.1333 17.9556ZM14.2332 19.2577L15.2216 20.0756L13.9166 20.9292L12.8863 19.5189L14.2332 19.2577ZM10.6271 20.3447L11.8357 19.99C11.8418 19.999 11.8468 20.0085 11.8532 20.0173C11.8532 20.0173 11.8533 20.0173 11.8533 20.0174L13.0282 21.6255C13.2407 21.9164 13.5711 22.072 13.9073 22.072C13.9489 22.072 13.9905 22.069 14.0321 22.0642L14.7997 22.7887L13.7502 26.2618C12.0018 25.8599 10.4131 25.0254 9.11021 23.8697V22.371C9.11021 21.4401 9.73403 20.6069 10.6271 20.3447ZM14.87 26.4567L15.8595 23.182H16.4089L17.401 26.4563C16.9852 26.5059 16.5625 26.5316 16.1341 26.5316C15.7067 26.5316 15.2848 26.506 14.87 26.4567Z" fill="#172B4D"></path><path d="M5.01136 15.1316C5.31928 15.1687 5.60224 14.9504 5.64059 14.6412C6.29502 9.36268 10.8061 5.38214 16.1337 5.38214C21.4636 5.38214 25.9749 9.36456 26.6273 14.6457C26.6625 14.9314 26.9057 15.1407 27.1863 15.1407C27.2094 15.1407 27.2327 15.1393 27.2563 15.1363C27.5654 15.0981 27.7851 14.8165 27.7469 14.5073C27.0249 8.66194 22.0322 4.25391 16.1337 4.25391C10.2376 4.25391 5.24529 8.65976 4.52093 14.5024C4.48266 14.8116 4.70223 15.0933 5.01136 15.1316Z" fill="#172B4D"></path></svg>&nbsp; &nbsp; &nbsp;
                  </div>
                  <div>
                    <label>Candidate Requirements</label>
                    <div class="shortDetails">
                      <ul>
                        <li>Education:
                          <span>Graduate</span>
                        </li>
                        <li>Graduate:
                          <span>Any</span>
                        </li>
                        <li>English:
                          <span>Good English</span>
                        </li>
                        <li>
                          <a href="#">View 6 more</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p><a>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#EBF3FE"></rect><g clip-path="url(#clip0_502_26996)"><path d="M10 19.6397V21.6664C10 21.853 10.1467 21.9997 10.3333 21.9997H12.36C12.4467 21.9997 12.5333 21.9664 12.5933 21.8997L19.8733 14.6264L17.3733 12.1264L10.1 19.3997C10.0333 19.4664 10 19.5464 10 19.6397ZM21.8067 12.693C22.0667 12.433 22.0667 12.013 21.8067 11.753L20.2467 10.193C19.9867 9.93305 19.5667 9.93305 19.3067 10.193L18.0867 11.413L20.5867 13.913L21.8067 12.693Z" fill="#0074E8"></path></g><defs><clipPath id="clip0_502_26996"><rect width="16" height="16" fill="white" transform="translate(8 8)"></rect></clipPath></defs></svg></a></p>
              </div>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
              <div class="blueButton detailsLayer">
                  <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2386_94499)"><path d="M7.49996 9.99998C9.34091 9.99998 10.8333 8.5076 10.8333 6.66665C10.8333 4.8257 9.34091 3.33331 7.49996 3.33331C5.65901 3.33331 4.16663 4.8257 4.16663 6.66665C4.16663 8.5076 5.65901 9.99998 7.49996 9.99998Z" fill="#004BA9"></path><path d="M7.49998 11.6666C5.27498 11.6666 0.833313 12.7833 0.833313 15V15.8333C0.833313 16.2916 1.20831 16.6666 1.66665 16.6666H13.3333C13.7916 16.6666 14.1666 16.2916 14.1666 15.8333V15C14.1666 12.7833 9.72498 11.6666 7.49998 11.6666Z" fill="#004BA9"></path><path d="M15.5001 6C13.5681 6 12.0001 7.568 12.0001 9.5C12.0001 11.432 13.5681 13 15.5001 13C17.4321 13 19.0001 11.432 19.0001 9.5C19.0001 7.568 17.4321 6 15.5001 6ZM14.5516 11.0015L13.2951 9.745C13.1586 9.6085 13.1586 9.388 13.2951 9.2515C13.4316 9.115 13.6521 9.115 13.7886 9.2515L14.8001 10.2595L17.2081 7.8515C17.3446 7.715 17.5651 7.715 17.7016 7.8515C17.8381 7.988 17.8381 8.2085 17.7016 8.345L15.0451 11.0015C14.9121 11.138 14.6881 11.138 14.5516 11.0015Z" fill="#004BA9"></path></g><defs><clipPath id="clip0_2386_94499"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                    </div>
                  <div>
                    <p>
                      <span>Eligible requirements</span>
                      <span>Your job will only be visible to the candidates who meet these requirements.</span>
                      </p>
                  </div>
                </div>

                <div class="jobDetailsData">
                  
                  <p>
                    <span>Minimum Education</span>
                    <span>Graduate</span>
                  </p>
                  <p>
                    <span>Experience Required</span>
                    <span>Any</span>
                  </p>
                  <p>
                    <span>English</span>
                    <span>Good English</span>
                  </p>
                </div>

                <Divider component="div" />

                <div class="blueButton detailsLayer">
                  <div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1987_83551)"><path d="M10.8334 13.3333H9.16669C8.70835 13.3333 8.33335 12.9583 8.33335 12.5H2.50835V15.8333C2.50835 16.75 3.25835 17.5 4.17502 17.5H15.8334C16.75 17.5 17.5 16.75 17.5 15.8333V12.5H11.6667C11.6667 12.9583 11.2917 13.3333 10.8334 13.3333ZM16.6667 5.83333H13.3334C13.3334 3.99167 11.8417 2.5 10 2.5C8.15835 2.5 6.66669 3.99167 6.66669 5.83333H3.33335C2.41669 5.83333 1.66669 6.58333 1.66669 7.5V10C1.66669 10.925 2.40835 11.6667 3.33335 11.6667H8.33335V10.8333C8.33335 10.375 8.70835 10 9.16669 10H10.8334C11.2917 10 11.6667 10.375 11.6667 10.8333V11.6667H16.6667C17.5834 11.6667 18.3334 10.9167 18.3334 10V7.5C18.3334 6.58333 17.5834 5.83333 16.6667 5.83333ZM8.33335 5.83333C8.33335 4.91667 9.08335 4.16667 10 4.16667C10.9167 4.16667 11.6667 4.91667 11.6667 5.83333H8.32502H8.33335Z" fill="#004BA9"></path></g><defs><clipPath id="clip0_1987_83551"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                    </div>
                  <div>
                    <p>
                      <span>Preferred requirements</span>
                      <span>Your job will be promoted to the candidates meeting below requirements, but others can still apply.</span>
                      </p>
                  </div>
                </div>

                <div class="jobDetailsData">
                <p>
                    <span>Age</span>
                    <span>18 - 60 yrs</span>
                  </p>
                  <p>
                    <span>Gender</span>
                    <span>Both genders allowed</span>
                  </p>

                  <p>
                    <span>Candidate job titles & roles</span>
                    <span>None</span>
                  </p>
                  <p>
                    <span>Degree / Specialization</span>
                    <span>No input selected</span>
                  </p>
                  <p>
                    <span>Industry</span>
                    <span>None
                    </span>
                  </p>
                </div>

                <Divider component="div" />

                <div class="jobDetailsData">
                  <p>
                    <span>Job Description</span>
                    <span>None</span>
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="div">
          <div class="d-flex justify-content-between  align-items-center accordianHead">
              <div>
                <div class="d-flex  align-items-center">
                  <div>
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_502_25533)"><path d="M29.5778 19.7536V21.2307C29.5778 21.4916 29.4304 21.7302 29.197 21.8469L28.889 22.0009H37.1568L36.5404 21.6927C36.0737 21.4594 35.7788 20.9823 35.7787 20.4606L35.7778 8.91211H25.4446V14.4232C25.4446 16.9901 27.2022 19.141 29.5778 19.7536Z" fill="#DFE1E6"></path><path d="M6.15555 12.3565C8.43833 12.3565 10.2889 10.506 10.2889 8.22318C10.2889 5.9404 8.43833 4.08984 6.15555 4.08984C3.87277 4.08984 2.02222 5.9404 2.02222 8.22318C2.02222 10.506 3.87277 12.3565 6.15555 12.3565Z" fill="#F4F5F7"></path><path d="M17.8437 13.734C17.8437 9.54889 15.163 6.15625 10.9779 6.15625C6.7927 6.15625 3.40015 9.54889 3.40015 13.734C3.40015 17.1784 6.79279 19.245 10.9779 19.245C15.1629 19.245 17.8437 17.1784 17.8437 13.734Z" fill="#F4F5F7"></path><path d="M8.22236 10.9776C7.29698 10.4013 6.31025 9.57798 5.71608 8.28711C4.29029 9.66503 3.40015 11.5936 3.40015 13.7331C3.40015 17.159 6.7573 19.2201 10.9113 19.2422L8.22236 10.9776Z" fill="#DFE1E6"></path><path d="M13.0444 23.377H7.5333C4.48965 23.377 2.02222 25.8444 2.02222 28.888V37.1547H16.4888V26.8214C16.4888 24.9191 14.9467 23.377 13.0444 23.377Z" fill="#F4F5F7"></path><path d="M7.5333 25.4436H8.91105V24.7547V23.377H7.5333C4.48965 23.377 2.02222 25.8444 2.02222 28.888V37.1547H4.08884V28.888C4.08893 26.9887 5.63408 25.4436 7.5333 25.4436Z" fill="#F4F5F7"></path><path d="M10.289 26.1336C8.76717 26.1336 7.53345 24.8998 7.53345 23.3781V19.9336H13.0445V23.3781C13.0445 24.8998 11.8109 26.1336 10.289 26.1336Z" fill="#F4F5F7"></path><path d="M7.53345 23.1493C8.54278 23.73 9.70913 24.0674 10.9548 24.0674C11.6834 24.0674 12.3849 23.9518 13.0445 23.7413V20.623H7.53345V23.1493Z" fill="#F4F5F7"></path><path d="M19.2445 27.5117H6.84448V37.1561H19.2444C20.0053 37.1561 20.6222 36.5393 20.6222 35.7784V28.8896C20.6222 28.1286 20.0054 27.5117 19.2445 27.5117Z" fill="white"></path><path d="M6.84455 27.5117C6.08366 27.5117 5.4668 28.1286 5.4668 28.8895V35.7783C5.4668 36.5392 6.08366 37.1561 6.84455 37.1561H19.2445C20.0054 37.1561 20.6222 36.5392 20.6222 35.7783H20.622L20.6222 35.0894H9.60013C8.45871 35.0894 7.53351 34.1641 7.53351 33.0228V27.5117H6.84455Z" fill="white"></path><path d="M8.19919 10.9785C10.3892 12.5314 13.5182 13.0348 15.23 13.1975C15.9337 13.2644 16.4658 13.8607 16.4658 14.5676V16.4896C16.4658 19.5333 13.9983 22.0007 10.9547 22.0007C7.91104 22.0007 5.4436 19.5333 5.4436 16.4896V16.4884C5.4436 14.9005 6.03391 13.3693 7.09979 12.1924L8.19919 10.9785Z" fill="#F4F5F7"></path><path d="M13.0445 33.7106C13.8054 33.7106 14.4222 33.0937 14.4222 32.3328C14.4222 31.5719 13.8054 30.9551 13.0445 30.9551C12.2836 30.9551 11.6667 31.5719 11.6667 32.3328C11.6667 33.0937 12.2836 33.7106 13.0445 33.7106Z" fill="white"></path><path d="M39.7657 23.3044L37.1568 22H28.889L24.9012 23.9939C23.9676 24.4606 23.3779 25.4148 23.3779 26.4585V39.911H41.2889V25.7691C41.2889 24.7253 40.6992 23.7713 39.7657 23.3044Z" fill="#DFE1E6"></path><path d="M28.2 29.8556C28.2 28.8092 27.7243 27.8196 26.9072 27.1659L23.9434 24.7949C23.5858 25.2658 23.3777 25.8452 23.3777 26.4587V39.9112H28.1999L28.2 29.8556Z" fill="#DFE1E6"></path><path d="M40.5999 30.2676H30.9555C29.4337 30.2676 28.2 31.5013 28.2 33.0232L30.2666 39.912H43.3555V33.0232C43.3555 31.5012 42.1217 30.2676 40.5999 30.2676Z" fill="#F4F5F7"></path><path d="M29.5777 19.7536V8.91211H25.4443V14.4232C25.4444 16.9901 27.202 19.141 29.5777 19.7536Z" fill="#B3BAC5"></path><path d="M33.0222 4.77734H27.5111C25.6088 4.77734 24.0667 6.31949 24.0667 8.2218C24.0667 8.9827 24.6835 9.59955 25.4444 9.59955H26.1333C27.2747 9.59955 28.1999 10.5248 28.1999 11.6662V13.7328C28.1999 15.6351 29.742 17.1773 31.6444 17.1773H35.0888C36.6107 17.1773 37.8444 15.9435 37.8444 14.4217V9.59955C37.8444 6.93627 35.6854 4.77734 33.0222 4.77734Z" fill="#DFE1E6"></path><path d="M33.0222 30.2676H30.9555C29.4337 30.2676 28.2 31.5013 28.2 33.0232V39.912H30.2666V33.0232C30.2667 31.5012 31.5003 30.2676 33.0222 30.2676Z" fill="white"></path><path d="M27.5111 4.77734C25.6088 4.77734 24.0667 6.31949 24.0667 8.2218C24.0667 8.9827 24.6835 9.59955 25.4444 9.59955H26.1333C27.2747 9.59955 28.1999 10.5248 28.1999 11.6662V4.77734H27.5111Z" fill="#B3BAC5"></path><path d="M7.53326 16.4889V11.7129L7.0997 12.1916C6.03382 13.3685 5.4436 14.8997 5.4436 16.4876V16.4889C5.4436 19.5325 7.91095 22 10.9547 22C11.3123 22 11.6609 21.9631 11.9995 21.898C9.45594 21.4095 7.53326 19.175 7.53326 16.4889Z" fill="#F4F5F7"></path><path d="M9.67795 18.2906C9.53195 18.6153 9.67684 18.9967 10.0015 19.1427C10.4912 19.3629 11.0591 19.4794 11.6436 19.4794C12.2281 19.4794 12.796 19.363 13.2857 19.1427C13.6104 18.9967 13.7552 18.6153 13.6093 18.2906C13.4632 17.966 13.0818 17.8212 12.7571 17.967C12.4323 18.113 12.0473 18.1902 11.6436 18.1902C11.2399 18.1902 10.8549 18.113 10.5301 17.967C10.2054 17.821 9.82387 17.9658 9.67795 18.2906Z" fill="#172B4D"></path><path d="M9.5769 16.4447C9.93286 16.4447 10.2214 16.1562 10.2214 15.8002V15.1113C10.2214 14.7554 9.93286 14.4668 9.5769 14.4668C9.22095 14.4668 8.93237 14.7554 8.93237 15.1113V15.8002C8.93237 16.1562 9.22095 16.4447 9.5769 16.4447Z" fill="#172B4D"></path><path d="M13.7102 16.4447C14.0662 16.4447 14.3547 16.1562 14.3547 15.8002V15.1113C14.3547 14.7554 14.0662 14.4668 13.7102 14.4668C13.3543 14.4668 13.0657 14.7554 13.0657 15.1113V15.8002C13.0657 16.1562 13.3543 16.4447 13.7102 16.4447Z" fill="#172B4D"></path><path d="M13.0445 30.3105C11.9294 30.3105 11.0222 31.2178 11.0222 32.3328C11.0222 33.448 11.9295 34.3552 13.0445 34.3552C14.1595 34.3552 15.0668 33.448 15.0668 32.3328C15.0668 31.2178 14.1595 30.3105 13.0445 30.3105ZM13.0445 33.0661C12.6402 33.0661 12.3113 32.7372 12.3113 32.3328C12.3113 31.9285 12.6402 31.5996 13.0445 31.5996C13.4487 31.5996 13.7777 31.9286 13.7777 32.3328C13.7777 32.7372 13.4487 33.0661 13.0445 33.0661Z" fill="#172B4D"></path><path d="M41.9334 29.8957V25.77C41.9334 24.4738 41.2132 23.3085 40.0538 22.7288L36.8285 21.1161C36.5786 20.9912 36.4233 20.74 36.4232 20.4605L36.4224 17.5504C37.6362 17.0308 38.4889 15.8248 38.4889 14.4231V9.60084C38.4889 6.5865 36.0365 4.1341 33.0222 4.1341H27.5111C25.2564 4.1341 23.4221 5.96844 23.4221 8.22309C23.4221 9.1128 23.9999 9.86966 24.7998 10.1395V14.4231C24.7998 17.0586 26.4758 19.3794 28.9332 20.2317V21.258L24.6128 23.4182C23.4535 23.9979 22.7332 25.1632 22.7332 26.4594V36.5118H21.107C21.2097 36.2651 21.2667 35.9948 21.2667 35.7113V28.957C21.2667 27.8048 20.3293 26.8674 19.1771 26.8674H17.1334V26.8231C17.1334 24.7877 15.6384 23.0954 13.6888 22.7854V22.0027C15.4512 21.125 16.7366 19.4279 17.0409 17.4126C17.9743 16.4257 18.488 15.1258 18.488 13.7343C18.488 11.5056 17.7655 9.452 16.4537 7.9517C15.078 6.37845 13.1251 5.51194 10.9546 5.51194C10.6649 5.51194 10.3788 5.52723 10.0969 5.55654C9.21353 4.24616 7.72544 3.44531 6.1325 3.44531C3.498 3.44531 1.35463 5.58859 1.35463 8.22318C1.35463 9.60299 1.93746 10.891 2.96312 11.7987C2.81273 12.4197 2.73238 13.0677 2.73238 13.7343C2.73238 15.5121 3.56812 17.1158 5.02691 18.1448C5.35159 19.306 6.00832 20.3293 6.88875 21.1057V22.768C3.79646 23.0913 1.37775 25.7133 1.37775 28.8897V36.5118H0.644531C0.288578 36.5118 0 36.8004 0 37.1564C0 37.5123 0.288578 37.8009 0.644531 37.8009H22.7332V39.9119C22.7332 40.2678 23.0218 40.5564 23.3778 40.5564C23.7337 40.5564 24.0223 40.2678 24.0223 39.9119V26.4594C24.0223 26.187 24.0746 25.9245 24.1703 25.6817L26.548 27.6632C27.1882 28.1967 27.5554 28.9807 27.5554 29.8141V39.9119C27.5554 40.2678 27.844 40.5564 28.2 40.5564C28.5559 40.5564 28.8445 40.2678 28.8445 39.9119V33.023C28.8445 31.859 29.7915 30.912 30.9555 30.912H40.5999C41.7639 30.912 42.7108 31.859 42.7108 33.023V39.9119C42.7108 40.2678 42.9994 40.5564 43.3554 40.5564C43.7113 40.5564 43.9999 40.2678 43.9999 39.9119V33.023C44 31.6213 43.1472 30.4152 41.9334 29.8957ZM2.64378 8.22309C2.64378 6.29938 4.20879 4.73429 6.13259 4.73429C7.10351 4.73429 8.0202 5.14309 8.67238 5.83446C6.32225 6.51457 4.40241 8.21725 3.4277 10.4271C2.92351 9.81087 2.64378 9.03916 2.64378 8.22309ZM4.80691 16.1589C4.29541 15.4716 4.02153 14.6433 4.02153 13.7343C4.02153 9.91125 7.13178 6.801 10.9547 6.801C12.7738 6.801 14.3397 7.49228 15.4834 8.80025C16.5897 10.0655 17.199 11.8178 17.199 13.7343C17.199 14.0349 17.1685 14.3264 17.1103 14.6074V14.5678C17.1103 13.5195 16.3282 12.6546 15.291 12.5561C13.6724 12.4021 10.6471 11.9243 8.57201 10.4528C8.30569 10.2641 7.94045 10.3041 7.72148 10.5459L6.62217 11.7598C5.52071 12.976 4.88305 14.5268 4.80691 16.1589ZM6.08816 16.4885C6.08816 15.0577 6.6171 13.6856 7.57763 12.6252L8.30603 11.8209C10.5792 13.2178 13.5398 13.6844 15.1691 13.8393C15.5409 13.8746 15.8213 14.1878 15.8213 14.5677V16.4897C15.8213 19.1731 13.6381 21.3562 10.9547 21.3562C8.27131 21.3562 6.08816 19.1732 6.08816 16.4885ZM12.3999 22.4724V22.6897C12.3999 23.8538 11.4529 24.8007 10.2889 24.8007C9.12484 24.8007 8.1779 23.8537 8.1779 22.6897V21.9807C9.01287 22.4048 9.95595 22.6454 10.9548 22.6454C11.4525 22.6454 11.936 22.5845 12.3999 22.4724ZM19.9777 35.7113C19.9777 36.1527 19.6186 36.5118 19.1772 36.5118H6.91178C6.47041 36.5118 6.11127 36.1527 6.11127 35.7113V32.3341C6.11127 31.9782 5.8227 31.6896 5.46674 31.6896C5.11079 31.6896 4.82221 31.9782 4.82221 32.3341V35.7113C4.82221 35.9948 4.87919 36.2651 4.98188 36.5118H2.66681V28.8897C2.66681 26.3292 4.65489 24.2258 7.1683 24.0383C7.69141 25.244 8.89298 26.0898 10.2889 26.0898C11.6812 26.0898 12.8802 25.2481 13.4054 24.0471C14.7793 24.2248 15.8444 25.4015 15.8444 26.823V26.8673H6.91178C5.75962 26.8673 4.82221 27.8047 4.82221 28.9569V29.5785C4.82221 29.9344 5.11079 30.223 5.46674 30.223C5.8227 30.223 6.11127 29.9344 6.11127 29.5785V28.9569C6.11127 28.5155 6.47041 28.1564 6.91178 28.1564H16.4864C16.4873 28.1564 16.4881 28.1565 16.4889 28.1565C16.4898 28.1565 16.4905 28.1564 16.4914 28.1564H19.1772C19.6186 28.1564 19.9777 28.5155 19.9777 28.9569V35.7113ZM26.089 14.4231V10.2455H26.1333C26.9175 10.2455 27.5554 10.8835 27.5554 11.6676V13.7343C27.5554 15.9889 29.3898 17.8233 31.6444 17.8233H32.3332C32.6892 17.8233 32.9777 17.5347 32.9777 17.1787C32.9777 16.8228 32.6892 16.5342 32.3332 16.5342H31.6444C30.1006 16.5342 28.8445 15.2781 28.8445 13.7343V11.6676C28.8445 10.1727 27.6283 8.9564 26.1333 8.9564H25.4445C25.0401 8.9564 24.7112 8.62743 24.7112 8.22318C24.7112 6.67931 25.9673 5.42325 27.5112 5.42325H33.0223C35.3258 5.42325 37.1999 7.29737 37.1999 9.60093V14.4231C37.1999 15.5872 36.2529 16.5341 35.089 16.5341C34.733 16.5341 34.4444 16.8227 34.4444 17.1786C34.4444 17.5346 34.733 17.8232 35.089 17.8232C35.1039 17.8232 35.1186 17.8222 35.1335 17.8221L35.1343 20.4609C35.1343 20.7792 35.2085 21.0836 35.3428 21.3563H30.2224V19.7536C30.2224 19.4596 30.0235 19.2029 29.7388 19.1295C27.5898 18.5753 26.089 16.64 26.089 14.4231ZM40.6443 29.624C40.6294 29.6239 40.6148 29.6229 40.6 29.6229H30.9555C30.1583 29.6229 29.4248 29.8994 28.8445 30.3606V29.8141C28.8445 28.597 28.3082 27.452 27.3732 26.6728L24.9894 24.6863C25.0536 24.6451 25.1198 24.606 25.1892 24.5712L29.0409 22.6454H37.0046L39.4774 23.8819C40.1972 24.2418 40.6443 24.9652 40.6443 25.77V29.624Z" fill="#172B4D"></path></g><defs><clipPath id="clip0_502_25533"><rect width="44" height="44" fill="white"></rect></clipPath></defs></svg>&nbsp; &nbsp; &nbsp;
                  </div>
                  <div>
                    <label>Interview Information</label>
                    <div class="shortDetails">
                      <ul>
                        <li>Communication Preference:
                          <span>Myself</span>
                        </li>
                        <li>Is this walk-in interview?
                          <span>No</span>
                        </li>
                        <li>
                          <a href="#">View 2 more</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p><a>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#EBF3FE"></rect><g clip-path="url(#clip0_502_26996)"><path d="M10 19.6397V21.6664C10 21.853 10.1467 21.9997 10.3333 21.9997H12.36C12.4467 21.9997 12.5333 21.9664 12.5933 21.8997L19.8733 14.6264L17.3733 12.1264L10.1 19.3997C10.0333 19.4664 10 19.5464 10 19.6397ZM21.8067 12.693C22.0667 12.433 22.0667 12.013 21.8067 11.753L20.2467 10.193C19.9867 9.93305 19.5667 9.93305 19.3067 10.193L18.0867 11.413L20.5867 13.913L21.8067 12.693Z" fill="#0074E8"></path></g><defs><clipPath id="clip0_502_26996"><rect width="16" height="16" fill="white" transform="translate(8 8)"></rect></clipPath></defs></svg></a></p>
              </div>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="jobDetailsData">
                  
                  <p>
                    <span>Is this a walk-in interview ?</span>
                    <span>No, I will share interview details later to the candidates</span>
                  </p>
                  <p>
                    <span>Company address</span>
                    <span>Hyderabad, Telangana, India , Hyderabad</span>
                  </p>
                  <p>
                    <span>HR Details</span>
                    <span>UI Developer, 7396301008</span>
                  </p>
                  <p>
                    <span>Can candidates contact</span>
                    <span>No</span>
                  </p>
                  <p>
                    <span>Hirings <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g filter="url(#a)"><path fill="#fff" d="m7.524 18.829.302.178a8.297 8.297 0 0 0 4.213 1.148h.003c4.562 0 8.275-3.694 8.277-8.235 0-2.2-.86-4.27-2.422-5.826a8.243 8.243 0 0 0-5.852-2.415c-4.566 0-8.278 3.694-8.28 8.235 0 1.555.437 3.07 1.265 4.382l.197.311-.836 3.04 3.133-.818ZM2 22l1.413-5.134a9.853 9.853 0 0 1-1.33-4.953c.003-5.463 4.47-9.907 9.959-9.907a9.92 9.92 0 0 1 7.044 2.905A9.824 9.824 0 0 1 22 11.921c-.002 5.462-4.47 9.907-9.958 9.907h-.004a9.99 9.99 0 0 1-4.759-1.206L2 22Z"></path></g><path fill="url(#b)" d="M2.427 11.91c0 1.686.442 3.332 1.283 4.782l-1.364 4.956 5.097-1.33a9.646 9.646 0 0 0 4.593 1.165h.005c5.298 0 9.61-4.291 9.613-9.565A9.481 9.481 0 0 0 18.84 5.15a9.575 9.575 0 0 0-6.8-2.805c-5.298 0-9.61 4.29-9.613 9.565Zm9.614 9.573Zm0 0Z"></path><path fill="url(#c)" d="M2.084 11.907c-.001 1.746.457 3.45 1.329 4.953L2 21.994l5.279-1.378a9.988 9.988 0 0 0 4.759 1.207h.004c5.488 0 9.956-4.445 9.958-9.908a9.824 9.824 0 0 0-2.914-7.01A9.92 9.92 0 0 0 12.042 2c-5.49 0-9.956 4.444-9.958 9.907Zm3.143 4.695-.197-.312a8.184 8.184 0 0 1-1.265-4.382c.002-4.54 3.714-8.235 8.28-8.235 2.21.001 4.289.859 5.852 2.415a8.165 8.165 0 0 1 2.422 5.826c-.002 4.54-3.715 8.235-8.277 8.235h-.003a8.296 8.296 0 0 1-4.213-1.148l-.302-.178-3.133.817.836-3.038Zm6.815 5.22Zm0 0Z"></path><path fill="#fff" fill-rule="evenodd" d="M9.553 7.766c-.186-.412-.382-.42-.56-.428-.145-.006-.31-.006-.477-.006a.916.916 0 0 0-.663.31c-.228.248-.871.847-.871 2.065 0 1.219.892 2.396 1.016 2.561.124.166 1.721 2.746 4.25 3.738 2.102.825 2.53.661 2.986.62.456-.041 1.472-.599 1.68-1.177.207-.578.207-1.074.145-1.178-.063-.103-.228-.165-.477-.289-.249-.123-1.472-.723-1.7-.805-.229-.083-.394-.124-.56.124-.166.248-.643.805-.788.97-.145.166-.29.187-.54.063-.248-.124-1.05-.386-2-1.23-.74-.656-1.24-1.466-1.384-1.714-.145-.248-.016-.382.109-.505.112-.111.249-.29.373-.434.124-.145.166-.248.249-.413.083-.165.041-.31-.02-.434-.063-.124-.547-1.348-.768-1.838Z" clip-rule="evenodd"></path><defs><linearGradient id="b" x1="12" x2="12" y1="21.648" y2="2.346" gradientUnits="userSpaceOnUse"><stop stop-color="#20B038"></stop><stop offset="1" stop-color="#60D66A"></stop></linearGradient><linearGradient id="c" x1="12" x2="12" y1="21.994" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient><filter id="a" width="22" height="21.994" x="0.75" y="1.206" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="-0.25" dy="0.2"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_209_21114"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_209_21114" result="shape"></feBlend></filter></defs></svg> alerts</span>
                    <span>Daily summary</span>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    
    <div class="d-flex justify-content-center bottom-buttons">
          <button type="button" class="btn btn-outline-dark">Back</button>
          <Button type="submit" variant="contained" color="primary">
            Continue
          </Button>
      </div>

    </Box>
    {/* Job Preview form start here  */}

    {/* Publish Job form start here  */}
    <Box component="section"
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 3,
      maxWidth: 1100,
      margin: "0 auto",
      background:'#fff',
      padding:'20px'
    }}>
      <div class="title">
        <h3>Choose a job basis your hiring needs</h3>
      </div>
        <div class="d-xl-flex align-items-center cardsLayer">
          
          <div class="package">
            <div class="card">
              <div class="card-body">
                {/* top layer start here */}
                <div class="topLayer">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h4>Classic job</h4>
                    </div>
                    <div>
                    <input class="form-check-input" value="classic" type="radio" name="plansList" id="flexRadioDefault2" />
                    </div>
                  </div>
                  <div class="price">
                    <h2>&#8377; 649</h2>
                  </div>
                </div>
                {/* top layer end here */}

                {/* bottom layer start here */}
                <div class="bottomLayer">
                  <div class="featuresList">
                    <ul>
                      <li>
                        <span><svg width="20" height="20" fill="#1F8268"><g clip-path="url(#prefix__clip0_1335_36151)"><path d="M7.5 13.475L4.025 10l-1.183 1.175L7.5 15.833l10-10-1.175-1.175L7.5 13.475z" fill="#1F8268"></path></g><defs><clipPath id="prefix__clip0_1335_36151"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg></span>
                        <span>Job will be active for 15 days</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#172B4D" d="m12.747 13.918 1.167-1.167-3.083-3.083V5.835H9.164v4.5l3.583 3.583Zm-2.75 4.417a8.115 8.115 0 0 1-3.25-.657 8.416 8.416 0 0 1-2.645-1.78A8.415 8.415 0 0 1 2.32 13.25a8.115 8.115 0 0 1-.656-3.25c0-1.152.219-2.236.656-3.25a8.415 8.415 0 0 1 1.782-2.646 8.415 8.415 0 0 1 2.645-1.78 8.115 8.115 0 0 1 3.25-.657c1.153 0 2.236.219 3.25.656a8.415 8.415 0 0 1 2.646 1.781 8.416 8.416 0 0 1 1.781 2.646 8.115 8.115 0 0 1 .657 3.25 8.115 8.115 0 0 1-.657 3.25 8.415 8.415 0 0 1-1.78 2.646 8.415 8.415 0 0 1-2.647 1.781 8.115 8.115 0 0 1-3.25.657Zm0-1.667c1.848 0 3.42-.65 4.72-1.948 1.298-1.299 1.947-2.872 1.947-4.719 0-1.847-.65-3.42-1.948-4.718-1.298-1.3-2.871-1.948-4.719-1.948-1.847 0-3.42.649-4.718 1.948C3.98 6.58 3.33 8.154 3.33 10c0 1.848.649 3.42 1.948 4.72 1.298 1.298 2.871 1.947 4.718 1.947Z"></path></svg></span>
                      </li>

                      <li>
                        <span><svg width="20" height="20" fill="none"><g clip-path="url(#prefix__clip0_1335_36186)"><path d="M15.833 5.341l-1.175-1.175L10 8.825 5.342 4.167 4.167 5.341 8.825 10l-4.658 4.658 1.175 1.175L10 11.175l4.658 4.658 1.175-1.175L11.175 10l4.658-4.659z" fill="#C00"></path></g><defs><clipPath id="prefix__clip0_1335_36186"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg></span>
                        <span class="notAvailable">WhatsApp Job Notify</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g filter="url(#a)"><path fill="#fff" d="m7.524 18.829.302.178a8.297 8.297 0 0 0 4.213 1.148h.003c4.562 0 8.275-3.694 8.277-8.235 0-2.2-.86-4.27-2.422-5.826a8.243 8.243 0 0 0-5.852-2.415c-4.566 0-8.278 3.694-8.28 8.235 0 1.555.437 3.07 1.265 4.382l.197.311-.836 3.04 3.133-.818ZM2 22l1.413-5.134a9.853 9.853 0 0 1-1.33-4.953c.003-5.463 4.47-9.907 9.959-9.907a9.92 9.92 0 0 1 7.044 2.905A9.824 9.824 0 0 1 22 11.921c-.002 5.462-4.47 9.907-9.958 9.907h-.004a9.99 9.99 0 0 1-4.759-1.206L2 22Z"></path></g><path fill="url(#b)" d="M2.427 11.91c0 1.686.442 3.332 1.283 4.782l-1.364 4.956 5.097-1.33a9.646 9.646 0 0 0 4.593 1.165h.005c5.298 0 9.61-4.291 9.613-9.565A9.481 9.481 0 0 0 18.84 5.15a9.575 9.575 0 0 0-6.8-2.805c-5.298 0-9.61 4.29-9.613 9.565Zm9.614 9.573Zm0 0Z"></path><path fill="url(#c)" d="M2.084 11.907c-.001 1.746.457 3.45 1.329 4.953L2 21.994l5.279-1.378a9.988 9.988 0 0 0 4.759 1.207h.004c5.488 0 9.956-4.445 9.958-9.908a9.824 9.824 0 0 0-2.914-7.01A9.92 9.92 0 0 0 12.042 2c-5.49 0-9.956 4.444-9.958 9.907Zm3.143 4.695-.197-.312a8.184 8.184 0 0 1-1.265-4.382c.002-4.54 3.714-8.235 8.28-8.235 2.21.001 4.289.859 5.852 2.415a8.165 8.165 0 0 1 2.422 5.826c-.002 4.54-3.715 8.235-8.277 8.235h-.003a8.296 8.296 0 0 1-4.213-1.148l-.302-.178-3.133.817.836-3.038Zm6.815 5.22Zm0 0Z"></path><path fill="#fff" fill-rule="evenodd" d="M9.553 7.766c-.186-.412-.382-.42-.56-.428-.145-.006-.31-.006-.477-.006a.916.916 0 0 0-.663.31c-.228.248-.871.847-.871 2.065 0 1.219.892 2.396 1.016 2.561.124.166 1.721 2.746 4.25 3.738 2.102.825 2.53.661 2.986.62.456-.041 1.472-.599 1.68-1.177.207-.578.207-1.074.145-1.178-.063-.103-.228-.165-.477-.289-.249-.123-1.472-.723-1.7-.805-.229-.083-.394-.124-.56.124-.166.248-.643.805-.788.97-.145.166-.29.187-.54.063-.248-.124-1.05-.386-2-1.23-.74-.656-1.24-1.466-1.384-1.714-.145-.248-.016-.382.109-.505.112-.111.249-.29.373-.434.124-.145.166-.248.249-.413.083-.165.041-.31-.02-.434-.063-.124-.547-1.348-.768-1.838Z" clip-rule="evenodd"></path><defs><linearGradient id="b" x1="12" x2="12" y1="21.648" y2="2.346" gradientUnits="userSpaceOnUse"><stop stop-color="#20B038"></stop><stop offset="1" stop-color="#60D66A"></stop></linearGradient><linearGradient id="c" x1="12" x2="12" y1="21.994" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient><filter id="a" width="22" height="21.994" x="0.75" y="1.206" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="-0.25" dy="0.2"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_209_21114"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_209_21114" result="shape"></feBlend></filter></defs></svg></span>
                      </li>

                      <li>
                        <span><svg width="20" height="20" fill="none"><g clip-path="url(#prefix__clip0_1335_36186)"><path d="M15.833 5.341l-1.175-1.175L10 8.825 5.342 4.167 4.167 5.341 8.825 10l-4.658 4.658 1.175 1.175L10 11.175l4.658 4.658 1.175-1.175L11.175 10l4.658-4.659z" fill="#C00"></path></g><defs><clipPath id="prefix__clip0_1335_36186"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg></span>
                        <span class="notAvailable">Higher visibility to candidates</span>
                        <span></span>
                      </li>

                      <li>
                        <span><svg width="20" height="20" fill="none"><g clip-path="url(#prefix__clip0_1335_36186)"><path d="M15.833 5.341l-1.175-1.175L10 8.825 5.342 4.167 4.167 5.341 8.825 10l-4.658 4.658 1.175 1.175L10 11.175l4.658 4.658 1.175-1.175L11.175 10l4.658-4.659z" fill="#C00"></path></g><defs><clipPath id="prefix__clip0_1335_36186"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg></span>
                        <span class="notAvailable">Urgently hiring tag</span>
                        <span></span>
                      </li>

                    </ul>
                  </div>
                </div>
                {/* bottom layer end here */}

              </div>
            </div>
          </div>

          <div class="package">
            
            <div class="card">
            <div class="recommended">
              <p><span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path fill="#fff" d="m9.238 8.932 2.629-1.313a.248.248 0 0 0 .01-.434L9.228 5.67a.24.24 0 0 1-.095-.098L7.763 2.926a.232.232 0 0 0-.416 0l-1.37 2.646a.24.24 0 0 1-.093.098L3.232 7.185a.248.248 0 0 0 .011.434l2.63 1.313a.24.24 0 0 1 .108.111l1.363 2.822c.087.18.335.18.422 0L9.13 9.043a.24.24 0 0 1 .109-.11ZM3.594 3.557l1.384-.691a.248.248 0 0 0 .011-.434l-1.406-.804a.24.24 0 0 1-.094-.098L2.764.129a.232.232 0 0 0-.417 0l-.725 1.4a.24.24 0 0 1-.094.1l-1.406.803a.248.248 0 0 0 .011.434l1.384.691a.24.24 0 0 1 .108.111l.72 1.488c.086.18.335.18.422 0l.719-1.488a.24.24 0 0 1 .108-.11Z"></path></svg></span> Recommended </p>
            </div>
              <div class="card-body">
                {/* top layer start here */}
                <div class="topLayer">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h4>Premium job <span class="star">&#11088;</span></h4>
                    </div>
                    <div>
                    <input class="form-check-input" value="classic" type="radio" name="plansList" id="flexRadioDefault2" />
                    </div>
                  </div>
                  <div class="price">
                    <h2>&#8377; 1299</h2>
                  </div>
                </div>
                {/* top layer end here */}

                {/* bottom layer start here */}
                <div class="bottomLayer">
                <div class="featuresList">
                    <ul>
                      <li>
                        <span><svg width="20" height="20" fill="#1F8268"><g clip-path="url(#prefix__clip0_1335_36151)"><path d="M7.5 13.475L4.025 10l-1.183 1.175L7.5 15.833l10-10-1.175-1.175L7.5 13.475z" fill="#1F8268"></path></g><defs><clipPath id="prefix__clip0_1335_36151"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg></span>
                        <span>Job will be active for 15 days</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#172B4D" d="m12.747 13.918 1.167-1.167-3.083-3.083V5.835H9.164v4.5l3.583 3.583Zm-2.75 4.417a8.115 8.115 0 0 1-3.25-.657 8.416 8.416 0 0 1-2.645-1.78A8.415 8.415 0 0 1 2.32 13.25a8.115 8.115 0 0 1-.656-3.25c0-1.152.219-2.236.656-3.25a8.415 8.415 0 0 1 1.782-2.646 8.415 8.415 0 0 1 2.645-1.78 8.115 8.115 0 0 1 3.25-.657c1.153 0 2.236.219 3.25.656a8.415 8.415 0 0 1 2.646 1.781 8.416 8.416 0 0 1 1.781 2.646 8.115 8.115 0 0 1 .657 3.25 8.115 8.115 0 0 1-.657 3.25 8.415 8.415 0 0 1-1.78 2.646 8.415 8.415 0 0 1-2.647 1.781 8.115 8.115 0 0 1-3.25.657Zm0-1.667c1.848 0 3.42-.65 4.72-1.948 1.298-1.299 1.947-2.872 1.947-4.719 0-1.847-.65-3.42-1.948-4.718-1.298-1.3-2.871-1.948-4.719-1.948-1.847 0-3.42.649-4.718 1.948C3.98 6.58 3.33 8.154 3.33 10c0 1.848.649 3.42 1.948 4.72 1.298 1.298 2.871 1.947 4.718 1.947Z"></path></svg></span>
                      </li>

                      <li>
                        <span><svg width="20" height="20" fill="#1F8268"><g clip-path="url(#prefix__clip0_1335_36151)"><path d="M7.5 13.475L4.025 10l-1.183 1.175L7.5 15.833l10-10-1.175-1.175L7.5 13.475z" fill="#1F8268"></path></g><defs><clipPath id="prefix__clip0_1335_36151"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg></span>
                        <span class="dashed">WhatsApp Job Notify</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g filter="url(#a)"><path fill="#fff" d="m7.524 18.829.302.178a8.297 8.297 0 0 0 4.213 1.148h.003c4.562 0 8.275-3.694 8.277-8.235 0-2.2-.86-4.27-2.422-5.826a8.243 8.243 0 0 0-5.852-2.415c-4.566 0-8.278 3.694-8.28 8.235 0 1.555.437 3.07 1.265 4.382l.197.311-.836 3.04 3.133-.818ZM2 22l1.413-5.134a9.853 9.853 0 0 1-1.33-4.953c.003-5.463 4.47-9.907 9.959-9.907a9.92 9.92 0 0 1 7.044 2.905A9.824 9.824 0 0 1 22 11.921c-.002 5.462-4.47 9.907-9.958 9.907h-.004a9.99 9.99 0 0 1-4.759-1.206L2 22Z"></path></g><path fill="url(#b)" d="M2.427 11.91c0 1.686.442 3.332 1.283 4.782l-1.364 4.956 5.097-1.33a9.646 9.646 0 0 0 4.593 1.165h.005c5.298 0 9.61-4.291 9.613-9.565A9.481 9.481 0 0 0 18.84 5.15a9.575 9.575 0 0 0-6.8-2.805c-5.298 0-9.61 4.29-9.613 9.565Zm9.614 9.573Zm0 0Z"></path><path fill="url(#c)" d="M2.084 11.907c-.001 1.746.457 3.45 1.329 4.953L2 21.994l5.279-1.378a9.988 9.988 0 0 0 4.759 1.207h.004c5.488 0 9.956-4.445 9.958-9.908a9.824 9.824 0 0 0-2.914-7.01A9.92 9.92 0 0 0 12.042 2c-5.49 0-9.956 4.444-9.958 9.907Zm3.143 4.695-.197-.312a8.184 8.184 0 0 1-1.265-4.382c.002-4.54 3.714-8.235 8.28-8.235 2.21.001 4.289.859 5.852 2.415a8.165 8.165 0 0 1 2.422 5.826c-.002 4.54-3.715 8.235-8.277 8.235h-.003a8.296 8.296 0 0 1-4.213-1.148l-.302-.178-3.133.817.836-3.038Zm6.815 5.22Zm0 0Z"></path><path fill="#fff" fill-rule="evenodd" d="M9.553 7.766c-.186-.412-.382-.42-.56-.428-.145-.006-.31-.006-.477-.006a.916.916 0 0 0-.663.31c-.228.248-.871.847-.871 2.065 0 1.219.892 2.396 1.016 2.561.124.166 1.721 2.746 4.25 3.738 2.102.825 2.53.661 2.986.62.456-.041 1.472-.599 1.68-1.177.207-.578.207-1.074.145-1.178-.063-.103-.228-.165-.477-.289-.249-.123-1.472-.723-1.7-.805-.229-.083-.394-.124-.56.124-.166.248-.643.805-.788.97-.145.166-.29.187-.54.063-.248-.124-1.05-.386-2-1.23-.74-.656-1.24-1.466-1.384-1.714-.145-.248-.016-.382.109-.505.112-.111.249-.29.373-.434.124-.145.166-.248.249-.413.083-.165.041-.31-.02-.434-.063-.124-.547-1.348-.768-1.838Z" clip-rule="evenodd"></path><defs><linearGradient id="b" x1="12" x2="12" y1="21.648" y2="2.346" gradientUnits="userSpaceOnUse"><stop stop-color="#20B038"></stop><stop offset="1" stop-color="#60D66A"></stop></linearGradient><linearGradient id="c" x1="12" x2="12" y1="21.994" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient><filter id="a" width="22" height="21.994" x="0.75" y="1.206" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="-0.25" dy="0.2"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_209_21114"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_209_21114" result="shape"></feBlend></filter></defs></svg></span>
                      </li>

                      <li>
                        <span><svg width="20" height="20" fill="#1F8268"><g clip-path="url(#prefix__clip0_1335_36151)"><path d="M7.5 13.475L4.025 10l-1.183 1.175L7.5 15.833l10-10-1.175-1.175L7.5 13.475z" fill="#1F8268"></path></g><defs><clipPath id="prefix__clip0_1335_36151"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg></span>
                        <span class="dashed">Higher visibility to candidates</span>
                        <span></span>
                      </li>

                      <li>
                        <span><svg width="20" height="20" fill="#1F8268"><g clip-path="url(#prefix__clip0_1335_36151)"><path d="M7.5 13.475L4.025 10l-1.183 1.175L7.5 15.833l10-10-1.175-1.175L7.5 13.475z" fill="#1F8268"></path></g><defs><clipPath id="prefix__clip0_1335_36151"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg></span>
                        <span class="dashed">Urgently hiring tag</span>
                        <span></span>
                      </li>

                    </ul>
                  </div>
                </div>
                {/* bottom layer end here */}

              </div>
            </div>
            <div class="LatestUpdate">
              <p>2300 recruiters posted in last 1 month.</p>
            </div>
          </div>

          <div class="package">
            <div class="card">
              <div class="card-body">
                {/* top layer start here */}
                <div class="topLayer">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h4>Super premium job<span class="star">&#128640;</span></h4>
                    </div>
                    <div>
                    <input class="form-check-input" value="classic" type="radio" name="plansList" id="flexRadioDefault2" />
                    </div>
                  </div>
                  <div class="price">
                    <h2>&#8377; 2599</h2>
                  </div>
                </div>
                {/* top layer end here */}

                {/* bottom layer start here */}
                <div class="bottomLayer">
                <div class="featuresList">
                    <ul>
                      <li>
                        <span><svg width="20" height="20" fill="#1F8268"><g clip-path="url(#prefix__clip0_1335_36151)"><path d="M7.5 13.475L4.025 10l-1.183 1.175L7.5 15.833l10-10-1.175-1.175L7.5 13.475z" fill="#1F8268"></path></g><defs><clipPath id="prefix__clip0_1335_36151"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg></span>
                        <span>Job will be active for 15 days</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#172B4D" d="m12.747 13.918 1.167-1.167-3.083-3.083V5.835H9.164v4.5l3.583 3.583Zm-2.75 4.417a8.115 8.115 0 0 1-3.25-.657 8.416 8.416 0 0 1-2.645-1.78A8.415 8.415 0 0 1 2.32 13.25a8.115 8.115 0 0 1-.656-3.25c0-1.152.219-2.236.656-3.25a8.415 8.415 0 0 1 1.782-2.646 8.415 8.415 0 0 1 2.645-1.78 8.115 8.115 0 0 1 3.25-.657c1.153 0 2.236.219 3.25.656a8.415 8.415 0 0 1 2.646 1.781 8.416 8.416 0 0 1 1.781 2.646 8.115 8.115 0 0 1 .657 3.25 8.115 8.115 0 0 1-.657 3.25 8.415 8.415 0 0 1-1.78 2.646 8.415 8.415 0 0 1-2.647 1.781 8.115 8.115 0 0 1-3.25.657Zm0-1.667c1.848 0 3.42-.65 4.72-1.948 1.298-1.299 1.947-2.872 1.947-4.719 0-1.847-.65-3.42-1.948-4.718-1.298-1.3-2.871-1.948-4.719-1.948-1.847 0-3.42.649-4.718 1.948C3.98 6.58 3.33 8.154 3.33 10c0 1.848.649 3.42 1.948 4.72 1.298 1.298 2.871 1.947 4.718 1.947Z"></path></svg></span>
                      </li>

                      <li>
                        <span><svg width="20" height="20" fill="#1F8268"><g clip-path="url(#prefix__clip0_1335_36151)"><path d="M7.5 13.475L4.025 10l-1.183 1.175L7.5 15.833l10-10-1.175-1.175L7.5 13.475z" fill="#1F8268"></path></g><defs><clipPath id="prefix__clip0_1335_36151"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg></span>
                        <span class="dashed"><b>2X</b>WhatsApp Job Notify</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g filter="url(#a)"><path fill="#fff" d="m7.524 18.829.302.178a8.297 8.297 0 0 0 4.213 1.148h.003c4.562 0 8.275-3.694 8.277-8.235 0-2.2-.86-4.27-2.422-5.826a8.243 8.243 0 0 0-5.852-2.415c-4.566 0-8.278 3.694-8.28 8.235 0 1.555.437 3.07 1.265 4.382l.197.311-.836 3.04 3.133-.818ZM2 22l1.413-5.134a9.853 9.853 0 0 1-1.33-4.953c.003-5.463 4.47-9.907 9.959-9.907a9.92 9.92 0 0 1 7.044 2.905A9.824 9.824 0 0 1 22 11.921c-.002 5.462-4.47 9.907-9.958 9.907h-.004a9.99 9.99 0 0 1-4.759-1.206L2 22Z"></path></g><path fill="url(#b)" d="M2.427 11.91c0 1.686.442 3.332 1.283 4.782l-1.364 4.956 5.097-1.33a9.646 9.646 0 0 0 4.593 1.165h.005c5.298 0 9.61-4.291 9.613-9.565A9.481 9.481 0 0 0 18.84 5.15a9.575 9.575 0 0 0-6.8-2.805c-5.298 0-9.61 4.29-9.613 9.565Zm9.614 9.573Zm0 0Z"></path><path fill="url(#c)" d="M2.084 11.907c-.001 1.746.457 3.45 1.329 4.953L2 21.994l5.279-1.378a9.988 9.988 0 0 0 4.759 1.207h.004c5.488 0 9.956-4.445 9.958-9.908a9.824 9.824 0 0 0-2.914-7.01A9.92 9.92 0 0 0 12.042 2c-5.49 0-9.956 4.444-9.958 9.907Zm3.143 4.695-.197-.312a8.184 8.184 0 0 1-1.265-4.382c.002-4.54 3.714-8.235 8.28-8.235 2.21.001 4.289.859 5.852 2.415a8.165 8.165 0 0 1 2.422 5.826c-.002 4.54-3.715 8.235-8.277 8.235h-.003a8.296 8.296 0 0 1-4.213-1.148l-.302-.178-3.133.817.836-3.038Zm6.815 5.22Zm0 0Z"></path><path fill="#fff" fill-rule="evenodd" d="M9.553 7.766c-.186-.412-.382-.42-.56-.428-.145-.006-.31-.006-.477-.006a.916.916 0 0 0-.663.31c-.228.248-.871.847-.871 2.065 0 1.219.892 2.396 1.016 2.561.124.166 1.721 2.746 4.25 3.738 2.102.825 2.53.661 2.986.62.456-.041 1.472-.599 1.68-1.177.207-.578.207-1.074.145-1.178-.063-.103-.228-.165-.477-.289-.249-.123-1.472-.723-1.7-.805-.229-.083-.394-.124-.56.124-.166.248-.643.805-.788.97-.145.166-.29.187-.54.063-.248-.124-1.05-.386-2-1.23-.74-.656-1.24-1.466-1.384-1.714-.145-.248-.016-.382.109-.505.112-.111.249-.29.373-.434.124-.145.166-.248.249-.413.083-.165.041-.31-.02-.434-.063-.124-.547-1.348-.768-1.838Z" clip-rule="evenodd"></path><defs><linearGradient id="b" x1="12" x2="12" y1="21.648" y2="2.346" gradientUnits="userSpaceOnUse"><stop stop-color="#20B038"></stop><stop offset="1" stop-color="#60D66A"></stop></linearGradient><linearGradient id="c" x1="12" x2="12" y1="21.994" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient><filter id="a" width="22" height="21.994" x="0.75" y="1.206" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="-0.25" dy="0.2"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_209_21114"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_209_21114" result="shape"></feBlend></filter></defs></svg></span>
                      </li>

                      <li>
                        <span><svg width="20" height="20" fill="#1F8268"><g clip-path="url(#prefix__clip0_1335_36151)"><path d="M7.5 13.475L4.025 10l-1.183 1.175L7.5 15.833l10-10-1.175-1.175L7.5 13.475z" fill="#1F8268"></path></g><defs><clipPath id="prefix__clip0_1335_36151"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg></span>
                        <span class="dashed"><b>2X</b>Higher visibility to candidates</span>
                        <span></span>
                      </li>

                      <li>
                        <span><svg width="20" height="20" fill="#1F8268"><g clip-path="url(#prefix__clip0_1335_36151)"><path d="M7.5 13.475L4.025 10l-1.183 1.175L7.5 15.833l10-10-1.175-1.175L7.5 13.475z" fill="#1F8268"></path></g><defs><clipPath id="prefix__clip0_1335_36151"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg></span>
                        <span class="dashed">Urgently hiring tag</span>
                        <span></span>
                      </li>

                    </ul>
                  </div>
                </div>
                {/* bottom layer end here */}

              </div>
            </div>
          </div>

        </div>

        <div>
          <p>*All prices are excluding taxes.</p>
        </div>

        {/* checkout content start here */}
          <div class="checkoutContent">
          <Divider component="div" />
          <div class="checkoutLayer">
              <h3>Checkout</h3>
              <div class="d-lg-flex align-items-end checkoutData">
                
                <div class="checkoutOption">
                  <div class="card">
                    <div class="card-body">
                    <div class="topLayer d-flex justify-content-between">
                    <div>
                      <h4>Buy 2 <span>job credits</span> to post this job</h4>
                    </div>
                    <div>
                    <input class="form-check-input" type="radio" name="checkoutOption" id="exampleRadios1" value="option1" />
                    </div>
                  </div>
                  <div class="bottomLayer">
                    <h2>&#8377; 1299</h2>
                    <p>(~₹650/jobcredit)</p>
                  </div>
                    </div>
                  </div>
                  
                </div>

                <div class="checkoutOption">
                  
                <div class="card">
                <div class="OffersList d-flex justify-content-between">
                    <div class="officersList">
                      <h3>Save &#8377;501</h3>
                    </div>
                    <div class="offerEnds">
                      <p>Ends in<span>15:06:23</span></p>
                    </div>
                  </div>
                  <div class="card-body">
                  <div class="topLayer d-flex justify-content-between">
                    <div>
                      <h4>Buy 6 <span>job credits</span> to post jobs within 90 days</h4>
                    </div>
                    <div>
                    <input class="form-check-input" type="radio" name="checkoutOption" id="exampleRadios1" value="option1" />
                    </div>
                  </div>
                  <div class="bottomLayer">
                  <h2>&#8377; 3399 <span class="previousPrice">&#8377;3900</span></h2>
                  <p>(~₹567/jobcredit)</p>
                  </div>
                  </div>
                </div>
                  
                </div>

              </div>

              {/* Checkout table content start here */}
                <div class="checkoutTable">
                  
                  <div class="d-flex justify-content-between">
                    <div>
                      <h4>3 Months Plan</h4>
                      <ul class="list">
                        <li><p>6 Job Credits + Valid for 90 days</p></li>
                      </ul>
                    </div>
                    <div class="textAlignRight">
                      <p>&#8377;3900</p>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between">
                    <div><p>Plan discount </p></div>
                    <div class="discout textAlignRight"><p>- &#8377;501</p></div>
                  </div>

                  <div class="d-flex justify-content-between pt-3">
                    <div>
                      <h4>Credits required (2)</h4>
                      <p>Premium job</p>
                    </div>
                    <div class="textAlignRight"><p>&#8377;0</p></div>
                  </div>

                  
                  <div class="d-flex justify-content-between dashedBorderTop pt-3 mt-3">
                    <div><p>Sub Total</p></div>
                    <div class="textAlignRight"><h4>&#8377;3,399</h4></div>
                  </div>

                  <div class="d-flex justify-content-between pt-3">
                    <div><p>GST (18%) <a href="#">Add GSTIN</a></p></div>
                    <div class="textAlignRight"><p>&#8377;612</p></div>
                  </div>

                  <div class="d-flex justify-content-between dashedBorderTop pt-3 mt-3">
                    <div><h3>Total <span>(Inc tax)</span></h3></div>
                    <div class="textAlignRight"><h3>&#8377;4011</h3></div>
                  </div>

                  <div class="moneySaved mt-2 mb-2">
                    <p>Yay! You're saving ₹501 on this purchase</p>
                  </div>

                </div>
              {/* Checkout table content end here */}

          </div>
          </div>
        {/* checkout content end here */}

    </Box>
    {/* Publish Job form start here  */}

    </section>
  );
};

export default JobPostingForm;
