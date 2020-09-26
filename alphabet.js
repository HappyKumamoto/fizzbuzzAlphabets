for(let i=1; i<=1000; i++){
if (i % 15 === 0){
document.write('A'+'  ');
}else if(i %12 === 0){
document.write('B'+'  ');
}else if(i % 8 === 0){
document.write('C'+'  ');
}else if(i % 5 === 0){
document.write('D'+'  ');
}else if(i % 4 === 0){
document.write('E'+'  ');
}else if(i % 3 === 0){
document.write('F'+'  ');
}else if(i % 2 === 0){
document.write('G'+'  ');
}else if(i % 1 === 0){
document.write('H'+'  ');
}else{
document.write(i+'  ');
}
 }