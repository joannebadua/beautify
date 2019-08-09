import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import "./style.css";



const items = [
    {
        src: 'https://images.pexels.com/photos/1083933/pexels-photo-1083933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        altText: 'MakeUp',
        // caption: 'Health and Wellness Services',
        header: 'Makeup'
      },
      {
        src: 'https://images.pexels.com/photos/6171/hairstyle-hair-wedding-bride.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        altText: 'Hair',
        // caption: 'Health and Wellness Services',
        header: 'Hair'
      },
      
    {
        src: 'https://images.pexels.com/photos/1882001/pexels-photo-1882001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        altText: 'Yoga',
        // caption: 'Health and Wellness Services',
        header: 'Yoga'
      },
  {
    src: 'https://images.pexels.com/photos/669578/pexels-photo-669578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Fitness',
    // caption: 'Health and Wellness Services',
    header: 'Fitness'
  },
  {
    src: 'https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Nutritionist',
    // caption: 'Health and Wellness Services',
    header: 'Nutritionist'
  },
  {
    src: 'https://images.pexels.com/photos/934064/pexels-photo-934064.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    altText: 'Fashion',
    // caption: 'Health and Wellness Services',
    header: 'Fashion'
  }
//   {
//     src: 'https://cdn.pixabay.com/photo/2019/04/06/19/22/glass-4108085_960_720.jpg',
//     altText: 'Fashion',
//     // caption: 'Health and Wellness Services',
//     header: 'Fashion'
//   },
//   {
//     src: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
//     altText: 'Fashion',
//     // caption: 'Health and Wellness Services',
//     header: 'Fashion'
//   }
  
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;