import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const Studies = () => {
  const [studyName, setStudyName] = useState("");
  const [studyId, setStudyId] = useState("");
  const [rows, setRows] = useState([
    { name: "Study1", id: "STU123" },
    { name: "Study2", id: "STU124" },
    { name: "Study3", id: "STU125" },
  ]);

  const handleAdd = () => {
    const trimmedStudyName = studyName.trim();
    const trimmedStudyId = studyId.trim();

    if (!trimmedStudyName || !trimmedStudyId) {
      alert("Both Study Name and Study ID are required and cannot be empty or whitespace.");
      return;
    }

    setRows([...rows, { name: trimmedStudyName, id: trimmedStudyId }]);
    setStudyName("");
    setStudyId("");
  };

  return (
    <Box sx={{ padding: "20px" , width:'1000px' }}>
      <Box sx={{ display: "flex", justifyContent: "flex-start", marginBottom: 2 }}>
        <Button variant="contained" color="success" onClick={handleAdd}>
          + ADD
        </Button>
      </Box>

      <Box
        sx={{
          marginBottom: 4,
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Enter Study Details
        </h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="study-name"
              label="Study Name"
              variant="outlined"
              value={studyName}
              onChange={(e) => setStudyName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="study-id"
              label="Study ID"
              variant="outlined"
              value={studyId}
              onChange={(e) => setStudyId(e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Study Name</TableCell>
              <TableCell align="left">Study ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Studies;
