//number1

function deleteByIndex(arr,index) {
    let arr2=[]
    for (let i=0;i<arr.length;i++){
        if(i<index){
            arr2.push(arr[i]);
        }
        else if(i>index){
            arr2.push(arr[i])
        }
    }
    // arr=arr2
    return arr2;
}

//number2
function CombineAndSort(arr1,arr2) {
     for (let i=0;i<arr2.length;i++){
         arr1.push(arr2[i])
     }
     for(var i=0;i<arr1.length;i++){
        for(var j=0;j<=i;j++){
             var k=j;
            while(arr1[k-1]>arr1[k] && k>=1){
                let t=arr1[k-1];
                arr1[k-1]=arr1[k];
                arr1[k]=t;
                k--;
            }
        }
    }
    return arr1
}


//number3
var arr2=[]
function FlatArray(arr) {
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]=="object"){
            FlatArray(arr[i])
        }
        else {
            arr2.push(arr[i])
        }
    }
    return arr2
}

//number4
function FindByItem(arr,item) {
    for (let i=0;i<arr.length;i++){
        if (arr[i]==item){
            var k=i
            break
        }
    }
    return {"index":k,"item":item}
}



//number5
function replaceByItem(array, currentItem, newItem) {
     for (let i=0;i<array.length;i++){
         if (array[i]==currentItem){
             array[i]=newItem
         }
     }
     return array
}

//number6
function ExtractNumbersFromString(string) {
    let arr=[]
    for (let i=0;i<string.length;i++){
        if (isNaN(parseInt(string[i]))==false){
            arr.push(parseInt(string[i]))
        }
    }
    return arr
}

//number7
function RemoveDuplicateItems(array) {
    for (var i=0;i<array.length;i++){
        for (var j=i+1;j<array.length;j++){
            if (array[i]==array[j]){
                array.splice(j,1)
                j--;
            }
        }
    }
    return array
}