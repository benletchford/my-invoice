import React, { Component } from 'react';

import InvoiceLine from './InvoiceLine.js'
import InvoiceLineHeader from './InvoiceLineHeader.js'

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

        <div className="abn light">ABN: 00 000 000 000</div>

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
              <div className="title">Invoice</div>

              <div className="content">
                <div className="dark bold">INVOICE REFERENCE</div>
                <div className="black bold">#XXX00001</div>
                <hr />
              </div>
            </div>
          </div>
        </div>

        <br />

        <InvoiceLineHeader />

        <InvoiceLine description={"description goes here, asdkjhasdf asdf asd fasd fas df asdf asdf asdf asd fas dfa sdf asdfa sfd"} unitPrice={1000} quantity={1} total={1000} />
        <hr />
        <InvoiceLine description={"description goes here"} unitPrice={1000} quantity={1} total={1000} />
        <hr />
        <InvoiceLine description={"description goes here"} unitPrice={1000} quantity={1} total={1000} />
        <hr />

        <br />

        <div className="row">
          <div className="col-xs-8 col-right"></div>
          <div className="col-xs-2 col-right">
            <div className="section section-left">
              <div className="text right black bold">Subtotal</div>
              <div className="text right black bold">GST</div>
            </div>
          </div>

          <div className="col-xs-2 col-right">
            <div className="section section-left">
              <div className="text right black bold">$3000</div>
              <div className="text right black bold">$300</div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Invoice;
