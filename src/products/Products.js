import React, { useRef, useState, useEffect } from 'react';
import './products.css'
import leftArrow from '../assets/Products/compact-left-arrow.png'
import rightArrow from '../assets/Products/compact-right-arrow.png'
import product1 from '../assets/Products/placeholder.jpeg'
import IndividualProduct from './IndividualProduct'

function Products() {

    const products = [
        {
            title: 'Oleo de Yoga',
            image: product1,
            price: '80,00',
            description: 'O Óleo de Yoga é uma fusão harmoniosa de óleos essenciais cuidadosamente selecionados para elevar a experiência da prática de yoga.',
            link: 'https://www.google.com'
        },
        {
            title: 'Oleo de Yoga',
            image: product1,
            price: '80,00',
            description: 'O Óleo de Yoga é uma fusão harmoniosa de óleos essenciais cuidadosamente selecionados para elevar a experiência da prática de yoga.',
            link: 'https://www.google.com'
        },
        {
            title: 'Oleo de Yoga',
            image: product1,
            price: '80,00',
            description: 'O Óleo de Yoga é uma fusão harmoniosa de óleos essenciais cuidadosamente selecionados para elevar a experiência da prática de yoga.',
            link: 'https://www.google.com'
        },
        {
            title: 'Oleo de Yoga',
            image: product1,
            price: '80,00',
            description: 'O Óleo de Yoga é uma fusão harmoniosa de óleos essenciais cuidadosamente selecionados para elevar a experiência da prática de yoga.',
            link: 'https://www.google.com'
        },
        {
            title: 'Oleo de Yoga',
            image: product1,
            price: '80,00',
            description: 'O Óleo de Yoga é uma fusão harmoniosa de óleos essenciais cuidadosamente selecionados para elevar a experiência da prática de yoga.',
            link: 'https://www.google.com'
        },
        {
            title: 'Oleo de Yoga Final',
            image: product1,
            price: '80,00',
            description: 'O Óleo de Yoga é uma fusão harmoniosa de óleos essenciais cuidadosamente selecionados para elevar a experiência da prática de yoga.',
            link: 'https://www.google.com'
        },
        
        
        
    

    ]   
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [userClicked, setUserClicked] = useState(false);
    const [autoScrollInterval, setAutoScrollInterval] = useState(null);
  
    useEffect(() => {
      // Auto-scrolling interval
      const interval = setInterval(() => {
        if (!isDragging && !userClicked && scrollRef.current) {
          scrollRef.current.scrollLeft += 1; // Adjust the scrolling speed as needed
  
          // Check if the scroll reaches the end, and smoothly reset to the beginning
          if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
            scrollRef.current.scrollLeft = 0;
          }
        }
      }, 30); // Adjust the interval as needed
  
      setAutoScrollInterval(interval);
  
      return () => clearInterval(interval);
    }, [isDragging, userClicked]);
  
    const handleMouseDown = (e) => {
      clearInterval(autoScrollInterval); // Stop auto-scrolling on mouse down
      setIsDragging(true);
      setUserClicked(true);
      setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
      setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
      const walk = (x - startX) * 1; // Adjust the multiplier as needed
      scrollRef.current && (scrollRef.current.scrollLeft = scrollLeft - walk);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    return (
      <div className='product-page'>
        <div className='product-page-title'>
          <h1>Meus Produtos</h1>
        </div>
  
        <div
          className='product-display'
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Duplicate the product items for continuous scrolling */}
          {products.map((product, index) => (
            <IndividualProduct key={index} product={product} />
          ))}
        </div>
      </div>
    );
}
  
export default Products;