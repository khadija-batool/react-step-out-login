import React, { useState } from "react";
import { images } from "../config";
import { Button, Chip, SuccessModal } from "../components";

export const Preferences = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    openModal();
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="logo-holder">
          <img src={images.logo} alt="logo" className="img-fluid" />
        </div>
        <form className="auth-form" onSubmit={submitHandler}>
          <h1>Your Prefercences.</h1>
          <p>Let us know your preference so you can have a best date.</p>
          <div className="chipContainer">
            <p className="align-left">Outdoor Activities</p>
            <div className="chipHolder">
              <Chip label="Select All" id="odSelectAll" name="odSelectAll" />
              <Chip label="Hiking" id="hiking" name="hiking" />
              <Chip label="Cycling" id="cycling" name="cycling" />
              <Chip
                label="Rock Climbing"
                id="rockClimbing"
                name="rockClimbing"
              />
              <Chip label="Outdoor Golf" id="outdoorGolf" name="outdoorGolf" />
              <Chip
                label="Outdoor Ice Skating,"
                id="outDoorIceSkating"
                name="outDoorIceSkating"
              />
              <Chip
                label="Amusement Park"
                id="amusementPark"
                name="amusementPark"
              />
              <Chip label="Picnic" id="picnic" name="picnic" />
              <Chip label="Winery" id="winery" name="winery" />
              <Chip label="See More" id="odSeeMore" name="odSeeMore" />
            </div>
          </div>
          <div className="chipContainer">
            <p className="align-left">Indoor Activities</p>
            <div className="chipHolder">
              <Chip label="Select All" id="idSelectAll" name="idSelectAll" />
              <Chip label="Cinema" id="Cinema" name="male" />
              <Chip label="Theatre" id="Theatre" name="male" />
              <Chip label="Indoor Golf" id="Indoor Golf" name="male" />
              <Chip label="Swimming" id="Swimming" name="male" />
              <Chip label="Gym" id="Gym" name="male" />
              <Chip label="Spa" id="Spa" name="male" />
              <Chip label="Indoor Golf" id="male" name="male" />
              <Chip label="Darts" id="male" name="male" />
              <Chip label="Arcade" id="male" name="male" />
              <Chip label="Ping Pong" id="male" name="male" />
              <Chip label="Shuffle Board" id="male" name="male" />
              <Chip label="See More" id="male" name="male" />
            </div>
          </div>
          <div className="chipContainer">
            <p className="align-left">Restaurant Types</p>
            <div className="chipHolder">
              <Chip label="Select All" id="male" name="male" />
              <Chip label="Chinese" id="male" name="male" />
              <Chip label="Greek" id="male" name="male" />
              <Chip label="African" id="male" name="male" />
              <Chip label="British" id="male" name="male" />
              <Chip label="Mexican" id="male" name="male" />
              <Chip label="Swedish" id="male" name="male" />
              <Chip label="Latvian" id="male" name="male" />
              <Chip label="Italian" id="male" name="male" />
              <Chip label="Thai" id="male" name="male" />
              <Chip label="Russian" id="male" name="male" />
              <Chip label="Jewish" id="male" name="male" />
              <Chip label="Polish" id="male" name="male" />
              <Chip label="French" id="male" name="male" />
              <Chip label="See More" id="male" name="male" />
            </div>
          </div>
          <Button className="nextBtn" type="submit">
            Submit (3/3)
          </Button>
        </form>
      </div>
      <SuccessModal
        label="All Done!"
        message="Your account has been successfully registered. You can now proceed a trip or a reservation for your date."
        icon={images.checkMark}
        open={showModal}
        closeModal={closeModal}
      />
    </div>
  );
};