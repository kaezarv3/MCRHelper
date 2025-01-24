import { Fieldset, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import BigField from "@/components/ui/bigField";
import SmallField from "@/components/ui/smallfield";
import CustomCheckbox from "@/components/ui/CustomCheckbox";

const FXSLinesForm = ({ resetSelection }) => {
  const handleCopyToClipboard = () => {
    const message = `
Contact Name: ${document.getElementsByName('name')[0]?.value}
Contact Number: ${document.getElementsByName('number')[0]?.value}
Access Hours: ${document.getElementsByName('hours')[0]?.value}
Problem/Request Description (include phone numbers): ${document.getElementsByName('Problem')[0]?.value}
TRF Policy Approval: ${document.getElementsByName('Policy Approval')[0]?.checked ? 'Yes' : 'No'}
Affected Phone Number: ${document.getElementsByName('Affected Phone Number')[0]?.value}
Offered to Forward calls? ${document.getElementsByName('Forward Calls')[0]?.checked ? 'Yes' : 'No'}
Can you access the GrandStream/Adtran? ${document.getElementsByName('Access GrandStream')[0]?.checked ? 'Yes' : 'No'}
Does the subscriber gateway (Adtran only) or the phone number in META show any alarms or errors? ${document.getElementsByName('Errors in META')[0]?.checked ? 'Yes' : 'No'}
Is the phone number enabled in META? ${document.getElementsByName('Number Enabled in META')[0]?.checked ? 'Yes' : 'No'}
Is the end user device wired directly to the GrandStream/Adtran or is there a PBX in use? ${document.getElementsByName('PBX Use')[0]?.checked ? 'Yes' : 'No'}
Is all wiring/end user devices securely connected and in good physical condition? ${document.getElementsByName('Secure Wiring')[0]?.checked ? 'Yes' : 'No'}

--- Voice Issue ---
What is the hook status on the GrandStream/Adtran line? ${document.getElementsByName('Hook Status Voice')[0]?.value}
Place a test call. Can you observe the call reaching the GrandStream/Adtran and META? ${document.getElementsByName('Test Call Voice')[0]?.checked ? 'Yes' : 'No'}

--- Fax Issue ---
Is the problem with sending, receiving, or both? ${document.getElementsByName('Fax Problem Type')[0]?.value}
What is the hook status on the GrandStream/Adtran line? ${document.getElementsByName('Hook Status Fax')[0]?.value}
Attempt to send a test fax. Was the test fax received? ${document.getElementsByName('Test Fax Received')[0]?.checked ? 'Yes' : 'No'}
If yes, was the customer able to return the fax to 517-999-3993? ${document.getElementsByName('Customer Return Fax')[0]?.checked ? 'Yes' : 'No'}
What does the customer have set for their fax machine's baud rate and ECM? ${document.getElementsByName('Baud Rate and ECM')[0]?.value}
Place a test call. Can you observe the call reaching the GrandStream/Adtran and META? ${document.getElementsByName('Test Call Fax')[0]?.checked ? 'Yes' : 'No'}
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
              <SmallField label="Affected Phone Number:" name="Affected Phone Number" />
              <CustomCheckbox name="Forward Calls" text="Offered to Forward calls?" />
              <CustomCheckbox name="Access GrandStream" text="Can you access the GrandStream/Adtran?" />
              <CustomCheckbox name="Errors in META" text="Does the subscriber gateway (Adtran only) or the phone number in META show any alarms or errors?" />
              <CustomCheckbox name="Number Enabled in META" text="Is the phone number enabled in META?" />
              <CustomCheckbox name="PBX Use" text="Is the end user device wired directly to the GrandStream/Adtran or is there a PBX in use?" />
              <CustomCheckbox name="Secure Wiring" text="Is all wiring/end user devices securely connected and in good physical condition?" />

              
                <h3>--- Voice Issue? ---</h3>
                <SmallField label="What is the hook status on the GrandStream/Adtran line?" name="Hook Status Voice" />
                <CustomCheckbox name="Test Call Voice" text="Place a test call. Can you observe the call reaching the GrandStream/Adtran and META?" />
              

                <h3>--- Fax Issue? ---</h3>
                <SmallField label="Is the problem with sending, receiving, or both?" name="Fax Problem Type" />
                <SmallField label="What is the hook status on the GrandStream/Adtran line?" name="Hook Status Fax" />
                <CustomCheckbox name="Test Fax Received" text="Attempt to send a test fax. Was the test fax received?" />
                <CustomCheckbox name="Customer Return Fax" text="If yes, was the customer able to return the fax to 517-999-3993?" />
                <SmallField label="What does the customer have set for their fax machine's baud rate and ECM? (9600 baud and ECM off is recommended)" name="Baud Rate and ECM" />
                <CustomCheckbox name="Test Call Fax" text="Place a test call. Can you observe the call reaching the GrandStream/Adtran and META?" />
            </Fieldset.Content>
          </Fieldset.Root>
        </Box>
        <Button onClick={resetSelection}>Back to Selection</Button>
        <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
      </Stack>
    </AbsoluteCenter>
  );
};

FXSLinesForm.propTypes = {
  resetSelection: PropTypes.func.isRequired,
};

export default FXSLinesForm;
