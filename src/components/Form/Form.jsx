import useStyles from "./styles";
import { Typography, TextField, Button, Paper } from "@material-ui/core";
import { useState } from "react";
import Filebase from "react-file-base64";
import { useDispatch } from "react-redux";
const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
  };
  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography className="" variant="h6" align="center">
          Create A Story
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <Filebase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          fullWidth
          variant="contained"
          type="submit"
          size="large"
          color="primary"
          className={classes.buttonSubmit}
        >
          Submit
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={clear}
          size="small"
          color="secondary"
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
