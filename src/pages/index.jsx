const App = ({ cart, setCart, render, setRender, userState }) => {
  return (
    <main>
      {/*//SECTION: NAVBAR // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // */}
      <section class="navbar-container">
        {/*//* Top navbar */}
        <div class=" navbar-top pageSize ">
          {/*//* Logo */}
          <div class="logo-container">
            <div class="logo bg-logo"></div>
          </div>

          {/*//* Search input */}
          <form class="search-container ">
            <input
              class="search-input"
              type="text"
              placeholder="Buscar productos ..."
              required
            />
            <button class=" search-button">Buscar</button>
          </form>

          {/*//* Right side container */}
          <div class="nav-right-container">
            {/*//* MOBILE: Menu*/}
            <div class=" menu-container">
              <button>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="27px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M80 160h352M80 256h352M80 352h352"
                  ></path>
                </svg>
              </button>
            </div>
            {/*//* MOBILE: Logo*/}
            <div class=" logo-container-mobile">
              <div class="logo bg-logo"></div>
            </div>
            {/*//* Actions buttons */}
            <div class="action-buttons-container">
              {/*//* User icon */}
              <button class="action-buttons ">
                <div class=" action-buttons-title ">
                  <h1 class=" gray">Ingresa</h1>
                  <strong>Tu Cuenta</strong>
                </div>
                <svg
                  height="27"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8927 15.7682C16.0329 14.3137 14.8061 13.1078 13.3338 12.27C11.8614 11.4322 10.1946 10.9915 8.49845 10.9915C6.80225 10.9915 5.13546 11.4322 3.66314 12.27C2.19082 13.1078 0.964024 14.3137 0.104236 15.7682C-0.00102398 15.9568 -0.027822 16.179 0.0295835 16.387C0.0566587 16.493 0.106188 16.592 0.174854 16.6774C0.243521 16.7628 0.329737 16.8326 0.427728 16.8821C0.554141 16.9534 0.697158 16.9904 0.842462 16.9894C0.986554 16.9955 1.12952 16.9616 1.25545 16.8917C1.38138 16.8218 1.48536 16.7185 1.5558 16.5933C2.26752 15.3886 3.2833 14.3898 4.50251 13.6958C5.72172 13.0018 7.10204 12.6367 8.50674 12.6367C9.91144 12.6367 11.2918 13.0018 12.511 13.6958C13.7302 14.3898 14.746 15.3886 15.4577 16.5933C15.5685 16.7807 15.7491 16.9169 15.9603 16.9725C16.1715 17.0282 16.3963 16.9986 16.5858 16.8904C16.6801 16.8403 16.7628 16.7711 16.8285 16.6873C16.8943 16.6034 16.9415 16.5067 16.9673 16.4035C16.998 16.298 17.0072 16.1875 16.9944 16.0784C16.9816 15.9693 16.947 15.8638 16.8927 15.7682Z"
                    fill="#111111"
                  ></path>
                  <path
                    d="M8.4999 10.2C9.83646 10.2002 11.1197 9.67091 12.0735 8.72594C13.0273 7.78097 13.5754 6.49588 13.5999 5.14718C13.5999 3.78206 13.0626 2.47286 12.1061 1.50757C11.1497 0.542291 9.85251 0 8.4999 0C7.1473 0 5.85009 0.542291 4.89366 1.50757C3.93722 2.47286 3.3999 3.78206 3.3999 5.14718C3.42441 6.49588 3.97252 7.78097 4.92632 8.72594C5.88011 9.67091 7.16334 10.2002 8.4999 10.2ZM5.0999 5.14718C5.0999 4.2371 5.45812 3.3643 6.09574 2.72078C6.73336 2.07725 7.59817 1.71573 8.4999 1.71573C9.40164 1.71573 10.2664 2.07725 10.9041 2.72078C11.5417 3.3643 11.8999 4.2371 11.8999 5.14718C11.8999 6.05726 11.5417 6.93006 10.9041 7.57359C10.2664 8.21711 9.40164 8.57864 8.4999 8.57864C7.59817 8.57864 6.73336 8.21711 6.09574 7.57359C5.45812 6.93006 5.0999 6.05726 5.0999 5.14718Z"
                    fill="#111111"
                  ></path>
                </svg>
              </button>
              {/*//* Heart icon */}
              <button class="action-buttons ">
                <div class=" action-buttons-title ">
                  <h1 class=" gray">Favoritos</h1>
                  <strong>Mi Lista</strong>
                </div>
                <svg
                  height="27"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3887 1.55421C17.3506 0.55606 15.9769 0 14.5491 0C13.1212 0 11.7475 0.55606 10.7094 1.55421L10 2.24289L9.29063 1.55421C8.25514 0.549292 6.87729 -0.00765789 5.44682 0.000470637C4.01902 -0.00635871 2.64421 0.550561 1.61125 1.55421C1.10276 2.0382 0.697356 2.6234 0.420188 3.27353C0.14302 3.92365 0 4.62483 0 5.33357C0 6.0423 0.14302 6.74348 0.420188 7.3936C0.697356 8.04373 1.10276 8.62894 1.61125 9.11292L9.4391 16.7724C9.51585 16.8408 9.60199 16.8974 9.6948 16.9404C9.89078 17.0199 10.1092 17.0199 10.3052 16.9404C10.398 16.8974 10.4841 16.8408 10.5609 16.7724L18.3887 9.11292C18.8972 8.62894 19.3026 8.04373 19.5798 7.3936C19.857 6.74348 20 6.0423 20 5.33357C20 4.62483 19.857 3.92365 19.5798 3.27353C19.3026 2.6234 18.8972 2.0382 18.3887 1.55421ZM18.3887 5.31677C18.3911 5.81361 18.2943 6.30576 18.1043 6.7634C17.9143 7.22103 17.6351 7.63463 17.2834 7.97912L10 15.1179L2.7248 7.97912C2.36775 7.63749 2.08319 7.22502 1.88868 6.76713C1.69417 6.30925 1.59382 5.81565 1.59382 5.31677C1.59382 4.81789 1.69417 4.32429 1.88868 3.86641C2.08319 3.40852 2.36775 2.99605 2.7248 2.65442C3.45741 1.94171 4.43359 1.54714 5.44682 1.55421C6.46509 1.5463 7.44671 1.94068 8.18532 2.65442L9.4391 3.88901C9.51585 3.95737 9.60199 4.01396 9.6948 4.05698C9.89078 4.13645 10.1092 4.13645 10.3052 4.05698C10.398 4.01396 10.4841 3.95737 10.5609 3.88901L11.8229 2.65442C12.5555 1.94171 13.5317 1.54714 14.5449 1.55421C15.5632 1.5463 16.5448 1.94068 17.2834 2.65442C17.6381 2.99747 17.9204 3.41042 18.1133 3.86813C18.3061 4.32583 18.4055 4.81872 18.4052 5.31677H18.3887Z"
                    fill="#111111"
                  ></path>
                </svg>
              </button>
              {/*//* Cart icon */}
              <button class="action-button-cart">
                <div class=" action-buttons-title ">
                  <h1 class=" gray">Tu Carrito</h1>
                  <strong>$0.00</strong>
                </div>
                <svg
                  height="27"
                  viewBox="0 0 21 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3699 15.3408C14.1509 15.3408 13.941 15.2536 13.7862 15.0983C13.6314 14.9431 13.5444 14.7325 13.5444 14.5129H11.8936C11.8936 15.1716 12.1545 15.8033 12.6189 16.2691C13.0832 16.7348 13.7131 16.9965 14.3699 16.9965C15.0266 16.9965 15.6565 16.7348 16.1209 16.2691C16.5853 15.8033 16.8462 15.1716 16.8462 14.5129H15.1953C15.1953 14.7325 15.1083 14.9431 14.9535 15.0983C14.7987 15.2536 14.5888 15.3408 14.3699 15.3408Z"
                    fill="#111111"
                  ></path>
                  <path
                    d="M8.5612 15.3408C8.34228 15.3408 8.13233 15.2536 7.97753 15.0983C7.82273 14.9431 7.73576 14.7325 7.73576 14.5129H6.07715C6.07715 14.8396 6.14129 15.163 6.26592 15.4647C6.39055 15.7665 6.57322 16.0407 6.8035 16.2716C7.03378 16.5026 7.30717 16.6858 7.60805 16.8108C7.90893 16.9358 8.23141 17.0001 8.55707 17.0001C8.88274 17.0001 9.20522 16.9358 9.5061 16.8108C9.80698 16.6858 10.0804 16.5026 10.3106 16.2716C10.5409 16.0407 10.7236 15.7665 10.8482 15.4647C10.9729 15.163 11.037 14.8396 11.037 14.5129H9.38612C9.38612 14.7324 9.29923 14.9429 9.14454 15.0981C8.98985 15.2534 8.78003 15.3406 8.5612 15.3408Z"
                    fill="#111111"
                  ></path>
                  <path
                    d="M19.3299 1.64401C19.2849 1.63633 19.2393 1.63252 19.1937 1.63263H5.9867C5.76778 1.63263 5.55782 1.71985 5.40302 1.8751C5.24823 2.03035 5.16126 2.24092 5.16126 2.46047C5.16126 2.68003 5.24823 2.8906 5.40302 3.04585C5.55782 3.2011 5.76778 3.28832 5.9867 3.28832H18.2192L18.001 4.60149L16.8438 11.5668H6.07595L3.26946 4.60149L1.59537 0.482961C1.50684 0.289212 1.34721 0.13717 1.14972 0.0584856C0.952225 -0.020199 0.732083 -0.0194636 0.535118 0.0605389C0.338153 0.140541 0.179541 0.293646 0.0922992 0.487983C0.00505767 0.682319 -0.00409102 0.902913 0.0667575 1.10384L2.73963 7.68158L4.56385 12.5307C4.6985 12.9389 4.97657 13.2224 5.37794 13.2224H17.5428C17.7383 13.2225 17.9275 13.1531 18.0766 13.0264C18.2258 12.8997 18.3253 12.724 18.3574 12.5307L19.675 4.60149L20.0083 2.59655C20.0443 2.38002 19.993 2.15803 19.8658 1.9794C19.7386 1.80077 19.5458 1.68013 19.3299 1.64401Z"
                    fill="#111111"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/*//* Bottom navbar */}
        <div class="navbar-bottom">
          <ul class="lista pageSize">
            <button>
              <h1>DEPARTAMENTO</h1> <div class="chevron"></div>
            </button>
            <button>
              <h1>CATEGORÍA</h1> <div class="chevron"></div>
            </button>
            <button>
              <h1 class="texto">SUB-CATEGORÍA</h1>
              <div class="chevron"></div>
            </button>
            <button>
              <h1>MARCA</h1> <div class="chevron"></div>
            </button>
            <button>
              <h1>MODELO</h1> <div class="chevron"></div>
            </button>
          </ul>
        </div>
      </section>
      {/*//SECTION: HERO // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // */}
      <section class=" hero-container pageSize ">
        {/*//* Imagen grande */}
        <div class=" hero-image1 bg-image1 "></div>
        <div class="hero-image2-3-container">
          {/*//* Imagen pequeña 1 */}
          <div class="hero-image2-3 bg-image2"></div>
          {/*//* Imagen pequeña 2 */}
          <div class="hero-image2-3 bg-image3"></div>
        </div>
      </section>
      {/*//SECTION: CATEGORIES // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // */}
      <section class="categories-container pageSize">
        {/*//* Categoría 1 */}
        <button>
          <div class="categories-images bg-category-1"></div>
          <h1>Categoría</h1>
        </button>
        {/*//* Categoría 2 */}
        <button>
          <div class="categories-images bg-category-2"></div>
          <h1>Categoría</h1>
        </button>
        {/*//* Categoría 3 */}
        <button>
          <div class="categories-images bg-category-3"></div>
          <h1>Categoría</h1>
        </button>
        {/*//* Categoría 4 */}
        <button>
          <div class="categories-images bg-category-4"></div>
          <h1>Categoría</h1>
        </button>
        {/*//* Categoría 5 */}
        <button>
          <div class="categories-images bg-category-5"></div>
          <h1>Categoría</h1>
        </button>
        {/*//* Categoría 6 */}
        <button>
          <div class="categories-images bg-category-6"></div>
          <h1>Categoría</h1>
        </button>
        {/*//* Categoría 7 */}
        <button>
          <div class="categories-images bg-category-7"></div>
          <h1>Categoría</h1>
        </button>
      </section>
      {/*//SECTION: DEAL OF THE DAY // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // */}
      <section class="deal-container pageSize">
        {/*//* Title */}
        <div class="deal-title-container">
          <div class="  deal-title">Mejores Ofertas del Día</div>
          <div class=" deal-title-gray"></div>
        </div>

        {/*//* Product card */}
        <div class=" deal-product-container">
          <div class="deal-product-card ">
            {/*//* Image and discount */}
            <div class="deal-image-container">
              <button class="bg-deal-image1 deal-image">
                <div class="discount">-22%</div>
              </button>
            </div>
            {/*//* Description product */}
            <div class="deal-description">
              {/*//*name*/}
              <div class="deal-description-name">
                Drill Screwdriver Brandix ALX7054 200
              </div>
              {/*//*rating*/}
              <div class="deal-description-rating">
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
              </div>
              {/*//*price*/}
              <div class="deal-description-price-container ">
                $150.00 <span class="deal-description-price-old">$190.00</span>
              </div>
              {/*//*specs*/}
              <ul class="deal-description-specs ">
                <li>• Bass and Stereo Sound.</li>
                <li>• Display with 3088 x 1440 pixels resolution.</li>
                <li>• Memory, Storage &amp; SIM: 12GB RAM</li>
              </ul>
              {/*//*Add to cart*/}
              <button class="deal-description-cart">Añadir al Carrito</button>
            </div>
          </div>

          <div class="deal-product-card">
            {/*//* Image and discount */}
            <div class="deal-image-container">
              <button class="bg-deal-image2 deal-image">
                <div class="discount">-22%</div>
              </button>
            </div>
            {/*//* Description product */}
            <div class="deal-description">
              {/*//*name*/}
              <div class="deal-description-name">
                Drill Screwdriver Brandix ALX7054 200
              </div>
              {/*//*rating*/}
              <div class="deal-description-rating">
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
              </div>
              {/*//*price*/}
              <div class="deal-description-price-container ">
                $150.00 <span class="deal-description-price-old">$190.00</span>
              </div>
              {/*//*specs*/}
              <ul class="deal-description-specs ">
                <li>• Bass and Stereo Sound.</li>
                <li>• Display with 3088 x 1440 pixels resolution.</li>
                <li>• Memory, Storage &amp; SIM: 12GB RAM</li>
              </ul>
              {/*//*Add to cart*/}
              <button class="deal-description-cart">Añadir al Carrito</button>
            </div>
          </div>
        </div>
        {/*//*Pagination*/}
        <div class="pagination-container">
          {/*//*Prev page*/}
          <button class="pagination-unavailable-button">
            <div class="chevron pagination-unavailable"></div>
          </button>
          {/*//*Next page*/}
          <button class="pagination-available-button">
            <div class="chevron pagination-available"></div>
          </button>
        </div>
      </section>
      {/*//SECTION: PRODUCTOS MAS VENDIDOS // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // */}
      <section class="deal-container pageSize">
        {/*//* Title */}
        <div class="deal-title-container">
          <div class="  deal-title">Productos Más Vendidos</div>
          <div class=" deal-title-gray"></div>
        </div>
        {/*//* Carousel container */}
        <div class=" carousel-container">
          {/*//* Product card */}
          <div class=" carousel-product-card">
            {/*//* Image and discount */}
            <div class="carousel-product-image-container ">
              <button class="carousel-bg-image1 deal-image">
                <div class="discount">-22%</div>
              </button>
            </div>
            <div class="carousel-description">
              {/*//*name*/}
              <div class="deal-description-name">
                Drill Screwdriver Brandix ALX7054 200
              </div>
              {/*//*rating*/}
              <div class="deal-description-rating">
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
              </div>
              {/*//*price*/}
              <div class="deal-description-price-container ">
                $150.00 <span class="deal-description-price-old">$190.00</span>
              </div>
              {/*//*Add to cart*/}
              <button class="deal-description-cart">Añadir al Carrito</button>
            </div>
          </div>
          {/*//* Product card */}
          <div class=" carousel-product-card">
            {/*//* Image and discount */}
            <div class="carousel-product-image-container ">
              <button class="carousel-bg-image2 deal-image">
                <div class="discount">-22%</div>
              </button>
            </div>
            <div class="carousel-description">
              {/*//*name*/}
              <div class="deal-description-name">
                Drill Screwdriver Brandix ALX7054 200
              </div>
              {/*//*rating*/}
              <div class="deal-description-rating">
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
              </div>
              {/*//*price*/}
              <div class="deal-description-price-container ">
                $150.00 <span class="deal-description-price-old">$190.00</span>
              </div>
              {/*//*Add to cart*/}
              <button class="deal-description-cart">Añadir al Carrito</button>
            </div>
          </div>
          {/*//* Product card */}
          <div class=" carousel-product-card">
            {/*//* Image and discount */}
            <div class="carousel-product-image-container ">
              <button class="carousel-bg-image3 deal-image">
                <div class="discount">-22%</div>
              </button>
            </div>
            <div class="carousel-description">
              {/*//*name*/}
              <div class="deal-description-name">
                Drill Screwdriver Brandix ALX7054 200
              </div>
              {/*//*rating*/}
              <div class="deal-description-rating">
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
              </div>
              {/*//*price*/}
              <div class="deal-description-price-container ">
                $150.00 <span class="deal-description-price-old">$190.00</span>
              </div>
              {/*//*Add to cart*/}
              <button class="deal-description-cart">Añadir al Carrito</button>
            </div>
          </div>
          {/*//* Product card */}
          <div class=" carousel-product-card">
            {/*//* Image and discount */}
            <div class="carousel-product-image-container ">
              <button class="carousel-bg-image4 deal-image">
                <div class="discount">-22%</div>
              </button>
            </div>
            <div class="carousel-description">
              {/*//*name*/}
              <div class="deal-description-name">
                Drill Screwdriver Brandix ALX7054 200
              </div>
              {/*//*rating*/}
              <div class="deal-description-rating">
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
              </div>
              {/*//*price*/}
              <div class="deal-description-price-container ">
                $150.00 <span class="deal-description-price-old">$190.00</span>
              </div>
              {/*//*Add to cart*/}
              <button class="deal-description-cart">Añadir al Carrito</button>
            </div>
          </div>
          {/*//* Product card */}
          <div class=" carousel-product-card">
            {/*//* Image and discount */}
            <div class="carousel-product-image-container ">
              <button class="carousel-bg-image5 deal-image">
                <div class="discount">-22%</div>
              </button>
            </div>
            <div class="carousel-description">
              {/*//*name*/}
              <div class="deal-description-name">
                Drill Screwdriver Brandix ALX7054 200
              </div>
              {/*//*rating*/}
              <div class="deal-description-rating">
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
              </div>
              {/*//*price*/}
              <div class="deal-description-price-container ">
                $150.00 <span class="deal-description-price-old">$190.00</span>
              </div>
              {/*//*Add to cart*/}
              <button class="deal-description-cart">Añadir al Carrito</button>
            </div>
          </div>
        </div>
        {/*//*Pagination*/}
        <div class="pagination-container">
          {/*//*Prev page*/}
          <button class="pagination-unavailable-button">
            <div class="chevron pagination-unavailable"></div>
          </button>
          {/*//*Next page*/}
          <button class="pagination-available-button">
            <div class="chevron pagination-available"></div>
          </button>
        </div>
      </section>
      {/*//SECTION: BANNERS // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // */}
      <section class="deal-container pageSize">
        <div class=" banners-container">
          <div class="banner bg-banner1 banner-image"></div>
          <div class="banner bg-banner2 banner-image"></div>
          <div class="banner bg-banner3 banner-image"></div>
        </div>
      </section>
      {/*//SECTION: NUEVOS PRODUCTOS // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // */}
      <section class="deal-container pageSize">
        {/*//* Title */}
        <div class="deal-title-container">
          <div class="  deal-title">Nuevos Productos</div>
          <div class=" deal-title-gray"></div>
        </div>
        {/*//* Carousel container */}
        <div class=" carousel-container">
          {/*//* Product card */}
          <div class=" carousel-product-card">
            {/*//* Image and discount */}
            <div class="carousel-product-image-container ">
              <button class="carousel-bg-image1 deal-image">
                <div class="discount">-22%</div>
              </button>
            </div>
            <div class="carousel-description">
              {/*//*name*/}
              <div class="deal-description-name">
                Drill Screwdriver Brandix ALX7054 200
              </div>
              {/*//*rating*/}
              <div class="deal-description-rating">
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
              </div>
              {/*//*price*/}
              <div class="deal-description-price-container ">
                $150.00 <span class="deal-description-price-old">$190.00</span>
              </div>
              {/*//*Add to cart*/}
              <button class="deal-description-cart">Añadir al Carrito</button>
            </div>
          </div>
          {/*//* Product card */}
          <div class=" carousel-product-card">
            {/*//* Image and discount */}
            <div class="carousel-product-image-container ">
              <button class="carousel-bg-image2 deal-image">
                <div class="discount">-22%</div>
              </button>
            </div>
            <div class="carousel-description">
              {/*//*name*/}
              <div class="deal-description-name">
                Drill Screwdriver Brandix ALX7054 200
              </div>
              {/*//*rating*/}
              <div class="deal-description-rating">
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
              </div>
              {/*//*price*/}
              <div class="deal-description-price-container ">
                $150.00 <span class="deal-description-price-old">$190.00</span>
              </div>
              {/*//*Add to cart*/}
              <button class="deal-description-cart">Añadir al Carrito</button>
            </div>
          </div>
          {/*//* Product card */}
          <div class=" carousel-product-card">
            {/*//* Image and discount */}
            <div class="carousel-product-image-container ">
              <button class="carousel-bg-image3 deal-image">
                <div class="discount">-22%</div>
              </button>
            </div>
            <div class="carousel-description">
              {/*//*name*/}
              <div class="deal-description-name">
                Drill Screwdriver Brandix ALX7054 200
              </div>
              {/*//*rating*/}
              <div class="deal-description-rating">
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
              </div>
              {/*//*price*/}
              <div class="deal-description-price-container ">
                $150.00 <span class="deal-description-price-old">$190.00</span>
              </div>
              {/*//*Add to cart*/}
              <button class="deal-description-cart">Añadir al Carrito</button>
            </div>
          </div>
          {/*//* Product card */}
          <div class=" carousel-product-card">
            {/*//* Image and discount */}
            <div class="carousel-product-image-container ">
              <button class="carousel-bg-image4 deal-image">
                <div class="discount">-22%</div>
              </button>
            </div>
            <div class="carousel-description">
              {/*//*name*/}
              <div class="deal-description-name">
                Drill Screwdriver Brandix ALX7054 200
              </div>
              {/*//*rating*/}
              <div class="deal-description-rating">
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
              </div>
              {/*//*price*/}
              <div class="deal-description-price-container ">
                $150.00 <span class="deal-description-price-old">$190.00</span>
              </div>
              {/*//*Add to cart*/}
              <button class="deal-description-cart">Añadir al Carrito</button>
            </div>
          </div>
          {/*//* Product card */}
          <div class=" carousel-product-card">
            {/*//* Image and discount */}
            <div class="carousel-product-image-container ">
              <button class="carousel-bg-image5 deal-image">
                <div class="discount">-22%</div>
              </button>
            </div>
            <div class="carousel-description">
              {/*//*name*/}
              <div class="deal-description-name">
                Drill Screwdriver Brandix ALX7054 200
              </div>
              {/*//*rating*/}
              <div class="deal-description-rating">
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
                <span class="star-icon full">☆</span>
              </div>
              {/*//*price*/}
              <div class="deal-description-price-container ">
                $150.00 <span class="deal-description-price-old">$190.00</span>
              </div>
              {/*//*Add to cart*/}
              <button class="deal-description-cart">Añadir al Carrito</button>
            </div>
          </div>
        </div>
        {/*//*Pagination*/}
        <div class="pagination-container">
          {/*//*Prev page*/}
          <button class="pagination-unavailable-button">
            <div class="chevron pagination-unavailable"></div>
          </button>
          {/*//*Next page*/}
          <button class="pagination-available-button">
            <div class="chevron pagination-available"></div>
          </button>
        </div>
      </section>
      {/*//SECTION: FOOTER // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // */}

      <footer class="contact-area" id="contact">
        <div class="container pageSize">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="contact-content text-center">
                <button class="logo-footer" href="#">
                  LOGO
                </button>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum{" "}
                </p>
                <div class="hr"></div>
                <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
                <h6>
                  +01 2345 6789 12<span>|</span>+01 2345 6789 12
                </h6>
                <div class="contact-social">
                  <ul>
                    <li>
                      <a class="hover-target" href="">
                        <div class="bg-social1 deal-image"></div>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <div class="bg-social2 deal-image"></div>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <div class="bg-social3 deal-image"></div>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <div class="bg-social4 deal-image"></div>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <div class="bg-social5 deal-image"></div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <p>Copyright &copy; 2019 LOGO All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default App;
