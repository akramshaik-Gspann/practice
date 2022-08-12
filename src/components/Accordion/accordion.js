import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../../assets/scss/accordion.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
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

export default function Accordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Estimate your Shipping</Typography>
          <Typography className={classes.secondaryHeading}>Shipping to 91001</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Curabitur pulvinar pulvinar arcu. Praesent accumsan, leo vitae fringilla hendrerit, ligula turpis posuere augue, 
          a elementum nisl lorem in odio. Morbi semper eu purus quis commodo. Sed fringilla turpis vel consectetur hendrerit. 
          Suspendisse mollis maximus nunc eget egestas. Duis sed egestas odio. Quisque nec placerat justo, nec bibendum risus.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Enter a Coupon Code</Typography>
          <Typography className={classes.secondaryHeading}>
          20% discount applied
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Ut malesuada auctor magna et tristique. Aliquam eleifend felis nulla, nec vestibulum nibh volutpat interdum.
          Sed viverra, enim id dignissim interdum, risus purus iaculis dui, quis blandit eros odio at ante.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Apply Gift Card</Typography>
          <Typography className={classes.secondaryHeading}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Vestibulum sed lorem sed metus tristique sodales in eu risus. Suspendisse a diam non magna tristique dapibus dictum vitae eros.
          Aliquam et nulla nisl. Ut odio nisi, consequat sit amet mi vitae, tempus blandit urna.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
