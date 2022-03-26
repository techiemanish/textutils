import React from "react";

export default function Alert(props) {
  const captalize = (word) => {
    let res = word.toLowerCase();
    return res.charAt(0).toUpperCase() + res.slice(1);
  };
  return (
    <div style={{height:'50px'}} class="text-center container">
      {props.alert && (
        <div className="container">
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>
              {captalize(props.alert.type)} : {props.alert.msg}
            </strong>
          </div>
        </div>
      )}
    </div>
  );
}
