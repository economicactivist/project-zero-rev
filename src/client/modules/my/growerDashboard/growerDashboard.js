import { LightningElement} from 'lwc';

export default class GrowerDashboard extends LightningElement {
    // counter = 0;
    
    // handleAddGrowingStageItem(e) {
    //     this.template.querySelector('.growing-stage-div').classList.add(`growing-stage-item-${this.counter}`);
    //     // this.template.querySelector(`.growing-stage-item-${this.counter}`).innerHTML = e.target.value;
    //     console.log('working')
    // }

    handleClick(e) {
       let selectedRecord = e.target.title;
        console.log(selectedRecord);
        this.dispatchEvent(
            new CustomEvent('selectedrecord', {
                detail: selectedRecord
            })
        );
    }


}