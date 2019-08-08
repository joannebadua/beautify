import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import "./style.css";



const items = [
    {
        src: 'https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        altText: 'MakeUp',
        // caption: 'Health and Wellness Services',
        // header: 'Makeup'
      },
      {
        src: 'https://images.pexels.com/photos/1213558/pexels-photo-1213558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        altText: 'MakeUp',
        // caption: 'Health and Wellness Services',
        // header: 'Makeup'
      },
      
    {
        src: 'https://images.pexels.com/photos/1882001/pexels-photo-1882001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        altText: 'Yoga',
        // caption: 'Health and Wellness Services',
        // header: 'Yoga'
      },
      {
        src: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        altText: 'Yoga',
        // caption: 'Health and Wellness Services',
        // header: 'Yoga'
      },
  {
    src: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Hair',
    // caption: 'Health and Wellness Services',
    // header: 'Hair'
  },
  {
    src: 'https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Hair',
    // caption: 'Health and Wellness Services',
    // header: 'Hair'
  },
  {
    src: 'https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    altText: 'Barber',
    // caption: 'Health and Wellness Services',
    // header: 'Barber'
  }
  
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;