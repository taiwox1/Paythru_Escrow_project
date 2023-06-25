import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div
      className={`${styles.flexCenter} bg-discount-gradient rounded-[20px] flex-wrap w-full`}
    >
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1  ${styles.flexCenter} h-[100px] sm:min-w-[200px] min-w-[130px]`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px]   w-[100px] object-contain  "
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
