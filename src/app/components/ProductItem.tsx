import Image from "next/image";
import { motion } from "framer-motion"

const ProductItem = ({ title, content }) => {
  return (
    <motion.article
      className="products__item">
      <section className="products__item__image">
        <Image src="/hero.png" alt="Hero-image" width={500} height={647} loading="lazy" />
      </section>
      <section className="products__item__content">
        <section className="products__item__content__header">
          <h3>{title}</h3>
          <p>{content}</p>
        </section>
        <section className="products__item__content__footer">
          <button className="btn btn--primary">Saber más</button>
        </section>
      </section>
    </motion.article>
  );
}

export default ProductItem;