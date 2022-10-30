import React from 'react';

import { convertDate } from '../../utils/convertDate';
import { Link } from 'react-router-dom';

const IssueCard = ({ issueItem }) => {
  const { title, number, created_at, comments, user } = issueItem;

  return (
    <div className="md:px-8 px-4 py-4" key={`issue_${number}`}>
      <Link to={`/detail/${number}`}>
        <div className="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
          <div className="w-fit">
            <p className="mb-4 text-sm font-bold text-gray-800 dark:text-gray-100">
              #{number} {title}
            </p>
            <ul className="mb-5">
              <li className="text-xs text-gray-600 dark:text-gray-400">...content</li>
            </ul>
            <div className="flex flex-wrap items-center">
              <div className="w-7 h-7 bg-cover bg-center rounded-full border-2 border-white relative shadow">
                <img src={user.avatar_url} alt={user.login} className="rounded-full" />
              </div>
              <p className="text-xs ml-1 text-gray-600 dark:text-gray-400"> {user.login}</p>
              <p className="text-xs ml-5 text-gray-600 dark:text-gray-400">
                <strong>created</strong> : {convertDate(created_at)}
              </p>
            </div>
          </div>
          <div className="w-3/12 flex flex-col items-end justify-between">
            <p className="text-xs text-gray-600 dark:text-gray-400 font-bold">
              coments : {comments}
            </p>
          </div>
        </div>{' '}
      </Link>
    </div>
  );
};

export default IssueCard;
