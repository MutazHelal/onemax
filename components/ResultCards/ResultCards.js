import React, { useEffect, useState } from "react";
import { ListingCard } from "./Listing";
import ResultSelfCard from "./ResultSelfCard";
export default function ResultCards({ search = null }) {
  const [backup, setbackup] = useState(ListingCard);
  const [showCard, setshowCard] = useState(ListingCard);

  useEffect(() => {
    if (search != null) {
      if (search != "") {
        let FilterData = backup.filter((EachObj) => {
          let LowerAddress = EachObj.address.toLowerCase();
          if (LowerAddress.includes(search.toLowerCase())) {
            return 1;
          }
        });
        setshowCard(FilterData);
      } else {
        setshowCard(ListingCard);
      }
    }
  }, [search, backup]);
  return (
    <div className="ResultCards">
      {showCard.map((EachCard, key) => (
        <ResultSelfCard
          key={key}
          img={EachCard.image}
          price={EachCard.price}
          address={EachCard.address}
        />
      ))}
    </div>
  );
}
