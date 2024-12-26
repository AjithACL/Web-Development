import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect } from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


function createData(name, description, data, type, notes) {
  return { name, description, data, type, notes };
}

export default function Dataset() {
  const [rows, setRows] = useState([
    createData('Frozen yoghurt', 'Yummy dessert', 'Data1', 'Type A', '4.0'),
    createData('Ice cream sandwich', 'Cold dessert', 'Data2', 'Type B', '4.3'),
    createData('Eclair', 'Chocolaty treat', 'Data3', 'Type C', '6.0'),
    createData('Cupcake', 'Sweet snack', 'Data4', 'Type A', '4.3'),
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newRow, setNewRow] = useState({
    name: '',
    description: '',
    data: '',
    type: '',
    notes: '',
  });
  const [editingRow, setEditingRow] = useState(null); // Track which row is being edited
  const [showDeletePopup, setShowDeletePopup] = useState(false); // For the delete confirmation popup
  const [rowToDelete, setRowToDelete] = useState(null); // Row to delete

  // Handle the form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRow((prev) => ({ ...prev, [name]: value }));
  };

  // Add or update a row with validation
  const handleSubmit = () => {
    if (!newRow.name || !newRow.description || !newRow.data || !newRow.type || !newRow.notes) {
      alert('Please fill in all fields.');
      return;
    }

    if (editingRow) {
      const updatedRows = rows.map((row) =>
        row === editingRow ? { ...row, ...newRow } : row
      );
      setRows(updatedRows);
      setEditingRow(null); // Reset editingRow after saving
    } else {
      setRows([...rows, createData(newRow.name, newRow.description, newRow.data, newRow.type, newRow.notes)]);
    }

    setShowForm(false); // Hide the form after adding/updating
    setNewRow({ name: '', description: '', data: '', type: '', notes: '' });
  };

  // Delete a row (after confirmation)
  const handleDeleteRow = (row) => {
    setRowToDelete(row); // Set the row to be deleted
    setShowDeletePopup(true); // Show the delete confirmation popup
  };

  // Confirm deletion
  const confirmDelete = () => {
    setRows(rows.filter((row) => row !== rowToDelete)); // Remove the row from the state
    setShowDeletePopup(false); // Close the popup
    setRowToDelete(null); // Reset the row to delete
  };

  // Cancel deletion
  const cancelDelete = () => {
    setShowDeletePopup(false); // Close the popup without deleting
    setRowToDelete(null); // Reset the row to delete
  };

  // Handle Edit button click
  const handleEditRow = (row) => {
    setEditingRow(row);
    setNewRow(row);
    setShowForm(true);
  };

  const isFormValid = newRow.name && newRow.description && newRow.data && newRow.type && newRow.notes;

  // Save data to local storage when the "Send" button is clicked
  const handleSend = () => {
    localStorage.setItem('tableData', JSON.stringify(rows)); // Save rows to local storage
    alert('Data has been saved to local storage!');
  };

  // Load data from local storage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('tableData');
    if (savedData) {
      setRows(JSON.parse(savedData)); // Load the saved data into rows
    }
  }, []);

  return (
    <div className="data-table">
      <Button variant="contained" color="success" style={{ margin: '10px 0' }} onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add +'}
      </Button>

      {showForm && (
        <div className="Data-entry">
          <h3>{editingRow ? 'Edit Row' : 'Add New Row'}</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <label htmlFor="sets">Sets</label>
            <input
              type="text"
              name="name"
              placeholder="Sets"
              value={newRow.name}
              onChange={handleChange}
            />
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newRow.description}
              onChange={handleChange}
            />
            <label htmlFor="Data">Data</label>
            <input
              type="text"
              name="data"
              placeholder="Data"
              value={newRow.data}
              onChange={handleChange}
            />
            <label htmlFor="Type">Type</label>
            <select name="type" id="data-type" value={newRow.type} onChange={handleChange}>
              <option value="ADAM">ADAM</option>
              <option value="SDTM">SDTM</option>
            </select>
            <label htmlFor="Notes">Notes</label>
            <input
              type="text"
              name="notes"
              placeholder="Notes"
              value={newRow.notes}
              onChange={handleChange}
            />
            <Button variant="contained" color="primary" type="submit" disabled={!isFormValid}>
              {editingRow ? 'Update' : 'Submit'}
            </Button>
          </form>
        </div>
      )}

      <TableContainer component={Paper} style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sets</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Data</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Path</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.data}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.notes}</TableCell>
                <TableCell align="right">
                  <Button color="primary" onClick={() => handleEditRow(row)}>
                    Edit
                  </Button>
                  <Button color="secondary" onClick={() => handleDeleteRow(row)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <div className="delete-popup">
          <div className="popup-content">
            <h3>Are you sure you want to delete this row?</h3>
            <Button variant="contained" color="secondary" onClick={confirmDelete}>
              Delete
            </Button>
            <Button variant="contained" onClick={cancelDelete}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="send-btn">
        <Button variant="contained" endIcon={<SendIcon />} onClick={handleSend}>
          Send
        </Button>
      </div>
    </div>
  );
}
