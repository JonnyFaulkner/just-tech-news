const router = require('express').Router();
const { User, Post } = require('../models');
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

router.use('/', homeRoutes);

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;