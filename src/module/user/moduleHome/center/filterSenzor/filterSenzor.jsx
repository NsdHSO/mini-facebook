import React from 'react'
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ButtonShared from './../../../../shared/buttons/ButtonShared';
import Card from './../../../../shared/card/Card';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FilterSenzor = (props) => {
  const handleChange = (event) => {
    setValueSenzor(event.target.value);
  };

  const classes = useStyles();
  const [valueSenzor, setValueSenzor] = React.useState('');
  return (
    <Card>
      <div className="tw-flex">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Vegetables</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={valueSenzor}
            onChange={handleChange}
          >
            <MenuItem value={'All'}>All</MenuItem>
            <MenuItem value={'Tomate'}>Tomate</MenuItem>
            <MenuItem value={'Papadie'}>Papadie</MenuItem>
            <MenuItem value={'Cartofi'}>Cartofi</MenuItem>
          </Select>
        </FormControl>
        <div className="tw-flex tw-content-center tw-items-end tw-justify-end tw-w-110">
          <ButtonShared className="tw-pl-2 tw-pr-2" onClick={() => props.onFilteredSenzor(valueSenzor)}>
            Filter
          </ButtonShared>
        </div>
      </div>
    </Card>);
}

export default FilterSenzor;