import { Checkbox } from "@/components/ui/checkbox"
import PropTypes from "prop-types";

const CustomCheckbox = ({ text, name }) => {
    return <Checkbox name={name}>{text}</Checkbox>;
};

CustomCheckbox.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default CustomCheckbox; 


<ul>
    <li>SDFSD</li>
        <ul>
            <li></li>
            <li></li>
            <li></li>            
        </ul>
    <li></li>
    <li></li>
</ul>