import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";




export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }

    try {
      setLoading(true)
      setErrorMessage(null)
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if (res.ok) {
        navigate('/sign-in')
      }
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }
  };

  return (
    <div className='grid grid-cols-1 justify-items-center  p-8 mt-16'>
      <h1 className='mb-16 text-3xl'>Sign Up</h1>
      <form className="flex max-w-md w-full flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput id="email" type="email" placeholder="name@flowbite.com" required onChange={handleChange}
            shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" type="password" required onChange={handleChange}
            shadow />
        </div>

        {/* <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
              terms and conditions
            </Link>
          </Label>
        </div> */}
        <Button type="submit" gradientDuoTone={"purpleToBlue"} disabled={loading} >
          {
            loading ?
              (
                <>
                  <Spinner size={'sm'} />
                  <span className="pl-3">Loading...</span>
                </>
              ) : "Sign Up"
          }

        </Button>
        <div>
          <span className="mr-3">Did you have a account?</span>
          <Link
            to={"/sign-in"}
            className="text-blue-600 font-semibold text-sm"
          >

            Sign In
          </Link>
          {errorMessage &&
            <Alert className="mt-5" color={'failure'}>
              {errorMessage}
            </Alert>
          }
        </div>
      </form>
    </div>
  )
}
