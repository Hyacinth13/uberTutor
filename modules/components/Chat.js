// /* app.js */

// // get a reference to the websocket
// var socket = io();

// var MessageList = React.createClass({
//   getInitialState: function() {
//     return {
//       // initialize messages array with welcome message
//       messages: [{
//         timeStamp: Date.now(), 
//         text: "Welcome to the test chat app!"
//       }]
//     };
//   },
//   componentDidMount: function() {
//     // register event handler for new messages received from server
//     socket.on('messageAdded', this.onMessageAdded);
//   },
//   onMessageAdded: function(message) {
//     // update the array (setState re-renders the component)
//     this.setState({messages: this.state.messages.concat(message)});
//   },
//   postIt: function(e) {
//     // prevent form submission which reloads the page
//     e.preventDefault();

//     // get the message
//     var input = React.findDOMNode(this.refs.theForm).children[0];
//     var message = {
//       timeStamp: Date.now(),
//       text: input.value
//     };

//     // add it locally for this client
//     this.setState({messages: this.state.messages.concat(message)});
//     // *
//     //  * Alternatively you could have the server emit to ALL clients,
//     //  * including the one who sent the message. In that case the message
//     //  * would go from your client to the server and back before it got added
//     //  * to the message list. 
     

//     // clear the input
//     input.value = '';

//     // emit to server so other clients can be updated
//     socket.emit('messageAdded', message);
//   },
//   render: function() {
//     return (
//       <div>
//         <h2>Messages</h2>
//         <ul className="message-list">
//           {/* Create array of li's by looping over the messages array */}
//           {this.state.messages.map(function(message) {
//             return(
//               <li key={message.timeStamp}>{message.text}</li>
//             );
//           })}
//         </ul>
//         <MessageForm submit={this.postIt} ref="theForm" />
//       </div>
//     );
//   }
// });

// var MessageForm = React.createClass({
//   render: function() {
//     return (
//       <form onSubmit={this.props.submit}>
//         <input type="text" size="40" placeholder="Type your message here" />
//         <button>Send</button>
//       </form>
//     );
//   }
// });

// // mount to the messages div
// React.render(<MessageList />, document.getElementById('messages'));
