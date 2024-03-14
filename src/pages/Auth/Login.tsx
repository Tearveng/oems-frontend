import { InputController } from '@/components/controller/InputController';
import { useLogin } from '@/hooks/useLogin';
import { Button, Stack, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type IFormLogin = {
  userId: string;
  password: string;
};

const Login = () => {
  const form = useForm<IFormLogin>({
    defaultValues: {
      userId: '',
      password: '',
    },
  });
  const {
    control,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = form;

  const router = useNavigate();
  const [errMsg, setErrMsg] = React.useState<string | null>(null);
  const { handleLogin } = useLogin();

  const onSubmitForm = async (data: IFormLogin) => {
    setErrMsg(null)
    const res = await handleLogin(data);
    if (res) {
      const { responseCode, responseMessage } = res
      if (!responseCode) {
        setErrMsg(responseMessage)
        localStorage.setItem('token', 'abcd');
        router('/dashboard')
      } else {
        setErrMsg(responseMessage)
      }
    }
  };

  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Stack minWidth="350px" alignItems="center" gap={2}>
          <Typography variant="h3">Login</Typography>
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
          <Stack width="100%">
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
            <Typography variant='Body2' color='red'>{errMsg}</Typography>
          </Stack>

          <Stack width="100%" direction='row' justifyContent='space-between'>
            <Link href="#" underline="none" sx={{ fontSize: 12 }}>
              Forgot your password?
            </Link>

            <Stack direction='row' alignItems='center' gap={0.5}>
              <Typography sx={{ fontSize: 12, opacity: '50%' }}>No account? </Typography>
              <Link href="/register" underline="none" sx={{ fontSize: 12 }}>
                Sign up
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

export default Login;
