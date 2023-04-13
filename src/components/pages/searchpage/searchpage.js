import { useEffect } from 'react';
import { Hits, SortBy, ClearRefinements, Pagination } from 'react-instantsearch-hooks-web';
import { Link } from 'react-router-dom';
import Facets from '../../algolia/facets/facets';
import ResultTemplate from '../../algolia/results/resultTemplate';
import TopOptions from '../../algolia/topoptions/topoptions';

import './searchpage.css';

export default function SearchPage() {

    return <div className="container max-w-lg px-4 mx-auto mt-px text-left md:max-w-none md:text-center">
        <section className="bg-white py-8">

            <div className="container mx-auto flex items-center flex-wrap  pb-12">

                <div id="search-header" className="w-full z-30 top-0 px-6 py-1">
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                        <Link className="uppercase flex items-center justify-around w-2/12 tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " to="/search">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="red"
                                className="sc-bdvvaa eAsDEz BreadCrumbsstyles__IconHome-justo__sc-r89k9z-3 eTlAkt"
                                viewBox="0 0 22 22"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7 22h8.003v-7.993a1 1 0 00-1-1H7.999a1 1 0 00-1 1V22zM20.625 6.398L11.922.29a1.61 1.61 0 00-1.844 0L1.375 6.397A3.236 3.236 0 000 9.047v8.417C0 19.965 2.024 22 4.513 22h12.974C19.975 22 22 19.965 22 17.464V9.046a3.237 3.237 0 00-1.374-2.648z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="8"
                                fill="#BDBDBD"
                                className="rotate-90"
                                viewBox="0 0 13 8"
                            >
                                <path
                                    fill="#333"
                                    d="M10.46 6.71L6.58 2.83 2.7 6.71A.996.996 0 111.29 5.3L5.88.71a.996.996 0 011.41 0l4.59 4.59c.39.39.39 1.02 0 1.41-.39.38-1.03.39-1.42 0z"
                                ></path>
                            </svg>
                            <span>
                                Store
                            </span>
                        </Link>

                        <div className="flex items-center" id="store-nav-content">

                            <a className="pl-3 flex no-underline hover:text-black shadow-md rounded-md" href="#">
                                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                                </svg>
                                <SortBy
                                    items={[
                                    { label: 'Featured', value: 'sanborns_test' },
                                    { label: 'Price (desc)', value: 'sanborns_test_price_desc' },
                                    { label: 'Price (asc)', value: 'sanborns_test_price_asc' },
                                    ]}
                                />
                            </a>

                            {/* <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                                </svg>

                            </a> */}

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full flex justify-start cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    <ClearRefinements translations={{
                        resetButtonText: 'Quitar filtros',
                    }}/>
                </div>
                <div className="flex flex-wrap w-1/4">
                    <Facets />
                </div>
                <div className="flex flex-wrap w-3/4">
                    <Hits hitComponent={ResultTemplate} />
                </div>
                <div className="flex flex-wrap w-full">
                    <Pagination className="flex w-full justify-center"/>  
                </div>
            </div>
        </section>
    </div>
}