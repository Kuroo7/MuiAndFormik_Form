// import react from "react";
import { MenuItem, FormControl, InputLabel, Select, OutlinedInput } from "@mui/material";
import { useField, useFormikContext } from "formik";

const names = [
    "Singing",
    "Dancing",
    "Watching Movies",
    "Playing Chess",
    "Coding",
];


const MultipleSelectWrapper = ({
    name,
    options,
    ...otherProps
}) => {
    const { setFieldValue } = useFormikContext()
    const [field, meta] = useField(name)


    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setFieldValue(name,
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const configSelect = {
        ...field,
        ...otherProps,
        multiple: true,
        variant: "outlined",
        fullWidth: true,
        onChange: handleChange,
    }

    const configFormControl = {}
    if (meta && meta.touched && meta.error) {
        configFormControl.error = true;
    }
    return (
        <FormControl {...configFormControl} sx={{ m: 1, width: 300 }}>
            <InputLabel  >Choose Your Hobbies</InputLabel>
            <Select {...configSelect}
                input={<OutlinedInput label="Name" />}
            >
                {names.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

    )
}
export default MultipleSelectWrapper