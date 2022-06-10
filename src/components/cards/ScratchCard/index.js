import React from "react";
import scratchImage from "../../../assets/images/scratch-img.jpeg";

const ScratchCard = () => (
  <div className="mx-auto" style={{ maxWidth: 250 }}>
    <h3 className="s-title">Next Scratch Card</h3>
    <img className="w-100" src={scratchImage} alt="scratch" />
    <div className="text-center scratch-card">
      <h5>Spend 119 AED more</h5>
      <p>You will get this money to Grofers Cash once your order is delivered</p>
    </div>
  </div>
);

export default ScratchCard;
