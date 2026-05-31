import { useSortable } from "@dnd-kit/react/sortable";

function SourtableItems({ id, index }) {
  const { ref } = useSortable({ id, index });
  return <></>;
}
export default SourtableItems;
