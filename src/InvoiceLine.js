import React, { Component } from 'react';

import { toFixed } from './utils.js' 

class InvoiceLine extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-2 col-right">
          <div className="section section-left">
            <div className="text">{this.props.line['Item']}</div>
          </div>
        </div>
        <div className="col-xs-4 col-left">
          <div className="section section-left">
            <div className="text">{this.props.line['Description']}</div>
          </div>
        </div>
        <div className="col-xs-2">
          <div className="section">
            <div className="text left">{this.props.line['Qty']}</div>
          </div>
        </div>
        <div className="col-xs-2">
          <div className="section">
            <div className="text left">${toFixed(this.props.line['Unit Price'])}</div>
          </div>
        </div>
        <div className="col-xs-2">
          <div className="section">
            <div className="text left black bold">${toFixed(this.props.line['Total (excl GST)'])}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default InvoiceLine;
