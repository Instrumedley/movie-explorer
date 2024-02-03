import {IconWrapper} from './IconWrapper';
import favoritesIcon from '../../../app/assets/favoritesIcon.png';

export const FavoritesIcon = () => {
    return (
        <div>
            <IconWrapper type="png" src={favoritesIcon} alt="Add to Favorites" />
        </div>
    );
};


