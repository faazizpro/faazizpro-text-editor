document.getElementById('bold').addEventListener('click', function(){
    document.getElementById('text-area').style.fontWeight = 'bold';
});
document.getElementById('italic').addEventListener('click', function(){
    document.getElementById('text-area').style.fontStyle = 'italic';
});
document.getElementById('underline').addEventListener('click', function(){
    document.getElementById('text-area').style.textDecoration = 'underline';
});
document.getElementById('left').addEventListener('click', function(){
    document.getElementById('text-area').style.textAlign = 'left';
});
document.getElementById('center').addEventListener('click', function(){
    document.getElementById('text-area').style.textAlign = 'center';
});
document.getElementById('right').addEventListener('click', function(){
    document.getElementById('text-area').style.textAlign = 'right';
});
document.getElementById('lowercase').addEventListener('click', function(){
    document.getElementById('text-area').style.textTransform = 'lowercase';
});
document.getElementById('uppercase').addEventListener('click', function(){
    document.getElementById('text-area').style.textTransform = 'uppercase';
});
document.getElementById('capitalize').addEventListener('click', function(){
    document.getElementById('text-area').style.textTransform = 'capitalize';
});

document.getElementById('fs').addEventListener('input', function(event){
    const fontValue = event.target.value
    document.getElementById('text-area').style.fontSize = `${fontValue}px`
})


document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('text-area').style.fontWeight = 'normal';
    document.getElementById('text-area').style.fontStyle = 'normal';
    document.getElementById('text-area').style.textDecoration = 'none';
    document.getElementById('text-area').style.textAlign = 'left';
    document.getElementById('text-area').style.textTransform = 'lowercase';
    document.getElementById('text-area').style.fontSize = '18px';
})
