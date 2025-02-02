let featuresList=document.querySelector(".FeatureBlocks")
let mainBut = document.querySelector(".toMainBut")
let randBut = document.querySelector(".RandomBut")
// let featureList=[['code1\nforx','explanation1'],['code2\nforx','explanation2'],['code3\nforx','explanation3'],['code4','explanation4'],['code5','explanation5'],['code6','explanation6'],['code7\nforx','explanation7'],['code8','explanation8'],['code9','explanation9'],['code10','explanation10']]
let featureList=[]
if(localStorage.getItem("codes")==null)
{
    localStorage.setItem("codes", JSON.stringify(['code1\nforx','code2\nforx','code3\nforx','code4','code5','code6','code7\nforx','code8','code9','code10']))
    localStorage.setItem("explanations", JSON.stringify(['explanation1','explanation2','explanation3','explanation4','explanation5','explanation6','explanation7','explanation8','explanation9','explanation10']))
    featureList=[['code1\nforx','explanation1'],['code2\nforx','explanation2'],['code3\nforx','explanation3'],['code4','explanation4'],['code5','explanation5'],['code6','explanation6'],['code7\nforx','explanation7'],['code8','explanation8'],['code9','explanation9'],['code10','explanation10']]
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