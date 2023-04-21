import React from 'react';
import nothingtosee from '../../assets/2903540.webp';

function Nothing(){
  return(
    <div className='table--data table--nothinghere'>
      <img src={nothingtosee} alt='nothing to see here' />
      <p>Nothing to see here...</p>
    </div>
  );
}
function Table(props) {
  if(props.tabledata[0]){
  return(
    <div className='table--data'>
      <table cellPadding={7} cellSpacing={0} >
        <thead>
          <tr>
            <th></th>
            <th>Ticket No.</th>
            <th>Project Name</th>
            <th>State</th>
            <th>Mob No./Email</th>
            <th>Bank Name</th>
            <th>Title</th>
            <th>Status</th>
            <th>Date/Time</th>
          </tr>
        </thead>
        <tbody>
          {props.tabledata.map((val, key) => {
            return(
              <tr key={key}>
                <td>{key+1}</td>
                <td>{val.id}</td>
                <td>{val.type}</td>
                <td>{val.state}</td>
                <td>{val.mob ? val.mob : ''}<br />{val.email ? val.email : ''}</td>
                <td>{val.bankName}</td>
                <td><button className='button-48' onClick={() => props.handleClick(key)}><span className='text'>{val.title}</span></button></td>
                <td>
                  <div className={val.stat.trim() === 'Waiting for support' ? 'waiting' : val.stat.trim() === 'On Hold' ? 'onhold' : val.stat.trim() === 'Resolved' ? 'resol' : 'inprog'}>
                    <p>{val.stat.trim() === 'Waiting for support' ? <i className="ri-hourglass-2-fill"></i> : val.stat.trim() === 'Resolved' ? <i className="ri-checkbox-circle-line"></i> : val.stat.trim() === 'On Hold' ? <i className="ri-timer-line"></i> : <i className="ri-contrast-fill"></i>} {val.stat}</p>
                  </div>
                  
                </td>
                <td>{val.created}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
  } else {
    return(<Nothing />);
  }
}
export default Table;