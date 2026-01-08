//import necessary modules
const axios = require('axios');
// const cookieParser = require('cookie-parser');

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.redirect('http://localhost:3000/login');
  }
  
  try {
    // Verify token with your backend
    const response = await axios.post('http://localhost:8000/verify-token', 
      {}, 
      { 
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true 
      }
    );
    
    if (response.data.success) {
      req.user = response.data.user;
      next();
    } else {
      res.redirect('http://localhost:3000/login');
    }
  } catch (error) {
    res.redirect('http://localhost:3000/login');
  }
};