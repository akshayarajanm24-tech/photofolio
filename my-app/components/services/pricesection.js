export default function PriceSection() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">

        <div className="section-header">
          <h2>Prices</h2>
          <p>Check my adorable pricing</p>
        </div>

        <div className="row gy-4 gx-lg-5">

          <div className="col-lg-6">
            <div className="pricing-item d-flex justify-content-between">
              <h3>Portrait Photography</h3>
              <h4>$160.00</h4>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="pricing-item d-flex justify-content-between">
              <h3>Fashion Photography</h3>
              <h4>$300.00</h4>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="pricing-item d-flex justify-content-between">
              <h3>Sports Photography</h3>
              <h4>$200.00</h4>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="pricing-item d-flex justify-content-between">
              <h3>Still Life Photography</h3>
              <h4>$120.00</h4>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="pricing-item d-flex justify-content-between">
              <h3>Wedding Photography</h3>
              <h4>$500.00</h4>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="pricing-item d-flex justify-content-between">
              <h3>Photojournalism</h3>
              <h4>$200.00</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}