/**
 * Created by terrencewatson on 3/28/15.
 */
'use strict';

var React = require('react');

var Menu = React.createClass({
    getInitialState: function(){
        return { focused: 0 };
    },
    clicked: function(index){

        // The click handler will update the state with
        // the index of the focused menu entry

        this.setState({focused: index});
    },
    render: function() {

        // Here we will read the items property, which was passed
        // as an attribute when the component was created

        var self = this;

        // The map method will loop over the array of menu entries,
        // and will return a new array with <li> elements.

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">React!</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {
                                this.props.items.map(function (m, index) {
                                    var style = '';

                                    if(self.state.focused == index){
                                        style = 'active';
                                    }

                                    return <li className={style} onClick={self.clicked.bind(self, index)}><a href={m.link}>{m.label}</a></li>

                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        );

    }
});

module.exports = Menu;
