import Cards from "@/components/Cards";
import list from "./list";
import Modal from "./Modal";

const HomePage = () => {
  const grouped = Object.entries(
  list.reduce((acc, { type, key }) => {
    if (!acc[type]) acc[type] = new Set();
    key.forEach(k => acc[type].add(k));
    return acc;
  }, {})
).map(([title, keySet]) => ({
  title,
  keys: [...keySet].sort()
}));

    return(
      <>
        <Modal list={grouped} />
        <Cards list={list}/>
      </>
    )
}

export default HomePage;