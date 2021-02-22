import {
  Typography,
  makeStyles,
  Grid,
  TextField,
  TextareaAutosize,
  Button,
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
  IconButton,
  ListSubheader,
} from "@material-ui/core";
import React from "react";
import PageHeader from "../Header/Pageheader";
import CallIcon from "@material-ui/icons/Call";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
  },
  margin2: {
    margin: theme.spacing(2),
    width: "80%",
  },
  messagearea: {
    margin: theme.spacing(2),
    fontSize: 17,
    width: "80%",
  },
  listheader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  listcontainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
}));

function Contact() {
  let classes = useStyles();
  return (
    <>
      <PageHeader heading={"Contact Us"} />
      <Grid container>
        <Grid item sm={6}>
          <form className={classes.form} noValidate>
            <TextField
              id="standard-basic"
              variant="outlined"
              label="FirstName"
              className={classes.margin2}
            />
            <TextField
              className={classes.margin2}
              id="filled-basic"
              variant="outlined"
              label="Email"
            />
            <TextField
              className={classes.margin2}
              id="outlined-basic"
              label="Mobile No"
              variant="outlined"
            />
            <TextareaAutosize
              className={classes.messagearea}
              rowsMax={10}
              rowsMin={7}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              label="Message"
              placeholder="Message"
            />
            <Button
              className={classes.margin2}
              variant="contained"
              color="primary"
            >
              Send Message
            </Button>
          </form>
        </Grid>
        <Grid item sm={6}>
          <div className={classes.listcontainer}>
            <List>
              <ListSubheader
                className={classes.listheader}
                component="h1"
                id="nested-list-subheader"
              >
                For Call / WhatsApp us on
              </ListSubheader>
              <ListItem>
                <IconButton>
                  <CallIcon />
                </IconButton>
                <ListItemText primary="+923062841362 " />
              </ListItem>
              <ListItem>
                <IconButton>
                  <WhatsAppIcon />
                </IconButton>
                <ListItemText primary="+923212065001 " />
              </ListItem>
            </List>
            <List>
              <ListSubheader
                className={classes.listheader}
                component="h1"
                id="nested-list-subheader"
              >
                For any query email us at
              </ListSubheader>
              <ListItem>
                <IconButton>
                  <CallIcon />
                </IconButton>
                <ListItemText primary="onlinebahrululoomacademy@gmail.com" />
              </ListItem>
            </List>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462116.66839634755!2d66.8752763405249!3d25.19355992464214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1613483323455!5m2!1sen!2s"
            width="650"
            height="350"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
}

export default Contact;
