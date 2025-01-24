import { Input } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import PropTypes from "prop-types";

const SmallField = ({ label, name }) => {
  return (
    <Field label={label} orientation="vertical">
      <Input name={name} />
    </Field>
  );
};

SmallField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SmallField;