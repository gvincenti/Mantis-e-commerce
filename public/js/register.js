// public/js/register.js

document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to register');
      }
  
      const data = await response.json();
      alert('Registro exitoso, ahora puedes iniciar sesión');
      // Redirigir o actualizar la interfaz de usuario según sea necesario
    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    }
  });
  