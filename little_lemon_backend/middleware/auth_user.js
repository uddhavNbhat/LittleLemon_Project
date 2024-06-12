const jwt = require('jsonwebtoken');
const userData = require('../user_schema');

module.exports = async function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, "littul_lemun");
    const user = await userData.findById(decoded.id);
    if (!user) {
      return res.status(401).json("User Not Found");
    }
    const validSession = user.sessions.find(session => session.token === token && session.expiresAt > new Date());
    if (!validSession) {
      return res.status(401).json({ msg: 'Session is not valid or has expired' });
    }
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
