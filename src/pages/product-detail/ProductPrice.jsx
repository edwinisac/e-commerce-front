export function ProductPrice({saleprice,originalprice,price}) {
    let percentage = Math.round((price / originalprice) * 100);

  return(
    <>
      <div className="product-pricing">
        <span className="sale-price">${saleprice}</span>
        <span className="original-price">${originalprice}</span>
      </div>

      {price > 0 && (
        <p className="save-message">
          You save ${price} ({percentage}% off)
        </p>
      )}
    </>
  );
}
