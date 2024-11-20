import React from "react";

const InputField = ({autocomplete,label,value,onChange,type='text',placeholder,required,id,wrapInDiv = true,className,divClassName,checked,styled = false,options = [],name,error}) =>{
    const input = type === 'checkbox' ? (
        styled ? (
        <>
        <input type={type}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        required={required}
        className={className}
        wrapInDiv = {wrapInDiv}
        id={id}
       />
       <label className={`btn btn-primary ${checked ? 'active' : ''}`} htmlFor={id}>
          {label}
        </label>
        </>
    ) : (
        <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="form-check-input"
        id={id}
      />
      <label className="form-check-label" htmlFor={id}>
          {label}
      </label>
        </>
    )

): type === 'radio' ? (
    options.map((option) => (
      <div key={option.value} className="form-check-inline me-2 mb-2">
        <input
          type="radio"
          id={option.value}
          name={name} // Group radios by name
          value={option.value}
          checked={value === option.value}
          onChange={onChange}
          className="btn-check"
        />
        <label className="btn btn-primary" htmlFor={option.value}>
          {option.label}
        </label>
      </div>
    ))
  ): (
    <>
    <label htmlFor={id} className="">{label}</label>
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="form-control"
      id={id}
      autoComplete={autocomplete}
    />
  </>
);

    return wrapInDiv ? (
        <div className={divClassName || "mb-3"}>
            {input}
            {error && <div className="text-danger">{error}</div>}
            </div>
      ) : (
        input
      );
}

export default InputField;