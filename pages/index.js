// npm i @material-ui/lab

import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';


// INPUTS

// Buttons
import OutlinedButtons from '../src/Inputs/Button';
import IconLabelButtons from '../src/Inputs/Buttons_with_icons';
import SplitButton from '../src/Inputs/Button_groups';
import RadioButtonsGroup from '../src/Inputs/Radio';

// Checkboxes
import Checkboxes from '../src/Inputs/Checkbox';
import CheckboxLabels from '../src/Inputs/Checkbox_with_labels';

// Floating Action Button
import FloatingActionButtons from '../src/Inputs/Floating_action_button';

// Date and Time
import MaterialUIPickers from '../src/Inputs/Date_Time';

// Select
import SimpleSelect from '../src/Inputs/Select';


// NAVIGATION

// Tabs
import CenteredTabs from '../src/Navigation/Tabs';
import ScrollableTabsButtonAuto from '../src/Navigation/Scrollable_Tabs';

import DataTable from '../src/DataTable';
import SimpleList from '../src/SimpleList';
import SwitchListSecondary from '../src/Switch';
import SimpleCollapse from '../src/Transitions';
import DescriptionAlerts from '../src/Alerts';
import ComboBox from '../src/Autocomplete';
import Copyright from '../src/Copyright';
import { palette } from '@material-ui/system';

export default function Index() {
  return (
    //<Container maxWidth="sm">
    <Container >
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Basics
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          Header
        </Typography>
      </Box>

Material UI has two different components - Core and Lab. Lab is experimental. 
 Core (Layout, Inputs, Navigation, Surfaces, Feedback, Data Display, Utils) and Lab. <br />
<br />

      <Box my={4}>
        <ScrollableTabsButtonAuto/>
      </Box>

<br />
<br />

      <Box my={4}>
        <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
      </Box>

    </Container>
    
  );
}
