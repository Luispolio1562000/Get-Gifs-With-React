import PropTypes from 'prop-types';
import GiftCard from './GiftCard';
import { useFetchGifs } from '../hooks/useFetchGifs';
import Loader from './index';

/* eslint-disable-next-line react/prop-types */
const GiftGrid = ({ category }) => {





    const { gifts, isLoading } = useFetchGifs(category)
  ////  console.log(gifts, isLoading);





    return (
        <>


            {
                isLoading && (<Loader isLoading={isLoading} />)
            }
            {
                gifts.length > 0
                &&
                <div>
                    <h2>{category}</h2>
                    <div className='card-grid'>
                        {

                            gifts.map(gift => (
                                <GiftCard key={gift.id} giftData={gift} {...gift} />
                            ))
                        }

                    </div>
                </div>
            }

        </>
    )
}



GiftGrid.proptypes = {
    category: PropTypes.string.isRequired

}
export default GiftGrid


