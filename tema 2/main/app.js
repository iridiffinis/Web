function addTokens(input, tokens){
    if(typeof input != "string")
        throw ("Invalid input");
    
    if(input.length <6)
        throw ("Input should have at least 6 characters");

    tokens.forEach(i => {
        if(typeof tokens[i] != "string")
            throw("Invalid array format");
    });

    if(!(input.includes("...")))
    {   
        return input;
    }
    for (let i = 0; i < tokens.length; i++) {
        input = input.replace("...",tokens[i]);
    }
    return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;