const User = require('../models/User');

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (id === "65525ad141f230a5dd3d63f6" || id === "65525b2d41f230a5dd3d63fa") {
            return res.status(400).json({
                success: false,
                message: 'Admin cannot be deleted',
            });
        }
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: 'User not found',
            });
        }
        return res.status(200).json({
            status: 200,
            message: 'User deleted successfully',
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message,
        });
    }
};