
    navTemplate = document.createElement('template');

    navTemplate.innerHTML = `
        <style>
        nav {
        height: 50px;
        width: 100%;
        position: relative;
        margin: 0 auto;
        padding: 5px 0px;
        text-align: right;
        vertical-align: middle;
        background: rgb(255, 210, 77);;
        }

        ul li {
        font-size: 12px;
        margin: 15px 5px;
        list-style: none;
        display: inline;
        font-weight: 100;
        text-transform: uppercase;
        }

        .left{
            float: left;
            text-align: left;
            margin-left: 20px;
        }

        p {
            font-size: 28px;
            margin: 5px;
            font-weight: 600;
            display: inline;
            text-transform: capitalize;
        }

        a {
        color: #000;
        font-weight: 300;
        text-decoration: none;
        }

        a:hover {
        padding-bottom: 3px;
        transition: ease-in-out 1s;
        box-shadow: inset 0 -2px 0 0 #fff;
        }

        @media (max-width: 800px){

            nav {
                font-size: 13px;
            }

            p{
                font-size: 20px;
                margin: 10px;
            }
  
        }

        @media (max-width: 497px){
            p{
                display:none;
            }

            nav {
                text-align: center;
                font-size: 13px;
            }
            ul  {
                margin-left: -35px;
            }
            a {
                margin-right: 15px;
                
            }
        }

        </style>
        <header>
        <nav>
        <p class="left"><a href="/">Sylvia Boamah</a></p>
        <ul>
        
        <li><a href="/">home</a></li>
        <li><a href="work">work</a></li> 
        <li><a href="https://drive.google.com/file/d/10tnqxgtavlTrsvyqFokvmg3i31Ylc2t5/view?usp=sharing">resume</a></li>
        <li><a href="contact">contact</a></li>
        </ul>
        </nav>
        </header>
        `;

    class Navbar extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.appendChild(navTemplate.content);
    }

  }

customElements.define('my-navbar', Navbar);
