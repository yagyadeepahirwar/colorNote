let arr=[];
class Note
{
    static id=0;
    constructor(title,data,date,time)
    {
        this.title= title;
        this.data= data;
        this.date= date;
        this.time= time;
    }
    save(obj)
    {
        arr[this.id]=obj;
        this.id++;
    }

}

let note1= new Note("first note","this is my first note","2/2/2023","2:23");

note1.save(note1);
console.log(arr);