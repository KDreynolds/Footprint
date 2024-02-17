import React, { useEffect, useState } from 'react';
import supabase from '../util/supabase';
import Typography from '@mui/joy/Typography';
import Table from '@mui/joy/Table';
import Checkbox from '@mui/joy/Checkbox';
import IconButton from '@mui/joy/IconButton'; // Import IconButton for the trash can icon
import DeleteIcon from '@mui/icons-material/Delete'; // Import the trash can icon

import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

export default function TableFiles() {
  const [files, setFiles] = useState([]);
  const [checkedFiles, setCheckedFiles] = useState({});

  // Function to format file sizes
  const formatSize = (size) => {
    if (size < 1024) return size + ' bytes';
    let sizeInKB = size / 1024;
    if (sizeInKB < 1024) return sizeInKB.toFixed(1) + ' KB';
    let sizeInMB = sizeInKB / 1024;
    if (sizeInMB < 1024) return sizeInMB.toFixed(1) + ' MB';
    let sizeInGB = sizeInMB / 1024;
    return sizeInGB.toFixed(1) + ' GB';
  };

  // Function to format dates
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Fetch files from the database on component mount
  useEffect(() => {
    const fetchFiles = async () => {
      const { data, error } = await supabase
        .from('files')
        .select('*');

      if (error) {
        console.error('Error fetching files:', error);
      } else {
        setFiles(data);
      }
    };

    fetchFiles();
  }, []);

  // Handle checkbox state change
  const handleCheckboxChange = (fileId) => {
    setCheckedFiles(prevCheckedFiles => ({
      ...prevCheckedFiles,
      [fileId]: !prevCheckedFiles[fileId]
    }));
  };

  // Function to handle file deletion
  const handleDelete = async (fileId) => {
    // Confirm with the user before deletion
    if (!window.confirm('Are you sure you want to delete this file?')) {
      return;
    }
  
    // Retrieve the file path from the files state
    const fileToDelete = files.find(file => file.id === fileId);
    if (!fileToDelete) {
      console.error('File not found');
      return;
    }
  
    // Delete the file from Supabase object storage
    console.log(`Sending DELETE request for file path: ${fileToDelete.file_path}`);
    const { error: deleteStorageError } = await supabase
      .storage
      .from('footprint')
      .remove([fileToDelete.file_path]);
  
    if (deleteStorageError) {
      console.error('Error deleting file from storage:', deleteStorageError);
      return;
    }
  
    // Delete the file metadata from the Supabase database 'files' table
    const { error: deleteDbError } = await supabase
      .from('files')
      .delete()
      .match({ id: fileId });
  
    if (deleteDbError) {
      console.error('Error deleting file metadata:', deleteDbError);
    } else {
      // Update the UI by removing the file from the state
      setFiles(files.filter(file => file.id !== fileId));
      // Also update the checkedFiles state if necessary
      const newCheckedFiles = { ...checkedFiles };
      delete newCheckedFiles[fileId];
      setCheckedFiles(newCheckedFiles);
    }
  };

  return (
    <div>
      <Table
        hoverRow
        size="sm"
        borderAxis="none"
        variant="soft"
        sx={{
          '--TableCell-paddingX': '1rem',
          '--TableCell-paddingY': '1rem',
          // Add custom styles for specific columns to control width
          '& th:nth-of-type(4), & td:nth-of-type(4)': { // Target "Include in Report?" column
            width: '160px', // Adjust width as needed
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          '& th:nth-of-type(5), & td:nth-of-type(5)': { // Target "Actions" column
            width: '100px', // Adjust width as needed
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        }}
      >
        <thead>
          <tr>
            <th>
              <Typography level="title-sm">File</Typography>
            </th>
            <th>
              <Typography
                level="title-sm"
                endDecorator={<ArrowDropDownRoundedIcon />}
              >
                Last modified
              </Typography>
            </th>
            <th>
              <Typography level="title-sm">Size</Typography>
            </th>
            <th>
              <Typography level="title-sm">Report</Typography>
            </th>
            <th>
              <Typography level="title-sm">Delete</Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.id}>
              <td>
                <Typography
                  level="title-sm"
                  startDecorator={<FolderRoundedIcon color="primary" />}
                  sx={{ alignItems: 'flex-start' }}
                  >
                    {file.file_name}
                  </Typography>
                </td>
                <td>
                  <Typography level="body-sm">{formatDate(file.last_modified)}</Typography>
                </td>
                <td>
                  <Typography level="body-sm">{formatSize(file.size)}</Typography>
                </td>
                <td>
                  <Checkbox
                    checked={!!checkedFiles[file.id]} // Convert truthy/falsy to boolean
                    onChange={() => handleCheckboxChange(file.id)}
                  />
                </td>
                <td>
                  <IconButton onClick={() => handleDelete(file.id)} >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }