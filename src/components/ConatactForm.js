import "./contact_style.css"
import * as React from 'react';
import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};



export default function ContactForm(){
    const [hasChildren, setHasChildren] = useState(false);
    const [childrenQuantity, setChildrenQuantity] = useState(10);
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    const handleChildrenChange = (e) => {
        setHasChildren(e.target.value === 'yes');
    };

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
      }
    function handleSliderChange(event){
        setChildrenQuantity(event.target.value);
    };


    return(
        <div className="form-container">
            <h1>Not sure if Verne has what you are looking for?</h1>
            <h2>Compile The Form and Send Us a Message</h2>
            <form>
                <div className="name">
                    <input placeholder="Name"/>
                    <input placeholder="Surname"/>
                <input placeholder="Age"/>
                </div>
                {/* Dropdown menu for selecting the type of romantic adventure */}
                <select>
                    <option value="" disabled selected  hidden={true}>Choose Your Love Adventure</option>
                    <option value="beach">Romantic Beach</option>
                    <option value="mountain">Exciting Mountain Expedition</option>
                    <option value="spa">Luxury Relaxing Spa</option>
                    <option value="museum">Lovely Cultural City</option>
                    <option value="extreme">Extreme Breathless Adventure</option>
                </select>
                <input placeholder="Email"/>
                <input placeholder="Phone Number"/>
                <div className="RateBox">
                <label>How satisfied are you with your past travel agency experience?</label>
                    <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    className="Box"
                    >
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                            setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                    </Box>
                </div>
                <label className="do-you-have">Do you have children?</label>
                <FormControl className="radio-button">
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="no"
                        name="radio-buttons-group"
                    >   
                        <div className="r-btn-display">
                            <FormControlLabel value="yes" control={<Radio checked={hasChildren} onChange={handleChildrenChange}/>} label="Yes" />
                            <FormControlLabel value="no" control={<Radio checked={!hasChildren} onChange={handleChildrenChange}/>} label="No" />
                        </div>
                    </RadioGroup>
                </FormControl>
                
                {/* Input for the quantity of children (visible only if hasChildren is true) */}
                {hasChildren && (
                    <div className="child-extra">
                        <label>Number of Children</label>
                        <div className="slidecontainer">
                            <input type="range" min="1" max="10" className="slider" id="myRange" onChange={handleSliderChange}></input><h1>{childrenQuantity}</h1>
                        </div>
                    </div>
                )}
                <textarea placeholder="Tell Us Your Dream Travel" rows={4}></textarea>
                <button>Send Message</button>

            </form>
        </div>
    );
}