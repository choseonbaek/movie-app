import PropTypes from 'prop-types';

interface HomeProps{
    movieDetail :any;
    loading: boolean;
}

const HomePresenter : React.FC<HomeProps> = ({
movieDetail,
loading
}) => {
    return (
        <div>home</div>
    )
}

HomePresenter.propTypes = {
    movieDetail: PropTypes.object,
    loading: PropTypes.bool.isRequired
}

export default HomePresenter;