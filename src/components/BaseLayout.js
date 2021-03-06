import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function BaseLayout (props) {
    return (
      <div>
        <Header />
        { props.children }
        <Footer />
      </div>
    );
}
