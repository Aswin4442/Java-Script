function display(content){
    result.value += content
}

function allClear(){
    result.value = ""
}

function deleteValue(){
    // slice - string method
    result.value = result.value.slice(0,-1)
}

function equalto(){
    try{
        result.value = eval(result.value)
    }
    catch(error){
        console.log(error);
        result.value = 'SyntaxError!'
    }
}