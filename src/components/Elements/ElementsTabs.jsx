import React from 'react'

const ElementsTabs = () => {
  return (
    <div>
      

 <main className="main">
  <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
    <div className="container">
      <h1 className="page-title">Tabs<span>Elements</span></h1>
    </div>{/* End .container */}
  </div>{/* End .page-header */}
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="elements-list.html">Elements</a></li>
        <li className="breadcrumb-item active" aria-current="page">Tabs</li>
      </ol>
    </div>{/* End .container */}
  </nav>{/* End .breadcrumb-nav */}
  <div className="page-content">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="title mb-3">Left Align Style</h2>{/* End .title mb-3 */}
        </div>{/* End .col-12 */}
        <div className="col-md-6">
          <ul className="nav nav-tabs nav-tabs-bg" id="tabs-1" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="tab-1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Tab 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Tab 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Tab 3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-4-tab" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">Tab 4</a>
            </li>
          </ul>
          <div className="tab-content tab-content-border" id="tab-content-1">
            <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1-tab">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. </p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2-tab">
              <p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3-tab">
              <p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="tab-4-tab">
              <p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
            </div>{/* .End .tab-pane */}
          </div>{/* End .tab-content */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6">
          <ul className="nav nav-tabs" id="tabs-2" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="tab-5-tab" data-toggle="tab" href="#tab-5" role="tab" aria-controls="tab-5" aria-selected="true">Tab 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-6-tab" data-toggle="tab" href="#tab-6" role="tab" aria-controls="tab-6" aria-selected="false">Tab 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-7-tab" data-toggle="tab" href="#tab-7" role="tab" aria-controls="tab-7" aria-selected="false">Tab 3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-8-tab" data-toggle="tab" href="#tab-8" role="tab" aria-controls="tab-8" aria-selected="false">Tab 4</a>
            </li>
          </ul>
          <div className="tab-content tab-content-border" id="tab-content-2">
            <div className="tab-pane fade show active" id="tab-5" role="tabpanel" aria-labelledby="tab-5-tab">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. </p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-6" role="tabpanel" aria-labelledby="tab-6-tab">
              <p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-7" role="tabpanel" aria-labelledby="tab-7-tab">
              <p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-8" role="tabpanel" aria-labelledby="tab-8-tab">
              <p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
            </div>{/* .End .tab-pane */}
          </div>{/* End .tab-content */}
        </div>{/* End .col-md-6 */}
      </div>{/* End .row */}
      <hr className="mt-5 mb-4" />
      <div className="row">
        <div className="col-12">
          <h2 className="title mb-3">Centered Align Style</h2>{/* End .title mb-3 */}
        </div>{/* End .col-12 */}
        <div className="col-md-6">
          <ul className="nav nav-tabs nav-tabs-bg justify-content-center" id="tabs-3" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="tab-9-tab" data-toggle="tab" href="#tab-9" role="tab" aria-controls="tab-9" aria-selected="true">Tab 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-10-tab" data-toggle="tab" href="#tab-10" role="tab" aria-controls="tab-10" aria-selected="false">Tab 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-11-tab" data-toggle="tab" href="#tab-11" role="tab" aria-controls="tab-11" aria-selected="false">Tab 3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-12-tab" data-toggle="tab" href="#tab-12" role="tab" aria-controls="tab-12" aria-selected="false">Tab 4</a>
            </li>
          </ul>
          <div className="tab-content tab-content-border" id="tab-content-3">
            <div className="tab-pane fade show active" id="tab-9" role="tabpanel" aria-labelledby="tab-9-tab">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. </p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-10" role="tabpanel" aria-labelledby="tab-10-tab">
              <p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-11" role="tabpanel" aria-labelledby="tab-11-tab">
              <p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-12" role="tabpanel" aria-labelledby="tab-12-tab">
              <p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
            </div>{/* .End .tab-pane */}
          </div>{/* End .tab-content */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6">
          <ul className="nav nav-tabs justify-content-center" id="tabs-4" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="tab-13-tab" data-toggle="tab" href="#tab-13" role="tab" aria-controls="tab-13" aria-selected="true">Tab 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-14-tab" data-toggle="tab" href="#tab-14" role="tab" aria-controls="tab-14" aria-selected="false">Tab 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-15-tab" data-toggle="tab" href="#tab-15" role="tab" aria-controls="tab-15" aria-selected="false">Tab 3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-16-tab" data-toggle="tab" href="#tab-16" role="tab" aria-controls="tab-16" aria-selected="false">Tab 4</a>
            </li>
          </ul>
          <div className="tab-content tab-content-border" id="tab-content-4">
            <div className="tab-pane fade show active" id="tab-13" role="tabpanel" aria-labelledby="tab-13-tab">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. </p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-14" role="tabpanel" aria-labelledby="tab-14-tab">
              <p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-15" role="tabpanel" aria-labelledby="tab-15-tab">
              <p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-16" role="tabpanel" aria-labelledby="tab-16-tab">
              <p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
            </div>{/* .End .tab-pane */}
          </div>{/* End .tab-content */}
        </div>{/* End .col-md-6 */}
      </div>{/* End .row */}
      <hr className="mt-5 mb-4" />
      <div className="row">
        <div className="col-12">
          <h2 className="title mb-3">Line Style Tabs</h2>{/* End .title mb-3 */}
        </div>{/* End .col-12 */}
        <div className="col-md-6">
          <ul className="nav nav-pills" id="tabs-5" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="tab-17-tab" data-toggle="tab" href="#tab-17" role="tab" aria-controls="tab-17" aria-selected="true">Tab 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-18-tab" data-toggle="tab" href="#tab-18" role="tab" aria-controls="tab-18" aria-selected="false">Tab 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-19-tab" data-toggle="tab" href="#tab-19" role="tab" aria-controls="tab-19" aria-selected="false">Tab 3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-20-tab" data-toggle="tab" href="#tab-20" role="tab" aria-controls="tab-20" aria-selected="false">Tab 4</a>
            </li>
          </ul>
          <div className="tab-content" id="tab-content-5">
            <div className="tab-pane fade show active" id="tab-17" role="tabpanel" aria-labelledby="tab-17-tab">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. </p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-18" role="tabpanel" aria-labelledby="tab-18-tab">
              <p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-19" role="tabpanel" aria-labelledby="tab-19-tab">
              <p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-20" role="tabpanel" aria-labelledby="tab-20-tab">
              <p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
            </div>{/* .End .tab-pane */}
          </div>{/* End .tab-content */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6">
          <ul className="nav nav-pills justify-content-center" id="tabs-6" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="tab-21-tab" data-toggle="tab" href="#tab-21" role="tab" aria-controls="tab-21" aria-selected="true">Tab 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-22-tab" data-toggle="tab" href="#tab-22" role="tab" aria-controls="tab-22" aria-selected="false">Tab 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-23-tab" data-toggle="tab" href="#tab-23" role="tab" aria-controls="tab-23" aria-selected="false">Tab 3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-24-tab" data-toggle="tab" href="#tab-24" role="tab" aria-controls="tab-24" aria-selected="false">Tab 4</a>
            </li>
          </ul>
          <div className="tab-content" id="tab-content-6">
            <div className="tab-pane fade show active" id="tab-21" role="tabpanel" aria-labelledby="tab-21-tab">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. </p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-22" role="tabpanel" aria-labelledby="tab-22-tab">
              <p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-23" role="tabpanel" aria-labelledby="tab-23-tab">
              <p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="tab-24" role="tabpanel" aria-labelledby="tab-24-tab">
              <p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
            </div>{/* .End .tab-pane */}
          </div>{/* End .tab-content */}
        </div>{/* End .col-md-6 */}
      </div>{/* End .row */}
      <hr className="mt-4 mb-4" />
      <div className="row">
        <div className="col-12">
          <h2 className="title mb-3">Vertical Style</h2>{/* End .title mb-3 */}
        </div>{/* End .col-12 */}
        <div className="col-md-6">
          <div className="tabs-vertical">
            <ul className="nav nav-tabs nav-tabs-bg flex-column" id="tabs-7" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="tab-25-tab" data-toggle="tab" href="#tab-25" role="tab" aria-controls="tab-25" aria-selected="true">Tab 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tab-26-tab" data-toggle="tab" href="#tab-26" role="tab" aria-controls="tab-26" aria-selected="false">Tab 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tab-27-tab" data-toggle="tab" href="#tab-27" role="tab" aria-controls="tab-27" aria-selected="false">Tab 3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tab-28-tab" data-toggle="tab" href="#tab-28" role="tab" aria-controls="tab-28" aria-selected="false">Tab 4</a>
              </li>
            </ul>
            <div className="tab-content tab-content-border" id="tab-content-7">
              <div className="tab-pane fade show active" id="tab-25" role="tabpanel" aria-labelledby="tab-25-tab">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum int dolore earum rerum tempora aspernatur numquam velit. </p>
              </div>{/* .End .tab-pane */}
              <div className="tab-pane fade" id="tab-26" role="tabpanel" aria-labelledby="tab-26-tab">
                <p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
              </div>{/* .End .tab-pane */}
              <div className="tab-pane fade" id="tab-27" role="tabpanel" aria-labelledby="tab-27-tab">
                <p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
              </div>{/* .End .tab-pane */}
              <div className="tab-pane fade" id="tab-28" role="tabpanel" aria-labelledby="tab-28-tab">
                <p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
              </div>{/* .End .tab-pane */}
            </div>{/* End .tab-content */}
          </div>{/* End .tabs-vertical */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6">
          <div className="tabs-vertical">
            <ul className="nav nav-tabs flex-column" id="tabs-8" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="tab-29-tab" data-toggle="tab" href="#tab-29" role="tab" aria-controls="tab-29" aria-selected="true">Tab 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tab-30-tab" data-toggle="tab" href="#tab-30" role="tab" aria-controls="tab-30" aria-selected="false">Tab 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tab-31-tab" data-toggle="tab" href="#tab-31" role="tab" aria-controls="tab-31" aria-selected="false">Tab 3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tab-32-tab" data-toggle="tab" href="#tab-32" role="tab" aria-controls="tab-32" aria-selected="false">Tab 4</a>
              </li>
            </ul>
            <div className="tab-content tab-content-border" id="tab-content-8">
              <div className="tab-pane fade show active" id="tab-29" role="tabpanel" aria-labelledby="tab-29-tab">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum int dolore earum rerum tempora aspernatur numquam velit. </p>
              </div>{/* .End .tab-pane */}
              <div className="tab-pane fade" id="tab-30" role="tabpanel" aria-labelledby="tab-30-tab">
                <p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
              </div>{/* .End .tab-pane */}
              <div className="tab-pane fade" id="tab-31" role="tabpanel" aria-labelledby="tab-31-tab">
                <p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
              </div>{/* .End .tab-pane */}
              <div className="tab-pane fade" id="tab-32" role="tabpanel" aria-labelledby="tab-32-tab">
                <p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
              </div>{/* .End .tab-pane */}
            </div>{/* End .tab-content */}
          </div>{/* End .tabs-vertical */}
        </div>{/* End .col-md-6 */}
      </div>{/* End .row */}
    </div>{/* End .container */}
  </div>{/* End .page-content */}
  {/* Elements list */}
  <div className="container mb-5">
    <div className="row elements">
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-accordions.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>accordions</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-banners.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>banners</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-blog-posts.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>blog posts</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-buttons.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>buttons</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-cta.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>call to action</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-icon-boxes.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>icon boxes</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-portfolio.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>portfolio</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-product-category.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>product catigories</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-products.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>products</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-tabs.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>tabs</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-testimonials.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>testimonials</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-titles.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>titles</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-typography.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>typography</p>
          </div>
        </a>
      </div>
      <div className="col-xl-5col col-lg-4 col-md-3 col-6">
        <a href="elements-video-banners.html" className="element-type">
          <div className="element">
            <i className="element-img" />
            <i className="element-hover-img" />
            <p>video</p>
          </div>
        </a>
      </div>
    </div>
  </div>{/* End Elements list */}
</main>{/* End .main */}

    </div>
  )
}

export default ElementsTabs
