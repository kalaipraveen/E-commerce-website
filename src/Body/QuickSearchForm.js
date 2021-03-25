import React from 'react'
import './QuickSearchForm.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function QuickSearchForm() {
  return (
      <table className="searchform-card">
        <tr className="searchform-head">
          <th className="gift-text">Gift Finder </th>
          <th className="table-head">OCCASION <ArrowForwardIosIcon  className="occasion-icon1"/></th>
          <th className="table-head">Gift Type <ArrowForwardIosIcon className="occasion-icon2" /></th>
          <th className="table-head no-border">Find Gifts</th>
        </tr>
  </table>
  )
}
