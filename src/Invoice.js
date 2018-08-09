import React, { Component } from 'react';

import InvoiceLine from './InvoiceLine.js'

const DATA = {
  firstName: 'JOHN',
  lastName: 'SMITH'
}

class Invoice extends Component {
  render() {
    return (
      <div>
        <div className="invoice-title">
          <span class="blue bold">{DATA.firstName}</span><span class="dark">{DATA.lastName}</span>
        </div>

        <hr />

        <div className="abn-and-invoice-id">
          <div className="abn bold dark">ABN: 00 000 000 000</div>
          <div className="invoice-id">
            <span className="bold dark">Invoice: </span>
            <span className="bold black">#XXX00001</span>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-xs-5 col-left">
            <div className="section section-left">
              <div className="title">Bill To</div>

              <div className="content">
                <div className="black bold">Bob Jane</div>
                <div className="black bold">1 Pizza Street</div>
                <div className="black bold">Sydney, NSW 2000</div>
              </div>
            </div>
          </div>
          <div className="col-xs-7 col-right">
            <div className="section section-right">
              <div className="title">Payment Method</div>

              <div className="content">
                <div className="row">
                  <div className="col-xs-5"><span className="dark bold">Invoice Reference</span></div>
                  <div className="col-xs-7"><span className="black bold">#XXX00001</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="row">
          <div className="col-xs-5 col-left">
            <div className="section section-left">
              <div className="text left dark bold">Description</div>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="section">
              <div className="text left dark bold">Unit Price</div>
            </div>
          </div>
          <div className="col-xs-2">
            <div className="section">
              <div className="text left dark bold">Qty</div>
            </div>
          </div>
          <div className="col-xs-2">
            <div className="section">
              <div className="text left dark bold">Amount</div>
            </div>
          </div>
        </div>

        <br />

        <InvoiceLine description={"description goes here, asdkjhasdf asdf asd fasd fas df asdf asdf asdf asd fas dfa sdf asdfa sfd"} unitPrice={1000} quantity={1} total={1000} />
        <hr />
        <InvoiceLine description={"description goes here"} unitPrice={1000} quantity={1} total={1000} />
        <hr />
        <InvoiceLine description={"description goes here"} unitPrice={1000} quantity={1} total={1000} />

        <br />
        <br />

        <div className="row">
          <div className="col-xs-8"></div>
          <div className="col-xs-2">
            <div className="section section-left">
              <div className="text left dark bold">Subtotal</div>
              <div className="text left dark bold">GST</div>
            </div>
          </div>

          <div className="col-xs-2">
            <div className="section section-left">
              <div className="text left black bold">$3000</div>
              <div className="text left black bold">$300</div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-xs-8"></div>
          <div className="col-xs-2">
            <div className="section section-left">
              <div className="text left dark bold">Total Due</div>
            </div>
          </div>

          <div className="col-xs-2">
            <div className="section section-left">
              <div className="text left black bold">$3300</div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="dark italic center">Thank you for your business.</div>

      </div>
    )
  }
}

export default Invoice;
