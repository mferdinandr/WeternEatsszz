import Food from '../components/Fragments/CardProduct/Food';
import Navbar from '../components/Fragments/Navbar/Navbar';

const OurFoods = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-10">
        <Food>Our Menu</Food>
      </div>
    </div>
  );
};

export default OurFoods;
