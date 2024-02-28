function getFormvalue() {
    //Write your code here
	let inpts=document.queryselector("input")
	let name=inpts[0].value
	let last=inpts[1].value
	let fullname=name + " "+ last
	alert(fullname)
	
}
