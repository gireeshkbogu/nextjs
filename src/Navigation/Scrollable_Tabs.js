import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// INPUTS

// Buttons
import OutlinedButtons from '../Inputs/Button';
import IconLabelButtons from '../Inputs/Buttons_with_icons';
import SplitButton from '../Inputs/Button_groups';
import RadioButtonsGroup from '../Inputs/Radio';

// Checkboxes
import Checkboxes from '../Inputs/Checkbox';
import CheckboxLabels from '../Inputs/Checkbox_with_labels';

// Floating Action Button
import FloatingActionButtons from '../Inputs/Floating_action_button';

// Date and Time
import MaterialUIPickers from '../Inputs/Date_Time';

// Select
import SimpleSelect from '../Inputs/Select';

// SURFACES
// App Bar
import PrimarySearchAppBar from '../Surfaces/App_Bar';
// Paper
import SimplePaper from '../Surfaces/Paper';
// Card
import OutlinedCard from '../Surfaces/Card';
// Card Interaction
import RecipeReviewCard from '../Surfaces/Card_Interaction';
// Media Card
import MediaCard from '../Surfaces/Card_Media';
// Media Controls
import MediaControlCard from '../Surfaces/UI_Controls';
// Accordion
import SimpleAccordion from '../Surfaces/Accordion';
// Accordion with checkboxes
import ActionsInAccordionSummary from '../Surfaces/Accordion_with_Checkboxes';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Layout" {...a11yProps(0)} />
          <Tab label="Inputs" {...a11yProps(1)} />
          <Tab label="Navigation" {...a11yProps(2)} />
          <Tab label="Surfaces" {...a11yProps(3)} />
          <Tab label="Feedback" {...a11yProps(4)} />
          <Tab label="Data Display" {...a11yProps(5)} />
          <Tab label="Utils" {...a11yProps(6)} />
          <Tab label="Lab" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>

    2.0. Inputs - Button
        <Box
            my={4}>
            <OutlinedButtons />
        </Box>

    2.1. Inputs - Button with Icons and Labels
        <Box
            my={4}>
            <IconLabelButtons />
        </Box>

    2.2. Inputs - Button groups - Split button
        <Box
            my={4}>
            <SplitButton />
        </Box>

    2.3. Inputs - Checkbox 
        <Box
            my={4}>
            <Checkboxes />
        </Box>

    2.4. Inputs - Checkbox with Labels
        <Box
            my={4}>
            <CheckboxLabels />
        </Box>

    2.5. Inputs - Floating Action Buttons
        <Box
            my={4}>
            <FloatingActionButtons />
        </Box>

    2.6. Inputs - Date and Time
        <Box
            my={4}>
            <MaterialUIPickers />
        </Box>

    2.7. Inputs - Radio
        <Box
            my={4}>
            <RadioButtonsGroup />
        </Box>

    2.8. Inputs - Select
        <Box
            my={4}>
            <SimpleSelect />
        </Box>
      </TabPanel>

      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

      <TabPanel value={value} index={3}>
    1. App Bar
        <Box
            my={4}>
            <PrimarySearchAppBar />
        </Box>
    2. Paper
        <Box
            my={4}>
            <SimplePaper />
        </Box>
    3. Card
        <Box
            my={4}>
            <OutlinedCard />
        </Box>
    4. Card Interaction
        <Box
            my={4}>
            <RecipeReviewCard />
        </Box>
    5. Card Media
        <Box
            my={4}>
            <MediaCard />
        </Box>
    6. Media Controls
        <Box
            my={4}>
            <MediaControlCard />
        </Box>    
    7. Accordion
        <Box
            my={4}>
            <SimpleAccordion />
        </Box>
    8. Accordion with check boxes
        <Box
            my={4}>
            <ActionsInAccordionSummary />
        </Box>



      </TabPanel>

      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Eight
      </TabPanel>
    </div>
  );
}
