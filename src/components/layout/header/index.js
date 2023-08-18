import { Container, Dropdown, Form, FormCheck, Stack } from "react-bootstrap";
import "./style.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import View from "../../UI/View"
import { faCircleUser, faGift, faHeart, faUserPen, faWallet } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = (props) => {

  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showSignMenu, setShowSignMenu] = useState(false);
  const userName = localStorage.getItem("auth-name");

  const logOut = () => {
    console.log("logOut");
    localStorage.setItem("auth-name",'');
    localStorage.setItem("auth-token",'');
  }
  
  const handleShowLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  const handleShowSignMenu = () => {
    setShowSignMenu(!showSignMenu);
  }

  const categories = [
    "Pneumatics",
    "Robotics",
    "Mechanics",
    "Car mechanics",
    "Machine mechanics",
    "Building materials",
    "Hydrodynamics",
    "Electricity",
    "Water",
    "Agriculture",
    "Spraying",
    "Laboratory",
    "Chemistry",
    "Aerodynamics",
    "4 wheels",
    "2 wheels",
    "Electronics",
    "Construction",
    "Refrigeration",
    "Warming up",
    "Space",
    "Archaeology",
    "Ecology",
    "Physics",
    "Magnet",
    "Medicine",
    "Optics",
    "Biotechnology",
    "Films - construction",
    "Music - construction",
    "Printing",
    "Replication",
    "Iron",
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
      <Link to="/" className="logo me-4">Gnsiss</Link>

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
        <Dropdown show={showLanguageMenu} onMouseEnter={handleShowLanguageMenu} onMouseLeave={handleShowLanguageMenu} className="language-dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-language" >
            <img src="https://flagcdn.com/32x24/us.png" alt="US flag" />
            <h5 className="dropdown-text">EN</h5>
            <FontAwesomeIcon icon="chevron-down" fontSize={12} />
          </Dropdown.Toggle>

          <Dropdown.Menu className="language-hovered">
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
                  <h5 className="description" >You are shipping on Gnsiss.com</h5>
                </View>
                <Link to="/countrysetting">
                  <h5 className="change text-primary" >Change Country/Region</h5>
                </Link>
              </View>
            </View>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown show={showSignMenu} onMouseEnter={handleShowSignMenu} onMouseLeave={handleShowSignMenu} className="sign-dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-singmenu" >
            <FontAwesomeIcon icon="user" fontSize={16} />
              <Link to="/login" >
                {userName ? <h5 className="dropdown-text">{userName}</h5>
                : <h5 className="dropdown-text">Sign In</h5>}
              </Link>
            <FontAwesomeIcon icon="chevron-down" fontSize={12} />
          </Dropdown.Toggle>

          <Dropdown.Menu className={`signin ${userName ? 'signin-hovered' : ''}`} >
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
              <Link to="/giftcard" >
                <FontAwesomeIcon icon={faWallet} className="icon" />
                <h5 className="title" >Gift Cards</h5>
              </Link>
            </View>
            { userName && <View className="logout" >
              <Link to="/">
                <FontAwesomeIcon icon={faWallet} className="icon" />
                <h5 onClick={()=> logOut()} className="title" >Log Out</h5>
              </Link>
            </View>}
          </Dropdown.Menu>
        </Dropdown>
      <Stack direction="horizontal" className="align-items-center dropdown-container me-0">
        <Link to="/cart" direction="horizontal">
          <FontAwesomeIcon icon="cart-shopping" fontSize={16} />
          <h5 className="dropdown-text">Cart</h5>
        </Link>
      </Stack>
    </Stack>
  </Container>
}



export default Header;