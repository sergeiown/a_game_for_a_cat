'use strict';

export const styles = `
body {
    background-color: #1c1c1c;
    overflow: hidden;
}

#ball {
    width: 150px;
    height: 150px;
    padding: 30px;
    border-radius: 50%;
    position: absolute;
    cursor: pointer;
    background: url('mouse.png') no-repeat center center / 75% 75%;
    transition: transform 0.2s ease;
    z-index: 1;
}

#count {
    position: fixed;
    font-size: 2rem;
    bottom: 0;
    right: 0;
    color: #fff;
    text-shadow: 0 0 5px #fff;
    padding: 10px;

}
`;
