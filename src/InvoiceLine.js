import React, { Component } from 'react';

class InvoiceLine extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-2 col-left">
          <div className="section section-left">
            <div className="text">{this.props.item}</div>
          </div>
        </div>
        <div className="col-xs-4 col-left">
          <div className="section section-left">
            <div className="text">{this.props.description}</div>
          </div>
        </div>
        <div className="col-xs-2">
          <div className="section">
            <div className="text left">{this.props.quantity}</div>
          </div>
        </div>
        <div className="col-xs-2">
          <div className="section">
            <div className="text left">${this.props.unitPrice}</div>
          </div>
        </div>
        <div className="col-xs-2">
          <div className="section">
            <div className="text left black bold">${this.props.total}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default InvoiceLine;
