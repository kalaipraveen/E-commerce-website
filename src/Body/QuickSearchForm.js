import React from 'react'
import './QuickSearchForm.css'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function QuickSearchForm() {
  return (


      <table className="searchform-card">
        <tr className="searchform-head">
          <th className="gift-text">Gift Finder </th>
          <th className="table-head">OCCASION <ArrowRightIcon /></th>
          <th className="table-head">Gift Type <ArrowRightIcon /></th>
          <th className="table-head no-border">Find Gifts</th>
        </tr>

     

      {/* <div className="searchform-card">
        <div className="gift-text">Gift Finder
        </div>
        <div className="table-head">OCCASION
        <div className="sub-content">Birthday, Anniversary, etc..,</div>
        </div>
        <div className="table-head">Gift Type
        <div className="sub-content">Flowers, Plants, Cakes, etc..,</div></div>
        <div className="table-head no-border">FIND GIFTS
        </div>
  </div> */}
  </table>
  )
}
