import React, { Component } from "react";
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

// This file exports the Input, TextArea, and FormBtn components

class TextInput extends Component {

    constructor(props) {
        super(props)
       
    }
    
    render() {
        const [labelWidth, setLabelWidth] = React.useState(0);
        const [name, setName] = React.useState('Composed TextField');
        const labelRef = React.useRef(null);
        const classes = useStyles();

        React.useEffect(() => {
            setLabelWidth(labelRef.current.offsetWidth);
        }, []);

        function handleChange(event) {
            setName(event.target.value);
        }
        
        return (
          
            <FormControl className={classes.formControl} variant="outlined">
                <InputLabel ref={labelRef} htmlFor="component-outlined">
                    Name
                </InputLabel>
                <OutlinedInput
                    id="component-outlined"
                    value={name}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                />
            </FormControl>
          );
        }
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
