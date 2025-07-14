import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export function generateToken(user) {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

export async function comparePasswords(plain, hashed) {
  return bcrypt.compare(plain, hashed);
}
