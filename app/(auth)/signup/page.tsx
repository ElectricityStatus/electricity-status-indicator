"use client";

import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import Button from "@/app/components/Button";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

function PasswordInput(props: React.ComponentProps<"input">) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative w-full">
      <Input
        {...props}
        type={show ? "text" : "password"}
        placeholder="Password"
        className="pr-10"
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400"
        tabIndex={-1}
      >
        {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>
    </div>
  );
}

export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    state: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black lg:bg-[url('/worldImage_2.png')] text-white">
     
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-black p-8 rounded-lg flex flex-col gap-5"
      >
        <h1 className="text-white text-2xl font-bold text-center mb-4">Create Account</h1>
        <div>
          <label className="text-white block mb-1">First Name</label>
          <Input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            
          />
        </div>
        <div>
          <label className="text-white block mb-1">Last Name</label>
          <Input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <label className="text-white block mb-1">Username</label>
          <Input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label className="text-white block mb-1">Email Address</label>
          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>
        <div>
          <label className="text-white block mb-1">State of Residence</label>
          <Input
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State of Residence"
            required
          />
        </div>
        <div>
          <label className="text-white block mb-1">Password</label>
          <PasswordInput
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <div className="text-xs text-gray-400 mt-1">
            Password must include uppercase, lowercase, number, and special character
          </div>
        </div>
        <Button type="submit" variant="primary" fullWidth className="bg-[#34A853] hover:bg-[#34A853]/90 focus:ring-[#34A853]/50">
          Sign up
        </Button>
        <div className="text-[#34A853] text-center mt-2 text-sm">
          Already have an account?{' '}
          <Link href="/login" className="underline cursor-pointer">Log in</Link>
        </div>
      </form>
    </div>
  );
}