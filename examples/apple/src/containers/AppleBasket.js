import React, { Component, PropTypes } from 'react';
import {  connect } from 'reace-redux';

import AppleItem from '../components/AppleItem';

class AppleBasket extends Component {
  constructor() {
    super();
  }
  
  render() {
    
    let { state } = this.props;
    
    let mockState = {
      isPicking: false,
      newAppleId: 3,
      apples: [
        {
          id: 1,
          weight: 235,
          isEaten: true
        },
        {
          id: 2,
          weight: 256,
          isEaten: false
        }
      ]
    };
    //模拟数据开关
    if(state === undefined ) state = mockState;
    
    let stats = {
      appleNow: {
        quality: 0,
        weight: 0
      },
      appleEaten: {
        quality: 0,
        weight: 0
      }
    }
    
    state.apples.map(apple => {
      let selector = apple.isEaten ? 'appleEaten' : 'appleNow';
      stats[selector].quality++;
      stats[selector].weight += apple.weight;
    });
    
    return (
      <div className="appleBusket">
        <div className="title">苹果篮子</div>
        
        <div className="stats">
          <div className="section">
            <div className="head">当前</div>
            <div className="content">
              {stats.appleNow.quality}个苹果，
              {stats.appleNow.weight}克
            </div>
          </div>
          <div className="section">
            <div className="head">当前</div>
            <div className="content">
              {stats.appleEaten.quality}个苹果，
              {stats.appleEaten.weight}克
            </div>
          </div>
        </div>
        
        <div className="appleList">
          {/*<div className="empty-tip">苹果篮子空空如也</div>*/}
          {state.apples.map(apple => <AppleItem state={apple}>)}
        </div>
        
        <div className="btn-div">
          <button>摘苹果</button>
        </div>
        
      </div>
    );
  }
}

// select是一个state筛选器，功能是总是选择state中的appleBusket作为本容器的state
function select(state) {
  return {
    state: state.appleBasket
  }
}

export default connect(select)(AppleBasket);