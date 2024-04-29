import { useEffect, useState } from "react";
import { TextField, Button, IconButton, Snackbar, Box, Typography,MenuItem, Select,FormControl,InputLabel } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/form-reducer";
import '../components/Form.css'
import '../App.css'


export const Form = () => {
  const { name, address, postal, phone, education, year,submitData } = useSelector(
    (state) => state.formData
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const [error, setError] = useState({
    name: "",
    address: "",
    postal: "",
    phone: "",
    education: "",
    year: "",
  });

  const isDisabled = (errorObj) => {
    for (let key in errorObj) {
      if (errorObj.hasOwnProperty(key) && errorObj[key].length > 0) {
        return true;
      }
    }
    if (
      name.length === 0 ||
      address.length === 0 ||
      postal.length === 0 ||
      phone.length === 0 ||
      education.length === 0 ||
      year.length === 0
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    dispatch(formActions.submitForm());
    dispatch(formActions.resetForm());
    setOpen(true);
  };

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "name":
        const nameRegex = /^[a-zA-Z\s'-]+$/;
        if (!nameRegex.test(e.target.value)) {
          setError({
            ...error,
            name: "Not a valid name",
          });
        } else {
          setError({
            ...error,
            name: "",
          });
        }
        dispatch(formActions.setName({ name: e.target.value }));
        break;
      case "address":
        const addressRegex = /^[a-zA-Z0-9\s.,'-]+$/
        if (!addressRegex.test(e.target.value)) {
          setError({
            ...error,
            address: "Not a valid address",
          });
        } else {
          setError({
            ...error,
            address: "",
          });
        }
        dispatch(formActions.setAddress({ address: e.target.value }));
        break;
      case "postal":
        const postalRegex = /^\d{3}\s?\d{3}$/
        if (!postalRegex.test(e.target.value)) {
          setError({
            ...error,
            postal: "Minimum 6 digits",
          });
        } else {
          setError({
            ...error,
            postal: "",
          });
        }
        dispatch(formActions.setPostal({ postal: e.target.value }));
        break;
      case "phone":
        const phoneRegex = /^(?:[1-9]\d{9}|1000000000)$/;
        if (!phoneRegex.test(e.target.value)) {
          setError({
            ...error,
            phone: "Not a valid Number",
          });
        } else {  
          setError({
            ...error,
            phone: "",
          });
        }
        dispatch(formActions.setPhone({ phone: e.target.value }));
        break;
      case "education":
        const educationRegex = /^[a-zA-Z\s]+$/
        if (!educationRegex.test(e.target.value)) {
          setError({
            ...error,
            education: "Invalid Entry",
          });
        } else {  
          setError({
            ...error,
            education: "",
          });
        }
        dispatch(formActions.setEducation({ education: e.target.value }));
        break;
      case "year":
        dispatch(formActions.setyear({ year: e.target.value }));
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    setOpen(!open);
  };

  

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= currentYear - 50; i--) {
    years.push(i);
  } 

  useEffect(() => {
    console.log(submitData)

  },[submitData])

  return (
    
    <>
    
      <div className="login">
        <form className="login-form">
          <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems="center" justifyContent={'center'} margin={'auto'} marginTop={5} padding={5} borderRadius={5} boxShadow={'5px 5px 10px #ccc'} sx={{
            ":hover" : {
              boxShadow:'10px 10px 20px #ccc'
            }
            
          }}>
          <div>

            <Typography className="heading" variant="h2" > Login</Typography>
            <TextField variant="outlined" 
              margin="normal"
              className="name"
              error={error.name.length > 0}
              helperText={error.name}
              name="name"
              value={name}
              label="Full Name"
              placeholder="Full Name"
              onChange={handleInputChange}
              id="outlined-error"
            />
            <TextField
              variant="outlined" 
              margin="normal"
              className="address"
              error={error.address.length > 0}
              helperText={error.address}
              name="address"
              value={address}
              label="Address"
              placeholder="Address"
              onChange={handleInputChange}
              id="outlined-error-helper-text"
            />
          </div>
          <div>
            <TextField
              variant="outlined" 
              margin="normal"
              className="postal"
              label="Postal Code"
              error={error.postal.length > 0}
              helperText={error.postal}
              name="postal"
              value={postal}
              placeholder="Postal Code"
              onChange={handleInputChange}
              id="filled-error"
            />
            <TextField
              variant="outlined" 
              margin="normal"
              className="phone"
              error={error.phone.length > 0}
              helperText={error.phone}
              name="phone"
              value={phone}
              label="Phone"
              placeholder="Phone Number"
              onChange={handleInputChange}
              id="filled-error-helper-text"
            />
          </div>
          <div>
            <TextField
              variant="outlined" 
              margin="normal"
              className="education"
              error={error.education.length > 0}
              helperText={error.education}
              name="education"
              value={education}
              label="Education"
              placeholder="Education"
              onChange={handleInputChange}
              id="standard-error"
            />
            <FormControl variant="outlined" margin="normal" className="year">
                <InputLabel id="year-label">Year</InputLabel>
                <Select
                  labelId="year-label"
                  id="year-select"
                  value={year}
                  onChange={(e) => dispatch(formActions.setyear({ year: e.target.value }))}
                >
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
            </FormControl>
            
          </div>
          <Button
          sx={{marginTop:3, borderRadius:3}}
            variant="contained"
            color="primary"
            disabled={isDisabled(error)}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          </Box>
        </form>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Form Submitted"
        action={action}
      />
    </>
  );
};
