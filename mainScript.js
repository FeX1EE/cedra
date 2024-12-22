let featuresList=document.querySelector(".FeatureBlocks")
let featureList=[[`.body{
    padding: 0;
    margin: 0;
}
.FeatureBlock{
    padding-top: 2vh;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
}
.codeSample{
    width: 30vw;
    height: fit-content+10px;
    justify-content: center;
    margin-left: 5vw;
    margin-right: 5vw;
    padding: 5px;
    border: solid 1px black;
    background-color: gray;
}
.horLine{
    padding: 0;
    margin: 0;
    width: 1px;
    background-color: #000000;
    size: 100%;
    float: left;
}
.ExplText{
    justify-content: center;
    padding: 5px;
    margin-left: 5vw;
    margin-right: 5vw;
}`,'explanation1'],['code2','explanation2'],['code3','explanation3'],['code4','explanation4'],['code5','explanation5'],['code6','explanation6']]

// for (let i1 = 0; i1 < featureList.length; ++i1) {
//     featuresList.innerHTML += `<div class="FeatureBlock">
//     <code class="codeSample">${featureList[i1][0]}</code>
//     <hr class="horLine" width="2" size="100%">
//     <h4 class="ExplText">${featureList[i1][1]}</h4>
//     </div>`
// }

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