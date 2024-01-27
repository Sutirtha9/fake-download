var time;
var fileName="";

var flag=false;

//100% = 600px
document.querySelector('#start').onclick=function()
{
    if(!flag)
    {
        if(document.querySelector('#fileName').value!="" && document.querySelector('#time').value!="" && document.querySelector('#time').value>0)
        {
            document.querySelector('#start').innerHTML='<ion-icon name="download-outline"></ion-icon>Start Download';
        
            fileName = document.querySelector('#fileName').value;
            time = document.querySelector('#time').value;

            document.querySelector('#download').innerHTML=`Download '${fileName}'`;

            document.querySelector('#fileName').style.visibility='hidden';
            document.querySelector('#time').style.visibility='hidden';
            document.querySelector('#fileName').style.position='absolute';
            document.querySelector('#time').style.position='absolute';

            document.querySelector('#status').style.visibility='visible';

            document.querySelector('.bar').style.visibility='visible';
            document.querySelector('#mainBar').style.visibility='visible';

            document.querySelector('#check').innerHTML='';

            flag=true;
        }
        else
        {
            document.querySelector('#check').innerHTML='Please Fill All The Boxes!';

        }

    }
    else
    {
        
        var i=0;

        var size=600;
        time=time*60;


        function statusFunction()
        {
            setInterval(()=>
            {
                if(i<=100)
                {
                    document.querySelector('#status').innerHTML=`${i}%`;
                    if(i==100)
                    {
                        document.querySelector('#download').innerHTML=`'${fileName}' Downloaded`;
                    }
                    else
                    {
                        document.querySelector('#mainBar').style.backgroundColor='#0097e3';
                        document.querySelector('#mainBar').style.width=`${size}px`;
                        document.querySelector('#mainBar').style.transition=`all ${time}s linear 0s`; 
                        document.querySelector('#download').innerHTML=`Downloading '${fileName}'`;
                    }
                    i++;
                }
                document.querySelector('#start').onclick=function()
                {
                    i=0;
                    document.querySelector('#mainBar').style.backgroundColor='#e38400';
                    document.querySelector('#mainBar').style.width='0px';
                    document.querySelector('#mainBar').style.transition=`all 0s linear 0s`; 
                }
                
            },time*10);
        }

        statusFunction();

        document.querySelector('#start').innerHTML='<ion-icon name="refresh-outline"></ion-icon>Restart Download';
    }
}