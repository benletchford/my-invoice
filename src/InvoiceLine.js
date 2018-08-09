import React, { Component } from 'react';

class InvoiceLine extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-5 col-left">
          <div className="section section-left">
            <div className="text right black bold">{this.props.description}</div>
          </div>
        </div>
        <div className="col-xs-3">
          <div className="section">
            <div className="text right black bold">${this.props.unitPrice}</div>
          </div>
        </div>
        <div className="col-xs-2">
          <div className="section">
            <div className="text right black bold">{this.props.quantity}</div>
          </div>
        </div>
        <div className="col-xs-2">
          <div className="section">
            <div className="text right black bold">${this.props.total}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default InvoiceLine;
