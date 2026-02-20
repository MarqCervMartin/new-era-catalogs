import Catalog from '../components/Catalog';
import Menu from '../components/Menu';
import { furnitureData } from '../data/furniture';

export default function CatalogPage() {
  return (
    <>
      <Menu />
      <Catalog items={furnitureData} />
    </>
  );
}
