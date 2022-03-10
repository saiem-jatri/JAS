import {createToaster} from '@meforma/vue-toaster'
const toast = createToaster()

function toastMessage (res){

  console.log("ERrEE",res.errors);
    if(res.status === 200){
      toast.success(res.data.message);
    }else{
      toast.error(res.errors.message) ;
    }
}

export default toastMessage;