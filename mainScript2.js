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
mistRes=document.querySelector(".mistRes")
quesText=document.querySelector(".quesText")
inpAns=document.querySelector(".inputAns")
checkBut=document.querySelector(".checkBut")
timerQst=document.querySelector(".timerQst")
topTextRes=document.querySelector(".topTextRes")
swapThemeBut=document.querySelector(".swapTheme")
pageBut=document.querySelector(".to1Page")
pageBut.addEventListener("click",function(){
    window.location.href="indexHTML.html"
})
themeLists=[[['--text-color','#000000'],['--body-color','#E9E9E9'],['--header-color','#BFBFBF'],['--lines-color','#000000'],['--header-buttons','#8A8A8A'],['--header-buttons-hover','#7A7A7A'],['--header-buttons-active','#AAAAAA'],['--main-buttons','#AAAAAA'],['--main-buttons-hover','#8A8A8A'],['--main-buttons-active','#BBBBBB'],['--main-element','#FFFFFF'],['--main-border','#000000'],['--main-result','#333333'],['--cpp-logo','#8080FF']],[['--text-color','#FFFFFF'],['--body-color','#252525'],['--header-color','#161616'],['--lines-color','#FFFFFF'],['--header-buttons','#757575'],['--header-buttons-hover','#555555'],['--header-buttons-active','#858585'],['--main-buttons','#555555'],['--main-buttons-hover','#444444'],['--main-buttons-active','#757575'],['--main-element','#161616'],['--main-border','#FFFFFF'],['--main-result','#CCCCCC'],['--cpp-logo','#0000BB']]]
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
//document.documentElement.style.setProperty('--body-color', '#111111')
function copyArray(array){
    let newArray=[]
    for(let i1=0;i1<array.length;++i1){
        newArray.push(array[i1])
    }
    return newArray
}
const questionsTbl=[['How many <i>bytes</i> is the C++ float encoded in?','4'],['Which programming language was the most <i>popular</i> in 2024?','python'],['In what year was C++ developed?','1979'],['What is the default language used in unity scripts?','c#'],['Is python a full compiled language?','no']]
let lstQuesTbl = copyArray(questionsTbl)
console.log(lstQuesTbl)
let elDel=0
let startT=0
let randN=0
let numOfQst=0
let mistakes=0;
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
    mistakes=0
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
    if(inpAns.value.toLowerCase()==lstQuesTbl[randN][1])
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
            mistRes.innerHTML='Mistakes: '+mistakes
            timePerQuest.innerHTML='Time/question: '+formTime(Math.floor(time/numOfQst))
            if(mistakes>numOfQst)
            {
                endRes.style.backgroundImage="url('https://steamuserimages-a.akamaihd.net/ugc/2147713576580714028/18D46A685010D439806CCE4DEA016D941D221686/?imw=512&amp;imh=408&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true')"
                topTextRes.innerHTML='Бро, тебе надо тренироваться.'
            }
            else
            {
                endRes.style.backgroundImage="url('https://m.media-amazon.com/images/M/MV5BMjAwMTE3MTUyNV5BMl5BanBnXkFtZTcwNDM1MDUwOA@@._V1_.jpg')"
                topTextRes.innerHTML='You are goddamn right'
            }
            endRes.style.display='flex'
        }
        //console.log(lstQuesTbl)
        //console.log(randN)
        document.cookie = 'lstQuesTbl='+String(lstQuesTbl)+';'+'randN='+String(randN)+';max-age=3600'
    }
    else if(inpAns.value=='')
    {
        if(quesText.innerHTML!="Enter your answer!" && quesText.innerHTML!="WRONG!")
        {
            quesText.innerHTML="Enter your answer!"
            setTimeout(function(){quesText.innerHTML=lstQuesTbl[randN][0]},1000)
        }
    }
    else
    {
        if(quesText.innerHTML!="Enter your answer!" && quesText.innerHTML!="WRONG!")
        {
            quesText.innerHTML="WRONG!"
            inpAns.value=''
            setTimeout(function(){quesText.innerHTML=lstQuesTbl[randN][0]},1000)
            mistakes+=1
        }
    }
})