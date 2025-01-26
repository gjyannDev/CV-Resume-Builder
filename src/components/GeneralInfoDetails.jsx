export default function GeneralInfoDetails({ generalInfo }) {
  return (
    <div className="general__info-sub">
      <h1 className="name__text">{generalInfo.fullName}</h1>
      <div className="contact__details-container">
        <div className="contact__details">
          <p className="mobile__text">{`${generalInfo.mobileNum} `}</p>
          <p className="email__text">
            {generalInfo.email !== "" ? ` • ${generalInfo.email} ` : null}
          </p>
          <p className="portoflio__link">
            {generalInfo.portfolio !== "" ? `• ${generalInfo.portfolio}` : null}
          </p>
        </div>
        <div className="address__details">
          <p className="address__text">{generalInfo.address}</p>
        </div>
      </div>
    </div>
  );
}
