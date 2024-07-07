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
      const token = data.token;
      const decodedToken = parseJwt(token); // Función para decodificar el token JWT
      
      alert('Inicio de sesión exitoso');
      
      // Actualizar el DOM con el mensaje de bienvenida
      document.getElementById('welcomeMessage').innerText = `Bienvenido, ${decodedToken.email}`;
      
      // Opcional: almacenar el token en localStorage para usarlo en otras partes de la aplicación
      localStorage.setItem('token', token);
      
      // Ocultar el formulario de inicio de sesión
      document.querySelector('.user-form').style.display = 'none';
      
    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    }
  });

// Función para decodificar el token JWT (simplemente como ejemplo, puedes usar bibliotecas como jwt-decode)
function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}
