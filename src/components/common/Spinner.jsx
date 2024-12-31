import { BeatLoader } from 'react-spinners';

const Spinner = ({ loading }) => {
  return (
    <div className="spinner-container">
      <BeatLoader size={20} color={'#36D7B7'} loading={loading} />
    </div>
  );
};

export default Spinner;