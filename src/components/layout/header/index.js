import { Container, Dropdown, Form, FormCheck, Stack } from "react-bootstrap";
import "./style.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import View from "../../UI/View"
import { faCircleUser, faGift, faHeart, faUserPen, faWallet } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = (props) => {

  const [targetDiv, setTargetDiv] = useState(null);
  const [signmenuHovered, setSignmenuHovered] = useState(false);
  const [languageHovered, setLanguageHovered] = useState(false);

  const SignMenuhandleMouseEnter = () => {
    setSignmenuHovered(true);
  };

  const SignMenuhandleMouseLeave = () => {
    setSignmenuHovered(false);
  };
  
  const LanMenuhandleMouseEnter = () => {
    setLanguageHovered(true);
  };

  const LanMenuhandleMouseLeave = () => {
    setLanguageHovered(false);
  };

  const handleTargetDivRef = (element) => {
    setTargetDiv(element);
  };

  const categories = [
    "Furniture",
    "Lighting products",
    "Home appliances",
    "Kitchen accessories",
    "Home textiles",
    "Smart home products",
    "Dietary supplements",
    "Natural products",
    "Medical products",
    "Green products",
    "Massage products",
    "Food",
    "Spirits and drinks",
    "Cake deliveries",
    "Electrical products",
    "Software products",
    "Office equipment",
    "Car accessories",
    "Robotics",
    "Clothing products",
    "Jewelry",
    "Cosmetics",
    "Perfumes",
    "Leather products",
    "Toy products",
    "Musical instruments",
    "Art supplies",
    "Communication equipment",
    "Event equipment",
    "Hairdressing",
    "Manicure, pedicure and hair services",
    "Animal services",
    "Webinar courses",
    "Industrial machines"
  ];

  return <Container fluid className="header bg-primary">
    <View className="d-flex align-items-center">
      <Link to="/" className="logo me-4">Gensis</Link>

      <Stack className="address-container" direction="horizontal">
        <FontAwesomeIcon icon="map-marker-alt" />
        <Stack className="justify-content-center ms-2">
          <h6 className="hello-text mb-0">Hello</h6>
          <Link to="/myprofile/myaddresses" className="link-none" >
            <h4 className="address-text mb-0">Select your address</h4>
          </Link>
        </Stack>
      </Stack>
    </View>

    <Stack className="search-input-container" direction="horizontal">
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        All
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {categories.map((category, index) => (
        <Dropdown.Item key={index} href="">{category}</Dropdown.Item>
      ))}
      </Dropdown.Menu>
    </Dropdown>
      <Form.Control type="text" placeholder="Search for Products, Brands and More" className="h-100 rounded-0" width={484} />
      <View className="search">
        <FontAwesomeIcon icon="magnifying-glass" fontSize={16}/>
      </View>
    </Stack>

    <Stack direction="horizontal">
      <Stack direction="horizontal" className="align-items-center dropdown-container" onMouseEnter={LanMenuhandleMouseEnter} onMouseLeave={LanMenuhandleMouseLeave}>
          <img src="https://flagcdn.com/32x24/us.png" alt="US flag" />
          <h5 className="dropdown-text">EN</h5>
          <FontAwesomeIcon icon="chevron-down" fontSize={12} />
      </Stack>

      <Stack direction="horizontal" className="align-items-center dropdown-container" onMouseEnter={SignMenuhandleMouseEnter} onMouseLeave={SignMenuhandleMouseLeave}>
        <FontAwesomeIcon icon="user" fontSize={16} />
        <h5 className="dropdown-text">Sign In</h5>
        <FontAwesomeIcon icon="chevron-down" fontSize={12} />
      </Stack>
      <Stack direction="horizontal" className="align-items-center dropdown-container me-0">
        <Link to="/cart" direction="horizontal">
          <FontAwesomeIcon icon="cart-shopping" fontSize={16} />
          <h5 className="dropdown-text">Cart</h5>
        </Link>
      </Stack>
    </Stack>
    <View className={ signmenuHovered ? 'signin-hovered' : 'signin-menu' } ref={handleTargetDivRef} onMouseEnter={SignMenuhandleMouseEnter} onMouseLeave={SignMenuhandleMouseLeave}>
      <View className="menu-title" >
        <h5 className="new-customer" >New Customer?</h5>
        <Link to="/signup" >
          <h5 className="signup text-primary" >Sign Up</h5>
        </Link>
      </View>
      <View className="my-profile" >
        <Link to="/myprofile" >
          <FontAwesomeIcon icon={faCircleUser} className="icon" />
          <h5 className="profile-title" >My Profile</h5>
        </Link>
      </View>
      <View className="orders" >
        <Link to="/myprofile/myorders" >
          <FontAwesomeIcon icon={faUserPen} className="icon" />
          <h5 className="title" >Orders</h5>
        </Link>
      </View>
      <View className="wishlist" >
        <Link to="/myprofile/wishlist" >
          <FontAwesomeIcon icon={faHeart} className="icon" />
          <h5 className="title" >Wishlist</h5>
        </Link>
      </View>
      <View className="rewards" >
        <Link to="" >
          <FontAwesomeIcon icon={faGift} className="icon" />
          <h5 className="title" >Rewards</h5>
        </Link>
      </View>
      <View className="gift-card" >
        <Link to="" >
          <FontAwesomeIcon icon={faWallet} className="icon" />
          <h5 className="title" >Gift Cards</h5>
        </Link>
      </View>
    </View>
    <View className={ languageHovered ? 'language-hovered' : 'language-menu' } ref={handleTargetDivRef} onMouseEnter={LanMenuhandleMouseEnter} onMouseLeave={LanMenuhandleMouseLeave} >
      <h5 className="title" >Change Language</h5>
      <View className="select" >
        <View className="english">
          <FormCheck type="radio" id="radio1" label="English" name="languageGroup" />
        </View>
        <View className="more-language" >
          <FormCheck type="radio" id="radio2" label="French" name="languageGroup" />
          <FormCheck type="radio" id="radio3" label="German" name="languageGroup" />
          <FormCheck type="radio" id="radio4" label="Arabic" name="languageGroup" />
          <FormCheck type="radio" id="radio5" label="Spanish" name="languageGroup" />
          <FormCheck type="radio" id="radio6" label="Romanian" name="languageGroup" />
          <Link to="/languagesetting" >
            <h5 className="view-more text-primary" >VIEW MORE</h5>
          </Link>
        </View>
        <View className="change-currency">
          <h5 className="title" >Change Currency</h5>
          <View className="currency-detail" >
            <h5 className="currency" >$ - USD - US Dollar</h5>
            <Link to="/countrysetting" >
              <h5 className="change text-primary" >Change</h5>
            </Link>
          </View>
        </View>
        <View className="change-country" >
          <View className="detail" >
            <img src="https://flagcdn.com/32x24/us.png" alt="US flag" className="img-flag"/>
            <h5 className="description" >You are shipping on Genesis.com</h5>
          </View>
          <Link to="/countrysetting">
            <h5 className="change text-primary" >Change Country/Region</h5>
          </Link>
        </View>
      </View>
    </View>
  </Container>
}



export default Header;