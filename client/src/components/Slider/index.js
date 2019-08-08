import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';



const items = [
  {
    src: 'https://images.pexels.com/photos/696287/pexels-photo-696287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://images.pexels.com/photos/457703/pexels-photo-457703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;