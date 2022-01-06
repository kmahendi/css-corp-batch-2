import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { TodoConsumer } from '../../context/todoContext';

const TodoFilter = ({ filterType, loadTodo }) => {
  console.log('TodoFilter');
  return (
    <div className="flex">
      <button
        type="button"
        className={cn('flex-1', {
          'text-red-400': filterType === 'all',
        })}
        onClick={() => loadTodo('all')}
      >
        All
      </button>
      <button
        type="button"
        className={cn('flex-1', {
          'text-red-400': filterType === 'pending',
        })}
        onClick={() => loadTodo('pending')}
      >
        Pending
      </button>
      <button
        type="button"
        className={cn('flex-1', {
          'text-red-400': filterType === 'completed',
        })}
        onClick={() => loadTodo('completed')}
      >
        Completed
      </button>
    </div>
  );
};

TodoFilter.displayName = 'TodoFilter';

TodoFilter.propTypes = {
  filterTodo: PropTypes.func.isRequired,
};

export default memo(TodoFilter);
