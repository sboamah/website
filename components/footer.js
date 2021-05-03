
    footerTemplate = document.createElement('template');

    footerTemplate.innerHTML = `
        <style>
        footer{
        margin: 0 auto;
        text-align: center;
        }

        nav {
        height: 150px;
        margin: 0 auto;
        position: relative;
        width: 100%;
        margin-top: 100px;
        padding: 25px 0px;
        text-align: center;
        background: #000; 
        }

        ul li {
        list-style: none;
        display: inline;
        text-transform: uppercase;
        }

        ul li a {
            color: #fff;
            font-size: 14px;
        }

        ul p{
            list-style: none;
            display: inline;
            text-transform: uppercase;
            font-size: 14px;
            margin: 0 auto;
            color: #fff;
        }

        ul p a{
            color: #fff;
        }

        img{
            filter:grayscale(100%);
            filter:invert(100%);

            width:20px;
        }
        .pic{
          margin-bottom: -25px;
     }
        a {
        font-weight: 200;
        text-decoration: none;
        margin-right: 5px;
        }

        

        a:hover {
        padding-bottom: 3px;
        transition: ease-in-out 1s;
        box-shadow: inset 0 -2px 0 0 #fff;
        }

        @media (max-width: 800px){

          nav {
              font-size: 14px;
          }

        @media (max-width: 480px){
          
          .pic{
             margin-left: -5px;
             height:10px;
             width: 100%;
             margin-bottom: 0px;
             display:block;
        }

        a{
          margin-right: 2px;
        }
          nav {
              font-size: 13px;
              text-align: center;
            }

          ul  {
              margin-left: -15px;
          }
            ul p{
              font-size: 12px;
              margin-left: -2px;
          }

          ul li {
            margin-right: 15px;
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
        <div class="pic">
        <a href="https://www.linkedin.com/in/sylvia-boamah/"><img src="https://image.flaticon.com/icons/png/512/38/38669.png" 
        alt="Linkedin Logo" style="width: 20px; border-radius: 2px;"></a>
      <a href="https://www.behance.net/sylviaboamah"><img src="images/iconfinder_1_Behance2_glyph_svg_5296523.png" 
        alt="Behance Logo" style="width: 20px;"></a>
      <a href="https://github.com/sboamah"><img src="images/iconfinder_github_317712.png" 
        alt="Github" style="width: 20px;"></a>
      <a href="https://www.instagram.com/jollofrican/"><img src="https://mpng.subpng.com/20180629/vue/kisspng-www-mevrouwpak-nl-advertising-graphic-design-insta-instagramm-5b3692f028e740.4061558515303032161676.jpg"
        alt="Instagram" style="width: 20px;"></a>
        </div>
         <br><br>
        <p>Site by Sylvia Boamah.</p>
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
