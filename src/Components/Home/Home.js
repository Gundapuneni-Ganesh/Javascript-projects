import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './Home.css';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavScrollExample() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const products = [
        {
            id: 1,
            name: "iPhone 13",
            price: 999,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Samsung Galaxy S21",
            price: 850,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Google Pixel 6",
            price: 799,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            name: "OnePlus 9 Pro",
            price: 729,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            name: "OnePlus 9 Pro",
            price: 729,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 6,
            name: "OnePlus 9 Pro",
            price: 729,
            image: "https://via.placeholder.com/150",
        },
    ];

    // State for cart items
    const [cart, setCart] = useState([]);

    // Add to cart function
    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} has been added to the cart!`);
    };

  return (
    <div className="main-block">
        <div className="Nav">
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        GC
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        </Tooltip>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            
        </div>

        <div className="boxcursoal">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                       
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jupiter/P3B/3A_PC_Hero_3000x1200._CB543500726_.jpg"
                        alt="First slide"
                        className="cursoal"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Jupiter24/Phase3/Gateway/3B/3A_3B_PC_Hero_3000x1200_1._CB543546740_.jpg"
                        alt="Second slide"
                        className="cursoal"
                        />
                    
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/Jupiter/KSD/PEA/Updated/Phase3/Phase3b/Skincare._CB543501798_.jpg"
                        alt="Second slide"
                        className="cursoal"
                        />
                    
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jupiter/P3B/3A_PC_Hero_3000x1200_2._CB543500726_.jpg"
                        alt="Third slide"
                        className="cursoal"
                        />
                        
                    </Carousel.Item>
                </Carousel>
        </div>
           

        

        <div className="gridContainer">
            <h2 style={{ textAlign: "center" }}>Product Details</h2>
            <div className="productContainer">
                {products.map((product) => (
                    <div key={product.id} className="card">
                        <img src={product.image} alt={product.name} />
                        <h5 style={{ textAlign: "left" }}>{product.name}</h5>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>

        <div className="mainfooter">
            <footer className="footer">
                <div className="footer-about">
                    <h2>About Us</h2>
                    <p>
                         We are a leading e-commerce platform dedicated to providing the best products and services to our customers. Quality and customer satisfaction are our top priorities.
                    </p>
                 </div>
                <div className="footer-container">
                    
                   

                    <div className="footer-links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#shop">Shop</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h2>Customer Service</h2>
                        <ul>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#shipping">Shipping Policy</a></li>
                            <li><a href="#returns">Return Policy</a></li>
                            <li><a href="#support">Support</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h2>Follow Us</h2>
                        <ul>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="footer-bottom">
                    <p>&copy; GC All rights reserved.</p>
                </div>

                
            </footer>


        </div>


    </div>
    
    
  );
}

export default NavScrollExample;