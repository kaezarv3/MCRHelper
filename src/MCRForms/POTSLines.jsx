import { Fieldset, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import BigField from "@/components/ui/bigField";
import SmallField from "@/components/ui/smallfield";
import CustomCheckbox from "@/components/ui/CustomCheckbox";

const POTSLinesForm = ({ resetSelection }) => {
  const handleCopyToClipboard = () => {
    const message = `
Contact Name: ${document.getElementsByName('name')[0]?.value}
Contact Number: ${document.getElementsByName('number')[0]?.value}
Access Hours: ${document.getElementsByName('hours')[0]?.value}
Problem/Request Description (include phone numbers): ${document.getElementsByName('Problem')[0]?.value}
TRF Policy Approval: ${document.getElementsByName('Policy Approval')[0]?.checked ? 'Yes' : 'No'}
Circuit ID: ${document.getElementsByName('Circuit ID')[0]?.value}
Circuit Address: ${document.getElementsByName('Circuit Address')[0]?.value}
Circuit CFA (Cable x Pair): ${document.getElementsByName('Circuit CFA')[0]?.value}
Phone number of affected phone line: ${document.getElementsByName('Affected Phone Line')[0]?.value}
Offered to Forward calls? ${document.getElementsByName('Forward Calls')[0]?.checked ? 'Yes' : 'No'}
Have you tried another phone? ${document.getElementsByName('Another Phone')[0]?.checked ? 'Yes' : 'No'}
Have you tried a different phone cord? ${document.getElementsByName('Different Cord')[0]?.checked ? 'Yes' : 'No'}
Have you tried a different wall jack? ${document.getElementsByName('Different Jack')[0]?.checked ? 'Yes' : 'No'}
Are all jacks and cords appearing to be in good physical condition? ${document.getElementsByName('Physical Condition')[0]?.checked ? 'Yes' : 'No'}
Have you disconnected additional devices that may be sharing this line? ${document.getElementsByName('Disconnected Devices')[0]?.checked ? 'Yes' : 'No'}
Have you performed an NI check? ${document.getElementsByName('NI Check')[0]?.checked ? 'Yes' : 'No'}

--- No Dial Tone ---
Is the port administratively enabled in the DSLAM/MXK? ${document.getElementsByName('Port Enabled')[0]?.checked ? 'Yes' : 'No'}
Is the phone number enabled in META? ${document.getElementsByName('Number Enabled in META')[0]?.checked ? 'Yes' : 'No'}
Does the subscriber gateway for this phone number show alarms/errors in META? ${document.getElementsByName('Errors in META')[0]?.checked ? 'Yes' : 'No'}
Place a test call. Can you observe the call reaching the DSLAM/MXK and META? ${document.getElementsByName('Test Call Dial Tone')[0]?.checked ? 'Yes' : 'No'}
What is the hook status on the port in the DSLAM/MXK? ${document.getElementsByName('Hook Status Dial Tone')[0]?.value}

--- Fax Issue ---
Is the problem with sending, receiving, or both? ${document.getElementsByName('Fax Problem Type')[0]?.value}
What is the hook status on the port in the DSLAM/MXK? ${document.getElementsByName('Hook Status Fax')[0]?.value}
Attempt to send a test fax. Was the test fax received? ${document.getElementsByName('Test Fax Received')[0]?.checked ? 'Yes' : 'No'}
If yes, was the customer able to return the fax to 517-999-3993? ${document.getElementsByName('Customer Return Fax')[0]?.checked ? 'Yes' : 'No'}
What does the customer have set for their fax machine's baud rate and ECM? ${document.getElementsByName('Baud Rate and ECM')[0]?.value}
Place a test call. Can you observe the call reaching the DSLAM/MXK and META? ${document.getElementsByName('Test Call Fax')[0]?.checked ? 'Yes' : 'No'}
    `;

    navigator.clipboard.writeText(message)
      .then(() => alert("Message copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <AbsoluteCenter minWidth="85%">
      <Stack width="100%">
        <Box width="100%" borderWidth="1px" padding="1.2rem" maxH="80vh" overflowY="auto">
          <Fieldset.Root size="sm" invalid>
            <Fieldset.Content>
              <SmallField label="Contact Name:" name="name" />
              <SmallField label="Contact Number:" name="number" />
              <SmallField label="Access Hours:" name="hours" />
              <BigField label="Problem/Request Description (include phone numbers):" name="Problem" />
              <CustomCheckbox name="Policy Approval" text="TRF Policy Approval" />
              <SmallField label="Circuit ID:" name="Circuit ID" />
              <SmallField label="Circuit Address:" name="Circuit Address" />
              <SmallField label="Circuit CFA (Cable x Pair):" name="Circuit CFA" />
              <SmallField label="Phone number of affected phone line:" name="Affected Phone Line" />
              <CustomCheckbox name="Forward Calls" text="Offered to Forward calls?" />
              <CustomCheckbox name="Another Phone" text="Have you tried another phone?" />
              <CustomCheckbox name="Different Cord" text="Have you tried a different phone cord?" />
              <CustomCheckbox name="Different Jack" text="Have you tried a different wall jack?" />
              <CustomCheckbox name="Physical Condition" text="Are all jacks and cords appearing to be in good physical condition?" />
              <CustomCheckbox name="Disconnected Devices" text="Have you disconnected additional devices that may be sharing this line?" />
              <CustomCheckbox name="NI Check" text="Have you performed an NI check?" />
                <h3>--- No Dial Tone ---</h3>
                <CustomCheckbox name="Port Enabled" text="Is the port administratively enabled in the DSLAM/MXK?" />
                <CustomCheckbox name="Number Enabled in META" text="Is the phone number enabled in META?" />
                <CustomCheckbox name="Errors in META" text="Does the subscriber gateway for this phone number show alarms/errors in META?" />
                <CustomCheckbox name="Test Call Dial Tone" text="Place a test call. Can you observe the call reaching the DSLAM/MXK and META?" />
                <SmallField label="What is the hook status on the port in the DSLAM/MXK?" name="Hook Status Dial Tone" />
                <h3>--- Fax Issue ---</h3>
                <SmallField label="Is the problem with sending, receiving, or both?" name="Fax Problem Type" />
                <SmallField label="What is the hook status on the port in the DSLAM/MXK?" name="Hook Status Fax" />
                <CustomCheckbox name="Test Fax Received" text="Attempt to send a test fax. Was the test fax received?" />
                <CustomCheckbox name="Customer Return Fax" text="If yes, was the customer able to return the fax to 517-999-3993?" />
                <SmallField label="What does the customer have set for their fax machine's baud rate and ECM? (9600 baud and ECM off is recommended)" name="Baud Rate and ECM" />
                <CustomCheckbox name="Test Call Fax" text="Place a test call. Can you observe the call reaching the DSLAM/MXK and META?" />
            </Fieldset.Content>
          </Fieldset.Root>
        </Box>
        <Button onClick={resetSelection}>Back to Selection</Button>
        <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
      </Stack>
    </AbsoluteCenter>
  );
};

POTSLinesForm.propTypes = {
  resetSelection: PropTypes.func.isRequired,
};

export default POTSLinesForm;
