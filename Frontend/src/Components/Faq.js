import React from "react";
import "../CSS/Faq.css";
import { faqs } from "../Resources/FaqContent";

function Faq() {
  console.log(faqs[0]);
  return (
    <div>
      <div className="container">
        <h1 className="text-center p-4 font-heading" style={{fontWeight:"700"}}>Frequently Asked Questions</h1>
        <div className="accordion" id="accordionExample">
          {faqs.map((faq) => (
          <div className="accordion-item" key={faq.id}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed font-heading heading"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${faq.id}`}
                aria-expanded="false"
                aria-controls={`collapse${faq.id}`}
              >
                {faq.ques}
              </button>
            </h2>
            <div
              id={`collapse${faq.id}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body font-text text">
                {faq.ans}
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
