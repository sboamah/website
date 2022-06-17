
//     footerTemplate = document.createElement('template');

//     footerTemplate.innerHTML = `
//         <style>
//         footer{
//         margin: 0 auto;
//         text-align: center;
//         }

//         nav {
//         height: 80px;
//         margin: 0 auto;
//         position: relative;
//         width: 100%;
//         margin-top: 100px;
//         padding: 25px 0px;
//         text-align: center;
//         background: rgb(255, 210, 77); 
//         }

//         ul li {
//         list-style: none;
//         display: inline;
//         text-transform: uppercase;
//         }

//         ul li a {
//             color: #000;
//             font-size: 12px;
//         }

//         ul p{
//             list-style: none;
//             display: inline;
//             text-transform: uppercase;
//             font-size: 12px;
//             margin: 0 auto;
//             color: #000;
//         }

//         ul p a{
//             color: #000;
//         }

//         img{
//             filter:grayscale(100%);
          

//             width:20px;
//         }
//         .pic{
//           margin-bottom: -25px;
//      }
//         a {
//         font-weight: 100;
//         text-decoration: none;
//         margin-right: 5px;
//         }


//         a:hover {
//         padding-bottom: 3px;
//         transition: ease-in-out 1s;
//         box-shadow: inset 0 -2px 0 0 #fff;
//         }

//         @media (max-width: 800px){

//           nav {
//               font-size: 14px;
//           }

//         @media (max-width: 480px){
          
//           .pic{
//              margin-left: -5px;
//              height:10px;
//              width: 100%;
//              margin-bottom: 0px;
//              display:block;
//         }

//         a{
//           margin-right: 2px;
//         }
//           nav {
//               font-size: 13px;
//               text-align: center;
//             }

//           ul  {
//               margin-left: -15px;
//           }
//             ul p{
//               font-size: 12px;
//               margin-left: -2px;
//           }

//           ul li {
//             margin-right: 15px;
//             }
//       }
//         </style>
//         <footer>
//         <nav>
//         <ul>
        
//         <li><a href="/">home</a></li>
//         <li><a href="work">work</a></li> 
//         <li><a href="https://drive.google.com/file/d/1nCj2IgyV3IqITM6QK9q1QeroiFJhU1P2/view?usp=sharing">resume</a></li>
//         <li><a href="contact">contact</a></li>
//         <li><a href="https://www.redbubble.com/people/jollofrican/shop?asc=u">shop</a></li>
//         <br><br>
  
//         <p>Site by Sylvia Boamah.</p>
//         </ul>
//         </nav>
//         </footer>
//         `;

//     class Footer extends HTMLElement {
//     constructor() {
//         super();
//         this.root = this.attachShadow({ mode: 'open' });
//         this.root.appendChild(footerTemplate.content);
//     }

//   }

// customElements.define('my-footer', Footer);
