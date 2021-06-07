import { Container } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import InputSection from '../components/input-section/input-section.component';
import ResultsSection from '../components/results-section/results-section.component';
import { EOrganizationFields } from '../models/organization.model';
import { SearchTypes } from '../models/search-types';
import { ETicketFields } from '../models/ticket.model';
import { EUserFields } from '../models/user.model';
import './Search.styles.scss';

const SearchPage = () => {
  const [resultJson, setResultJson] = useState({});
  const [searchType, setSearchType] = useState<SearchTypes>(SearchTypes.USER);

  const search = (type: SearchTypes, searchTerm: string, searchValue: string) => axios.get(`http://localhost:8000/${type}?${searchTerm}=${searchValue}`)
    .then((response) => {
      setSearchType(type)
      setResultJson(response.data);
    })
    .catch((error) => alert(error));

  return (
    <div className="search-page">
      <Container maxWidth="lg">
        <div className="search-cards">
          <InputSection
            type={SearchTypes.USER}
            onSearch={search}
            searchTerms={Object.values(EUserFields)}
          />
          <InputSection
            type={SearchTypes.TICKET}
            onSearch={search}
            searchTerms={Object.values(ETicketFields)}
          />
          <InputSection
            type={SearchTypes.ORGANIZATION}
            onSearch={search}
            searchTerms={Object.values(EOrganizationFields)}
          />
        </div>
        <div className="results">
          <ResultsSection type={searchType} resultJson={resultJson} />
        </div>
      </Container>
    </div>
  );
};

export default SearchPage;
