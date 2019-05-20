import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


class CaptchaModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            submitted: false
        };

        this.toggle = this
            .toggle
            .bind(this);
            this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
            this.verifyCallback = this.verifyCallback.bind(this);
        
    }

    componentDidMount() {
        if (this.captchaDemo) {
            console.log("started, just a second...")
            this.captchaDemo.reset();

        }
      }    

      onLoadRecaptcha() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
    }
    verifyCallback(recaptchaToken) {
        // Here you will get the final recaptchaToken!!!  
        console.log(recaptchaToken, "<= your recaptcha token")
      }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
        console.log(this.props.address);

    }


    toggle2() {
        this.setState(prevState => ({
            submitted: true
        }));
        console.log("modal closed .submitted state: "+this.state.submitted)
        this.toggle();

    }

    callback = function (response) {
        console.log(response);
      };
      
    render() {
        return (
            <div>
                
                <Button
                    color= {this.state.submitted ? "success" : "danger"} 
                    style={{
                    color: "white"
                }}
                    onClick={() => this.toggle()}>
                    <strong>{this.state.submitted ? "✓ Submitted for Review" : "Submit for review" }</strong>
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle2}
                    className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Submit Location For Review</ModalHeader>
                    <ModalBody style={{padding:'30px'}}>
                    
                    <strong>📌 {this.props.address}</strong> <br /><br />
                     We will verify this location and add it as a valid Apple Pay accepting location as soon as possible:<br /><br /><strong>
                     </strong>
                        <Button style={{width:'100%'}} color="primary" onClick={() => this.toggle2()}><strong>Submit</strong></Button>

                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

export default CaptchaModal;