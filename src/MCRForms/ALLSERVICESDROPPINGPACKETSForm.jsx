import { Fieldset, Input, Textarea, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import PropTypes from "prop-types";

const ALLSERVICESDROPPINGPACKETSForm = ({ resetSelection }) => {
  const handleCopyToClipboard = () => {
    const message = `
Notes: 
${document.getElementsByName('notes')[0]?.value}

Contact Name: ${document.getElementsByName('name')[0]?.value}
Contact Number: ${document.getElementsByName('number')[0]?.value}
Access Hours: ${document.getElementsByName('Access Hours')[0]?.value}
Problem/Request Description: ${document.getElementsByName('Problem')[0]?.value}
TRF Policy Approval: ${document.getElementsByName('TRF Policy Approval')[0]?.checked ? 'Yes' : 'No'}
CPE accessible?: ${document.getElementsByName('CPE accessible?')[0]?.checked ? 'Yes' : 'No'}
What is the actual expected service speed?: ${document.getElementsByName('What is the actual expected service speed?')[0]?.value}
Does the graphing indicate saturation?: ${document.getElementsByName('Does the graphing indicate saturation?')[0]?.checked ? 'Yes' : 'No'}
What is the negotiated speed/duplex on the router/modem's LAN port(s)?: ${document.getElementsByName("What is the negotiated speed/duplex on the router/modem's LAN port(s)?")[0]?.value}
Dropping packets to the CPE (Router/Switch/Modem) from closest core connection?: ${document.getElementsByName('Dropping packets to the CPE (Router/Switch/Modem) from closest core connection?')[0]?.checked ? 'Yes' : 'No'}
Dropping packets to the CPE (Router/Switch/Modem) from Metroix Data Center?: ${document.getElementsByName('Dropping packets to the CPE (Router/Switch/Modem) from Metroix Data Center?')[0]?.checked ? 'Yes' : 'No'}
Is packet loss to a specific destination or all hosts?: ${document.getElementsByName('Is packet loss to a specific destination or all hosts?')[0]?.value}
Are they connected via wireless or wired?: ${document.getElementsByName('Are they connected via wireless or wired?')[0]?.value}
Are pings clean to the ACD modem/router/switch?: ${document.getElementsByName('Are pings clean to the ACD modem/router/switch?')[0]?.checked ? 'Yes' : 'No'}
Can the customer device be pinged? (If Yes, are the results clean?): ${document.getElementsByName('Can the customer device be pinged? (If Yes, are the results clean?)')[0]?.checked ? 'Yes' : 'No'}
Customer Equipment Bypassed (Assuming no impairment to ACD CPE)?: ${document.getElementsByName('Customer Equipment Bypassed (Assuming no impairment to ACD CPE)?')[0]?.checked ? 'Yes' : 'No'}
    `;

    navigator.clipboard.writeText(message)
      .then(() => alert("Message copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <AbsoluteCenter>
      <Stack>
        <Box maxW="xl" borderWidth="1px" padding="1.2rem">
          <Fieldset.Root size="lg" invalid>
            <Fieldset.Legend>MCR Details</Fieldset.Legend>
            <Fieldset.Content>
              <Field label="Notes" orientation="horizontal">
                <Textarea name="notes" />
              </Field>
              <Field label="Contact Name:" orientation="horizontal">
                <Input name="name" />
              </Field>
              <Field label="Contact Number:" orientation="horizontal">
                <Input name="number" />
              </Field>
              <Field label="Access Hours" orientation="horizontal">
                <Input name="Access Hours" />
              </Field>
              <Field label="Problem/Request Description" orientation="horizontal">
                <Textarea name="Problem" />
              </Field>
              <Checkbox name="TRF Policy Approval">TRF Policy Approval</Checkbox>
              <Checkbox name="CPE accessible?">CPE accessible?</Checkbox>
              <Field label="What is the actual expected service speed?" orientation="horizontal">
                <Input name="What is the actual expected service speed?" />
              </Field>
              <Checkbox name="Does the graphing indicate saturation?">
                Does the graphing indicate saturation?
              </Checkbox>
              <Field
                label="What is the negotiated speed/duplex on the router/modem's LAN port(s)?"
                orientation="horizontal"
              >
                <Input name="What is the negotiated speed/duplex on the router/modem's LAN port(s)?" />
              </Field>
              <Checkbox name="Dropping packets to the CPE (Router/Switch/Modem) from closest core connection?">
                Dropping packets to the CPE (Router/Switch/Modem) from closest core connection?
              </Checkbox>
              <Checkbox name="Dropping packets to the CPE (Router/Switch/Modem) from Metroix Data Center?">
                Dropping packets to the CPE (Router/Switch/Modem) from Metroix Data Center?
              </Checkbox>
              <Field label="Is packet loss to a specific destination or all hosts?" orientation="horizontal">
                <Textarea name="Is packet loss to a specific destination or all hosts?" />
              </Field>
              <Field label="Are they connected via wireless or wired?" orientation="horizontal">
                <Input name="Are they connected via wireless or wired?" />
              </Field>
              <Checkbox name="Are pings clean to the ACD modem/router/switch?">
                Are pings clean to the ACD modem/router/switch?
              </Checkbox>
              <Checkbox name="Can the customer device be pinged? (If Yes, are the results clean?)">
                Can the customer device be pinged? (If Yes, are the results clean?)
              </Checkbox>
              <Checkbox name="Customer Equipment Bypassed (Assuming no impairment to ACD CPE)?">
                Customer Equipment Bypassed (Assuming no impairment to ACD CPE)?
              </Checkbox>
            </Fieldset.Content>
          </Fieldset.Root>
        </Box>
        <Button onClick={resetSelection}>Back to Selection</Button>
        <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
      </Stack>
    </AbsoluteCenter>
  );
};

ALLSERVICESDROPPINGPACKETSForm.propTypes = {
  resetSelection: PropTypes.func.isRequired,
};

export default ALLSERVICESDROPPINGPACKETSForm;