import Dropdown from '../components/Elements/Dropdown/Dropdown';
import Navbar from '../components/Fragments/Navbar/Navbar';

const Help = () => {
  const handleRouterContactUs = () => {
    window.location.href = '/contactus';
  };

  return (
    <div>
      <Navbar />
      <div className="px-10 pt-10 mt-16">
        <h1 className="text-orange-600 font-bold text-5xl text-center pb-4">
          QnA
        </h1>
        <Dropdown
          ask={'Apa kabar'}
          answer={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta, soluta eos, explicabo aut reprehenderit debitis magnam eligendi ullam deserunt ex repellat esse sint, consectetur numquam saepe natus odit rerum!'
          }
        ></Dropdown>

        <Dropdown ask={'Apa kabar'} answer={'Baik'}></Dropdown>

        <Dropdown ask={'Apa kabar'} answer={'Baik'}></Dropdown>

        <Dropdown
          ask={'Apa kabar'}
          answer={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta, soluta eos, explicabo aut reprehenderit debitis magnam eligendi ullam deserunt ex repellat esse sint, consectetur numquam saepe natus odit rerum!'
          }
        ></Dropdown>

        <Dropdown ask={'Apa kabar'} answer={'Baik'}></Dropdown>

        <Dropdown
          ask={'Apa kabar'}
          answer={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta, soluta eos, explicabo aut reprehenderit debitis magnam eligendi ullam deserunt ex repellat esse sint, consectetur numquam saepe natus odit rerum!'
          }
        ></Dropdown>

        <Dropdown ask={'Apa kabar'} answer={'Baik'}></Dropdown>

        <Dropdown ask={'Apa kabar'} answer={'Baik'}></Dropdown>

        <Dropdown
          ask={'Apa kabar'}
          answer={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta, soluta eos, explicabo aut reprehenderit debitis magnam eligendi ullam deserunt ex repellat esse sint, consectetur numquam saepe natus odit rerum!'
          }
        ></Dropdown>
      </div>
      <div className="text-center mt-4">
        <h2 className="font-bold text-xl">Need more help?</h2>
        <button
          className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mb-10 font-bold"
          onClick={handleRouterContactUs}
        >
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Help;
