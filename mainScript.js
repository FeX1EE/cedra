let featuresList=document.querySelector(".FeatureBlocks")
let featureList=[['code1','explanation1'],['code2','explanation2'],['code3','explanation3'],['code4','explanation4'],['code5','explanation5'],['code6','explanation6']]

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