import { css } from 'styled-components';

const mixins = {

    flexRow: css`
    display: flex;
    flex-direction: row
    `,

    flexColumn: css`
    display: flex;
    flex-direction: column
    `,

    flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

    flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,


    boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--colorEmphasis);
    border-radius: 10px;
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(colorEmphasis);
    }
  `,

    list: css`
    ul, li {
        list-style-type: none;
        margin: 0;
        padding: 0;
        }
    padding: 0;
    margin: 0;
    list-style: none;
  `,

    resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default mixins;
