import React from 'react';



class WinButton extends React.Component {
    

    render (){
            
        if (this.props.winningteam === null) {
            return null;
        }
        else if (this.props.winningteam === "Tie") {
            return (
                <div>
                    <h4>
                        {this.props.winningteam}
                    </h4>
                </div>
            );
        }
        return (
            
            <div>
                <h4>
                    {this.props.winningteam} is winning
                </h4>
            </div>
        );
    }


}

export default WinButton;