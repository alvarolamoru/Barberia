const router= require('express').Router();


router.use('/barbero',require('./api/Barberos'));
router.use('/cortes',require('./api/cortes'));
router.use('/productos',require('./api/productos'));
router.use('/reservas',require('./api/reservas'));
// router.use('/Barberos',require('./api/Barberos'));


module.exports = router;

