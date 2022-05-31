let sec=60;
let min=5;
const timer_count=function()
{
    let txt_sec=document.getElementById("second");
    txt_sec.innerText=(` ${sec}s`);
    let txt_min=document.getElementById("minute");
    txt_min.innerText=(`${min}m`);
    if(sec>0)
    {
        sec--;
        if(sec==0)
        {
            sec=60;
            min--;

            if(min<0)
            {
                min=5;
            }

            setInterval(timer_count,1000);
        }       
    }
}
const interval_id  =setInterval(timer_count,1000);
const stop = function() 
{
    clearInterval(interval_id);

}
const stop_btn = document.getElementById('stop');
stop_btn.addEventListener('click', stop);