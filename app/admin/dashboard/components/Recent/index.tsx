import useRecent from "../../hooks/useRecent";
import RecentReservationItem from "./RecentReservationItem";

const Recent = () => {
  const recentItems: RecentReservation[] = useRecent();
  return (
    <>
      <ul className="recent__list">
        <li
          className="recent__item recent__item--header"
          style={{
            animationDelay: `${1 * 0.1}s`,
          }}
        >
          <div className="recent__item__info">
            <p className="recent__item__detail">
              <strong>Name</strong>
            </p>
          </div>
          <div className="recent__item__info">
            <p className="recent__item__detail">
              <strong>Arrival Date</strong>
            </p>
          </div>
          <div className="recent__item__info">
            <p className="recent__item__detail">
              <strong>Departure Date</strong>
            </p>
          </div>
        </li>
      </ul>

      <ul className="recent__list">
        {recentItems.map((item) => (
          <li
            key={item.id}
            className="recent__item"
            style={{
              animationDelay: `${item.id * 0.2}s`,
              gridTemplateColumns: `repeat(${
                Object.keys(item).length - 1
              }, 1fr)`,
            }}
          >
            <RecentReservationItem recentItem={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Recent;
