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

// Tie class to window object
tieToWindow('Person', class_def);
var Alice = new Person('Alice', 33);
Alice.getAge(); // 33
Alice instanceof Person; // true
// but
myPerson instanceof Person; // false
meta('Comment AuthId CommentText');
var comment = new Comment(10, 'Some text');
comment.getCommentText();
```
