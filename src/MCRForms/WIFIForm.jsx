import { Fieldset, Input, Textarea, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import PropTypes from "prop-types";
import BigField from "@/components/ui/bigField";

const WiFiConnectivityIssuesForm = ({ resetSelection }) => {
    const handleCopyToClipboard = () => {
    const message = ` 
${document.getElementsByName('notes')[0]?.value}
Contact Name:
Contact Number:
Access Hours:
Problem/Request Description:
TRF Policy Approval:
CPE accessible?
Customer description of the issue? What is the actual expected service speed?
What is testing device and capability (Single or MIMO)?
What is signal strength and PHYS rate?
What are the speed test results? Testing to ACD server?
All devices impacted?
If signal level issue tried 2.4GHZ?
If signal issue does proximity to radio change anything?
If CALIX reveiewed the alarms?
If CALIX reveiewed WAN link status?
If CALIX checked for AP extender and connected to closest one?
If CALIX checked for interfeence levels?
Customer is aware of the WIFI capabilities at play?
Does the graphing indicate saturation?
What is the negotiated speed/duplex on the router/modem's LAN port(s)?
Is packet loss to a specific destination or all hosts?
Customer Equipment Bypassed(Assuming no impairment to ACD CPE)?
    `;

    navigator.clipboard.writeText(message)
        .then(() => alert("Message copied to clipboard!"))
        .catch((err) => console.error("Failed to copy text: ", err));
    };
    return (
        <AbsoluteCenter minWidth={'85%'}>
            <Stack width={'100%'}>
            <Box width='100%' borderWidth="1px" padding="1.2rem" maxH="80vh" overflowY="auto">
              <Fieldset.Root size="sm" invalid>
                <Fieldset.Content>
                  <Field label="Notes" orientation="vertical">
                    <Textarea name="notes" />
                  </Field>
                  <Field label="Contact Name:" orientation="vertical">
                    <Input name="name" />
                  </Field>
                  <Field label="Contact Number:" orientation="vertical">
                    <Input name="number" />
                  </Field>
                  <Field label="Access Hours" orientation="vertical">
                    <Input name="Access Hours" />
                  </Field>
                  <Field label="Problem/Request Description" orientation="vertical">
                    <Textarea name="Problem" />
                  </Field>
                  <Checkbox name="TRF Policy Approval">TRF Policy Approval</Checkbox>
                  <Checkbox name="CPE accessible?">CPE accessible?</Checkbox>
                  <BigField label='Customer description of the issue? What is the actual expected service speed?' name='1'/>
                  <BigField label='What is testing device and capability (Single or MIMO)?' name='2'/>
                  {/* Stopped Here, Currently in progress, Finish over weekend, Research How to refactor quickly*/}
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