function getName(id:number ,name:string ,email?:string)
{
    console.log(id," ",name);
    if(email !=undefined)
    console.log(email);
}

getName(1,"Mori","es");


getName(1,'mori ')