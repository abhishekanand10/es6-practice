function teach(){
        console.log('teaching....');
        let practice=function(){
            console.log('practicing....');
        }
        //practice();
        return practice;
    }
    
    let r=teach();

    r();