import React from "react";
import "./DisplayInfor.scss"

class DisplayInfor extends React.Component {
  state = {
    isShowisUser: true
  }

  handleShowHide = () => {
    this.setState({
      isShowisUser: !this.state.isShowisUser
    });
  }

  render() {
    const { listUsers } = this.props;
    console.log(listUsers);

    return (
      <div className="Displayinfor">
        <div>
          <button onClick={this.handleShowHide}>
            {this.state.isShowisUser === true ? 'Hide list users' : 'Show list users'}
          </button>
        </div>
        {this.state.isShowisUser &&
        <div>
          {listUsers?.map((item) => (
            <div key={item.id} className={+item.age > 18 ? "green" : "red"}>
              <div>Tên tôi là {item.name}</div>
              <div>Tuổi tôi là {item.age}</div>
            </div>
          ))}
        </div>
        }
      </div>
    );
  }
}

export default DisplayInfor;
