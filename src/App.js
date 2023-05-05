// importing logo, CSS and bootstrap for components
import logo from "./xyz-logo.JPG";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Header component with props argument that displays a custom header based
 on props(bool) which reflects if the user is logged in or not*/
function Header(props) {
  // bool prop to check login status
  let isLoggedIn = props.isLoggedIn;
  // conditionals that return custom headers based on the bool
  if (isLoggedIn) {
    return (
      // key to help render in array
      <div key={4} className="App">
        <header class="App-header">
          <br />
          <img src={logo} class="App-logo" alt="logo" />
          <p class="header">Welcome to XYZ CLOTHING</p>
        </header>
      </div>
    );
  }
  return (
    // key to help render in array
    <div key={5} className="App">
      <header class="App-header">
        <br />
        <img src={logo} class="App-logo" alt="logo" />
        <p class="header">Please sign in to XYZ CLOTHING</p>
      </header>
    </div>
  );
}

// LandingPage component that returns About clothing brand html content
function LandingPage() {
  return (
    // key to help render in array
    <div key={0}>
      <h1>About Us</h1>
      <p class="col-md-9">
        XYZ Clothing is a high end street clothing fashion brand established in
        Johannesburg, South Africa the year 2001. We cater all things street
        fashion with our highest selling items being our coveted accesories.
      </p>
      <p class="col-md-10">
        Our target market are ages 16 to 30 for both males and females of all
        sizes. We have seven stores across the country at locations including
        Durban, Cape Town and Johannesburg. We are available to assist between
        08h00-16h30 from Monday to Friday if you contact our head offices from
        the information provided below.
      </p>
      <h4>Contact Info</h4>
      <p>011-724-4991 || xyzsupport@xyz.co.za</p>
    </div>
  );
}

// Product1 component that returns html content on the Satchel product of the clothing brand
function Product1() {
  return (
    // key to help render in array
    <div key={1}>
      <h2>Satchel</h2>
      <img
        class="img-responsive"
        alt="satchel"
        src={require("./satchel.JPG")}
      />
      <figcaption>R152.00</figcaption>
      <br />
      <p>Description: Black XYZ unisex streetwear satchel</p>
      <p>Product Code: #4875SAC</p>
      <p>Available Since: 2021/11/28</p>
      <p>
        <mark>Available</mark> while stock lasts
      </p>
    </div>
  );
}

// Product2 component that returns html content on the Baret product of the clothing brand
function Product2() {
  return (
    // key to help render in array
    <div key={2}>
      <h2>Baret</h2>
      <img class="img-responsive" alt="baret" src={require("./baret.JPG")} />
      <figcaption>R185.00</figcaption>
      <br />
      <p>Description: Red+Blue+Black XYZ female streetwear baret</p>
      <p>Product Code: #7472SSD</p>
      <p>Available Since: 2022/01/08</p>
      <p>
        <mark id="sold">Sold Out</mark>
      </p>
    </div>
  );
}

// Product3 component that returns html content on the Scarf product of the clothing brand
function Product3() {
  return (
    // key to help render in array
    <div key={3}>
      <h2>Scarf</h2>
      <img class="img-responsive" alt="scarf" src={require("./scarf.JPG")} />
      <figcaption>R80.00</figcaption>
      <br />
      <p>
        Description: Yellow+Grey+Gold+Black XYZ Spring unisex streetwear scarf
      </p>
      <p>Product Code: #6114SXF</p>
      <p>Available Since: 2021/09/15</p>
      <p>
        <mark>Available</mark> while stock lasts
      </p>
    </div>
  );
}

// An array of the above components , and html elements for layout, to be rendered
let compArray = [
  <Header isLoggedIn={false} />,
  <LandingPage />,
  <br />,
  <h1>Products</h1>,
  <br />,
  <Product1 />,
  <Product2 />,
  <Product3 />,
];

/* List component with props argument that returns a wrapped component's return value to render
from the component array based on props*/
function List(props) {
  return <>{props.value}</>;
}

/* Display component with props argument and a map to call the List component for each 
component in the component array with the value passed to it being an array component's return value*/
function Display(props) {
  const compArray = props.compArray;
  const listLoop = compArray.map((comp) => <List value={comp} />);
  return <>{listLoop}</>;
}

// exporting the component array and Display component to index.js
export { compArray };
export { Display };
