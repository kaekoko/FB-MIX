import Image from "next/image";

const CarouselEach = ({ item }) => {
  return (
    <div className="d-flex jusitfy-content-evenly gap-3 py-4 overflow-auto">
      {item.map((itx, idx) => (
        <div key={idx} className="col-lg-3 position-relative">
          <Image width={350} height={650} src={itx.img} alt={itx.alt} />
          <div className="pe-3 fw-bolder">{itx.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default CarouselEach;
