import React, { Component, PropTypes } from 'react'

export default class Picker extends Component {
  render() {
    const { value, onChange, options } = this.props;
    
    const optionsObj = options.map( option => 
        <option value={ option } key={ option }>
            { option }
        </option>
    );

    return (
      <span>
        <h1>{value}</h1>
        <select onChange={e => onChange(e.target.value)}
                value={value}>
            { optionObj }
        </select>
      </span>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

Picker.defaultProps = {
    options: [''],
    value: '',
    onChange: () => {}
}
