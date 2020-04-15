import React from 'react';
import { Link } from 'react-router-dom'

export default function() {
  return (
    <div>
      <p>Home</p>
      <Link to="/landing">Landing</Link>
    </div>
  );
}