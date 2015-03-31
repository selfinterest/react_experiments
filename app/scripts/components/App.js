/**
 * @jsx React.DOM
 */

/**
 * Created by terrence on 3/29/15.
 */
var React = require("react");
var Menu = require("./Menu");

var APP = React.createClass({
    render: function(){
        return (
            <html>
                <head>
                    <title>React test</title>
                    <link rel="stylesheet" href="/styles/main.css"/>
                </head>
                <body>
                <Menu items={
                    [{link: "/", label: "Home"}, {link: "/services", label: 'Services'}, {link: "/about", label: 'About'}, {link: "/contact", label: 'Contact us'}]
                }/>
                </body>
            </html>
        );
    }
});

if(typeof window !== 'undefined') {
    window.onload = function() {
        React.render(APP(), document);
    }
}

module.exports = APP;
