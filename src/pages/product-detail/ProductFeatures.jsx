export function ProductFeatures({saleprice}) {

    const features =
    saleprice >= 100
      ? ["free home delivery", "30-days replacement guarantee"]
      : ["delivery charges apply", "7-days replacement guarantee"];
  return (
    <>
      <div className="features">
        <h2 className="section-title">Product Features</h2>

        <ul>
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

          <li>1-year manufacturer warranty</li>
          <li>Secure payment processing</li>
        </ul>
      </div>
    </>
  );
}
