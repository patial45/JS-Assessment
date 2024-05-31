/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const holdNFT =[]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (title_, artist_, year_, medium_) {
const NFT ={
    "title": title_,
    "artist": artist_,
    "year": year_,
    "medium": medium_,
}
holdNFT.push(NFT);
console.log("Minted " +title_);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(i=0; i<holdNFT.length; i++){
    console.log("\nTitle:\t" +holdNFT[i].title);
    console.log("Artist:\t" +holdNFT[i].artist);
    console.log("Year:\t" +holdNFT[i].year);
    console.log("Medium:\t" +holdNFT[i].medium);
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\n" +holdNFT.length);
}

// call your functions below this line
mintNFT("Mona Lisa", "Leonardo da Vinci", 1503, "Oil on popular");
mintNFT("The Starry Night", "Vincent van Gogh", 1889, "Oil on canvas");
mintNFT("The Birth of Venus", "Sandro Botticelli", 1486, "Tempera on canvas");
mintNFT("The Garden of Earthly Delights", "Hieronymus Bosch", 1515, "Oil on oak");
mintNFT("The Hay Wain", "John Constable", 1821, "Oil on canvas");
listNFTs();
getTotalSupply();
