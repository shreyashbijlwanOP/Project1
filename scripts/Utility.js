//  All Utility Function Are Declared here

// this Function Will Help you Create Dynamic Table irrespective og ht eNumber og Elements 
export default function CreateTable(array,tbody,pageState)
{
    tbody.innerHTML = "";
  
    array.forEach((element,index)=>{
        let values = Object.entries(element)
        let newRow = tbody.insertRow(tbody.length);
        newRow.insertCell(0).textContent = (pageState.page-1)*10 + (index +  1) ;
        values.forEach((value,keyNumber)=>{
            if (value[0]=="id")
            {
                newRow.setAttribute("id-number",value[1])
            }
            else
            {
                newRow.insertCell(keyNumber).textContent = value[1]
            }
        })
        newRow.insertCell(values.length).innerHTML = `<button class ="btn btn-primary ms-2 edit" ><i class="fa-solid fa-pen-to-square"></i></button> 
        <button class="btn btn-danger delete"><i class="fa-solid fa-trash"></i></button>`;


    })
        document.getElementById("currentPage").textContent = pageState?.page ?? 1;
} 

// to find the value of Id 
export function checkAttribute(t)
{ 
    let row = t.parentElement.parentElement;
    return row.getAttribute("id-number")
}


//  this Function Decode the URl and give you the id 
export function URLDecoder(URL)
{
let [Path] = new URLSearchParams(URL)
let [,id] = Path;
 return +id ;
}



