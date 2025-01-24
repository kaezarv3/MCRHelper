import { Fieldset, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import BigField from "@/components/ui/bigField";
import SmallField from "@/components/ui/smallfield";
import CustomCheckbox from "@/components/ui/CustomCheckbox";

const DSLSlowSpeedsForm = ({ resetSelection }) => {
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
Are there any errors building on the assigned card & port in the DSLAM/MXK? ${document.getElementsByName('1')[0]?.value}
Are sync speeds appropriate based on loop length and historical recordings? ${document.getElementsByName('2')[0]?.value}
Does the graphing indicate saturation? ${document.getElementsByName('3')[0]?.value}
What is the negotiated speed/duplex on the modem's LAN port(s)? ${document.getElementsByName('4')[0]?.value}
Were the speed tests to an ACD server speed test server? ${document.getElementsByName('5')[0]?.value}
If speed test results are fine, what destinations experience the slow speeds? ${document.getElementsByName('6')[0]?.value}
Verified customer CPU is not maxing out during test? ${document.getElementsByName('7')[0]?.checked ? 'Yes' : 'No'}
Are they connected via wireless or wired? ${document.getElementsByName('8')[0]?.value}
Are pings clean to the ACD modem/router/switch? ${document.getElementsByName('9')[0]?.checked ? 'Yes' : 'No'}
Can the customer device be pinged? ${document.getElementsByName('10')[0]?.checked ? 'Yes' : 'No'}
If the customer is not connected directly to the ACD modem/switch/router, perform a bypass test. Did results improve to expected speeds when bypassed? ${document.getElementsByName('11')[0]?.checked ? 'Yes' : 'No'}
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
              <CustomCheckbox name="TRF Policy Approval" text="TRF Policy Approval" />
              <SmallField label="Circuit ID:" name="Circuit ID" />
              <SmallField label="Circuit Address:" name="Circuit Address" />
              <SmallField label="Circuit CFA (cable x pair):" name="Circuit CFA" />
              <BigField label="Are there any errors building on the assigned card & port in the DSLAM/MXK?" name="1" />
              <BigField label="Are sync speeds appropriate based on loop length and historical recordings?" name="2" />
              <BigField label="Does the graphing indicate saturation?" name="3" />
              <BigField label="What is the negotiated speed/duplex on the modem's LAN port(s)?" name="4" />
              <BigField label="Were the speed tests to an ACD server speed test server?" name="5" />
              <BigField label="If speed test results are fine, what destinations experience the slow speeds? (provide specific examples with traceroute if possible)" name="6" />
              <CustomCheckbox name="7" text="Verified customer CPU is not maxing out during test?" />
              <SmallField label="Are they connected via wireless or wired?" name="8" />
              <CustomCheckbox name="9" text="Are pings clean to the ACD modem/router/switch?" />
              <CustomCheckbox name="10" text="Can the customer device be pinged? (If Yes, are the results clean?)" />
              <CustomCheckbox name="11" text="If the customer is not connected directly to the ACD modem/switch/router, perform a bypass test. Did results improve to expected speeds when bypassed?" />
            </Fieldset.Content>
          </Fieldset.Root>
        </Box>
        <Button onClick={resetSelection}>Back to Selection</Button>
        <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
      </Stack>
    </AbsoluteCenter>
  );
};

DSLSlowSpeedsForm.propTypes = {
  resetSelection: PropTypes.func.isRequired,
};

export default DSLSlowSpeedsForm;
