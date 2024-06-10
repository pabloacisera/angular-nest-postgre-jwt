"use client";
import React, { useState } from "react";
import { useUser } from "../../../../context/user.context";

export default function Register() {
  const { createUser } = useUser(); // Obtener la función createUser del contexto
  const [formData, setFormData] = useState({
    area: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await createUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        area: formData.area,
      });
      console.log(createUser);
      alert("Usuario creado exitosamente");
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="py-2">
            <select
              name="area"
              id="area"
              value={formData.area}
              onChange={handleChange}
            >
              <option value="">SELECCIONAR</option>
              <option value="clinica">CLINICA</option>
              <option value="analisis">ANALISIS</option>
            </select>
          </div>
          <div className="py-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="py-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="py-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="py-2">
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Registrar
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Ya tienes una cuenta?{" "}
            <a
              href="http://localhost:3000/auth/users/login"
              className="text-blue-600 hover:underline"
            >
              Logear
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
