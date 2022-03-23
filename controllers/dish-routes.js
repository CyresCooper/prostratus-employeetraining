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
  {
    employee_name: 'Michael Cornett',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Cody Curtis',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Tyler Davis',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Jordan Dillinger',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Richard Green',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Andrew Hartman',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Zach Hartman',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Byce Holland',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Christopher McFarland',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Brandon Mosser',
    role: 'Sales Worker',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Caleb Mounts',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Brian Olson',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Robby Roger',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Kevin Schleinitz',
    role: 'Executive Senior Level',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Craig Terrell',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Eric Vandereems',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Jacob Wright',
    role: 'Technician',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Paul Young',
    role: 'Sales Worker',
    completed_classes:'Quality Training Class 101, Quality Training Class 102, Quality Training Class 103, Quality Training Class 104, Quality Training Class 105, Safety Class 101, Fork Life Safety Training, Equipment Press XR42, Ethics Compliance Training, Safety Class OHSA',
    incomplete:'SOP 12430 Rev1',
    year_class:'Ethics Compliance Training 10/25/21'
    
    
  },
  {
    employee_name: 'Doris Ziethlow',
    role: 'Administrative Support',
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
