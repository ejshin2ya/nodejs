var members =['eunjeong', 'hyojeong', 'hyosoon'];
console.log(members[1]);

var i=0;
while(i < members.length){
console.log('array loop', members[i]);
    i=i+1;
}

var roles = {
    'programmer':'eunjeong',
    'designer' : 'hyojeong',
    'manager' : 'hyosoon'
}
console.log(roles.designer);
console.log(roles['designer']);

for(var name in roles){
    console.log('object =>', name, 'value =>', roles[name]);
}
//name에는 아무 글이나 작성해서 지칭만 해주면 된다. 