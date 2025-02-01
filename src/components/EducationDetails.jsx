export default function EducationDetails({ educationInfo }) {
  
  return (
    <>
      {educationInfo.map((el, key) => (
        <div className="education__info-sub" key={key}>
          <h2 className="course__name">{el.courseName}</h2>
          <h3 className="school__name">{el.schoolName}</h3>
          <p className="address">{`${el.city}, ${el.country}`}</p>
        </div>
      ))}
    </>
  );
}
