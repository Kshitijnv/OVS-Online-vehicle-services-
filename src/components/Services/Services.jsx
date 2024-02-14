import ServicesCard from "../ServicesCard/ServicesCard";
function Services() {
  const services = [
    {
      id: 1,
      name: "Regular AC Service",
      price: 2000,
      time: 4,
      specifications: [
        "Oil Change",
        "Cleaning",
        "AC Vents Cleaning",
        "AC Inspection",
        "AC Gas Refill",
      ],
    },
    {
      id: 2,
      name: "Premium Service",
      price: 4000,
      time: 6,
      specifications: [
        "Advanced Cleaning",
        "Filter Replacement",
        "AC Vents Cleaning",
        "AC Inspection",
        "AC Gas Refill",
      ],
    },
    {
      id: 3,
      name: "Dent & Paint",
      price: 3000,
      time: 5,
      specifications: ["Dent Repair", "Paint Restoration"],
    },
  ];

  return (
    <>
      {services.map((service, index) => (
        <ServicesCard
          key={index}
          id={service.id}
          price={service.price}
          name={service.name}
          specs={service.specifications}
          time={service.time}
        />
      ))}
    </>
  );
}

export default Services;
