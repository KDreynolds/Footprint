import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useAuth } from '../util/auth'; // Import useAuth from auth.js
import supabase from '../util/supabase';

const SupabaseDropzone = () => {
  const { user } = useAuth(); // Use the useAuth hook to access the user object

  const onDrop = useCallback(async (acceptedFiles) => {
    if (!user) {
      console.error('User must be logged in to upload files');
      alert('You must be logged in to upload files.');
      return;
    }

    const file = acceptedFiles[0];
    const fileSize = file.size;
    // Clean the file name by replacing spaces and special characters with underscores
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
    const filePath = `uploads/${user.id}/${cleanFileName}`; // Use cleaned file name

    try {
      const { error: uploadError } = await supabase.storage
        .from('footprint')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // After successful upload, insert file details into the 'files' table
      const { data: fileData, error: insertError } = await supabase
        .from('files')
        .insert([
          {
            user_id: user.id,
            file_name: cleanFileName,
            file_path: filePath,
            size: fileSize // Store the file size
          }
        ]);

      if (insertError) throw insertError;

      console.log('File uploaded and record inserted successfully:', fileData);
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error in file upload or database insertion:', error.message);
      alert('Error uploading file or inserting record');
    }
  }, [user]); // Add user as a dependency to useCallback

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const dropzoneStyle = {
    border: '2px dashed #007bff',
    padding: '20px',
    cursor: 'pointer',
    maxWidth: '600px', // Set a max-width for the dropzone
    margin: '0 auto', // Center the dropzone horizontally
    marginTop: '20px', // Add some margin at the top
  };

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  );
};

export default SupabaseDropzone;