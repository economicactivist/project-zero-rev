
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

    handleShowGrowerLogin() {
        this.handleHideModal();
        this.modals = {...this.modals,
            showGrowerLogin: true,}
    }

    handleShowStaffLogin() {
        this.handleHideModal();
        this.modals = {...this.modals,
            showStaffLogin: true,}
    }

    handleShowGrowerRegister() {
        this.handleHideModal();
        this.modals = {...this.modals,
            showGrowerRegister: true,}
    }

    handleShowStaffRegister() {
        this.handleHideModal();
        this.modals = {...this.modals,
            showStaffRegister: true,}
    }

    handleShowGrowerDashboard() {
        this.handleHideModal();
        this.modals = {...this.modals,
            showGrowerDashboard: true,}
    }

    handleShowStaffDashboard() {
        this.handleHideModal();
        this.modals = {...this.modals,
            showStaffDashboard: true,}
    }

  



}
