import React from 'react';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';

import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';

export default function Navigation() {
  return (
    <List size="sm" sx={{ '--ListItem-radius': '8px', '--List-gap': '4px' }}>
      <ListItem nested>
        <ListSubheader sx={{ letterSpacing: '2px', fontWeight: '800' }}>
          Browse
        </ListSubheader>
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            '& .JoyListItemButton-root': { p: '8px' },
          }}
        >
          <ListItem>
            <ListItemButton selected>
              <ListItemDecorator>
                <FolderRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Files</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
              <AssessmentRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Create Packet</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </ListItem>
      </List>
  );
}