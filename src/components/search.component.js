import React, { useState, useRef, useEffect, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import './search.css'
import { Form, Button, Spinner } from 'react-bootstrap'
import useApiRequest from '../hooks/useApiRequest/'
import { FETCHING, SUCCESS, ERROR } from '../hooks/useApiRequest/actionTypes'

const Search = props => {
    const [city, setCity] = useState('')
    const cityRef = useRef(null)

    const [{ status, response }, makeRequest] = useApiRequest(
        `http://localhost:5000`,
        {
            verb: 'get',
            params: {
                city: city,
                categories: 'icecream',
                sort_by: 'rating',
                limit: 12,
                image: 'true',
            },
        }
    )

    useEffect(() => {
        cityRef.current.focus()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        makeRequest()
    }
    const handleChange = e => {
        setCity(e.target.value)
    }
    return (
        <Fragment>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicCity">
                    <Form.Label>Enter City Name</Form.Label>
                    <Form.Control
                        type="city"
                        placeholder="Enter City"
                        ref={cityRef}
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        Enter the city name to find out best five ice cream
                        stores in that city as per Yelp users
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!city}>
                    {status === FETCHING ? (
                        <span>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            &nbsp;Searching...
                        </span>
                    ) : (
                        <span>Submit</span>
                    )}
                </Button>
            </Form>

            {status === SUCCESS && (
                <Redirect
                    to={{
                        pathname: '/tilesList',
                        state: { stores: response.data, city },
                    }}
                />
            )}
            {status === ERROR && <div>{JSON.stringify(response)}</div>}
        </Fragment>
    )
}

export default Search
