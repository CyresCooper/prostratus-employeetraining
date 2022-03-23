const router = require('express').Router();

// We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const dishes = [
  {
    employee_name: 'Raymond Cooper',
    role: 'Executive Senior Level',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  
]

router.get('/', async (req, res) => {
  res.render('all',{dishes});
});


router.get('/dish/:num', async (req, res) => {
  return res.render('dish', dishes[req.params.num - 1]);
});

module.exports = router;
