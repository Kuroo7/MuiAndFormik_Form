// import react from "react";
import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SelectWrapper = ({
    name,
    options,
    ...otherProps
}) => {
    const { setFieldValue } = useFormikContext()
    const [field, meta] = useField(name)
    const handleChange = (e) => {
        const { value } = e.target
        setFieldValue(name, value)
    }
    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        variant: "outlined",
        fullWidth: true,
        onChange: handleChange,
    }
    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }
    // if (meta.touched && meta.error) {
    //     return (
    //         <div>{meta.error}</div>
    //     )
    // }
    return (
        <TextField {...configSelect}>
            {Object.keys(options).map((item, pos) => {
                return (
                    <MenuItem key={pos} value={item} >
                        {options[item]}
                    </MenuItem>
                )
            })}
        </TextField>
    )
}
export default SelectWrapper