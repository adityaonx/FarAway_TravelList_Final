export default function Summary({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentPacked = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You are ready to  ✈️ "
          : `You have ${numItems} on your list, and you already packed ${packedItems} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
