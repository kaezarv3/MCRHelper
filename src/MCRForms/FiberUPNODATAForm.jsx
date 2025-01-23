import { Fieldset, Input, Textarea, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react"; 
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import PropTypes from 'prop-types'; 

const FiberUPNODATAForm = ({ resetSelection }) => {
    const handleCopyToClipboard = () => {
        const message = `
Notes: 
${document.getElementsByName('notes')[0]?.value}

Contact Name: ${document.getElementsByName('name')[0].value}
Contact Number: ${document.getElementsByName('number')[0].value}
Access Hours: ${document.getElementsByName('Access Hours')[0].value}
Problem/Request Description: ${document.getElementsByName('Problem')[0].value}
TRF Policy Approval: ${document.getElementsByName('TRF Policy Approval')[0]?.checked ? 'Yes' : 'No'}
CPE accessible?: ${document.getElementsByName('CPE accessible?')[0]?.checked ? 'Yes' : 'No'}
Does the graphing indicate saturation?: ${document.getElementsByName('Does the graphing indicate saturation?')[0]?.checked ? 'Yes' : 'No'}
Negotiated speed/duplex on the router/modem's LAN port(s): ${document.getElementsByName('Negotiated speed/duplex')[0]?.value}
Is customer equipment pulling IP (ARP)?: ${document.getElementsByName('Pulling IP ARP')[0]?.checked ? 'Yes' : 'No'}
Connection type (wireless or wired): ${document.getElementsByName('Connection type')[0]?.value}
Are pings clean to the ACD modem/router/switch?: ${document.getElementsByName('Ping to ACD device')[0]?.checked ? 'Yes' : 'No'}
Can the customer device be pinged? (If Yes, are the results clean?): ${document.getElementsByName('Customer device ping')[0]?.checked ? 'Yes' : 'No'}
Customer Equipment Bypassed?: ${document.getElementsByName('Bypassed equipment')[0]?.checked ? 'Yes' : 'No'}
        `;

        navigator.clipboard.writeText(message)
            .then(() => alert('Message copied to clipboard!'))
            .catch(err => console.error('Failed to copy text: ', err));
    };

    return (
        <AbsoluteCenter>
            <Stack>
                <Box maxW="xl" borderWidth="1px" padding='1.2rem'>
                    <Fieldset.Root size="lg" invalid>
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
                            <Checkbox>TRF Policy Approval</Checkbox>
                            <Checkbox>CPE accessible?</Checkbox>
                            <Checkbox>Does the graphing indicate saturation?</Checkbox>
                            <Field label="Negotiated speed/duplex" orientation="horizontal">
                                <Input name="Negotiated speed/duplex" />
                            </Field>
                            <Checkbox>Is customer equipment pulling IP (ARP)?</Checkbox>
                            <Field label="Connection type" orientation="horizontal">
                                <Input name="Connection type" />
                            </Field>
                            <Checkbox>Are pings clean to the ACD modem/router/switch?</Checkbox>
                            <Checkbox>Can the customer device be pinged? (If Yes, are the results clean?)</Checkbox>
                            <Checkbox>Customer Equipment Bypassed?</Checkbox>
                        </Fieldset.Content>
                    </Fieldset.Root>
                </Box>
                <Button onClick={resetSelection}>
                    Back to Selection
                </Button>
                <Button onClick={handleCopyToClipboard}>
                    Copy to Clipboard
                </Button>
            </Stack>
        </AbsoluteCenter>
    );
};

FiberUPNODATAForm.propTypes = {
    resetSelection: PropTypes.func.isRequired,
};

export default FiberUPNODATAForm;