(function(){
    function outerfunction(c){
        return c;   
    }
    var add = function(a,b){
        return a+b;
    }
    var output = outerfunction(add);
    console.log(output);

})()