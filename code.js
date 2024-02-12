//edited by Samuel Gonzalez Garcia 2/11/2024

function binarySearch(list, element) {
    function InnerBinSer(list, element, LocSum){
    
        if (list.length > 0 ){
            mid = Math.floor(list.length /2)
            if (list[mid] == element){
                LocSum = LocSum + mid
                return LocSum
            }
            if(list.length == 1 && list[mid] != element){
                LocSum = -1
                return LocSum
            }
    
            else {
                if (list[mid] > element){
                    return InnerBinSer(list.slice(0, mid), element, LocSum)
                }
                else {
                    return InnerBinSer(list.slice((mid + 1), list.length), element, (LocSum + 1 + mid))
                    }
                }
            }
        else {
        return -1;
        }
        }    
return InnerBinSer(list, element, 0)
}