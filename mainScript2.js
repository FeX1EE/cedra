but=document.querySelector(".toMain")
but.addEventListener("click",function(){console.log("clicked!")})
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
questionsTbl=[['q1','a1'],['q2','a2'],['q3','a3']]
let lstQuesTbl=questionsTbl
let formed=false
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

inpQsts.addEventListener("click",function(){inpQsts.placeholder="Number of questions"})
startBut.addEventListener("click",function()
{
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
                let elDel = lstQuesTbl.length-Number(inpQsts.value)
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
        let startT=Date.now()
        setInterval(function() {
            timerQst.innerHTML = "Timer: "+formCurTime(new Date().getTime() - startT)
        }, 100);
        let numOfQst=lstQuesTbl.length
        progress.innerHTML=(numOfQst-lstQuesTbl.length)+' / '+(numOfQst)
        formed=false
        start.style.display='none'
        questions.style.display='flex'
        let randN = Math.floor((Math.random() * (lstQuesTbl.length-1)))
        quesText.innerHTML=lstQuesTbl[randN][0]
        //console.log(lstQuesTbl)
        checkBut.addEventListener("click",function()
        {
            //console.log(randN)
            //console.log(lstQuesTbl[randN])
            if(inpAns.value==lstQuesTbl[randN][1])
            {
                lstQuesTbl.splice(randN,1)
                progress.innerHTML=(numOfQst-lstQuesTbl.length)+' / '+(numOfQst)
                if(lstQuesTbl.length>0)
                {
                    randN = Math.floor((Math.random() * (lstQuesTbl.length-1)))
                    quesText.innerHTML=lstQuesTbl[randN][0]
                    inpAns.value=''
                    //console.log(lstQuesTbl)
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
            }
            else
            {
                //console.log(inpAns.value)
                //console.log(lstQuesTbl[randN][1])
            }
        })
    }
    inpQsts.value=""
})