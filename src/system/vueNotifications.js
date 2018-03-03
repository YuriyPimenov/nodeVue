import miniToastr from 'mini-toastr'

const toastrTypes = {
	success:'success',
	error:'error',
	info:'info',
	warn:'warn'
}

miniToastr.init({types:toastrTypes})

function toast({title,message,type,timeout,cb}){
	return miniToastr[type](message,title,timeout,cb)
}

const options = {
	success:toast,
	error:toast,
	info:toast,
	warn:toast
}

export default options