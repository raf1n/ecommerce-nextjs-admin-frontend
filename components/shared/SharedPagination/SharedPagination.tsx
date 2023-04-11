import React, { useState, Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";

interface Props {
  count: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const SharedPagination: React.FC<Props> = ({ count, limit, page, setPage }) => {
  const states = useSelector(() => controller.states);

  const pageCount =
    count % limit >= 0 ? Math.ceil(count / limit) : count / limit;

  const pageArray = () => {
    const arr = new Array(pageCount).fill("a").map((a, idx) => idx);

    if (pageCount > 5 && page <= 2) {
      return arr.slice(0, 5);
    }

    if (pageCount > 5 && page > 2 && page + 2 < pageCount) {
      return arr.slice(page - 2, page + 3);
    }

    if (pageCount > 5 && page + 2 >= pageCount) {
      return arr.slice(pageCount - 5, pageCount);
    }

    return arr;
  };

  return (
    <div className="px-5 py-5  border-t flex justify-between">
      <div>
        <span className="text-xs xs:text-sm text-gray-900">
          {!count && `Showing 0 Entries`}
          {count === 1 && `Showing 1 of 1 Entries`}
          {count > 1 &&
            count <= limit &&
            `Showing 1 to ${count} of ${count} Entries`}
          {count > limit &&
            `Showing ${page * limit + 1} to ${
              count < (page + 1) * limit ? count : (page + 1) * limit
            } of ${count} Entries`}
        </span>
      </div>
      {count ? (
        <div className="inline-flex  xs:mt-0">
          {page !== 0 ? (
            <button
              disabled={page <= 0}
              onClick={() => {
                if (page > 0) {
                  setPage((p) => p - 1);
                }
              }}
              className="text-sm text-indigo-400 bg-indigo-50 transition duration-150 hover:bg-indigo-500 hover:text-white   font-semibold py-2 px-4 rounded-l"
            >
              Prev
            </button>
          ) : (
            <></>
          )}
          &nbsp; &nbsp;
          {pageArray().map((p) => (
            <button
              onClick={() => setPage(p)}
              aria-current="page"
              className={`relative z-10 inline-flex items-center  px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20 ${
                page === p ? "bg-indigo-100" : "bg-indigo-50"
              } hover:bg-indigo-500 hover:text-white`}
            >
              {p + 1}
            </button>
          ))}
          &nbsp; &nbsp;
          {page < pageCount - 1 ? (
            <button
              disabled={page >= Math.floor(count / limit)}
              onClick={() => {
                if (page < pageCount - 1) {
                  setPage((p) => p + 1);
                }
              }}
              className="text-sm text-indigo-400 bg-indigo-50 transition duration-150 hover:bg-indigo-500 hover:text-white   font-semibold py-2 px-4 rounded-r"
            >
              Next
            </button>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SharedPagination;
