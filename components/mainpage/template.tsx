import React ,{FC} from "react";

const Template:FC = ()=> {
  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <TemplateText />
        </div>

        <div className="col-sm-8">
          <Description />
        </div>
      </div>
      <button className="btn bg-danger px-4 text-white mt-4">
        <a href="https://preview.colorlib.com/#readit">Preview</a>
      </button>
    </>
  );
}

const TemplateText:FC = ()=> {
  return (
    <>
      <h3 className="border-bottom">
        <span className="border-bottom border-primary">Template detials</span>
      </h3>
      <div className="mt-3">
        <b>author:</b> <span>Colorlib</span>
      </div>
      <div className="mt-3">
        <b>Released:</b> <span>June 2021</span>
      </div>
      <div className="mt-3">
        <b>licesne:</b>{" "}
        <span> CC BY 3.0 (footer credits must remain in place)</span>
      </div>
      <div className="mt-3">
        <b>Credits:</b>
        <span>images from colorlib </span>
      </div>
    </>
  );
}

function Description() {
  return (
    <>
      <h3 className="border-bottom">
        <span className="border-bottom border-primary">Description</span>
      </h3>
      <p>
        Readit is a remarkable creative blog website template with a bold and
        impactful design. If you would like to establish a strong and memorable
        first impression, Readit is the one template that will do the trick.
        With the exceptional look, you will ensure an extraordinary experience
        when reading through your compelling content. Readit is also in tune
        with all modern devices, web browsers and retina screens. Instead of
        starting from square one, get the action going with Readit. Above the
        fold, Readit sports a full-screen banner with text and a parallax
        effect. Approach this section strategically and you will win over new
        potential followers much more comfortable. Readit also includes social
        media icons, sticky navigation, Google Maps and a working contact form.
        When building a creative and straightforward blog, choose Readit and
        enjoy the outcome.
      </p>
    </>
  );
}

export default Template;
