import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';

const GeneralInfo = () => {
  return (
    <div className="p-3">
      {/* units */}
      <FormLabel>Gender</FormLabel>
      <RadioGroup row>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      {/* sex */}
      <FormLabel>Identify Units</FormLabel>
      <RadioGroup row>
        <FormControlLabel value="metric" control={<Radio />} label="Metric" />
        <FormControlLabel value="imperial" control={<Radio />} label="Imperial" />
      </RadioGroup>
      <div className="flex flex-col ">
        {/* height */}
        <TextField
          sx={{ mb: 2 }}
          label="Height"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* weight */}
        <TextField
          sx={{ mb: 2 }}
          label="Wehight"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* age */}
        <TextField
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      {/* dive discipline */}
      {/* dive certification */}
      {/* dive frequncy */}
    </div>
  );
};

export default GeneralInfo;
