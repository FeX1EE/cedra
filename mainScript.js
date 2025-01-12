let featuresList=document.querySelector(".FeatureBlocks")
let featureList=[['code1\nforx','explanation1'],['code2\nforx','explanation2'],['code3\nforx','explanation3'],['code4','explanation4'],['code5','explanation5'],['code6','explanation6'],['code7\nforx','explanation7'],['code8','explanation8'],['code9','explanation9'],['code10','explanation10']]
let mainBut = document.querySelector(".toMainBut")
let randBut = document.querySelector(".RandomBut")
for (let i1 = 0; i1 < featureList.length; i1++) {
    let block = document.createElement("div")
    block.classList.add("FeatureBlock")
    featuresList.appendChild(block)
    let code = document.createElement("code")
    code.classList.add("codeSample")
    code.innerHTML=featureList[i1][0]
    block.appendChild(code)
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
    console.log("mainBut")
    for (let i1 = 0; i1 < featureList.length; i1++) {
        let block = document.createElement("div")
        block.classList.add("FeatureBlock")
        featuresList.appendChild(block)
        let code = document.createElement("code")
        code.classList.add("codeSample")
        code.innerHTML=featureList[i1][0]
        block.appendChild(code)
        let hr = document.createElement("hr")
        hr.classList.add("horLine")
        block.appendChild(hr)
        let h4 = document.createElement("h4")
        h4.classList.add("ExplText")
        h4.innerHTML=featureList[i1][1]
        block.appendChild(h4)
    }
})
randBut.addEventListener("click",function(){
    featuresList.replaceChildren('')
    console.log("randBut")
    let Rnum = Math.floor(Math.random() * featureList.length)
    let block = document.createElement("div")
    block.classList.add("FeatureBlock")
    featuresList.appendChild(block)
    let code = document.createElement("code")
    code.classList.add("codeSample")
    code.innerHTML=featureList[Rnum][0]
    block.appendChild(code)
    let hr = document.createElement("hr")
    hr.classList.add("horLine")
    block.appendChild(hr)
    let h4 = document.createElement("h4")
    h4.classList.add("ExplText")
    h4.innerHTML=featureList[Rnum][1]
    block.appendChild(h4)
})