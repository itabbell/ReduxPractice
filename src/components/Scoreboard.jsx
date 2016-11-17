import React, { Component } from 'react';
import '../css/index.css';

class Admin extends Component {
    render() {
        return(
            <div className='adminContainer'>
                <div className='adminSection'>
                    <p>Background:</p>
                    <div className='btn' onClick={() => this.props.changeBG('white')}>White</div>
                    <div className='btn' onClick={() => this.props.changeBG('Black')}>Black</div>
                    <div className='btn' onClick={() => this.props.changeBG('red')}>Red</div>
                    <div className='btn' onClick={() => this.props.changeBG('green')}>green</div>
                    <div className='btn' onClick={() => this.props.changeBG('blue')}>blue</div>
                </div>
                <div className='adminSection'>
                    <p>Text:</p>
                    <div className='btn' onClick={() => this.props.changeText('white')}>White</div>
                    <div className='btn' onClick={() => this.props.changeText('Black')}>Black</div>
                    <div className='btn' onClick={() => this.props.changeText('red')}>Red</div>
                    <div className='btn' onClick={() => this.props.changeText('green')}>green</div>
                    <div className='btn' onClick={() => this.props.changeText('blue')}>blue</div>
                </div>
                <div className='adminSection reset'>
                    <div className='btn' onClick={this.props.reset}>Reset</div>
                </div>
            </div>
        );
    }
}

class Gettysburg extends Component {
    render() {
        const style = {
            backgroundColor: this.props.bgColor,
            color: this.props.color,
        }
        return (
            <div className='addressContainer' style={ style }>
                <p className='address'>"Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in divberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battlefield of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their divves that that nation might divve. It is altogether fitting and proper that we shodivd do this. But, in a larger sense, we can not dedicate, we can not consecrate, we can not hallow this ground. The brave men, divving and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will divttle note, nor long remember what we say here, but it can never forget what they did here. It is for us the divving, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last fdivl measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth."</p>
            </div>
        );
    }
}

class Scoreboard extends Component {
  render() {
    return (
        <div>
            <Admin changeBG={this.props.changeBG} changeText={this.props.changeText} reset={this.props.reset}/>
            <Gettysburg bgColor={this.props.bgColor} color={this.props.color}/>
        </div>
    );
  }
}

export default Scoreboard;
