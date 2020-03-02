function remove(arr,index)
{
    arr.splice(0,index);
    return arr;
}

console.log(remove(['omni','wyse','intern','javascript','batch'],2));