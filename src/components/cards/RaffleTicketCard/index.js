import React from "react";
import barCodeImage from "../../../assets/images/bar-code.png";
import Barcode from 'react-barcode';
import { getLanguage, setLanguage, useTranslation } from 'react-multi-lang'
// const BarCode = ({ code = "0", sm = false }) => (
//   <div className="bar-code">
//     {/* {!sm && <p className="up">{code}</p>} */}
//     <BARCODE value={code} />
//     {/* {sm && <p className="sm">{code}</p>} */}
//   </div>
// );

const RaffleTicketCard = (props) => {
  const t = useTranslation()
  const { data } = props
  return (
    <div className="raffle-ticket">
      <div className="left-bar">
        <h2 className="left-bar-title">{t('raffles.raffle_ticket')}</h2>
        <div className="left-bar-content">
          <Barcode
            value={data?.raffle_number}
            width={2}
            height={40}
            background="#343845"
            lineColor="#fff"
            textPosition="top"
          />
        </div>
      </div>
      <div className="bar" />
      <div className="right-bar">
        <div className="bar-code">
          <Barcode
            value={data?.raffle_number}
            width={1}
            height={40}
            background="#343845"
            lineColor="#fff"
          />
        </div>
      </div>
    </div>
  )
}


export default RaffleTicketCard;
