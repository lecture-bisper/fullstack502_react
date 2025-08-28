/// Menu.jsx
/// Date: 25. 8. 28.
/// Time: 오후 12:43
/// User: it
/// 

function Menu(props) {
  return (
    <div className={'col-md'}>
      <h1 className={'text-center mt-2 mb-5'}>Our Menu</h1>
      <div className={'mb-5'}>
        <h5>Bread Basket</h5>
        <p className={'text-secondary mt-4'}>Assortment of fresh baked fruit breads and muffins 5.50</p>
      </div>
      <div className={'mb-5'}>
        <h5>Honey Almond Granola with Fruits</h5>
        <p className={'text-secondary mt-4'}>Natural cereal of honey toasted oats, raisins, almonds and dates
          7.00</p>
      </div>
      <div className={'mb-5'}>
        <h5>Belgian Waffle</h5>
        <p className={'text-secondary mt-4'}>Vanilla flavored batter with malted flour 7.50</p>
      </div>
      <div className={'mb-5'}>
        <h5>Scrambled eggs</h5>
        <p className={'text-secondary mt-4'}>Scrambled eggs, roasted red pepper and garlic, with green onions
          7.50</p>
      </div>
      <div className={'mb-5'}>
        <h5>Blueberry Pancakes</h5>
        <p className={'text-secondary mt-4'}>With syrup, butter and lots of berries 8.50</p>
      </div>
    </div>
  );
}

export default Menu









