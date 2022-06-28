import React from "react";
//styling
import { TextField, Typography, Grid, Button } from "@mui/material";

const InputForm = ({ submit, setTitle, title, charLeft, body, setBody }) => {
  return (
    <div>
      <Typography variant="h3" mt={5} sx={{ fontWeight: "700" }}>
        Buat Catatan
      </Typography>
      <form onSubmit={submit} style={{ marginTop: "30px", padding: "0 20%" }}>
        <Grid container rowSpacing={2}>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <Typography variant="body1">Sisa karakter {charLeft}</Typography>
            <TextField
              variant="outlined"
              size="small"
              name="title"
              id="title"
              label="Judul Catatan"
              fullWidth={true}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <TextField
              name="body"
              id="body"
              multiline
              fullWidth={true}
              rows={5}
              label="Isi catatan"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            />
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth={true}
            >
              Simpan
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default InputForm;
