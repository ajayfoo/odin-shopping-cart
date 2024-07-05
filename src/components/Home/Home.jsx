import ProductCard from "../ProductCard/ProductCard";

export default function Home() {
  return (
    <>
      <ProductCard imgSrc="src/temp/jaggery.jpg" title="Jaggery" price={90} />
      <p>HOME</p>
    </>
  );
}
