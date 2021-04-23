import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const FormInput = ({ name, label }) => {
    const { control } = useFormContext()

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                render={({ field }) => < TextField {...field} label={label} required />}
                name={name}
                control={control}
                fullWidth
                required={true}
                defaultValue=''
            />
        </Grid>
    )
}

export default FormInput
