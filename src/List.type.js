import PropTypes from 'prop-types';
import TaskType from './Task.type.js';

const ListType = PropTypes.shape( {
    listId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(TaskType).isRequired
} )
export default ListType;