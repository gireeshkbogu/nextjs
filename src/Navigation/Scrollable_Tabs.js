import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// LAYOUT
// Fluid
import SimpleContainer from '../Layout/Fluid_Layout';
import FixedContainer from '../Layout/Fixed_Layout';
// Grid
import SpacingGrid from '../Layout/Spacing_Grid';
import CenteredGrid from '../Layout/Basic_Grid';

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

// NAVIGATION
import SimpleBottomNavigation from '../Navigation/Bottom_Navigation';
import MiniDrawer from '../Navigation/Minivariant_Drawer';


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

// FEEDBACk

// Progress bar
import CircularIndeterminate from '../Feedback/Progress_Bar';
// Linear with label
import LinearWithValueLabel from '../Feedback/Linear_with_Label';
// Circular with label
import CircularStatic from '../Feedback/Circular_with_Label';
// Interactive Integration
import CircularIntegration from '../Feedback/Interactive_Integration';
import { Container } from '@material-ui/core';
// Alert Dialog
import AlertDialog from '../Feedback/Dialog.js';
// Simple Snackbar
import SimpleSnackbar from '../Feedback/Snack_Bar';
// Positioned Snackbar
import PositionedSnackbar from '../Feedback/Positioned_Snack_Bar';
import ConsecutiveSnackbars from '../Feedback/Consecutive_Snack_Bar';
import SimpleBackdrop from '../Feedback/Backdrop';

// Data Display

// Image Avatars
import ImageAvatars from '../Data_Display/Image_Avatar';
// Letter Avatars
// import stringAvatar from '../Data_Display/Letter_Avatars';
// Image Avatar Sizes
//import ImageAvatarsSize from '../Data_Display/Sizes_Avatar';
// Simple Badge
import SimpleBadge from '../Data_Display/Badge';
// Chips
import Chips from '../Data_Display/Chip';
// OutlinedChips
import OutlinedChips from '../Data_Display/Outlined_Chips';
import ChipsArray from '../Data_Display/Chip_Array';
// Dividers
import ListDividers from '../Data_Display/List_Dividers';
import InsetDividers from '../Data_Display/Inset_Dividers';
import VerticalDividers from '../Data_Display/Vertical_dividers';
// icons
import SvgMaterialIcons from '../Data_Display/Material_Icons';
import SvgIconsColor from '../Data_Display/Color_Icons';
import SvgIconsSize from '../Data_Display/Icon_Size';
// List
import SimpleList from '../Data_Display/SimpleList';
// Data table
import DataTable from '../Data_Display/DataTable';
// Switch 
import SwitchListSecondary from '../Data_Display/Switch';
// Checkbox list
import CheckboxListSecondary from '../Data_Display/Checkbox_List_Secondary';
// Item List
import AlignItemsList from '../Data_Display/Align_Item_List';
// Typohgraphy
import Types from '../Data_Display/Typography';


// Lab
import DescriptionAlerts from '../Lab/Alerts';
import ComboBox from '../Lab/Autocomplete';
import { Alert } from '@material-ui/lab';

// Utils
// Transition
import SimpleCollapse from '../Utils/Transitions'
import SimplePopover from '../Utils/Popover';

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
      1. Fixed
        <FixedContainer/>
        <br/>
      2. Fluid
        <SimpleContainer/>
        <br/>
      3. Spacing Grid
        <SpacingGrid/>
        <br/>
      4. Simple Centered Grid
        <CenteredGrid/>
        <br/>
        <br/>

      </TabPanel>
      <TabPanel value={value} index={1}>

    1. Buttons
        <Box
            my={4}>
            <OutlinedButtons />
        </Box>

    2. Button with Icons and Labels
        <Box
            my={4}>
            <IconLabelButtons />
        </Box>

    3. Split button
        <Box
            my={4}>
            <SplitButton />
        </Box>

    4. Checkbox 
        <Box
            my={4}>
            <Checkboxes />
        </Box>

    5. Checkbox with Labels
        <Box
            my={4}>
            <CheckboxLabels />
        </Box>

    6. Floating Action Buttons
        <Box
            my={4}>
            <FloatingActionButtons />
        </Box>

    7. Date and Time
        <Box
            my={4}>
            <MaterialUIPickers />
        </Box>

    8. Radio Buttons
        <Box
            my={4}>
            <RadioButtonsGroup />
        </Box>

    9. Select
        <Box
            my={4}>
            <SimpleSelect />
        </Box>
      </TabPanel>

      <TabPanel value={value} index={2}>
    1. Bottom Navigation
        <SimpleBottomNavigation/>
        <br/>
    2. MiniDrawer
        <Box>
          <MiniDrawer/>
        </Box>

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
    1. Progress Bar
        <Box
            my={4}>
            <CircularIndeterminate />
        </Box>
    2. Linear with Label
        <Box
            my={4}>
            <LinearWithValueLabel />
        </Box>
    3. Circular with Label
        <Box
            my={4}>
            <CircularStatic />
        </Box>
    4. Interactive Circular Integration
        <Box
            my={4}>
            <CircularIntegration />
        </Box>
    5. Alert Dialog
        <Box
            my={4}>
            <AlertDialog />
        </Box>
    6. Simple Snackbar
        <Box
            my={4}>
            <SimpleSnackbar />
        </Box>
    7. Positioned Snackbar
        <Box
            my={4}>
            <PositionedSnackbar />
        </Box>
    8. Consecutive Snackbar
        <Box
            my={4}>
            <ConsecutiveSnackbars />
        </Box>
    9. Simple Backdrop
        <Box
            my={4}>
            <SimpleBackdrop />
        </Box>
        
      </TabPanel>
      <TabPanel value={value} index={5}>
    1. Image Avatars
        <Box
            my={4}>
            <ImageAvatars />
        </Box>
    2. Simple Badge
        <Box
            my={4}>
            <SimpleBadge />
        </Box>
    3. Chips
        <Box
            my={4}>
            <Chips />
        </Box>
    4. Outlines Chips
        <Box
            my={4}>
            <OutlinedChips />
        </Box>
    5. Chips Array
        <Box
            my={4}>
            <ChipsArray />
        </Box>
    6. List Dividers
        <Box
            my={4}>
            <ListDividers />
        </Box>
    7. Inset Dividers
        <Box
            my={4}>
            <InsetDividers />
        </Box>
    8. Vertical Dividers
        <Box
            my={4}>
            <VerticalDividers/>
        </Box>
    9. Color Icons
        <Box
            my={4}>
            <SvgIconsColor/>
        </Box>
    10. Icon Size
        <Box
            my={4}>
            <SvgIconsSize/>
        </Box>
    11. Material Icons
        <Box
            my={4}>
            <SvgMaterialIcons/>
        </Box>
    12. Simple List
        <Box
            my={4}>
            <SimpleList/>
        </Box>
    13. Data Table
        <Box
            my={4}>
            <DataTable/>
        </Box>
    14. Switch
        <Box
            my={4}>
            <SwitchListSecondary/>
        </Box>
    15. Checkbox List
        <Box
            my={4}>
            <CheckboxListSecondary/>
        </Box>
    16. Align Item List
        <Box
            my={4}>
            <AlignItemsList/>
        </Box>
    17. Typography Types
        <Box
            my={4}>
            <Types/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
      1.  Transition - Collapse)
        <Box
            my={4}>
            <SimpleCollapse/>
        </Box>
      2.  Popover 
        <Box
            my={4}>
            <SimplePopover/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={7}>
      1. Alerts
        <Box
            my={4}>
            <DescriptionAlerts/>
        </Box>
        2. Autocomplete
        <Box
            my={4}>
            <ComboBox/>
        </Box>

      </TabPanel>
    </div>
  );
}
