import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //같은 폴더에 있는 파일은 ./index.css
import App from './App';
import reportWebVitals from './reportWebVitals';

function Square(props) {

  //() =>을 잊어버리고 onClick={console.log('click')}이라고 작성하는 것은 자주 발생하는 실수이며 컴포넌트가 다시 렌더링할 때마다 경고 창을 띄울 것
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,   //boolean 타입으로 X인지 O인지 선택
    };
  }

  //slicefh 배열(9)을 복사해서 1번째에 X 넣기
  handleClick(i) {
    const squares = this.state.squares.slice();  //slice()는 매개변수 없이 호출하여 배열 전체를 복사

    if (calculateWinner(squares) || squares[i]) {   //승리자 함수가 참인 경우와 이미 칸이 채워진 경우
      return; // 여기서 종료
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';  //xIsnext가 참이면 X 아니면 O로 변경
    this.setState({
      squares: squares,             //복사본으로 업데이트 
      xIsNext: !this.state.xIsNext, //다음 순서는 ! 반대값으로 입력
    });
  }



  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'); //boolean 타입 
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
//승자 결정하기 함수
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {  //squares 배열에서 a, b, c 인덱스의 값이 모두 동일한 경우, 해당 값을 승자로 간주하고 반환
      return squares[a];
    }
  }
  return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
