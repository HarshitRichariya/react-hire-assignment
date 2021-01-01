import React from "react";

class Shorten extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      inputUrl: "",
      linksData: [],
      buttonText: "Copy",
    };

    this.copyLink = this.copyLink.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async copyLink(e) {
    let btnId = e.target.id;
    let copyBtn = document.querySelector(`#${btnId}`);
    let shortenLink = copyBtn.previousElementSibling.innerHTML;

    copyBtn.classList.add("copied");
    copyBtn.innerText = "Copied!";

    await navigator.clipboard.writeText(shortenLink);

    setInterval(function () {
      copyBtn.classList.remove("copied");
      copyBtn.innerText = "Copy";
    }, 3000);
  }

  handleChange(e) {
    this.setState({ inputUrl: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let inputField = document.querySelector("#url-input");
    if (this.state.inputUrl.length === 0) {
      inputField.classList.add("warn");
      return;
    }
    inputField.classList.remove("warn");
    fetch(`https://api.shrtco.de/v2/shorten?url=${this.state.inputUrl}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState((state) => ({
            isLoaded: true,
            linksData: state.linksData.concat(result),
            inputUrl: "",
          }));
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <div className="shorten-section">
        <div className="input-section">
          <form action="" onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.inputUrl}
              placeholder="Shorten a link here..."
              id="url-input"
            />
            <button type="submit" className="shorten-btn">
              Shorten it!
            </button>
          </form>
        </div>
        <div className="links-container">
          {this.state.linksData.map((shortenRes) => {
            if (shortenRes.ok) {
              return (
                <div className="links-section" key={shortenRes.result.code}>
                  <div className="link">
                    <div className="before-link">
                      <p>{shortenRes.result.original_link}</p>
                    </div>
                    <div className="after-links">
                      <p>{shortenRes.result.full_short_link}</p>
                      <button
                        type="submit"
                        id={shortenRes.result.code}
                        className="link-copy-btn"
                        onClick={this.copyLink}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="invalid-container">
                  <h4>Invalid Link</h4>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Shorten;
