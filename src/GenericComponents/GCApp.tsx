import List from "./List";

export default function GCApp() {
  return (
    // you can also define types directly in your List component as such:
    <List<{ id: number; name: string; age?: number }>
      items={[
        { id: 1, name: "Erik", age: 36 },
        { id: 2, name: "Sally", age: 30 },
      ]}
      getKey={item => item.id}
      renderItem={item => <div>{item.name}</div>}
    />
  );
}
