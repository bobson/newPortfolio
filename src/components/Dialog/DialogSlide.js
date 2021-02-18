import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ResponsiveFontSizes from "../ResponsiveFontSizes/ResponsiveFontSizes";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Success = ({ resetSuccess }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <ResponsiveFontSizes>
        <Typography variant="h3">Thank You!</Typography>
      </ResponsiveFontSizes>
      <DialogContent>
        <DialogContentText
          component={Box}
          textAlign="center"
          id="alert-dialog-description"
        >
          I will be in contact no more than two working days.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {" "}
        <Button variant="contained" color="secondary" onClick={resetSuccess}>
          close
        </Button>
      </DialogActions>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  close: {
    marginLeft: "auto",
    marginBottom: "2rem",
  },
  formInput: {
    "& .MuiFormControl-root": {
      marginTop: "20px",
    },
  },
}));

export default function DialogSlide(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { register, handleSubmit, watch, errors } = useForm();
  const [sending, setSending] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [fail, setFail] = React.useState(false);

  const resetSuccess = () => {
    props.handleDialogClose();
    setTimeout(() => {
      setSuccess(false);
    }, 300);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();

    setSending(true);
    console.log(e.target);
    emailjs
      .sendForm(
        "service_w5ouio7",
        "template_o6xpcxj",
        e.target,
        "user_feTz9iU1AQdh8eDOF14YF"
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
      }),
      (error) => {
        setFail(error.text);
        console.log(error.text);
      };
  };
  // console.log(errors);
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      {props.children}
      <Dialog
        fullScreen
        open={props.openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleDialogClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <IconButton
          color="secondary"
          onClick={resetSuccess}
          aria-label="close"
          className={classes.close}
        >
          <CloseIcon />
        </IconButton>
        {success ? (
          <Success resetSuccess={resetSuccess} />
        ) : (
          <Container maxWidth="sm">
            <ResponsiveFontSizes>
              <Typography variant="h3">Let's Talk</Typography>
            </ResponsiveFontSizes>

            <form
              className={classes.formInput}
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                fullWidth
                autoFocus
                error={errors.name ? true : false}
                label="Name*"
                name="name"
                inputRef={register({
                  required: true,
                  minLength: 2,
                  pattern: /\S+/,
                })}
              />
              <TextField
                fullWidth
                error={errors.email ? true : false}
                label="Email*"
                name="email"
                inputRef={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
              />
              <TextField
                fullWidth
                error={errors.message ? true : false}
                label="Message*"
                name="message"
                multiline
                rows={5}
                inputRef={register({ required: true, maxLength: 300 })}
              />

              <Box mt={4} display="flex" justifyContent="space-between">
                <Button color="secondary" onClick={props.handleDialogClose}>
                  no thanks
                </Button>
                <Button
                  endIcon={
                    !sending ? <SendIcon /> : <CircularProgress size={24} />
                  }
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={sending}
                >
                  send message
                </Button>
              </Box>
            </form>
          </Container>
        )}
      </Dialog>
    </>
  );
}
