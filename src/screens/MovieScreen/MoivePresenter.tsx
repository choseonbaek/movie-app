import Loader from "../../components/Loader/Loder";

interface MoivePresenterProps {
    nowPlaying: any[] | null;
    upcoming: any[] | null;
    popular: any[] | null;
    topRated: any[] | null;
    error: string | null;
    loading: boolean;
    popularInfinite: any[] | null;
    nowPlayingInfinite: any[] | null;
    upcomingInfinite: any[] | null;
    topRatedInfinite: any[] | null;
}


const MoivePresenter: React.FC<MoivePresenterProps> = ({
    nowPlaying,
    upcoming,
    popular,
    topRated,

    loading,

    nowPlayingInfinite,
    popularInfinite,
    upcomingInfinite,
    topRatedInfinite
}) => {

    const { location : {pathname}} = window;

    console.log(nowPlaying);

    return loading ? (
            <Loader/>
        ) :
        (
        <div>무비 앱임</div>
        );
}

export default MoivePresenter;