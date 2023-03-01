// Import des composants utilisés dans la page Home
//import Header from '../components/Header';
import Banner from "../components/Banner";
import Card from "../components/Card";
// Import du fichier JSON contenant la liste des produits
import productsList from "../products/products.json";
import background from "../assets/IMG_1_.png";

// Définition de la fonction Home qui retourne le contenu de la page
function Home() {
  return (
    // Utilisation des fragments React pour retourner plusieurs éléments adjacents
    <>
      <Banner
        imageURL={background}
        title="Chez vous, partout et ailleurs"
        alt="bannière représentant des rochers et la mer"
      />
      <main>
        <section className="Cards">
          {productsList.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              cover={product.cover}
            />
          ))}
        </section>
      </main>
    </>
  );
}

// Export de la fonction Home comme composant par défaut de la page
export default Home;
