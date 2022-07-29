import React, { useState } from 'react';

function GetStatusBadge(
  status,
  size = 'small'
) {
  let classes = 'status-badge text-sm font-semibold text-white rounded-full';
  if (size === 'large') {
    classes += ' px-3 py-3';
  }
  else {
    classes += ' px-1.5 py-1.5';
  }
  if (status === 0) {
    return (
      <div className={classes + " bg-sky-500"}>New</div>
    );
  }

  if (status === 1) {
    return (
      <div className={classes + " bg-indigo-500"}>In Progress</div>
    );
  }

  if (status === 2) {
    return (
      <div className={classes + " bg-green-500"}>Completed</div>
    );
  }

  if (status === 3) {
    return (
      <div className={classes + " bg-rose-500"}>Canceled</div>
    );
  }

  if (status === 4) {
    return (
      <div className={classes + " bg-white"}>Total</div>
    );
  }

  // -1
  return (
    <div className={classes + " bg-rose-500"}>Error</div>
  );
}

export default GetStatusBadge;