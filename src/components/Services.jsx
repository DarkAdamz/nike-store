import { services } from "../constants"
import ServiceCard from "../UI assets/ServiceCard"

const Services = () => {
  return (
    <section className="
    max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} imgUrl={service.imgURL} label={service.label} subtext={service.subtext} />
      ))}
    </section>
  )
}

export default Services
