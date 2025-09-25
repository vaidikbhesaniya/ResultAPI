const User = require('../models/User');

exports.login = async (req, res) => {
  try {
    const { username, password, selectedRole } = req.body;
    if (!username || !password || !selectedRole) {
      return res.status(400).json({ message: 'username, password, selectedRole required' });
    }
    const user = await User.findOne({ username, password });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    if (user.role !== selectedRole) {
      return res.status(403).json({ message: "Selected role doesn't match this account" });
    }
    return res.json({ userId: user._id, fullName: user.fullName, role: user.role });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
