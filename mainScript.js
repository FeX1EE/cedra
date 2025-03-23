let featuresList=document.querySelector(".FeatureBlocks")
let mainBut = document.querySelector(".toMainBut")
let randBut = document.querySelector(".RandomBut")
let pagebut = document.querySelector(".to2PageBut")
let swapThemeBut = document.querySelector(".swapTheme")
themeLists=[[['--text-color','#000000'],['--body-color','#E9E9E9'],['--header-color','#BFBFBF'],['--lines-color','#000000'],['--header-buttons','#8A8A8A'],['--header-buttons-hover','#7A7A7A'],['--header-buttons-active','#AAAAAA'],['--main-buttons','#AAAAAA'],['--main-buttons-hover','#8A8A8A'],['--main-buttons-active','#BBBBBB'],['--main-element','#FFFFFF'],['--main-border','000000'],['--cpp-logo','#8080FF']],[['--text-color','#FFFFFF'],['--body-color','#252525'],['--header-color','#161616'],['--lines-color','#FFFFFF'],['--header-buttons','#757575'],['--header-buttons-hover','#555555'],['--header-buttons-active','#858585'],['--main-buttons','#555555'],['--main-buttons-hover','#444444'],['--main-buttons-active','#757575'],['--main-element','#161616'],['--main-border','FFFFFF'],['--cpp-logo','#0000BB']]]
let theme=0
function swapThemeFunc(theme){
    themeList=themeLists[theme]
    for(let i1=0;i1<themeList.length;++i1){
        document.documentElement.style.setProperty(themeList[i1][0],themeList[i1][1])
    }
    console.log(theme)
}
swapThemeBut.addEventListener("click",function(){
    theme+=1
    if(theme>1){
        theme=0
    }
    switch(theme)
    {
    case 0:
        swapThemeBut.style.backgroundImage="url('https://cdn2.iconfinder.com/data/icons/essential-user-interface-4/24/dark_mode_moon_night-1024.png')"
        break
    case 1:
        swapThemeBut.style.backgroundImage="url('https://cdn4.iconfinder.com/data/icons/camping-hiking-thick-outline/33/sun-512.png')"
        break
    }
    swapThemeFunc(theme)
})
// let featureList=[['code1\nforx','explanation1'],['code2\nforx','explanation2'],['code3\nforx','explanation3'],['code4','explanation4'],['code5','explanation5'],['code6','explanation6'],['code7\nforx','explanation7'],['code8','explanation8'],['code9','explanation9'],['code10','explanation10']]
let featureList=[]
if(localStorage.getItem("codes")==null)
{
    featureList=[['#include &ltbits/stdc++.h&gt','Use this to include all standart libraries.'],['int numbers[] = {1,2,3,4,5};\n\nfor (auto number: numbers)\n{\n   cout << number << endl;\n}','The range-based for loop is an updated version of the traditional for loop introduced in the 11th version of C++'],['age < 18 ? printf("A Child") : printf("An Adult");','If else statements can be easily converted to single-line statements using the ternary operator.'],['int a = 1;\nint b = 2;\n\na ^= b ^= a ^= b;','The XOR operator can be used to swap two variables without using a third auxiliary variable.'],['int x = 10;\nwhile( x --> 0 )\n{\n   printf("%d ", x);\n}','The "operator" -> can be used in the while loop as a transition condition.'],['int i;\n\nprintf("%d", i = 10);','C++ allows you to combine assignment and function invocation.'],['using std::cout;using std::string;\n\nint main(){\n    string hello = "Hello, World!";\n    cout << hello << \'\\n\';\n}','If you need to use it for specific words, such as cout, string and others, specify only them, because when you make this global, it generates conflicts when there are same names.'],['std::cout << \"Hello World!\\n\";\nstd::cout << \'\\n\';\nstd::cout << var << \'\\n\';\n','Stop using std::endl. Only use \'\\n\', enclosed in single quotes, or \"Hello\\n\", when used in conjunction with strings.'],['int x {0};\nint y {42};\nstd::string hello {};\nstd::string world {"World!"};','Prefer {} to initialization, to =.This makes the compiler\'s job easier and avoids failing to initialize a member/variable'],['std::shared_ptr&ltMyClass&gt mc = std::make_shared&ltMyClass&gt();\n\nauto ot = std::make_shared&ltOther&gt();','Avoid accessing memory directly, use smart pointers. This avoids memory leaks and unexpected errors, there are others, however the most modern is shared_ptr to create the pointer and make_shared to allocate memory space or share characteristics of a pointer.'],['std::array&ltint, 10&gt arr {1,2,3,4,5,6,7,8,9};\nstd::vector&ltconst char*&gt fruits {"Apple", "Orange", "Banana", "Cherry"};','Don\'t use arrays, create lists with std::array or std::vector Both ensure contiguous memory layout of objects and can (and should) completely replace the use of C-style arrays for many of the reasons listed for not using simple pointers.']]
    cdsl=[]
    expsl=[]
    for(let i1=0;i1<featureList.length;++i1)
    {
        cdsl.push(featureList[i1][0])
        expsl.push(featureList[i1][1])
    }
    //console.log(cdsl)
    //console.log(expsl)
    localStorage.setItem("codes", JSON.stringify(cdsl))
    localStorage.setItem("explanations", JSON.stringify(expsl))
}
else
{
    let LStL=JSON.parse(localStorage.getItem("codes")).length
    let r1=JSON.parse(localStorage.getItem("codes"))
    let r2=JSON.parse(localStorage.getItem("explanations"))
    for(let i1=0;i1<LStL;++i1)
    {
        featureList.push([r1[i1],r2[i1]])
    }
}
for (let i1 = 0; i1 < featureList.length; i1++) {
    let block = document.createElement("div")
    block.classList.add("FeatureBlock")
    featuresList.appendChild(block)
    let blockCode = document.createElement("div")
    blockCode.classList.add("FeatureBlockCode")
    block.appendChild(blockCode)
    let code = document.createElement("code")
    code.classList.add("codeSample")
    code.innerHTML=featureList[i1][0]
    blockCode.appendChild(code)
    let copyBut = document.createElement("div")
    copyBut.classList.add("copyBut")
    copyBut.addEventListener("click",function(){
        navigator.clipboard.writeText(code.innerHTML)
    })
    blockCode.appendChild(copyBut)
    let hr = document.createElement("hr")
    hr.classList.add("horLine")
    block.appendChild(hr)
    let h4 = document.createElement("h4")
    h4.classList.add("ExplText")
    h4.innerHTML=featureList[i1][1]
    block.appendChild(h4)
}
mainBut.addEventListener("click",function(){
    featuresList.replaceChildren('')
    for (let i1 = 0; i1 < featureList.length; i1++) {
        let block = document.createElement("div")
        block.classList.add("FeatureBlock")
        featuresList.appendChild(block)
        let blockCode = document.createElement("div")
        blockCode.classList.add("FeatureBlockCode")
        block.appendChild(blockCode)
        let code = document.createElement("code")
        code.classList.add("codeSample")
        code.innerHTML=featureList[i1][0]
        blockCode.appendChild(code)
        let copyBut = document.createElement("div")
        copyBut.classList.add("copyBut")
        copyBut.addEventListener("click",function(){
            navigator.clipboard.writeText(code.innerHTML)
        })
        blockCode.appendChild(copyBut)
        let hr = document.createElement("hr")
        hr.classList.add("horLine")
        block.appendChild(hr)
        let h4 = document.createElement("h4")
        h4.classList.add("ExplText")
        h4.innerHTML=featureList[i1][1]
        block.appendChild(h4)
    }
})
let Nbt=0
pagebut.addEventListener("click",function(){
    window.location.href="HTML2.html"
})
randBut.addEventListener("click",function(){
    featuresList.replaceChildren('')
    let Rnum = Math.floor((Math.random() * (featureList.length-1)))
    if(Rnum>=Nbt)
    {
        Rnum+=1
    }
    Nbt=Rnum
    let block = document.createElement("div")
    block.classList.add("FeatureBlock")
    featuresList.appendChild(block)
    let blockCode = document.createElement("div")
    blockCode.classList.add("FeatureBlockCode")
    block.appendChild(blockCode)
    let code = document.createElement("code")
    code.classList.add("codeSample")
    code.innerHTML=featureList[Rnum][0]
    blockCode.appendChild(code)
    let copyBut = document.createElement("div")
    copyBut.classList.add("copyBut")
    copyBut.addEventListener("click",function(){
        navigator.clipboard.writeText(code.innerHTML)
    })
    blockCode.appendChild(copyBut)
    let hr = document.createElement("hr")
    hr.classList.add("horLine")
    block.appendChild(hr)
    let h4 = document.createElement("h4")
    h4.classList.add("ExplText")
    h4.innerHTML=featureList[Rnum][1]
    block.appendChild(h4)
})