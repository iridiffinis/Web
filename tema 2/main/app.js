function addTokens(input, tokens){
    if(typeof (input) != "string")
        throw ("Invalid input");
    
    else 
    {
        if(input.length <6)
            throw ("Input should have at least 6 characters");
        else{
            for(let item of tokens)
            {
                if(!item.hasOwnProperty("tokenName") || typeof(item.tokenName) !== "string")
                    throw("Invalid array format");
            }

            if(input.includes('...'))
            {
                for(let token of tokens)
                {
                    input = input.replace('...','${'+token.tokenName+'}');
                }
            }
            return input;

        }
    }
}

const app = {
    addTokens: addTokens
}

module.exports = app;