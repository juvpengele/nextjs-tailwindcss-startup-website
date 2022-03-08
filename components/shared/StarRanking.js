import PropTypes from "prop-types";
import { IoStar } from 'react-icons/io5'

const rankingArr = ["", "", "", "", ""];

function StarRanking({ rate }) {
    return (
        <div className="flex">
            {
                rankingArr.map((_, index) => (
                    <IoStar 
                        size={20}
                        key={index + 1}
                        color={rate >= index + 1 ? '#FFC042' : '#D0CFD4'}
                    />
                ))
            }
        </div>
    )
}

StarRanking.propTypes = {
    rate: PropTypes.number.isRequired
}

export default StarRanking;
