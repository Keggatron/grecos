import React from "react";

export class SizeSelect extends React.Component {
  render() {
    const { input, multiple, options, value, ...rest } = this.props;
    const parse = event => {
      // This is what redux-form will hold:
      return JSON.parse(event.target.value);
    };
    return (
    //   <div
    //     className='selector-div'
    //     onBlur={event => input.onBlur(parse(event))}
    //     onChange={event => input.onChange(parse(event))}
    //     {...rest}
    //   > Select a size
    //   <ul classname='col-xs-3'>
    //     {options.map(option => (
    //         <li
    //           key={option.id}
    //           value={JSON.stringify(option)}
    //           onClick={input.value.id === option.id}
    //         >
    //           {option.label}
    //         </li>
    //     ))}
    //   </ul>
    //   </div>
    // );
    <select
        onBlur={event => input.onBlur(parse(event))}
        onChange={event => input.onChange(parse(event))}
        {...rest}
      >
        {options.map(option => (
          <option
            key={option.id}
            value={JSON.stringify(option)}
            selected={input.value.id === option.id}
            style={{ fontSize : "14px", fontWeight: "700", color: "#343a40" }}
          >
            {option.label}
          </option>
        ))}
      </select>
    );
  }
}
