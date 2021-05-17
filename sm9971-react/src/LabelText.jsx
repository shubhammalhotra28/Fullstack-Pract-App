import React from "react";


class LabelText extends React.Component {
    


    postData = (field,value) => {

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                menuItem: this.props.selectedMenuItem[0], field, value
            })

        };
        fetch('/postUpdatedData',requestOptions)
        .then((response) => {
            if (response.status === 200){
                console.log('response status = 200');
                console.log(response);
                return response.json();
            }
            else{
                console.log('error');

            }
        }
        )
        .catch((error) => {
            console.log(error);
          }
        )
    }


    setTxtLetter = (event) => {

        var where = this.props.value;
        var value = event;

        this.postData(where,value);
        console.log(event);
        console.log('props = ',this.props);
        console.log('value of = ',this.props.value);
        console.log('selected menu item ' + this.props.selectedMenuItem);
    }

    render () {
        console.log("Label text render ", this.props.selectedMenuItem);
        return (
            <div>
                <label className="card-text, beautify-label">
                        {this.props.value}
                    </label>
                    {/* onChange={event => this.setTxtLetter(event.target.value)} */}
                    <input className="card-text, beautify-input" type="text" defaultValue={this.props.defaultValue} onBlur={event => this.setTxtLetter(event.target.value)} /> 
                    <br/>
                    
            </div>
        );
    }


}

export default LabelText