import { useState } from "react";
import axios from "axios";
export default function Register() {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });

  const registerAccount = async () => {
    const responseRegister = await axios.post("http://localhost:3000/auth/register", {
        name: registerForm.name,
        lastname: registerForm.surname,
        username: registerForm.username,
        email: registerForm.email,
        password: registerForm.password,
    })

    console.log(responseRegister)
  }

  return (
    <>
      <div className="flex flex-col gap-5 p-5">
        <h1 className="text-xl">Kayıt Ol</h1>
        <input
          type="text"
          onChange={(e) => {
            setRegisterForm({
              ...registerForm,
              name: e.target.value,
            });
          }}
          value={registerForm.name}
          placeholder="Adınız"
          className="border-2 p-2 rounded-lg"
        />
        <input
          type="text"
          value={registerForm.surname}
          onChange={(e) => {
            setRegisterForm({
              ...registerForm,
              surname: e.target.value,
            });
          }}
          placeholder="Soyadınız"
          className="border-2 p-2 rounded-lg"
        />
        <input
          type="text"
          value={registerForm.username}
          onChange={(e) => {
            setRegisterForm({
              ...registerForm,
              username: e.target.value,
            });
          }}
          placeholder="Kullanıcı Adınız"
          className="border-2 p-2 rounded-lg"
        />
        <input
          type="text"
          value={registerForm.email}
          onChange={(e) => {
            setRegisterForm({
              ...registerForm,
              email: e.target.value,
            });
          }}
          placeholder="E-posta"
          className="border-2 p-2 rounded-lg"
        />
        <input
          type="text"
          value={registerForm.password}
          onChange={(e) => {
            setRegisterForm({
              ...registerForm,
              password: e.target.value,
            });
          }}
          placeholder="Şifre"
          className="border-2 p-2 rounded-lg"
        />
        <button className="bg-blue-500 px-2 py-5 rounded-full" 
        onClick={registerAccount}
        >Kayıt Ol</button>
      </div>
    </>
  );
}
