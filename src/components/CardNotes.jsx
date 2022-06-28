import React from "react";
//styling
import { Button, Grid, Typography, ListItem } from "@mui/material";

const CardNotes = ({ title, date, body, archived, onDelete, onArchived }) => {
  return (
    <Grid container border="1px solid black" borderRadius="5px">
      <Grid item lg={12} sm={12} md={12} xs={12}>
        <ListItem>
          <Typography variant="h5">{title}</Typography>
        </ListItem>
      </Grid>
      <Grid item lg={12} sm={12} md={12} xs={12}>
        <ListItem>
          <Typography variant="body2">{date}</Typography>
        </ListItem>
      </Grid>
      <Grid item lg={12} sm={12} md={12} xs={12}>
        <ListItem>
          <Typography variant="body1">{body}</Typography>
        </ListItem>
      </Grid>
      <Grid item lg={12} sm={12} md={12} xs={12}>
        <ListItem>
          <Grid container columnSpacing={1}>
            <Grid item lg={6} sm={6} md={6} xs={6}>
              <Button
                variant="contained"
                size="small"
                color="error"
                fullWidth={true}
                onClick={onDelete}
              >
                Hapus
              </Button>
            </Grid>
            <Grid item lg={6} sm={6} md={6} xs={6}>
              <Button
                variant="contained"
                size="small"
                fullWidth={true}
                onClick={onArchived}
              >
                {archived ? "Batalkan Arsip" : "Arsipkan"}
              </Button>
            </Grid>
          </Grid>
        </ListItem>
      </Grid>
    </Grid>
  );
};

export default CardNotes;
