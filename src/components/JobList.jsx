import {useSelector, useDispatch} from 'react-redux';
import JobPosition from './JobPosition';
import {selectAllPositions, selectVisiblePositions} from './../store/positions/positionsSelectors';
import {selectFilters} from '../store/filters/filtersSelector';
import {addFilter} from './../store/filters/filtersActions';

const JobList = () => {
    const dispatch = useDispatch();
    const activeFilters = useSelector(selectFilters);
    const positions = useSelector(state => selectVisiblePositions(state, activeFilters));

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter));
    }

    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
            ))}
        </div>
    );
}

export default JobList;