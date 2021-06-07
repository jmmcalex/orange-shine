// @ts-nocheck

import { Typography } from '@material-ui/core';
import React from 'react';
import { EOrganizationFields } from '../../models/organization.model';
import { SearchTypes } from '../../models/search-types';
import { ETicketFields } from '../../models/ticket.model';
import { EUserFields } from '../../models/user.model';
import './text-result.styles.scss';

type OwnProps = {
  type: SearchTypes,
  json: {}
}

/**
 * this file is super out of hand and needs to be broken up
 * but I dont have much more time this weekend, oops
 */
const TextResult = ({ type, json }: OwnProps) => {
  if (!json.valid) {
    return <Typography variant="h6">No Results Found</Typography>
  }

  return (
    <div className="text-result">
      {/* Where user info is printed, heaven forbid anyone sees this monstrosity of code. Would 100% refactor if I had more time */}
      { type === SearchTypes.USER ? (
        <>
          {Object.values(EUserFields).map(field => {
            return (
              <div key={field} className='text-field'>
                <Typography variant="h6">{field}</Typography>
                <div className='text-spacer' />
                <Typography variant="body1">{String(json[field])}</Typography>
              </div>
            )
          })}
          { json['organization'] ? (
            <div className='text-field'>
              <Typography variant="h6">organization_name</Typography>
              <div className='text-spacer' />
              <Typography variant="body1">{json['organization']}</Typography>
            </div>
          ): null}
          { json['tickets'] ? json['tickets'].map((ticket, index) => (
            <div key={index} className='text-field'>
              <Typography variant="h6">{`ticket_${index}`}</Typography>
              <div className='text-spacer' />
              <Typography variant="body1">{ticket}</Typography>
            </div>
          )) : null}
        </>
      ) : null}

      {/* Prints Ticket Info */}
      { type === SearchTypes.TICKET ? (
        Object.values(ETicketFields).map(field => {
          return (
            <div key={field} className='text-field'>
              <Typography variant="h6">{field}</Typography>
              <div className='text-spacer' />
              {/* @ts-ignore */}
              <Typography variant="body1">{String(json[field])}</Typography>
            </div>
          )
        })
      ) : null}

      {/* Prints Organization Info */}
      { type === SearchTypes.ORGANIZATION ? (
        Object.values(EOrganizationFields).map(field => {
          return (
            <div key={field} className='text-field'>
              <Typography variant="h6">{field}</Typography>
              <div className='text-spacer' />
              {/* @ts-ignore */}
              <Typography variant="body1">{String(json[field])}</Typography>
            </div>
          )
        })
      ) : null}
    </div>
  )
}

export default TextResult;
