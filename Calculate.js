let text ='';
let flag= 0;
let count=0;
let pos=-1;
let ans=0.0;
let repeat=0;
function text_input(a){
if(repeat==1)
{
text='';
repeat=0;
count=0;
}
text=text+a;
if(a=='00')
count+=2;
else
count++;
    document.getElementsByClassName("disp-text")[0].innerHTML= text;
}
function del(){
    text=text.substring(0, text.length-1)
    document.getElementsByClassName("disp-text")[0].innerHTML= text;
    count--;
    if(text[text.length-1]=='+' || text[text.length-1]=='-' ||text[text.length-1]=='/' ||text[text.length-1]=='*' ||text[text.length-1]=='^')
    flag=0;
}
function ac()
{
    text='';
    document.getElementsByClassName("disp-text")[0].innerHTML= text;
    count=0;

}
function op_input(b){
    if(text.length==0 && (b=='/' || b=='*' || b=='^'))
    alert("INVALID OPERATOR USAGE")
else if(text=='' || text=='0' && (b=='+' || b=='-'))
{
    flag=0;
    repeat=0;
    count++;
    text=text+b;
    document.getElementsByClassName("disp-text")[0].innerHTML= text;
}

else if(flag==1)
{
    alert("Only 1 operation at a time");
    
}
else{
    repeat=0;
    pos=count;
    flag=1;
    text=text+b;
    document.getElementsByClassName("disp-text")[0].innerHTML= text;

}
}
function ass_input(){
    ans=0.0;
    let num1= parseFloat(text.substring(0,pos));
    let num2= parseFloat(text.substring(pos+1, text.length));
    
    if(text[pos]=='+')
    ans=num1+num2;
    if(text[pos]=='-')
    ans=num1-num2;
    if(text[pos]=='*')
    ans=num1*num2;
    if(text[pos]=='/' && num2!=0.0)
    ans=num1/num2;
    if(text[pos]=='/' && num2==0.0)
    alert("INVALID INPUT");
    if(text[pos]=='^')
    ans= Math.pow(num1, num2);
    document.getElementsByClassName("disp-text")[0].innerHTML= ans;
    
    pos=0;
    text=ans.toString();
    count=text.length;
    flag=0;
    repeat=1;

}
