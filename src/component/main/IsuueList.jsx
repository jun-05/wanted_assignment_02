import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { useIssueDispatch, useIssueState } from '../../context/IssueContext';
import { getIssues } from './../../reducer/issue/issueAction';

const IsuueList = () => {
  const state = useIssueState();
  const dispatch = useIssueDispatch();
  const { loading, data, error } = state.issues;

  useEffect(() => {
    getIssues(dispatch, 1);
  }, [dispatch]);

  return (
    <IsuueListBlock>
      <div className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
        <a
          href="/"
          className="flex hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm"
        >
          <img
            src="user.avatar"
            alt="user.name"
            className="w-6 h-6 mr-6 rounded-full bg-slate-100 ring-2 ring-white"
            loading="lazy"
          />

          <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
            <div>
              <dt className="sr-only">title</dt>
              <dd className="group-hover:text-white font-semibold text-slate-900">Issue name</dd>
            </div>
            <div>
              <dt className="sr-only">Category</dt>
              <dd className="group-hover:text-blue-200">Name,Date...</dd>
            </div>
            <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
              <dt className="sr-only">Users</dt>
              <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5"></dd>
            </div>
          </dl>
        </a>
      </div>
    </IsuueListBlock>
  );
};
const IsuueListBlock = tw.div``;

export default IsuueList;
