"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(null);
  const {
    handleSubmit,
    reset,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleCredentialsLogin = async ({ email, password }) => {
    setLoading("credentials");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res.ok) {
      toast.error("Credenciales inválidas");
      setLoading(null);
    } else {
      router.push("/");
    }
  };

  const handleSocialLogin = async (provider) => {
    setLoading(provider);

    await signIn(provider, {
      callbackUrl: "/",
    });
  };

  return (
    <Card className="w-full max-w-[575px] border-none shadow-none">
      <CardHeader>
        <CardTitle>Iniciar Sesión</CardTitle>
        <CardDescription className="text-muted-foreground">
          Accede a tu cuenta de Tech Blog
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2">
          <Button
            color="#F8F"
            variant="outline"
            className="w-full"
            onClick={() => handleSocialLogin("github")}
            loading={loading === "github"}
            disabled={loading != null}
          >
            {!loading && <Icons.gitHub className="mr-2 h-4 w-4" />}
            Github
          </Button>
          <Button
            color="#F8F"
            variant="outline"
            className="w-full"
            onClick={() => handleSocialLogin("google")}
            loading={loading === "google"}
            disabled={loading != null}
          >
            {loading !== "google" && <Icons.google className="mr-2 h-4 w-4" />}
            Google
          </Button>
        </div>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              O CONTINUA CON
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(handleCredentialsLogin)}
          className="w-full space-y-4"
        >
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Email</Label>
            <Input
              disabled={loading != null}
              id="name"
              placeholder="Tu correo electrónico"
              className={errors.email && "border-red-500"}
              {...register("email", {
                required: "Este campo es requerido",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Email inválido",
                },
              })}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              }
            />
            <Label className="text-red-400 font-light text-xs">
              {errors.email && errors.email.message}
            </Label>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Contraseña</Label>
            <Input
              disabled={loading != null}
              id="name"
              type="password"
              placeholder="Contraseña segura"
              className={errors.password && "border-red-500"}
              {...register("password", {
                required: "Indica tu contraseña",
              })}
            />
            <Label className="text-red-500 font-light text-xs">
              {errors.password && errors.password.message}
            </Label>
          </div>
          <Button
            type="submit"
            className="w-full"
            loading={loading === "credentials"}
            disabled={loading != null}
          >
            Acceder
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center pb-0">
        <h1 className="text-center text-neutral-400">
          ¿No estás registrado?{" "}
          <Link href="/register" className="hover:text-primary">
            Crea una cuenta
          </Link>
        </h1>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
