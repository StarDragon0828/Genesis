import React, { useState, useEffect } from 'react';
import { productData } from "./data";
import View from "../../../components/UI/View";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";

export default function ProductPreview(props) {
  const [hoveredImage, setHoveredImage] = useState('');

  useEffect(() => {
    document.getElementsByClassName('image-magnify')[0].children[0].classList.add('small-img');
  }, []);

  return (
    <View className="preview">
      <View className="product-preview">
        <View className="preview-slider">
          {productData.previews.map((preview, idx) => (
            <View className={`image-preview ${hoveredImage === preview ? 'image-preview-hovered' : ''}`} key={`slider-${idx}`}>
              <Image
                src={preview}
                onMouseEnter={() => setHoveredImage(preview)}
              />
            </View>
          ))}
        </View>
        <View className="product-image">
          <ReactImageMagnify className='image-magnify'
            {...props}
            smallImage={{
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: hoveredImage || require("../../../assets/images/product/main.png"),
              // width: 500,
              // height: 400
            }}
            largeImage={{
              src: hoveredImage || require("../../../assets/images/product/main.png"),
              width: 1000,
              height: 1200,
            }}
            shouldUsePositiveSpaceLens={true}
            enlargedImageContainerDimensions={{
              // width: 950,
              // height: 700,
              width:"140%",
              height:"100%"
            }}
            // enlargedImagePosition='over'
            enlargedImageContainerStyle={{
              // border: "none",
              zIndex: 1000
            }}
          />
        </View>
      </View>
      <View className="deliveries">
        {productData.deliveries.map((delivery, idx) => (
          <View key={`delivery-${idx}`} className="delivery">
            <Image src={delivery.image} />
            <h5
              className="description text-primary"
              dangerouslySetInnerHTML={{ __html: delivery.description }}
            ></h5>
          </View>
        ))}
      </View>
      <View className="benefits">
        <View className="items">
          <View className="title">Highlights</View>
          <ul className="item">
            <li>128 GB ROM</li>
            <li>15.49 cm (6.1 inch) Super Retina XDR</li>
            <li>Display</li>
            <li>12MP + 12MP | 12MP Front Camera</li>
            <li>A15 Bionic Chip Processor</li>
          </ul>
        </View>
        <View className="items">
          <View className="title">Easy Payment Options</View>
          <View>
            <ul className="item">
              <li>EMI starting from ₹1,983/month</li>
              <li>Cash on Delivery</li>
              <li>Net banking & Credit/ Debit/ ATM card</li>
              <li>View Details</li>
            </ul>
            <Link to="/" className="view-details text-primary">View Details</Link>
          </View>
        </View>
      </View>
    </View>
  );
}