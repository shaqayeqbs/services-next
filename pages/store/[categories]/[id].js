import { useState } from "react";
import { useRouter } from "next/router";
import BackButton from "../../../src/@core/utils/back-button";
import IncDecInputBtn from "../../../src/@core/utils/inc-dec-input-btn";
import Card from "../../../src/components/ui/Card";
import StarRatings from "react-star-ratings";
import SizeSelector from "../../../src/@core/utils/size-selector";
import ColorSelector from "../../../src/@core/utils/color-selector";
import SeeAll from "../../../src/@core/utils/see-all";
import { Truck, Bookmark } from "react-bootstrap-icons";
import dummyExpertData from "../../../src/@core/data/experts";
import MultiImageCarosel from "../../../src/components/carousel/multi-img-carousel";
import Reviews from "../../../src/components/store/reviews";
import Carousel from "../../../src/components/carousel";
import { useQuery } from "react-query";
import { getShopSimilarTo } from "../../../src/@core/api/shopApi";
import {
  getShopProductDetail,
  AddToShoppingCart,
  removeFromoShoppingCart,
} from "../../../src/@core/api/shopApi";
import { toast } from "react-toastify";
import PageLoader from "../../../src/@core/utils/PageLoader";

const CategoryItemPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  // const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleAddToCart = async () => {
    if (!selectedColor || !selectedSize) {
      return toast.error("please select color and size you want");
    }
    console.log(selectedSize, selectedColor, product.id);
    const response = await AddToShoppingCart({
      product_id: product.id,
      size_id: selectedSize?.id,
      color_id: selectedColor?.id,
      quantity: 1,
    });

    // Check if the API response is successful (status code 200)
    if (response === 200) {
      toast.success("Item added to the shopping cart!");
    } else {
      toast.error("Failed to add item to the shopping cart");
    }
  };

  const handleRemoveFromCart = async () => {
    // Call the API function to remove from the shopping cart
    const response = await removeFromoShoppingCart({
      product_id: product.id,
      size_id: selectedSize?.id,
      color_id: selectedColor?.id,
      quantity: 1,
    });

    // Check if the API response is successful (status code 200)
    if (response === 200) {
      // Optionally, you can add further logic here if needed
      toast.success("Item removed from the shopping cart!");
      // You might want to show a success message to the user
    } else {
      toast.error("Failed to remove item from the shopping cart");
    }
  };
  console.log(id, "isssssssss");
  const {
    data: similarProductsData,
    isLoading: similarProductsLoading,
    isError: similarProductsError,
  } = useQuery(["shopSimilarTo", id], () => getShopSimilarTo({ id }), {
    // Other options can be added as needed
  });
  const {
    data: productData,
    isLoading,
    isError,
  } = useQuery(["productDetail", id], () => getShopProductDetail(id), {
    // Other options can be added as needed
  });

  if (isLoading) {
    return <PageLoader isLoading={isLoading} />;
  }

  if (isError) {
    return <p>Error loading product data</p>;
  }

  const product = productData?.data; // Assuming 'data' contains the product details

  const sizeOptions = product?.size;
  const colorOptions = product?.color;

  if (similarProductsLoading) {
    return <p>Loading similar products...</p>;
  }

  if (similarProductsError) {
    return <p>Error loading similar products data</p>;
  }

  const similarProducts = similarProductsData?.similars;
  console.log(product);
  return (
    <main className="container">
      <div className="relative flex flex-col items-center">
        <div className="absolute flex justify-end mx-auto items-start border-1 w-[2.5rem] h-[2.5rem] text-left  z-50 border-fundation bg-white rounded-full  py-[1px] left-4 top-5">
          <BackButton />
        </div>
        <div className="w-full">
          <Carousel store data={product} />
        </div>
        <div className="absolute z-50 top-[22rem] right-3 text-primary bg-white rounded-full p-2">
          <Bookmark />
        </div>
        <div className="w-full px-4">
          <Card className="w-full mx-auto my-3 text-left">
            <div className="flex justify-between">
              <h1 className="text-m">{product?.name}</h1>
              <div className="flex items-center border-1 rounded-2xl border-black justify-center">
                <IncDecInputBtn
                  store
                  value={1}
                  onIncrease={handleAddToCart}
                  onDecrease={handleRemoveFromCart}
                />
              </div>
            </div>
            <div className="text-mutedText">
              <p>{product?.brand ? product?.brand : "Brand"}</p>
              <div className="flex items-center w-fit">
                <div className="flex items-center mr-2 mb-2 h-[20px] ">
                  <StarRatings
                    rating={product?.rating / 5}
                    starRatedColor="rgb(111 56 197 / var(--tw-text-opacity))"
                    numberOfStars={1}
                    name="rating"
                    starDimension="18"
                  />
                </div>
                <p>
                  {product?.rating} |{product?.reviews?.length} reviews
                </p>
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <SizeSelector
                options={sizeOptions}
                selectedOption={selectedSize}
                onSelect={(size) => setSelectedSize(size)}
              />
              <div className="border mt-4 h-[25px] border-black rounded-2xl">
                <ColorSelector
                  options={colorOptions}
                  selectedOption={selectedColor}
                  onSelect={(color) => setSelectedColor(color)}
                />
              </div>
            </div>
            <div>
              <h2 className="font-bold mt-3">Description</h2>
              <div className="flex items-center gap-2">
                <Truck className="text-primary" />
                <p>Deliver in {product?.deliveryTime} hour</p>
              </div>
              <p className="text-mutedText leading-4 text my-3">
                Description: {product?.description}
              </p>
            </div>
            <div>
              <p>
                Price:
                <span className="font-bold"> ${product?.price}</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
      <SeeAll title="Similar to" link="/similar-to" />
      <MultiImageCarosel data={similarProducts} store />

      <div className="p-4 mb-10">
        <h2 className="my-3 text-left text-md font-bold">
          {product?.reviews?.length} Reviews
        </h2>
        <Reviews data={product?.reviews} />
      </div>
    </main>
  );
};

export default CategoryItemPage;
