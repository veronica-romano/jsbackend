function geraArrayDeURLs(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

function validaURLS(arrayLinks){
    return geraArrayDeURLs(arrayLinks)
}

module.exports = validaURLS