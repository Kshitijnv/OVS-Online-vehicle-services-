import ServicesCard from "../ServicesCard/ServicesCard";
function Services() {
  const services = [
    {
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