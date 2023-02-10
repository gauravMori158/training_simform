let btn1 =document.getElementById('btn1');
btn1.addEventListener('click',buttonClick);

function buttonClick(){
    console.log('clicked!');

    const xhr =new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    xhr.onprogress = function (){
        console.log("...")
    }
    xhr.onload =function (){
        if(this.status == 200)
        console.log(this.responseText);
        else 
        console.error(this.status)
    }
    xhr.send();
    console.log("Done Last Block")
}
