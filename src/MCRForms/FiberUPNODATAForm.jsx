import { Fieldset, Input, Textarea, Box, AbsoluteCenter, Button, Stack } from "@chakra-ui/react"; 
import { Field } from "@/components/ui/field";
import PropTypes from 'prop-types'; 
import CustomCheckbox from "@/components/ui/CustomCheckbox";

const FiberUPNODATAForm = ({ resetSelection }) => {
    const handleCopyToClipboard = () => {
        const message = `
${document.getElementsByName('notes')[0]?.value}

Contact Name: ${document.getElementsByName('1')[0].value}
Contact Number: ${document.getElementsByName('2')[0].value}
Access Hours: ${document.getElementsByName('3')[0].value}
Problem/Request Description: ${document.getElementsByName('4')[0].value}
TRF Policy Approval: ${document.getElementsByName('5')[0]?.checked ? 'Yes' : 'No'}
CPE accessible?: ${document.getElementsByName('6')[0]?.checked ? 'Yes' : 'No'}
Does the graphing indicate saturation?: ${document.getElementsByName('7')[0]?.checked ? 'Yes' : 'No'}
Negotiated speed/duplex on the router/modem's LAN port(s): ${document.getElementsByName('8')[0]?.value}
Is customer equipment pulling IP (ARP)?: ${document.getElementsByName('9')[0]?.checked ? 'Yes' : 'No'}
Connection type (wireless or wired): ${document.getElementsByName('10')[0]?.value}
Are pings clean to the ACD modem/router/switch?: ${document.getElementsByName('11')[0]?.checked ? 'Yes' : 'No'}
Can the customer device be pinged? (If Yes, are the results clean?): ${document.getElementsByName('12')[0]?.checked ? 'Yes' : 'No'}
Customer Equipment Bypassed?: ${document.getElementsByName('13')[0]?.checked ? 'Yes' : 'No'}
        `;

        navigator.clipboard.writeText(message)
            .then(() => alert('Message copied to clipboard!'))
            .catch(err => console.error('Failed to copy text: ', err));
    };

    return (
        <AbsoluteCenter minWidth={'85%'}>
        <Stack width={'100%'}>
          <Box width='100%' borderWidth="1px" padding="1.2rem" maxH="80vh" overflowY="auto">
                    <Fieldset.Root size="md" invalid>
                        <Fieldset.Content>
                            <Field label="Notes" orientation="vertical">
                                <Textarea name="notes" />
                            </Field>
                            <Field label="Contact Name:" orientation="vertical">
                                <Input name="1" />
                            </Field>
                            <Field label="Contact Number:" orientation="vertical">
                                <Input name="2" />
                            </Field>
                            <Field label="Access Hours" orientation="vertical">
                                <Input name="3" />
                            </Field>
                            <Field label="Problem/Request Description" orientation="vertical">
                                <Textarea name="4" />
                            </Field>
                            <CustomCheckbox name='5' text="TRF Policy Approval"></CustomCheckbox>
                            <CustomCheckbox name='6'text="CPE accessible?"></CustomCheckbox>
                            <CustomCheckbox name='7'text="Does the graphing indicate saturation?"></CustomCheckbox>
                            <Field label="Negotiated speed/duplex" orientation="vertical">
                                <Input name="8" />
                            </Field>
                            <CustomCheckbox name='9' text="Is customer equipment pulling IP (ARP)?"></CustomCheckbox>
                            <Field label="Connection type" orientation="vertical">
                                <Input name="10" />
                            </Field>
                            <CustomCheckbox name='11' text="Are pings clean to the ACD modem/router/switch?"></CustomCheckbox>
                            <CustomCheckbox name='12' text="Can the customer device be pinged? (If Yes, are the results clean?)"></CustomCheckbox>
                            <CustomCheckbox name='13' text="Customer Equipment Bypassed?"></CustomCheckbox>
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