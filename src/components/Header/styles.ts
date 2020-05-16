import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
	0% {
		transform: scale(0.80);

	}

	70% {
		transform: scale(1);

	}

	100% {
		transform: scale(0.80);

	}
}`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;

  div {
    display: flex;
    cursor: pointer;

    p {
      margin-left: 10px;
      font-size: 25px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      background: inherit;

      transform: scale(1);
      animation: ${pulse} 2s infinite;
    }
  }

  ul {
    display: flex;
    list-style: none;

    li {
      margin-right: 50px;
      font-size: 18px;
      color: #626462;
      font-weight: 200;
      cursor: pointer;

      &:hover {
        color: #aa3d32;
        border-bottom: solid 1px #aa3d32;
      }
    }
  }
`;
