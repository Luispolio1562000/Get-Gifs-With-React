/* eslint-disable react/prop-types */

function GiftCard({ giftData, title, id, url }) {
  return (
    <div className="card">
      <p> {title}</p>
      <img src={url} alt="" />
    </div>
  );
}

export default GiftCard;
