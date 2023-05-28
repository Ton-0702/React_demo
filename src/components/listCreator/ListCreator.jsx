import styled from "styled-components";
import creator1 from "../asset/creator1.svg"
import creator2 from "../asset/creator2.svg"
import creator3 from "../asset/creator3.svg"
import creator4 from "../asset/creator4.svg"
import creator5 from "../asset/creator5.svg"
import creator6 from "../asset/creator6.svg"
import ButtonSideBar from "../button/ButtonSideBar";

const ListCreatorStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;

    .ListCreator__Left{
        display: flex;
        align-items: center;
        
        .span_Left_Text1{
            font-size: 20px;
            font-weight: bold;
            margin-right: 10px;
        }

        .info_Left{
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            color: #747475;
            font-size: 12px;
            font-weight: 400;
            .span_Left_Text2{
                font-size: 16px;
                font-weight: bold;
                color: black;
            }
        }
    }

    .ListCreator__Right{
        display: flex;
        align-items: center;
        float: right
    }
    
`
const trending_creator = [
    {
        index: "1.",
        imgPic: creator1,
        name_creator: "Michael Jordan",
        email: "@jordan_"
    },

    {
        index: "2.",
        imgPic: creator2,
        name_creator: "John Tibao",
        email: "@johnti60"
    },

    {
        index: "3.",
        imgPic: creator3,
        name_creator: "Teressa",
        email: "@teressa"
    },

    {
        index: "4.",
        imgPic: creator4,
        name_creator: "Johan Hawn",
        email: "@j_hawn"
    },

    {
        index: "5.",
        imgPic: creator5,
        name_creator: "Maria Alisson",
        email: "@m_alisson"
    },

    {
        index: "6.",
        imgPic: creator6,
        name_creator: "Sam Erricson",
        email: "@erricsonsam"
    },
]
const ListCreator = () => {
    const ListItems = trending_creator.map(
        (element) => {
            return (
                <ListCreatorStyled>
                    <div className="ListCreator__Left">
                        <span className="span_Left_Text1">{element.index}</span>
                        <img src={element.imgPic} alt="creator" />
                        <div className="info_Left">
                            <span className="span_Left_Text2">{element.name_creator}</span>
                            {element.email}
                        </div>
                    </div>

                    <div className="ListCreator__Right">
                        <ButtonSideBar bgcolor={"rgba(84, 41, 255, 0.1);"} width={85} height={33} borderRadius={30} textColor={"#5429FF"} justify_content={"center"}>Follow</ButtonSideBar>
                    </div>

                </ListCreatorStyled>
            )
        }
    )
    return ListItems
}
export default ListCreator;