import React, { useState } from "react";
import "./Profile.css";

interface UserData {
  usertype: string;
  name: string;
  fathersname: string;
  mothersname: string;
  dob: string;
  nid: string;
}

const Profile = () => {
  // Initialize userdata with default values to avoid undefined access
  const [userdata, setUserData] = useState<UserData | null>(null);

  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-2">
          <div className="row">
            {/* Left Section: User Avatar */}
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">{userdata?.name || "N/A"}</h5>
                  <p className="text-muted mb-1">
                    User Type: {userdata?.usertype || "N/A"}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button className="exit-btn">EXIT</button>
              </div>
            </div>

            {/* Right Section: User Info */}
            <div className="col-lg-8">
              <div className="card mb-4">
                {/* Header */}
                <div className="d-flex bg-info bg-opacity-75 shadow-sm">
                  <h2 className="mx-auto mt-2 mb-3">Voter's Info</h2>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 fw-bold">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="mb-0">{userdata?.name || "N/A"}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 fw-bold">Father's Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="mb-0">{userdata?.fathersname || "N/A"}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 fw-bold">Mother's Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="mb-0">{userdata?.mothersname || "N/A"}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 fw-bold">Date of Birth</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="mb-0">{userdata?.dob || "N/A"}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 fw-bold">NID</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="mb-0 text-danger fw-bold">
                        {userdata?.nid || "N/A"}
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <button className="cast-vote-btn">CAST YOUR VOTE</button>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Profile;