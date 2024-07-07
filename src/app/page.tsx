"use client";  // This marks the file as a client component

import { useEffect, useState } from 'react';

const ApiDemo = () => {
  const [helloMessage, setHelloMessage] = useState<string>('');
  const [greetMessage, setGreetMessage] = useState<string>('');

  useEffect(() => {
    // Fetch message from /api/hello
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setHelloMessage(data.message))
      .catch(error => console.error('Error fetching /api/hello:', error));

    // Fetch message from /api/greet?name=Next.js
    fetch('/api/greet?name=Next.js')
      .then(response => response.json())
      .then(data => setGreetMessage(data.message))
      .catch(error => console.error('Error fetching /api/greet:', error));
  }, []);

  return (
    <div>
      <h1>API Demo</h1>
      <p>Message from /api/hello: {helloMessage}</p>
      <p>Message from /api/greet: {greetMessage}</p>
    </div>
  );
};

export default ApiDemo;
