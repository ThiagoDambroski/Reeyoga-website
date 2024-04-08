import React, { useRef, useState, useEffect } from "react";
import "./products.css";
import leftArrow from "../assets/Products/compact-left-arrow.png";
import rightArrow from "../assets/Products/compact-right-arrow.png";
import product1 from "../assets/Products/placeholder.jpeg";
import healthCoahing from "../assets/Packages/package1.jpg";
import yogaPackage from "../assets/Packages/package2.jpg";
import yogaColecao from "../assets/Products/colecaoYoga.jpg";
import culinariaColecao from "../assets/Products/culinariaKit.png";
import IndividualProduct from "./IndividualProduct";

function Products() {
  const products = [
    {
      title: "Coleção Yoga dōTERRA",
      image: yogaColecao,
      price: "423.00",
      description:
        "A Coleção Yoga doTERRA oferece três blends de óleos essenciais. Anchor para confiança, Align para equilíbrio, e Arise para estabilidade.",
      link: "https://www.google.com",
      type: "product",
    },
    {
      title: "dōTERRA Culinária Essencial",
      image: culinariaColecao,
      price: "713.00",
      description:
        "O doTERRA Culinária Essencial traz 10 Aromas Naturais de Óleos Essenciais de 5 mL. Alem de um livro de receitas da chef Luri Toledo",
      link: "https://www.google.com",
      type: "product",
    },
    {
      title: "Pacote de Yôga",
      image: yogaPackage,
      price: "",
      description:
        "O Óleo de Yoga é uma fusão harmoniosa de óleos essenciais cuidadosamente selecionados para elevar a experiência da prática de yoga.",
      link: "https://www.google.com",
      type: "package",
      package: {
        name: "Pacote de Yôga",
        about:
          " Durante 6 meses vou estar com você presencialmente, e on-line em Pernambuco no conforto de sua casa" +
          ", ou em um grupo formado por você pra lhe conduzir a sua transformação. Dentro de tudo ainda vamos ter aulas " +
          "de Ayurveda, rotinas planejamentos para jutas evoluirmos a outro nível!" +
          "contendo os 8 angas ou 8 partes do processo: mudrá, pújá, mantra, pránáyáma, kriyá, ásana, yôganidrá e samyama.",
        whatContain: [
          "Mudrá: gesto reflexológico feito com as mãos.",
          "Pújá: retribuição de energia. Propósito: identificação com os arquétipos do SwáSthya Yôga.",
          "Mantra: vocalização de sons e ultrassons.",
          "Pránáyáma: expansão da bioenergia através de respiratórios.",
          "Kriyá: atividade de purificação das mucosas",
          "Ásana: técnicas orgânicas movimento.",
          "Yôganidrá: técnica de descontração.",
          "Samyama: concentração, meditação e hiperconsciência.",
        ],
      },
    },
    {
      title: "Health Coaching",
      image: healthCoahing,
      price: "",
      description:
        "Descubra uma jornada única de bem-estar com nosso serviço exclusivo de treinamento em saúdevoltada para uma melhor qualidade de vida!",
      link: "https://www.google.com",
      type: "package",
      package: {
        name: "Health Coaching",
        about:
          "Descubra uma jornada única de bem-estar com nosso serviço exclusivo de treinamento em saúde" +
          "voltada para uma melhor qualidade de vida! Personalizando seus hábitos alimentares de acordo com seu" +
          "ritmo circadiano e Ayurveda, proporcionando equilíbrio entre alimentação, sono e exercícios. Acompanhado" +
          "meditação e sua área favorita de atividade física personalizados para seu perfil, com suporte dedicado" +
          "uma vez por mês.",
        whatContain: [
          "Organização de seus horários com base no Ritmo circadiano individual.",
          "Estudo alimentar com base no seu biotipo para o Ayurveda ",
          "Aprenda a cozinhar maravilhas que te fazem bem sem se culpar.",
          "Descobrindo qual a melhor atividade física para você",
          "Descobrindo os alimentos que te inflamam.",
          "Montando um plano de hábitos de amor próprio",
          "Fazendo a vida sobra encontrando tempo pra cada atividade que se faz em casa.",
          "Acompanhamento mensal de 1h para reorganizar sua rotina junto a você por 6 meses.",
          "Agenda com anual para acompanhamento de Rotina",
        ],
      },
    },
    {
      title: "Oleo de Yoga",
      image: product1,
      price: "80,00",
      description:
        "O Óleo de Yoga é uma fusão harmoniosa de óleos essenciais cuidadosamente selecionados para elevar a experiência da prática de yoga.",
      link: "https://www.google.com",
      type: "product",
    },
    {
      title: "Oleo de Yoga Final",
      image: product1,
      price: "80,00",
      description:
        "O Óleo de Yoga é uma fusão harmoniosa de óleos essenciais cuidadosamente selecionados para elevar a experiência da prática de yoga.",
      link: "https://www.google.com",
      type: "product",
    },
  ];
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [userClicked, setUserClicked] = useState(false);
  const [autoScrollInterval, setAutoScrollInterval] = useState(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!isDragging) return;
      const x = e.touches ? e.touches[0].pageX : e.pageX;
      const walk = (x - startX) * 1; // Adjust the multiplier as needed
      scrollRef.current && (scrollRef.current.scrollLeft = scrollLeft - walk);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

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

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove, { passive: false });
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchend", handleEnd);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, userClicked, startX, scrollLeft]);

  const handleStart = (e) => {
    clearInterval(autoScrollInterval); // Stop auto-scrolling on touch/click
    setIsDragging(true);
    setUserClicked(true);
    const x = e.touches ? e.touches[0].pageX : e.pageX;
    setStartX(x - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  return (
    <div className="product-page">
      <div className="product-page-title">
        <h1>Meus Produtos</h1>
      </div>

      <div
        className="product-display"
        ref={scrollRef}
        onTouchStart={handleStart}
        onMouseDown={handleStart}
      >
        {products.map((product, index) => (
          <IndividualProduct key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
