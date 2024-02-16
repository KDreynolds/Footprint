import React, { useEffect, useState } from 'react';
import supabase from '../util/supabase';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Typography from '@mui/joy/Typography';
import Table from '@mui/joy/Table';

import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

export default function TableFiles() {
  const [files, setFiles] = useState([]);

  const formatSize = (size) => {
    if (size < 1024) return size + ' bytes';
    let sizeInKB = size / 1024;
    if (sizeInKB < 1024) return sizeInKB.toFixed(1) + ' KB';
    let sizeInMB = sizeInKB / 1024;
    if (sizeInMB < 1024) return sizeInMB.toFixed(1) + ' MB';
    let sizeInGB = sizeInMB / 1024;
    return sizeInGB.toFixed(1) + ' GB';
  };

  useEffect(() => {
    const fetchFiles = async () => {
      const { data, error } = await supabase
        .from('files')
        .select('*');

      if (error) {
        console.error('Error fetching files:', error);
      } else {
        console.log('Retrieved data:', data); // This line logs the fetched data
        setFiles(data);
      }
    };

    fetchFiles();
  }, []);

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
              <Typography level="title-sm">Users</Typography>
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
                <AvatarGroup
                  size="sm"
                  sx={{ '--AvatarGroup-gap': '-8px', '--Avatar-size': '24px' }}
                >
                  {/* Display avatars for users */}
                </AvatarGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}