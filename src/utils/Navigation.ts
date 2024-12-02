// Un areglo de objectos con los links de navegacion para el navbar

const navBarLinks = [
    { name: "Inicio", url: "/" },
    { name: "Nosotros", url: "#" },
    { name: "Blog", url: "#" },
    { name: "Servicios", url: "#" },
    { name: "Contactanos", url: "#" },
  ];
  // Arreglo de links para el footer
  const footerLinks = [
    {
      section: "Ecosistema",
      links: [
       
        { name: "Herramientas y Equipo", url: "#" },
       
      ],
    },
    {
      section: "Compañia",
      links: [
        { name: "Sobre nosotros", url: "#" },
        { name: "Vlog", url: "/blog" },
        { name: "Puestos ", url: "#" },
        { name: "Clientes", url: "#" },
      ],
    },
  ];
  // Un arreglo 
  const socialLinks = {
    facebook: "https://www.facebook.com/",
    x: "https://twitter.com/",
    };
  
  export default {
    navBarLinks,
    footerLinks,
    socialLinks,
  };