async function getRecentItems() {
  const res = await fetch(`http://localhost:3000/api/reservation/recent`, {
    next: {
      revalidate: 60,
    },
  });
  const data = await res.json();
  return data.recentReservations;
}

const useRecent = async () => {
  const recentItems: RecentReservation[] = await getRecentItems();

  return recentItems;
};

export default useRecent;
