// Import des composants utilisés dans la page Home
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
// Import du fichier JSON contenant la liste des produits
import productsList from '../products/products.json';

// Définition de la fonction Home qui retourne le contenu de la page
function Home() {
return (
// Utilisation des fragments React pour retourner plusieurs éléments adjacents
<>
<Header /> 
<Banner /> 
<main>
<Cards productsList={productsList}/> 
</main>
<Footer />
</>
);
}

// Export de la fonction Home comme composant par défaut de la page
export default Home;