module.exports = {
  checkRole
};

function checkRole(role) {
  return function(req, res, next) {
    if (role === req.decodedJwt.role) {
      next();
    } else {
      res.status(403).json({ message: `unauthorized access` });
    }
  };
}
