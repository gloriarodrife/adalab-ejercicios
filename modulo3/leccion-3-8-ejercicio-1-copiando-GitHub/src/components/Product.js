import { useParams } from 'react-router-dom';

const Overview = () => {
  const { productId } = useParams();

  return <h1>Estas en Product {productId}</h1>;
};

export default Overview;
