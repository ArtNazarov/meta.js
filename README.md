```
var class_def = get_class('Person', ['name', 'age']); // get class declaration
var myPerson = eval(class_def + `; new Person('test', 10);`); // get instance
myPerson.getAge(); // 10;
myPerson.getName(); // 'test';
myPerson.setAge(100);
myPerson.getAge(100); // 100
// Using prototypes
var OtherDef = myPerson.__proto__.constructor;
var OtherPerson = new OtherDef('Liza', 20);
OtherPerson.getName(); // 'Liza'
OtherPerson instanceof OtherDef; // true
OtherPerson instanceof Person; // reference error
```
