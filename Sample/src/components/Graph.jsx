import React, { useState } from 'react';
import { TextField, MenuItem, Select, FormControl, InputLabel, Button, Grid, Typography, Box } from '@mui/material';

const Graph = () => {
  const [formData, setFormData] = useState({
    graphName: '',
    category: '',
    graphType: '',
    xAxis: '',
    yAxis: '',
    filters: '',
    source: '',
    zAxisUnit: '',
    yAxisUnit: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log(formData);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 600, // Adjust width for better layout
        margin: 'auto',
        padding: 3,
        backgroundColor: '#f4f4f9',
        borderRadius: '8px',
        height: '450px', // Set height to 450px
        overflowY: 'auto', // Make the form scrollable
      }}
    >
      <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
        Graph Configuration Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Column 1 */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Graph Name"
              variant="outlined"
              fullWidth
              name="graphName"
              value={formData.graphName}
              onChange={handleChange}
              sx={{ height: '40px' }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              name="category"
              value={formData.category}
              onChange={handleChange}
              sx={{ height: '40px' }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Graph Type</InputLabel>
              <Select
                label="Graph Type"
                name="graphType"
                value={formData.graphType}
                onChange={handleChange}
                sx={{ height: '40px' }}
              >
                <MenuItem value="bar">Bar</MenuItem>
                <MenuItem value="line">Line</MenuItem>
                <MenuItem value="pie">Pie</MenuItem>
                <MenuItem value="scatter">Scatter</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="X Axis"
              variant="outlined"
              fullWidth
              name="xAxis"
              value={formData.xAxis}
              onChange={handleChange}
              sx={{ height: '40px' }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Y Axis"
              variant="outlined"
              fullWidth
              name="yAxis"
              value={formData.yAxis}
              onChange={handleChange}
              sx={{ height: '40px' }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Filters"
              variant="outlined"
              fullWidth
              name="filters"
              value={formData.filters}
              onChange={handleChange}
              sx={{ height: '40px' }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Source"
              variant="outlined"
              fullWidth
              name="source"
              value={formData.source}
              onChange={handleChange}
              sx={{ height: '40px' }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Z Axis Display Unit"
              variant="outlined"
              fullWidth
              name="zAxisUnit"
              value={formData.zAxisUnit}
              onChange={handleChange}
              sx={{ height: '40px' }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Y Axis Display Unit"
              variant="outlined"
              fullWidth
              name="yAxisUnit"
              value={formData.yAxisUnit}
              onChange={handleChange}
              sx={{ height: '40px' }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              name="description"
              value={formData.description}
              onChange={handleChange}
              sx={{ height: '80px' }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: '12px', borderRadius: '6px' }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Graph;
