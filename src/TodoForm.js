import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useInputState from './useInputState';

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange, onClick } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid key={1} item>
              <TextField
                variant="outlined"
                placeholder="Add todo"
                margin="normal"
                onChange={onChange}
                value={value}
              />
            </Grid>
             <Grid key={2} item>
              <Button className="tt" disableElevation={true} variant="contained" color="primary" type="submit" onClick={onClick}>Add</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default TodoForm;
