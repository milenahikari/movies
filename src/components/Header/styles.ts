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

    > p {
      margin-left: 10px;
      font-size: 25px;
    }

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      background: inherit;

      transform: scale(1);
      animation: ${pulse} 2s infinite;
    }
  }

  > ul {
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

export const ContentNotification = styled.div`
  position: relative;
`;

export const Notifications = styled.div`
  section {
    padding: 10px;
    width: 100%;
    overflow: scroll;

    ul {
      display: inline-block;
      width: 100%;
    }
  }
  width: 250px;
  height: 300px;
  left: 50%;
  top: 50px;
  background: #fff;

  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  transition: opacity 0.4;
  position: absolute;
  bottom: calc(100% +12px);
  transform: translateX(-50%);
  z-index: 9999;
  color: #312e38;

  &::before {
    content: '';
    border-style: solid;
    border-color: #fff transparent;
    border-width: 0px 6px 6px 6px;
    top: -5px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const FavCard = styled.li`
  width: 100%;
  height: 80px;
  background: #fafafa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  img {
    width: 40px;
    border: 1px solid #fafafa;
    border-radius: 2px;
  }

  p {
    font-size: 10px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fafafa;
    border-radius: 50%;
    border: 0;
  }

  & + li {
    margin-top: 5px;
  }
`;

export const Badge = styled.div`
  width: 20px;
  height: 20px;
  background: #aa3d32;
  position: absolute;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  span {
    display: bloc;
    padding: 3px;
    color: #ffffff;
    font-size: 10px;
  }
`;
