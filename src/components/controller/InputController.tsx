import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';
import React from 'react';
import { Control, Controller, FieldError, FieldPath, RegisterOptions } from 'react-hook-form';

type IInputController<T extends Record<string, any>> = {
    control: Control<T, any>;
    name: FieldPath<T>;
    textFieldProp?: OutlinedInputProps;
    rules?:
    | Omit<RegisterOptions<T, FieldPath<T>>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>
    | undefined;
    errors?: FieldError;
    type: 'password' | 'text';
};

export const InputController = <T extends Record<string, any>>(props: IInputController<T>) => {
    const { control, name, textFieldProp, rules, errors, type } = props;

    const [showPassword, setShowPassword] = React.useState(false);

    const getIcon = () => {
        let result = <></>;
        if (type === 'password') {
            result = (
                <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                        {showPassword ? <Visibility fontSize='small' /> : <VisibilityOff fontSize='small' />}
                    </IconButton>
                </InputAdornment>
            );
        }

        return result;
    };

    return (
        <Stack>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { name, value, onChange } }) => (
                    <OutlinedInput
                        {...textFieldProp}
                        name={name}
                        onChange={onChange}
                        value={value}
                        size="small"
                        type={showPassword ? 'text' : type}
                        endAdornment={getIcon()}
                    />
                )}
            ></Controller>
            {errors && (
                <Typography color="red" fontSize={13}>
                    {errors.message}
                </Typography>
            )}
        </Stack>
    );
};
