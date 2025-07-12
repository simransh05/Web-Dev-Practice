let teach= [
   {
     name: 'Kartik',
     subject: 'Web Development',
     company: {
       name: 'Coding Blocks',
       country: 'India',
       state: 'Delhi',
       address: '47 Nishant Kunj, Pitampura, Delhi-110034'
     }
   },
   {
     name: 'Monu',
     subject: 'Java',
     company: {
       name: 'Codeskiller',
       country: 'US',
       address: '47 US Kunj, Pitampura, US-110034'
     }
   },
   {
     name: 'Mosina',
     subject: 'C++',
     company: {
       name: 'Hacker Blocks',
       country: 'Australia',
       address: '47 Australia Kunj, Pitampura, Australia-110034'
     }
   },
   {
     name: 'Varun',
     subject: 'Data Science',
     company: {
       name: 'Online Coding Blocks',
       country: 'Canada',
       address: '47 Canada Kunj, Pitampura, Canada-110034'
     }
   }
 ];

  db.teachers.find({name:'Monu'}).toArray()[0].company;

  let teachers = [
  { name: 'Kartik', subject: 'Web Development' },
  { name: 'Monu', subject: 'Java' },
  { name: 'Mosina', subject: 'C++' },
  { name: 'Varun', subject: 'Data Science' }
];

let products = [
  { name: 'MacBook', features: ['Retina Display', 'i-6'], price: 20 },
  { name: 'HP', features: ['4K Screen', 'i-7'], price: 30 },
  { name: 'Dell', features: ['SSD', 'i-9'], price: 100 },
  { name: 'Lenovo', features: ['Antiglare', 'i-7'], price: 50 }
];
