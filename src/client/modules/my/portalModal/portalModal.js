import { LightningElement} from 'lwc';

export default class PortalModal extends LightningElement {
    

    handleGrowerClick(e) {
        console.log(e.target.dataset.growerLogin); //grower-login
        this.dispatchEvent(new CustomEvent('showmodal', { detail: e.target.dataset.growerLogin}));
    }
}