import React, { useState, useEffect } from "react";
import { TextField, Grid, Box, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import { Label } from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebaseInitisize";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
const skillsList = ["react", "Node", "Full stack", "Aws"];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function CandidateONboarding() {

  const theme = useTheme();
  const [candidateInfo, setCandidateInfo] = React.useState({
    name: "",
    email: "",
    phone: "",
    skills: [],
    domain: [],
    socialMedia: {
      linkedIn: "",
      github: "",
      twitter: "",
      instagram: "",
    },
  });

  const handleSkillsChange = (event) => {
    const {
      target: { value },
    } = event;
    setCandidateInfo((p) => {
      return {
        ...p,
        skills: typeof value === "string" ? value.split(",") : value,
      };
    });
    // On autofill we get a stringified value.
  };

  const handleDomainChange = (event) => {
    setCandidateInfo((p) => {
      return { ...p, domain: event.target.value };
    });
  };

  const submitInfo = async (e) => {
    let userInfo=JSON.parse(localStorage.getItem("user"));
    let userId=userInfo.uid;
    e.preventDefault();
    alert('submit')
    console.log(candidateInfo);
    try {
      const docRef = await addDoc(collection(db, "usersData"), {
        ...candidateInfo,
        userId:userId
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        minHeight: "100vh",
      }}
    >
      <form onSubmit={(e) => submitInfo(e)}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "auto",
            background: "#fff",
            padding: "20px",
          }}
        >
          <Grid container spacing={1}>
            <Grid xs={12} md={6}>
              <label>Name*</label>
              <TextField
                required
                value={candidateInfo.name}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return { ...p, name: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <label>email*</label>
              <TextField
                required
                type="email"
                value={candidateInfo.email}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return { ...p, email: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            <Grid xs={12} md={6}>
              <label>Phone no.*</label>
              <TextField
                required
                type="number"
                inputProps={{ maxLength: 10 }}
                value={candidateInfo.phone}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return { ...p, phone: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            <Grid xs={12} md={12}>
              <label>Education</label>
              <TextField
                value={candidateInfo.education}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return { ...p, education: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            <Grid xs={12} md={12}>
              <label>Experience</label>
              <TextField
                value={candidateInfo.experience}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return { ...p, experience: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            <Grid xs={12} md={6}>
              <label>linkedIn</label>
              <TextField
                value={candidateInfo.socialMedia.linkedIn}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return {
                      ...p,
                      socialMedia: {
                        ...p.socialMedia,
                        linkedIn: e.target.value,
                      },
                    };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <label>Twitter</label>
              <TextField
                value={candidateInfo.socialMedia.twitter}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return {
                      ...p,
                      socialMedia: {
                        ...p.socialMedia,
                        twitter: e.target.value,
                      },
                    };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            <Grid xs={12} md={6}>
              <label>Github</label>
              <TextField
                value={candidateInfo.socialMedia.github}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return {
                      ...p,
                      socialMedia: { ...p.socialMedia, github: e.target.value },
                    };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <label>Instagram</label>
              <TextField
                value={candidateInfo.socialMedia.instagram}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return {
                      ...p,
                      socialMedia: {
                        ...p.socialMedia,
                        instagram: e.target.value,
                      },
                    };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            <Grid xs={12} md={6}>
              <la>Tags*</la>
              <FormControl required sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Select
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={candidateInfo.skills}
                  onChange={handleSkillsChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {skillsList.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox
                        checked={candidateInfo.skills.indexOf(name) > -1}
                      />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              <la>intrested Domains*</la>
              <FormControl fullWidth required sx={{ minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-required-label">
                  Select
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={candidateInfo.domain}
                  label="Age *"
                  onChange={handleDomainChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>FrontEnd</MenuItem>
                  <MenuItem value={20}>BackEnd</MenuItem>
                  <MenuItem value={30}>Full stack</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default CandidateONboarding;

//name *
//email*
//phone*
// education
// experience
// social media url eg linkedIN , github , twitter
//intrested domain eg- forented, backend, fullstack, devops, mobile, data science, ml, ai, Marketing, sales, HR, finance, operations, product, design, content, legal, customer support, other
// skills * min 2
