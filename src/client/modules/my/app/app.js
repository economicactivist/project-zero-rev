
import { LightningElement, track} from 'lwc';

export default class App extends LightningElement {

    @track modals = {
        hidePortalModal: false,
        showGrowerLogin: false,
        showStaffLogin: false,
        showGrowerRegister: false,
        showStaffRegister: false,
        showGrowerDashboard: false,
        showStaffDashboard: false,
   }

   handleHideModal() {
        this.modals = {...this.modals,
            hidePortalModal: false,
            showGrowerLogin: false,
            showStaffLogin: false,
            showGrowerRegister: false,
            showStaffRegister: false,
            showGrowerDashboard: false,
            showStaffDashboard: false,
        }
    }   

    handleHidePortalModal() {
        this.handleHideModal();
         this.modals = {...this.modals,
            hidePortalModal: true,}
    }

    handleShowPortalModal() {
        this.handleHideModal();
            this.modals = {...this.modals,
            hidePortalModal: false,}
    }


    // handleShowGrowerLogin() {
      
        
    // }

    handleShowStaffLogin() {
        this.handleHideModal();
        this.modals = {...this.modals,
            showStaffLogin: true,}
    }

 

    handleShowGrowerDashboard(e) {
        // this.handleHideModal();
        // this.modals = {...this.modals,
        //     showGrowerDashboard: true,}
        console.log('working')
        console.log(e.detail)
        e.preventDefault();
        if (e.detail === 'grower-login') {
            this.handleHideModal();
            this.modals = {...this.modals,
                showGrowerDashboard: true,}
        }
    }

    handleShowStaffDashboard() {
        this.handleHideModal();
        this.modals = {...this.modals,
            showStaffDashboard: true,}
    }

  



}
