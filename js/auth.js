document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to login');
      }
  
      const data = await response.json();
      alert('Inicio de sesión exitoso');
      
      // Ejemplo: Actualizar el DOM con el mensaje de bienvenida
      document.getElementById('welcomeMessage').innerText = `Bienvenido, ${data.name}`;
    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    }
  });
