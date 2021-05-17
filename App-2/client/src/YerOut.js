import React, { Component } from 'react';
import ButtonBox from './components/buttonBox';
import LineScore from './components/lineScore';
import TheCount from './components/theCount';
import WinButton from './components/winButton';
import './yer_out.css';

class YerOut extends Component{
    constructor(props){
      super(props);
      this.state = this.initialState()
    }

    /*
        Returns a clean state to start from
            * inning_runs - represents the number of runs a team scored for a
                            given inning. Nominally, these start at 1, but we'll
                            start at 0 and display i+1
            * is_home_at_bat - tracks which half of the inning we're in
            * current_inning - tracks which inning we're in
            * hits - running total number of hits each team has had over the
                     whole game
            * errors - running total number of errors each team has had over the
                     whole game
            * balls - tracks the current batter's number of balls
            * strikes - tracks the current batter's number of strikes
            * outs - tracks the number of outs the team has had this half inning
            * server_status - shows a status update of the last server post
    */
    initialState() {
        return {
            inning_runs: {
                away: [null, null, null, null, null, null, null, null, null],
                home: [null, null, null, null, null, null, null, null, null]
            },
            is_home_at_bat: false,
            current_inning: 0,
            hits: {
                away: 0,
                home: 0
            },
            errors: {
                away: 0,
                home: 0
            },
            balls: 0,
            strikes: 0,
            outs: 0,
            winningteam: null,
            server_status: ''
        }
    }


    onWin = () => {

    }

    /*
        Returns the string of the team currently at bat
    */
   atBat(){
       return this.state.is_home_at_bat ? "home" : "away"
    }

    /*
        Returns the array of runs per inning for the team currently at bat
    */
    atBatInningArray() {
        return this.state.inning_runs[this.state.at_bat]
    }

    /* When you press "Hit", increment the at-bat team's hit counter */
    onHit(){
        // debugger;
        console.log('onHit');
        let new_hits = {
            home: this.state.hits["home"],
            away: this.state.hits["away"],
        }
        console.log(this.atBat());
        new_hits[this.atBat()] += 1
        console.log('onHit check consoleog');
        this.setState({
                hits: new_hits 
            });
    }

    /* When you press "Error", increment the NOT at-bat team's error counter */
    onError(){
        console.log('onErrror');
        let new_errors = {
            home: this.state.errors["home"],
            away: this.state.errors["away"],
        }
        const notAtBat = this.state.is_home_at_bat ? 'away' : 'home';
        new_errors[notAtBat] += 1
        // set State
        this.setState({
            errors: new_errors
        });
    }

    /*
        When we press "Run", increment the run count for the inning for the
        team that's at-bat.
    */
    onRun(){
        console.log('onRun');
        let new_state = {
            inning_runs: {
                away: Array.from(this.state.inning_runs.away),
                home: Array.from(this.state.inning_runs.home)
            }
        }

        console.log('onRun');
        new_state.inning_runs[this.atBat()][this.state.current_inning] += 1

        let awayScoreArray = new_state.inning_runs['away']
        let awayScoreSum = awayScoreArray.reduce(function(a,b){
            return a + b;
        },0);

        let homeScoreArray = new_state.inning_runs['home']
        let homeScoreSum = homeScoreArray.reduce(function(a,b){
            return a + b;
        },0);
        let winningteam =  awayScoreSum > homeScoreSum ? "Away" : "Home"
        if (homeScoreSum === awayScoreSum){
            winningteam = "Tie";
        }
        this.setState(new_state);
        this.setState({
            winningteam : winningteam
        });
        this.postData(awayScoreSum,homeScoreSum);
        
    
    }

    /*
        When the at-bat team reaches 3 outs, we end the half-inning.
        If the home team was at-bat, we go to the next inning
        If the away team was at-bat, we just switch who is at bat but keep the inning
        This colloquially called "top" or "bottom"
    */
    endInning(){
        let current_inning = this.state.current_inning;
        let new_state = {
            is_home_at_bat: !this.state.is_home_at_bat,
            inning_runs: {
                away: Array.from(this.state.inning_runs.away),
                home: Array.from(this.state.inning_runs.home)
            },
            current_inning: current_inning
        }
        if(this.state.inning_runs[this.atBat()][current_inning] == null){
            new_state.inning_runs[this.atBat()][current_inning] = 0
        }
        if(!new_state.is_home_at_bat) {
            new_state.current_inning += 1
        }
        this.setState(new_state)
    }

    /*
        When we record an out, we increment the counter. If the team is at their
        3rd out, we end the half-inning
    */
    onOut(){
        let new_state = { outs: this.state.outs + 1 }
        if(new_state.outs >= 3){
            this.endInning()
            new_state.outs = 0
        }
        this.setState(new_state)
    }

    /*
        When we press the "ball" button, increment the proper counter.
        If we reach 4 balls, reset both balls and strikes.
        (This is called a "walk", but we're not tracking that count)
    */
    onBall(){
        let new_state = { balls: this.state.balls + 1 }
        if(new_state.balls >= 4) {
            new_state.balls = 0
            new_state.strikes = 0
        }
        this.setState(new_state)
    }

    /*
        When we press the "strike" button, increment the proper counter.
        If we reach 3 strikes, reset both balls and strikes, and mark an out.
        This could potentially trigger an end of inning, too.
        (This is called a "walk", but we're not tracking that count)
    */
    onStrike(){
        let new_state = {strikes: this.state.strikes + 1}
        if(new_state.strikes >= 3){
            new_state.balls = 0
            new_state.strikes = 0
            this.onOut()
        }
        this.setState(new_state)
    }

    onReset(){
        this.setState(this.initialState())
    }


    checkData = () => {
        console.log('this.state.hits = ',this.state.hits);
        console.log('this.state.errors = ',this.state.errors);
    }

    /*
        PostData : this post data back to the db with total score of both the 
        teams till now
    */
    postData = (away_score,home_score) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                home_score : home_score,
                away_score : away_score     
            })

        }
        fetch('/postData',requestOptions)
        .then((response) => {
            if (response.status === 200){
                console.log('response = pass (200)');
                console.log('response = ',response);
                return response.json();
            }
            else {
                console.log('error');
            }
        }
        )
        .catch((error) => {
            console.log(error);
        }
        )

    }


    addWinningBorder = () => {
        var current = this.atBat();
        console.log('current = ',current);
        
        var borderCurrent = document.getElementById(current);
        if (borderCurrent == null){
            return null; // edge case wen launch
        }
        borderCurrent.classList.add('atBat');
        var notAtBat = this.state.is_home_at_bat ? 'away' : 'home';
        var removeBorder = document.getElementById(notAtBat);
        if (removeBorder == null){
            return;
        }
        removeBorder.classList.remove('atBat');
    
    }

    render(){
        return (
            <div class="yer-out-app">
                <LineScore inning_runs={this.state.inning_runs}
                           hits={this.state.hits}
                           errors={this.state.errors}
                           whoBatting = {this.state.is_home_at_bat}
                           />
                {this.checkData()}
                <TheCount  balls={this.state.balls}
                           strikes={this.state.strikes}
                           outs={this.state.outs}/>
                <WinButton winningteam={this.state.winningteam}/>
                <ButtonBox onHit={() => this.onHit()}
                           onError={() => this.onError()}
                           onRun={() => this.onRun()}
                           onOut={() => this.onOut()}
                           onBall={() => this.onBall()}
                           onStrike={() => this.onStrike()}
                           onReset={() => this.onReset()}
                           />
                {this.addWinningBorder()}
                <div class="server-status">
                    {this.state.server_status}
                </div>
                <a href="http://localhost:5000/score-updates">See score updates on server</a>
            </div>
        )
    }
}

export default YerOut;  