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

export default function DistributionLogs({sales,ward}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
    <CssBaseline />
      <Container maxWidth="md">
        
        {sales.map(sale =>
          
          sale.ward == ward &&
          
          <ExpansionPanel
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          key={sale.id}
          >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
              <Typography className={classes.heading}>{sale.family.identifier}</Typography>
          <Typography className={classes.secondaryHeading}>{sale.household.address} Nkulumane</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.secondaryHeading}>
            A family of 4 headed by Charity Nkala has collected a total of X times at Coolland. Last collection date was {sale.date}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      

          
        )}
           
      </Container>
    </div>
  );
}
