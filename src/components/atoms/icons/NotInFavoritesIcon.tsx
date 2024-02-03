import {IconWrapper} from './IconWrapper';
import notInFavoritesIcon from '../../../app/assets/notInFavoritesIcon.png';

export const NotInFavoritesIcon = () => {
    return (
        <div>
            <IconWrapper type="png" src={notInFavoritesIcon} alt="Add to Favorites" />
        </div>
    );
};
