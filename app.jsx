var React = require('react');

exports.App = React.createClass({
  render: function(){
    return (<div className="container">
      <h1>H!</h1>
      <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
        Launch demo modal
        <i className="glyphicon glyphicon-repeat" />
      </button>

      <span>&times;</span>
      <span>&middot;</span>

      <input id="one" />

      <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">&times; &middot;</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
});
