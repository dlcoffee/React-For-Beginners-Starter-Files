import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  //constructor() {
  //  super();

  //  this.goToStore = this.goToStore.bind(this);
  //}

  goToStore(event) {
    event.preventDefault();

    const storeId = this.storeInput.value;

    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        { /* a comment */ }
        <h2>Please Enter A Store</h2>

        <input type="text"
               required placeholder="Store Name"
               ref={(input) => { this.storeInput = input }}
               defaultValue={getFunName()}
        />
        <button type="submit">Vist Store </button>
      </form>
    );
  }

}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;

