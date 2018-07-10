import PropTypes from 'prop-types';
const TaskType = PropTypes.shape( {
    taskId: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    listId: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired
} )
export default TaskType;