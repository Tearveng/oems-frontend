import { InputController } from '@/components/controller/InputController';
import { Button, Stack, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { useForm } from 'react-hook-form';

type IFormRegister = {
  userId: string;
  password: string;
  conPassword: string
};

const Register = () => {
  const form = useForm<IFormRegister>({
    defaultValues: {
      userId: '',
      password: '',
      conPassword: ''
    },
  });
  const {
    control,
    clearErrors,
    handleSubmit,
    formState: { errors },
    watch
  } = form;

  const watchPass = watch('password')

  const onSubmitForm = (data: any) => {
    console.log(data);
  };


  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Stack minWidth="350px" alignItems="center" gap={2}>
          <Typography variant="h3">Register</Typography>
          {/* userId field */}
          <Stack width="100%">
            <Typography variant='Body2'>UserId:</Typography>
            <InputController
              type='text'
              control={control}
              name="userId"
              textFieldProp={{ placeholder: 'userId' }}
              errors={errors.userId}
              rules={{
                required: {
                  value: true,
                  message: 'userId is required.',
                },
              }}
            />
          </Stack>
          {/* password field */}
          <Stack width="100%" >
            <Typography variant='Body2'>Password:</Typography>
            <InputController
              type='password'
              control={control}
              name="password"
              textFieldProp={{ placeholder: 'password', }}
              errors={errors.password}
              rules={{
                required: {
                  value: true,
                  message: 'password is required.',
                },
              }}
            />
          </Stack>

          {/* confirm-password field */}
          <Stack width="100%">
            <Typography variant='Body2'>Confirm password:</Typography>
            <InputController
              type='password'
              control={control}
              name="conPassword"
              textFieldProp={{ placeholder: 'Confirm password' }}
              errors={errors.conPassword}
              rules={{
                required: {
                  value: true,
                  message: 'confirm password is required.',
                },
                validate: (value: string) => {
                  if (value !== watchPass) {
                    return 'password not matched.'
                  }
                }
              }}
            />
          </Stack>
          <Stack width="100%" direction='row' >
            <Stack direction='row' alignItems='center' gap={0.5}>
              <Typography sx={{ fontSize: 12, opacity: '50%' }}>Already have account?</Typography>
              <Link href="/login" underline="none" sx={{ fontSize: 12 }}>
                Login
              </Link>
            </Stack>
          </Stack>
          <Button variant="contained" type='submit' sx={{ fontWeight: 600, textTransform: 'none', width: '100%' }}>
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default Register;
