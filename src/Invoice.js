import React, { Component } from 'react';

import InvoiceLine from './InvoiceLine.js'

function decodeObject(obj) {
  return JSON.parse(decodeURIComponent(escape(window.atob(obj))));
}
const DATA = window.location.hash ? decodeObject(window.location.hash.substring(1)) : {
  firstName: 'JOHN',
  lastName: 'SMITH',
  abn: '00 000 000 000',
  invoiceCode: 'XXX00001',
  invoiceDate: '08/08/2018',
  totals: {
    subtotal: 3000,
    gst: 300,
    total: 3300
  },
  billTo: [
    "Bob Jane",
    "1 Pizza Street",
    "Sydney, NSW 2000"
  ],
  notes: 'Time is billed in 15 minute increments.',
  lines: [
    {description: 'description goes here', unitPrice: 1000, quantity: 1, amount: 2},
    {description: 'description goes here', unitPrice: 1000, quantity: 1, amount: 2},
    {description: 'description goes here', unitPrice: 1000, quantity: 1, amount: 2},
    {description: 'description goes here', unitPrice: 1000, quantity: 1, amount: 2},
    {description: 'description goes here', unitPrice: 1000, quantity: 1, amount: 2},
  ],
  paymentMethods: [
    {
      methodName: 'Bank Transfer',
      fields: [
        {field: 'Account Name', value: 'John Smith'},
        {field: 'BSB', value: '000000'},
        {field: 'Account Number', value: '000000'},
        {field: 'Reference', value: 'XXX00001'}
      ]
    }
  ]
}

class Invoice extends Component {
  render() {
    return (
      <div>
        <div className="invoice-title">
          <span className="blue bold">{DATA.firstName}</span><span className="dark">{DATA.lastName}</span>
        </div>

        <hr />

        <div className="abn-and-invoice-id">
          <div className="abn bold dark">ABN: {DATA.abn}</div>
          <div className="invoice-id">
            <span className="bold dark">Tax Invoice: </span><span className="">#{DATA.invoiceCode}</span>
            <br />
            <span className="bold dark">Date: </span><span className="">{DATA.invoiceDate}</span>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-xs-5 col-left">
            <div className="section section-left">
              <div className="title">Bill To</div>

              <div className="content">
                {Array.apply(null, DATA.billTo).map(function(item, i){
                  return (<div key={"bill-to-text-" + i} className="">{item}</div>)
                }, this)}
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

        {Array.apply(null, DATA.lines).map(function(line, i){
          return (<InvoiceLine key={"line-" + i} description={line.description} unitPrice={line.unitPrice} quantity={line.quantity} total={line.amount} />)
        }, this)}

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
              <div className="text left black bold">${DATA.totals.subtotal}</div>
              <div className="text left black bold">${DATA.totals.gst}</div>
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
              <div className="text left black bold">${DATA.totals.total}</div>
            </div>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-xs-5 col-left">
            <div className="section section-left">
              <div className="title">Notes</div>

              <div className="content">
                {DATA.notes}
              </div>
            </div>
          </div>

          <div className="col-xs-7 col-right">
            <div className="section section-right">
              <div className="title">Payment Method</div>

              <div className="content">
              {Array.apply(null, DATA.paymentMethods).map(function(method, i){
                return (
                  <div>
                    <div className="row" key={"payment-method-row-" + i}>
                      <div className="col-xs-5"><span className="black bold">{method.methodName}</span></div>
                    </div>
                    <br />
                    {Array.apply(null, method.fields).map(function(item, j){
                      return (
                        <div className="row" key={"payment-method-field-row-" + j + '-' + i}>
                          <div className="col-xs-5"><span className="dark bold">{item.field}</span></div>
                          <div className="col-xs-7"><span className="black bold">{item.value}</span></div>
                        </div>
                      )
                    }, this)}
                  </div>
                )
              }, this)}
              </div>
            </div>
          </div>
        </div>

        {Array.apply(null, DATA.paymentMethod).map(function(item, j){
          return (
            <div className="row" key={"payment-method-row-" + j}>
              <div className="col-xs-5"><span className="dark bold">{DATA.paymentMethod[j].field}</span></div>
              <div className="col-xs-7"><span className="black bold">{DATA.paymentMethod[j].value}</span></div>
            </div>
          )
        }, this)}

        <br />
        <br />

        <div className="dark italic center">Thank you for your business.</div>

      </div>
    )
  }
}

export default Invoice;
