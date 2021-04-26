
    footerTemplate = document.createElement('template');

    footerTemplate.innerHTML = `
        <style>
        nav {
        height: 150px;
        margin: 0 auto;
        margin-top: 100px;
        margin-bottom: -10px;
        margin-left: 0px;
        width: 100%;
        padding: 25px 0px;
        text-align: center;
        background: #e2dbcd; 
        }

        ul li {
        list-style: none;
        display: inline;
        text-transform: uppercase;
        margin: 0 15px;
        }

        ul li a {
            color: #000;
        }

        ul p{
            list-style: none;
            display: inline;
            text-transform: uppercase;
            font-size: 16px;
            color: #888;
        }

        ul p a{
            color: #888;
        }

        img{
            filter:grayscale(100%);
            padding-right: 15px;
        }

        a {
        font-weight: 200;
        
        text-decoration: none;
        }

        a:hover {
        padding-bottom: 3px;
        transition: ease-in-out 1s;
        box-shadow: inset 0 -2px 0 0 #000;
        }

        @media (max-width: 800px){

          nav {
              font-size: 14px;
          }

        @media (max-width: 480px){

          nav {
              font-size: 12px;
              width: 100%;
            }

            ul p{
              font-size: 12px;
          }
      }
        </style>
        <footer>
        <nav>
        <ul>
        
        <li><a href="/">home</a></li>
        <li><a href="work">work</a></li> 
        <li><a href="https://drive.google.com/file/d/10tnqxgtavlTrsvyqFokvmg3i31Ylc2t5/view?usp=sharing">resume</a></li>
        <li><a href="contact">contact</a></li>
        <br><br>
        <a href="https://www.linkedin.com/in/sylvia-boamah/"><img src="https://image.flaticon.com/icons/png/512/38/38669.png" 
        style="width: 20px; border-radius: 2px;"></a>
      <a href="https://www.behance.net/sylviaboamah"><img src="images/iconfinder_1_Behance2_glyph_svg_5296523.png" 
        style="width: 20px;"></a>
      <a href="https://github.com/sboamah"><img src="images/iconfinder_github_317712.png" 
        style="width: 20px;"></a>
      <a href="https://www.instagram.com/jollofrican/"><img src="https://mpng.subpng.com/20180629/vue/kisspng-www-mevrouwpak-nl-advertising-graphic-design-insta-instagramm-5b3692f028e740.4061558515303032161676.jpg"
         style="width: 20px;"></a>
         <br><br>
        <p>Site by <a href="https://www.linkedin.com/in/sylvia-boamah/">Sylvia Boamah.</a></p>
        </ul>
        </nav>
        </footer>
        `;

    class Footer extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.appendChild(footerTemplate.content);
    }

  }

customElements.define('my-footer', Footer);
