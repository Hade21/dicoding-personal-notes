import React from "react";
//components
import CardNotes from "./CardNotes";
//styling
import { Grid, ListItem, Typography } from "@mui/material";

const SavedNotes = ({ data, onDelete, onArchive }) => {
  const list = data.filter((item) => item.archived === false);

  const notes = (
    <Grid container spacing={1}>
      {list.map((item) => {
        return (
          <Grid item lg={4} sm={4} md={4} xs={4}>
            <ListItem>
              <CardNotes
                title={item.title}
                date={new Date(item.createdAt).toString()}
                body={item.body}
                id={item.id}
                key={item.id}
                archived={item.archived}
                onDelete={() => onDelete(item.id)}
                onArchived={() => onArchive(item.id)}
              />
            </ListItem>
          </Grid>
        );
      })}
    </Grid>
  );
  const noNotes = <Typography variant="h5">Tidak ada catatan</Typography>;
  return (
    <div style={{ marginTop: "60px" }}>
      <Typography variant="h4" mt={1} mb={2}>
        Catatan Aktif
      </Typography>
      {list.length > 0 ? notes : noNotes}
    </div>
  );
};

export default SavedNotes;
