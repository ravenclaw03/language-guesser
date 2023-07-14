const franc=require("franc");
const langs=require("langs");
const colors=require("colors");
const input=process.argv[2];
const ans=franc(input) ;
if(ans==="und"){
    console.log("Sorry, no language found. TRY AGAIN WITH A BIGGER TEXT.".red)
}
else{
    const language=langs.where("3",ans).name;
    console.log(`Our best Guess is :${language}`.green);
}
