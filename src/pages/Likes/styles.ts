import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  } to {
    opacity: 1;
    transform: translateX(0)
  }
`;

const pulse = keyframes`
	0% {
		transform: scale(0.80);

	}

	70% {
		transform: scale(2);

	}

	100% {
		transform: scale(0.95);

	}
}`;

export const Container = styled.section`
  animation: ${appearFromLeft} 1s;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;

  h3 {
    margin: 20px 0px;
  }
`;

export const ContentMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`;

export const CardMovie = styled.div`
  background: #fff;
  border: 1px solid #fff;
  border-top-left-radius: 8px;

  &:hover {
    box-shadow: 3px 2px 5px 0px rgba(224, 220, 224, 1);
  }

  header {
    img {
      width: 100%;
      border-radius: 8px;
    }
  }

  div {
    padding: 20px;

    h4 {
      font-weight: bold;
      text-align: center;
    }

    p {
      font-size: 14px;
      margin-top: 20px;
      font-weight: 200;
      color: #666;

      /*Limita texto da descrição*/
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }

  footer {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    cursor: pointer;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border: 0;
      background: inherit;

      &:focus {
        transform: scale(1);
        animation: ${pulse} 2s;
      }
    }
  }
`;
