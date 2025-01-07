import "./ourClients.css/";
import { motion } from "framer-motion";

const OurClients = () => {
  return (
    <section>
      <motion.div className="clients-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-100px", once: true }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 25,
      }}>
        <div className="clients-title">
          <h1 className="text-center mt-10 lg:mt-0 text-4xl sm:text-4xl md:text-6xl font-semibold">
            What Our Clients Say
          </h1>
        </div>

        {/* Clients list */}
        <div className="clients-list mt-24 mb-40 flex justify-center items-center text-center flex-wrap gap-[4vw]">
          <div className="clients-person w-64">
            <img
              className="card-img"
              src="/tyler_the_destroyer.png"
              alt="Tyler_The_Destroyer"
            />
            <h2 className="font-medium text-2xl mt-5">Tyler The Creator</h2>
            <p className="mt-2">“I don’t fall no more with them Nike shoes”</p>
          </div>

          <div className="clients-person w-64">
            <img
              className="card-img"
              src="/daadult.png"
              alt="Tyler_The_Destroyer"
            />
            <h2 className="font-medium text-2xl mt-5">DaAdult</h2>
            <p className="mt-2">“Nike shoes are very good”</p>
          </div>

          <div className="clients-person w-64">
            <img
              className="card-img"
              src="/kanye_east.png"
              alt="Tyler_The_Destroyer"
            />
            <h2 className="font-medium text-2xl mt-5">Kanye East</h2>
            <p className="mt-2">“I don’t like Yeezy i like Nike”</p>
          </div>

          <div className="clients-person w-64">
            <img
              className="card-img"
              src="/finfinfin.png"
              alt="Tyler_The_Destroyer"
            />
            <h2 className="font-medium text-2xl mt-5">Travis Scott</h2>
            <p className="mt-2">“Fin Fin Fin Fin Fin Fin Fin Fin Fin Fin”</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClients;
