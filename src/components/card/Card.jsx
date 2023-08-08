import LoadingSkeleton from '../LoadingSkeleton';

const Card = () => {
  return (
    <div className="w-full max-w-[400px] inline-block p-5 bg-slate-100 rounded-lg shadow">
      <div className="card__image h-[250px] mb-5">
        <img
          src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
          alt="book"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="card__content">
        <h3 className="card__title text-xl font-bold mb-4">Book in library</h3>
        <p className="card__desc text-sm font-normal mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur doloribus vitae temporibus. Eligendi
          et repudiandae excepturi ab obcaecati ad expedita, ducimus sit consectetur id deserunt, quasi ipsa, dolorum
          atque!
        </p>
        <a href="#" className="card__link text-center p-5 bg-orange-200 text-white rounded-lg">
          Details
        </a>
      </div>
    </div>
  );
};
const Loading = () => (
  <div className="w-full max-w-[400px] inline-block p-5 bg-slate-100 rounded-lg shadow">
    <div className="card__image h-[250px] mb-5">
      <LoadingSkeleton className="h-full w-full"></LoadingSkeleton>
    </div>
    <div className="card__content">
      <h3 className="card__title text-xl font-bold mb-4">
        <LoadingSkeleton className="w-full h-[15px] mb-1"></LoadingSkeleton>
        <LoadingSkeleton className="w-full h-[15px]"></LoadingSkeleton>
      </h3>
      <p className="card__desc text-sm font-normal mb-10">
        {Array(4)
          .fill(1)
          .map((item, index) => (
            <div className=" w-full h-[10px] mb-1 last:mb-0" key={index}></div>
          ))}
      </p>
      <LoadingSkeleton className="text-center p-5 bg-orange-200 text-white rounded-lg">Details</LoadingSkeleton>
    </div>
  </div>
);
Card.Loading = Loading;

export default Card;
