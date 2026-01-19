export const ShopMap = () => {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3233.738439039052!2d139.63219751208848!3d35.85541667241702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDUxJzE5LjUiTiAxMznCsDM4JzA1LjIiRQ!5e0!3m2!1sen!2snp!4v1768818663118!5m2!1sen!2snp"
        className="w-full h-[450px]"
        style={{
          border: "0",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
