import React, { Component } from 'react';

class InvoiceLineHeader extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-5 col-left">
          <div className="section section-left">
            <div className="title">Description</div>
          </div>
        </div>
        <div className="col-xs-7 col-right">

          <div className="row">
            <div className="col-xs-4"  style={{paddingRight:'5px'}}>
              <div className="section">
                <div className="title center">Unit Price</div>
              </div>
            </div>
            <div className="col-xs-4" style={{paddingLeft:'5px', paddingRight:'5px'}}>
              <div className="section">
                <div className="title center">Qty</div>
              </div>
            </div>
            <div className="col-xs-4" style={{paddingLeft:'5px'}}>
              <div className="section">
                <div className="title center">Amount</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default InvoiceLineHeader;
