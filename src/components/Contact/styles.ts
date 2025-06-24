import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: #370617;
      font-weight: 500;
    }
  }
.cagwAX form input, .cagwAX form textarea {
    width: 60rem;
    padding: 1rem 2rem;
    border-radius: 1.6rem;
    outline: none;
    border: none;
    background: none;
    border: 2px solid #370617;
    color: white;
    font-weight: 600;
}
      input::placeholder,
  textarea::placeholder {
    color: #370617 !important; /* Change to any color code like #ff0000 if needed */

  }
  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 1.5rem;
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      // width: 50%;
      // max-width: 30rem;
      gap: 2rem;
    background: linear-gradient(92.2deg, #F83600 -25.25%, #FE8C00 117.85%);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      img{
        width: 4rem;
      }
      a{
        color: var(--black);
        font-weight: 500;
      }
      &:hover{
        background-color: var(--pink);
        a{
          color: #FFF;
        }
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        
      }
    }
  }
  
`
/* old one - 2/1/2023 - 
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/
