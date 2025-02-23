toMainBut=document.querySelector(".toMain")
start=document.querySelector(".start")
startBut=document.querySelector(".startButton")
inpQsts=document.querySelector(".inputQuests")
progress=document.querySelector(".progress")
questions=document.querySelector(".questions")
endRes=document.querySelector(".endResult")
timeRes=document.querySelector(".timeRes")
timePerQuest=document.querySelector(".timePerQuestRes")
questRes=document.querySelector(".questRes")
quesText=document.querySelector(".quesText")
inpAns=document.querySelector(".inputAns")
checkBut=document.querySelector(".checkBut")
timerQst=document.querySelector(".timerQst")
function copyArray(array){
    let newArray=[]
    for(let i1=0;i1<array.length;++i1){
        newArray.push(array[i1])
    }
    return newArray
}
const questionsTbl=[['q1','a1'],['q2','a2'],['q3','a3'],['q4','a4'],['q5','a5']]
let lstQuesTbl = copyArray(questionsTbl)
console.log(lstQuesTbl)
let elDel=0
let startT=0
let randN=0
let numOfQst=0
let formed=false
let cookieData = document.cookie
document.cookie="cookie=20;cook=12;max-age=3600"
console.log(document.cookie)
function formCurTime(timems){
    let out=''
    if(timems>1000*60*60)
    {
        let rndedTime=Math.floor(timems/1000/60/60)
        out+=(rndedTime+'h ')
        timems-=rndedTime*1000*60*60
    }
    if(timems>1000*60)
    {
        let rndedTime=Math.floor(timems/1000/60)
        out+=(rndedTime+'m ')
        timems-=rndedTime*1000*60
    }
    if(timems>0)
    {
        let rndedTime=Math.floor(timems/100)
        out+=(rndedTime/10+'s ')
        timems-=rndedTime*100
    }
    return out
}
function formTime(timems){
    let out=''
    if(timems>1000*60*60)
    {
        let rndedTime=Math.floor(timems/1000/60/60)
        out+=(rndedTime+'h ')
        timems-=rndedTime*1000*60*60
    }
    if(timems>1000*60)
    {
        let rndedTime=Math.floor(timems/1000/60)
        out+=(rndedTime+'m ')
        timems-=rndedTime*1000*60
    }
    if(timems>1000)
    {
        let rndedTime=Math.floor(timems/1000)
        out+=(rndedTime+'s ')
        timems-=rndedTime*1000
    }
    if(timems>0)
    {
        out+=(timems+'ms')
    }
    return out
}
console.log(cookieData)
if(cookieData){
    console.log('data found')
    start.style.display='none'
    questions.style.display='flex'
    endRes.style.display='none'
}
inpQsts.addEventListener("click",function(){inpQsts.placeholder="Number of questions"})
toMainBut.addEventListener("click",function(){
    startT=0
    start.style.display='flex'
    questions.style.display='none'
    endRes.style.display='none'
    inpAns.value=''
})
startBut.addEventListener("click",function()
{
    console.log(questionsTbl)
    lstQuesTbl=copyArray(questionsTbl)
    if(inpQsts.value=='')
    {
        formed=true
    }
    else
    {
        if(!isNaN(inpQsts.value))
        {
            if(Number(inpQsts.value)>0 && lstQuesTbl.length>=Number(inpQsts.value))
            {
                elDel = lstQuesTbl.length-Number(inpQsts.value)
                for(let i1=0;i1<elDel;++i1)
                {
                    lstQuesTbl.splice(Math.floor((Math.random() * (lstQuesTbl.length-1))),1)
                }
                formed=true
            }
            else
            {
                inpQsts.placeholder="invalid input!"
            }
        }
    }
    if(formed)
    {
        //console.log(lstQuesTbl)
        startT=Date.now()
        setInterval(function() {
            if(startT>0){
                timerQst.innerHTML = "Timer: "+formCurTime(new Date().getTime() - startT)
            }
        }, 100);
        numOfQst=lstQuesTbl.length
        progress.innerHTML='0 / '+(numOfQst)
        formed=false
        start.style.display='none'
        questions.style.display='flex'
        randN = Math.floor((Math.random() * (lstQuesTbl.length-1)))
        quesText.innerHTML=lstQuesTbl[randN][0]
    }
    inpQsts.value=""
})
checkBut.addEventListener("click",function()
{
    if(inpAns.value==lstQuesTbl[randN][1])
    {
        lstQuesTbl.splice(randN,1)
        progress.innerHTML=(numOfQst-lstQuesTbl.length)+' / '+(numOfQst)
        if(lstQuesTbl.length>0)
        {
            randN = Math.floor((Math.random() * (lstQuesTbl.length-1)))
            quesText.innerHTML=lstQuesTbl[randN][0]
            inpAns.value=''
        }
        else
        {
            questions.style.display='none'
            time=Date.now()-startT
            timeRes.innerHTML='time: '+formTime(time)
            questRes.innerHTML='Questions: '+numOfQst
            timePerQuest.innerHTML='Time/question: '+formTime(Math.floor(time/numOfQst))
            endRes.style.display='flex'
        }
        //console.log(lstQuesTbl)
        //console.log(randN)
        document.cookie = 'lstQuesTbl='+String(lstQuesTbl)+';'+'randN='+String(randN)+';max-age=3600'
    }
    else
    {

    }
})