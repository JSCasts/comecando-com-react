var React = require('react');
var SearchUser = require('./SearchUser');

var GitHub = React.createClass({
  render: function() {
    return (
      <div className="container">
        <SearchUser />
      </div>
    );
  }
});

module.exports = GitHub;