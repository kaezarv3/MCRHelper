import {Fieldset, Input, Textarea, Box, AbsoluteCenter, Button, Stack} from "@chakra-ui/react"; 
import PropTypes from 'prop-types'; 
import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"
// import { List } from "@chakra-ui/react"

const FiberSlowSpeeds = ({resetSelection}) => {
    const handleCopyToClipboard = () => {
        const message = `
${document.getElementsByName('notes')[0]?.value}

Contact Name: ${document.getElementsByName('name')[0].value}
Contact Number: ${document.getElementsByName('number')[0].value}
Access Hours: ${document.getElementsByName('Access Hours')[0].value}
Problem/Request Description: ${document.getElementsByName('Problem')[0].value}
TRF Policy Approval: ${document.getElementsByName('TRF Policy Approval')[0]?.checked ? 'Yes' : 'No'}
Are interface errors actively building?: ${document.getElementsByName('Are interface errors actively building?')[0]?.checked ? 'Yes' : 'No'}
Does the graphing indicate saturation?: ${document.getElementsByName('Does the graphing indicate saturation?')[0]?.checked ? 'Yes' : 'No'}
What is the negotiated speed/duplex on the router/modem's LAN port(s)?: ${document.getElementsByName('Negotiated speed/duplex')[0]?.value}
Were the speed tests to an ACD server speed test server?: ${document.getElementsByName('Speed test ACD server')[0]?.checked ? 'Yes' : 'No'}
If speed test results are fine, what destinations experience the slow speeds?: ${document.getElementsByName('Slow destinations')[0]?.value}
Verified customer CPU is not maxing out during test?: ${document.getElementsByName('CPU check')[0]?.checked ? 'Yes' : 'No'}
Are they connected via wireless or wired?: ${document.getElementsByName('Connection type')[0]?.value}
Are pings clean to the ACD modem/router/switch?: ${document.getElementsByName('Ping to ACD device')[0]?.checked ? 'Yes' : 'No'}
Can the customer device be pinged?: ${document.getElementsByName('Customer device ping')[0]?.checked ? 'Yes' : 'No'}
If the customer is not connected directly to the ACD modem/switch/router, perform a bypass test. Did results improve to expected speeds when bypassed?: ${document.getElementsByName('Bypass test')[0]?.checked ? 'Yes' : 'No'}
Try Iperf (if supported by the terminating ACD device)?: ${document.getElementsByName('Iperf test')[0]?.checked ? 'Yes' : 'No'}
        `;

        navigator.clipboard.writeText(message)
            .then(() => alert('Message copied to clipboard!'))
            .catch(err => console.error('Failed to copy text: ', err));
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
                                <Input name="Access Hours"/>
                            </Field>
                            <Field label="Problem/Request Description" orientation="vertical">
                                <Textarea name="Problem"/>
                            </Field>
                            <Checkbox>TRF Policy Approval</Checkbox>
                            <Checkbox>Are interface errors actively building?</Checkbox>
                            <Checkbox>Does the graphing indicate saturation?</Checkbox>
                            <Field label="Negotiated speed/duplex" orientation="vertical">
                                <Input name="Negotiated speed/duplex" />
                            </Field>
                            <Checkbox>Were the speed tests to an ACD server speed test server?</Checkbox>
                            <Field label="Slow destinations" orientation="vertical">
                                <Textarea name="Slow destinations"/>
                            </Field>
                            <Checkbox>Verified customer CPU is not maxing out during test?</Checkbox>
                            <Field label="Connection type" orientation="vertical">
                                <Input name="Connection type"/>
                            </Field>
                            <Checkbox>Are pings clean to the ACD modem/router/switch?</Checkbox>
                            <Checkbox>Can the customer device be pinged?</Checkbox>
                            <Checkbox>Perform a bypass test and evaluate results?</Checkbox>
                            <Checkbox>Try Iperf (if supported by the terminating ACD device)?</Checkbox>
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

FiberSlowSpeeds.propTypes = {
    resetSelection: PropTypes.func.isRequired,
};


export default FiberSlowSpeeds;
