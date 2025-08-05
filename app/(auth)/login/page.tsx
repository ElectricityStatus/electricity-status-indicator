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

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black lg:bg-[url('/worldImage_2.png')]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-black p-8 rounded-lg flex flex-col gap-6"
      >
        <h1 className="text-white text-2xl font-bold text-center mb-4">
          Login
        </h1>
        <div>
          <label className="text-white block mb-1">
            Username/Email Address
          </label>
          <Input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username/Email Address"
            className="mb-2"
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
        </div>
        <div className="text-[#34A853] text-sm text-center mb-2 cursor-pointer">
          <Link href="/forgot-password" className="underline">
            Forgot Password?
          </Link>
        </div>
        <Button
          type="submit"
          variant="primary"
          fullWidth
          className="bg-[#34A853] hover:bg-[#34A853]/90 focus:ring-[#34A853]/50"
        >
          Log in
        </Button>
        <div className="text-[#34A853] text-center mt-2 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline cursor-pointer">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
