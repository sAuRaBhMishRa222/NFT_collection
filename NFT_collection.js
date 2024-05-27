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
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
let NFT=[];
function mintNFT (Doctor,Specialist,Hospital,Experience) {
    let metadata={
        dOctor:Doctor,
        sPecialist:Specialist,
        hOspital:Hospital,
        eXperience:Experience
    };
    NFT.push(metadata);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFT.length;i++){
        console.log("\n\n_-_-_-_-_-_-_-_-_-_-_Hospital Record_-_-_-_-_-_-_-_-_-_-_-_-_\n\n");
        console.log("Doctor Name :",NFT[i].dOctor)
        console.log("Doctor Specialist :",NFT[i].sPecialist)
        console.log("Hospital Name:",NFT[i].hOspital)
        console.log("Experience:",NFT[i].eXperience)
        console.log("\n\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_\n\n");
    }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs minted: ",NFT.length)
}
// call your functions below this line

mintNFT("John","Cardiologist","AIIMS",8);
mintNFT("David","Dentist","PGI",11);
mintNFT("Harry","Gaincologist","Applo",10);
mintNFT("Garry","Authologist","Argan",15);
mintNFT("Peter","Homeopathic","TATA",12);

listNFTs();
getTotalSupply();


