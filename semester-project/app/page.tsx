import Link from "next/link";
import Divider from "@/components/Divider";
import ItemCard from "@/components/ItemCard";

export default function Page() {
  return (
    // <div className="flex flex-col justify-center items-center gap-10 m-10 p-10 border-2 border-solid rounded-md">
    //   <h1 className="font-bold text-2xl">Home page</h1>
    //   <Link className="underline under-line-offset-4" href="/about">
    //     Go to About Page
    //   </Link>
    // </div>
    <div className="flex flex-col justify-center items-center ">
      <Divider text="Free Shipping on orders over 50€" />
      <div className="relative w-full bg-gradient-to-r from-[#f3eeea] via-[#776B5D] to-[#f3eeea] flex flex-row justify-center">
        <img
          className="max-w-full w-full h-auto"
          src="https://images4.alphacoders.com/692/thumb-1920-692043.jpg"
        />
        <div className=" absolute text-4xl text-[#FFA500] flex flex-col items-center justify-center top-1/3 ">
          <span className="stroke-black">LIFT HARD</span>
          <span>EAT SMART</span>
        </div>
      </div>
      <Divider text="Most popular products" />
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ItemCard
            title={"THE Amino Whey (2300g)"}
            img={
              "https://hr.the-nutrition.com/store/images/products/315_cat_144105.jpg"
            }
            price={24.99}
          />
          <ItemCard
            title={"THE ALL IN ONE (2200g)"}
            img={
              "https://hr.the-nutrition.com/store/images/products/1705_cat_224800.jpg"
            }
            price={19.99}
          />
          <ItemCard
            title={"THE Creatine (500g)"}
            img={
              "https://suplementi-spartanshop.rs/wp-content/uploads/2023/01/The-Nutrition-THE-Creatine-500gr.png"
            }
            price={19.99}
          />
          <ItemCard
            title={"THE Explosion (500g)"}
            img={
              "https://hr.the-nutrition.com/store/images/products/1989_cat_484310.jpg"
            }
            price={9.99}
          />
          <ItemCard
            title={"THE Oatmeal (1000g)"}
            img={
              "https://hr.the-nutrition.com/store/images/products/1810_cat_51556.jpg"
            }
            price={9.99}
          />
          <ItemCard
            title={"THE Lady Pudding (500g)"}
            img={
              "https://hr.the-nutrition.com/store/images/products/1965_cat_681056.jpg"
            }
            price={19.99}
          />
        </div>
        <div>{"Show more>"}</div>
      </div>
      <Divider text="New in shop" />
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ItemCard
            title={"THE Amino Whey (2300g)"}
            img={
              "https://hr.the-nutrition.com/store/images/products/315_cat_144105.jpg"
            }
            price={24.99}
          />
          <ItemCard
            title={"THE ALL IN ONE (2200g)"}
            img={
              "https://hr.the-nutrition.com/store/images/products/1705_cat_224800.jpg"
            }
            price={19.99}
          />
          <ItemCard
            title={"THE Creatine (500g)"}
            img={
              "https://suplementi-spartanshop.rs/wp-content/uploads/2023/01/The-Nutrition-THE-Creatine-500gr.png"
            }
            price={19.99}
          />
          <ItemCard
            title={"THE Explosion (500g)"}
            img={
              "https://hr.the-nutrition.com/store/images/products/1989_cat_484310.jpg"
            }
            price={9.99}
          />
          <ItemCard
            title={"THE Oatmeal (1000g)"}
            img={
              "https://hr.the-nutrition.com/store/images/products/1810_cat_51556.jpg"
            }
            price={9.99}
          />
          <ItemCard
            title={"THE Lady Pudding (500g)"}
            img={
              "https://hr.the-nutrition.com/store/images/products/1965_cat_681056.jpg"
            }
            price={19.99}
          />
        </div>
        <div>{"Show more>"}</div>
      </div>
      <footer className="h-10 bg-[#776B5D]"></footer>
    </div>
  );
}
/* 360_F_429356296_CVQ5LkC6Pl55kUNLqLisVKgTw9vjyif1 2 */
