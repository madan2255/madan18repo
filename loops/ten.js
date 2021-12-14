//wap to print reverse of digits of number
 let r=0;
 while(n!=0){
     d=n%10;
     r=(r*10)+d;
     n=n%10;
     console.log("reverse vLUES",r);
 }