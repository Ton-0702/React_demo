import styled from "styled-components";

const DivSearchStyled = styled.div`
    width: 42%;
    height: 36%;
    border: none;
    border-radius: 11px;
    border-radius: 11px;
    /* background-color: red; */
    margin: auto 30px;
    position: relative;

    i{
        position: absolute;
        color: rgb(122, 121, 125);
        top: 50%;
        transform: translate(56%, -46%);
        font-size: 30px;
    }

    .inputSearch{
        width: 100%;
        height: 100%;
        font-size: 20px;
        border-radius: 11px;
        text-indent: 77px;
    }
`

const Search = ({font_awe}) => {
    return <DivSearchStyled>
        <i className={font_awe}></i>
        <input className="inputSearch" type="text" placeholder="Search Item, Collection and Account.." />
    </DivSearchStyled>
}

export default Search;