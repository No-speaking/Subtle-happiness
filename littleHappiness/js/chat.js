
             var Header = React.createClass({
        getInitialState: function() {
          return {
            username: '',
            lastGistUrl: ''
          };
        },

        componentDidMount: function() {
         
        },

        componentWillUnmount: function() {
          
        },

        render: function() {
          return (
              <div className="inner">
                <a href="index.html" className="logo">
                  <span className="symbol"><img src="images/logo.svg" alt="" ></img></span>
                  <span className="title">小确幸</span>
                </a>
                <nav>
                  <ul>
                    <li><a href="#menu">Menu</a></li>
                  </ul>
                </nav>
              </div>
          );
        }
      });


     
  

     
      ReactDOM.render(
        <Header/>,
        document.getElementById('header')
      );

    


