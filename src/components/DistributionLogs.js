import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, CssBaseline, Container} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function DistributionLogs() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
    <CssBaseline />
    <Container maxWidth="md">
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Family B</Typography>
          <Typography className={classes.secondaryHeading}>12653 Nkulumane</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.secondaryHeading}>
            A family of 4 headed by Charity Nkala has collected a total of 10 times at Coolland. Last collection date was 23 Feb, 2020
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Family A</Typography>
          <Typography className={classes.secondaryHeading}>
            16456 Nkulumane
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.secondaryHeading}>
            A family of 2 headed by Handsome Sibanda has collected a total of 3 times at Manemo Supermarket. Last collection date was 17 Mar, 2020
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Family C</Typography>
          <Typography className={classes.secondaryHeading}>
            8834 Nkulumane
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.secondaryHeading}>
            A family of 6 headed by Andile Dlodlo has collected a total of 2 times at Mqamulazwe Supermarket. Last collection date was 02 Apr, 2020
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Family A</Typography>
          <Typography className={classes.secondaryHeading}>
            9434 Nkulumane
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.secondaryHeading}>
            A family of 5 headed by Susan Moyo has collected a total of 3 times at Coolland Supermarket. Last collection date was 06 Apr, 2020
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Container>
    </div>
  );
}
