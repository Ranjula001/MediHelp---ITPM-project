import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignOut = () => {
  const handleSignOut = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be signed out.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sign Out',
      cancelButtonText: 'Cancel',
      dangerMode: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform sign-out logic here
        // You can clear the user session, cookies, or perform any other necessary actions

        // Navigate to the login page
        window.location.href = '/'; // Replace '/login' with the actual login page URL
      }
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <Link  onClick={handleSignOut}>
            <FiLogOut />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignOut;
