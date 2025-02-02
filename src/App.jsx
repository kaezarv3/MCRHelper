import { useState } from 'react';
import { Button, VStack, Box, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import FiberDownForm from './MCRForms/FiberDownForm'; 
import FiberSlowSpeeds from './MCRForms/FiberSlowForm';
import FiberUPNODATAForm from './MCRForms/FiberUPNODATAForm';
import ALLSERVICESVPNISSUESForm from './MCRForms/ALLSERVICESVPNISSUESForm';
import ALLSERVICESDROPPINGPACKETSForm from './MCRForms/ALLSERVICESDROPPINGPACKETSForm';
import WiFiConnectivityIssuesForm from './MCRForms/WIFIForm';
import DSLDBDForm from './MCRForms/DSLDBDForm';
import DSLSlowSpeedsForm from './MCRForms/DSLSlowSpeeds';
import T1SlowSpeedsForm from './MCRForms/T1SlowSpeeds';
import T1DownBouncingForm from './MCRForms/T1DownBouncing';
import RealChoiceTVForm from './MCRForms/RealChoiceTV';
import FXSLinesForm from './MCRForms/FXSLines';
import POTSLinesForm from './MCRForms/POTSLines';
import IPBXLinesForm from './MCRForms/iPBXLines';
import OtherForms from './MCRForms/OtherMCRForms';

function App() {
  return (
    <>
      <Box textAlign="center">
        <MCRType />
      </Box>
    </>
  );
}

const MCRType = () => {
  const [selected, setSelected] = useState('');

  const typenames = [
    'Fiber Down/Bouncing',
    'Fiber Slow Speeds',
    'Fiber UP/NO DATA',
    'All Services VPN Issues',
    'All Services Dropping Packets',
    'WiFi Connectivity Issues',
    'DSL Down, Bouncing, or Degraded Sync',
    'DSL Slow Speeds',
    'T1 Down/Bouncing',
    'T1 Slow Speeds',
    'RealChoice TV',
    'FXS Lines',
    'POTS Lines',
    'iPBX Lines',
    'Other Kinds of Issues',
  ];

  const handleSelect = (name) => {
    setSelected(name);
    console.log(`${name} has been selected`);
  };

  return (
    <Box>
      {/* Conditionally Render the Buttons or the Form */}
      {!selected ? (
        <VStack spacing={4} align="stretch">
          <Heading fontWeight="bold" fontSize="4xl" my="1.5rem">
            MCR Helper Tool
          </Heading>
          {typenames.map((typename, ind) => (
            <Button
              variant="subtle"
              key={ind}
              onClick={() => handleSelect(typename)}
              size="lg"
            >
              {typename}
            </Button>
          ))}
        </VStack>
      ) : (
        <FormComponent type={selected} resetSelection={() => setSelected('')} />
      )}
    </Box>
  );
};

const FormComponent = ({ type, resetSelection }) => {
  return (
    <Box textAlign="center" >
      <Heading fontWeight="bold" fontSize="2xl" paddingTop={'1.5rem'}>
        {type} MCR
      </Heading>
      {/* Using a switch statement to render the appropriate form */}
      {(() => {
        switch (type) {
          case 'Fiber Down/Bouncing':
            return <FiberDownForm resetSelection={resetSelection} />;
          case 'Fiber Slow Speeds':
            return <FiberSlowSpeeds resetSelection={resetSelection}/>;
          case 'Fiber UP/NO DATA':
            return <FiberUPNODATAForm resetSelection={resetSelection} />;
          case 'All Services VPN Issues':
            return <ALLSERVICESVPNISSUESForm resetSelection={resetSelection} />;
          case 'All Services Dropping Packets':
            return <ALLSERVICESDROPPINGPACKETSForm resetSelection={resetSelection} />;
          case 'WiFi Connectivity Issues':
            return <WiFiConnectivityIssuesForm resetSelection={resetSelection} />;
          case 'DSL Down, Bouncing, or Degraded Sync':
            return <DSLDBDForm resetSelection={resetSelection} />;
          case 'DSL Slow Speeds':
            return <DSLSlowSpeedsForm resetSelection={resetSelection} />;
          case 'T1 Down/Bouncing':
            return <T1DownBouncingForm resetSelection={resetSelection} />;
          case 'T1 Slow Speeds':
            return <T1SlowSpeedsForm resetSelection={resetSelection} />;
          case 'RealChoice TV':
            return <RealChoiceTVForm resetSelection={resetSelection} />;
          case 'FXS Lines':
            return <FXSLinesForm resetSelection={resetSelection} />;
          case 'POTS Lines':
            return <POTSLinesForm resetSelection={resetSelection} />;
          case 'iPBX Lines':
            return <IPBXLinesForm resetSelection={resetSelection} />;
          case 'Other Kinds of Issues':
            return <OtherForms resetSelection={resetSelection} />;
        }
      })()}
    </Box>
  );
};

FormComponent.propTypes = {
  type: PropTypes.string.isRequired,
  resetSelection: PropTypes.func.isRequired,
};





export default App;
