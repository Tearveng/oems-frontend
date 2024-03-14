import { ILoginBody, useLoginMutation } from '@/features/user/userApiSlice';

export const useLogin = () => {
  const [login, rest] = useLoginMutation();

  const handleLogin = async (data: ILoginBody) => {
    try {
     return await login(data).unwrap();
    } catch (error) {
      console.log(error)
    }
  };

  return { handleLogin, rest };
};
