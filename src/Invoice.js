import React, { Component } from 'react';

import moment from 'moment';

import InvoiceLine from './InvoiceLine.js'
import { toFixed } from './utils.js'

function decodeObject(obj) {
  return JSON.parse(decodeURIComponent(escape(window.atob(obj))));
}

const DATA = window.location.hash ? decodeObject(window.location.hash.substring(1)) : {
  'First Name': 'JOHN',
  'Last Name': 'SMITH',
  'ABN': '00 000 000 000',
  'Invoice Code': 'XXX00001',
  'Invoice Date': '2018-08-08',
  'Invoice Due Date': '2018-09-08',
  'Total (excl GST)': 3000,
  'Total (incl GST)': 300,
  'GST': 300,
  billTo: [
    "Bob Jane",
    "1 Pizza Street",
    "Sydney, NSW 2000"
  ],
  Notes: 'Time is billed in 15 minute increments.',
  lines: [
    {'Item': 'Development', 'Description': 'description goes here', 'Unit Price': 1000, 'Qty': 100, 'Total (excl GST)': 20000, 'GST': '10%'},
    {'Item': 'Development', 'Description': 'description goes here', 'Unit Price': 1000, 'Qty': 100, 'Total (excl GST)': 20000, 'GST': '10%'},
    {'Item': 'Development', 'Description': 'description goes here', 'Unit Price': 1000, 'Qty': 100, 'Total (excl GST)': 20000, 'GST': '10%'},
    {'Item': 'Development', 'Description': 'description goes here', 'Unit Price': 1000, 'Qty': 100, 'Total (excl GST)': 20000, 'GST': '10%'}
  ],
  'paymentMethods': [
    {
      'Method Name': 'Bank Transfer',
      'Account Name': 'John Smith',
      'Account Number': '000000',
      'BSB': '000000',
      'Reference': 'XXX00001'
    }
  ]
}

class Invoice extends Component {
  render() {
    return (
      <div>
        <div className="invoice-title">
          <span className="blue bold">{DATA['First Name']}</span><span className="dark">{DATA['Last Name']}</span>
        </div>

        <hr />

        <div className="abn-and-invoice-id">
          <div className="abn bold dark">ABN: {DATA['ABN']}</div>
          <div className="invoice-id">
            <span className="bold dark">Tax Invoice: </span><span className="">#{DATA['Invoice Code']}</span>
            <br />
            <span className="bold dark">Date: </span><span className="">{moment(DATA['Invoice Date']).format('DD/MM/YYYY')}</span>
            <br />
            <span className="bold dark">Due Date: </span><span className="">{moment(DATA['Invoice Due Date']).format('DD/MM/YYYY')}</span>
          </div>
        </div>

        <br />
        <br />

        <div className="row">
          <div className="col-xs-6 col-left">
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
          <div className="col-xs-2 col-right">
            <div className="section section-left">
              <div className="text left dark bold">Item</div>
            </div>
          </div>
          <div className="col-xs-4 col-left">
            <div className="section section-left">
              <div className="text left dark bold">Description</div>
            </div>
          </div>
          <div className="col-xs-2">
            <div className="section">
              <div className="text left dark bold">Qty</div>
            </div>
          </div>
          <div className="col-xs-2">
            <div className="section">
              <div className="text left dark bold">Unit Price</div>
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
          return (
            <div key={"line-" + i}>
              <InvoiceLine line={line} />
              {(i !== DATA.lines.length - 1) ? <hr /> : ''}
            </div>
          )
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
              <div className="text left black bold">${toFixed(DATA['Total (excl GST)'])}</div>
              <div className="text left black bold">${toFixed(DATA['GST'])}</div>
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
              <div className="text left black bold">${toFixed(DATA['Total (incl GST)'])}</div>
            </div>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-xs-6 col-left">
            <div className="section section-left">
              <div className="title">Notes</div>

              <div className="content">
                {DATA['Notes']}
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-right">
            <div className="section section-right">
              <div className="title">Payment Method</div>

              <div className="content">
              {Array.apply(null, DATA.paymentMethods).map(function(method, i){
                return (
                  <div key={"payment-method-row-" + i}>
                    <div className="row">
                      <div className="col-xs-5"><span className="black bold">{method['Method Name']}</span></div>
                    </div>
                    <br />
                    {Array.apply(null, Object.keys(method)).map(function(key, i){
                        if(key === 'Method Name') return ('')

                        return (
                          <div className="row" key={"method-field-" + i + '-' + key}>
                            <div className="col-xs-5"><span className="dark bold">{key}</span></div>
                            <div className="col-xs-7"><span className="black bold">{method[key]}</span></div>
                          </div>
                        )
                    })}
                    <div className="row">
                      <div className="col-xs-5"><span className="dark bold">Reference</span></div>
                      <div className="col-xs-7"><span className="black bold">{DATA['Invoice Code']}</span></div>
                    </div>
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
