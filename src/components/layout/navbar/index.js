import { Container, Dropdown, Image } from "react-bootstrap";
import View from "../../UI/View";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { faCaretRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import myImage from '../../../assets/images/product/1.png'
import { Link } from "react-router-dom";


const Navbar = (props) => {

  const [productOpen, setProductOpen] = useState(false);
  const [travelOpen, setTravelOpen] = useState(false);
  const [ticketsOpen, setTicketsOpen] = useState(false);
  const [foodOpen, setFoodOpen] = useState(false);
  const [serviciesOpen, setServiciesOpen] = useState(false);
  const [technologyOpen, setTechnologyOpen] = useState(false);
  const [memberOpen, setMemberOpen] = useState(false);

  const handleProductMenu = () => {
    setProductOpen(!productOpen);
  };

  const handleTravelMenu = () => {
    setTravelOpen(!travelOpen);
  };

  const handleTicketsMenu = () => {
    setTicketsOpen(!ticketsOpen);
  };

  const handleFoodMenu = () => {
    setFoodOpen(!foodOpen);
  };

  const handleServiciesMenu = () => {
    setServiciesOpen(!serviciesOpen);
  };

  const handleTechnologyMenu = () => {
    setTechnologyOpen(!technologyOpen);
  };

  const handleMemberMenu = () => {
    setMemberOpen(!memberOpen);
  };


  return <View className="navbar">
    <Container>
      <View className="navbar-menu">
        <Dropdown show={productOpen} onMouseEnter={handleProductMenu} onMouseLeave={handleProductMenu}>
          <Dropdown.Toggle variant="success" id="dropdown-product">
            Product Categories
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="product-menu" >
            <View className="d-flex">
              <View className="menu-1" >
                <View>
                  <View className="menu-title" >
                    <h5 className="title" >Home and Living</h5>
                    <FontAwesomeIcon icon={faCaretRight} className="icon" />
                  </View>
                  <View className="menu-items" >
                    <h5 className="menu-item" >Furniture</h5>
                    <h5 className="menu-item" >Gardening and irrigation products</h5>
                    <h5 className="menu-item" >Lighting products</h5>
                    <h5 className="menu-item" >Home appliances</h5>
                    <h5 className="menu-item" >Kitchen accessories</h5>
                    <h5 className="menu-item" >Home textiles</h5>
                    <h5 className="menu-item" >Smart home products</h5>
                  </View>
                </View>
                <View className="mt-4" >
                  <View className="menu-title" >
                    <h5 className="title" >Health and Wellness</h5>
                    <FontAwesomeIcon icon={faCaretRight} className="icon" />
                  </View>
                  <View className="menu-items" >
                    <h5 className="menu-item" >Dietary supplements</h5>
                    <h5 className="menu-item" >Natural products</h5>
                    <h5 className="menu-item" >Medical products</h5>
                    <h5 className="menu-item" >Green products</h5>
                    <h5 className="menu-item" >Massage products</h5>
                  </View>
                </View>
                <View className="mt-4">
                  <View className="menu-title" >
                    <h5 className="title" >Food and Drink</h5>
                    <FontAwesomeIcon icon={faCaretRight} className="icon" />
                  </View>
                  <View className="menu-items" >
                    <h5 className="menu-item" >Food</h5>
                    <h5 className="menu-item" >Spirits and drinks</h5>
                    <h5 className="menu-item" >Cake deliveries</h5>
                  </View>
                </View>
              </View>
              <View className="menu-2" >
                <View>
                  <View className="menu-title" >
                    <h5 className="title" >Electronics and Appliances</h5>
                    <FontAwesomeIcon icon={faCaretRight} className="icon" />
                  </View>
                  <View className="menu-items" >
                    <h5 className="menu-item" >Electrical products</h5>
                    <h5 className="menu-item" >Software products</h5>
                    <h5 className="menu-item" >Office equipment</h5>
                    <h5 className="menu-item" >Car accessories</h5>
                    <h5 className="menu-item" >Robotics</h5>
                  </View>
                </View>
                <View className="mt-4" >
                  <View className="menu-title" >
                    <h5 className="title" >Fashion and Personal Care</h5>
                    <FontAwesomeIcon icon={faCaretRight} className="icon" />
                  </View>
                  <View className="menu-items" >
                    <h5 className="menu-item" >Clothing products</h5>
                    <h5 className="menu-item" >Jewelry</h5>
                    <h5 className="menu-item" >Cosmetics</h5>
                    <h5 className="menu-item" >Perfumes</h5>
                    <h5 className="menu-item" >Adult accessories</h5>
                    <h5 className="menu-item" >Leather products</h5>
                  </View>
                </View>
              </View>
              <View className="menu-3" >
                <View>
                  <View className="menu-title" >
                    <h5 className="title" >Sports and Outdoors</h5>
                    <FontAwesomeIcon icon={faCaretRight} className="icon" />
                  </View>
                  <View className="menu-items" >
                    <h5 className="menu-item" >Sports products</h5>
                    <h5 className="menu-item" >Equipment for skiing</h5>
                    <h5 className="menu-item" >Hunting equipment</h5>
                    <h5 className="menu-item" >Fishing equipment</h5>
                    <h5 className="menu-item" >Camping equipment</h5>
                    <h5 className="menu-item" >Picnic products</h5>
                    <h5 className="menu-item" >Sailing equipment</h5>
                    <h5 className="menu-item" >Marine equipment</h5>
                  </View>
                </View>
                <View className="mt-4" >
                  <View className="menu-title" >
                    <h5 className="title" >Entertainment and Leisure</h5>
                    <FontAwesomeIcon icon={faCaretRight} className="icon" />
                  </View>
                  <View className="menu-items" >
                    <h5 className="menu-item" >Books</h5>
                    <h5 className="menu-item" >Musical instruments</h5>
                    <h5 className="menu-item" >Toy products</h5>
                    <h5 className="menu-item" >Art supplies</h5>
                    <h5 className="menu-item" >Event equipment</h5>
                  </View>
                </View>
              </View>
              <View className="menu-4" >
                <View>
                  <View className="menu-title" >
                    <h5 className="title" >Services</h5>
                    <FontAwesomeIcon icon={faCaretRight} className="icon" />
                  </View>
                  <View className="menu-items" >
                    <h5 className="menu-item" >Hairdressing</h5>
                    <h5 className="menu-item" >Manicure, pedicure and hair services</h5>
                    <h5 className="menu-item" >Animal services</h5>
                    <h5 className="menu-item" >Car rentals</h5>
                    <h5 className="menu-item" >Webinar courses</h5>
                  </View>
                </View>
                <View className="mt-4" >
                  <View className="menu-title" >
                    <h5 className="title" >Industrial and Commercial</h5>
                    <FontAwesomeIcon icon={faCaretRight} className="icon" />
                  </View>
                  <View className="menu-items" >
                    <h5 className="menu-item" >Industrial machines</h5>
                    <h5 className="menu-item" >Building materials</h5>
                    <h5 className="menu-item" >Laboratory equipment</h5>
                    <h5 className="menu-item" >Communication equipment</h5>
                  </View>
                </View>
                <View className="mt-4">
                  <View className="menu-title" >
                    <h5 className="title" >Travel and Transportation</h5>
                    <FontAwesomeIcon icon={faCaretRight} className="icon" />
                  </View>
                  <View className="menu-items" >
                    <h5 className="menu-item" >Equipment for travelers</h5>
                    <h5 className="menu-item" >vehicles</h5>
                  </View>
                </View>
              </View>
            </View>
            
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown show={travelOpen} onMouseEnter={handleTravelMenu} onMouseLeave={handleTravelMenu}>
          <Dropdown.Toggle variant="success" id="dropdown-travel">
            Travel & Outdoors
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="travel-menu" >
            <View className="menu-title" >
                  <h5 className="title" >Services</h5>
                  <FontAwesomeIcon icon={faCaretRight} className="icon" />
            </View>
            <View className="menu-items" >
              <h5 className="menu-item" >Hairdressing</h5>
              <h5 className="menu-item" >Manicure, pedicure and hair services</h5>
              <h5 className="menu-item" >Animal services</h5>
              <h5 className="menu-item" >Car rentals</h5>
              <h5 className="menu-item" >Webinar courses</h5>
              <h5 className="menu-item" >Advertising spaces</h5>
              <h5 className="menu-item" >Partner program</h5>
            </View>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown show={ticketsOpen} onMouseEnter={handleTicketsMenu} onMouseLeave={handleTicketsMenu}>
          <Dropdown.Toggle variant="success" id="dropdown-Ticket">
            Tickets & Reservations
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="tickets-menu">
            <View className="menu-title" >
              <h5 className="title" >Ticketing and Reservations</h5>
              <FontAwesomeIcon icon={faCaretRight} className="icon" />
            </View>
            <View className="menu-items" >
              <h5 className="menu-item" >Flight tickets</h5>
              <h5 className="menu-item" >Cinema tickets</h5>
              <h5 className="menu-item" >Hotel reservations</h5>
              <h5 className="menu-item" >Baseball games tickets</h5>
              <h5 className="menu-item" >Horses tickets</h5>
              <h5 className="menu-item" >Amusement parks tickets</h5>
              <h5 className="menu-item" >Museums tickets</h5>
              <h5 className="menu-item" >Concerts tickets</h5>
              <h5 className="menu-item" >Singers tickets</h5>
              <h5 className="menu-item" >Magicians tickets</h5>
              <h5 className="menu-item" >Bands tickets</h5>
            </View>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown show={foodOpen} onMouseEnter={handleFoodMenu} onMouseLeave={handleFoodMenu}>
          <Dropdown.Toggle variant="success" id="dropdown-food">
            Food & Beverage
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="food-menu">
            <View className="menu-title" >
              <h5 className="title" >Innovations and Intellectual Properties</h5>
              <FontAwesomeIcon icon={faCaretRight} className="icon" />
            </View>
            <View className="menu-items" >
              <h5 className="menu-item" >Patents and new inventions that are not on the market</h5>
              <h5 className="menu-item" >Software for sale</h5>
            </View>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown show={serviciesOpen} onMouseEnter={handleServiciesMenu} onMouseLeave={handleServiciesMenu}>
          <Dropdown.Toggle variant="success" id="dropdown-servicies">
            Servicies
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="services-menu">
            <View className="menu-title" >
              <h5 className="title" >Promotions and Incentives</h5>
              <FontAwesomeIcon icon={faCaretRight} className="icon" />
            </View>
            <View className="menu-items" >
              <h5 className="menu-item" >Buy get a gift</h5>
              <h5 className="menu-item" >Collect points for gifts</h5>
              <h5 className="menu-item" >Black Friday</h5>
              <h5 className="menu-item" >Women's Day</h5>
              <h5 className="menu-item" >Men's Day</h5>
              <h5 className="menu-item" >Valentine's Day</h5>
              <h5 className="menu-item" >Shopping is fun</h5>
              <h5 className="menu-item" >A friend brings a friend</h5>
              <h5 className="menu-item" >Advertise get paid</h5>
              <h5 className="menu-item" >Buy with points</h5>
              <h5 className="menu-item" >Cool stuff</h5>
              <h5 className="menu-item" >Things $1,2,3 etc...</h5>
              <h5 className="menu-item" >Interesting things</h5>
              <h5 className="menu-item" >Promotions</h5>
              <h5 className="menu-item" >No shipping</h5>
              <h5 className="menu-item" >Gifts for the holidays</h5>
              <h5 className="menu-item" >Gay Day</h5>
              <h5 className="menu-item" >Lesbian Day</h5>
              <h5 className="menu-item" >A lucky baby was born</h5>
              <h5 className="menu-item" >Just to pamper</h5>
            </View>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown show={technologyOpen} onMouseEnter={handleTechnologyMenu} onMouseLeave={handleTechnologyMenu}>
          <Dropdown.Toggle variant="success" id="dropdown-technology">
            Technology & Innovation
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="technology-menu">
            <View className="menu-title" >
              <h5 className="title" >Miscellaneous</h5>
              <FontAwesomeIcon icon={faCaretRight} className="icon" />
            </View>
            <View className="menu-items" >
              <h5 className="menu-item" >Promise products</h5>
              <h5 className="menu-item" >Space products</h5>
              <h5 className="menu-item" >Higana products</h5>
            </View>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown show={memberOpen} onMouseEnter={handleMemberMenu} onMouseLeave={handleMemberMenu}>
          <Dropdown.Toggle variant="success">
            <Image src={myImage}/>
          </Dropdown.Toggle>
          <Dropdown.Menu className="member-menu">
            <View className="menu-title" >
              <h5 className="title" >Member of the Good Life Club</h5>
              <h5 className="description" >Ultimately, being a member of the Good Life Club means joining a community that values personal growth, well-being, and a positive lifestyle. It provides access to exclusive resources, events, and support systems that can enrich various aspects of one's life, helping individuals lead happier, more fulfilling lives.</h5>
            </View>
            <View>
              <Link to="/memberlogin">
                <h5 className="member-login text-primary">Member Login</h5>
              </Link>
            </View>
          </Dropdown.Menu>
        </Dropdown>
      </View>
    </Container>
  </View>
}

export default Navbar