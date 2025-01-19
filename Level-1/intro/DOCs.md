▶️ Basic HTML

👉 what is HTML - web site per jo bhi dikh raha hai content vo sub html hai ---> html is like skeleton of the website ---> like kuch likha hua kuch image ya koi form koi input is like a content, jo hmse interect kare aur kuch knowledge provide kare that is html 

➡️ Tags - jo tag start hoga vo tag close bhi hoga ---> html me majority tag close hote hai ---> means saare tag close nahi hote 
👉 h1 likhne pr suggestion dega ---> thrugh emmet ----> emmet is a plugin ---> iski wajah se hi hmme suggestion milta hai ---> ye ek external plugin/extention hai jo VS code me builtin aata hai

👉 h1 - h6, ---> it create heading
👉 p ---> peragraph ---> add content using lorem
👉 b ---> <b?></b> bold tag,  i ----> <i></i> ---> itelic tag, 
👉 sub <sub> </sub> subscript ---> like CO2, 
👉 sup ----> <sup> </sup> superscript ---> 2^2 = 4,
👉 ol, ul, ---< ol and ul works with li > li
👉 img ---> <img src="image ka address " alt="any name write karo jb image load na ho"> , yaha pr src and alt attribute hai
👉 a tag ---> a tag create hyperlinks jisme href attribute hote hai
👉 form inputs -->
    radio button me name dena neccessary hai for multiple radio button me name should be same 
👉 div ---> some more attributes ---> id, class

👉 div ---> ek box structure jo ki width rakhta hai but height nahi ---> think a rectangle in our mind usme width utni hi rahegi but heiht 0 kr do ----> toh kuch nahi show hoga but there is still div ----> ↘️ div ek rectuger shape hota hai by defalt iske pass height nahi hoti hai width hoti hai isko height de kr hum dekh sakte hai---> by the way hmme ek background color bhi dena hota hai which is css part

👉 think a rectanguler box and height 0 kr dooo jisme kuch nahi show hoga this is a div
👉 uses ---> jb bhi rectangle shape banana ho yabhi hmme div lagega ---> rectagle se related yadi koi shape banana hai ya circlr banana hai tb  ---> jo hum yaha pr ractangle shape bnate hai uska naam hai sqaure aur square ke borders ko kaat dete hai toh bn jata hai circle toh jb bhi rectanguler shape banana hai tb hum div bnayenge 

👉 uses 2 ---> ek se jyada elements ko ek sath rakhne ke liye div lagega


➡️ id and class 

👉 id ka name hum repeat nahi kr sakte hai ---> id is used for unique selector 
👉 class ko hum same name de sakte hai ----> class name ko hum multiple tag ko de sakte hai 



▶️ 🌴 ➡️ 🌴 🔴  🌴 ➡️ 🌴 🔴  🌴 ➡️ 🌴 🔴  🌴 ➡️ 🌴 🔴  🌴 ➡️ 🌴 🔴  🌴 ➡️ 🌴 ▶️ 

👉 div is a container ---> and there is another use for div is ---> div is used for retanguler shape or create similer shape through div

👉 ▶️ jb bhi hmme div ko rectanguler shape me bnana hota hai toh hmme div ko 💥 height and width and background-color dena hota hai
👉 hum yaha pr div ki height and width ko % me bhi de sakte hai ---> 💥 % means depending aupon the parents meand div apne parent ka 30% lega ---> toh yaha pr box body ke under hai toh div whole body ka 30% height and width lega 
👉 toh yadi hum div ki height and width ko px me dete hai toh perfect squar deta hai but yadi hun div ki height and width ko % me dete hai toh ye hmme rectangle shape me milta hai ----> because hmari screen landscape screen hoti hai toh ye whole screen ka 40% le raha hai


▶️ margin --> margin means imaginary space ----> like margin-left : 50px; ---> it means ye left se 50px shift ho jayga, ----> margin-top : 50px; ---> it means ye top se 50px shift ho jayga

👉 margin-left ya margib-top ----> basically ye element ko shift krne ka kaam kr rahi hai meand 100px ka imaginary space bnayega

👉padding means ---> under side space lena


▶️ position absolute ---> is used for kisi bhi element ko hava me utha ke kahin or lekr jana ---> position absolute me hi top left wali properties unlock hoti hai yadi hmme apne div box ko perfectly center me leker aana hai toh we have to write

👉 transform: translate(-50%, -50%);

👉 for perfrctly center any div box we have to write

#box{
    height: 200px;
    width: 200px;
    background-color: brown;
    // ⬇️
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

▶️ display flex --> is used to create the layout ---> go to 💥 parent div of that element ---> display flex ---> parent ke jo bhi child/element ko rows and column ke forms me divide kr deta hai aur jb ye rows and column ke form me divide ho jate hai tb hum unhe esily as per requirement align kr sakte hai ---> rows and column ko adjest krne ho toh we have lot of property if we want to align the item in column wise then we have a properties ----> align-item : flex-start , flex-end, center

👉 y axies me kisi bhi element ko center krne ke liye we can use --->  align-item : center;

👉 x axies me kisi bhi element ko center krne ke liye we can use ---> 

justify-content : center;
justify-content : space-between;
justify-content : space-around;

