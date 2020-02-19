import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {addFeature} from '../actions/action';

import { connect } from "react-redux";

const AdditionalFeatures = props => {
  // console.log(props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
        )}
    </div>
  );
  
};
const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}
export default connect(mapStateToProps,{addFeature}) (AdditionalFeatures);

//using connect to connect component to redux store which holds state and init val
//connect is function takes 2 args 1- func (mapsStateToProps) brings in our state from the store and passes it as props  2-arg- object of action creators

