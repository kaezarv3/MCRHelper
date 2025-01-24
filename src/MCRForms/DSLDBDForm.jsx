import { Fieldset, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import BigField from "@/components/ui/bigField";
import SmallField from "@/components/ui/smallfield";
import CustomCheckbox from "@/components/ui/CustomCheckbox";

const DSLDBDForm = ({ resetSelection }) => {
  const handleCopyToClipboard = () => {
    const message = `
Contact Name: ${document.getElementsByName('name')[0]?.value}
Contact Number: ${document.getElementsByName('number')[0]?.value}
Access Hours: ${document.getElementsByName('Access Hours')[0]?.value}
Problem/Request Description: ${document.getElementsByName('Problem')[0]?.value}
TRF Policy Approval: ${document.getElementsByName('TRF Policy Approval')[0]?.checked ? 'Yes' : 'No'}
Circuit ID: ${document.getElementsByName('Circuit ID')[0]?.value}
Circuit Address: ${document.getElementsByName('Circuit Address')[0]?.value}
Circuit CFA (cable x pair): ${document.getElementsByName('Circuit CFA')[0]?.value}
What is the administrative status of the assigned DSLAM/MXK port? ${document.getElementsByName('1')[0]?.value}
Does the ACD modem have power? ${document.getElementsByName('2')[0]?.checked ? 'Yes' : 'No'}
If applicable, is the modem's power button pressed? ${document.getElementsByName('3')[0]?.checked ? 'Yes' : 'No'}
Are physical connections to the ACD modem secure and cables in good physical condition? ${document.getElementsByName('4')[0]?.checked ? 'Yes' : 'No'}
Have you attempted to reconnect the phone cord and ensured that it is in "Line"? ${document.getElementsByName('5')[0]?.checked ? 'Yes' : 'No'}
Have you tried a different phone cable? ${document.getElementsByName('6')[0]?.checked ? 'Yes' : 'No'}
Has the DSL modem been rebooted? ${document.getElementsByName('7')[0]?.checked ? 'Yes' : 'No'}
Have you performed an NI check? ${document.getElementsByName('8')[0]?.checked ? 'Yes' : 'No'}
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
              <SmallField label="Access Hours:" name="Access Hours" />
              <BigField label="Problem/Request Description:" name="Problem" />
              <SmallField label="Circuit ID:" name="Circuit ID" />
              <SmallField label="Circuit Address:" name="Circuit Address" />
              <SmallField label="Circuit CFA (cable x pair):" name="Circuit CFA" />
              <BigField label="What is the administrative status of the assigned DSLAM/MXK port?" name="1"/>
              <CustomCheckbox name="TRF Policy Approval" text="TRF Policy Approval"></CustomCheckbox>
              <CustomCheckbox name="2" text="Does the ACD modem have power?"></CustomCheckbox>
              <CustomCheckbox name="3" text="If applicable, is the modem's power button pressed?"></CustomCheckbox>
              <CustomCheckbox name="4" text="Are physical connections to the ACD modem secure and cables in good physical condition?"></CustomCheckbox>
              <CustomCheckbox name="5" text="Have you attempted to reconnect the phone cord and ensured that it is in 'Line'?"></CustomCheckbox>
              <CustomCheckbox name="6" text="Have you tried a different phone cable?"></CustomCheckbox>
              <CustomCheckbox name="7" text="Has the DSL modem been rebooted?"></CustomCheckbox>
              <CustomCheckbox name="8" text="Have you performed an NI check?"></CustomCheckbox>
            </Fieldset.Content>
          </Fieldset.Root>
        </Box>
        <Button onClick={resetSelection}>Back to Selection</Button>
        <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
      </Stack>
    </AbsoluteCenter>
  );
};

DSLDBDForm.propTypes = {
  resetSelection: PropTypes.func.isRequired,
};

export default DSLDBDForm;
