import {createToaster} from '@meforma/vue-toaster'
const toast = createToaster()

async function toastMessage (res){
    if(res.status === 200){
      toast.success(res.data.message);
    }else{
      toast.error(res.message);
    }
}

export default toastMessage;