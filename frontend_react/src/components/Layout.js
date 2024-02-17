import React from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';

function Root(props) {
  return (
    <Box
      {...props}
      sx={[
        {
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr', // Full width on extra small screens
              sm: '200px 1fr', // Sidebar takes 200px, rest is for content on small screens
              md: '250px 1fr', // Increase sidebar width on medium screens
              lg: '300px 1fr', // Further increase on large screens
            },
            gridTemplateRows: 'auto 1fr', // Header row and content row
            minHeight: '100vh',
            gap: '16px', // Add some gap between sidebar and main content
          },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Header(props) {
  return (
    <Box
      component="header"
      className="Header"
      {...props}
      sx={[
        {
          p: 2,
          gap: 2,
          bgcolor: 'background.surface',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gridColumn: '1 / -1',
          borderBottom: '1px solid',
          borderColor: 'divider',
          position: 'sticky',
          top: 0,
          zIndex: 1100,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function SideNav(props) {
  return (
    <Box
      component="nav"
      className="Navigation"
      {...props}
      sx={[
        {
          p: 2,
          bgcolor: 'background.surface',
          borderRight: '1px solid',
          borderColor: 'divider',
          display: {
            xs: 'none',
            sm: 'initial',
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function SidePane(props) {
  return (
    <Box
      className="Inbox"
      {...props}
      sx={[
        {
          bgcolor: 'background.surface',
          borderRight: '1px solid',
          borderColor: 'divider',
          display: {
            xs: 'none',
            md: 'initial',
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Main(props) {
  return (
    <Box
      component="main"
      className="Main"
      {...props}
      sx={[{ p: 2 }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
    />
  );
}

function SideDrawer(props) {
  const { onClose, ...other } = props;
  return (
    <Box
      {...other}
      sx={[
        { position: 'fixed', zIndex: 1200, width: '100%', height: '100%' },
        ...(Array.isArray(other.sx) ? other.sx : [other.sx]),
      ]}
    >
      <Box
        role="button"
        onClick={onClose}
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0, 0, 0, 0.8)', // Adjusted for simplicity
        }}
      />
      <Sheet
        sx={{
          minWidth: 256,
          width: 'max-content',
          height: '100%',
          p: 2,
          boxShadow: 'lg',
          bgcolor: 'background.surface',
        }}
      >
        {props.children}
      </Sheet>
    </Box>
  );
}

// eslint-disable-next-line
export default {
  Root,
  Header,
  SideNav,
  SidePane,
  SideDrawer,
  Main,
};