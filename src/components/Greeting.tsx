import React from "react";

interface GreetingProps {
  name: string;
  message?: string;
}


export function Greeting({ name, message }: GreetingProps) {
  return (
    <div className="p-4 bg-blue-100 text-blue-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">Hello, {name}!</h1>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}