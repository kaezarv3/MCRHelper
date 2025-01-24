import { Fieldset, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import PropTypes from "prop-types";
import BigField from "@/components/ui/bigField";
import SmallField from "@/components/ui/smallfield";

const WiFiConnectivityIssuesForm = ({ resetSelection }) => {
  const handleCopyToClipboard = () => {
    const message = `
${document.getElementsByName('notes')[0]?.value}

Contact Name: ${document.getElementsByName('name')[0]?.value}
Contact Number: ${document.getElementsByName('number')[0]?.value}
Access Hours: ${document.getElementsByName('Access Hours')[0]?.value}
Problem/Request Description: ${document.getElementsByName('Problem')[0]?.value}
TRF Policy Approval: ${document.getElementsByName('TRF Policy Approval')[0]?.checked ? 'Yes' : 'No'}
CPE accessible? ${document.getElementsByName('CPE accessible?')[0]?.checked ? 'Yes' : 'No'}
Customer description of the issue? What is the actual expected service speed? ${document.getElementsByName('1')[0]?.value}
What is testing device and capability (Single or MIMO)? ${document.getElementsByName('2')[0]?.value}
What is signal strength and PHYS rate? ${document.getElementsByName('3')[0]?.value}
What are the speed test results? Testing to ACD server? ${document.getElementsByName('4')[0]?.value}
All devices impacted? ${document.getElementsByName('5')[0]?.checked ? 'Yes' : 'No'}
If signal level issue tried 2.4GHZ? ${document.getElementsByName('6')[0]?.checked ? 'Yes' : 'No'}
If signal issue does proximity to radio change anything? ${document.getElementsByName('7')[0]?.checked ? 'Yes' : 'No'}
If CALIX reviewed the alarms? ${document.getElementsByName('8')[0]?.checked ? 'Yes' : 'No'}
If CALIX reviewed WAN link status? ${document.getElementsByName('9')[0]?.checked ? 'Yes' : 'No'}
If CALIX checked for AP extender and connected to closest one? ${document.getElementsByName('10')[0]?.checked ? 'Yes' : 'No'}
If CALIX checked for interference levels? ${document.getElementsByName('11')[0]?.checked ? 'Yes' : 'No'}
Customer is aware of the WIFI capabilities at play? ${document.getElementsByName('12')[0]?.checked ? 'Yes' : 'No'}
Does the graphing indicate saturation? ${document.getElementsByName('13')[0]?.checked ? 'Yes' : 'No'}
What is the negotiated speed/duplex on the router/modem's LAN port(s)? ${document.getElementsByName('14')[0]?.value}
Is packet loss to a specific destination or all hosts? ${document.getElementsByName('15')[0]?.value}
Customer Equipment Bypassed (Assuming no impairment to ACD CPE)? ${document.getElementsByName('16')[0]?.checked ? 'Yes' : 'No'}
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
              <BigField label="Notes" name="notes" />
              <SmallField label="Contact Name:" name="name" />
              <SmallField label="Contact Number:" name="number" />
              <SmallField label="Access Hours" name="Access Hours" />
              <BigField label="Problem/Request Description" name="Problem" />
              <Checkbox name="TRF Policy Approval">TRF Policy Approval</Checkbox>
              <Checkbox name="CPE accessible?">CPE accessible?</Checkbox>
              <BigField label="Customer description of the issue? What is the actual expected service speed?" name="1" />
              <SmallField label="What is testing device and capability (Single or MIMO)?" name="2" />
              <SmallField label="What is signal strength and PHYS rate?" name="3" />
              <SmallField label="What are the speed test results? Testing to ACD server?" name="4" />
              <Checkbox name="5">All devices impacted?</Checkbox>
              <Checkbox name="6">If signal level issue tried 2.4GHZ?</Checkbox>
              <Checkbox name="7">If signal issue does proximity to radio change anything?</Checkbox>
              <Checkbox name="8">If CALIX reviewed the alarms?</Checkbox>
              <Checkbox name="9">If CALIX reviewed WAN link status?</Checkbox>
              <Checkbox name="10">If CALIX checked for AP extender and connected to closest one?</Checkbox>
              <Checkbox name="11">If CALIX checked for interference levels?</Checkbox>
              <Checkbox name="12">Customer is aware of the WIFI capabilities at play?</Checkbox>
              <Checkbox name="13">Does the graphing indicate saturation?</Checkbox>
              <SmallField label="What is the negotiated speed/duplex on the router/modem's LAN port(s)?" name="14" />
              <SmallField label="Is packet loss to a specific destination or all hosts?" name="15" />
              <Checkbox name="16">Customer Equipment Bypassed (Assuming no impairment to ACD CPE)?</Checkbox>
            </Fieldset.Content>
          </Fieldset.Root>
        </Box>
        <Button onClick={resetSelection}>Back to Selection</Button>
        <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
      </Stack>
    </AbsoluteCenter>
  );
};

WiFiConnectivityIssuesForm.propTypes = {
  resetSelection: PropTypes.func.isRequired,
};

export default WiFiConnectivityIssuesForm;