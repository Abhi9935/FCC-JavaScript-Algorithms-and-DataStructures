function isAnagram( a, b) {
        // Complete the function
        let l1=a.length;
        let l2=b.length;
        if(l1==l2){
            let A=a.toLowerCase().split("");
            let B=b.toLowerCase().split("");
            A.sort();
            B.sort();
            if(sortedA.equals(sortedB)){
               return true;
            }   
        }
        else{
            return false;
        }
        return false;
    }
	
	//=-----------------------------------
	function isAnagram( a, b) {
        // Complete the function
        let l1=a.length;
        let l2=b.length;
        if(l1==l2){
            let A=a.toLowerCase().split("");
            let B=b.toLowerCase().split("");
            
            return A.sort().toString() == B.sort().toString()   
        }
        else{
            return false;
        }
        return false;
    }