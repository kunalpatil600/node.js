const auth = (req, res, next) => {
  const { role, pass } = req.headers;
  console.log("Role from headers:", role);  // Debug log
  console.log("Pass from headers:", pass);  // Debug log
  
  if (role === "admin" && pass === "saveEarth") {
      next();
  } else {
      res.status(403).json({ message: "Not Authorized" });
  }
};
module.exports=auth