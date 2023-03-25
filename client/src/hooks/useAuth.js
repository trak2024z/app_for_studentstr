import { apiSlice } from "api/apiSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useToast } from "hooks/useToast";
import {
  useSignInMutation,
  useSignUpMutation,
  useLogOutMutation,
} from "reducers/authApiSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const toastHook = useToast();
  const [signIn] = useSignInMutation();
  const [signUp] = useSignUpMutation();
  const [logOut] = useLogOutMutation();

  const handleSiginIn = async (formData) => {
    try {
      console.log(formData);
      const data = await signIn(formData);
      if ("error" in data)
        if ("status" in data.error) throw new Error(String(data.error.status));
    } catch (e) {
      toast.error("Login Failed:\n Your username or password is incorrect");
      console.log(e);
    }
  };

  const handleSignUp = async (formData) => {
    console.log(formData);
    return await toastHook.handleDisplayBanner(
      signUp(formData),
      `Creating new user ${formData.username}`,
      `Created new user ${formData.username}!\n You can login`,
      `Can't create user. \n Probability user is exist.\n Password must contain at least 8 characters`
    );
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      dispatch(apiSlice.util.resetApiState());
    } catch (e) {
      console.log(e);
    }
  };

  return {
    handleSignUp,
    handleSiginIn,
    handleLogOut,
  };
};