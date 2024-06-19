import "./ProgressBar.css";

const ProgressBar = () => {
    return (
        <div className="progress-bar">
        <ul className="stepper">
          <li class="done">
            <div className="item">
              First
            </div>
          </li>
          <li class="wip">
            <div className="item">
              Second
            </div>
          </li>
          <li class="ready">
            <div className="item">
              Third
            </div>
          </li>
        </ul>
      </div>
    );
};

export default ProgressBar;