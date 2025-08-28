/// Quiz2.jsx
/// Date: 25. 8. 28.
/// Time: 오후 12:06
/// User: 최수열
/// 

import hamburger from '/src/assets/hamburger.jpg'
import tablesetting from '/src/assets/tablesetting.jpg'
import tablesetting2 from '/src/assets/tablesetting2.jpg'

function Quiz2(props) {
  return (
    <div>
      {/* Navi 로 추출 */}
      <nav className={'navbar navbar-expand-md shadow bg-white fixed-top'}>
        <div className={'container-fluid px-4'}>
          <a href={'#home'} className={'navbar-brand p-2'}>Gourmet au Catering</a>
          <ul className={'navbar-nav'}>
            <li className={'nav-item mx-2'}><a href={'#about'} className={'nav-link p-2'}>About</a></li>
            <li className={'nav-item mx-2'}><a href={'#menu'} className={'nav-link p-2'}>Menu</a></li>
            <li className={'nav-item mx-2'}><a href={'#contact'} className={'nav-link p-2'}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Header 로 추출 */}
      <header className={'container-fluid'} id={'home'}>
        <div className={'row'}>
          <div className={'col-md-10 mx-auto'}>
            <div className={'card rounded-0'}>
              <img className={'card-img-top rounded-0 w-100'} src={hamburger} alt={''}/>
              <div className={'card-img-overlay d-flex align-items-end'}>
                <h1 className={'card-title text-dark text-opacity-50'}>Le Catering</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main 으로 추출 */}
      <main className={'container'}>
        {/* AboutCetering 으로 추출 */}
        <div className={'row my-5'} id={'about'}>

          {/* BGImage 로 추출 */}
          <div className={'col-md'}>
            <img className={'w-100'} src={tablesetting2} alt={''}/>
          </div>

          {/* About 로 추출 */}
          <div className={'col-md'}>
            <h1 className={'text-center mt-2 mb-5'}>About Catering</h1>
            <h6 className={'text-center mb-4'}>Tradition since 1889</h6>
            <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing
              elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We
              only use <mark>seasonal</mark> ingredients.
            </p>
            <p className={'text-secondary'}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.</p>
          </div>
        </div>
        <hr/>

        {/* OurMenu 로 추출 */}
        <div className={'row my-5'} id={'menu'}>

          {/* Menu 로 추출 */}
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

          {/* 위에서 추출한 BGImage 로 사용 */}
          <div className={'col-md'}>
            <img className={'w-100'} src={tablesetting} alt={''}/>
          </div>
        </div>
        <hr/>

        {/* Contact 로 추출 */}
        <div className={'row my-5'} id={'contact'}>
          <div className={'col-md'}>
            {/* text */}
            <h1 className={''}>Contact</h1>
            <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater
              the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact
              us.</p>
            <p className={'text-success fs-5'}><strong>Catering Service, 42nd Living St, 43043 New York, NY</strong></p>
            <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a
              message here:</p>

            {/* UserInput */}
            <form action={''} className={'px-2'}>
              <div className={'my-3 border-bottom'}>
                <input type={'text'} className={'form-control-plaintext'} placeholder={'Name'}/>
              </div>
              <div className={'my-3 border-bottom'}>
                <input type={'number'} className={'form-control-plaintext'} min={'0'} max={'10'} placeholder={'How many people'}/>
              </div>
              <div className={'my-3 border-bottom'}>
                <input type={'datetime-local'} className={'form-control-plaintext'} placeholder={'Name'}/>
              </div>
              <div className={'my-3 border-bottom'}>
                <input type={'text'} className={'form-control-plaintext'} placeholder={'Message / Special requirements'}/>
              </div>
              <button type={'button'} className={'btn btn-secondary'}>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer 로 추출 */}
      <footer className={'bg-light py-5 text-center'}>
        <p>made by bitc fullstack 503 class</p>
      </footer>
    </div>
  );
}

export default Quiz2









