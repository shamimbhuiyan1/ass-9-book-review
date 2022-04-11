import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-content">
          <h1>‘‘Come For Knowledge</h1>
          <h1>Share KnowLedge With Others’’</h1>
          <p>
            Sonchita is one of the popular collection of poems of Our National
            Poet <b>Kazi Nazrul Islam.</b>His selected and compiled some of his
            best poems and lyrics in a volume and named it ‘Sanchita’ – an
            anthology of selected poems and lyrics. The resourceful poems and
            lyrics in this anthology uphold human dignity, religious harmony,
            truth, beauty, pain and love. His poems validated the philosophy of
            human values and social justice. The superb poetic excellence is
            manifested in every page of this book—a masterpiece of literature.
          </p>
          <button className="button">See Details</button>
        </div>
        <img
          src="https://3.bp.blogspot.com/-lusLXX7oe88/VyEhbx2KlMI/AAAAAAAAI6k/Tk9y3VnfuE40OxvGE7Dw0Rom4t3_mArEgCLcB/s1600/Sonchita%2Bby%2BKazi%2BNazrul%2BIslam.jpg"
          alt=""
          title="Sonchita is popular Book of Kazi Nazrul islam "
        />
      </div>
    </div>
  );
};

export default Header;
