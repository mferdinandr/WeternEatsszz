const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen content-center px-10 gap-16">
      {/*Contact Us */}
      <div>
        <h1 className="font-bold text-4xl">Contact Us</h1>
        <p className="text-xl">
          If you have any question, critics, and suggesstion, maybe you can
          contact ourself
        </p>
      </div>

      {/* Form */}
      <div className="w-1/2 col-span-2">
        <form action="" className="flex flex-col">
          <div>
            <input
              type="text"
              className="border-2 border-black"
              placeholder="Start Name"
            />
            <input
              type="text"
              className="border-2 border-black"
              placeholder="End Name"
            />
          </div>
          <input type="text" className="border-2 border-black" />
          <input type="text" className="border-2 border-black" />
          <button>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
