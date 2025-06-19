import styled from "styled-components";



export const Container = styled.footer`
background-color: #f9e4d2;
    color: #fff;
    padding: 75px 75px 0;
    font-family: 'Arial', sans-serif;


.footer-nav {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}
  .footer-bottom {
    justify-content: center;
    display: flex
;
}
.footer-nav a {
  color: #370617;
  font-family: 'Josefin Sans', sans-serif;
  text-decoration: none;
  font-weight: 600;
}

.footer-center {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
}

.footer-center hr {
  flex: 1;
  height: 1px;
  background: #444;
  border: none;
}

.footer-center .logo {
  font-size: 1.5rem;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: bold;
  text-decoration: none;
    background: linear-gradient(92.2deg, #F83600 -25.25%, #FE8C00 117.85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* For Firefox */
  color: transparent;
}

.social-media {
  display: flex;
  gap: 15px;
    margin-top: 50px;

    justify-content: center;
}

.social-media img {
  width: 30px;
  height: 30px;
  transition: transform 0.3s;
}

.social-media img:hover {
  transform: scale(1.1);
}

.footer-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
 color: #370617;
  width: 100%;
   font-family: 'Josefin Sans', sans-serif;

}

.footer-info div {
  flex: 1;
  min-width: 200px;
}

.footer-info h4 {
  margin-bottom: 10px;
 color: #370617;
   font-family: 'Josefin Sans', sans-serif;
}

.footer-bottom {
  background: red !important;
  padding: 20px 0 !important;
  margin-top: 40px !important;
  position: relative !important;
      justify-content: center;
    display: flex;
}


.footer-bottom-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.footer-bottom-content a {
  color: #ffcc00;
  text-decoration: none;
}



`