import Star from '../star/Star';
import PropTypes from 'prop-types';

export default function Stars({ count }) {
    let starsArr;

    if (count > 0 && count < 6 && typeof count !== 'boolean') {
        starsArr = Array(count).fill('star');
    } else {
        return null;
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {starsArr.map((el, index) => <Star key={index} />)}
        </ul>
    )
}

Stars.defaultProps = {
    count: 0
}

Stars.propTypes = {
    count: PropTypes.number
}