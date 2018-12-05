import React from 'react'
import styled from 'styled-components'

import { Card, TextField, ResponsiveStack } from 'serverless-design-system'
import searchIcon from 'src/assets/images/search-icon.svg'

const ExamplesSearchField = styled(TextField)`
    letter-spacing: 0.4px; 
    background: url(${searchIcon}) no-repeat;
    background-position: right 15px center;
    background-color: white;
    background-size: 17.5px;

    &:focus, &:active {
      outline: none;
    }

    @media screen and (max-width: 767px) { 
      border-left: none;
    }

    @media screen and (max-width: 412px) {
      border: none;
    }
`

export default class SearchField extends React.Component {

  constructor (props){
      super(props)
      this.state = {
        filter: {
          
        },
      }
  }

  handQueryFilter = (e) => {
    const updatedFilterObj = this.state.filter
    updatedFilterObj.search = e.target.value 
    this.setState({
      filter: updatedFilterObj
    })
    this.props.refreshSearch(updatedFilterObj)
  }

  render() { 
    return (
    <Card
        boxShadow='2px 2px 8px 0 rgba(0, 0, 0, 0.08)'
        mt={[22, 22, 4]}
        mb={[32, 32, 40]}
        ml={[15,15,0]}
        width={[1, 1, '63.8%', '74%', '84%', 5/6]}
        mr={[15, 15, 22, 22, 32]}
    >
    <ResponsiveStack>
      <ExamplesSearchField
            placeholder='Search for an example'
            height={36}
            width='100%'
            border='none'
            fontSize={14} 
        fontFamily='Serverless'
        placeholderColor='#8c8c8c'
        px={[1,1,2]}
        onChange={this.handQueryFilter}
        className='examples-search'
      />
      </ResponsiveStack>
    </Card>
    
)

      }
    }