import { CircleLoader } from 'react-spinners';



// eslint-disable-next-line react/prop-types
const Loader = ({ isLoading }) => {
    return (
        <div className='container-loader'> <CircleLoader color="purple" size={500} loading={isLoading} /> </div>
    )
}

export default Loader 