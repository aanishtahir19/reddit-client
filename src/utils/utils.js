
export const timePassedPosted = (sec)=>{
    let d = new Date(0);
    d.setUTCSeconds(sec)
    let today = new Date();
    let secPassed = (today-d)/1000;
    if(secPassed<60){
        if(secPassed<10){
            return `$just now`;
        }
        return `${secPassed}seconds ago`;
    }
    else if(secPassed <3600){
        if(Math.floor(secPassed/60)<=1){
            return `1 min ago`
        }
        return `${Math.floor(secPassed/60)} mins ago`
    }
    else if(secPassed<86400){
        if (Math.floor(secPassed/60/60)<= 1){
            return "1 hour ago";
        }
        return `${Math.floor(secPassed/60/60)} hours ago`
    }
    else if(secPassed<2592000){
        if(Math.floor(secPassed/60/60/24)<=1){
            return "1 day ago"
        }
        return `${Math.floor(secPassed/60/60/24)} days ago`
    }
    else{
        if(Math.floor(secPassed/60/60/24/30 <=1)){
            return "1 month ago"
        }
        return `${Math.floor(secPassed/60/60/24/30)} months ago`
    }
}
